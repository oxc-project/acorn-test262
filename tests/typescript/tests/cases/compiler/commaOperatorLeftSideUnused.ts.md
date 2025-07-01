__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              },
              "start": 6,
              "end": 11
            },
            "start": 4,
            "end": 11
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "start": 17,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 17,
          "end": 24
        }
      ],
      "declare": false,
      "start": 13,
      "end": 25
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 38
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 54,
                        "end": 57
                      },
                      "start": 54,
                      "end": 59
                    },
                    "start": 52,
                    "end": 59
                  },
                  "start": 49,
                  "end": 59
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 62,
                  "end": 64
                },
                "definite": false,
                "start": 49,
                "end": 64
              }
            ],
            "declare": false,
            "start": 45,
            "end": 65
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 78
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 85
              },
              "optional": false,
              "computed": false,
              "start": 75,
              "end": 85
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 118,
                      "end": 119
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 121,
                      "end": 122
                    }
                  ],
                  "start": 118,
                  "end": 122
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "zero or one",
                      "raw": "'zero or one'",
                      "start": 137,
                      "end": 150
                    },
                    "start": 130,
                    "end": 151
                  }
                ],
                "start": 113,
                "end": 151
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "more than one",
                      "raw": "'more than one'",
                      "start": 178,
                      "end": 193
                    },
                    "start": 171,
                    "end": 194
                  }
                ],
                "start": 156,
                "end": 194
              }
            ],
            "start": 68,
            "end": 198
          }
        ],
        "start": 41,
        "end": 200
      },
      "expression": false,
      "start": 27,
      "end": 200
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 223
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "pow",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 234
              },
              "optional": false,
              "computed": false,
              "start": 226,
              "end": 234
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 236,
                    "end": 237
                  },
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 239,
                    "end": 240
                  }
                ],
                "start": 236,
                "end": 240
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 243,
                "end": 244
              }
            ],
            "optional": false,
            "start": 226,
            "end": 245
          },
          "definite": false,
          "start": 222,
          "end": 245
        }
      ],
      "declare": false,
      "start": 218,
      "end": 246
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 269
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 274,
                  "end": 275
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 278,
                  "end": 279
                },
                "start": 274,
                "end": 279
              },
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 284,
                        "end": 285
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 288,
                        "end": 289
                      },
                      "start": 284,
                      "end": 289
                    },
                    {
                      "type": "Literal",
                      "value": 8,
                      "raw": "8",
                      "start": 291,
                      "end": 292
                    }
                  ],
                  "start": 284,
                  "end": 292
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 296,
                  "end": 297
                },
                "start": 283,
                "end": 297
              }
            ],
            "start": 272,
            "end": 299
          },
          "definite": false,
          "start": 268,
          "end": 299
        }
      ],
      "declare": false,
      "start": 264,
      "end": 300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 319
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 323,
              "end": 324
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 326,
              "end": 327
            }
          ],
          "start": 323,
          "end": 327
        },
        "start": 317,
        "end": 328
      },
      "directive": null,
      "start": 317,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 332
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 336,
              "end": 338
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 342
            }
          ],
          "start": 336,
          "end": 342
        },
        "start": 330,
        "end": 343
      },
      "directive": null,
      "start": 330,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 345,
          "end": 347
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "/323/",
              "regex": {
                "pattern": "323",
                "flags": ""
              },
              "start": 351,
              "end": 356
            },
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 358,
              "end": 359
            }
          ],
          "start": 351,
          "end": 359
        },
        "start": 345,
        "end": 360
      },
      "directive": null,
      "start": 345,
      "end": 361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 364
            },
            "right": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "wat",
                        "cooked": "wat"
                      },
                      "tail": true,
                      "start": 368,
                      "end": 373
                    }
                  ],
                  "expressions": [],
                  "start": 368,
                  "end": 373
                },
                {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 375,
                  "end": 379
                }
              ],
              "start": 368,
              "end": 379
            },
            "start": 362,
            "end": 380
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 384
            },
            "right": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 388,
                  "end": 392
                },
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 394,
                  "end": 399
                }
              ],
              "start": 388,
              "end": 399
            },
            "start": 382,
            "end": 400
          }
        ],
        "start": 362,
        "end": 400
      },
      "directive": null,
      "start": 362,
      "end": 401
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 404
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 408,
              "end": 413
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 415,
              "end": 419
            }
          ],
          "start": 408,
          "end": 419
        },
        "start": 402,
        "end": 420
      },
      "directive": null,
      "start": 402,
      "end": 421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 424
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 428,
              "end": 432
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 436
            }
          ],
          "start": 428,
          "end": 436
        },
        "start": 422,
        "end": 437
      },
      "directive": null,
      "start": 422,
      "end": 438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 441
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 454
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 456,
              "end": 458
            }
          ],
          "start": 445,
          "end": 458
        },
        "start": 439,
        "end": 459
      },
      "directive": null,
      "start": 439,
      "end": 460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 463
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 473,
                "end": 475
              },
              "id": null,
              "generator": false,
              "start": 467,
              "end": 475
            },
            {
              "type": "Literal",
              "value": "no",
              "raw": "'no'",
              "start": 477,
              "end": 481
            }
          ],
          "start": 467,
          "end": 481
        },
        "start": 461,
        "end": 482
      },
      "directive": null,
      "start": 461,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 484,
          "end": 486
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
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
                "body": [],
                "start": 501,
                "end": 504
              },
              "expression": false,
              "start": 490,
              "end": 504
            },
            {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 506,
              "end": 509
            }
          ],
          "start": 490,
          "end": 509
        },
        "start": 484,
        "end": 510
      },
      "directive": null,
      "start": 484,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 514
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 518,
              "end": 520
            },
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 522,
              "end": 524
            }
          ],
          "start": 518,
          "end": 524
        },
        "start": 512,
        "end": 525
      },
      "directive": null,
      "start": 512,
      "end": 526
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 527,
          "end": 529
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 540,
                "end": 542
              },
              "prefix": true,
              "start": 533,
              "end": 542
            },
            {
              "type": "Literal",
              "value": "unused",
              "raw": "'unused'",
              "start": 544,
              "end": 552
            }
          ],
          "start": 533,
          "end": 552
        },
        "start": 527,
        "end": 553
      },
      "directive": null,
      "start": 527,
      "end": 554
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 555,
          "end": 557
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 562,
                  "end": 563
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 565,
                  "end": 566
                },
                {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 569
                  },
                  "start": 568,
                  "end": 571
                }
              ],
              "start": 561,
              "end": 572
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 576
            }
          ],
          "start": 561,
          "end": 576
        },
        "start": 555,
        "end": 577
      },
      "directive": null,
      "start": 555,
      "end": 578
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 579,
          "end": 581
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 587
              },
              "start": 585,
              "end": 588
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 592
            }
          ],
          "start": 585,
          "end": 592
        },
        "start": 579,
        "end": 593
      },
      "directive": null,
      "start": 579,
      "end": 594
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 597
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 603
              },
              "consequent": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 606,
                "end": 607
              },
              "alternate": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 610,
                "end": 611
              },
              "start": 601,
              "end": 611
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 613,
              "end": 615
            }
          ],
          "start": 601,
          "end": 615
        },
        "start": 595,
        "end": 616
      },
      "directive": null,
      "start": 595,
      "end": 617
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 620
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 624,
                "end": 625
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 628,
                "end": 629
              },
              "start": 624,
              "end": 629
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 631,
              "end": 633
            }
          ],
          "start": 624,
          "end": 633
        },
        "start": 618,
        "end": 634
      },
      "directive": null,
      "start": 618,
      "end": 635
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 636,
          "end": 638
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 645
              },
              "prefix": true,
              "start": 642,
              "end": 645
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 647,
              "end": 649
            }
          ],
          "start": 642,
          "end": 649
        },
        "start": 636,
        "end": 650
      },
      "directive": null,
      "start": 636,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 654
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 661
              },
              "prefix": true,
              "start": 658,
              "end": 661
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 663,
              "end": 665
            }
          ],
          "start": 658,
          "end": 665
        },
        "start": 652,
        "end": 666
      },
      "directive": null,
      "start": 652,
      "end": 667
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 668,
          "end": 670
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 677
              },
              "prefix": true,
              "start": 674,
              "end": 677
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 679,
              "end": 681
            }
          ],
          "start": 674,
          "end": 681
        },
        "start": 668,
        "end": 682
      },
      "directive": null,
      "start": 668,
      "end": 683
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 684,
          "end": 686
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 693
              },
              "prefix": true,
              "start": 690,
              "end": 693
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 695,
              "end": 697
            }
          ],
          "start": 690,
          "end": 697
        },
        "start": 684,
        "end": 698
      },
      "directive": null,
      "start": 684,
      "end": 699
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 700,
          "end": 702
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 706,
                "end": 707
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 709,
                "end": 711
              }
            ],
            "start": 706,
            "end": 711
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 705,
          "end": 714
        },
        "start": 700,
        "end": 714
      },
      "directive": null,
      "start": 700,
      "end": 715
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 729,
          "end": 731
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 735,
                "end": 737
              },
              "consequent": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 740,
                  "end": 741
                },
                "start": 740,
                "end": 743
              },
              "alternate": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 746,
                "end": 747
              },
              "start": 735,
              "end": 747
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 749,
              "end": 751
            }
          ],
          "start": 735,
          "end": 751
        },
        "start": 729,
        "end": 752
      },
      "directive": null,
      "start": 729,
      "end": 753
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 754,
          "end": 756
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 764
              },
              "start": 760,
              "end": 764
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 766,
              "end": 767
            }
          ],
          "start": 760,
          "end": 767
        },
        "start": 754,
        "end": 768
      },
      "directive": null,
      "start": 754,
      "end": 769
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 772
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 778
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 781,
                "end": 782
              },
              "start": 776,
              "end": 782
            },
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 784,
              "end": 785
            }
          ],
          "start": 776,
          "end": 785
        },
        "start": 770,
        "end": 786
      },
      "directive": null,
      "start": 770,
      "end": 787
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 788,
          "end": 790
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 797
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 800,
                "end": 801
              },
              "start": 795,
              "end": 801
            },
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 804,
              "end": 805
            }
          ],
          "start": 794,
          "end": 805
        },
        "start": 788,
        "end": 806
      },
      "directive": null,
      "start": 788,
      "end": 807
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 808,
          "end": 810
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 816
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 819,
                "end": 820
              },
              "start": 814,
              "end": 820
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 824
            }
          ],
          "start": 814,
          "end": 824
        },
        "start": 808,
        "end": 825
      },
      "directive": null,
      "start": 808,
      "end": 826
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 827,
          "end": 829
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 834,
                "end": 836
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 839,
                "end": 840
              },
              "start": 834,
              "end": 840
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 845
            }
          ],
          "start": 833,
          "end": 845
        },
        "start": 827,
        "end": 846
      },
      "directive": null,
      "start": 827,
      "end": 847
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 848,
          "end": 850
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 854,
                  "end": 858
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 862
                },
                "optional": false,
                "computed": false,
                "start": 854,
                "end": 862
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 863,
                  "end": 864
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 866,
                  "end": 867
                }
              ],
              "optional": false,
              "start": 854,
              "end": 868
            },
            {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 870,
              "end": 871
            }
          ],
          "start": 854,
          "end": 871
        },
        "start": 848,
        "end": 872
      },
      "directive": null,
      "start": 848,
      "end": 873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 874,
          "end": 876
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 885,
                "end": 887
              },
              "prefix": true,
              "start": 880,
              "end": 887
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 889,
              "end": 891
            }
          ],
          "start": 880,
          "end": 891
        },
        "start": 874,
        "end": 892
      },
      "directive": null,
      "start": 874,
      "end": 893
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 894,
          "end": 896
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 902
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 906,
                "end": 909
              },
              "start": 900,
              "end": 909
            },
            {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 911,
              "end": 914
            }
          ],
          "start": 900,
          "end": 914
        },
        "start": 894,
        "end": 915
      },
      "directive": null,
      "start": 894,
      "end": 916
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 917,
          "end": 919
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 923,
                "end": 924
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 928
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 931
                },
                "optional": false,
                "computed": false,
                "start": 926,
                "end": 931
              }
            ],
            "start": 923,
            "end": 931
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 922,
          "end": 934
        },
        "start": 917,
        "end": 934
      },
      "directive": null,
      "start": 917,
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
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 936,
          "end": 938
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 942,
                "end": 943
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 945,
                  "end": 947
                },
                "property": {
                  "type": "Literal",
                  "value": "fn",
                  "raw": "'fn'",
                  "start": 948,
                  "end": 952
                },
                "optional": false,
                "computed": true,
                "start": 945,
                "end": 953
              }
            ],
            "start": 942,
            "end": 953
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 941,
          "end": 956
        },
        "start": 936,
        "end": 956
      },
      "directive": null,
      "start": 936,
      "end": 957
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null,
          "start": 958,
          "end": 960
        },
        "right": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 964,
                "end": 965
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 967,
                  "end": 969
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 970,
                  "end": 972
                },
                "optional": false,
                "computed": false,
                "start": 967,
                "end": 972
              }
            ],
            "start": 964,
            "end": 972
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 973,
                "end": 975
              }
            ],
            "expressions": [],
            "start": 973,
            "end": 975
          },
          "start": 963,
          "end": 975
        },
        "start": 958,
        "end": 975
      },
      "directive": null,
      "start": 958,
      "end": 976
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 976
}
```
