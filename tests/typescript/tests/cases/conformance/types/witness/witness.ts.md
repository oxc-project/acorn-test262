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
