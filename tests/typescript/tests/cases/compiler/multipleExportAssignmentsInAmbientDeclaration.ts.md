__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 92,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "m1",
        "raw": "\"m1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 92,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 39,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 39,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 39,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 33,
                      "end": 39
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 58,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 57,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 51,
                      "end": 57
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 63,
            "end": 74,
            "expression": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSExportAssignment",
            "start": 79,
            "end": 90,
            "expression": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
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
