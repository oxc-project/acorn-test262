__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 267,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 110,
            "end": 118,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 128,
            "end": 130,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 140,
            "end": 156,
            "arguments": [
              {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 153,
                "end": 155,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 144,
              "end": 149,
              "decorators": [],
              "name": "Proxy",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 179,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 178,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 175,
            "end": 177,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 159,
          "end": 174,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 159,
            "end": 166,
            "decorators": [],
            "name": "Reflect",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 174,
            "decorators": [],
            "name": "ownKeys",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 181,
      "end": 266,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 199,
        "end": 266,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 205,
            "end": 216,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 209,
                "end": 215,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 213,
                  "end": 215,
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
            "start": 221,
            "end": 264,
            "body": {
              "type": "BlockStatement",
              "start": 236,
              "end": 264,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 246,
                  "end": 258,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 246,
                    "end": 257,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 252,
                      "end": 257,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 253,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 256,
                        "end": 257,
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
              "start": 228,
              "end": 234,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 232,
                "end": 234,
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
        "start": 191,
        "end": 196,
        "decorators": [],
        "name": "idGen",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
