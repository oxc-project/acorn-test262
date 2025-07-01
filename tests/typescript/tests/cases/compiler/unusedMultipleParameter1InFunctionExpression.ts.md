__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  },
                  "start": 26,
                  "end": 34
                },
                "start": 20,
                "end": 34
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 45,
                    "end": 51
                  },
                  "start": 43,
                  "end": 51
                },
                "start": 36,
                "end": 51
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unused",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 69
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 72,
                        "end": 74
                      },
                      "definite": false,
                      "start": 63,
                      "end": 74
                    }
                  ],
                  "declare": false,
                  "start": 59,
                  "end": 75
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "person2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 87
                    },
                    "right": {
                      "type": "Literal",
                      "value": "Dummy value",
                      "raw": "\"Dummy value\"",
                      "start": 90,
                      "end": 103
                    },
                    "start": 80,
                    "end": 103
                  },
                  "directive": null,
                  "start": 80,
                  "end": 104
                }
              ],
              "start": 53,
              "end": 106
            },
            "expression": false,
            "start": 11,
            "end": 106
          },
          "definite": false,
          "start": 4,
          "end": 106
        }
      ],
      "declare": false,
      "start": 0,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
