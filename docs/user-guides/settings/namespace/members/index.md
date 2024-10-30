# Members

Members are users with access rights to contribute within a namespace. They are
essential to collaborative environments, allowing multiple users to work
together in the same namespace. Each member is assigned a specific
[role](roles) that defines their access level and permissions within the
namespace. These roles are hierarchical, so members in higher roles inherit the
permissions of those in lower roles.

:::tip
When a namespace is created, the user who creates it is automatically
designated as the **owner**. The owner has the highest level of permissions
within the namespace.
:::

Members can have one of two statuses: **pending** or **accepted**. Members with
a **pending** status cannot perform any actions until they accept the
invitation.

:::note
In *enterprise* and *community* environments, members are always assigned an
**accepted** status.
:::

If a user invited as a member to a namespace does not yet have an account, they
will first be redirected to complete their registration and then accept the
invitation.

## API Keys

Members can generate [API keys](../api-keys/index.md) for programmatic access
to the namespace. They can only create API keys with permissions equal to or
lower than their own role. API keys are exclusively for namespace management;
user-related actions (such as updates) are restricted.
