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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 36,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 35,
          "value": "externalModule",
          "raw": "\"externalModule\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 38,
      "end": 105,
      "id": {
        "type": "Literal",
        "start": 53,
        "end": 57,
        "value": "m1",
        "raw": "\"m1\""
      },
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
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 77,
              "end": 102,
              "expression": {
                "type": "Literal",
                "start": 85,
                "end": 101,
                "value": "externalModule",
                "raw": "\"externalModule\""
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
