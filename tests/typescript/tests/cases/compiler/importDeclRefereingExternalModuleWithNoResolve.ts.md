__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "externalModule",
          "raw": "\"externalModule\"",
          "start": 19,
          "end": 35
        },
        "start": 11,
        "end": 36
      },
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m1",
        "raw": "\"m1\"",
        "start": 53,
        "end": 57
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im2",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 74
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "externalModule",
                "raw": "\"externalModule\"",
                "start": 85,
                "end": 101
              },
              "start": 77,
              "end": 102
            },
            "importKind": "value",
            "start": 64,
            "end": 103
          }
        ],
        "start": 58,
        "end": 105
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 38,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
