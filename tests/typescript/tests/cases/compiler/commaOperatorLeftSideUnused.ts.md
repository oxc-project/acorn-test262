__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 4,
    "end": 6,
    "range": [
      4,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
    "end": 16,
    "range": [
      13,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 21,
    "end": 24,
    "range": [
      21,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 27,
    "end": 35,
    "range": [
      27,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 36,
    "end": 38,
    "range": [
      36,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 45,
    "end": 48,
    "range": [
      45,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 54,
    "end": 57,
    "range": [
      54,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 68,
    "end": 74,
    "range": [
      68,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 113,
    "end": 117,
    "range": [
      113,
      117
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "String",
    "value": "'zero or one'",
    "start": 137,
    "end": 150,
    "range": [
      137,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 156,
    "end": 163,
    "range": [
      156,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 171,
    "end": 177,
    "range": [
      171,
      177
    ]
  },
  {
    "type": "String",
    "value": "'more than one'",
    "start": 178,
    "end": 193,
    "range": [
      178,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 218,
    "end": 221,
    "range": [
      218,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 226,
    "end": 230,
    "range": [
      226,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "pow",
    "start": 231,
    "end": 234,
    "range": [
      231,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 264,
    "end": 267,
    "range": [
      264,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 317,
    "end": 319,
    "range": [
      317,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 330,
    "end": 332,
    "range": [
      330,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 336,
    "end": 338,
    "range": [
      336,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 340,
    "end": 342,
    "range": [
      340,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/323/",
    "regex": {
      "flags": "",
      "pattern": "323"
    },
    "start": 351,
    "end": 356,
    "range": [
      351,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 362,
    "end": 364,
    "range": [
      362,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Template",
    "value": "`wat`",
    "start": 368,
    "end": 373,
    "range": [
      368,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 375,
    "end": 379,
    "range": [
      375,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 382,
    "end": 384,
    "range": [
      382,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 388,
    "end": 392,
    "range": [
      388,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 394,
    "end": 399,
    "range": [
      394,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 402,
    "end": 404,
    "range": [
      402,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 408,
    "end": 413,
    "range": [
      408,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 415,
    "end": 419,
    "range": [
      415,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 422,
    "end": 424,
    "range": [
      422,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 434,
    "end": 436,
    "range": [
      434,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 439,
    "end": 441,
    "range": [
      439,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 445,
    "end": 454,
    "range": [
      445,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 456,
    "end": 458,
    "range": [
      456,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 461,
    "end": 463,
    "range": [
      461,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 470,
    "end": 472,
    "range": [
      470,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 477,
    "end": 481,
    "range": [
      477,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 484,
    "end": 486,
    "range": [
      484,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 490,
    "end": 498,
    "range": [
      490,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 506,
    "end": 509,
    "range": [
      506,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 512,
    "end": 514,
    "range": [
      512,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 527,
    "end": 529,
    "range": [
      527,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 533,
    "end": 539,
    "range": [
      533,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 540,
    "end": 542,
    "range": [
      540,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "String",
    "value": "'unused'",
    "start": 544,
    "end": 552,
    "range": [
      544,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 555,
    "end": 557,
    "range": [
      555,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 569,
    "end": 571,
    "range": [
      569,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 574,
    "end": 576,
    "range": [
      574,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 579,
    "end": 581,
    "range": [
      579,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 585,
    "end": 587,
    "range": [
      585,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 590,
    "end": 592,
    "range": [
      590,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 595,
    "end": 597,
    "range": [
      595,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 601,
    "end": 603,
    "range": [
      601,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 618,
    "end": 620,
    "range": [
      618,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 631,
    "end": 633,
    "range": [
      631,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 636,
    "end": 638,
    "range": [
      636,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 643,
    "end": 645,
    "range": [
      643,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 647,
    "end": 649,
    "range": [
      647,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 652,
    "end": 654,
    "range": [
      652,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 659,
    "end": 661,
    "range": [
      659,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 663,
    "end": 665,
    "range": [
      663,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 668,
    "end": 670,
    "range": [
      668,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 675,
    "end": 677,
    "range": [
      675,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 679,
    "end": 681,
    "range": [
      679,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 691,
    "end": 693,
    "range": [
      691,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 695,
    "end": 697,
    "range": [
      695,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 700,
    "end": 702,
    "range": [
      700,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 709,
    "end": 711,
    "range": [
      709,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 729,
    "end": 731,
    "range": [
      729,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 735,
    "end": 737,
    "range": [
      735,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 741,
    "end": 743,
    "range": [
      741,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 749,
    "end": 751,
    "range": [
      749,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 754,
    "end": 756,
    "range": [
      754,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 760,
    "end": 762,
    "range": [
      760,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 762,
    "end": 764,
    "range": [
      762,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 770,
    "end": 772,
    "range": [
      770,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 776,
    "end": 778,
    "range": [
      776,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 788,
    "end": 790,
    "range": [
      788,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 795,
    "end": 797,
    "range": [
      795,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 808,
    "end": 810,
    "range": [
      808,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 814,
    "end": 816,
    "range": [
      814,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 816,
    "end": 818,
    "range": [
      816,
      818
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 822,
    "end": 824,
    "range": [
      822,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 827,
    "end": 829,
    "range": [
      827,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 834,
    "end": 836,
    "range": [
      834,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 836,
    "end": 838,
    "range": [
      836,
      838
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 843,
    "end": 845,
    "range": [
      843,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 848,
    "end": 850,
    "range": [
      848,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 854,
    "end": 858,
    "range": [
      854,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "pow",
    "start": 859,
    "end": 862,
    "range": [
      859,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 874,
    "end": 876,
    "range": [
      874,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 880,
    "end": 884,
    "range": [
      880,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 885,
    "end": 887,
    "range": [
      885,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 889,
    "end": 891,
    "range": [
      889,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 894,
    "end": 896,
    "range": [
      894,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 900,
    "end": 902,
    "range": [
      900,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 903,
    "end": 905,
    "range": [
      903,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 906,
    "end": 909,
    "range": [
      906,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 911,
    "end": 914,
    "range": [
      911,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 917,
    "end": 919,
    "range": [
      917,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 926,
    "end": 928,
    "range": [
      926,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 929,
    "end": 931,
    "range": [
      929,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 936,
    "end": 938,
    "range": [
      936,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 945,
    "end": 947,
    "range": [
      945,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "String",
    "value": "'fn'",
    "start": 948,
    "end": 952,
    "range": [
      948,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 958,
    "end": 960,
    "range": [
      958,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 967,
    "end": 969,
    "range": [
      967,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 970,
    "end": 972,
    "range": [
      970,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Template",
    "value": "``",
    "start": 973,
    "end": 975,
    "range": [
      973,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  }
]
```
