a.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 25,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 25,
        "body": []
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "\"http\"",
        "value": "http"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 123,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 66,
        "end": 123,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 72,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 83,
              "decorators": [],
              "name": "http",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 86,
              "end": 101,
              "expression": {
                "type": "Literal",
                "start": 94,
                "end": 100,
                "raw": "'http'",
                "value": "http"
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "start": 107,
            "end": 121,
            "expression": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "decorators": [],
              "name": "http",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 42,
        "end": 65,
        "raw": "'intern/dojo/node!http'",
        "value": "intern/dojo/node!http"
      }
    }
  ],
  "sourceType": "module"
}
```
a.ts
```json
{
  "type": "Program",
  "start": 32,
  "end": 78,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 78,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 77,
        "raw": "'intern/dojo/node!http'",
        "value": "intern/dojo/node!http"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 39,
          "end": 48,
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "decorators": [],
            "name": "http",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
