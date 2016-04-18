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
            cur_frm.call({
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
            this.fields_dict[df.fieldname].layout = this;
        }
    });
    
    frappe.ui.form.ControlLink = frappe.ui.form.ControlLink.extend({
        make_input: function(){
            this._super();
            if(this.layout.fields_dict[this.df.fieldname + "___title"] !== undefined){
                this.input.fieldobj = this;
                ___setSmartLink(this);
            }
        }
    });
    
    frappe.ui.form.ControlDynamicLink = frappe.ui.form.ControlDynamicLink.extend({
        make_input: function(){
            this._super();
            if(this.layout.fields_dict[this.df.fieldname + "___title"] !== undefined){
                this.input.fieldobj = this;
                ___setSmartLink(this);
            }
        }
    });
}
