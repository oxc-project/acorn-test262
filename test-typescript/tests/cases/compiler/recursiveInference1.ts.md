__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "fib",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 21,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 15,
              "end": 21
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 71,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 25,
            "end": 69,
            "argument": {
              "type": "ConditionalExpression",
              "start": 32,
              "end": 68,
              "test": {
                "type": "BinaryExpression",
                "start": 32,
                "end": 38,
                "left": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<=",
                "right": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "BinaryExpression",
                "start": 45,
                "end": 68,
                "left": {
                  "type": "CallExpression",
                  "start": 45,
                  "end": 55,
                  "callee": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 48,
                    "name": "fib",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 49,
                      "end": 54,
                      "left": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "start": 53,
                        "end": 54,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "start": 58,
                  "end": 68,
                  "callee": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 61,
                    "name": "fib",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 62,
                      "end": 67,
                      "left": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "start": 66,
                        "end": 67,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 82,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 85,
            "end": 91,
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "name": "fib",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "value": 5,
                "raw": "5"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
