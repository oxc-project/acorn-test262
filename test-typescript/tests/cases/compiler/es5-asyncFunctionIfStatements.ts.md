__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 242,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 100,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 100,
        "body": [
          {
            "type": "IfStatement",
            "start": 67,
            "end": 98,
            "alternate": {
              "type": "BlockStatement",
              "start": 92,
              "end": 98,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 94,
                  "end": 96,
                  "expression": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 80,
              "end": 86,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 82,
                  "end": 84,
                  "expression": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "AwaitExpression",
              "start": 71,
              "end": 78,
              "argument": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 58,
        "decorators": [],
        "name": "ifStatement1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 171,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 171,
        "body": [
          {
            "type": "IfStatement",
            "start": 138,
            "end": 169,
            "alternate": {
              "type": "BlockStatement",
              "start": 163,
              "end": 169,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 165,
                  "end": 167,
                  "expression": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 145,
              "end": 157,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 147,
                  "end": 155,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 147,
                    "end": 154,
                    "argument": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 129,
        "decorators": [],
        "name": "ifStatement2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 242,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 203,
        "end": 242,
        "body": [
          {
            "type": "IfStatement",
            "start": 209,
            "end": 240,
            "alternate": {
              "type": "BlockStatement",
              "start": 228,
              "end": 240,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 230,
                  "end": 238,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 230,
                    "end": 237,
                    "argument": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 237,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 216,
              "end": 222,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 218,
                  "end": 220,
                  "expression": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 219,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 200,
        "decorators": [],
        "name": "ifStatement3",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
