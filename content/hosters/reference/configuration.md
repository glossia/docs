---
title: Configuration    
titleTemplate: :title | Reference | Hosters | Glossia Documentation
---

# Configuration

Glossia is configured at runtime using environment variables. Some configuration is required for Glossia to function, and they'll get checked at startup, failing if they're not present.

The following sections describe the configuration variables that are available organized by category.

## Email

Glossia needs to send emails to users and therefore needs an SMTP server or a service to send them. To configure the SMTP server, you can set the following environment variables:

| Variable                       | Description                                                                                     | Required | Default | Valid values |
| ------------------------------ | ----------------------------------------------------------------------------------------------- | -------- | ------- | ------------ |
| GLOSSIA_EMAIL_ADAPTER          | The email adapter to use for sending emails (e.g., SMTP).                                    | Yes      |         | smtp         |
| GLOSSIA_EMAIL_SMTP_RELAY       | The SMTP server to relay emails through.                                                      | Yes      |         |              |
| GLOSSIA_EMAIL_SMTP_USERNAME    | The username for authenticating with the SMTP server.                                         | Yes      |         |              |
| GLOSSIA_EMAIL_SMTP_PASSWORD    | The password for authenticating with the SMTP server.                                         | Yes      |         |              |
| GLOSSIA_EMAIL_SMTP_PORT        | The port to connect to the SMTP server.                                                       | Yes      |         |              |
| GLOSSIA_EMAIL_SMTP_RETRIES     | The number of retries for sending emails.                                                     | No       | 3       |              |
| GLOSSIA_EMAIL_SMTP_NO_MX_LOOKUPS | Whether to skip MX lookups when sending emails.                                               | No       | false   | true, false  |
| GLOSSIA_EMAIL_SMTP_AUTH        | The authentication method to use with the SMTP server.                                        | No       | if_available | always, never, if_available |
| GLOSSIA_EMAIL_SMTP_SSL         | Whether to use SSL for the SMTP connection.                                                   | No       | false   | true, false  |
| GLOSSIA_EMAIL_SMTP_TLS         | Whether to use TLS for the SMTP connection.                                                   | No       | if_available | always, never, if_available |

> [!NOTE]
> If you'd like to use a service's API directly, we accept contributions adding support for any of the [available adapters](https://hexdocs.pm/swoosh/Swoosh.html#module-adapters).