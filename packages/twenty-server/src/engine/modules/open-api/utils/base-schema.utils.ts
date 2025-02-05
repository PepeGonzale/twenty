import { OpenAPIV3_1 } from 'openapi-types';

import { computeOpenApiPath } from 'src/engine/modules/open-api/utils/path.utils';

export const baseSchema = (
  schemaName: 'core' | 'metadata',
  serverUrl: string,
): OpenAPIV3_1.Document => {
  return {
    openapi: '3.0.3',
    info: {
      title: 'Twenty Api',
      description: `This is a **Twenty REST/API** playground based on the **OpenAPI 3.0 specification**.`,
      termsOfService: 'https://github.com/twentyhq/twenty?tab=coc-ov-file',
      contact: {
        email: 'felix@twenty.com',
      },
      license: {
        name: 'AGPL-3.0',
        url: 'https://github.com/twentyhq/twenty?tab=AGPL-3.0-1-ov-file#readme',
      },
      version: '0.2.0',
    },
    // Testing purposes
    servers: [
      {
        url: `${serverUrl}/rest/${schemaName !== 'core' ? schemaName : ''}`,
        description: 'Production Development',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description:
            'Enter the token with the `Bearer: ` prefix, e.g. "Bearer abcde12345".',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    externalDocs: {
      description: 'Find out more about **Twenty**',
      url: 'https://twenty.com',
    },
    paths: { [`/open-api/${schemaName}`]: computeOpenApiPath(serverUrl) },
  };
};
