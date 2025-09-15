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
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 26,
            "end": 32
          },
          {
            "type": "ContinueStatement",
            "label": null,
            "start": 37,
            "end": 46
          },
          {
            "type": "DebuggerStatement",
            "start": 51,
            "end": 60
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 68,
              "end": 71
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 79,
              "end": 83
            },
            "start": 65,
            "end": 85
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
                  "start": 94,
                  "end": 95
                },
                "init": null,
                "definite": false,
                "start": 94,
                "end": 95
              }
            ],
            "declare": false,
            "start": 90,
            "end": 96
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 111,
              "end": 115
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 117,
              "end": 120
            },
            "start": 101,
            "end": 120
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 129,
              "end": 133
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 135,
              "end": 138
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [],
              "start": 144,
              "end": 147
            },
            "start": 125,
            "end": 147
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 152,
              "end": 153
            },
            "directive": null,
            "start": 152,
            "end": 154
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
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
                    "start": 166,
                    "end": 167
                  },
                  "init": null,
                  "definite": false,
                  "start": 166,
                  "end": 167
                }
              ],
              "declare": false,
              "start": 162,
              "end": 168
            },
            "start": 159,
            "end": 168
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 173,
            "end": 180
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 194
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 211,
                  "end": 212
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 226,
                    "end": 232
                  }
                ],
                "start": 206,
                "end": 232
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 262,
                    "end": 268
                  }
                ],
                "start": 241,
                "end": 268
              }
            ],
            "start": 185,
            "end": 274
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": "nooo",
              "raw": "\"nooo\"",
              "start": 285,
              "end": 291
            },
            "start": 279,
            "end": 292
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 301,
              "end": 308
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 323,
                "end": 330
              },
              "start": 313,
              "end": 330
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [],
              "start": 343,
              "end": 350
            },
            "start": 297,
            "end": 350
          },
          {
            "type": "WithStatement",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 364,
              "end": 371
            },
            "start": 355,
            "end": 371
          }
        ],
        "start": 20,
        "end": 373
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 373
}
```
