import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _glpi_agents from  "./glpi_agents.js";
import _glpi_agenttypes from  "./glpi_agenttypes.js";
import _glpi_alerts from  "./glpi_alerts.js";
import _glpi_apiclients from  "./glpi_apiclients.js";
import _glpi_applianceenvironments from  "./glpi_applianceenvironments.js";
import _glpi_appliances from  "./glpi_appliances.js";
import _glpi_appliances_items from  "./glpi_appliances_items.js";
import _glpi_appliances_items_relations from  "./glpi_appliances_items_relations.js";
import _glpi_appliancetypes from  "./glpi_appliancetypes.js";
import _glpi_authldapreplicates from  "./glpi_authldapreplicates.js";
import _glpi_authldaps from  "./glpi_authldaps.js";
import _glpi_authmails from  "./glpi_authmails.js";
import _glpi_autoupdatesystems from  "./glpi_autoupdatesystems.js";
import _glpi_blacklistedmailcontents from  "./glpi_blacklistedmailcontents.js";
import _glpi_blacklists from  "./glpi_blacklists.js";
import _glpi_budgets from  "./glpi_budgets.js";
import _glpi_budgettypes from  "./glpi_budgettypes.js";
import _glpi_businesscriticities from  "./glpi_businesscriticities.js";
import _glpi_cables from  "./glpi_cables.js";
import _glpi_cablestrands from  "./glpi_cablestrands.js";
import _glpi_cabletypes from  "./glpi_cabletypes.js";
import _glpi_calendars from  "./glpi_calendars.js";
import _glpi_calendars_holidays from  "./glpi_calendars_holidays.js";
import _glpi_calendarsegments from  "./glpi_calendarsegments.js";
import _glpi_cartridgeitems from  "./glpi_cartridgeitems.js";
import _glpi_cartridgeitems_printermodels from  "./glpi_cartridgeitems_printermodels.js";
import _glpi_cartridgeitemtypes from  "./glpi_cartridgeitemtypes.js";
import _glpi_cartridges from  "./glpi_cartridges.js";
import _glpi_certificates from  "./glpi_certificates.js";
import _glpi_certificates_items from  "./glpi_certificates_items.js";
import _glpi_certificatetypes from  "./glpi_certificatetypes.js";
import _glpi_changecosts from  "./glpi_changecosts.js";
import _glpi_changes from  "./glpi_changes.js";
import _glpi_changes_groups from  "./glpi_changes_groups.js";
import _glpi_changes_items from  "./glpi_changes_items.js";
import _glpi_changes_problems from  "./glpi_changes_problems.js";
import _glpi_changes_suppliers from  "./glpi_changes_suppliers.js";
import _glpi_changes_tickets from  "./glpi_changes_tickets.js";
import _glpi_changes_users from  "./glpi_changes_users.js";
import _glpi_changetasks from  "./glpi_changetasks.js";
import _glpi_changetemplatehiddenfields from  "./glpi_changetemplatehiddenfields.js";
import _glpi_changetemplatemandatoryfields from  "./glpi_changetemplatemandatoryfields.js";
import _glpi_changetemplatepredefinedfields from  "./glpi_changetemplatepredefinedfields.js";
import _glpi_changetemplates from  "./glpi_changetemplates.js";
import _glpi_changevalidations from  "./glpi_changevalidations.js";
import _glpi_clusters from  "./glpi_clusters.js";
import _glpi_clustertypes from  "./glpi_clustertypes.js";
import _glpi_computerantiviruses from  "./glpi_computerantiviruses.js";
import _glpi_computermodels from  "./glpi_computermodels.js";
import _glpi_computers from  "./glpi_computers.js";
import _glpi_computers_items from  "./glpi_computers_items.js";
import _glpi_computertypes from  "./glpi_computertypes.js";
import _glpi_computervirtualmachines from  "./glpi_computervirtualmachines.js";
import _glpi_configs from  "./glpi_configs.js";
import _glpi_consumableitems from  "./glpi_consumableitems.js";
import _glpi_consumableitemtypes from  "./glpi_consumableitemtypes.js";
import _glpi_consumables from  "./glpi_consumables.js";
import _glpi_contacts from  "./glpi_contacts.js";
import _glpi_contacts_suppliers from  "./glpi_contacts_suppliers.js";
import _glpi_contacttypes from  "./glpi_contacttypes.js";
import _glpi_contractcosts from  "./glpi_contractcosts.js";
import _glpi_contracts from  "./glpi_contracts.js";
import _glpi_contracts_items from  "./glpi_contracts_items.js";
import _glpi_contracts_suppliers from  "./glpi_contracts_suppliers.js";
import _glpi_contracttypes from  "./glpi_contracttypes.js";
import _glpi_crontasklogs from  "./glpi_crontasklogs.js";
import _glpi_crontasks from  "./glpi_crontasks.js";
import _glpi_dashboards_dashboards from  "./glpi_dashboards_dashboards.js";
import _glpi_dashboards_filters from  "./glpi_dashboards_filters.js";
import _glpi_dashboards_items from  "./glpi_dashboards_items.js";
import _glpi_dashboards_rights from  "./glpi_dashboards_rights.js";
import _glpi_databaseinstancecategories from  "./glpi_databaseinstancecategories.js";
import _glpi_databaseinstances from  "./glpi_databaseinstances.js";
import _glpi_databaseinstancetypes from  "./glpi_databaseinstancetypes.js";
import _glpi_databases from  "./glpi_databases.js";
import _glpi_datacenters from  "./glpi_datacenters.js";
import _glpi_dcrooms from  "./glpi_dcrooms.js";
import _glpi_devicebatteries from  "./glpi_devicebatteries.js";
import _glpi_devicebatterymodels from  "./glpi_devicebatterymodels.js";
import _glpi_devicebatterytypes from  "./glpi_devicebatterytypes.js";
import _glpi_devicecameramodels from  "./glpi_devicecameramodels.js";
import _glpi_devicecameras from  "./glpi_devicecameras.js";
import _glpi_devicecasemodels from  "./glpi_devicecasemodels.js";
import _glpi_devicecases from  "./glpi_devicecases.js";
import _glpi_devicecasetypes from  "./glpi_devicecasetypes.js";
import _glpi_devicecontrolmodels from  "./glpi_devicecontrolmodels.js";
import _glpi_devicecontrols from  "./glpi_devicecontrols.js";
import _glpi_devicedrivemodels from  "./glpi_devicedrivemodels.js";
import _glpi_devicedrives from  "./glpi_devicedrives.js";
import _glpi_devicefirmwaremodels from  "./glpi_devicefirmwaremodels.js";
import _glpi_devicefirmwares from  "./glpi_devicefirmwares.js";
import _glpi_devicefirmwaretypes from  "./glpi_devicefirmwaretypes.js";
import _glpi_devicegenericmodels from  "./glpi_devicegenericmodels.js";
import _glpi_devicegenerics from  "./glpi_devicegenerics.js";
import _glpi_devicegenerictypes from  "./glpi_devicegenerictypes.js";
import _glpi_devicegraphiccardmodels from  "./glpi_devicegraphiccardmodels.js";
import _glpi_devicegraphiccards from  "./glpi_devicegraphiccards.js";
import _glpi_deviceharddrivemodels from  "./glpi_deviceharddrivemodels.js";
import _glpi_deviceharddrives from  "./glpi_deviceharddrives.js";
import _glpi_devicememories from  "./glpi_devicememories.js";
import _glpi_devicememorymodels from  "./glpi_devicememorymodels.js";
import _glpi_devicememorytypes from  "./glpi_devicememorytypes.js";
import _glpi_devicemotherboardmodels from  "./glpi_devicemotherboardmodels.js";
import _glpi_devicemotherboards from  "./glpi_devicemotherboards.js";
import _glpi_devicenetworkcardmodels from  "./glpi_devicenetworkcardmodels.js";
import _glpi_devicenetworkcards from  "./glpi_devicenetworkcards.js";
import _glpi_devicepcimodels from  "./glpi_devicepcimodels.js";
import _glpi_devicepcis from  "./glpi_devicepcis.js";
import _glpi_devicepowersupplies from  "./glpi_devicepowersupplies.js";
import _glpi_devicepowersupplymodels from  "./glpi_devicepowersupplymodels.js";
import _glpi_deviceprocessormodels from  "./glpi_deviceprocessormodels.js";
import _glpi_deviceprocessors from  "./glpi_deviceprocessors.js";
import _glpi_devicesensormodels from  "./glpi_devicesensormodels.js";
import _glpi_devicesensors from  "./glpi_devicesensors.js";
import _glpi_devicesensortypes from  "./glpi_devicesensortypes.js";
import _glpi_devicesimcards from  "./glpi_devicesimcards.js";
import _glpi_devicesimcardtypes from  "./glpi_devicesimcardtypes.js";
import _glpi_devicesoundcardmodels from  "./glpi_devicesoundcardmodels.js";
import _glpi_devicesoundcards from  "./glpi_devicesoundcards.js";
import _glpi_displaypreferences from  "./glpi_displaypreferences.js";
import _glpi_documentcategories from  "./glpi_documentcategories.js";
import _glpi_documents from  "./glpi_documents.js";
import _glpi_documents_items from  "./glpi_documents_items.js";
import _glpi_documenttypes from  "./glpi_documenttypes.js";
import _glpi_domainrecords from  "./glpi_domainrecords.js";
import _glpi_domainrecordtypes from  "./glpi_domainrecordtypes.js";
import _glpi_domainrelations from  "./glpi_domainrelations.js";
import _glpi_domains from  "./glpi_domains.js";
import _glpi_domains_items from  "./glpi_domains_items.js";
import _glpi_domaintypes from  "./glpi_domaintypes.js";
import _glpi_dropdowntranslations from  "./glpi_dropdowntranslations.js";
import _glpi_enclosuremodels from  "./glpi_enclosuremodels.js";
import _glpi_enclosures from  "./glpi_enclosures.js";
import _glpi_entities from  "./glpi_entities.js";
import _glpi_entities_knowbaseitems from  "./glpi_entities_knowbaseitems.js";
import _glpi_entities_reminders from  "./glpi_entities_reminders.js";
import _glpi_entities_rssfeeds from  "./glpi_entities_rssfeeds.js";
import _glpi_events from  "./glpi_events.js";
import _glpi_fieldblacklists from  "./glpi_fieldblacklists.js";
import _glpi_fieldunicities from  "./glpi_fieldunicities.js";
import _glpi_filesystems from  "./glpi_filesystems.js";
import _glpi_fqdns from  "./glpi_fqdns.js";
import _glpi_groups from  "./glpi_groups.js";
import _glpi_groups_knowbaseitems from  "./glpi_groups_knowbaseitems.js";
import _glpi_groups_problems from  "./glpi_groups_problems.js";
import _glpi_groups_reminders from  "./glpi_groups_reminders.js";
import _glpi_groups_rssfeeds from  "./glpi_groups_rssfeeds.js";
import _glpi_groups_tickets from  "./glpi_groups_tickets.js";
import _glpi_groups_users from  "./glpi_groups_users.js";
import _glpi_holidays from  "./glpi_holidays.js";
import _glpi_imageformats from  "./glpi_imageformats.js";
import _glpi_imageresolutions from  "./glpi_imageresolutions.js";
import _glpi_impactcompounds from  "./glpi_impactcompounds.js";
import _glpi_impactcontexts from  "./glpi_impactcontexts.js";
import _glpi_impactitems from  "./glpi_impactitems.js";
import _glpi_impactrelations from  "./glpi_impactrelations.js";
import _glpi_infocoms from  "./glpi_infocoms.js";
import _glpi_interfacetypes from  "./glpi_interfacetypes.js";
import _glpi_ipaddresses from  "./glpi_ipaddresses.js";
import _glpi_ipaddresses_ipnetworks from  "./glpi_ipaddresses_ipnetworks.js";
import _glpi_ipnetworks from  "./glpi_ipnetworks.js";
import _glpi_ipnetworks_vlans from  "./glpi_ipnetworks_vlans.js";
import _glpi_items_clusters from  "./glpi_items_clusters.js";
import _glpi_items_devicebatteries from  "./glpi_items_devicebatteries.js";
import _glpi_items_devicecameras from  "./glpi_items_devicecameras.js";
import _glpi_items_devicecameras_imageformats from  "./glpi_items_devicecameras_imageformats.js";
import _glpi_items_devicecameras_imageresolutions from  "./glpi_items_devicecameras_imageresolutions.js";
import _glpi_items_devicecases from  "./glpi_items_devicecases.js";
import _glpi_items_devicecontrols from  "./glpi_items_devicecontrols.js";
import _glpi_items_devicedrives from  "./glpi_items_devicedrives.js";
import _glpi_items_devicefirmwares from  "./glpi_items_devicefirmwares.js";
import _glpi_items_devicegenerics from  "./glpi_items_devicegenerics.js";
import _glpi_items_devicegraphiccards from  "./glpi_items_devicegraphiccards.js";
import _glpi_items_deviceharddrives from  "./glpi_items_deviceharddrives.js";
import _glpi_items_devicememories from  "./glpi_items_devicememories.js";
import _glpi_items_devicemotherboards from  "./glpi_items_devicemotherboards.js";
import _glpi_items_devicenetworkcards from  "./glpi_items_devicenetworkcards.js";
import _glpi_items_devicepcis from  "./glpi_items_devicepcis.js";
import _glpi_items_devicepowersupplies from  "./glpi_items_devicepowersupplies.js";
import _glpi_items_deviceprocessors from  "./glpi_items_deviceprocessors.js";
import _glpi_items_devicesensors from  "./glpi_items_devicesensors.js";
import _glpi_items_devicesimcards from  "./glpi_items_devicesimcards.js";
import _glpi_items_devicesoundcards from  "./glpi_items_devicesoundcards.js";
import _glpi_items_disks from  "./glpi_items_disks.js";
import _glpi_items_enclosures from  "./glpi_items_enclosures.js";
import _glpi_items_kanbans from  "./glpi_items_kanbans.js";
import _glpi_items_operatingsystems from  "./glpi_items_operatingsystems.js";
import _glpi_items_problems from  "./glpi_items_problems.js";
import _glpi_items_projects from  "./glpi_items_projects.js";
import _glpi_items_racks from  "./glpi_items_racks.js";
import _glpi_items_remotemanagements from  "./glpi_items_remotemanagements.js";
import _glpi_items_softwarelicenses from  "./glpi_items_softwarelicenses.js";
import _glpi_items_softwareversions from  "./glpi_items_softwareversions.js";
import _glpi_items_tickets from  "./glpi_items_tickets.js";
import _glpi_itilcategories from  "./glpi_itilcategories.js";
import _glpi_itilfollowups from  "./glpi_itilfollowups.js";
import _glpi_itilfollowuptemplates from  "./glpi_itilfollowuptemplates.js";
import _glpi_itils_projects from  "./glpi_itils_projects.js";
import _glpi_itilsolutions from  "./glpi_itilsolutions.js";
import _glpi_knowbaseitemcategories from  "./glpi_knowbaseitemcategories.js";
import _glpi_knowbaseitems from  "./glpi_knowbaseitems.js";
import _glpi_knowbaseitems_comments from  "./glpi_knowbaseitems_comments.js";
import _glpi_knowbaseitems_items from  "./glpi_knowbaseitems_items.js";
import _glpi_knowbaseitems_knowbaseitemcategories from  "./glpi_knowbaseitems_knowbaseitemcategories.js";
import _glpi_knowbaseitems_profiles from  "./glpi_knowbaseitems_profiles.js";
import _glpi_knowbaseitems_revisions from  "./glpi_knowbaseitems_revisions.js";
import _glpi_knowbaseitems_users from  "./glpi_knowbaseitems_users.js";
import _glpi_knowbaseitemtranslations from  "./glpi_knowbaseitemtranslations.js";
import _glpi_lineoperators from  "./glpi_lineoperators.js";
import _glpi_lines from  "./glpi_lines.js";
import _glpi_linetypes from  "./glpi_linetypes.js";
import _glpi_links from  "./glpi_links.js";
import _glpi_links_itemtypes from  "./glpi_links_itemtypes.js";
import _glpi_locations from  "./glpi_locations.js";
import _glpi_lockedfields from  "./glpi_lockedfields.js";
import _glpi_logs from  "./glpi_logs.js";
import _glpi_mailcollectors from  "./glpi_mailcollectors.js";
import _glpi_manuallinks from  "./glpi_manuallinks.js";
import _glpi_manufacturers from  "./glpi_manufacturers.js";
import _glpi_monitormodels from  "./glpi_monitormodels.js";
import _glpi_monitors from  "./glpi_monitors.js";
import _glpi_monitortypes from  "./glpi_monitortypes.js";
import _glpi_networkaliases from  "./glpi_networkaliases.js";
import _glpi_networkequipmentmodels from  "./glpi_networkequipmentmodels.js";
import _glpi_networkequipments from  "./glpi_networkequipments.js";
import _glpi_networkequipmenttypes from  "./glpi_networkequipmenttypes.js";
import _glpi_networkinterfaces from  "./glpi_networkinterfaces.js";
import _glpi_networknames from  "./glpi_networknames.js";
import _glpi_networkportaggregates from  "./glpi_networkportaggregates.js";
import _glpi_networkportaliases from  "./glpi_networkportaliases.js";
import _glpi_networkportconnectionlogs from  "./glpi_networkportconnectionlogs.js";
import _glpi_networkportdialups from  "./glpi_networkportdialups.js";
import _glpi_networkportethernets from  "./glpi_networkportethernets.js";
import _glpi_networkportfiberchannels from  "./glpi_networkportfiberchannels.js";
import _glpi_networkportfiberchanneltypes from  "./glpi_networkportfiberchanneltypes.js";
import _glpi_networkportlocals from  "./glpi_networkportlocals.js";
import _glpi_networkportmetrics from  "./glpi_networkportmetrics.js";
import _glpi_networkports from  "./glpi_networkports.js";
import _glpi_networkports_networkports from  "./glpi_networkports_networkports.js";
import _glpi_networkports_vlans from  "./glpi_networkports_vlans.js";
import _glpi_networkporttypes from  "./glpi_networkporttypes.js";
import _glpi_networkportwifis from  "./glpi_networkportwifis.js";
import _glpi_networks from  "./glpi_networks.js";
import _glpi_notepads from  "./glpi_notepads.js";
import _glpi_notifications from  "./glpi_notifications.js";
import _glpi_notifications_notificationtemplates from  "./glpi_notifications_notificationtemplates.js";
import _glpi_notificationtargets from  "./glpi_notificationtargets.js";
import _glpi_notificationtemplates from  "./glpi_notificationtemplates.js";
import _glpi_notificationtemplatetranslations from  "./glpi_notificationtemplatetranslations.js";
import _glpi_notimportedemails from  "./glpi_notimportedemails.js";
import _glpi_objectlocks from  "./glpi_objectlocks.js";
import _glpi_olalevelactions from  "./glpi_olalevelactions.js";
import _glpi_olalevelcriterias from  "./glpi_olalevelcriterias.js";
import _glpi_olalevels from  "./glpi_olalevels.js";
import _glpi_olalevels_tickets from  "./glpi_olalevels_tickets.js";
import _glpi_olas from  "./glpi_olas.js";
import _glpi_operatingsystemarchitectures from  "./glpi_operatingsystemarchitectures.js";
import _glpi_operatingsystemeditions from  "./glpi_operatingsystemeditions.js";
import _glpi_operatingsystemkernels from  "./glpi_operatingsystemkernels.js";
import _glpi_operatingsystemkernelversions from  "./glpi_operatingsystemkernelversions.js";
import _glpi_operatingsystems from  "./glpi_operatingsystems.js";
import _glpi_operatingsystemservicepacks from  "./glpi_operatingsystemservicepacks.js";
import _glpi_operatingsystemversions from  "./glpi_operatingsystemversions.js";
import _glpi_passivedcequipmentmodels from  "./glpi_passivedcequipmentmodels.js";
import _glpi_passivedcequipments from  "./glpi_passivedcequipments.js";
import _glpi_passivedcequipmenttypes from  "./glpi_passivedcequipmenttypes.js";
import _glpi_pcivendors from  "./glpi_pcivendors.js";
import _glpi_pdumodels from  "./glpi_pdumodels.js";
import _glpi_pdus from  "./glpi_pdus.js";
import _glpi_pdus_plugs from  "./glpi_pdus_plugs.js";
import _glpi_pdus_racks from  "./glpi_pdus_racks.js";
import _glpi_pdutypes from  "./glpi_pdutypes.js";
import _glpi_pendingreasons from  "./glpi_pendingreasons.js";
import _glpi_pendingreasons_items from  "./glpi_pendingreasons_items.js";
import _glpi_peripheralmodels from  "./glpi_peripheralmodels.js";
import _glpi_peripherals from  "./glpi_peripherals.js";
import _glpi_peripheraltypes from  "./glpi_peripheraltypes.js";
import _glpi_phonemodels from  "./glpi_phonemodels.js";
import _glpi_phonepowersupplies from  "./glpi_phonepowersupplies.js";
import _glpi_phones from  "./glpi_phones.js";
import _glpi_phonetypes from  "./glpi_phonetypes.js";
import _glpi_planningeventcategories from  "./glpi_planningeventcategories.js";
import _glpi_planningexternalevents from  "./glpi_planningexternalevents.js";
import _glpi_planningexternaleventtemplates from  "./glpi_planningexternaleventtemplates.js";
import _glpi_planningrecalls from  "./glpi_planningrecalls.js";
import _glpi_plugins from  "./glpi_plugins.js";
import _glpi_plugs from  "./glpi_plugs.js";
import _glpi_printerlogs from  "./glpi_printerlogs.js";
import _glpi_printermodels from  "./glpi_printermodels.js";
import _glpi_printers from  "./glpi_printers.js";
import _glpi_printers_cartridgeinfos from  "./glpi_printers_cartridgeinfos.js";
import _glpi_printertypes from  "./glpi_printertypes.js";
import _glpi_problemcosts from  "./glpi_problemcosts.js";
import _glpi_problems from  "./glpi_problems.js";
import _glpi_problems_suppliers from  "./glpi_problems_suppliers.js";
import _glpi_problems_tickets from  "./glpi_problems_tickets.js";
import _glpi_problems_users from  "./glpi_problems_users.js";
import _glpi_problemtasks from  "./glpi_problemtasks.js";
import _glpi_problemtemplatehiddenfields from  "./glpi_problemtemplatehiddenfields.js";
import _glpi_problemtemplatemandatoryfields from  "./glpi_problemtemplatemandatoryfields.js";
import _glpi_problemtemplatepredefinedfields from  "./glpi_problemtemplatepredefinedfields.js";
import _glpi_problemtemplates from  "./glpi_problemtemplates.js";
import _glpi_profilerights from  "./glpi_profilerights.js";
import _glpi_profiles from  "./glpi_profiles.js";
import _glpi_profiles_reminders from  "./glpi_profiles_reminders.js";
import _glpi_profiles_rssfeeds from  "./glpi_profiles_rssfeeds.js";
import _glpi_profiles_users from  "./glpi_profiles_users.js";
import _glpi_projectcosts from  "./glpi_projectcosts.js";
import _glpi_projects from  "./glpi_projects.js";
import _glpi_projectstates from  "./glpi_projectstates.js";
import _glpi_projecttasklinks from  "./glpi_projecttasklinks.js";
import _glpi_projecttasks from  "./glpi_projecttasks.js";
import _glpi_projecttasks_tickets from  "./glpi_projecttasks_tickets.js";
import _glpi_projecttaskteams from  "./glpi_projecttaskteams.js";
import _glpi_projecttasktemplates from  "./glpi_projecttasktemplates.js";
import _glpi_projecttasktypes from  "./glpi_projecttasktypes.js";
import _glpi_projectteams from  "./glpi_projectteams.js";
import _glpi_projecttypes from  "./glpi_projecttypes.js";
import _glpi_queuednotifications from  "./glpi_queuednotifications.js";
import _glpi_rackmodels from  "./glpi_rackmodels.js";
import _glpi_racks from  "./glpi_racks.js";
import _glpi_racktypes from  "./glpi_racktypes.js";
import _glpi_recurrentchanges from  "./glpi_recurrentchanges.js";
import _glpi_refusedequipments from  "./glpi_refusedequipments.js";
import _glpi_registeredids from  "./glpi_registeredids.js";
import _glpi_reminders from  "./glpi_reminders.js";
import _glpi_reminders_users from  "./glpi_reminders_users.js";
import _glpi_remindertranslations from  "./glpi_remindertranslations.js";
import _glpi_requesttypes from  "./glpi_requesttypes.js";
import _glpi_reservationitems from  "./glpi_reservationitems.js";
import _glpi_reservations from  "./glpi_reservations.js";
import _glpi_rssfeeds from  "./glpi_rssfeeds.js";
import _glpi_rssfeeds_users from  "./glpi_rssfeeds_users.js";
import _glpi_ruleactions from  "./glpi_ruleactions.js";
import _glpi_rulecriterias from  "./glpi_rulecriterias.js";
import _glpi_rulematchedlogs from  "./glpi_rulematchedlogs.js";
import _glpi_rulerightparameters from  "./glpi_rulerightparameters.js";
import _glpi_rules from  "./glpi_rules.js";
import _glpi_savedsearches from  "./glpi_savedsearches.js";
import _glpi_savedsearches_alerts from  "./glpi_savedsearches_alerts.js";
import _glpi_savedsearches_users from  "./glpi_savedsearches_users.js";
import _glpi_slalevelactions from  "./glpi_slalevelactions.js";
import _glpi_slalevelcriterias from  "./glpi_slalevelcriterias.js";
import _glpi_slalevels from  "./glpi_slalevels.js";
import _glpi_slalevels_tickets from  "./glpi_slalevels_tickets.js";
import _glpi_slas from  "./glpi_slas.js";
import _glpi_slms from  "./glpi_slms.js";
import _glpi_snmpcredentials from  "./glpi_snmpcredentials.js";
import _glpi_socketmodels from  "./glpi_socketmodels.js";
import _glpi_sockets from  "./glpi_sockets.js";
import _glpi_softwarecategories from  "./glpi_softwarecategories.js";
import _glpi_softwarelicenses from  "./glpi_softwarelicenses.js";
import _glpi_softwarelicensetypes from  "./glpi_softwarelicensetypes.js";
import _glpi_softwares from  "./glpi_softwares.js";
import _glpi_softwareversions from  "./glpi_softwareversions.js";
import _glpi_solutiontemplates from  "./glpi_solutiontemplates.js";
import _glpi_solutiontypes from  "./glpi_solutiontypes.js";
import _glpi_ssovariables from  "./glpi_ssovariables.js";
import _glpi_states from  "./glpi_states.js";
import _glpi_suppliers from  "./glpi_suppliers.js";
import _glpi_suppliers_tickets from  "./glpi_suppliers_tickets.js";
import _glpi_suppliertypes from  "./glpi_suppliertypes.js";
import _glpi_taskcategories from  "./glpi_taskcategories.js";
import _glpi_tasktemplates from  "./glpi_tasktemplates.js";
import _glpi_ticketcosts from  "./glpi_ticketcosts.js";
import _glpi_ticketrecurrents from  "./glpi_ticketrecurrents.js";
import _glpi_tickets from  "./glpi_tickets.js";
import _glpi_tickets_contracts from  "./glpi_tickets_contracts.js";
import _glpi_tickets_tickets from  "./glpi_tickets_tickets.js";
import _glpi_tickets_users from  "./glpi_tickets_users.js";
import _glpi_ticketsatisfactions from  "./glpi_ticketsatisfactions.js";
import _glpi_tickettasks from  "./glpi_tickettasks.js";
import _glpi_tickettemplatehiddenfields from  "./glpi_tickettemplatehiddenfields.js";
import _glpi_tickettemplatemandatoryfields from  "./glpi_tickettemplatemandatoryfields.js";
import _glpi_tickettemplatepredefinedfields from  "./glpi_tickettemplatepredefinedfields.js";
import _glpi_tickettemplates from  "./glpi_tickettemplates.js";
import _glpi_ticketvalidations from  "./glpi_ticketvalidations.js";
import _glpi_transfers from  "./glpi_transfers.js";
import _glpi_unmanageds from  "./glpi_unmanageds.js";
import _glpi_usbvendors from  "./glpi_usbvendors.js";
import _glpi_usercategories from  "./glpi_usercategories.js";
import _glpi_useremails from  "./glpi_useremails.js";
import _glpi_users from  "./glpi_users.js";
import _glpi_usertitles from  "./glpi_usertitles.js";
import _glpi_virtualmachinestates from  "./glpi_virtualmachinestates.js";
import _glpi_virtualmachinesystems from  "./glpi_virtualmachinesystems.js";
import _glpi_virtualmachinetypes from  "./glpi_virtualmachinetypes.js";
import _glpi_vlans from  "./glpi_vlans.js";
import _glpi_vobjects from  "./glpi_vobjects.js";
import _glpi_wifinetworks from  "./glpi_wifinetworks.js";

export default function initModels(sequelize) {
  const glpi_agents = _glpi_agents.init(sequelize, DataTypes);
  const glpi_agenttypes = _glpi_agenttypes.init(sequelize, DataTypes);
  const glpi_alerts = _glpi_alerts.init(sequelize, DataTypes);
  const glpi_apiclients = _glpi_apiclients.init(sequelize, DataTypes);
  const glpi_applianceenvironments = _glpi_applianceenvironments.init(sequelize, DataTypes);
  const glpi_appliances = _glpi_appliances.init(sequelize, DataTypes);
  const glpi_appliances_items = _glpi_appliances_items.init(sequelize, DataTypes);
  const glpi_appliances_items_relations = _glpi_appliances_items_relations.init(sequelize, DataTypes);
  const glpi_appliancetypes = _glpi_appliancetypes.init(sequelize, DataTypes);
  const glpi_authldapreplicates = _glpi_authldapreplicates.init(sequelize, DataTypes);
  const glpi_authldaps = _glpi_authldaps.init(sequelize, DataTypes);
  const glpi_authmails = _glpi_authmails.init(sequelize, DataTypes);
  const glpi_autoupdatesystems = _glpi_autoupdatesystems.init(sequelize, DataTypes);
  const glpi_blacklistedmailcontents = _glpi_blacklistedmailcontents.init(sequelize, DataTypes);
  const glpi_blacklists = _glpi_blacklists.init(sequelize, DataTypes);
  const glpi_budgets = _glpi_budgets.init(sequelize, DataTypes);
  const glpi_budgettypes = _glpi_budgettypes.init(sequelize, DataTypes);
  const glpi_businesscriticities = _glpi_businesscriticities.init(sequelize, DataTypes);
  const glpi_cables = _glpi_cables.init(sequelize, DataTypes);
  const glpi_cablestrands = _glpi_cablestrands.init(sequelize, DataTypes);
  const glpi_cabletypes = _glpi_cabletypes.init(sequelize, DataTypes);
  const glpi_calendars = _glpi_calendars.init(sequelize, DataTypes);
  const glpi_calendars_holidays = _glpi_calendars_holidays.init(sequelize, DataTypes);
  const glpi_calendarsegments = _glpi_calendarsegments.init(sequelize, DataTypes);
  const glpi_cartridgeitems = _glpi_cartridgeitems.init(sequelize, DataTypes);
  const glpi_cartridgeitems_printermodels = _glpi_cartridgeitems_printermodels.init(sequelize, DataTypes);
  const glpi_cartridgeitemtypes = _glpi_cartridgeitemtypes.init(sequelize, DataTypes);
  const glpi_cartridges = _glpi_cartridges.init(sequelize, DataTypes);
  const glpi_certificates = _glpi_certificates.init(sequelize, DataTypes);
  const glpi_certificates_items = _glpi_certificates_items.init(sequelize, DataTypes);
  const glpi_certificatetypes = _glpi_certificatetypes.init(sequelize, DataTypes);
  const glpi_changecosts = _glpi_changecosts.init(sequelize, DataTypes);
  const glpi_changes = _glpi_changes.init(sequelize, DataTypes);
  const glpi_changes_groups = _glpi_changes_groups.init(sequelize, DataTypes);
  const glpi_changes_items = _glpi_changes_items.init(sequelize, DataTypes);
  const glpi_changes_problems = _glpi_changes_problems.init(sequelize, DataTypes);
  const glpi_changes_suppliers = _glpi_changes_suppliers.init(sequelize, DataTypes);
  const glpi_changes_tickets = _glpi_changes_tickets.init(sequelize, DataTypes);
  const glpi_changes_users = _glpi_changes_users.init(sequelize, DataTypes);
  const glpi_changetasks = _glpi_changetasks.init(sequelize, DataTypes);
  const glpi_changetemplatehiddenfields = _glpi_changetemplatehiddenfields.init(sequelize, DataTypes);
  const glpi_changetemplatemandatoryfields = _glpi_changetemplatemandatoryfields.init(sequelize, DataTypes);
  const glpi_changetemplatepredefinedfields = _glpi_changetemplatepredefinedfields.init(sequelize, DataTypes);
  const glpi_changetemplates = _glpi_changetemplates.init(sequelize, DataTypes);
  const glpi_changevalidations = _glpi_changevalidations.init(sequelize, DataTypes);
  const glpi_clusters = _glpi_clusters.init(sequelize, DataTypes);
  const glpi_clustertypes = _glpi_clustertypes.init(sequelize, DataTypes);
  const glpi_computerantiviruses = _glpi_computerantiviruses.init(sequelize, DataTypes);
  const glpi_computermodels = _glpi_computermodels.init(sequelize, DataTypes);
  const glpi_computers = _glpi_computers.init(sequelize, DataTypes);
  const glpi_computers_items = _glpi_computers_items.init(sequelize, DataTypes);
  const glpi_computertypes = _glpi_computertypes.init(sequelize, DataTypes);
  const glpi_computervirtualmachines = _glpi_computervirtualmachines.init(sequelize, DataTypes);
  const glpi_configs = _glpi_configs.init(sequelize, DataTypes);
  const glpi_consumableitems = _glpi_consumableitems.init(sequelize, DataTypes);
  const glpi_consumableitemtypes = _glpi_consumableitemtypes.init(sequelize, DataTypes);
  const glpi_consumables = _glpi_consumables.init(sequelize, DataTypes);
  const glpi_contacts = _glpi_contacts.init(sequelize, DataTypes);
  const glpi_contacts_suppliers = _glpi_contacts_suppliers.init(sequelize, DataTypes);
  const glpi_contacttypes = _glpi_contacttypes.init(sequelize, DataTypes);
  const glpi_contractcosts = _glpi_contractcosts.init(sequelize, DataTypes);
  const glpi_contracts = _glpi_contracts.init(sequelize, DataTypes);
  const glpi_contracts_items = _glpi_contracts_items.init(sequelize, DataTypes);
  const glpi_contracts_suppliers = _glpi_contracts_suppliers.init(sequelize, DataTypes);
  const glpi_contracttypes = _glpi_contracttypes.init(sequelize, DataTypes);
  const glpi_crontasklogs = _glpi_crontasklogs.init(sequelize, DataTypes);
  const glpi_crontasks = _glpi_crontasks.init(sequelize, DataTypes);
  const glpi_dashboards_dashboards = _glpi_dashboards_dashboards.init(sequelize, DataTypes);
  const glpi_dashboards_filters = _glpi_dashboards_filters.init(sequelize, DataTypes);
  const glpi_dashboards_items = _glpi_dashboards_items.init(sequelize, DataTypes);
  const glpi_dashboards_rights = _glpi_dashboards_rights.init(sequelize, DataTypes);
  const glpi_databaseinstancecategories = _glpi_databaseinstancecategories.init(sequelize, DataTypes);
  const glpi_databaseinstances = _glpi_databaseinstances.init(sequelize, DataTypes);
  const glpi_databaseinstancetypes = _glpi_databaseinstancetypes.init(sequelize, DataTypes);
  const glpi_databases = _glpi_databases.init(sequelize, DataTypes);
  const glpi_datacenters = _glpi_datacenters.init(sequelize, DataTypes);
  const glpi_dcrooms = _glpi_dcrooms.init(sequelize, DataTypes);
  const glpi_devicebatteries = _glpi_devicebatteries.init(sequelize, DataTypes);
  const glpi_devicebatterymodels = _glpi_devicebatterymodels.init(sequelize, DataTypes);
  const glpi_devicebatterytypes = _glpi_devicebatterytypes.init(sequelize, DataTypes);
  const glpi_devicecameramodels = _glpi_devicecameramodels.init(sequelize, DataTypes);
  const glpi_devicecameras = _glpi_devicecameras.init(sequelize, DataTypes);
  const glpi_devicecasemodels = _glpi_devicecasemodels.init(sequelize, DataTypes);
  const glpi_devicecases = _glpi_devicecases.init(sequelize, DataTypes);
  const glpi_devicecasetypes = _glpi_devicecasetypes.init(sequelize, DataTypes);
  const glpi_devicecontrolmodels = _glpi_devicecontrolmodels.init(sequelize, DataTypes);
  const glpi_devicecontrols = _glpi_devicecontrols.init(sequelize, DataTypes);
  const glpi_devicedrivemodels = _glpi_devicedrivemodels.init(sequelize, DataTypes);
  const glpi_devicedrives = _glpi_devicedrives.init(sequelize, DataTypes);
  const glpi_devicefirmwaremodels = _glpi_devicefirmwaremodels.init(sequelize, DataTypes);
  const glpi_devicefirmwares = _glpi_devicefirmwares.init(sequelize, DataTypes);
  const glpi_devicefirmwaretypes = _glpi_devicefirmwaretypes.init(sequelize, DataTypes);
  const glpi_devicegenericmodels = _glpi_devicegenericmodels.init(sequelize, DataTypes);
  const glpi_devicegenerics = _glpi_devicegenerics.init(sequelize, DataTypes);
  const glpi_devicegenerictypes = _glpi_devicegenerictypes.init(sequelize, DataTypes);
  const glpi_devicegraphiccardmodels = _glpi_devicegraphiccardmodels.init(sequelize, DataTypes);
  const glpi_devicegraphiccards = _glpi_devicegraphiccards.init(sequelize, DataTypes);
  const glpi_deviceharddrivemodels = _glpi_deviceharddrivemodels.init(sequelize, DataTypes);
  const glpi_deviceharddrives = _glpi_deviceharddrives.init(sequelize, DataTypes);
  const glpi_devicememories = _glpi_devicememories.init(sequelize, DataTypes);
  const glpi_devicememorymodels = _glpi_devicememorymodels.init(sequelize, DataTypes);
  const glpi_devicememorytypes = _glpi_devicememorytypes.init(sequelize, DataTypes);
  const glpi_devicemotherboardmodels = _glpi_devicemotherboardmodels.init(sequelize, DataTypes);
  const glpi_devicemotherboards = _glpi_devicemotherboards.init(sequelize, DataTypes);
  const glpi_devicenetworkcardmodels = _glpi_devicenetworkcardmodels.init(sequelize, DataTypes);
  const glpi_devicenetworkcards = _glpi_devicenetworkcards.init(sequelize, DataTypes);
  const glpi_devicepcimodels = _glpi_devicepcimodels.init(sequelize, DataTypes);
  const glpi_devicepcis = _glpi_devicepcis.init(sequelize, DataTypes);
  const glpi_devicepowersupplies = _glpi_devicepowersupplies.init(sequelize, DataTypes);
  const glpi_devicepowersupplymodels = _glpi_devicepowersupplymodels.init(sequelize, DataTypes);
  const glpi_deviceprocessormodels = _glpi_deviceprocessormodels.init(sequelize, DataTypes);
  const glpi_deviceprocessors = _glpi_deviceprocessors.init(sequelize, DataTypes);
  const glpi_devicesensormodels = _glpi_devicesensormodels.init(sequelize, DataTypes);
  const glpi_devicesensors = _glpi_devicesensors.init(sequelize, DataTypes);
  const glpi_devicesensortypes = _glpi_devicesensortypes.init(sequelize, DataTypes);
  const glpi_devicesimcards = _glpi_devicesimcards.init(sequelize, DataTypes);
  const glpi_devicesimcardtypes = _glpi_devicesimcardtypes.init(sequelize, DataTypes);
  const glpi_devicesoundcardmodels = _glpi_devicesoundcardmodels.init(sequelize, DataTypes);
  const glpi_devicesoundcards = _glpi_devicesoundcards.init(sequelize, DataTypes);
  const glpi_displaypreferences = _glpi_displaypreferences.init(sequelize, DataTypes);
  const glpi_documentcategories = _glpi_documentcategories.init(sequelize, DataTypes);
  const glpi_documents = _glpi_documents.init(sequelize, DataTypes);
  const glpi_documents_items = _glpi_documents_items.init(sequelize, DataTypes);
  const glpi_documenttypes = _glpi_documenttypes.init(sequelize, DataTypes);
  const glpi_domainrecords = _glpi_domainrecords.init(sequelize, DataTypes);
  const glpi_domainrecordtypes = _glpi_domainrecordtypes.init(sequelize, DataTypes);
  const glpi_domainrelations = _glpi_domainrelations.init(sequelize, DataTypes);
  const glpi_domains = _glpi_domains.init(sequelize, DataTypes);
  const glpi_domains_items = _glpi_domains_items.init(sequelize, DataTypes);
  const glpi_domaintypes = _glpi_domaintypes.init(sequelize, DataTypes);
  const glpi_dropdowntranslations = _glpi_dropdowntranslations.init(sequelize, DataTypes);
  const glpi_enclosuremodels = _glpi_enclosuremodels.init(sequelize, DataTypes);
  const glpi_enclosures = _glpi_enclosures.init(sequelize, DataTypes);
  const glpi_entities = _glpi_entities.init(sequelize, DataTypes);
  const glpi_entities_knowbaseitems = _glpi_entities_knowbaseitems.init(sequelize, DataTypes);
  const glpi_entities_reminders = _glpi_entities_reminders.init(sequelize, DataTypes);
  const glpi_entities_rssfeeds = _glpi_entities_rssfeeds.init(sequelize, DataTypes);
  const glpi_events = _glpi_events.init(sequelize, DataTypes);
  const glpi_fieldblacklists = _glpi_fieldblacklists.init(sequelize, DataTypes);
  const glpi_fieldunicities = _glpi_fieldunicities.init(sequelize, DataTypes);
  const glpi_filesystems = _glpi_filesystems.init(sequelize, DataTypes);
  const glpi_fqdns = _glpi_fqdns.init(sequelize, DataTypes);
  const glpi_groups = _glpi_groups.init(sequelize, DataTypes);
  const glpi_groups_knowbaseitems = _glpi_groups_knowbaseitems.init(sequelize, DataTypes);
  const glpi_groups_problems = _glpi_groups_problems.init(sequelize, DataTypes);
  const glpi_groups_reminders = _glpi_groups_reminders.init(sequelize, DataTypes);
  const glpi_groups_rssfeeds = _glpi_groups_rssfeeds.init(sequelize, DataTypes);
  const glpi_groups_tickets = _glpi_groups_tickets.init(sequelize, DataTypes);
  const glpi_groups_users = _glpi_groups_users.init(sequelize, DataTypes);
  const glpi_holidays = _glpi_holidays.init(sequelize, DataTypes);
  const glpi_imageformats = _glpi_imageformats.init(sequelize, DataTypes);
  const glpi_imageresolutions = _glpi_imageresolutions.init(sequelize, DataTypes);
  const glpi_impactcompounds = _glpi_impactcompounds.init(sequelize, DataTypes);
  const glpi_impactcontexts = _glpi_impactcontexts.init(sequelize, DataTypes);
  const glpi_impactitems = _glpi_impactitems.init(sequelize, DataTypes);
  const glpi_impactrelations = _glpi_impactrelations.init(sequelize, DataTypes);
  const glpi_infocoms = _glpi_infocoms.init(sequelize, DataTypes);
  const glpi_interfacetypes = _glpi_interfacetypes.init(sequelize, DataTypes);
  const glpi_ipaddresses = _glpi_ipaddresses.init(sequelize, DataTypes);
  const glpi_ipaddresses_ipnetworks = _glpi_ipaddresses_ipnetworks.init(sequelize, DataTypes);
  const glpi_ipnetworks = _glpi_ipnetworks.init(sequelize, DataTypes);
  const glpi_ipnetworks_vlans = _glpi_ipnetworks_vlans.init(sequelize, DataTypes);
  const glpi_items_clusters = _glpi_items_clusters.init(sequelize, DataTypes);
  const glpi_items_devicebatteries = _glpi_items_devicebatteries.init(sequelize, DataTypes);
  const glpi_items_devicecameras = _glpi_items_devicecameras.init(sequelize, DataTypes);
  const glpi_items_devicecameras_imageformats = _glpi_items_devicecameras_imageformats.init(sequelize, DataTypes);
  const glpi_items_devicecameras_imageresolutions = _glpi_items_devicecameras_imageresolutions.init(sequelize, DataTypes);
  const glpi_items_devicecases = _glpi_items_devicecases.init(sequelize, DataTypes);
  const glpi_items_devicecontrols = _glpi_items_devicecontrols.init(sequelize, DataTypes);
  const glpi_items_devicedrives = _glpi_items_devicedrives.init(sequelize, DataTypes);
  const glpi_items_devicefirmwares = _glpi_items_devicefirmwares.init(sequelize, DataTypes);
  const glpi_items_devicegenerics = _glpi_items_devicegenerics.init(sequelize, DataTypes);
  const glpi_items_devicegraphiccards = _glpi_items_devicegraphiccards.init(sequelize, DataTypes);
  const glpi_items_deviceharddrives = _glpi_items_deviceharddrives.init(sequelize, DataTypes);
  const glpi_items_devicememories = _glpi_items_devicememories.init(sequelize, DataTypes);
  const glpi_items_devicemotherboards = _glpi_items_devicemotherboards.init(sequelize, DataTypes);
  const glpi_items_devicenetworkcards = _glpi_items_devicenetworkcards.init(sequelize, DataTypes);
  const glpi_items_devicepcis = _glpi_items_devicepcis.init(sequelize, DataTypes);
  const glpi_items_devicepowersupplies = _glpi_items_devicepowersupplies.init(sequelize, DataTypes);
  const glpi_items_deviceprocessors = _glpi_items_deviceprocessors.init(sequelize, DataTypes);
  const glpi_items_devicesensors = _glpi_items_devicesensors.init(sequelize, DataTypes);
  const glpi_items_devicesimcards = _glpi_items_devicesimcards.init(sequelize, DataTypes);
  const glpi_items_devicesoundcards = _glpi_items_devicesoundcards.init(sequelize, DataTypes);
  const glpi_items_disks = _glpi_items_disks.init(sequelize, DataTypes);
  const glpi_items_enclosures = _glpi_items_enclosures.init(sequelize, DataTypes);
  const glpi_items_kanbans = _glpi_items_kanbans.init(sequelize, DataTypes);
  const glpi_items_operatingsystems = _glpi_items_operatingsystems.init(sequelize, DataTypes);
  const glpi_items_problems = _glpi_items_problems.init(sequelize, DataTypes);
  const glpi_items_projects = _glpi_items_projects.init(sequelize, DataTypes);
  const glpi_items_racks = _glpi_items_racks.init(sequelize, DataTypes);
  const glpi_items_remotemanagements = _glpi_items_remotemanagements.init(sequelize, DataTypes);
  const glpi_items_softwarelicenses = _glpi_items_softwarelicenses.init(sequelize, DataTypes);
  const glpi_items_softwareversions = _glpi_items_softwareversions.init(sequelize, DataTypes);
  const glpi_items_tickets = _glpi_items_tickets.init(sequelize, DataTypes);
  const glpi_itilcategories = _glpi_itilcategories.init(sequelize, DataTypes);
  const glpi_itilfollowups = _glpi_itilfollowups.init(sequelize, DataTypes);
  const glpi_itilfollowuptemplates = _glpi_itilfollowuptemplates.init(sequelize, DataTypes);
  const glpi_itils_projects = _glpi_itils_projects.init(sequelize, DataTypes);
  const glpi_itilsolutions = _glpi_itilsolutions.init(sequelize, DataTypes);
  const glpi_knowbaseitemcategories = _glpi_knowbaseitemcategories.init(sequelize, DataTypes);
  const glpi_knowbaseitems = _glpi_knowbaseitems.init(sequelize, DataTypes);
  const glpi_knowbaseitems_comments = _glpi_knowbaseitems_comments.init(sequelize, DataTypes);
  const glpi_knowbaseitems_items = _glpi_knowbaseitems_items.init(sequelize, DataTypes);
  const glpi_knowbaseitems_knowbaseitemcategories = _glpi_knowbaseitems_knowbaseitemcategories.init(sequelize, DataTypes);
  const glpi_knowbaseitems_profiles = _glpi_knowbaseitems_profiles.init(sequelize, DataTypes);
  const glpi_knowbaseitems_revisions = _glpi_knowbaseitems_revisions.init(sequelize, DataTypes);
  const glpi_knowbaseitems_users = _glpi_knowbaseitems_users.init(sequelize, DataTypes);
  const glpi_knowbaseitemtranslations = _glpi_knowbaseitemtranslations.init(sequelize, DataTypes);
  const glpi_lineoperators = _glpi_lineoperators.init(sequelize, DataTypes);
  const glpi_lines = _glpi_lines.init(sequelize, DataTypes);
  const glpi_linetypes = _glpi_linetypes.init(sequelize, DataTypes);
  const glpi_links = _glpi_links.init(sequelize, DataTypes);
  const glpi_links_itemtypes = _glpi_links_itemtypes.init(sequelize, DataTypes);
  const glpi_locations = _glpi_locations.init(sequelize, DataTypes);
  const glpi_lockedfields = _glpi_lockedfields.init(sequelize, DataTypes);
  const glpi_logs = _glpi_logs.init(sequelize, DataTypes);
  const glpi_mailcollectors = _glpi_mailcollectors.init(sequelize, DataTypes);
  const glpi_manuallinks = _glpi_manuallinks.init(sequelize, DataTypes);
  const glpi_manufacturers = _glpi_manufacturers.init(sequelize, DataTypes);
  const glpi_monitormodels = _glpi_monitormodels.init(sequelize, DataTypes);
  const glpi_monitors = _glpi_monitors.init(sequelize, DataTypes);
  const glpi_monitortypes = _glpi_monitortypes.init(sequelize, DataTypes);
  const glpi_networkaliases = _glpi_networkaliases.init(sequelize, DataTypes);
  const glpi_networkequipmentmodels = _glpi_networkequipmentmodels.init(sequelize, DataTypes);
  const glpi_networkequipments = _glpi_networkequipments.init(sequelize, DataTypes);
  const glpi_networkequipmenttypes = _glpi_networkequipmenttypes.init(sequelize, DataTypes);
  const glpi_networkinterfaces = _glpi_networkinterfaces.init(sequelize, DataTypes);
  const glpi_networknames = _glpi_networknames.init(sequelize, DataTypes);
  const glpi_networkportaggregates = _glpi_networkportaggregates.init(sequelize, DataTypes);
  const glpi_networkportaliases = _glpi_networkportaliases.init(sequelize, DataTypes);
  const glpi_networkportconnectionlogs = _glpi_networkportconnectionlogs.init(sequelize, DataTypes);
  const glpi_networkportdialups = _glpi_networkportdialups.init(sequelize, DataTypes);
  const glpi_networkportethernets = _glpi_networkportethernets.init(sequelize, DataTypes);
  const glpi_networkportfiberchannels = _glpi_networkportfiberchannels.init(sequelize, DataTypes);
  const glpi_networkportfiberchanneltypes = _glpi_networkportfiberchanneltypes.init(sequelize, DataTypes);
  const glpi_networkportlocals = _glpi_networkportlocals.init(sequelize, DataTypes);
  const glpi_networkportmetrics = _glpi_networkportmetrics.init(sequelize, DataTypes);
  const glpi_networkports = _glpi_networkports.init(sequelize, DataTypes);
  const glpi_networkports_networkports = _glpi_networkports_networkports.init(sequelize, DataTypes);
  const glpi_networkports_vlans = _glpi_networkports_vlans.init(sequelize, DataTypes);
  const glpi_networkporttypes = _glpi_networkporttypes.init(sequelize, DataTypes);
  const glpi_networkportwifis = _glpi_networkportwifis.init(sequelize, DataTypes);
  const glpi_networks = _glpi_networks.init(sequelize, DataTypes);
  const glpi_notepads = _glpi_notepads.init(sequelize, DataTypes);
  const glpi_notifications = _glpi_notifications.init(sequelize, DataTypes);
  const glpi_notifications_notificationtemplates = _glpi_notifications_notificationtemplates.init(sequelize, DataTypes);
  const glpi_notificationtargets = _glpi_notificationtargets.init(sequelize, DataTypes);
  const glpi_notificationtemplates = _glpi_notificationtemplates.init(sequelize, DataTypes);
  const glpi_notificationtemplatetranslations = _glpi_notificationtemplatetranslations.init(sequelize, DataTypes);
  const glpi_notimportedemails = _glpi_notimportedemails.init(sequelize, DataTypes);
  const glpi_objectlocks = _glpi_objectlocks.init(sequelize, DataTypes);
  const glpi_olalevelactions = _glpi_olalevelactions.init(sequelize, DataTypes);
  const glpi_olalevelcriterias = _glpi_olalevelcriterias.init(sequelize, DataTypes);
  const glpi_olalevels = _glpi_olalevels.init(sequelize, DataTypes);
  const glpi_olalevels_tickets = _glpi_olalevels_tickets.init(sequelize, DataTypes);
  const glpi_olas = _glpi_olas.init(sequelize, DataTypes);
  const glpi_operatingsystemarchitectures = _glpi_operatingsystemarchitectures.init(sequelize, DataTypes);
  const glpi_operatingsystemeditions = _glpi_operatingsystemeditions.init(sequelize, DataTypes);
  const glpi_operatingsystemkernels = _glpi_operatingsystemkernels.init(sequelize, DataTypes);
  const glpi_operatingsystemkernelversions = _glpi_operatingsystemkernelversions.init(sequelize, DataTypes);
  const glpi_operatingsystems = _glpi_operatingsystems.init(sequelize, DataTypes);
  const glpi_operatingsystemservicepacks = _glpi_operatingsystemservicepacks.init(sequelize, DataTypes);
  const glpi_operatingsystemversions = _glpi_operatingsystemversions.init(sequelize, DataTypes);
  const glpi_passivedcequipmentmodels = _glpi_passivedcequipmentmodels.init(sequelize, DataTypes);
  const glpi_passivedcequipments = _glpi_passivedcequipments.init(sequelize, DataTypes);
  const glpi_passivedcequipmenttypes = _glpi_passivedcequipmenttypes.init(sequelize, DataTypes);
  const glpi_pcivendors = _glpi_pcivendors.init(sequelize, DataTypes);
  const glpi_pdumodels = _glpi_pdumodels.init(sequelize, DataTypes);
  const glpi_pdus = _glpi_pdus.init(sequelize, DataTypes);
  const glpi_pdus_plugs = _glpi_pdus_plugs.init(sequelize, DataTypes);
  const glpi_pdus_racks = _glpi_pdus_racks.init(sequelize, DataTypes);
  const glpi_pdutypes = _glpi_pdutypes.init(sequelize, DataTypes);
  const glpi_pendingreasons = _glpi_pendingreasons.init(sequelize, DataTypes);
  const glpi_pendingreasons_items = _glpi_pendingreasons_items.init(sequelize, DataTypes);
  const glpi_peripheralmodels = _glpi_peripheralmodels.init(sequelize, DataTypes);
  const glpi_peripherals = _glpi_peripherals.init(sequelize, DataTypes);
  const glpi_peripheraltypes = _glpi_peripheraltypes.init(sequelize, DataTypes);
  const glpi_phonemodels = _glpi_phonemodels.init(sequelize, DataTypes);
  const glpi_phonepowersupplies = _glpi_phonepowersupplies.init(sequelize, DataTypes);
  const glpi_phones = _glpi_phones.init(sequelize, DataTypes);
  const glpi_phonetypes = _glpi_phonetypes.init(sequelize, DataTypes);
  const glpi_planningeventcategories = _glpi_planningeventcategories.init(sequelize, DataTypes);
  const glpi_planningexternalevents = _glpi_planningexternalevents.init(sequelize, DataTypes);
  const glpi_planningexternaleventtemplates = _glpi_planningexternaleventtemplates.init(sequelize, DataTypes);
  const glpi_planningrecalls = _glpi_planningrecalls.init(sequelize, DataTypes);
  const glpi_plugins = _glpi_plugins.init(sequelize, DataTypes);
  const glpi_plugs = _glpi_plugs.init(sequelize, DataTypes);
  const glpi_printerlogs = _glpi_printerlogs.init(sequelize, DataTypes);
  const glpi_printermodels = _glpi_printermodels.init(sequelize, DataTypes);
  const glpi_printers = _glpi_printers.init(sequelize, DataTypes);
  const glpi_printers_cartridgeinfos = _glpi_printers_cartridgeinfos.init(sequelize, DataTypes);
  const glpi_printertypes = _glpi_printertypes.init(sequelize, DataTypes);
  const glpi_problemcosts = _glpi_problemcosts.init(sequelize, DataTypes);
  const glpi_problems = _glpi_problems.init(sequelize, DataTypes);
  const glpi_problems_suppliers = _glpi_problems_suppliers.init(sequelize, DataTypes);
  const glpi_problems_tickets = _glpi_problems_tickets.init(sequelize, DataTypes);
  const glpi_problems_users = _glpi_problems_users.init(sequelize, DataTypes);
  const glpi_problemtasks = _glpi_problemtasks.init(sequelize, DataTypes);
  const glpi_problemtemplatehiddenfields = _glpi_problemtemplatehiddenfields.init(sequelize, DataTypes);
  const glpi_problemtemplatemandatoryfields = _glpi_problemtemplatemandatoryfields.init(sequelize, DataTypes);
  const glpi_problemtemplatepredefinedfields = _glpi_problemtemplatepredefinedfields.init(sequelize, DataTypes);
  const glpi_problemtemplates = _glpi_problemtemplates.init(sequelize, DataTypes);
  const glpi_profilerights = _glpi_profilerights.init(sequelize, DataTypes);
  const glpi_profiles = _glpi_profiles.init(sequelize, DataTypes);
  const glpi_profiles_reminders = _glpi_profiles_reminders.init(sequelize, DataTypes);
  const glpi_profiles_rssfeeds = _glpi_profiles_rssfeeds.init(sequelize, DataTypes);
  const glpi_profiles_users = _glpi_profiles_users.init(sequelize, DataTypes);
  const glpi_projectcosts = _glpi_projectcosts.init(sequelize, DataTypes);
  const glpi_projects = _glpi_projects.init(sequelize, DataTypes);
  const glpi_projectstates = _glpi_projectstates.init(sequelize, DataTypes);
  const glpi_projecttasklinks = _glpi_projecttasklinks.init(sequelize, DataTypes);
  const glpi_projecttasks = _glpi_projecttasks.init(sequelize, DataTypes);
  const glpi_projecttasks_tickets = _glpi_projecttasks_tickets.init(sequelize, DataTypes);
  const glpi_projecttaskteams = _glpi_projecttaskteams.init(sequelize, DataTypes);
  const glpi_projecttasktemplates = _glpi_projecttasktemplates.init(sequelize, DataTypes);
  const glpi_projecttasktypes = _glpi_projecttasktypes.init(sequelize, DataTypes);
  const glpi_projectteams = _glpi_projectteams.init(sequelize, DataTypes);
  const glpi_projecttypes = _glpi_projecttypes.init(sequelize, DataTypes);
  const glpi_queuednotifications = _glpi_queuednotifications.init(sequelize, DataTypes);
  const glpi_rackmodels = _glpi_rackmodels.init(sequelize, DataTypes);
  const glpi_racks = _glpi_racks.init(sequelize, DataTypes);
  const glpi_racktypes = _glpi_racktypes.init(sequelize, DataTypes);
  const glpi_recurrentchanges = _glpi_recurrentchanges.init(sequelize, DataTypes);
  const glpi_refusedequipments = _glpi_refusedequipments.init(sequelize, DataTypes);
  const glpi_registeredids = _glpi_registeredids.init(sequelize, DataTypes);
  const glpi_reminders = _glpi_reminders.init(sequelize, DataTypes);
  const glpi_reminders_users = _glpi_reminders_users.init(sequelize, DataTypes);
  const glpi_remindertranslations = _glpi_remindertranslations.init(sequelize, DataTypes);
  const glpi_requesttypes = _glpi_requesttypes.init(sequelize, DataTypes);
  const glpi_reservationitems = _glpi_reservationitems.init(sequelize, DataTypes);
  const glpi_reservations = _glpi_reservations.init(sequelize, DataTypes);
  const glpi_rssfeeds = _glpi_rssfeeds.init(sequelize, DataTypes);
  const glpi_rssfeeds_users = _glpi_rssfeeds_users.init(sequelize, DataTypes);
  const glpi_ruleactions = _glpi_ruleactions.init(sequelize, DataTypes);
  const glpi_rulecriterias = _glpi_rulecriterias.init(sequelize, DataTypes);
  const glpi_rulematchedlogs = _glpi_rulematchedlogs.init(sequelize, DataTypes);
  const glpi_rulerightparameters = _glpi_rulerightparameters.init(sequelize, DataTypes);
  const glpi_rules = _glpi_rules.init(sequelize, DataTypes);
  const glpi_savedsearches = _glpi_savedsearches.init(sequelize, DataTypes);
  const glpi_savedsearches_alerts = _glpi_savedsearches_alerts.init(sequelize, DataTypes);
  const glpi_savedsearches_users = _glpi_savedsearches_users.init(sequelize, DataTypes);
  const glpi_slalevelactions = _glpi_slalevelactions.init(sequelize, DataTypes);
  const glpi_slalevelcriterias = _glpi_slalevelcriterias.init(sequelize, DataTypes);
  const glpi_slalevels = _glpi_slalevels.init(sequelize, DataTypes);
  const glpi_slalevels_tickets = _glpi_slalevels_tickets.init(sequelize, DataTypes);
  const glpi_slas = _glpi_slas.init(sequelize, DataTypes);
  const glpi_slms = _glpi_slms.init(sequelize, DataTypes);
  const glpi_snmpcredentials = _glpi_snmpcredentials.init(sequelize, DataTypes);
  const glpi_socketmodels = _glpi_socketmodels.init(sequelize, DataTypes);
  const glpi_sockets = _glpi_sockets.init(sequelize, DataTypes);
  const glpi_softwarecategories = _glpi_softwarecategories.init(sequelize, DataTypes);
  const glpi_softwarelicenses = _glpi_softwarelicenses.init(sequelize, DataTypes);
  const glpi_softwarelicensetypes = _glpi_softwarelicensetypes.init(sequelize, DataTypes);
  const glpi_softwares = _glpi_softwares.init(sequelize, DataTypes);
  const glpi_softwareversions = _glpi_softwareversions.init(sequelize, DataTypes);
  const glpi_solutiontemplates = _glpi_solutiontemplates.init(sequelize, DataTypes);
  const glpi_solutiontypes = _glpi_solutiontypes.init(sequelize, DataTypes);
  const glpi_ssovariables = _glpi_ssovariables.init(sequelize, DataTypes);
  const glpi_states = _glpi_states.init(sequelize, DataTypes);
  const glpi_suppliers = _glpi_suppliers.init(sequelize, DataTypes);
  const glpi_suppliers_tickets = _glpi_suppliers_tickets.init(sequelize, DataTypes);
  const glpi_suppliertypes = _glpi_suppliertypes.init(sequelize, DataTypes);
  const glpi_taskcategories = _glpi_taskcategories.init(sequelize, DataTypes);
  const glpi_tasktemplates = _glpi_tasktemplates.init(sequelize, DataTypes);
  const glpi_ticketcosts = _glpi_ticketcosts.init(sequelize, DataTypes);
  const glpi_ticketrecurrents = _glpi_ticketrecurrents.init(sequelize, DataTypes);
  const glpi_tickets = _glpi_tickets.init(sequelize, DataTypes);
  const glpi_tickets_contracts = _glpi_tickets_contracts.init(sequelize, DataTypes);
  const glpi_tickets_tickets = _glpi_tickets_tickets.init(sequelize, DataTypes);
  const glpi_tickets_users = _glpi_tickets_users.init(sequelize, DataTypes);
  const glpi_ticketsatisfactions = _glpi_ticketsatisfactions.init(sequelize, DataTypes);
  const glpi_tickettasks = _glpi_tickettasks.init(sequelize, DataTypes);
  const glpi_tickettemplatehiddenfields = _glpi_tickettemplatehiddenfields.init(sequelize, DataTypes);
  const glpi_tickettemplatemandatoryfields = _glpi_tickettemplatemandatoryfields.init(sequelize, DataTypes);
  const glpi_tickettemplatepredefinedfields = _glpi_tickettemplatepredefinedfields.init(sequelize, DataTypes);
  const glpi_tickettemplates = _glpi_tickettemplates.init(sequelize, DataTypes);
  const glpi_ticketvalidations = _glpi_ticketvalidations.init(sequelize, DataTypes);
  const glpi_transfers = _glpi_transfers.init(sequelize, DataTypes);
  const glpi_unmanageds = _glpi_unmanageds.init(sequelize, DataTypes);
  const glpi_usbvendors = _glpi_usbvendors.init(sequelize, DataTypes);
  const glpi_usercategories = _glpi_usercategories.init(sequelize, DataTypes);
  const glpi_useremails = _glpi_useremails.init(sequelize, DataTypes);
  const glpi_users = _glpi_users.init(sequelize, DataTypes);
  const glpi_usertitles = _glpi_usertitles.init(sequelize, DataTypes);
  const glpi_virtualmachinestates = _glpi_virtualmachinestates.init(sequelize, DataTypes);
  const glpi_virtualmachinesystems = _glpi_virtualmachinesystems.init(sequelize, DataTypes);
  const glpi_virtualmachinetypes = _glpi_virtualmachinetypes.init(sequelize, DataTypes);
  const glpi_vlans = _glpi_vlans.init(sequelize, DataTypes);
  const glpi_vobjects = _glpi_vobjects.init(sequelize, DataTypes);
  const glpi_wifinetworks = _glpi_wifinetworks.init(sequelize, DataTypes);


  return {
    glpi_agents,
    glpi_agenttypes,
    glpi_alerts,
    glpi_apiclients,
    glpi_applianceenvironments,
    glpi_appliances,
    glpi_appliances_items,
    glpi_appliances_items_relations,
    glpi_appliancetypes,
    glpi_authldapreplicates,
    glpi_authldaps,
    glpi_authmails,
    glpi_autoupdatesystems,
    glpi_blacklistedmailcontents,
    glpi_blacklists,
    glpi_budgets,
    glpi_budgettypes,
    glpi_businesscriticities,
    glpi_cables,
    glpi_cablestrands,
    glpi_cabletypes,
    glpi_calendars,
    glpi_calendars_holidays,
    glpi_calendarsegments,
    glpi_cartridgeitems,
    glpi_cartridgeitems_printermodels,
    glpi_cartridgeitemtypes,
    glpi_cartridges,
    glpi_certificates,
    glpi_certificates_items,
    glpi_certificatetypes,
    glpi_changecosts,
    glpi_changes,
    glpi_changes_groups,
    glpi_changes_items,
    glpi_changes_problems,
    glpi_changes_suppliers,
    glpi_changes_tickets,
    glpi_changes_users,
    glpi_changetasks,
    glpi_changetemplatehiddenfields,
    glpi_changetemplatemandatoryfields,
    glpi_changetemplatepredefinedfields,
    glpi_changetemplates,
    glpi_changevalidations,
    glpi_clusters,
    glpi_clustertypes,
    glpi_computerantiviruses,
    glpi_computermodels,
    glpi_computers,
    glpi_computers_items,
    glpi_computertypes,
    glpi_computervirtualmachines,
    glpi_configs,
    glpi_consumableitems,
    glpi_consumableitemtypes,
    glpi_consumables,
    glpi_contacts,
    glpi_contacts_suppliers,
    glpi_contacttypes,
    glpi_contractcosts,
    glpi_contracts,
    glpi_contracts_items,
    glpi_contracts_suppliers,
    glpi_contracttypes,
    glpi_crontasklogs,
    glpi_crontasks,
    glpi_dashboards_dashboards,
    glpi_dashboards_filters,
    glpi_dashboards_items,
    glpi_dashboards_rights,
    glpi_databaseinstancecategories,
    glpi_databaseinstances,
    glpi_databaseinstancetypes,
    glpi_databases,
    glpi_datacenters,
    glpi_dcrooms,
    glpi_devicebatteries,
    glpi_devicebatterymodels,
    glpi_devicebatterytypes,
    glpi_devicecameramodels,
    glpi_devicecameras,
    glpi_devicecasemodels,
    glpi_devicecases,
    glpi_devicecasetypes,
    glpi_devicecontrolmodels,
    glpi_devicecontrols,
    glpi_devicedrivemodels,
    glpi_devicedrives,
    glpi_devicefirmwaremodels,
    glpi_devicefirmwares,
    glpi_devicefirmwaretypes,
    glpi_devicegenericmodels,
    glpi_devicegenerics,
    glpi_devicegenerictypes,
    glpi_devicegraphiccardmodels,
    glpi_devicegraphiccards,
    glpi_deviceharddrivemodels,
    glpi_deviceharddrives,
    glpi_devicememories,
    glpi_devicememorymodels,
    glpi_devicememorytypes,
    glpi_devicemotherboardmodels,
    glpi_devicemotherboards,
    glpi_devicenetworkcardmodels,
    glpi_devicenetworkcards,
    glpi_devicepcimodels,
    glpi_devicepcis,
    glpi_devicepowersupplies,
    glpi_devicepowersupplymodels,
    glpi_deviceprocessormodels,
    glpi_deviceprocessors,
    glpi_devicesensormodels,
    glpi_devicesensors,
    glpi_devicesensortypes,
    glpi_devicesimcards,
    glpi_devicesimcardtypes,
    glpi_devicesoundcardmodels,
    glpi_devicesoundcards,
    glpi_displaypreferences,
    glpi_documentcategories,
    glpi_documents,
    glpi_documents_items,
    glpi_documenttypes,
    glpi_domainrecords,
    glpi_domainrecordtypes,
    glpi_domainrelations,
    glpi_domains,
    glpi_domains_items,
    glpi_domaintypes,
    glpi_dropdowntranslations,
    glpi_enclosuremodels,
    glpi_enclosures,
    glpi_entities,
    glpi_entities_knowbaseitems,
    glpi_entities_reminders,
    glpi_entities_rssfeeds,
    glpi_events,
    glpi_fieldblacklists,
    glpi_fieldunicities,
    glpi_filesystems,
    glpi_fqdns,
    glpi_groups,
    glpi_groups_knowbaseitems,
    glpi_groups_problems,
    glpi_groups_reminders,
    glpi_groups_rssfeeds,
    glpi_groups_tickets,
    glpi_groups_users,
    glpi_holidays,
    glpi_imageformats,
    glpi_imageresolutions,
    glpi_impactcompounds,
    glpi_impactcontexts,
    glpi_impactitems,
    glpi_impactrelations,
    glpi_infocoms,
    glpi_interfacetypes,
    glpi_ipaddresses,
    glpi_ipaddresses_ipnetworks,
    glpi_ipnetworks,
    glpi_ipnetworks_vlans,
    glpi_items_clusters,
    glpi_items_devicebatteries,
    glpi_items_devicecameras,
    glpi_items_devicecameras_imageformats,
    glpi_items_devicecameras_imageresolutions,
    glpi_items_devicecases,
    glpi_items_devicecontrols,
    glpi_items_devicedrives,
    glpi_items_devicefirmwares,
    glpi_items_devicegenerics,
    glpi_items_devicegraphiccards,
    glpi_items_deviceharddrives,
    glpi_items_devicememories,
    glpi_items_devicemotherboards,
    glpi_items_devicenetworkcards,
    glpi_items_devicepcis,
    glpi_items_devicepowersupplies,
    glpi_items_deviceprocessors,
    glpi_items_devicesensors,
    glpi_items_devicesimcards,
    glpi_items_devicesoundcards,
    glpi_items_disks,
    glpi_items_enclosures,
    glpi_items_kanbans,
    glpi_items_operatingsystems,
    glpi_items_problems,
    glpi_items_projects,
    glpi_items_racks,
    glpi_items_remotemanagements,
    glpi_items_softwarelicenses,
    glpi_items_softwareversions,
    glpi_items_tickets,
    glpi_itilcategories,
    glpi_itilfollowups,
    glpi_itilfollowuptemplates,
    glpi_itils_projects,
    glpi_itilsolutions,
    glpi_knowbaseitemcategories,
    glpi_knowbaseitems,
    glpi_knowbaseitems_comments,
    glpi_knowbaseitems_items,
    glpi_knowbaseitems_knowbaseitemcategories,
    glpi_knowbaseitems_profiles,
    glpi_knowbaseitems_revisions,
    glpi_knowbaseitems_users,
    glpi_knowbaseitemtranslations,
    glpi_lineoperators,
    glpi_lines,
    glpi_linetypes,
    glpi_links,
    glpi_links_itemtypes,
    glpi_locations,
    glpi_lockedfields,
    glpi_logs,
    glpi_mailcollectors,
    glpi_manuallinks,
    glpi_manufacturers,
    glpi_monitormodels,
    glpi_monitors,
    glpi_monitortypes,
    glpi_networkaliases,
    glpi_networkequipmentmodels,
    glpi_networkequipments,
    glpi_networkequipmenttypes,
    glpi_networkinterfaces,
    glpi_networknames,
    glpi_networkportaggregates,
    glpi_networkportaliases,
    glpi_networkportconnectionlogs,
    glpi_networkportdialups,
    glpi_networkportethernets,
    glpi_networkportfiberchannels,
    glpi_networkportfiberchanneltypes,
    glpi_networkportlocals,
    glpi_networkportmetrics,
    glpi_networkports,
    glpi_networkports_networkports,
    glpi_networkports_vlans,
    glpi_networkporttypes,
    glpi_networkportwifis,
    glpi_networks,
    glpi_notepads,
    glpi_notifications,
    glpi_notifications_notificationtemplates,
    glpi_notificationtargets,
    glpi_notificationtemplates,
    glpi_notificationtemplatetranslations,
    glpi_notimportedemails,
    glpi_objectlocks,
    glpi_olalevelactions,
    glpi_olalevelcriterias,
    glpi_olalevels,
    glpi_olalevels_tickets,
    glpi_olas,
    glpi_operatingsystemarchitectures,
    glpi_operatingsystemeditions,
    glpi_operatingsystemkernels,
    glpi_operatingsystemkernelversions,
    glpi_operatingsystems,
    glpi_operatingsystemservicepacks,
    glpi_operatingsystemversions,
    glpi_passivedcequipmentmodels,
    glpi_passivedcequipments,
    glpi_passivedcequipmenttypes,
    glpi_pcivendors,
    glpi_pdumodels,
    glpi_pdus,
    glpi_pdus_plugs,
    glpi_pdus_racks,
    glpi_pdutypes,
    glpi_pendingreasons,
    glpi_pendingreasons_items,
    glpi_peripheralmodels,
    glpi_peripherals,
    glpi_peripheraltypes,
    glpi_phonemodels,
    glpi_phonepowersupplies,
    glpi_phones,
    glpi_phonetypes,
    glpi_planningeventcategories,
    glpi_planningexternalevents,
    glpi_planningexternaleventtemplates,
    glpi_planningrecalls,
    glpi_plugins,
    glpi_plugs,
    glpi_printerlogs,
    glpi_printermodels,
    glpi_printers,
    glpi_printers_cartridgeinfos,
    glpi_printertypes,
    glpi_problemcosts,
    glpi_problems,
    glpi_problems_suppliers,
    glpi_problems_tickets,
    glpi_problems_users,
    glpi_problemtasks,
    glpi_problemtemplatehiddenfields,
    glpi_problemtemplatemandatoryfields,
    glpi_problemtemplatepredefinedfields,
    glpi_problemtemplates,
    glpi_profilerights,
    glpi_profiles,
    glpi_profiles_reminders,
    glpi_profiles_rssfeeds,
    glpi_profiles_users,
    glpi_projectcosts,
    glpi_projects,
    glpi_projectstates,
    glpi_projecttasklinks,
    glpi_projecttasks,
    glpi_projecttasks_tickets,
    glpi_projecttaskteams,
    glpi_projecttasktemplates,
    glpi_projecttasktypes,
    glpi_projectteams,
    glpi_projecttypes,
    glpi_queuednotifications,
    glpi_rackmodels,
    glpi_racks,
    glpi_racktypes,
    glpi_recurrentchanges,
    glpi_refusedequipments,
    glpi_registeredids,
    glpi_reminders,
    glpi_reminders_users,
    glpi_remindertranslations,
    glpi_requesttypes,
    glpi_reservationitems,
    glpi_reservations,
    glpi_rssfeeds,
    glpi_rssfeeds_users,
    glpi_ruleactions,
    glpi_rulecriterias,
    glpi_rulematchedlogs,
    glpi_rulerightparameters,
    glpi_rules,
    glpi_savedsearches,
    glpi_savedsearches_alerts,
    glpi_savedsearches_users,
    glpi_slalevelactions,
    glpi_slalevelcriterias,
    glpi_slalevels,
    glpi_slalevels_tickets,
    glpi_slas,
    glpi_slms,
    glpi_snmpcredentials,
    glpi_socketmodels,
    glpi_sockets,
    glpi_softwarecategories,
    glpi_softwarelicenses,
    glpi_softwarelicensetypes,
    glpi_softwares,
    glpi_softwareversions,
    glpi_solutiontemplates,
    glpi_solutiontypes,
    glpi_ssovariables,
    glpi_states,
    glpi_suppliers,
    glpi_suppliers_tickets,
    glpi_suppliertypes,
    glpi_taskcategories,
    glpi_tasktemplates,
    glpi_ticketcosts,
    glpi_ticketrecurrents,
    glpi_tickets,
    glpi_tickets_contracts,
    glpi_tickets_tickets,
    glpi_tickets_users,
    glpi_ticketsatisfactions,
    glpi_tickettasks,
    glpi_tickettemplatehiddenfields,
    glpi_tickettemplatemandatoryfields,
    glpi_tickettemplatepredefinedfields,
    glpi_tickettemplates,
    glpi_ticketvalidations,
    glpi_transfers,
    glpi_unmanageds,
    glpi_usbvendors,
    glpi_usercategories,
    glpi_useremails,
    glpi_users,
    glpi_usertitles,
    glpi_virtualmachinestates,
    glpi_virtualmachinesystems,
    glpi_virtualmachinetypes,
    glpi_vlans,
    glpi_vobjects,
    glpi_wifinetworks,
  };
}
