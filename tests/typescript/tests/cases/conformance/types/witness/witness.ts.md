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
            "name": "varInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 27
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "varInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 37
          },
          "definite": false,
          "start": 20,
          "end": 37
        }
      ],
      "declare": false,
      "start": 16,
      "end": 38
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
            "name": "pInit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 55,
              "end": 60
            },
            "start": 50,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 60
        }
      ],
      "declare": false,
      "start": 46,
      "end": 61
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 73
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "pInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 79
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "pInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 87
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 87
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "pInit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 106,
                      "end": 109
                    },
                    "start": 104,
                    "end": 109
                  },
                  "start": 99,
                  "end": 109
                },
                "init": null,
                "definite": false,
                "start": 99,
                "end": 109
              }
            ],
            "declare": false,
            "start": 95,
            "end": 110
          }
        ],
        "start": 89,
        "end": 112
      },
      "expression": false,
      "start": 62,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InitClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 128
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 139,
                "end": 143
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 139,
              "end": 145
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 135,
            "end": 146
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 153
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
                          "start": 170,
                          "end": 171
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 174,
                            "end": 178
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 180
                          },
                          "optional": false,
                          "computed": false,
                          "start": 174,
                          "end": 180
                        },
                        "definite": false,
                        "start": 170,
                        "end": 180
                      }
                    ],
                    "declare": false,
                    "start": 166,
                    "end": 181
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 197,
                              "end": 200
                            },
                            "start": 195,
                            "end": 200
                          },
                          "start": 194,
                          "end": 200
                        },
                        "init": null,
                        "definite": false,
                        "start": 194,
                        "end": 200
                      }
                    ],
                    "declare": false,
                    "start": 190,
                    "end": 201
                  }
                ],
                "start": 156,
                "end": 207
              },
              "expression": false,
              "start": 153,
              "end": 207
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 151,
            "end": 207
          }
        ],
        "start": 129,
        "end": 209
      },
      "abstract": false,
      "declare": false,
      "start": 113,
      "end": 209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnReturn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 244
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnReturn1",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 269
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 260,
              "end": 271
            },
            "start": 253,
            "end": 272
          }
        ],
        "start": 247,
        "end": 274
      },
      "expression": false,
      "start": 226,
      "end": 274
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 282,
                "end": 285
              },
              "start": 280,
              "end": 285
            },
            "start": 279,
            "end": 285
          },
          "init": null,
          "definite": false,
          "start": 279,
          "end": 285
        }
      ],
      "declare": false,
      "start": 275,
      "end": 286
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 292
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnReturn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 304
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 295,
            "end": 306
          },
          "definite": false,
          "start": 291,
          "end": 306
        }
      ],
      "declare": false,
      "start": 287,
      "end": 307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnReturn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 327
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnReturn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 352
            },
            "start": 336,
            "end": 353
          }
        ],
        "start": 330,
        "end": 355
      },
      "expression": false,
      "start": 309,
      "end": 355
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
            "name": "fnr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 372,
                    "end": 375
                  },
                  "start": 369,
                  "end": 375
                },
                "start": 366,
                "end": 375
              },
              "start": 364,
              "end": 375
            },
            "start": 360,
            "end": 375
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnReturn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 387
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 378,
            "end": 389
          },
          "definite": false,
          "start": 360,
          "end": 389
        }
      ],
      "declare": false,
      "start": 356,
      "end": 390
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
            "name": "co1",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 408
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 415
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 417,
                "end": 418
              }
            ],
            "start": 412,
            "end": 418
          },
          "definite": false,
          "start": 405,
          "end": 419
        }
      ],
      "declare": false,
      "start": 401,
      "end": 420
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
            "name": "co1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 430,
                "end": 436
              },
              "start": 428,
              "end": 436
            },
            "start": 425,
            "end": 436
          },
          "init": null,
          "definite": false,
          "start": 425,
          "end": 436
        }
      ],
      "declare": false,
      "start": 421,
      "end": 437
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
            "name": "co2",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 445
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 449,
                "end": 450
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 452,
                "end": 453
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co2",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 458
              }
            ],
            "start": 449,
            "end": 458
          },
          "definite": false,
          "start": 442,
          "end": 459
        }
      ],
      "declare": false,
      "start": 438,
      "end": 460
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
            "name": "co2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 470,
                "end": 473
              },
              "start": 468,
              "end": 473
            },
            "start": 465,
            "end": 473
          },
          "init": null,
          "definite": false,
          "start": 465,
          "end": 473
        }
      ],
      "declare": false,
      "start": 461,
      "end": 474
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
            "name": "co3",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 482
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 489
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co2",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 494
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co3",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 499
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "co1",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 504
              }
            ],
            "start": 486,
            "end": 504
          },
          "definite": false,
          "start": 479,
          "end": 505
        }
      ],
      "declare": false,
      "start": 475,
      "end": 506
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
            "name": "co3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 516,
                "end": 522
              },
              "start": 514,
              "end": 522
            },
            "start": 511,
            "end": 522
          },
          "init": null,
          "definite": false,
          "start": 511,
          "end": 522
        }
      ],
      "declare": false,
      "start": 507,
      "end": 523
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
            "name": "as1",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 546
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "as1",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 553
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 556,
              "end": 557
            },
            "start": 550,
            "end": 557
          },
          "definite": false,
          "start": 543,
          "end": 558
        }
      ],
      "declare": false,
      "start": 539,
      "end": 559
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
            "name": "as1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 569,
                "end": 575
              },
              "start": 567,
              "end": 575
            },
            "start": 564,
            "end": 575
          },
          "init": null,
          "definite": false,
          "start": 564,
          "end": 575
        }
      ],
      "declare": false,
      "start": 560,
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
            "name": "as2",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 584
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "as2",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 591
            },
            "right": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "as2",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 597
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 600,
                "end": 601
              },
              "start": 594,
              "end": 601
            },
            "start": 588,
            "end": 601
          },
          "definite": false,
          "start": 581,
          "end": 602
        }
      ],
      "declare": false,
      "start": 577,
      "end": 603
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
            "name": "as2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 613,
                "end": 619
              },
              "start": 611,
              "end": 619
            },
            "start": 608,
            "end": 619
          },
          "init": null,
          "definite": false,
          "start": 608,
          "end": 619
        }
      ],
      "declare": false,
      "start": 604,
      "end": 620
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
            "name": "cnd1",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 645
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cnd1",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 652
            },
            "consequent": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 655,
              "end": 656
            },
            "alternate": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 659,
              "end": 660
            },
            "start": 648,
            "end": 660
          },
          "definite": false,
          "start": 641,
          "end": 660
        }
      ],
      "declare": false,
      "start": 637,
      "end": 661
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
            "name": "cnd1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 672,
                "end": 678
              },
              "start": 670,
              "end": 678
            },
            "start": 666,
            "end": 678
          },
          "init": null,
          "definite": false,
          "start": 666,
          "end": 678
        }
      ],
      "declare": false,
      "start": 662,
      "end": 679
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
            "name": "cnd2",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 688
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cnd1",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 695
            },
            "consequent": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "cnd1",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 702
              },
              "consequent": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 705,
                "end": 707
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 710,
                "end": 712
              },
              "start": 698,
              "end": 712
            },
            "alternate": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 715,
              "end": 717
            },
            "start": 691,
            "end": 717
          },
          "definite": false,
          "start": 684,
          "end": 717
        }
      ],
      "declare": false,
      "start": 680,
      "end": 718
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
            "name": "cnd2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 729,
                "end": 735
              },
              "start": 727,
              "end": 735
            },
            "start": 723,
            "end": 735
          },
          "init": null,
          "definite": false,
          "start": 723,
          "end": 735
        }
      ],
      "declare": false,
      "start": 719,
      "end": 736
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
            "name": "or1",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 751
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "or1",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 757
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 761,
              "end": 763
            },
            "start": 754,
            "end": 763
          },
          "definite": false,
          "start": 748,
          "end": 763
        }
      ],
      "declare": false,
      "start": 744,
      "end": 764
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
            "name": "or1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 774,
                "end": 777
              },
              "start": 772,
              "end": 777
            },
            "start": 769,
            "end": 777
          },
          "init": null,
          "definite": false,
          "start": 769,
          "end": 777
        }
      ],
      "declare": false,
      "start": 765,
      "end": 778
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
            "name": "or2",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 786
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 789,
              "end": 791
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "or2",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 798
            },
            "start": 789,
            "end": 798
          },
          "definite": false,
          "start": 783,
          "end": 798
        }
      ],
      "declare": false,
      "start": 779,
      "end": 799
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
            "name": "or2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 809,
                "end": 812
              },
              "start": 807,
              "end": 812
            },
            "start": 804,
            "end": 812
          },
          "init": null,
          "definite": false,
          "start": 804,
          "end": 812
        }
      ],
      "declare": false,
      "start": 800,
      "end": 813
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
            "name": "or3",
            "optional": false,
            "typeAnnotation": null,
            "start": 818,
            "end": 821
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "or3",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 827
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "or3",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 834
            },
            "start": 824,
            "end": 834
          },
          "definite": false,
          "start": 818,
          "end": 834
        }
      ],
      "declare": false,
      "start": 814,
      "end": 835
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
            "name": "or3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 845,
                "end": 848
              },
              "start": 843,
              "end": 848
            },
            "start": 840,
            "end": 848
          },
          "init": null,
          "definite": false,
          "start": 840,
          "end": 848
        }
      ],
      "declare": false,
      "start": 836,
      "end": 849
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
            "name": "and1",
            "optional": false,
            "typeAnnotation": null,
            "start": 861,
            "end": 865
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "and1",
              "optional": false,
              "typeAnnotation": null,
              "start": 868,
              "end": 872
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 876,
              "end": 878
            },
            "start": 868,
            "end": 878
          },
          "definite": false,
          "start": 861,
          "end": 878
        }
      ],
      "declare": false,
      "start": 857,
      "end": 879
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
            "name": "and1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 890,
                "end": 896
              },
              "start": 888,
              "end": 896
            },
            "start": 884,
            "end": 896
          },
          "init": null,
          "definite": false,
          "start": 884,
          "end": 896
        }
      ],
      "declare": false,
      "start": 880,
      "end": 897
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
            "name": "and2",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 906
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 909,
              "end": 911
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "and2",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 919
            },
            "start": 909,
            "end": 919
          },
          "definite": false,
          "start": 902,
          "end": 919
        }
      ],
      "declare": false,
      "start": 898,
      "end": 920
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
            "name": "and2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 931,
                "end": 934
              },
              "start": 929,
              "end": 934
            },
            "start": 925,
            "end": 934
          },
          "init": null,
          "definite": false,
          "start": 925,
          "end": 934
        }
      ],
      "declare": false,
      "start": 921,
      "end": 935
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
            "name": "and3",
            "optional": false,
            "typeAnnotation": null,
            "start": 940,
            "end": 944
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "and3",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 951
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "and3",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 959
            },
            "start": 947,
            "end": 959
          },
          "definite": false,
          "start": 940,
          "end": 959
        }
      ],
      "declare": false,
      "start": 936,
      "end": 960
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
            "name": "and3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 971,
                "end": 974
              },
              "start": 969,
              "end": 974
            },
            "start": 965,
            "end": 974
          },
          "init": null,
          "definite": false,
          "start": 965,
          "end": 974
        }
      ],
      "declare": false,
      "start": 961,
      "end": 975
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1015,
        "end": 1021
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1043
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1037,
              "end": 1045
            },
            "start": 1030,
            "end": 1046
          }
        ],
        "start": 1024,
        "end": 1048
      },
      "expression": false,
      "start": 1006,
      "end": 1048
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
            "name": "fnCallResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 1053,
            "end": 1065
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1074
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1068,
            "end": 1076
          },
          "definite": false,
          "start": 1053,
          "end": 1076
        }
      ],
      "declare": false,
      "start": 1049,
      "end": 1077
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
            "name": "fnCallResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1096,
                "end": 1099
              },
              "start": 1094,
              "end": 1099
            },
            "start": 1082,
            "end": 1099
          },
          "init": null,
          "definite": false,
          "start": 1082,
          "end": 1099
        }
      ],
      "declare": false,
      "start": 1078,
      "end": 1100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnArg1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1134
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1145,
                "end": 1151
              },
              "typeArguments": null,
              "start": 1138,
              "end": 1151
            },
            "start": 1136,
            "end": 1151
          },
          "start": 1135,
          "end": 1151
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1156,
              "end": 1162
            },
            "start": 1154,
            "end": 1162
          },
          "start": 1153,
          "end": 1162
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fnArg1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1188,
                                "end": 1194
                              },
                              "typeArguments": null,
                              "start": 1181,
                              "end": 1194
                            },
                            "start": 1179,
                            "end": 1194
                          },
                          "start": 1178,
                          "end": 1194
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1199,
                              "end": 1205
                            },
                            "start": 1197,
                            "end": 1205
                          },
                          "start": 1196,
                          "end": 1205
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1210,
                          "end": 1214
                        },
                        "start": 1207,
                        "end": 1214
                      },
                      "start": 1177,
                      "end": 1214
                    },
                    "start": 1175,
                    "end": 1214
                  },
                  "start": 1174,
                  "end": 1214
                },
                "init": null,
                "definite": false,
                "start": 1174,
                "end": 1214
              }
            ],
            "declare": false,
            "start": 1170,
            "end": 1215
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fnArg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1220,
                "end": 1226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fnArg1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1227,
                  "end": 1233
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1235,
                  "end": 1236
                }
              ],
              "optional": false,
              "start": 1220,
              "end": 1237
            },
            "directive": null,
            "start": 1220,
            "end": 1238
          }
        ],
        "start": 1164,
        "end": 1240
      },
      "expression": false,
      "start": 1119,
      "end": 1240
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1251,
        "end": 1260
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1268,
                      "end": 1274
                    },
                    "start": 1266,
                    "end": 1274
                  },
                  "start": 1265,
                  "end": 1274
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1279,
                  "end": 1285
                },
                "start": 1276,
                "end": 1285
              },
              "start": 1264,
              "end": 1285
            },
            "start": 1262,
            "end": 1285
          },
          "start": 1261,
          "end": 1285
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1288,
          "end": 1294
        },
        "start": 1286,
        "end": 1294
      },
      "body": null,
      "expression": false,
      "start": 1242,
      "end": 1295
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1305,
        "end": 1314
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1322,
                      "end": 1328
                    },
                    "start": 1320,
                    "end": 1328
                  },
                  "start": 1319,
                  "end": 1328
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1333,
                  "end": 1339
                },
                "start": 1330,
                "end": 1339
              },
              "start": 1318,
              "end": 1339
            },
            "start": 1316,
            "end": 1339
          },
          "start": 1315,
          "end": 1339
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1342,
          "end": 1348
        },
        "start": 1340,
        "end": 1348
      },
      "body": null,
      "expression": false,
      "start": 1296,
      "end": 1349
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1368
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1376,
                      "end": 1379
                    },
                    "start": 1374,
                    "end": 1379
                  },
                  "start": 1373,
                  "end": 1379
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1384,
                  "end": 1387
                },
                "start": 1381,
                "end": 1387
              },
              "start": 1372,
              "end": 1387
            },
            "start": 1370,
            "end": 1387
          },
          "start": 1369,
          "end": 1387
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1390,
          "end": 1393
        },
        "start": 1388,
        "end": 1393
      },
      "body": null,
      "expression": false,
      "start": 1350,
      "end": 1394
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1404,
        "end": 1413
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1425,
              "end": 1434
            },
            "start": 1418,
            "end": 1435
          }
        ],
        "start": 1416,
        "end": 1437
      },
      "expression": false,
      "start": 1395,
      "end": 1437
    },
    {
      "type": "EmptyStatement",
      "start": 1437,
      "end": 1438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnArg2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1455
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "overload1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1480
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fnArg2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1481,
                  "end": 1487
                }
              ],
              "optional": false,
              "start": 1471,
              "end": 1488
            },
            "start": 1464,
            "end": 1489
          }
        ],
        "start": 1458,
        "end": 1491
      },
      "expression": false,
      "start": 1440,
      "end": 1491
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 1496,
            "end": 1497
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnArg2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1506
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1500,
            "end": 1508
          },
          "definite": false,
          "start": 1496,
          "end": 1508
        }
      ],
      "declare": false,
      "start": 1492,
      "end": 1509
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
        "start": 1572,
        "end": 1573
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
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1580,
              "end": 1583
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1608,
                            "end": 1612
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1613,
                            "end": 1616
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1608,
                          "end": 1616
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1608,
                        "end": 1618
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1603,
                      "end": 1621
                    },
                    "start": 1596,
                    "end": 1622
                  }
                ],
                "start": 1586,
                "end": 1628
              },
              "expression": false,
              "start": 1583,
              "end": 1628
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1580,
            "end": 1628
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1633,
              "end": 1636
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1661,
                            "end": 1665
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1666,
                            "end": 1669
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1661,
                          "end": 1669
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1661,
                        "end": 1671
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1656,
                      "end": 1672
                    },
                    "start": 1649,
                    "end": 1673
                  }
                ],
                "start": 1639,
                "end": 1679
              },
              "expression": false,
              "start": 1636,
              "end": 1679
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1633,
            "end": 1679
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1684,
              "end": 1687
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
                    "kind": "var",
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
                              "type": "TSConstructorType",
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1711,
                                  "end": 1712
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1717,
                                  "end": 1723
                                },
                                "start": 1714,
                                "end": 1723
                              },
                              "start": 1707,
                              "end": 1723
                            },
                            "start": 1705,
                            "end": 1723
                          },
                          "start": 1704,
                          "end": 1723
                        },
                        "init": null,
                        "definite": false,
                        "start": 1704,
                        "end": 1723
                      }
                    ],
                    "declare": false,
                    "start": 1700,
                    "end": 1724
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1744,
                        "end": 1745
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1746,
                            "end": 1750
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1751,
                            "end": 1754
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1746,
                          "end": 1754
                        }
                      ],
                      "start": 1740,
                      "end": 1755
                    },
                    "start": 1733,
                    "end": 1756
                  }
                ],
                "start": 1690,
                "end": 1762
              },
              "expression": false,
              "start": 1687,
              "end": 1762
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1684,
            "end": 1762
          }
        ],
        "start": 1574,
        "end": 1764
      },
      "abstract": false,
      "declare": false,
      "start": 1566,
      "end": 1764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1775,
        "end": 1778
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
            "kind": "var",
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
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1799,
                          "end": 1800
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1805,
                          "end": 1811
                        },
                        "start": 1802,
                        "end": 1811
                      },
                      "start": 1794,
                      "end": 1811
                    },
                    "start": 1792,
                    "end": 1811
                  },
                  "start": 1791,
                  "end": 1811
                },
                "init": null,
                "definite": false,
                "start": 1791,
                "end": 1811
              }
            ],
            "declare": false,
            "start": 1787,
            "end": 1812
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1828,
                "end": 1829
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1830,
                  "end": 1833
                }
              ],
              "start": 1824,
              "end": 1834
            },
            "start": 1817,
            "end": 1835
          }
        ],
        "start": 1781,
        "end": 1837
      },
      "expression": false,
      "start": 1766,
      "end": 1837
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
            "name": "fn5r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1846
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1849,
              "end": 1852
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1849,
            "end": 1854
          },
          "definite": false,
          "start": 1842,
          "end": 1854
        }
      ],
      "declare": false,
      "start": 1838,
      "end": 1855
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
            "name": "propAcc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1922,
            "end": 1930
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1939,
                  "end": 1940
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propAcc1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1942,
                    "end": 1950
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1951,
                    "end": 1952
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1942,
                  "end": 1952
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1939,
                "end": 1952
              }
            ],
            "start": 1933,
            "end": 1954
          },
          "definite": false,
          "start": 1922,
          "end": 1954
        }
      ],
      "declare": false,
      "start": 1918,
      "end": 1955
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
            "name": "propAcc1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1972,
                      "end": 1973
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1975,
                        "end": 1978
                      },
                      "start": 1973,
                      "end": 1978
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1972,
                    "end": 1979
                  }
                ],
                "start": 1970,
                "end": 1981
              },
              "start": 1968,
              "end": 1981
            },
            "start": 1960,
            "end": 1981
          },
          "init": null,
          "definite": false,
          "start": 1960,
          "end": 1981
        }
      ],
      "declare": false,
      "start": 1956,
      "end": 1981
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2031
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 2049,
                    "end": 2050
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2053,
                      "end": 2055
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2056,
                      "end": 2057
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2053,
                    "end": 2057
                  },
                  "definite": false,
                  "start": 2049,
                  "end": 2057
                }
              ],
              "declare": false,
              "start": 2045,
              "end": 2058
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2038,
            "end": 2058
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2067,
                  "end": 2068
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2071,
                  "end": 2072
                },
                "definite": false,
                "start": 2067,
                "end": 2072
              }
            ],
            "declare": false,
            "start": 2063,
            "end": 2073
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2085,
                      "end": 2088
                    },
                    "start": 2083,
                    "end": 2088
                  },
                  "start": 2082,
                  "end": 2088
                },
                "init": null,
                "definite": false,
                "start": 2082,
                "end": 2088
              }
            ],
            "declare": false,
            "start": 2078,
            "end": 2089
          }
        ],
        "start": 2032,
        "end": 2091
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2019,
      "end": 2091
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2141,
        "end": 2143
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2150,
              "end": 2151
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 2154,
                "end": 2158
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2159,
                "end": 2160
              },
              "optional": false,
              "computed": false,
              "start": 2154,
              "end": 2160
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2150,
            "end": 2161
          }
        ],
        "start": 2144,
        "end": 2173
      },
      "abstract": false,
      "declare": false,
      "start": 2135,
      "end": 2173
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
            "name": "c2inst",
            "optional": false,
            "typeAnnotation": null,
            "start": 2178,
            "end": 2184
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2191,
                "end": 2193
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2187,
              "end": 2195
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2196,
              "end": 2197
            },
            "optional": false,
            "computed": false,
            "start": 2187,
            "end": 2197
          },
          "definite": false,
          "start": 2178,
          "end": 2197
        }
      ],
      "declare": false,
      "start": 2174,
      "end": 2198
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
            "name": "c2inst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2211,
                "end": 2214
              },
              "start": 2209,
              "end": 2214
            },
            "start": 2203,
            "end": 2214
          },
          "init": null,
          "definite": false,
          "start": 2203,
          "end": 2214
        }
      ],
      "declare": false,
      "start": 2199,
      "end": 2215
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2263,
        "end": 2265
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null,
              "start": 2279,
              "end": 2280
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2283,
                "end": 2285
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 2286,
                "end": 2287
              },
              "optional": false,
              "computed": false,
              "start": 2283,
              "end": 2287
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2272,
            "end": 2288
          }
        ],
        "start": 2266,
        "end": 2290
      },
      "abstract": false,
      "declare": false,
      "start": 2257,
      "end": 2290
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
            "name": "qq",
            "optional": false,
            "typeAnnotation": null,
            "start": 2295,
            "end": 2297
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2302
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null,
              "start": 2303,
              "end": 2304
            },
            "optional": false,
            "computed": false,
            "start": 2300,
            "end": 2304
          },
          "definite": false,
          "start": 2295,
          "end": 2304
        }
      ],
      "declare": false,
      "start": 2291,
      "end": 2305
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
            "name": "qq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2314,
                "end": 2317
              },
              "start": 2312,
              "end": 2317
            },
            "start": 2310,
            "end": 2317
          },
          "init": null,
          "definite": false,
          "start": 2310,
          "end": 2317
        }
      ],
      "declare": false,
      "start": 2306,
      "end": 2318
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 2359
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 16,
    "end": 19,
    "range": [
      16,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "varInit",
    "start": 20,
    "end": 27,
    "range": [
      20,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "varInit",
    "start": 30,
    "end": 37,
    "range": [
      30,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49,
    "range": [
      46,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "pInit",
    "start": 50,
    "end": 55,
    "range": [
      50,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70,
    "range": [
      62,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 71,
    "end": 73,
    "range": [
      71,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "pInit",
    "start": 74,
    "end": 79,
    "range": [
      74,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "pInit",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 95,
    "end": 98,
    "range": [
      95,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "pInit",
    "start": 99,
    "end": 104,
    "range": [
      99,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 106,
    "end": 109,
    "range": [
      106,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 113,
    "end": 118,
    "range": [
      113,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "InitClass",
    "start": 119,
    "end": 128,
    "range": [
      119,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 139,
    "end": 143,
    "range": [
      139,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 151,
    "end": 153,
    "range": [
      151,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 174,
    "end": 178,
    "range": [
      174,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 190,
    "end": 193,
    "range": [
      190,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234,
    "range": [
      226,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "fnReturn1",
    "start": 235,
    "end": 244,
    "range": [
      235,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 253,
    "end": 259,
    "range": [
      253,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "fnReturn1",
    "start": 260,
    "end": 269,
    "range": [
      260,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 282,
    "end": 285,
    "range": [
      282,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 287,
    "end": 290,
    "range": [
      287,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "fnReturn1",
    "start": 295,
    "end": 304,
    "range": [
      295,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 309,
    "end": 317,
    "range": [
      309,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "fnReturn2",
    "start": 318,
    "end": 327,
    "range": [
      318,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 336,
    "end": 342,
    "range": [
      336,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "fnReturn2",
    "start": 343,
    "end": 352,
    "range": [
      343,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 356,
    "end": 359,
    "range": [
      356,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "fnr2",
    "start": 360,
    "end": 364,
    "range": [
      360,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 369,
    "end": 371,
    "range": [
      369,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 372,
    "end": 375,
    "range": [
      372,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "fnReturn2",
    "start": 378,
    "end": 387,
    "range": [
      378,
      387
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
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404,
    "range": [
      401,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 405,
    "end": 408,
    "range": [
      405,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 412,
    "end": 415,
    "range": [
      412,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 421,
    "end": 424,
    "range": [
      421,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 425,
    "end": 428,
    "range": [
      425,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 430,
    "end": 436,
    "range": [
      430,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 438,
    "end": 441,
    "range": [
      438,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "co2",
    "start": 442,
    "end": 445,
    "range": [
      442,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "co2",
    "start": 455,
    "end": 458,
    "range": [
      455,
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
    "type": "Keyword",
    "value": "var",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "co2",
    "start": 465,
    "end": 468,
    "range": [
      465,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 470,
    "end": 473,
    "range": [
      470,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 475,
    "end": 478,
    "range": [
      475,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "co3",
    "start": 479,
    "end": 482,
    "range": [
      479,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 486,
    "end": 489,
    "range": [
      486,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "co2",
    "start": 491,
    "end": 494,
    "range": [
      491,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "co3",
    "start": 496,
    "end": 499,
    "range": [
      496,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "co1",
    "start": 501,
    "end": 504,
    "range": [
      501,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 507,
    "end": 510,
    "range": [
      507,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "co3",
    "start": 511,
    "end": 514,
    "range": [
      511,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 516,
    "end": 522,
    "range": [
      516,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 539,
    "end": 542,
    "range": [
      539,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "as1",
    "start": 543,
    "end": 546,
    "range": [
      543,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "as1",
    "start": 550,
    "end": 553,
    "range": [
      550,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 560,
    "end": 563,
    "range": [
      560,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "as1",
    "start": 564,
    "end": 567,
    "range": [
      564,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 569,
    "end": 575,
    "range": [
      569,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580,
    "range": [
      577,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "as2",
    "start": 581,
    "end": 584,
    "range": [
      581,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "as2",
    "start": 588,
    "end": 591,
    "range": [
      588,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "as2",
    "start": 594,
    "end": 597,
    "range": [
      594,
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
    "type": "Numeric",
    "value": "2",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 604,
    "end": 607,
    "range": [
      604,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "as2",
    "start": 608,
    "end": 611,
    "range": [
      608,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 641,
    "end": 645,
    "range": [
      641,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 648,
    "end": 652,
    "range": [
      648,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 662,
    "end": 665,
    "range": [
      662,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 666,
    "end": 670,
    "range": [
      666,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678,
    "range": [
      672,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 680,
    "end": 683,
    "range": [
      680,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "cnd2",
    "start": 684,
    "end": 688,
    "range": [
      684,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 691,
    "end": 695,
    "range": [
      691,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "cnd1",
    "start": 698,
    "end": 702,
    "range": [
      698,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 705,
    "end": 707,
    "range": [
      705,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 710,
    "end": 712,
    "range": [
      710,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 715,
    "end": 717,
    "range": [
      715,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 719,
    "end": 722,
    "range": [
      719,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "cnd2",
    "start": 723,
    "end": 727,
    "range": [
      723,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 729,
    "end": 735,
    "range": [
      729,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 744,
    "end": 747,
    "range": [
      744,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "or1",
    "start": 748,
    "end": 751,
    "range": [
      748,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "or1",
    "start": 754,
    "end": 757,
    "range": [
      754,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 758,
    "end": 760,
    "range": [
      758,
      760
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 761,
    "end": 763,
    "range": [
      761,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 765,
    "end": 768,
    "range": [
      765,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "or1",
    "start": 769,
    "end": 772,
    "range": [
      769,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 774,
    "end": 777,
    "range": [
      774,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 779,
    "end": 782,
    "range": [
      779,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "or2",
    "start": 783,
    "end": 786,
    "range": [
      783,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 789,
    "end": 791,
    "range": [
      789,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 792,
    "end": 794,
    "range": [
      792,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "or2",
    "start": 795,
    "end": 798,
    "range": [
      795,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 800,
    "end": 803,
    "range": [
      800,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "or2",
    "start": 804,
    "end": 807,
    "range": [
      804,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 809,
    "end": 812,
    "range": [
      809,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 814,
    "end": 817,
    "range": [
      814,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "or3",
    "start": 818,
    "end": 821,
    "range": [
      818,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "or3",
    "start": 824,
    "end": 827,
    "range": [
      824,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 828,
    "end": 830,
    "range": [
      828,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "or3",
    "start": 831,
    "end": 834,
    "range": [
      831,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 836,
    "end": 839,
    "range": [
      836,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "or3",
    "start": 840,
    "end": 843,
    "range": [
      840,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 845,
    "end": 848,
    "range": [
      845,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "and1",
    "start": 861,
    "end": 865,
    "range": [
      861,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "and1",
    "start": 868,
    "end": 872,
    "range": [
      868,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 873,
    "end": 875,
    "range": [
      873,
      875
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 876,
    "end": 878,
    "range": [
      876,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 880,
    "end": 883,
    "range": [
      880,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "and1",
    "start": 884,
    "end": 888,
    "range": [
      884,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 890,
    "end": 896,
    "range": [
      890,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 898,
    "end": 901,
    "range": [
      898,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "and2",
    "start": 902,
    "end": 906,
    "range": [
      902,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 909,
    "end": 911,
    "range": [
      909,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 912,
    "end": 914,
    "range": [
      912,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "and2",
    "start": 915,
    "end": 919,
    "range": [
      915,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 921,
    "end": 924,
    "range": [
      921,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "and2",
    "start": 925,
    "end": 929,
    "range": [
      925,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 931,
    "end": 934,
    "range": [
      931,
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
    "type": "Keyword",
    "value": "var",
    "start": 936,
    "end": 939,
    "range": [
      936,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "and3",
    "start": 940,
    "end": 944,
    "range": [
      940,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Identifier",
    "value": "and3",
    "start": 947,
    "end": 951,
    "range": [
      947,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 952,
    "end": 954,
    "range": [
      952,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "and3",
    "start": 955,
    "end": 959,
    "range": [
      955,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 961,
    "end": 964,
    "range": [
      961,
      964
    ]
  },
  {
    "type": "Identifier",
    "value": "and3",
    "start": 965,
    "end": 969,
    "range": [
      965,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 971,
    "end": 974,
    "range": [
      971,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1006,
    "end": 1014,
    "range": [
      1006,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "fnCall",
    "start": 1015,
    "end": 1021,
    "range": [
      1015,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1030,
    "end": 1036,
    "range": [
      1030,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "fnCall",
    "start": 1037,
    "end": 1043,
    "range": [
      1037,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1049,
    "end": 1052,
    "range": [
      1049,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "fnCallResult",
    "start": 1053,
    "end": 1065,
    "range": [
      1053,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "fnCall",
    "start": 1068,
    "end": 1074,
    "range": [
      1068,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1078,
    "end": 1081,
    "range": [
      1078,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "fnCallResult",
    "start": 1082,
    "end": 1094,
    "range": [
      1082,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1096,
    "end": 1099,
    "range": [
      1096,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1119,
    "end": 1127,
    "range": [
      1119,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1128,
    "end": 1134,
    "range": [
      1128,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1138,
    "end": 1144,
    "range": [
      1138,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1145,
    "end": 1151,
    "range": [
      1145,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1156,
    "end": 1162,
    "range": [
      1156,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1170,
    "end": 1173,
    "range": [
      1170,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1181,
    "end": 1187,
    "range": [
      1181,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1188,
    "end": 1194,
    "range": [
      1188,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1199,
    "end": 1205,
    "range": [
      1199,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1207,
    "end": 1209,
    "range": [
      1207,
      1209
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1210,
    "end": 1214,
    "range": [
      1210,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1220,
    "end": 1226,
    "range": [
      1220,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "fnArg1",
    "start": 1227,
    "end": 1233,
    "range": [
      1227,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1242,
    "end": 1250,
    "range": [
      1242,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1251,
    "end": 1260,
    "range": [
      1251,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1268,
    "end": 1274,
    "range": [
      1268,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1276,
    "end": 1278,
    "range": [
      1276,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1279,
    "end": 1285,
    "range": [
      1279,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1288,
    "end": 1294,
    "range": [
      1288,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1296,
    "end": 1304,
    "range": [
      1296,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1305,
    "end": 1314,
    "range": [
      1305,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1322,
    "end": 1328,
    "range": [
      1322,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1330,
    "end": 1332,
    "range": [
      1330,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1333,
    "end": 1339,
    "range": [
      1333,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1342,
    "end": 1348,
    "range": [
      1342,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1350,
    "end": 1358,
    "range": [
      1350,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1359,
    "end": 1368,
    "range": [
      1359,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1376,
    "end": 1379,
    "range": [
      1376,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1381,
    "end": 1383,
    "range": [
      1381,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1384,
    "end": 1387,
    "range": [
      1384,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1390,
    "end": 1393,
    "range": [
      1390,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1395,
    "end": 1403,
    "range": [
      1395,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1404,
    "end": 1413,
    "range": [
      1404,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1418,
    "end": 1424,
    "range": [
      1418,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1425,
    "end": 1434,
    "range": [
      1425,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1440,
    "end": 1448,
    "range": [
      1440,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "fnArg2",
    "start": 1449,
    "end": 1455,
    "range": [
      1449,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1464,
    "end": 1470,
    "range": [
      1464,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 1471,
    "end": 1480,
    "range": [
      1471,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "fnArg2",
    "start": 1481,
    "end": 1487,
    "range": [
      1481,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1492,
    "end": 1495,
    "range": [
      1492,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "fnArg2",
    "start": 1500,
    "end": 1506,
    "range": [
      1500,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1566,
    "end": 1571,
    "range": [
      1566,
      1571
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 1580,
    "end": 1583,
    "range": [
      1580,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1596,
    "end": 1602,
    "range": [
      1596,
      1602
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1603,
    "end": 1606,
    "range": [
      1603,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1608,
    "end": 1612,
    "range": [
      1608,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 1613,
    "end": 1616,
    "range": [
      1613,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1633,
    "end": 1636,
    "range": [
      1633,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1649,
    "end": 1655,
    "range": [
      1649,
      1655
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1656,
    "end": 1659,
    "range": [
      1656,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1661,
    "end": 1665,
    "range": [
      1661,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1666,
    "end": 1669,
    "range": [
      1666,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1684,
    "end": 1687,
    "range": [
      1684,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1700,
    "end": 1703,
    "range": [
      1700,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1707,
    "end": 1710,
    "range": [
      1707,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1714,
    "end": 1716,
    "range": [
      1714,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1717,
    "end": 1723,
    "range": [
      1717,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1733,
    "end": 1739,
    "range": [
      1733,
      1739
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1740,
    "end": 1743,
    "range": [
      1740,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1746,
    "end": 1750,
    "range": [
      1746,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1751,
    "end": 1754,
    "range": [
      1751,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1766,
    "end": 1774,
    "range": [
      1766,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 1775,
    "end": 1778,
    "range": [
      1775,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1787,
    "end": 1790,
    "range": [
      1787,
      1790
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1794,
    "end": 1797,
    "range": [
      1794,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1802,
    "end": 1804,
    "range": [
      1802,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1805,
    "end": 1811,
    "range": [
      1805,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1817,
    "end": 1823,
    "range": [
      1817,
      1823
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1824,
    "end": 1827,
    "range": [
      1824,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 1830,
    "end": 1833,
    "range": [
      1830,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1838,
    "end": 1841,
    "range": [
      1838,
      1841
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5r",
    "start": 1842,
    "end": 1846,
    "range": [
      1842,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 1849,
    "end": 1852,
    "range": [
      1849,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1918,
    "end": 1921,
    "range": [
      1918,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "propAcc1",
    "start": 1922,
    "end": 1930,
    "range": [
      1922,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "propAcc1",
    "start": 1942,
    "end": 1950,
    "range": [
      1942,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1956,
    "end": 1959,
    "range": [
      1956,
      1959
    ]
  },
  {
    "type": "Identifier",
    "value": "propAcc1",
    "start": 1960,
    "end": 1968,
    "range": [
      1960,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1975,
    "end": 1978,
    "range": [
      1975,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2019,
    "end": 2028,
    "range": [
      2019,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 2029,
    "end": 2031,
    "range": [
      2029,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2038,
    "end": 2044,
    "range": [
      2038,
      2044
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2045,
    "end": 2048,
    "range": [
      2045,
      2048
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 2053,
    "end": 2055,
    "range": [
      2053,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2063,
    "end": 2066,
    "range": [
      2063,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2078,
    "end": 2081,
    "range": [
      2078,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2085,
    "end": 2088,
    "range": [
      2085,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2135,
    "end": 2140,
    "range": [
      2135,
      2140
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2141,
    "end": 2143,
    "range": [
      2141,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2154,
    "end": 2158,
    "range": [
      2154,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2174,
    "end": 2177,
    "range": [
      2174,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "c2inst",
    "start": 2178,
    "end": 2184,
    "range": [
      2178,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2187,
    "end": 2190,
    "range": [
      2187,
      2190
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2191,
    "end": 2193,
    "range": [
      2191,
      2193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2199,
    "end": 2202,
    "range": [
      2199,
      2202
    ]
  },
  {
    "type": "Identifier",
    "value": "c2inst",
    "start": 2203,
    "end": 2209,
    "range": [
      2203,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2211,
    "end": 2214,
    "range": [
      2211,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2257,
    "end": 2262,
    "range": [
      2257,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2263,
    "end": 2265,
    "range": [
      2263,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2272,
    "end": 2278,
    "range": [
      2272,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2283,
    "end": 2285,
    "range": [
      2283,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2291,
    "end": 2294,
    "range": [
      2291,
      2294
    ]
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 2295,
    "end": 2297,
    "range": [
      2295,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2300,
    "end": 2302,
    "range": [
      2300,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2306,
    "end": 2309,
    "range": [
      2306,
      2309
    ]
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 2310,
    "end": 2312,
    "range": [
      2310,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2314,
    "end": 2317,
    "range": [
      2314,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  }
]
```
