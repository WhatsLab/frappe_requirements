if(typeof ___setSmartLink != 'function'){

    function ___setSmartLink(field){
        //Wait for ___title field to be created
        if(field.layout.fields_dict[field.df.fieldname + "___title"] === undefined){
            setTimeout(___setSmartLink, 100, field);
            return;
        }

        var title = field.layout.fields_dict[field.df.fieldname + "___title"];
        var option = title.df.options.split('.')[1];

        field.$wrapper.css('display', 'none');
        if(field.value && !title.value){
            frappe.call({
                method: "frappe.client.get_value",
                args: {
                    doctype: field.df.options,
                    fieldname: option,
                    filters: {"name": field.value}
                },
                callback: function(r, rt) {
                    title.set_value(r.message[option]);
                }
            });
        }
        //No events if read_only or set_only_once and value is set
        if(!field.input !== undefined){
            title.$wrapper.on('click', function(){
                var title = this.getAttribute("data-fieldname");
                var field = title.replace("___title", "");
                this.fieldobj.layout.fields_dict[field].$wrapper.css('display', '');
                this.fieldobj.layout.fields_dict[field].$input.focus();
                this.fieldobj.layout.fields_dict[title].$wrapper.css('display', 'none');
            });
            field.$input.on('blur', function(){
                var field = this.getAttribute("data-fieldname");
                var title = field + "___title";
                this.fieldobj.layout.fields_dict[field].$wrapper.css('display', 'none');
                this.fieldobj.layout.fields_dict[title].$wrapper.css('display', '');
            });
        }
    }

    //Make sure every field contains a reference to Layout object
    frappe.ui.form.Layout = frappe.ui.form.Layout.extend({
        make_field: function(df, colspan){
            this._super(df, colspan);
            if(this.fields_dict !== undefined){
                this.fields_dict[df.fieldname].layout = this;
            }
        }
    });

    frappe.ui.form.ControlLink = frappe.ui.form.ControlLink.extend({
        make_input: function(){
            this._super();
            if(this.layout !== undefined && this.layout.fields_dict[this.df.fieldname + "___title"] !== undefined){
                this.input.fieldobj = this;
                ___setSmartLink(this);
            }
        }
    });

    frappe.ui.form.ControlDynamicLink = frappe.ui.form.ControlDynamicLink.extend({
        make_input: function(){
            this._super();
            if(this.layout !== undefined && this.layout.fields_dict[this.df.fieldname + "___title"] !== undefined){
                this.input.fieldobj = this;
                ___setSmartLink(this);
            }
        }
    });

    frappe.views.ListView = frappe.views.ListView.extend({
        set_fields: function() {
            this._super();
            var listView = this;
            $.each(this.settings.add_tags || [], function(i, f){
                listView.stats.push(f);
            });
        }
    });

    frappe.views.ListSidebar = frappe.views.ListSidebar.extend({
        render_stat: function(field, stat) {
            if(frappe.meta.docfield_map[this.doctype][field] !== undefined && frappe.meta.docfield_map[this.doctype][field].fieldtype == "Check"){
                for(var i=0; i<stat.length; i++){
                    if(stat[i][0] == "0")
                        stat[i][0] = __("No");
                    else if(stat[i][0] == "1")
                        stat[i][0] = __("Yes");
                }
            }
            this._super(field, stat);
        }
    });
}
