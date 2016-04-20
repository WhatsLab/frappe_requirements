frappe.listview_settings['DocType Requirement'] = {
        add_fields: ["status", "module"],
        default_filters: [["DocType Requirement", "status", "!=", "Published"]],
	filters: [["status", "!=", "Published"]]
};
