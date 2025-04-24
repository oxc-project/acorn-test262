__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 16,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 26,
            "end": 28,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 38,
            "end": 54,
            "arguments": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 51,
                "end": 53,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 76,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 73,
            "end": 75,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 57,
          "end": 72,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 64,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "ownKeys",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 79,
      "end": 164,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 164,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 103,
            "end": 114,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 113,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 111,
                  "end": 113,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 119,
            "end": 162,
            "body": {
              "type": "BlockStatement",
              "start": 134,
              "end": 162,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 144,
                  "end": 156,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 144,
                    "end": 155,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 150,
                      "end": 155,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 154,
                        "end": 155,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 126,
              "end": 132,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 130,
                "end": 132,
                "raw": "20",
                "value": 20
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 94,
        "decorators": [],
        "name": "idGen",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
