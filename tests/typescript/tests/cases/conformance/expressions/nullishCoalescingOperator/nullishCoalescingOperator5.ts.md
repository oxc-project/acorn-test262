__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 26,
                    "end": 35
                  }
                ],
                "start": 17,
                "end": 35
              },
              "start": 15,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 35
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 53,
                    "end": 59
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 62,
                    "end": 71
                  }
                ],
                "start": 53,
                "end": 71
              },
              "start": 51,
              "end": 71
            },
            "start": 50,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 71
        }
      ],
      "declare": true,
      "start": 36,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 98,
                    "end": 107
                  }
                ],
                "start": 89,
                "end": 107
              },
              "start": 87,
              "end": 107
            },
            "start": 86,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 86,
          "end": 107
        }
      ],
      "declare": true,
      "start": 72,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "operator": "??",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "start": 137,
          "end": 143
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 148
        },
        "start": 137,
        "end": 148
      },
      "directive": null,
      "start": 137,
      "end": 149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 180
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 185
          },
          "start": 179,
          "end": 185
        },
        "operator": "??",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 190
        },
        "start": 179,
        "end": 190
      },
      "directive": null,
      "start": 179,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 222
        },
        "operator": "??",
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 227
          },
          "operator": "&&",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 232
          },
          "start": 226,
          "end": 232
        },
        "start": 221,
        "end": 232
      },
      "directive": null,
      "start": 221,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 264
          },
          "operator": "&&",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 269
          },
          "start": 263,
          "end": 269
        },
        "operator": "??",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 274
        },
        "start": 263,
        "end": 274
      },
      "directive": null,
      "start": 263,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 305
        },
        "operator": "??",
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 316
          },
          "start": 310,
          "end": 316
        },
        "start": 304,
        "end": 317
      },
      "directive": null,
      "start": 304,
      "end": 318
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "operator": "??",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 354
          },
          "start": 348,
          "end": 354
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 360
        },
        "start": 347,
        "end": 360
      },
      "directive": null,
      "start": 347,
      "end": 361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 397
          },
          "start": 391,
          "end": 397
        },
        "operator": "??",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 403
        },
        "start": 390,
        "end": 403
      },
      "directive": null,
      "start": 390,
      "end": 404
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 434
        },
        "operator": "||",
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 440
          },
          "operator": "??",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 445
          },
          "start": 439,
          "end": 445
        },
        "start": 433,
        "end": 446
      },
      "directive": null,
      "start": 433,
      "end": 447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 477
        },
        "operator": "??",
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 483
          },
          "operator": "&&",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 488
          },
          "start": 482,
          "end": 488
        },
        "start": 476,
        "end": 489
      },
      "directive": null,
      "start": 476,
      "end": 490
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 521
          },
          "operator": "??",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 526
          },
          "start": 520,
          "end": 526
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 531,
          "end": 532
        },
        "start": 519,
        "end": 532
      },
      "directive": null,
      "start": 519,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 564
          },
          "operator": "&&",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 569
          },
          "start": 563,
          "end": 569
        },
        "operator": "??",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 574,
          "end": 575
        },
        "start": 562,
        "end": 575
      },
      "directive": null,
      "start": 562,
      "end": 576
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 606
        },
        "operator": "&&",
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 612
          },
          "operator": "??",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 616,
            "end": 617
          },
          "start": 611,
          "end": 617
        },
        "start": 605,
        "end": 618
      },
      "directive": null,
      "start": 605,
      "end": 619
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 619
}
```
