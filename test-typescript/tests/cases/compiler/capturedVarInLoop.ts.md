__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 137,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 137,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 35,
            "end": 67,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 39,
                "end": 48,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 42,
                  "decorators": [],
                  "name": "str",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 45,
                  "end": 48,
                  "raw": "'x'",
                  "value": "x"
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 50,
                "end": 66,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 53,
                  "decorators": [],
                  "name": "len",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 56,
                  "end": 66,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 59,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 66,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 72,
            "end": 97,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 76,
                "end": 96,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 83,
                  "decorators": [],
                  "name": "lambda1",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 86,
                  "end": 96,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 93,
                    "end": 96,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 134,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 113,
                  "decorators": [],
                  "name": "lambda2",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 116,
                  "end": 134,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 122,
                    "end": 134,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 133,
                        "decorators": [],
                        "name": "len",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 129,
                      "decorators": [],
                      "name": "lambda1",
                      "optional": false
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 14,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 14,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 22,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 20,
          "end": 22,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 24,
        "end": 27,
        "argument": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
