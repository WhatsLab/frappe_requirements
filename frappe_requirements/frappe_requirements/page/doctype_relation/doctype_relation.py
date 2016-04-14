from __future__ import unicode_literals
import frappe

@frappe.whitelist()
def get_doctype_relations():
	docs = []
	for d in frappe.get_list("DocType Requirement", fields=["name"], order_by="name"):
		docs.append(frappe.get_doc("DocType Requirement", d.name))
	return docs


