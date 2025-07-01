__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 16
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              },
              "expression": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 40,
                  "end": 41
                },
                "start": 34,
                "end": 41
              },
              "start": 25,
              "end": 41
            },
            "directive": null,
            "start": 25,
            "end": 42
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 60,
                  "end": 61
                },
                "start": 54,
                "end": 61
              },
              "prefix": true,
              "start": 47,
              "end": 61
            },
            "directive": null,
            "start": 47,
            "end": 62
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 78,
                  "end": 79
                },
                "start": 72,
                "end": 79
              },
              "prefix": true,
              "start": 67,
              "end": 79
            },
            "directive": null,
            "start": 67,
            "end": 80
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  },
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 113,
                        "end": 119
                      },
                      "expression": {
                        "type": "UnaryExpression",
                        "operator": "void",
                        "argument": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 132,
                            "end": 133
                          },
                          "start": 126,
                          "end": 133
                        },
                        "prefix": true,
                        "start": 121,
                        "end": 133
                      },
                      "start": 112,
                      "end": 133
                    },
                    "prefix": true,
                    "start": 105,
                    "end": 133
                  },
                  "start": 96,
                  "end": 133
                },
                "prefix": true,
                "start": 91,
                "end": 133
              },
              "start": 85,
              "end": 133
            },
            "directive": null,
            "start": 85,
            "end": 134
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 151,
                  "end": 152
                },
                "start": 145,
                "end": 152
              },
              "start": 139,
              "end": 152
            },
            "directive": null,
            "start": 139,
            "end": 153
          }
        ],
        "start": 19,
        "end": 155
      },
      "expression": false,
      "start": 0,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
