# Managing Firewall Rules

ShellHub provides a firewall feature that allows administrators to manage and restrict access to devices based on various parameters. Firewall rules can be configured to control access by source IP, user, device, and more. These rules are customizable and can be enabled or disabled as needed, without having to recreate the rule every time.

:::info

This feature is only available in [ShellHub Cloud](https://shellhub.io)
and [ShellHub Enterprise](https://www.shellhub.io/products/enterprise).

:::

## Create a firewall rule

From the Firewall Rules page, click **Add Rule**. You will the see the following form:

![](/img/new-firewall-rule.png)

Let's dive in each parameter:

### Rule Status
- **Active**: Enables the firewall rule, allowing it to be applied.
- **Inactive**: Disables the firewall rule without deleting it. This is useful if you want to keep a rule for future use but don’t need it to be active immediately.

### Rule Priority

The **Rule Priority** determines the order in which firewall rules are applied when there is a conflict between them. It's important to understand that **the lower the number, the higher the priority**.

- **Higher priority (lower number)**: A rule with priority `0` will take precedence over a rule with priority `5`, meaning it will be applied first.
- **Lower priority (higher number)**: A rule with a higher number, like `10`, will be considered only if no higher-priority rule (with a lower number) matches.

![](/img/firewall-rules-priority.png)

#### Negative numbers

In ShellHub, you can use both negative and positive numbers for rule priority. It's important to remember that a negative number has higher priority than a positive number, even though, in absolute value (module), it might seem the opposite.

Example:
A rule with priority -1 has higher priority than a rule with priority 0 or 5.
Even though -1 is "smaller" in value, it still has a higher priority than any positive number.


#### Key Points:
- Always assign a lower number to more critical rules to ensure they are applied first.
- If two or more rules conflict, the one with the **lowest priority number** wins.

### Rule Policy
- **Allow**: The rule will permit connections based on the specified criteria.
- **Deny**: The rule will block connections based on the specified criteria.

## Source IP Access Restriction
Defines the IP addresses that are affected by the rule. This can be applied to all IP addresses or restricted using regular expressions.

- **Define source IP to all devices**: Applies the rule to connections from any IP.
- **Restrict source IP using regexp**: Restricts the rule to IPs that match a regular expression pattern. 
  
  :::info

  For example:
  The Regular expression `10.0.0.*`:
  The `*` is a wildcard which can assume any value. So regular expression matches any IP starting with `10.0.0.`.
  If you want to learn more about Regular Expressions, you read about [clicking here](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html).

  :::

### Device Username Access Restriction
You can restrict rules based on the username of the connecting user.

- **Define rule to all users**: Applies the rule to any user.
- **Restrict access using regexp for username**: Restricts the rule to usernames matching a regular expression pattern.

## Device Access Restriction
This option restricts which devices the firewall rule applies to, either for all devices or based on regular expressions and tags.

- **Define rule to all devices**: Applies the rule to all devices.
- **Restrict rule with a regexp for hostname**: Limits the rule to devices whose hostnames match the given regular expression.
- **Restrict rule by device tags**: Limits the rule to devices with tags matching the specified regular expression.

## Example Use Cases

### Allow Access for a Specific IP Range
1. Set **Source IP Access Restriction** to "Restrict source IP using regexp."
2. Use a pattern like `192.168.1.*` to allow only IPs in that range.

### Block Specific Users
1. Set **Device Username Access Restriction** to "Restrict access using regexp for username."
2. Use a pattern like `*smith` to block users with usernames ending with `smith`.

### Deny Access Based on Device Tag
1. Set **Device Access Restriction** to "Restrict rule by device tags."
2. Use a tag pattern like `*test*` to deny access from devices which tags contains the word `test`.

## Conclusion
The ShellHub firewall feature provides a flexible way to manage device access through customizable rules. By combining IP address restrictions, username filters, and device tags, administrators can effectively secure their systems based on the specific needs of their environment.
