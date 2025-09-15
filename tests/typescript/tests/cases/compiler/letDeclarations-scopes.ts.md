__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 18,
            "end": 26
          },
          "definite": false,
          "start": 14,
          "end": 26
        }
      ],
      "declare": false,
      "start": 10,
      "end": 27
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
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
            },
            "start": 33,
            "end": 42
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 42
        }
      ],
      "declare": false,
      "start": 29,
      "end": 43
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 88,
        "end": 92
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 108,
                  "end": 109
                },
                "definite": false,
                "start": 104,
                "end": 109
              }
            ],
            "declare": false,
            "start": 100,
            "end": 110
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
                "start": 115,
                "end": 116
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "start": 115,
              "end": 120
            },
            "directive": null,
            "start": 115,
            "end": 121
          }
        ],
        "start": 94,
        "end": 123
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 143,
                  "end": 144
                },
                "definite": false,
                "start": 139,
                "end": 144
              }
            ],
            "declare": false,
            "start": 135,
            "end": 145
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
                "start": 150,
                "end": 151
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "start": 150,
              "end": 155
            },
            "directive": null,
            "start": 150,
            "end": 156
          }
        ],
        "start": 129,
        "end": 158
      },
      "start": 84,
      "end": 158
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 167,
        "end": 171
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 187,
                  "end": 188
                },
                "definite": false,
                "start": 183,
                "end": 188
              }
            ],
            "declare": false,
            "start": 179,
            "end": 189
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
                "start": 194,
                "end": 195
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 199
              },
              "start": 194,
              "end": 199
            },
            "directive": null,
            "start": 194,
            "end": 200
          }
        ],
        "start": 173,
        "end": 202
      },
      "start": 160,
      "end": 202
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 220,
                  "end": 221
                },
                "definite": false,
                "start": 216,
                "end": 221
              }
            ],
            "declare": false,
            "start": 212,
            "end": 222
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
                "start": 227,
                "end": 228
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 232
              },
              "start": 227,
              "end": 232
            },
            "directive": null,
            "start": 227,
            "end": 233
          }
        ],
        "start": 207,
        "end": 235
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 243,
        "end": 247
      },
      "start": 204,
      "end": 249
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
            "start": 255,
            "end": 258
          },
          "init": null,
          "definite": false,
          "start": 255,
          "end": 258
        }
      ],
      "declare": false,
      "start": 251,
      "end": 259
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 269
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 285,
                  "end": 286
                },
                "definite": false,
                "start": 281,
                "end": 286
              }
            ],
            "declare": false,
            "start": 277,
            "end": 287
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
                "start": 292,
                "end": 293
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 297
              },
              "start": 292,
              "end": 297
            },
            "directive": null,
            "start": 292,
            "end": 298
          }
        ],
        "start": 271,
        "end": 300
      },
      "start": 260,
      "end": 300
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
              "start": 311,
              "end": 312
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 315,
              "end": 316
            },
            "definite": false,
            "start": 311,
            "end": 316
          }
        ],
        "declare": false,
        "start": 307,
        "end": 316
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 318,
          "end": 319
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 322,
          "end": 324
        },
        "start": 318,
        "end": 324
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
          "start": 326,
          "end": 327
        },
        "start": 326,
        "end": 329
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 342
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 345,
                  "end": 346
                },
                "definite": false,
                "start": 341,
                "end": 346
              }
            ],
            "declare": false,
            "start": 337,
            "end": 347
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
                "start": 352,
                "end": 353
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "start": 352,
              "end": 357
            },
            "directive": null,
            "start": 352,
            "end": 358
          }
        ],
        "start": 331,
        "end": 360
      },
      "start": 302,
      "end": 360
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
              "start": 371,
              "end": 373
            },
            "init": null,
            "definite": false,
            "start": 371,
            "end": 373
          }
        ],
        "declare": false,
        "start": 367,
        "end": 373
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 377,
        "end": 379
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 392
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 395,
                  "end": 396
                },
                "definite": false,
                "start": 391,
                "end": 396
              }
            ],
            "declare": false,
            "start": 387,
            "end": 397
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
                "start": 402,
                "end": 403
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 407
              },
              "start": 402,
              "end": 407
            },
            "directive": null,
            "start": 402,
            "end": 408
          }
        ],
        "start": 381,
        "end": 410
      },
      "start": 362,
      "end": 410
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 416,
        "end": 420
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
              "start": 428,
              "end": 433
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
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 440
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 443,
                    "end": 444
                  },
                  "definite": false,
                  "start": 439,
                  "end": 444
                }
              ],
              "declare": false,
              "start": 435,
              "end": 445
            },
            "start": 428,
            "end": 445
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
                "start": 450,
                "end": 451
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 455
              },
              "start": 450,
              "end": 455
            },
            "directive": null,
            "start": 450,
            "end": 456
          }
        ],
        "start": 422,
        "end": 458
      },
      "alternate": null,
      "start": 412,
      "end": 458
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 467,
        "end": 472
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
              "start": 480,
              "end": 486
            },
            "body": {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 494
              },
              "body": {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 502
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
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 509
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 512,
                        "end": 513
                      },
                      "definite": false,
                      "start": 508,
                      "end": 513
                    }
                  ],
                  "declare": false,
                  "start": 504,
                  "end": 514
                },
                "start": 496,
                "end": 514
              },
              "start": 488,
              "end": 514
            },
            "start": 480,
            "end": 514
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
                "start": 519,
                "end": 520
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 524
              },
              "start": 519,
              "end": 524
            },
            "directive": null,
            "start": 519,
            "end": 525
          }
        ],
        "start": 474,
        "end": 527
      },
      "start": 460,
      "end": 527
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 539
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 542,
              "end": 543
            },
            "definite": false,
            "start": 538,
            "end": 543
          }
        ],
        "declare": false,
        "start": 534,
        "end": 543
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 546
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 549,
          "end": 550
        },
        "start": 545,
        "end": 550
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 553
        },
        "start": 552,
        "end": 555
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 568
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 571,
                  "end": 575
                },
                "definite": false,
                "start": 567,
                "end": 575
              }
            ],
            "declare": false,
            "start": 563,
            "end": 576
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
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 589,
                      "end": 596
                    },
                    "start": 587,
                    "end": 596
                  },
                  "start": 585,
                  "end": 596
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 599,
                  "end": 600
                },
                "definite": false,
                "start": 585,
                "end": 600
              }
            ],
            "declare": false,
            "start": 581,
            "end": 601
          }
        ],
        "start": 557,
        "end": 603
      },
      "start": 529,
      "end": 603
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 615
            },
            "init": null,
            "definite": false,
            "start": 614,
            "end": 615
          }
        ],
        "declare": false,
        "start": 610,
        "end": 615
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 619,
        "end": 621
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 623,
        "end": 627
      },
      "start": 605,
      "end": 627
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 668,
                  "end": 669
                },
                "definite": false,
                "start": 664,
                "end": 669
              }
            ],
            "declare": false,
            "start": 660,
            "end": 670
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
                "start": 675,
                "end": 676
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 680
              },
              "start": 675,
              "end": 680
            },
            "directive": null,
            "start": 675,
            "end": 681
          }
        ],
        "start": 654,
        "end": 683
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 691,
          "end": 692
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 705
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 708,
                    "end": 709
                  },
                  "definite": false,
                  "start": 704,
                  "end": 709
                }
              ],
              "declare": false,
              "start": 700,
              "end": 710
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
                  "start": 715,
                  "end": 716
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 719,
                  "end": 720
                },
                "start": 715,
                "end": 720
              },
              "directive": null,
              "start": 715,
              "end": 721
            }
          ],
          "start": 694,
          "end": 723
        },
        "start": 684,
        "end": 723
      },
      "finalizer": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
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
            "start": 738,
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
                "start": 753,
                "end": 754
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "start": 753,
              "end": 758
            },
            "directive": null,
            "start": 753,
            "end": 759
          }
        ],
        "start": 732,
        "end": 761
      },
      "start": 650,
      "end": 761
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 781,
        "end": 782
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 795,
            "end": 796
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 810,
                    "end": 811
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 814,
                    "end": 815
                  },
                  "definite": false,
                  "start": 810,
                  "end": 815
                }
              ],
              "declare": false,
              "start": 806,
              "end": 816
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
                  "start": 825,
                  "end": 826
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 829,
                  "end": 830
                },
                "start": 825,
                "end": 830
              },
              "directive": null,
              "start": 825,
              "end": 831
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 840,
              "end": 846
            }
          ],
          "start": 790,
          "end": 846
        }
      ],
      "start": 773,
      "end": 848
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 871
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 874,
                "end": 875
              },
              "definite": false,
              "start": 870,
              "end": 875
            }
          ],
          "declare": false,
          "start": 866,
          "end": 876
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
              "start": 881,
              "end": 882
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 886
            },
            "start": 881,
            "end": 886
          },
          "directive": null,
          "start": 881,
          "end": 887
        },
        {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 907
                  },
                  "init": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 910,
                    "end": 915
                  },
                  "definite": false,
                  "start": 906,
                  "end": 915
                }
              ],
              "declare": false,
              "start": 902,
              "end": 916
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
                        "start": 932,
                        "end": 939
                      },
                      "start": 930,
                      "end": 939
                    },
                    "start": 929,
                    "end": 939
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 942,
                    "end": 943
                  },
                  "definite": false,
                  "start": 929,
                  "end": 943
                }
              ],
              "declare": false,
              "start": 925,
              "end": 944
            }
          ],
          "start": 892,
          "end": 950
        }
      ],
      "start": 860,
      "end": 952
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 976,
        "end": 977
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 991
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 994,
                  "end": 995
                },
                "definite": false,
                "start": 990,
                "end": 995
              }
            ],
            "declare": false,
            "start": 986,
            "end": 996
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
                "start": 1001,
                "end": 1002
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 1005,
                "end": 1006
              },
              "start": 1001,
              "end": 1006
            },
            "directive": null,
            "start": 1001,
            "end": 1007
          }
        ],
        "start": 980,
        "end": 1009
      },
      "expression": false,
      "start": 967,
      "end": 1009
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
            "start": 1015,
            "end": 1017
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1036,
                        "end": 1037
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1040,
                        "end": 1041
                      },
                      "definite": false,
                      "start": 1036,
                      "end": 1041
                    }
                  ],
                  "declare": false,
                  "start": 1032,
                  "end": 1042
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
                      "start": 1047,
                      "end": 1048
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1052
                    },
                    "start": 1047,
                    "end": 1052
                  },
                  "directive": null,
                  "start": 1047,
                  "end": 1053
                }
              ],
              "start": 1026,
              "end": 1055
            },
            "id": null,
            "generator": false,
            "start": 1020,
            "end": 1055
          },
          "definite": false,
          "start": 1015,
          "end": 1055
        }
      ],
      "declare": false,
      "start": 1011,
      "end": 1056
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
            "start": 1062,
            "end": 1064
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
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
                  "start": 1085,
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
                      "name": "l",
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
                }
              ],
              "start": 1079,
              "end": 1108
            },
            "expression": false,
            "start": 1067,
            "end": 1108
          },
          "definite": false,
          "start": 1062,
          "end": 1108
        }
      ],
      "declare": false,
      "start": 1058,
      "end": 1109
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1133
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1144,
                  "end": 1145
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1148,
                  "end": 1149
                },
                "definite": false,
                "start": 1144,
                "end": 1149
              }
            ],
            "declare": false,
            "start": 1140,
            "end": 1150
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
                "start": 1155,
                "end": 1156
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 1159,
                "end": 1160
              },
              "start": 1155,
              "end": 1160
            },
            "directive": null,
            "start": 1155,
            "end": 1161
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1180,
                      "end": 1181
                    },
                    "init": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1184,
                      "end": 1189
                    },
                    "definite": false,
                    "start": 1180,
                    "end": 1189
                  }
                ],
                "declare": false,
                "start": 1176,
                "end": 1190
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
                          "start": 1206,
                          "end": 1213
                        },
                        "start": 1204,
                        "end": 1213
                      },
                      "start": 1202,
                      "end": 1213
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1216,
                      "end": 1217
                    },
                    "definite": false,
                    "start": 1202,
                    "end": 1217
                  }
                ],
                "declare": false,
                "start": 1198,
                "end": 1218
              }
            ],
            "start": 1167,
            "end": 1224
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "lable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1235
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
                    "name": "l2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1243
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1246,
                    "end": 1247
                  },
                  "definite": false,
                  "start": 1241,
                  "end": 1247
                }
              ],
              "declare": false,
              "start": 1237,
              "end": 1248
            },
            "start": 1230,
            "end": 1248
          }
        ],
        "start": 1134,
        "end": 1250
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1122,
      "end": 1250
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
        "start": 1269,
        "end": 1270
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
              "start": 1277,
              "end": 1288
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1305,
                          "end": 1306
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1309,
                          "end": 1310
                        },
                        "definite": false,
                        "start": 1305,
                        "end": 1310
                      }
                    ],
                    "declare": false,
                    "start": 1301,
                    "end": 1311
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
                        "start": 1320,
                        "end": 1321
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1324,
                        "end": 1325
                      },
                      "start": 1320,
                      "end": 1325
                    },
                    "directive": null,
                    "start": 1320,
                    "end": 1326
                  }
                ],
                "start": 1291,
                "end": 1332
              },
              "expression": false,
              "start": 1288,
              "end": 1332
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1277,
            "end": 1332
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
              "start": 1338,
              "end": 1344
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1361,
                          "end": 1362
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1365,
                          "end": 1366
                        },
                        "definite": false,
                        "start": 1361,
                        "end": 1366
                      }
                    ],
                    "declare": false,
                    "start": 1357,
                    "end": 1367
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
                        "start": 1376,
                        "end": 1377
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1380,
                        "end": 1381
                      },
                      "start": 1376,
                      "end": 1381
                    },
                    "directive": null,
                    "start": 1376,
                    "end": 1382
                  }
                ],
                "start": 1347,
                "end": 1388
              },
              "expression": false,
              "start": 1344,
              "end": 1388
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1338,
            "end": 1388
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
              "start": 1398,
              "end": 1399
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1416,
                          "end": 1417
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1420,
                          "end": 1421
                        },
                        "definite": false,
                        "start": 1416,
                        "end": 1421
                      }
                    ],
                    "declare": false,
                    "start": 1412,
                    "end": 1422
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
                        "start": 1431,
                        "end": 1432
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1435,
                        "end": 1436
                      },
                      "start": 1431,
                      "end": 1436
                    },
                    "directive": null,
                    "start": 1431,
                    "end": 1437
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1454
                    },
                    "start": 1446,
                    "end": 1455
                  }
                ],
                "start": 1402,
                "end": 1461
              },
              "expression": false,
              "start": 1399,
              "end": 1461
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1394,
            "end": 1461
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
              "start": 1471,
              "end": 1472
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
                  "start": 1473,
                  "end": 1478
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1495
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1498,
                          "end": 1499
                        },
                        "definite": false,
                        "start": 1494,
                        "end": 1499
                      }
                    ],
                    "declare": false,
                    "start": 1490,
                    "end": 1500
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
                        "start": 1509,
                        "end": 1510
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1513,
                        "end": 1514
                      },
                      "start": 1509,
                      "end": 1514
                    },
                    "directive": null,
                    "start": 1509,
                    "end": 1515
                  }
                ],
                "start": 1480,
                "end": 1521
              },
              "expression": false,
              "start": 1472,
              "end": 1521
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1467,
            "end": 1521
          }
        ],
        "start": 1271,
        "end": 1523
      },
      "abstract": false,
      "declare": false,
      "start": 1263,
      "end": 1523
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
            "start": 1548,
            "end": 1549
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
                  "start": 1558,
                  "end": 1559
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
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "l",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1576,
                              "end": 1577
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1580,
                              "end": 1581
                            },
                            "definite": false,
                            "start": 1576,
                            "end": 1581
                          }
                        ],
                        "declare": false,
                        "start": 1572,
                        "end": 1582
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
                            "start": 1591,
                            "end": 1592
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "l",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1595,
                            "end": 1596
                          },
                          "start": 1591,
                          "end": 1596
                        },
                        "directive": null,
                        "start": 1591,
                        "end": 1597
                      }
                    ],
                    "start": 1562,
                    "end": 1603
                  },
                  "expression": false,
                  "start": 1559,
                  "end": 1603
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1558,
                "end": 1603
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
                  "start": 1609,
                  "end": 1611
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
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "l",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1633,
                              "end": 1634
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1637,
                              "end": 1638
                            },
                            "definite": false,
                            "start": 1633,
                            "end": 1638
                          }
                        ],
                        "declare": false,
                        "start": 1629,
                        "end": 1639
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
                            "start": 1648,
                            "end": 1649
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "l",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1652,
                            "end": 1653
                          },
                          "start": 1648,
                          "end": 1653
                        },
                        "directive": null,
                        "start": 1648,
                        "end": 1654
                      }
                    ],
                    "start": 1619,
                    "end": 1660
                  },
                  "id": null,
                  "generator": false,
                  "start": 1613,
                  "end": 1660
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1609,
                "end": 1660
              }
            ],
            "start": 1552,
            "end": 1662
          },
          "definite": false,
          "start": 1548,
          "end": 1662
        }
      ],
      "declare": false,
      "start": 1544,
      "end": 1662
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 1662
}
```
