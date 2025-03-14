contextuallyTypeCommaOperator02.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 28,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7,
                "end": 28,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8,
                    "end": 17,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9,
                      "end": 17,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 11,
                        "end": 17
                      }
                    }
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "decorators": [],
          "name": "x",
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
              "raw": "100",
              "value": 100
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 41,
              "end": 88,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 67,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 59,
                            "end": 67,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 61,
                              "end": 67
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 77,
                    "end": 86,
                    "argument": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ]
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
