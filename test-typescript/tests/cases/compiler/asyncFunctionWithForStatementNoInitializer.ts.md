__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 311,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 94,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 94,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 38,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 38,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 43,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 47,
                "end": 57,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 52,
                  "decorators": [],
                  "name": "limit",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 55,
                  "end": 57,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 62,
            "end": 92,
            "body": {
              "type": "BlockStatement",
              "start": 85,
              "end": 92,
              "body": []
            },
            "init": null,
            "test": {
              "type": "BinaryExpression",
              "start": 69,
              "end": 78,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 73,
                "end": 78,
                "decorators": [],
                "name": "limit",
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 80,
              "end": 83,
              "argument": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 195,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 195,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 125,
            "end": 134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 134,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 133,
                  "end": 134,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 139,
            "end": 153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 143,
                "end": 153,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 148,
                  "decorators": [],
                  "name": "limit",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 151,
                  "end": 153,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 158,
            "end": 193,
            "body": {
              "type": "BlockStatement",
              "start": 186,
              "end": 193,
              "body": []
            },
            "init": {
              "type": "AssignmentExpression",
              "start": 163,
              "end": 168,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 167,
                "end": 168,
                "raw": "1",
                "value": 1
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 170,
              "end": 179,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "decorators": [],
                "name": "limit",
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 181,
              "end": 184,
              "argument": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 116,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 197,
      "end": 262,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 220,
        "end": 262,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 226,
            "end": 235,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 235,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 234,
                  "end": 235,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 240,
            "end": 260,
            "body": {
              "type": "BlockStatement",
              "start": 253,
              "end": 260,
              "body": []
            },
            "init": null,
            "test": null,
            "update": {
              "type": "UpdateExpression",
              "start": 248,
              "end": 251,
              "argument": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 217,
        "decorators": [],
        "name": "test3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 264,
      "end": 311,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 287,
        "end": 311,
        "body": [
          {
            "type": "ForStatement",
            "start": 293,
            "end": 309,
            "body": {
              "type": "BlockStatement",
              "start": 302,
              "end": 309,
              "body": []
            },
            "init": null,
            "test": null,
            "update": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 284,
        "decorators": [],
        "name": "test4",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
