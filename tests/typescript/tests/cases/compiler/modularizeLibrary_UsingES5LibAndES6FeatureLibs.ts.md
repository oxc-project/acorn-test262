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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 14
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 23
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 26,
            "end": 28
          },
          "definite": false,
          "start": 22,
          "end": 28
        }
      ],
      "declare": false,
      "start": 18,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 47
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 51,
                "end": 53
              }
            ],
            "start": 38,
            "end": 54
          },
          "definite": false,
          "start": 34,
          "end": 54
        }
      ],
      "declare": false,
      "start": 30,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 64
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "ownKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "optional": false,
          "computed": false,
          "start": 57,
          "end": 72
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 73,
            "end": 75
          }
        ],
        "optional": false,
        "start": 57,
        "end": 76
      },
      "directive": null,
      "start": 57,
      "end": 77
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "idGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 94
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 108
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 111,
                  "end": 113
                },
                "definite": false,
                "start": 107,
                "end": 113
              }
            ],
            "declare": false,
            "start": 103,
            "end": 114
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 130,
                "end": 132
              },
              "start": 126,
              "end": 132
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 154,
                        "end": 155
                      },
                      "start": 150,
                      "end": 155
                    },
                    "start": 144,
                    "end": 155
                  },
                  "directive": null,
                  "start": 144,
                  "end": 156
                }
              ],
              "start": 134,
              "end": 162
            },
            "start": 119,
            "end": 162
          }
        ],
        "start": 97,
        "end": 164
      },
      "expression": false,
      "start": 79,
      "end": 164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
