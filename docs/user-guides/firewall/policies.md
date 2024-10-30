---
sidebar_position: 1
---

# Policies

Policies can **allow**, permitting connections that match the specified
criteria or **deny**, blocking connections that match the specified criteria.
Each policy can be configured using various parameters to create precise access
control rules.

## Policy Parameters

### Source IP

Controls access based on the origin IP address of the connection. You can:
- Apply the rule to all IP addresses
- Restrict access using regular expressions

### Username

Manages access based on the authentication username of the connection. This
parameter helps enforce user-level access controls across your infrastructure.

### Device Matching

Determines which devices the firewall rule affects. You can configure this
using three approaches:

1. **Global Application**
   - Applies the rule to all devices in your infrastructure
   
2. **Hostname Pattern**
   - Restricts the rule to devices whose hostnames match a specified regular expression
   
3. **Device Tags**
   - Limits the rule to devices that have tags matching the specified regular expression
