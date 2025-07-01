__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "http",
        "raw": "\"http\"",
        "start": 15,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 22,
        "end": 25
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "intern/dojo/node!http",
        "raw": "'intern/dojo/node!http'",
        "start": 42,
        "end": 65
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "http",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 83
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "http",
                "raw": "'http'",
                "start": 94,
                "end": 100
              },
              "start": 86,
              "end": 101
            },
            "importKind": "value",
            "start": 72,
            "end": 102
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "http",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 120
            },
            "start": 107,
            "end": 121
          }
        ],
        "start": 66,
        "end": 123
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 27,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 124
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "http",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 48
          },
          "start": 39,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "intern/dojo/node!http",
        "raw": "'intern/dojo/node!http'",
        "start": 54,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 78
}
```
