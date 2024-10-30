# Firewall Rules

:::info
This feature is only available in [ShellHub Cloud](https://shellhub.io) and
[ShellHub Enterprise](https://www.shellhub.io/products/enterprise).
:::

Firewall rules are security policies that control access to devices in
ShellHub. They serve as a critical security mechanism for managing connections
to your devices based on various parameters and conditions. Each rule can be
applied globally, to specific devices using regular expressions, or via tags.

[Members](../settings/namespace/members/index.md) with administrative
privileges can create and manage firewall rules. Rules can be enabled or
disabled at any time, providing flexibility in enforcing security policies
without removing the rules entirely.

Rules are enforced based on **Rule Priority** in descending order. A lower
priority number indicates a higher precedence, and both positive and negative
numbers can be used for fine-grained prioritization.

:::tip
When creating rules, consider leaving gaps between priority numbers (e.g., 10,
20, 30).
:::

## Common Use Cases

Firewall rules can be applied to a wide range of security requirements. Here
are some common scenarios:

1. **Corporate Network Access**
   - Allow connections only from company IPs: `10.0.0.*` and `172.16.*.*`

2. **Root Access Prevention**
   - Deny all connections to the `root` user for enhanced security

3. **Administrative Control**
   - Restrict admin users to specific networks: Allow `admin*` from `192.168.1.*`

4. **Development Environment**
   - Allow only `dev-*` users to access devices tagged with `development`

5. **Production Security**
   - Allow access to `prod-*` hostnames only from VPN IPs

6. **Contractor Access**
   - Restrict contractors to devices tagged with `contractor-accessible`
