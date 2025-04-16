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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 39,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 39,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 33,
                      "end": 39
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 58,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 57,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 51,
                      "end": 57
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "b",
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
  "sourceType": "script",
  "hashbang": null
}
```
