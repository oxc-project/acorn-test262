__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "a",
        "raw": "\"a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 41,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 25,
            "end": 39,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 29,
                "end": 38,
                "id": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 23,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 22,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
