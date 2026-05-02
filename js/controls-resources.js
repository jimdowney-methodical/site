'use strict';

// Implementation resources for each NIST SP 800-171 Rev 2 requirement
// Each entry: { label, url }  —  2-4 links per requirement
// Sources: NIST SPs, CISA guides, CIS Benchmarks/Controls, DISA STIGs, official portals

const REQUIREMENT_RESOURCES = {

  // ── 3.1  Access Control ───────────────────────────────────────────────────

  '3.1.1': [
    { label: 'NIST SP 800-53 Rev 5 — AC-2: Account Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 5: Account Management', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'CISA: Identity and Access Management Fact Sheet', url: 'https://www.cisa.gov/resources-tools/resources/identity-and-access-management' },
  ],
  '3.1.2': [
    { label: 'NIST SP 800-53 Rev 5 — AC-3: Access Enforcement', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 6: Access Control Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.3': [
    { label: 'NARA CUI Registry — Categories and Handling Requirements', url: 'https://www.archives.gov/cui/registry/category-list' },
    { label: 'NIST SP 800-53 Rev 5 — AC-4: Information Flow Enforcement', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 3: Data Protection', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.4': [
    { label: 'NIST SP 800-53 Rev 5 — AC-5: Separation of Duties', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 6: Access Control Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.5': [
    { label: 'NIST SP 800-53 Rev 5 — AC-6: Least Privilege', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 5.4: Restrict Administrator Privileges', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'CISA: Implementing a Zero Trust Architecture (Least Privilege pillar)', url: 'https://www.cisa.gov/zero-trust-maturity-model' },
  ],
  '3.1.6': [
    { label: 'NIST SP 800-53 Rev 5 — AC-6(2): Non-Privileged Access for Nonsecurity Functions', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 5: Account Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.7': [
    { label: 'NIST SP 800-53 Rev 5 — AC-6(1)/(10): Privilege Execution', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA Windows Server STIG — Privilege and Audit Configuration', url: 'https://public.cyber.mil/stigs/' },
    { label: 'CIS Controls v8 — Control 8: Audit Log Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.8': [
    { label: 'NIST SP 800-63B — Authentication and Lifecycle Management (lockout guidance)', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'CIS Benchmark for Windows — Account Lockout Policy', url: 'https://www.cisecurity.org/cis-benchmarks/' },
    { label: 'DISA Windows STIG — Login Attempts Configuration', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.1.9': [
    { label: 'NARA CUI Marking Handbook', url: 'https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf' },
    { label: 'DoD CIO — CMMC Documentation (CUI handling guidance)', url: 'https://dodcio.defense.gov/CMMC/Documentation/' },
    { label: 'DISA — Notice and Consent Banner Requirements', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.1.10': [
    { label: 'CIS Benchmark for Windows — Interactive Logon: Machine Inactivity Limit', url: 'https://www.cisecurity.org/cis-benchmarks/' },
    { label: 'DISA Windows STIG — Screen Lock Policy', url: 'https://public.cyber.mil/stigs/' },
    { label: 'NIST SP 800-53 Rev 5 — AC-11: Session Lock', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.1.11': [
    { label: 'NIST SP 800-53 Rev 5 — AC-12: Session Termination', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA Windows STIG — Session Timeout Settings', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.1.12': [
    { label: 'NIST SP 800-46 Rev 2 — Guide to Enterprise Telework and Remote Access Security', url: 'https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final' },
    { label: 'NIST SP 800-53 Rev 5 — AC-17: Remote Access', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CISA — Telework Security Resources', url: 'https://www.cisa.gov/telework' },
  ],
  '3.1.13': [
    { label: 'NIST SP 800-52 Rev 2 — Guidelines for TLS Implementations', url: 'https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final' },
    { label: 'NIST SP 800-46 Rev 2 — Remote Access Security', url: 'https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final' },
    { label: 'NIST SP 800-77 Rev 1 — Guide to IPsec VPNs', url: 'https://csrc.nist.gov/publications/detail/sp/800-77/rev-1/final' },
  ],
  '3.1.14': [
    { label: 'NIST SP 800-46 Rev 2 — Remote Access Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final' },
    { label: 'CISA — Secure Access Service Edge (SASE) Architecture', url: 'https://www.cisa.gov/telework' },
  ],
  '3.1.15': [
    { label: 'NIST SP 800-46 Rev 2 — Privileged Remote Access', url: 'https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final' },
    { label: 'NIST SP 800-53 Rev 5 — AC-17(4): Privileged Commands/Access', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.1.16': [
    { label: 'NIST SP 800-153 — Guidelines for Securing Wireless Local Area Networks', url: 'https://csrc.nist.gov/publications/detail/sp/800-153/final' },
    { label: 'NIST SP 800-53 Rev 5 — AC-18: Wireless Access', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.1.17': [
    { label: 'NIST SP 800-153 — Wireless Network Security', url: 'https://csrc.nist.gov/publications/detail/sp/800-153/final' },
    { label: 'NIST SP 800-97 — Establishing Wireless Robust Security Networks (802.11i)', url: 'https://csrc.nist.gov/publications/detail/sp/800-97/final' },
    { label: 'CIS Controls v8 — Control 12: Network Infrastructure Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.18': [
    { label: 'NIST SP 800-124 Rev 2 — Guidelines for Managing the Security of Mobile Devices', url: 'https://csrc.nist.gov/publications/detail/sp/800-124/rev-2/final' },
    { label: 'CIS Controls v8 — Control 4: Secure Configuration of Enterprise Assets', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.19': [
    { label: 'NIST SP 800-124 Rev 2 — Mobile Device Security (encryption guidance)', url: 'https://csrc.nist.gov/publications/detail/sp/800-124/rev-2/final' },
    { label: 'NIST SP 800-111 — Guide to Storage Encryption Technologies', url: 'https://csrc.nist.gov/publications/detail/sp/800-111/final' },
    { label: 'NIST CMVP — Search FIPS-validated modules for device encryption', url: 'https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search' },
  ],
  '3.1.20': [
    { label: 'NIST SP 800-53 Rev 5 — CA-3: Information Exchange', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 12: Network Infrastructure Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.21': [
    { label: 'NIST SP 800-53 Rev 5 — MP-7: Media Use', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 3: Data Protection (Removable Media)', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.1.22': [
    { label: 'NARA CUI Registry — Public Availability Restrictions', url: 'https://www.archives.gov/cui/registry/category-list' },
    { label: 'NIST SP 800-53 Rev 5 — AC-22: Publicly Accessible Content', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],

  // ── 3.2  Awareness and Training ──────────────────────────────────────────

  '3.2.1': [
    { label: 'NIST SP 800-50 — Building an Information Technology Security Awareness and Training Program', url: 'https://csrc.nist.gov/publications/detail/sp/800-50/final' },
    { label: 'CISA NICCS — Cybersecurity Training Catalog', url: 'https://niccs.cisa.gov/training-education/catalog' },
    { label: 'CIS Controls v8 — Control 14: Security Awareness and Skills Training', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.2.2': [
    { label: 'NIST SP 800-50 — Role-Based Security Training', url: 'https://csrc.nist.gov/publications/detail/sp/800-50/final' },
    { label: 'NIST SP 800-16 Rev 1 — A Role-Based Model for Federal Information Technology/Cybersecurity Training', url: 'https://csrc.nist.gov/publications/detail/sp/800-16/rev-1/final' },
    { label: 'CISA NICCS — Training Catalog (filter by role)', url: 'https://niccs.cisa.gov/training-education/catalog' },
  ],
  '3.2.3': [
    { label: 'CISA — Phishing Guidance: Stopping the Attack Cycle', url: 'https://www.cisa.gov/resources-tools/resources/phishing-guidance-stopping-attack-cycle-phase-1-initial-compromise' },
    { label: 'CISA — Free Cybersecurity Services and Tools (includes phishing simulation)', url: 'https://www.cisa.gov/free-cybersecurity-services-and-tools' },
    { label: 'NIST SP 800-50 — Awareness Training Content (social engineering)', url: 'https://csrc.nist.gov/publications/detail/sp/800-50/final' },
  ],

  // ── 3.3  Audit and Accountability ────────────────────────────────────────

  '3.3.1': [
    { label: 'NIST SP 800-92 — Guide to Computer Security Log Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
    { label: 'CIS Controls v8 — Control 8: Audit Log Management', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'CISA — Logging and Monitoring Best Practices', url: 'https://www.cisa.gov/resources-tools/resources/logging-made-easy' },
  ],
  '3.3.2': [
    { label: 'NIST SP 800-92 — Log Content and Audit Trails', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
    { label: 'NIST SP 800-53 Rev 5 — AU-9: Protection of Audit Information', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 8.5: Collect Audit Logs', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.3.3': [
    { label: 'NIST SP 800-92 — Event Logging Categories and Content', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
    { label: 'NIST SP 800-53 Rev 5 — AU-2: Event Logging', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.3.4': [
    { label: 'NIST SP 800-92 — Log Infrastructure and Failure Detection', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
    { label: 'NIST SP 800-53 Rev 5 — AU-5: Response to Audit Processing Failures', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.3.5': [
    { label: 'NIST SP 800-92 — Log Analysis and Correlation', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
    { label: 'CIS Controls v8 — Control 8.11: Conduct Audit Log Reviews', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'CISA — Logging Made Easy (open source log aggregation guide)', url: 'https://www.cisa.gov/resources-tools/resources/logging-made-easy' },
  ],
  '3.3.6': [
    { label: 'NIST SP 800-92 — Log Management Infrastructure', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
    { label: 'CIS Controls v8 — Control 8: Audit Log Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.3.7': [
    { label: 'NIST SP 800-92 — Time Synchronization for Log Records', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
    { label: 'DISA Windows STIG — Time Synchronization / W32tm Configuration', url: 'https://public.cyber.mil/stigs/' },
    { label: 'NIST Internet Time Servers (authoritative NTP source)', url: 'https://tf.nist.gov/tf-cgi/servers.cgi' },
  ],
  '3.3.8': [
    { label: 'NIST SP 800-92 — Log Integrity and Protection', url: 'https://csrc.nist.gov/publications/detail/sp/800-92/final' },
    { label: 'NIST SP 800-53 Rev 5 — AU-9: Protection of Audit Information', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 8.3: Ensure Adequate Audit Log Storage', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.3.9': [
    { label: 'NIST SP 800-53 Rev 5 — AU-9(4): Access by Subset of Privileged Users', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 5: Account Management (privilege separation)', url: 'https://www.cisecurity.org/controls/v8' },
  ],

  // ── 3.4  Configuration Management ────────────────────────────────────────

  '3.4.1': [
    { label: 'NIST SP 800-128 — Guide for Security-Focused Configuration Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-128/final' },
    { label: 'CIS Controls v8 — Control 1: Inventory and Control of Enterprise Assets', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'CIS Controls v8 — Control 2: Inventory and Control of Software Assets', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.4.2': [
    { label: 'CIS Benchmarks — Free hardening guides for 100+ technologies', url: 'https://www.cisecurity.org/cis-benchmarks/' },
    { label: 'DISA STIGs — DoD hardening guides (authoritative for federal environments)', url: 'https://public.cyber.mil/stigs/' },
    { label: 'NIST SP 800-128 — Security Configuration Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-128/final' },
    { label: 'NIST National Checklist Program Repository', url: 'https://nvd.nist.gov/ncp/repository' },
  ],
  '3.4.3': [
    { label: 'NIST SP 800-128 — Change Control Procedures', url: 'https://csrc.nist.gov/publications/detail/sp/800-128/final' },
    { label: 'NIST SP 800-53 Rev 5 — CM-3: Configuration Change Control', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 4: Secure Configuration of Enterprise Assets', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.4.4': [
    { label: 'NIST SP 800-128 — Security Impact Analysis', url: 'https://csrc.nist.gov/publications/detail/sp/800-128/final' },
    { label: 'NIST SP 800-53 Rev 5 — CM-4: Impact Analyses', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.4.5': [
    { label: 'NIST SP 800-128 — Access Restrictions for Configuration Changes', url: 'https://csrc.nist.gov/publications/detail/sp/800-128/final' },
    { label: 'NIST SP 800-53 Rev 5 — CM-5: Access Restrictions for Change', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.4.6': [
    { label: 'NIST SP 800-128 — Least Functionality Configuration', url: 'https://csrc.nist.gov/publications/detail/sp/800-128/final' },
    { label: 'CIS Benchmarks — Minimize attack surface via hardened configurations', url: 'https://www.cisecurity.org/cis-benchmarks/' },
    { label: 'DISA STIGs — Least functionality requirements by platform', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.4.7': [
    { label: 'NIST SP 800-128 — Restricting Nonessential Functionality', url: 'https://csrc.nist.gov/publications/detail/sp/800-128/final' },
    { label: 'CIS Benchmarks — Service and port disabling guidance', url: 'https://www.cisecurity.org/cis-benchmarks/' },
    { label: 'NIST SP 800-53 Rev 5 — CM-7: Least Functionality', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.4.8': [
    { label: 'NIST SP 800-167 — Guide to Application Whitelisting', url: 'https://csrc.nist.gov/publications/detail/sp/800-167/final' },
    { label: 'CIS Controls v8 — Control 2.7: Allowlist Authorized Software', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'NIST National Checklist Program Repository', url: 'https://nvd.nist.gov/ncp/repository' },
  ],
  '3.4.9': [
    { label: 'NIST SP 800-128 — User-Installed Software Controls', url: 'https://csrc.nist.gov/publications/detail/sp/800-128/final' },
    { label: 'CIS Controls v8 — Control 2.5: Allowlist Authorized Software', url: 'https://www.cisecurity.org/controls/v8' },
  ],

  // ── 3.5  Identification and Authentication ────────────────────────────────

  '3.5.1': [
    { label: 'NIST SP 800-63A Rev 3 — Digital Identity Enrollment and Identity Proofing', url: 'https://pages.nist.gov/800-63-3/sp800-63a.html' },
    { label: 'NIST SP 800-53 Rev 5 — IA-4: Identifier Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 5: Account Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.5.2': [
    { label: 'NIST SP 800-63B — Authentication and Lifecycle Management', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'NIST SP 800-53 Rev 5 — IA-2: Identification and Authentication', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.5.3': [
    { label: 'CISA — More Than a Password: MFA Guidance', url: 'https://www.cisa.gov/mfa' },
    { label: 'NIST SP 800-63B — Multi-Factor Authentication Requirements', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'CISA — Implementing Strong Authentication Fact Sheet', url: 'https://www.cisa.gov/resources-tools/resources/implement-strong-authentication' },
    { label: 'NIST SP 800-53 Rev 5 — IA-2(1): MFA for Privileged Accounts', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.5.4': [
    { label: 'NIST SP 800-63B — Replay Resistance Requirements', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'NIST SP 800-53 Rev 5 — IA-2(8): Replay-Resistant Authentication', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.5.5': [
    { label: 'NIST SP 800-53 Rev 5 — IA-4: Identifier Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 5.3: Disable Dormant Accounts', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.5.6': [
    { label: 'NIST SP 800-53 Rev 5 — IA-4(4): Identify User Status', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 5.3: Disable Dormant Accounts', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.5.7': [
    { label: 'NIST SP 800-63B — Memorized Secret (Password) Requirements', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'CIS Benchmark — Password Policy Configuration', url: 'https://www.cisecurity.org/cis-benchmarks/' },
    { label: 'NIST SP 800-53 Rev 5 — IA-5(1): Password-Based Authentication', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.5.8': [
    { label: 'NIST SP 800-63B — Password History Requirements', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'CIS Benchmark for Windows — Enforce Password History', url: 'https://www.cisecurity.org/cis-benchmarks/' },
  ],
  '3.5.9': [
    { label: 'NIST SP 800-63B — Temporary Credential Requirements', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'NIST SP 800-53 Rev 5 — IA-5: Authenticator Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.5.10': [
    { label: 'NIST SP 800-63B — Memorized Secret Storage Requirements (hashing guidance)', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { label: 'NIST SP 800-52 Rev 2 — TLS for Credential Transmission', url: 'https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final' },
    { label: 'NIST CMVP — Validated Cryptographic Modules', url: 'https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search' },
  ],
  '3.5.11': [
    { label: 'NIST SP 800-53 Rev 5 — IA-6: Authentication Feedback', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA Application Security STIG — Feedback Obscuring Requirements', url: 'https://public.cyber.mil/stigs/' },
  ],

  // ── 3.6  Incident Response ────────────────────────────────────────────────

  '3.6.1': [
    { label: 'NIST SP 800-61 Rev 2 — Computer Security Incident Handling Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
    { label: 'CISA — Federal Cybersecurity Incident and Vulnerability Response Playbooks', url: 'https://www.cisa.gov/resources-tools/resources/federal-government-cybersecurity-incident-and-vulnerability-response-playbooks' },
    { label: 'CIS Controls v8 — Control 17: Incident Response Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.6.2': [
    { label: 'DIBNET — DoD Cybersecurity Incident Reporting Portal', url: 'https://dibnet.dod.mil' },
    { label: 'DFARS 252.204-7012 — 72-Hour Reporting Obligation', url: 'https://www.ecfr.gov/current/title-48/chapter-2/subchapter-A/part-252/subpart-252.2/section-252.204-7012' },
    { label: 'NIST SP 800-61 Rev 2 — Incident Reporting and Communication', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
    { label: 'CISA — Reporting a Cyber Incident', url: 'https://www.cisa.gov/report' },
  ],
  '3.6.3': [
    { label: 'NIST SP 800-84 — Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities', url: 'https://csrc.nist.gov/publications/detail/sp/800-84/final' },
    { label: 'NIST SP 800-61 Rev 2 — Incident Response Testing and Exercises', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
    { label: 'CIS Controls v8 — Control 17.7: Conduct Routine Incident Response Exercises', url: 'https://www.cisecurity.org/controls/v8' },
  ],

  // ── 3.7  Maintenance ──────────────────────────────────────────────────────

  '3.7.1': [
    { label: 'NIST SP 800-53 Rev 5 — MA-2: Controlled Maintenance', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 4: Secure Configuration of Enterprise Assets', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.7.2': [
    { label: 'NIST SP 800-53 Rev 5 — MA-3: Maintenance Tools', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NIST SP 800-53 Rev 5 — MA-5: Maintenance Personnel', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.7.3': [
    { label: 'NIST SP 800-88 Rev 1 — Media Sanitization Guidelines (pre-maintenance)', url: 'https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final' },
    { label: 'NIST SP 800-53 Rev 5 — MA-4: Nonlocal Maintenance', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.7.4': [
    { label: 'NIST SP 800-53 Rev 5 — MA-3(2): Inspect Media for Malicious Code', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CISA — Free Cybersecurity Services and Tools (antivirus/scanning)', url: 'https://www.cisa.gov/free-cybersecurity-services-and-tools' },
  ],
  '3.7.5': [
    { label: 'CISA — More Than a Password: MFA for Remote Maintenance', url: 'https://www.cisa.gov/mfa' },
    { label: 'NIST SP 800-53 Rev 5 — MA-4(6): MFA for Nonlocal Maintenance', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NIST SP 800-46 Rev 2 — Remote Access Security', url: 'https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final' },
  ],
  '3.7.6': [
    { label: 'NIST SP 800-53 Rev 5 — MA-5: Maintenance Personnel', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NIST SP 800-53 Rev 5 — PE-3: Physical Access Control', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],

  // ── 3.8  Media Protection ─────────────────────────────────────────────────

  '3.8.1': [
    { label: 'NIST SP 800-53 Rev 5 — MP-2: Media Access / MP-4: Media Storage', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NARA CUI Marking Handbook — Physical Media Marking', url: 'https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf' },
  ],
  '3.8.2': [
    { label: 'NIST SP 800-53 Rev 5 — MP-2: Media Access', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NIST SP 800-111 — Guide to Storage Encryption Technologies', url: 'https://csrc.nist.gov/publications/detail/sp/800-111/final' },
  ],
  '3.8.3': [
    { label: 'NIST SP 800-88 Rev 1 — Guidelines for Media Sanitization', url: 'https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final' },
    { label: 'NIST SP 800-53 Rev 5 — MP-6: Media Sanitization', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CISA — Secure Disposal of Electronic Devices Guidance', url: 'https://www.cisa.gov/resources-tools/resources/deploying-secure-unified-communications-and-collaboration-systems' },
  ],
  '3.8.4': [
    { label: 'NARA CUI Marking Handbook', url: 'https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf' },
    { label: 'NARA CUI Registry — Marking Requirements by Category', url: 'https://www.archives.gov/cui/registry/category-list' },
  ],
  '3.8.5': [
    { label: 'NIST SP 800-53 Rev 5 — MP-5: Media Transport', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NARA CUI Marking Handbook — Transport and Transfer', url: 'https://www.archives.gov/files/cui/20161206-cui-marking-handbook-v1-1.pdf' },
  ],
  '3.8.6': [
    { label: 'NIST SP 800-111 — Guide to Storage Encryption Technologies', url: 'https://csrc.nist.gov/publications/detail/sp/800-111/final' },
    { label: 'NIST CMVP — Search FIPS-validated encryption modules', url: 'https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search' },
    { label: 'NIST SP 800-53 Rev 5 — MP-5(4): Cryptographic Protection During Transport', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.8.7': [
    { label: 'NIST SP 800-53 Rev 5 — MP-7: Media Use', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 3.6: Encrypt Data on End-User Devices', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'DISA STIGs — USB Restrictions by Platform', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.8.8': [
    { label: 'NIST SP 800-53 Rev 5 — MP-7: Media Use (identifiable owner)', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CISA — USB Baiting Attack Awareness', url: 'https://www.cisa.gov/news-events/news/using-caution-usb-drives' },
  ],
  '3.8.9': [
    { label: 'NIST SP 800-53 Rev 5 — MP-4: Media Storage / CP-9: System Backup', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NIST SP 800-111 — Backup Encryption Guidance', url: 'https://csrc.nist.gov/publications/detail/sp/800-111/final' },
    { label: 'CIS Controls v8 — Control 11: Data Recovery', url: 'https://www.cisecurity.org/controls/v8' },
  ],

  // ── 3.9  Personnel Security ───────────────────────────────────────────────

  '3.9.1': [
    { label: 'NIST SP 800-53 Rev 5 — PS-3: Personnel Screening', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'OPM — Federal Investigative Standards (background check standards)', url: 'https://www.opm.gov/investigations/background-investigations/' },
  ],
  '3.9.2': [
    { label: 'NIST SP 800-53 Rev 5 — PS-4: Personnel Termination / PS-5: Personnel Transfer', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 5.3: Disable Dormant Accounts', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'CISA — Insider Threat Mitigation Guide', url: 'https://www.cisa.gov/resources-tools/resources/insider-threat-mitigation-guide' },
  ],

  // ── 3.10  Physical Protection ─────────────────────────────────────────────

  '3.10.1': [
    { label: 'NIST SP 800-116 Rev 1 — Guide to Using PIV Credentials in Physical Access Control Systems', url: 'https://csrc.nist.gov/publications/detail/sp/800-116/rev-1/final' },
    { label: 'NIST SP 800-53 Rev 5 — PE-2: Physical Access Authorizations', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 10: Malware Defenses (physical security context)', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.10.2': [
    { label: 'NIST SP 800-53 Rev 5 — PE-6: Monitoring Physical Access', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NIST SP 800-53 Rev 5 — PE-13: Fire Protection / PE-14: Environmental Controls', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.10.3': [
    { label: 'NIST SP 800-53 Rev 5 — PE-8: Visitor Access Records', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NIST SP 800-53 Rev 5 — PE-3: Physical Access Control', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.10.4': [
    { label: 'NIST SP 800-53 Rev 5 — PE-8: Visitor Access Records', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 13: Network Monitoring and Defense (physical logs)', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.10.5': [
    { label: 'NIST SP 800-53 Rev 5 — PE-3: Physical Access Control', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'NIST SP 800-116 Rev 1 — Physical Access Device Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-116/rev-1/final' },
  ],
  '3.10.6': [
    { label: 'NIST SP 800-46 Rev 2 — Telework and Alternate Work Site Security', url: 'https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final' },
    { label: 'NIST SP 800-53 Rev 5 — PE-17: Alternate Work Site', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CISA — Telework Security Resources', url: 'https://www.cisa.gov/telework' },
  ],

  // ── 3.11  Risk Assessment ─────────────────────────────────────────────────

  '3.11.1': [
    { label: 'NIST SP 800-30 Rev 1 — Guide for Conducting Risk Assessments', url: 'https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final' },
    { label: 'NIST SP 800-39 — Managing Information Security Risk', url: 'https://csrc.nist.gov/publications/detail/sp/800-39/final' },
    { label: 'CISA — Cybersecurity Evaluation Tool (CSET) — Free risk assessment tool', url: 'https://www.cisa.gov/cset' },
  ],
  '3.11.2': [
    { label: 'NIST SP 800-40 Rev 4 — Guide to Enterprise Patch Management Planning', url: 'https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final' },
    { label: 'NIST National Vulnerability Database (NVD)', url: 'https://nvd.nist.gov/' },
    { label: 'CISA — Known Exploited Vulnerabilities Catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    { label: 'CISA — Free Cybersecurity Services (includes vulnerability scanning)', url: 'https://www.cisa.gov/free-cybersecurity-services-and-tools' },
  ],
  '3.11.3': [
    { label: 'NIST SP 800-40 Rev 4 — Patch Management and Vulnerability Remediation', url: 'https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final' },
    { label: 'CISA — Known Exploited Vulnerabilities Catalog (prioritize remediation by KEV)', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    { label: 'NIST SP 800-30 Rev 1 — Risk-Based Remediation Prioritization', url: 'https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final' },
  ],

  // ── 3.12  Security Assessment ────────────────────────────────────────────

  '3.12.1': [
    { label: 'NIST SP 800-115 — Technical Guide to Information Security Testing and Assessment', url: 'https://csrc.nist.gov/publications/detail/sp/800-115/final' },
    { label: 'NIST SP 800-53A Rev 5 — Assessing Security and Privacy Controls', url: 'https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final' },
    { label: 'CISA — Cybersecurity Evaluation Tool (CSET)', url: 'https://www.cisa.gov/cset' },
  ],
  '3.12.2': [
    { label: 'NIST SP 800-171A — Assessing Requirements for CUI (POA&M context)', url: 'https://csrc.nist.gov/publications/detail/sp/800-171a/final' },
    { label: 'NIST SP 800-53 Rev 5 — CA-5: Plan of Action and Milestones', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DoD CMMC Documentation — POA&M Templates', url: 'https://dodcio.defense.gov/CMMC/Documentation/' },
  ],
  '3.12.3': [
    { label: 'NIST SP 800-137 — Information Security Continuous Monitoring (ISCM)', url: 'https://csrc.nist.gov/publications/detail/sp/800-137/final' },
    { label: 'NIST SP 800-137A — Assessing Information Security Continuous Monitoring Programs', url: 'https://csrc.nist.gov/publications/detail/sp/800-137a/final' },
    { label: 'CIS Controls v8 — Control 13: Network Monitoring and Defense', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.12.4': [
    { label: 'NIST SP 800-171A — Assessment Procedures (SSP validation)', url: 'https://csrc.nist.gov/publications/detail/sp/800-171a/final' },
    { label: 'DoD CMMC Documentation — SSP Templates and Guidance', url: 'https://dodcio.defense.gov/CMMC/Documentation/' },
    { label: 'NIST SP 800-18 Rev 1 — Guide for Developing Security Plans', url: 'https://csrc.nist.gov/publications/detail/sp/800-18/rev-1/final' },
  ],

  // ── 3.13  System and Communications Protection ───────────────────────────

  '3.13.1': [
    { label: 'NIST SP 800-41 Rev 1 — Guidelines on Firewalls and Firewall Policy', url: 'https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final' },
    { label: 'NIST SP 800-94 Rev 1 — Guide to Intrusion Detection and Prevention Systems', url: 'https://csrc.nist.gov/publications/detail/sp/800-94/rev-1/draft' },
    { label: 'CIS Controls v8 — Control 13: Network Monitoring and Defense', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.13.2': [
    { label: 'NIST SP 800-160 Vol 1 Rev 1 — Systems Security Engineering', url: 'https://csrc.nist.gov/publications/detail/sp/800-160/vol-1-rev-1/final' },
    { label: 'CISA — Zero Trust Maturity Model', url: 'https://www.cisa.gov/zero-trust-maturity-model' },
    { label: 'CIS Controls v8 — Safeguard 12.2: Establish and Maintain a Secure Network Architecture', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.13.3': [
    { label: 'NIST SP 800-53 Rev 5 — SC-2: Separation of System and User Functionality', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA STIGs — Management Interface Separation Requirements', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.13.4': [
    { label: 'NIST SP 800-53 Rev 5 — SC-4: Information in Shared System Resources', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA STIGs — OS Hardening for Shared Resource Controls', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.13.5': [
    { label: 'NIST SP 800-41 Rev 1 — Network Segmentation and DMZ Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final' },
    { label: 'NIST SP 800-53 Rev 5 — SC-7: Boundary Protection', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 12: Network Infrastructure Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.13.6': [
    { label: 'NIST SP 800-41 Rev 1 — Firewall Policy (deny-by-default)', url: 'https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final' },
    { label: 'NIST SP 800-53 Rev 5 — SC-7(5): Deny by Default / Allow by Exception', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CIS Controls v8 — Control 12.2: Establish Secure Network Architecture', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.13.7': [
    { label: 'NIST SP 800-46 Rev 2 — Split Tunneling Guidance', url: 'https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final' },
    { label: 'NIST SP 800-77 Rev 1 — VPN Configuration (split tunneling)', url: 'https://csrc.nist.gov/publications/detail/sp/800-77/rev-1/final' },
  ],
  '3.13.8': [
    { label: 'NIST SP 800-52 Rev 2 — Guidelines for TLS Implementations', url: 'https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final' },
    { label: 'NIST SP 800-77 Rev 1 — Guide to IPsec VPNs', url: 'https://csrc.nist.gov/publications/detail/sp/800-77/rev-1/final' },
    { label: 'NIST CMVP — FIPS-validated TLS/Cryptographic modules', url: 'https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search' },
  ],
  '3.13.9': [
    { label: 'NIST SP 800-53 Rev 5 — SC-10: Network Disconnect', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA STIGs — Network Session Timeout Configuration', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.13.10': [
    { label: 'NIST SP 800-57 Part 1 Rev 5 — Recommendation for Key Management', url: 'https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final' },
    { label: 'NIST SP 800-57 Part 2 Rev 1 — Best Practices for Key Management Organizations', url: 'https://csrc.nist.gov/publications/detail/sp/800-57-part-2/rev-1/final' },
    { label: 'NIST SP 800-57 Part 3 Rev 1 — Key Management Guidance for Specific Systems', url: 'https://csrc.nist.gov/publications/detail/sp/800-57-part-3/rev-1/final' },
  ],
  '3.13.11': [
    { label: 'NIST CMVP — Search Validated Cryptographic Modules (FIPS 140-2/3)', url: 'https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search' },
    { label: 'FIPS 140-3 — Security Requirements for Cryptographic Modules', url: 'https://csrc.nist.gov/publications/detail/fips/140/3/final' },
    { label: 'NIST SP 800-175B Rev 1 — Guideline for Using Cryptographic Standards', url: 'https://csrc.nist.gov/publications/detail/sp/800-175b/rev-1/final' },
  ],
  '3.13.12': [
    { label: 'NIST SP 800-53 Rev 5 — SC-15: Collaborative Computing Devices and Applications', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA STIGs — Collaboration Platform Security Settings', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.13.13': [
    { label: 'NIST SP 800-53 Rev 5 — SC-18: Mobile Code', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA STIGs — Browser and Mobile Code Configuration', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.13.14': [
    { label: 'NIST SP 800-53 Rev 5 — SC-19: Voice over IP Technologies', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'DISA VoIP STIG', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.13.15': [
    { label: 'NIST SP 800-52 Rev 2 — TLS Session Authenticity', url: 'https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final' },
    { label: 'NIST SP 800-53 Rev 5 — SC-23: Session Authenticity', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
  ],
  '3.13.16': [
    { label: 'NIST SP 800-111 — Guide to Storage Encryption Technologies for End User Devices', url: 'https://csrc.nist.gov/publications/detail/sp/800-111/final' },
    { label: 'NIST CMVP — FIPS-validated Full Disk Encryption modules', url: 'https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search' },
    { label: 'DISA STIGs — Full Disk Encryption Configuration', url: 'https://public.cyber.mil/stigs/' },
  ],

  // ── 3.14  System and Information Integrity ────────────────────────────────

  '3.14.1': [
    { label: 'NIST SP 800-40 Rev 4 — Guide to Enterprise Patch Management Planning', url: 'https://csrc.nist.gov/publications/detail/sp/800-40/rev-4/final' },
    { label: 'CISA — Known Exploited Vulnerabilities Catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    { label: 'CIS Controls v8 — Control 7: Continuous Vulnerability Management', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.14.2': [
    { label: 'NIST SP 800-83 Rev 1 — Guide to Malware Incident Prevention and Handling', url: 'https://csrc.nist.gov/publications/detail/sp/800-83/rev-1/final' },
    { label: 'CIS Controls v8 — Control 10: Malware Defenses', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'CISA — Free Cybersecurity Services (malware protection tools)', url: 'https://www.cisa.gov/free-cybersecurity-services-and-tools' },
  ],
  '3.14.3': [
    { label: 'CISA — Cybersecurity Advisories (subscribe for current alerts)', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
    { label: 'NIST National Vulnerability Database (NVD)', url: 'https://nvd.nist.gov/' },
    { label: 'CISA — Known Exploited Vulnerabilities Catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    { label: 'US-CERT — Alerts and Advisories Archive', url: 'https://www.cisa.gov/uscert/ncas/alerts' },
  ],
  '3.14.4': [
    { label: 'NIST SP 800-83 Rev 1 — Keeping Malware Protections Current', url: 'https://csrc.nist.gov/publications/detail/sp/800-83/rev-1/final' },
    { label: 'CIS Controls v8 — Control 10.2: Configure Automatic Anti-Malware Updates', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'DISA STIGs — Endpoint Protection Configuration', url: 'https://public.cyber.mil/stigs/' },
  ],
  '3.14.5': [
    { label: 'NIST SP 800-83 Rev 1 — Malware Scanning Implementation', url: 'https://csrc.nist.gov/publications/detail/sp/800-83/rev-1/final' },
    { label: 'CIS Controls v8 — Control 10.1: Deploy and Maintain Anti-Malware Software', url: 'https://www.cisecurity.org/controls/v8' },
  ],
  '3.14.6': [
    { label: 'NIST SP 800-137 — Information Security Continuous Monitoring', url: 'https://csrc.nist.gov/publications/detail/sp/800-137/final' },
    { label: 'NIST SP 800-94 Rev 1 — Intrusion Detection and Prevention Systems', url: 'https://csrc.nist.gov/publications/detail/sp/800-94/rev-1/draft' },
    { label: 'CIS Controls v8 — Control 13: Network Monitoring and Defense', url: 'https://www.cisecurity.org/controls/v8' },
    { label: 'CISA — Logging Made Easy (open source SIEM tooling)', url: 'https://www.cisa.gov/resources-tools/resources/logging-made-easy' },
  ],
  '3.14.7': [
    { label: 'NIST SP 800-137 — Unauthorized Use Detection', url: 'https://csrc.nist.gov/publications/detail/sp/800-137/final' },
    { label: 'NIST SP 800-53 Rev 5 — SI-4: System Monitoring', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { label: 'CISA — Zero Trust Maturity Model (behavioral analytics pillar)', url: 'https://www.cisa.gov/zero-trust-maturity-model' },
  ],

};
