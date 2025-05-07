__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 36,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 35,
          "raw": "\"externalModule\"",
          "value": "externalModule",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 38,
      "end": 105,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 58,
        "end": 105,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 64,
            "end": 103,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "decorators": [],
              "name": "im2",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 77,
              "end": 102,
              "expression": {
                "type": "Literal",
                "start": 85,
                "end": 101,
                "raw": "\"externalModule\"",
                "value": "externalModule",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 53,
        "end": 57,
        "raw": "\"m1\"",
        "value": "m1",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
