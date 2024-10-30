--- 
sidebar_position: 2
---

# Roles

A **role** defines the set of privileges assigned to a member within a
namespace. Each member must be assigned a role that determines the actions they
are permitted to perform in the namespace. There is also a special role,
**owner**, which is assigned to the creator of the namespace. The owner has
full control over the namespace, including billing management.

The following roles can be assigned to members:

- **administrator**: Administrators have full access to the namespace and can
  perform almost all actions that the owner can, with the exception of
  accessing billing information.
- **operator**: Operators can perform core operations on devices but have
  limited administrative privileges.
- **observer**: Observers have the most restricted access. They can only
  connect to devices and view details about the devices and their sessions, but
  cannot modify anything.
