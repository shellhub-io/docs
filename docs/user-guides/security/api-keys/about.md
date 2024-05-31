# About API Keys

- API keys have been available since v0.15.0.

API keys are unique identifiers used to authenticate API requests, typically
replacing login-based authentication when automating processes.

They have a defined lifespan, ranging from 1 day to 365 days. API keys are
namespace-related and cannot be used to authenticate user endpoints. An API key
can also exist indefinitely (until deleted). As it is designed to authenticate
within namespaces, similar to members, API keys have
[roles](../../namespaces/members#roles). Users cannot create an API key with
more privileges than their own role.

API keys are used through the `X-API-KEY` header and are preferred over JWT
tokens, meaning that requests providing both will evaluate the API key only.

:::note
Except for `GET` endpoints, API key-related endpoints cannot be authenticated
with an API key.
:::
