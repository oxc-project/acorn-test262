__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 50,
        "end": 54
      },
      "consequent": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l1",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 67
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 70,
              "end": 71
            },
            "definite": false,
            "start": 65,
            "end": 71
          }
        ],
        "declare": false,
        "start": 61,
        "end": 72
      },
      "alternate": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l2",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 89
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 92,
              "end": 93
            },
            "definite": false,
            "start": 87,
            "end": 93
          }
        ],
        "declare": false,
        "start": 83,
        "end": 94
      },
      "start": 46,
      "end": 94
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 103,
        "end": 107
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l3",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 120
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 123,
              "end": 124
            },
            "definite": false,
            "start": 118,
            "end": 124
          }
        ],
        "declare": false,
        "start": 114,
        "end": 125
      },
      "start": 96,
      "end": 125
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l4",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 141
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 144,
              "end": 145
            },
            "definite": false,
            "start": 139,
            "end": 145
          }
        ],
        "declare": false,
        "start": 135,
        "end": 146
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 154,
        "end": 158
      },
      "start": 127,
      "end": 160
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 169
          },
          "init": null,
          "definite": false,
          "start": 166,
          "end": 169
        }
      ],
      "declare": false,
      "start": 162,
      "end": 170
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 180
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l5",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 193
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 196,
              "end": 197
            },
            "definite": false,
            "start": 191,
            "end": 197
          }
        ],
        "declare": false,
        "start": 187,
        "end": 198
      },
      "start": 171,
      "end": 198
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 213,
              "end": 214
            },
            "definite": false,
            "start": 209,
            "end": 214
          }
        ],
        "declare": false,
        "start": 205,
        "end": 214
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 217
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 220,
          "end": 222
        },
        "start": 216,
        "end": 222
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 225
        },
        "start": 224,
        "end": 227
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l6",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 239
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 242,
              "end": 243
            },
            "definite": false,
            "start": 237,
            "end": 243
          }
        ],
        "declare": false,
        "start": 233,
        "end": 244
      },
      "start": 200,
      "end": 244
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 257
            },
            "init": null,
            "definite": false,
            "start": 255,
            "end": 257
          }
        ],
        "declare": false,
        "start": 251,
        "end": 257
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 261,
        "end": 263
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l7",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 276
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 279,
              "end": 280
            },
            "definite": false,
            "start": 274,
            "end": 280
          }
        ],
        "declare": false,
        "start": 270,
        "end": 281
      },
      "start": 246,
      "end": 281
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 287,
        "end": 291
      },
      "consequent": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 303
        },
        "body": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "l8",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 311
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 314,
                "end": 315
              },
              "definite": false,
              "start": 309,
              "end": 315
            }
          ],
          "declare": false,
          "start": 305,
          "end": 316
        },
        "start": 298,
        "end": 316
      },
      "alternate": null,
      "start": 283,
      "end": 316
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 325,
        "end": 330
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label2",
          "optional": false,
          "typeAnnotation": null,
          "start": 336,
          "end": 342
        },
        "body": {
          "type": "LabeledStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "label3",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 350
          },
          "body": {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label4",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 358
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 366
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 369,
                    "end": 370
                  },
                  "definite": false,
                  "start": 364,
                  "end": 370
                }
              ],
              "declare": false,
              "start": 360,
              "end": 371
            },
            "start": 352,
            "end": 371
          },
          "start": 344,
          "end": 371
        },
        "start": 336,
        "end": 371
      },
      "start": 318,
      "end": 371
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 374
}
```
