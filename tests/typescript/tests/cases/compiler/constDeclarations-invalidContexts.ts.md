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
        "start": 52,
        "end": 56
      },
      "consequent": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 71
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 74,
              "end": 75
            },
            "definite": false,
            "start": 69,
            "end": 75
          }
        ],
        "declare": false,
        "start": 63,
        "end": 76
      },
      "alternate": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 98,
              "end": 99
            },
            "definite": false,
            "start": 93,
            "end": 99
          }
        ],
        "declare": false,
        "start": 87,
        "end": 100
      },
      "start": 48,
      "end": 100
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 109,
        "end": 113
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 128
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 131,
              "end": 132
            },
            "definite": false,
            "start": 126,
            "end": 132
          }
        ],
        "declare": false,
        "start": 120,
        "end": 133
      },
      "start": 102,
      "end": 133
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 151
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 154,
              "end": 155
            },
            "definite": false,
            "start": 149,
            "end": 155
          }
        ],
        "declare": false,
        "start": 143,
        "end": 156
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 164,
        "end": 168
      },
      "start": 135,
      "end": 170
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
            "start": 176,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 179
        }
      ],
      "declare": false,
      "start": 172,
      "end": 180
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 190
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 205
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 208,
              "end": 209
            },
            "definite": false,
            "start": 203,
            "end": 209
          }
        ],
        "declare": false,
        "start": 197,
        "end": 210
      },
      "start": 181,
      "end": 210
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
              "start": 293,
              "end": 294
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 297,
              "end": 298
            },
            "definite": false,
            "start": 293,
            "end": 298
          }
        ],
        "declare": false,
        "start": 289,
        "end": 298
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 301
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 304,
          "end": 306
        },
        "start": 300,
        "end": 306
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
          "start": 308,
          "end": 309
        },
        "start": 308,
        "end": 311
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c6",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 325
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 328,
              "end": 329
            },
            "definite": false,
            "start": 323,
            "end": 329
          }
        ],
        "declare": false,
        "start": 317,
        "end": 330
      },
      "start": 284,
      "end": 330
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
              "start": 341,
              "end": 343
            },
            "init": null,
            "definite": false,
            "start": 341,
            "end": 343
          }
        ],
        "declare": false,
        "start": 337,
        "end": 343
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 347,
        "end": 349
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c7",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 364
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 367,
              "end": 368
            },
            "definite": false,
            "start": 362,
            "end": 368
          }
        ],
        "declare": false,
        "start": 356,
        "end": 369
      },
      "start": 332,
      "end": 369
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 375,
        "end": 379
      },
      "consequent": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 391
        },
        "body": {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c8",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 401
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 404,
                "end": 405
              },
              "definite": false,
              "start": 399,
              "end": 405
            }
          ],
          "declare": false,
          "start": 393,
          "end": 406
        },
        "start": 386,
        "end": 406
      },
      "alternate": null,
      "start": 371,
      "end": 406
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 415,
        "end": 420
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "label2",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 432
        },
        "body": {
          "type": "LabeledStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "label3",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 440
          },
          "body": {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label4",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 448
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 456,
                    "end": 458
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 461,
                    "end": 462
                  },
                  "definite": false,
                  "start": 456,
                  "end": 462
                }
              ],
              "declare": false,
              "start": 450,
              "end": 463
            },
            "start": 442,
            "end": 463
          },
          "start": 434,
          "end": 463
        },
        "start": 426,
        "end": 463
      },
      "start": 408,
      "end": 463
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 48,
  "end": 466
}
```
