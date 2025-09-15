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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 20,
            "end": 28
          },
          "definite": false,
          "start": 16,
          "end": 28
        }
      ],
      "declare": false,
      "start": 10,
      "end": 29
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "start": 35,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 44
        }
      ],
      "declare": false,
      "start": 31,
      "end": 45
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 90,
        "end": 94
      },
      "consequent": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 113,
                  "end": 114
                },
                "definite": false,
                "start": 109,
                "end": 114
              }
            ],
            "declare": false,
            "start": 103,
            "end": 115
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "start": 120,
              "end": 125
            },
            "directive": null,
            "start": 120,
            "end": 126
          }
        ],
        "start": 96,
        "end": 128
      },
      "alternate": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 151,
                  "end": 152
                },
                "definite": false,
                "start": 147,
                "end": 152
              }
            ],
            "declare": false,
            "start": 141,
            "end": 153
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 159
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "start": 158,
              "end": 163
            },
            "directive": null,
            "start": 158,
            "end": 164
          }
        ],
        "start": 134,
        "end": 166
      },
      "start": 86,
      "end": 166
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 175,
        "end": 179
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 195
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 198,
                  "end": 199
                },
                "definite": false,
                "start": 194,
                "end": 199
              }
            ],
            "declare": false,
            "start": 188,
            "end": 200
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 206
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 210
              },
              "start": 205,
              "end": 210
            },
            "directive": null,
            "start": 205,
            "end": 211
          }
        ],
        "start": 181,
        "end": 213
      },
      "start": 168,
      "end": 213
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 231
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 234,
                  "end": 235
                },
                "definite": false,
                "start": 230,
                "end": 235
              }
            ],
            "declare": false,
            "start": 224,
            "end": 236
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 242
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 246
              },
              "start": 241,
              "end": 246
            },
            "directive": null,
            "start": 241,
            "end": 247
          }
        ],
        "start": 218,
        "end": 249
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 257,
        "end": 261
      },
      "start": 215,
      "end": 263
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
            "start": 269,
            "end": 272
          },
          "init": null,
          "definite": false,
          "start": 269,
          "end": 272
        }
      ],
      "declare": false,
      "start": 265,
      "end": 273
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 283
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 301,
                  "end": 302
                },
                "definite": false,
                "start": 297,
                "end": 302
              }
            ],
            "declare": false,
            "start": 291,
            "end": 303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "start": 308,
              "end": 313
            },
            "directive": null,
            "start": 308,
            "end": 314
          }
        ],
        "start": 285,
        "end": 316
      },
      "start": 274,
      "end": 316
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
              "start": 327,
              "end": 328
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 331,
              "end": 332
            },
            "definite": false,
            "start": 327,
            "end": 332
          }
        ],
        "declare": false,
        "start": 323,
        "end": 332
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 335
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 338,
          "end": 340
        },
        "start": 334,
        "end": 340
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
          "start": 342,
          "end": 343
        },
        "start": 342,
        "end": 345
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 360
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 363,
                  "end": 364
                },
                "definite": false,
                "start": 359,
                "end": 364
              }
            ],
            "declare": false,
            "start": 353,
            "end": 365
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 375
              },
              "start": 370,
              "end": 375
            },
            "directive": null,
            "start": 370,
            "end": 376
          }
        ],
        "start": 347,
        "end": 378
      },
      "start": 318,
      "end": 378
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
              "start": 389,
              "end": 391
            },
            "init": null,
            "definite": false,
            "start": 389,
            "end": 391
          }
        ],
        "declare": false,
        "start": 385,
        "end": 391
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 395,
        "end": 397
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 415,
                  "end": 416
                },
                "definite": false,
                "start": 411,
                "end": 416
              }
            ],
            "declare": false,
            "start": 405,
            "end": 417
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "start": 422,
              "end": 427
            },
            "directive": null,
            "start": 422,
            "end": 428
          }
        ],
        "start": 399,
        "end": 430
      },
      "start": 380,
      "end": 430
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 436,
        "end": 440
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 453
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 465,
                    "end": 466
                  },
                  "definite": false,
                  "start": 461,
                  "end": 466
                }
              ],
              "declare": false,
              "start": 455,
              "end": 467
            },
            "start": 448,
            "end": 467
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 473
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "start": 472,
              "end": 477
            },
            "directive": null,
            "start": 472,
            "end": 478
          }
        ],
        "start": 442,
        "end": 480
      },
      "alternate": null,
      "start": 432,
      "end": 480
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 489,
        "end": 494
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label2",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 508
            },
            "body": {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 516
              },
              "body": {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 524
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 532,
                        "end": 533
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 536,
                        "end": 537
                      },
                      "definite": false,
                      "start": 532,
                      "end": 537
                    }
                  ],
                  "declare": false,
                  "start": 526,
                  "end": 538
                },
                "start": 518,
                "end": 538
              },
              "start": 510,
              "end": 538
            },
            "start": 502,
            "end": 538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 548
              },
              "start": 543,
              "end": 548
            },
            "directive": null,
            "start": 543,
            "end": 549
          }
        ],
        "start": 496,
        "end": 551
      },
      "start": 482,
      "end": 551
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 591
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 594,
                  "end": 595
                },
                "definite": false,
                "start": 590,
                "end": 595
              }
            ],
            "declare": false,
            "start": 584,
            "end": 596
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 602
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 606
              },
              "start": 601,
              "end": 606
            },
            "directive": null,
            "start": 601,
            "end": 607
          }
        ],
        "start": 578,
        "end": 609
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 618
        },
        "body": {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 633
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 636,
                    "end": 637
                  },
                  "definite": false,
                  "start": 632,
                  "end": 637
                }
              ],
              "declare": false,
              "start": 626,
              "end": 638
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 644
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 648
                },
                "start": 643,
                "end": 648
              },
              "directive": null,
              "start": 643,
              "end": 649
            }
          ],
          "start": 620,
          "end": 651
        },
        "start": 610,
        "end": 651
      },
      "finalizer": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 673
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 676,
                  "end": 677
                },
                "definite": false,
                "start": 672,
                "end": 677
              }
            ],
            "declare": false,
            "start": 666,
            "end": 678
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 684
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 688
              },
              "start": 683,
              "end": 688
            },
            "directive": null,
            "start": 683,
            "end": 689
          }
        ],
        "start": 660,
        "end": 691
      },
      "start": 574,
      "end": 691
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 711,
        "end": 712
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 725,
            "end": 726
          },
          "consequent": [
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
                    "typeAnnotation": null,
                    "start": 742,
                    "end": 743
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 746,
                    "end": 747
                  },
                  "definite": false,
                  "start": 742,
                  "end": 747
                }
              ],
              "declare": false,
              "start": 736,
              "end": 748
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 758
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 762
                },
                "start": 757,
                "end": 762
              },
              "directive": null,
              "start": 757,
              "end": 763
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 772,
              "end": 778
            }
          ],
          "start": 720,
          "end": 778
        }
      ],
      "start": 703,
      "end": 780
    },
    {
      "type": "BlockStatement",
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 805
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 808,
                "end": 809
              },
              "definite": false,
              "start": 804,
              "end": 809
            }
          ],
          "declare": false,
          "start": 798,
          "end": 810
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 816
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 820
            },
            "start": 815,
            "end": 820
          },
          "directive": null,
          "start": 815,
          "end": 821
        },
        {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 843
                  },
                  "init": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 846,
                    "end": 851
                  },
                  "definite": false,
                  "start": 842,
                  "end": 851
                }
              ],
              "declare": false,
              "start": 836,
              "end": 852
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 868,
                        "end": 875
                      },
                      "start": 866,
                      "end": 875
                    },
                    "start": 865,
                    "end": 875
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 878,
                    "end": 879
                  },
                  "definite": false,
                  "start": 865,
                  "end": 879
                }
              ],
              "declare": false,
              "start": 861,
              "end": 880
            }
          ],
          "start": 826,
          "end": 886
        }
      ],
      "start": 792,
      "end": 888
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 913,
        "end": 914
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 930
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 933,
                  "end": 934
                },
                "definite": false,
                "start": 929,
                "end": 934
              }
            ],
            "declare": false,
            "start": 923,
            "end": 935
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 941
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 944,
                "end": 945
              },
              "start": 940,
              "end": 945
            },
            "directive": null,
            "start": 940,
            "end": 946
          }
        ],
        "start": 917,
        "end": 948
      },
      "expression": false,
      "start": 904,
      "end": 948
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
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 954,
            "end": 956
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 977,
                        "end": 978
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 981,
                        "end": 982
                      },
                      "definite": false,
                      "start": 977,
                      "end": 982
                    }
                  ],
                  "declare": false,
                  "start": 971,
                  "end": 983
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 988,
                      "end": 989
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 992,
                      "end": 993
                    },
                    "start": 988,
                    "end": 993
                  },
                  "directive": null,
                  "start": 988,
                  "end": 994
                }
              ],
              "start": 965,
              "end": 996
            },
            "id": null,
            "generator": false,
            "start": 959,
            "end": 996
          },
          "definite": false,
          "start": 954,
          "end": 996
        }
      ],
      "declare": false,
      "start": 950,
      "end": 997
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
            "name": "F3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1005
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1032,
                        "end": 1033
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1036,
                        "end": 1037
                      },
                      "definite": false,
                      "start": 1032,
                      "end": 1037
                    }
                  ],
                  "declare": false,
                  "start": 1026,
                  "end": 1038
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1043,
                      "end": 1044
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1048
                    },
                    "start": 1043,
                    "end": 1048
                  },
                  "directive": null,
                  "start": 1043,
                  "end": 1049
                }
              ],
              "start": 1020,
              "end": 1051
            },
            "expression": false,
            "start": 1008,
            "end": 1051
          },
          "definite": false,
          "start": 1003,
          "end": 1051
        }
      ],
      "declare": false,
      "start": 999,
      "end": 1052
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1075,
        "end": 1076
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1090
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1093,
                  "end": 1094
                },
                "definite": false,
                "start": 1089,
                "end": 1094
              }
            ],
            "declare": false,
            "start": 1083,
            "end": 1095
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1101
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1104,
                "end": 1105
              },
              "start": 1100,
              "end": 1105
            },
            "directive": null,
            "start": 1100,
            "end": 1106
          },
          {
            "type": "BlockStatement",
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1127,
                      "end": 1128
                    },
                    "init": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1131,
                      "end": 1136
                    },
                    "definite": false,
                    "start": 1127,
                    "end": 1136
                  }
                ],
                "declare": false,
                "start": 1121,
                "end": 1137
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
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1153,
                          "end": 1160
                        },
                        "start": 1151,
                        "end": 1160
                      },
                      "start": 1149,
                      "end": 1160
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1163,
                      "end": 1164
                    },
                    "definite": false,
                    "start": 1149,
                    "end": 1164
                  }
                ],
                "declare": false,
                "start": 1145,
                "end": 1165
              }
            ],
            "start": 1112,
            "end": 1171
          }
        ],
        "start": 1077,
        "end": 1173
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1065,
      "end": 1173
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1192,
        "end": 1193
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1211
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1230,
                          "end": 1231
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1234,
                          "end": 1235
                        },
                        "definite": false,
                        "start": 1230,
                        "end": 1235
                      }
                    ],
                    "declare": false,
                    "start": 1224,
                    "end": 1236
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1245,
                        "end": 1246
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1249,
                        "end": 1250
                      },
                      "start": 1245,
                      "end": 1250
                    },
                    "directive": null,
                    "start": 1245,
                    "end": 1251
                  }
                ],
                "start": 1214,
                "end": 1257
              },
              "expression": false,
              "start": 1211,
              "end": 1257
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1200,
            "end": 1257
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1263,
              "end": 1269
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1288,
                          "end": 1289
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1292,
                          "end": 1293
                        },
                        "definite": false,
                        "start": 1288,
                        "end": 1293
                      }
                    ],
                    "declare": false,
                    "start": 1282,
                    "end": 1294
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1303,
                        "end": 1304
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1307,
                        "end": 1308
                      },
                      "start": 1303,
                      "end": 1308
                    },
                    "directive": null,
                    "start": 1303,
                    "end": 1309
                  }
                ],
                "start": 1272,
                "end": 1315
              },
              "expression": false,
              "start": 1269,
              "end": 1315
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1263,
            "end": 1315
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1326
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1345,
                          "end": 1346
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1349,
                          "end": 1350
                        },
                        "definite": false,
                        "start": 1345,
                        "end": 1350
                      }
                    ],
                    "declare": false,
                    "start": 1339,
                    "end": 1351
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1360,
                        "end": 1361
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1364,
                        "end": 1365
                      },
                      "start": 1360,
                      "end": 1365
                    },
                    "directive": null,
                    "start": 1360,
                    "end": 1366
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1382,
                      "end": 1383
                    },
                    "start": 1375,
                    "end": 1384
                  }
                ],
                "start": 1329,
                "end": 1390
              },
              "expression": false,
              "start": 1326,
              "end": 1390
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1321,
            "end": 1390
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1401
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1407
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1425,
                          "end": 1426
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1429,
                          "end": 1430
                        },
                        "definite": false,
                        "start": 1425,
                        "end": 1430
                      }
                    ],
                    "declare": false,
                    "start": 1419,
                    "end": 1431
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1440,
                        "end": 1441
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1444,
                        "end": 1445
                      },
                      "start": 1440,
                      "end": 1445
                    },
                    "directive": null,
                    "start": 1440,
                    "end": 1446
                  }
                ],
                "start": 1409,
                "end": 1452
              },
              "expression": false,
              "start": 1401,
              "end": 1452
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1396,
            "end": 1452
          }
        ],
        "start": 1194,
        "end": 1454
      },
      "abstract": false,
      "declare": false,
      "start": 1186,
      "end": 1454
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1479,
            "end": 1480
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1489,
                  "end": 1490
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1509,
                              "end": 1510
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1513,
                              "end": 1514
                            },
                            "definite": false,
                            "start": 1509,
                            "end": 1514
                          }
                        ],
                        "declare": false,
                        "start": 1503,
                        "end": 1515
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1524,
                            "end": 1525
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1528,
                            "end": 1529
                          },
                          "start": 1524,
                          "end": 1529
                        },
                        "directive": null,
                        "start": 1524,
                        "end": 1530
                      }
                    ],
                    "start": 1493,
                    "end": 1536
                  },
                  "expression": false,
                  "start": 1490,
                  "end": 1536
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1489,
                "end": 1536
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1542,
                  "end": 1544
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1568,
                              "end": 1569
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1572,
                              "end": 1573
                            },
                            "definite": false,
                            "start": 1568,
                            "end": 1573
                          }
                        ],
                        "declare": false,
                        "start": 1562,
                        "end": 1574
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1583,
                            "end": 1584
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1588
                          },
                          "start": 1583,
                          "end": 1588
                        },
                        "directive": null,
                        "start": 1583,
                        "end": 1589
                      }
                    ],
                    "start": 1552,
                    "end": 1595
                  },
                  "id": null,
                  "generator": false,
                  "start": 1546,
                  "end": 1595
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1542,
                "end": 1595
              }
            ],
            "start": 1483,
            "end": 1597
          },
          "definite": false,
          "start": 1479,
          "end": 1597
        }
      ],
      "declare": false,
      "start": 1475,
      "end": 1597
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 1597
}
```
