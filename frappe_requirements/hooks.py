# -*- coding: utf-8 -*-
from __future__ import unicode_literals

app_name = "frappe_requirements"
app_title = "Frappe Requirements"
app_publisher = "Matajer.sa"
app_description = "FRS helps system analyst to work side by side with developers creating a perfect systemm"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "sami@matajer.sa"
app_version = "0.0.1"
app_license = "GPL"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/frappe_requirements/css/frappe_requirements.css"
app_include_js = "/assets/frappe_requirements/js/smart_link.js"

# include js, css files in header of web template
# web_include_css = "/assets/frappe_requirements/css/frappe_requirements.css"
# web_include_js = "/assets/frappe_requirements/js/frappe_requirements.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "frappe_requirements.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "frappe_requirements.install.before_install"
# after_install = "frappe_requirements.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "frappe_requirements.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"frappe_requirements.tasks.all"
# 	],
# 	"daily": [
# 		"frappe_requirements.tasks.daily"
# 	],
# 	"hourly": [
# 		"frappe_requirements.tasks.hourly"
# 	],
# 	"weekly": [
# 		"frappe_requirements.tasks.weekly"
# 	]
# 	"monthly": [
# 		"frappe_requirements.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "frappe_requirements.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "frappe_requirements.event.get_events"
# }

