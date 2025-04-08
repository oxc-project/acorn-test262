__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "value": "http",
        "raw": "\"http\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 25,
        "body": []
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 123,
      "id": {
        "type": "Literal",
        "start": 42,
        "end": 65,
        "value": "intern/dojo/node!http",
        "raw": "'intern/dojo/node!http'"
      },
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
              "name": "http",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 86,
              "end": 101,
              "expression": {
                "type": "Literal",
                "start": 94,
                "end": 100,
                "value": "http",
                "raw": "'http'"
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 107,
            "end": 121,
            "expression": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "name": "http",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 39,
          "end": 48,
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "name": "http",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 77,
        "value": "intern/dojo/node!http",
        "raw": "'intern/dojo/node!http'"
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
