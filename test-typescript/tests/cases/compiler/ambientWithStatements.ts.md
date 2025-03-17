__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 370,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 370,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 370,
        "body": [
          {
            "type": "BreakStatement",
            "start": 23,
            "end": 29,
            "label": null
          },
          {
            "type": "ContinueStatement",
            "start": 34,
            "end": 43,
            "label": null
          },
          {
            "type": "DebuggerStatement",
            "start": 48,
            "end": 57
          },
          {
            "type": "DoWhileStatement",
            "start": 62,
            "end": 82,
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 68,
              "body": []
            },
            "test": {
              "type": "Literal",
              "start": 76,
              "end": 80,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 92,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ForInStatement",
            "start": 98,
            "end": 117,
            "body": {
              "type": "BlockStatement",
              "start": 114,
              "end": 117,
              "body": []
            },
            "left": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 108,
              "end": 112,
              "raw": "null",
              "value": null
            }
          },
          {
            "type": "IfStatement",
            "start": 122,
            "end": 144,
            "alternate": {
              "type": "BlockStatement",
              "start": 141,
              "end": 144,
              "body": []
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 132,
              "end": 135,
              "body": []
            },
            "test": {
              "type": "Literal",
              "start": 126,
              "end": 130,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 151,
            "directive": null,
            "expression": {
              "type": "Literal",
              "start": 149,
              "end": 150,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "LabeledStatement",
            "start": 156,
            "end": 165,
            "body": {
              "type": "VariableDeclaration",
              "start": 159,
              "end": 165,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 163,
                  "end": 164,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "label": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 170,
            "end": 177,
            "argument": null
          },
          {
            "type": "SwitchStatement",
            "start": 182,
            "end": 271,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 203,
                "end": 229,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 223,
                    "end": 229,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 208,
                  "end": 209,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SwitchCase",
                "start": 238,
                "end": 265,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 259,
                    "end": 265,
                    "label": null
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ThrowStatement",
            "start": 276,
            "end": 289,
            "argument": {
              "type": "Literal",
              "start": 282,
              "end": 288,
              "raw": "\"nooo\"",
              "value": "nooo"
            }
          },
          {
            "type": "TryStatement",
            "start": 294,
            "end": 347,
            "block": {
              "type": "BlockStatement",
              "start": 298,
              "end": 305,
              "body": []
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 340,
              "end": 347,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 310,
              "end": 327,
              "body": {
                "type": "BlockStatement",
                "start": 320,
                "end": 327,
                "body": []
              },
              "param": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "WithStatement",
            "start": 352,
            "end": 368,
            "body": {
              "type": "BlockStatement",
              "start": 361,
              "end": 368,
              "body": []
            },
            "object": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
