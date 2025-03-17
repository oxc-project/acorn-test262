__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 28,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7,
                "end": 28,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8,
                    "end": 17,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9,
                      "end": 17,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 11,
                        "end": 17
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 90,
      "expression": {
        "type": "AssignmentExpression",
        "start": 31,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "SequenceExpression",
          "start": 36,
          "end": 88,
          "expressions": [
            {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "value": 100,
              "raw": "100"
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 41,
              "end": 88,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 88,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 52,
                    "end": 72,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 58,
                        "end": 71,
                        "id": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 67,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 59,
                            "end": 67,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 61,
                              "end": 67
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 77,
                    "end": 86,
                    "argument": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
