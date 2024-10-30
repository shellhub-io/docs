# API Keys

API keys are unique identifiers that serve as a security mechanism for
accessing an API. They are essential for controlling access to resources and
ensuring that only authorized users or applications can make requests. Each API
key is linked to a specific [namespace](../../../namespaces/index.md) and
grants permissions based on the [role](../members/roles.md) assigned to it. API
keys are particularly useful for:

- **Integration with Third-Party Applications**: Allowing external applications
  to securely interact with your API.
- **Automated Processes and Scripts**: Enabling automated systems to perform
  actions on behalf of users without manual intervention.

[Members](../members/index.md) can create API keys only if their role is higher
than *observer*. Additionally, any API key created must have the same or lower
role than that of the member who created it. API keys can also have an optional
expiration date, which can be set to 30, 60, 90, or 365 days after creation and
**cannot** be reset.

Each API key is internally identified by a UUID, which is only returned upon
creation and, for security purposes, **cannot** be retrieved later. The
external identifier for the API key is a unique name.

## Important Considerations

- **Security**: Keep API keys confidential. Avoid exposing them in publicly
  accessible code repositories or client-side applications. Consider using
  environment variables or secure vaults for storage.
- **Expiration**: Setting an expiration date on API keys enhances security by
  ensuring that keys are regularly rotated, limiting the potential damage from a
  compromised key.
