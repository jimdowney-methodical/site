'use strict';

const REQUIREMENT_THEMES = {

  // AC - Access Control
  // Themes: 'Account Management','Least Privilege','CUI Data Flow','Session Controls','Remote Access','Wireless & Mobile'
  '3.1.1':  ['Account Management', 'CUI Data Flow'],
  '3.1.2':  ['Account Management', 'Least Privilege'],
  '3.1.3':  ['CUI Data Flow'],
  '3.1.4':  ['Account Management', 'Least Privilege'],
  '3.1.5':  ['Least Privilege', 'Account Management'],
  '3.1.6':  ['Least Privilege', 'Account Management'],
  '3.1.7':  ['Least Privilege', 'Account Management'],
  '3.1.8':  ['Account Management', 'Session Controls'],
  '3.1.9':  ['Account Management', 'Session Controls'],
  '3.1.10': ['Session Controls'],
  '3.1.11': ['Session Controls', 'Remote Access'],
  '3.1.12': ['Remote Access', 'Session Controls'],
  '3.1.13': ['Remote Access'],
  '3.1.14': ['Remote Access'],
  '3.1.15': ['Remote Access', 'Least Privilege'],
  '3.1.16': ['Wireless & Mobile', 'Account Management'],
  '3.1.17': ['Wireless & Mobile'],
  '3.1.18': ['Wireless & Mobile'],
  '3.1.19': ['Wireless & Mobile', 'CUI Data Flow'],
  '3.1.20': ['CUI Data Flow', 'Account Management'],
  '3.1.21': ['Wireless & Mobile', 'CUI Data Flow'],
  '3.1.22': ['CUI Data Flow', 'Account Management'],

  // AT - Awareness and Training
  // Themes: 'Security Awareness','Role-Based Training','Threat Recognition','Social Engineering'
  '3.2.1':  ['Security Awareness', 'Threat Recognition'],
  '3.2.2':  ['Role-Based Training', 'Security Awareness'],
  '3.2.3':  ['Threat Recognition', 'Social Engineering', 'Security Awareness'],

  // AU - Audit and Accountability
  // Themes: 'Log Generation','User Accountability','Log Retention','Log Protection','Time Synchronization','Alerting'
  '3.3.1':  ['Log Generation', 'Log Retention'],
  '3.3.2':  ['User Accountability', 'Log Generation'],
  '3.3.3':  ['Log Generation'],
  '3.3.4':  ['Alerting', 'Log Generation'],
  '3.3.5':  ['Log Generation', 'Alerting'],
  '3.3.6':  ['Log Generation', 'Log Retention'],
  '3.3.7':  ['Time Synchronization', 'Log Generation'],
  '3.3.8':  ['Log Protection'],
  '3.3.9':  ['Log Protection', 'User Accountability'],

  // CM - Configuration Management
  // Themes: 'Baseline Configurations','Security Hardening','Change Control','Least Functionality','Software Execution Policy'
  '3.4.1':  ['Baseline Configurations'],
  '3.4.2':  ['Baseline Configurations', 'Security Hardening'],
  '3.4.3':  ['Change Control'],
  '3.4.4':  ['Change Control', 'Security Hardening'],
  '3.4.5':  ['Change Control', 'Baseline Configurations'],
  '3.4.6':  ['Least Functionality', 'Security Hardening'],
  '3.4.7':  ['Least Functionality', 'Security Hardening'],
  '3.4.8':  ['Software Execution Policy', 'Least Functionality'],
  '3.4.9':  ['Software Execution Policy', 'Least Functionality'],

  // IA - Identification and Authentication
  // Themes: 'Unique Identification','Multi-Factor Authentication','Password Policy','Account Lifecycle','Credential Protection'
  '3.5.1':  ['Unique Identification', 'Account Lifecycle'],
  '3.5.2':  ['Unique Identification', 'Credential Protection'],
  '3.5.3':  ['Multi-Factor Authentication'],
  '3.5.4':  ['Multi-Factor Authentication', 'Credential Protection'],
  '3.5.5':  ['Account Lifecycle', 'Unique Identification'],
  '3.5.6':  ['Account Lifecycle'],
  '3.5.7':  ['Password Policy'],
  '3.5.8':  ['Password Policy'],
  '3.5.9':  ['Password Policy', 'Account Lifecycle'],
  '3.5.10': ['Credential Protection', 'Password Policy'],
  '3.5.11': ['Credential Protection'],

  // IR - Incident Response
  // Themes: 'IR Planning','Incident Tracking','Reporting to Authorities','IR Testing','DIBNET Reporting'
  '3.6.1':  ['IR Planning', 'IR Testing'],
  '3.6.2':  ['Incident Tracking', 'Reporting to Authorities', 'DIBNET Reporting'],
  '3.6.3':  ['IR Testing', 'IR Planning'],

  // MA - Maintenance
  // Themes: 'Controlled Maintenance','Remote Maintenance','Maintenance Personnel','Diagnostic Media','CUI Sanitization'
  '3.7.1':  ['Controlled Maintenance'],
  '3.7.2':  ['Controlled Maintenance', 'Maintenance Personnel'],
  '3.7.3':  ['CUI Sanitization', 'Controlled Maintenance'],
  '3.7.4':  ['Diagnostic Media', 'Controlled Maintenance'],
  '3.7.5':  ['Remote Maintenance'],
  '3.7.6':  ['Maintenance Personnel', 'Controlled Maintenance'],

  // MP - Media Protection
  // Themes: 'Media Storage','Media Access Control','CUI Marking','Media Transport','Sanitization','Removable Media'
  '3.8.1':  ['Media Storage'],
  '3.8.2':  ['Media Access Control'],
  '3.8.3':  ['Sanitization'],
  '3.8.4':  ['CUI Marking'],
  '3.8.5':  ['Media Transport'],
  '3.8.6':  ['Media Transport', 'Media Access Control'],
  '3.8.7':  ['Removable Media', 'Media Access Control'],
  '3.8.8':  ['Removable Media'],
  '3.8.9':  ['Media Storage', 'Media Access Control'],

  // PS - Personnel Security
  // Themes: 'Background Screening','Termination Procedures','Transfer Procedures','Access Revocation'
  '3.9.1':  ['Background Screening'],
  '3.9.2':  ['Termination Procedures', 'Transfer Procedures', 'Access Revocation'],

  // PE - Physical Protection
  // Themes: 'Physical Access Control','Facility Monitoring','Visitor Management','Physical Access Logging','Alternate Work Sites'
  '3.10.1': ['Physical Access Control'],
  '3.10.2': ['Facility Monitoring'],
  '3.10.3': ['Visitor Management', 'Physical Access Control'],
  '3.10.4': ['Physical Access Logging'],
  '3.10.5': ['Physical Access Control', 'Physical Access Logging'],
  '3.10.6': ['Alternate Work Sites'],

  // RA - Risk Assessment
  // Themes: 'Risk Assessment','Vulnerability Scanning','Vulnerability Remediation','Risk-Based Prioritization'
  '3.11.1': ['Risk Assessment', 'Risk-Based Prioritization'],
  '3.11.2': ['Vulnerability Scanning'],
  '3.11.3': ['Vulnerability Remediation', 'Risk-Based Prioritization'],

  // CA - Security Assessment
  // Themes: 'Control Assessment','POA&M','Ongoing Monitoring','System Security Plan (SSP)'
  '3.12.1': ['Control Assessment'],
  '3.12.2': ['POA&M'],
  '3.12.3': ['Ongoing Monitoring', 'Control Assessment'],
  '3.12.4': ['System Security Plan (SSP)'],

  // SC - System and Communications Protection
  // Themes: 'Boundary Protection','CUI Encryption','Network Segmentation','FIPS Cryptography','Key Management','Session Security'
  '3.13.1':  ['Boundary Protection', 'Network Segmentation'],
  '3.13.2':  ['Boundary Protection', 'Network Segmentation'],
  '3.13.3':  ['Network Segmentation', 'Boundary Protection'],
  '3.13.4':  ['Network Segmentation'],
  '3.13.5':  ['Network Segmentation', 'Boundary Protection'],
  '3.13.6':  ['Boundary Protection', 'Network Segmentation'],
  '3.13.7':  ['Boundary Protection', 'Session Security'],
  '3.13.8':  ['CUI Encryption', 'FIPS Cryptography'],
  '3.13.9':  ['Session Security'],
  '3.13.10': ['Key Management'],
  '3.13.11': ['FIPS Cryptography', 'CUI Encryption'],
  '3.13.12': ['Boundary Protection', 'Session Security'],
  '3.13.13': ['Boundary Protection'],
  '3.13.14': ['Network Segmentation', 'Boundary Protection'],
  '3.13.15': ['Session Security', 'CUI Encryption'],
  '3.13.16': ['CUI Encryption', 'FIPS Cryptography'],

  // SI - System and Information Integrity
  // Themes: 'Patch Management','Malware Protection','Security Alerting','Anomaly Detection','Intrusion Detection'
  '3.14.1': ['Patch Management'],
  '3.14.2': ['Malware Protection'],
  '3.14.3': ['Security Alerting'],
  '3.14.4': ['Malware Protection'],
  '3.14.5': ['Malware Protection'],
  '3.14.6': ['Intrusion Detection', 'Security Alerting', 'Anomaly Detection'],
  '3.14.7': ['Anomaly Detection', 'Intrusion Detection'],

};
