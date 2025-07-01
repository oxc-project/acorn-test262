__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 16
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 23,
            "end": 29
          },
          {
            "type": "ContinueStatement",
            "label": null,
            "start": 34,
            "end": 43
          },
          {
            "type": "DebuggerStatement",
            "start": 48,
            "end": 57
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 65,
              "end": 68
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 76,
              "end": 80
            },
            "start": 62,
            "end": 82
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "init": null,
                "definite": false,
                "start": 91,
                "end": 92
              }
            ],
            "declare": false,
            "start": 87,
            "end": 93
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 108,
              "end": 112
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 114,
              "end": 117
            },
            "start": 98,
            "end": 117
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 126,
              "end": 130
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 132,
              "end": 135
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [],
              "start": 141,
              "end": 144
            },
            "start": 122,
            "end": 144
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 149,
              "end": 150
            },
            "directive": null,
            "start": 149,
            "end": 151
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  },
                  "init": null,
                  "definite": false,
                  "start": 163,
                  "end": 164
                }
              ],
              "declare": false,
              "start": 159,
              "end": 165
            },
            "start": 156,
            "end": 165
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 170,
            "end": 177
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 191
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 208,
                  "end": 209
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 223,
                    "end": 229
                  }
                ],
                "start": 203,
                "end": 229
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 259,
                    "end": 265
                  }
                ],
                "start": 238,
                "end": 265
              }
            ],
            "start": 182,
            "end": 271
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": "nooo",
              "raw": "\"nooo\"",
              "start": 282,
              "end": 288
            },
            "start": 276,
            "end": 289
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 298,
              "end": 305
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 320,
                "end": 327
              },
              "start": 310,
              "end": 327
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [],
              "start": 340,
              "end": 347
            },
            "start": 294,
            "end": 347
          },
          {
            "type": "WithStatement",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 359
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 361,
              "end": 368
            },
            "start": 352,
            "end": 368
          }
        ],
        "start": 17,
        "end": 370
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 370
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 370
}
```
