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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
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
              "value": true,
              "raw": "true"
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 93,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 92,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForInStatement",
            "start": 98,
            "end": 117,
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
              "value": null,
              "raw": "null"
            },
            "body": {
              "type": "BlockStatement",
              "start": 114,
              "end": 117,
              "body": []
            }
          },
          {
            "type": "IfStatement",
            "start": 122,
            "end": 144,
            "test": {
              "type": "Literal",
              "start": 126,
              "end": 130,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 132,
              "end": 135,
              "body": []
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 141,
              "end": 144,
              "body": []
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 151,
            "expression": {
              "type": "Literal",
              "start": 149,
              "end": 150,
              "value": 1,
              "raw": "1"
            },
            "directive": null
          },
          {
            "type": "LabeledStatement",
            "start": 156,
            "end": 165,
            "label": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 159,
              "end": 165,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 163,
                  "end": 164,
                  "id": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
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
            "discriminant": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 203,
                "end": 229,
                "test": {
                  "type": "Literal",
                  "start": 208,
                  "end": 209,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 223,
                    "end": 229,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 238,
                "end": 265,
                "test": null,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 259,
                    "end": 265,
                    "label": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ThrowStatement",
            "start": 276,
            "end": 289,
            "argument": {
              "type": "Literal",
              "start": 282,
              "end": 288,
              "value": "nooo",
              "raw": "\"nooo\""
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
            "handler": {
              "type": "CatchClause",
              "start": 310,
              "end": 327,
              "param": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 320,
                "end": 327,
                "body": []
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 340,
              "end": 347,
              "body": []
            }
          },
          {
            "type": "WithStatement",
            "start": 352,
            "end": 368,
            "object": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 361,
              "end": 368,
              "body": []
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
