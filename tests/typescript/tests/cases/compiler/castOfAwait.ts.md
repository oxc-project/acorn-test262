__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 155,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 25,
            "end": 42,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 25,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              },
              "expression": {
                "type": "AwaitExpression",
                "start": 34,
                "end": 41,
                "argument": {
                  "type": "Literal",
                  "start": 40,
                  "end": 41,
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 47,
            "end": 62,
            "expression": {
              "type": "UnaryExpression",
              "start": 47,
              "end": 61,
              "operator": "typeof",
              "argument": {
                "type": "AwaitExpression",
                "start": 54,
                "end": 61,
                "argument": {
                  "type": "Literal",
                  "start": 60,
                  "end": 61,
                  "value": 0,
                  "raw": "0"
                }
              },
              "prefix": true
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 80,
            "expression": {
              "type": "UnaryExpression",
              "start": 67,
              "end": 79,
              "operator": "void",
              "argument": {
                "type": "AwaitExpression",
                "start": 72,
                "end": 79,
                "argument": {
                  "type": "Literal",
                  "start": 78,
                  "end": 79,
                  "value": 0,
                  "raw": "0"
                }
              },
              "prefix": true
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 85,
            "end": 134,
            "expression": {
              "type": "AwaitExpression",
              "start": 85,
              "end": 133,
              "argument": {
                "type": "UnaryExpression",
                "start": 91,
                "end": 133,
                "operator": "void",
                "argument": {
                  "type": "TSTypeAssertion",
                  "start": 96,
                  "end": 133,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  },
                  "expression": {
                    "type": "UnaryExpression",
                    "start": 105,
                    "end": 133,
                    "operator": "typeof",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 112,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 113,
                        "end": 119
                      },
                      "expression": {
                        "type": "UnaryExpression",
                        "start": 121,
                        "end": 133,
                        "operator": "void",
                        "argument": {
                          "type": "AwaitExpression",
                          "start": 126,
                          "end": 133,
                          "argument": {
                            "type": "Literal",
                            "start": 132,
                            "end": 133,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "prefix": true
                      }
                    },
                    "prefix": true
                  }
                },
                "prefix": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 153,
            "expression": {
              "type": "AwaitExpression",
              "start": 139,
              "end": 152,
              "argument": {
                "type": "AwaitExpression",
                "start": 145,
                "end": 152,
                "argument": {
                  "type": "Literal",
                  "start": 151,
                  "end": 152,
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
