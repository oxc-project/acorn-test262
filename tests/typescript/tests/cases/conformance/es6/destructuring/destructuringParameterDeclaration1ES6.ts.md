__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 349
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 352
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 355
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 360
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 361
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 362
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 366,
                  "end": 372
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 374,
                  "end": 380
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 382,
                      "end": 388
                    },
                    "start": 382,
                    "end": 390
                  },
                  "start": 382,
                  "end": 392
                }
              ],
              "start": 365,
              "end": 393
            },
            "start": 363,
            "end": 393
          },
          "start": 350,
          "end": 393
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 395,
        "end": 398
      },
      "expression": false,
      "start": 338,
      "end": 398
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 410
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 419,
                      "end": 425
                    },
                    "start": 417,
                    "end": 425
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 416,
                  "end": 426
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 428
                  },
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
                  "accessibility": null,
                  "static": false,
                  "start": 427,
                  "end": 436
                }
              ],
              "start": 414,
              "end": 438
            },
            "start": 412,
            "end": 438
          },
          "start": 411,
          "end": 438
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 440,
        "end": 443
      },
      "expression": false,
      "start": 399,
      "end": 443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 455
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 458
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 458
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 457,
              "end": 458
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 461
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 461
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 460,
              "end": 461
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 467,
                      "end": 468
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 468
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 467,
                    "end": 468
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 471
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 471
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 470,
                    "end": 471
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 472
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 463,
              "end": 472
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 479
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 482
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 485
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 486
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 474,
              "end": 486
            }
          ],
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
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 491,
                    "end": 492
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 494,
                      "end": 500
                    },
                    "start": 492,
                    "end": 500
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 491,
                  "end": 501
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 503
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 505,
                      "end": 511
                    },
                    "start": 503,
                    "end": 511
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 502,
                  "end": 512
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 514
                  },
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
                            "start": 518,
                            "end": 519
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 521,
                              "end": 528
                            },
                            "start": 519,
                            "end": 528
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 518,
                          "end": 529
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 530,
                            "end": 531
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 533,
                              "end": 539
                            },
                            "start": 531,
                            "end": 539
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 530,
                          "end": 539
                        }
                      ],
                      "start": 516,
                      "end": 541
                    },
                    "start": 514,
                    "end": 541
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 513,
                  "end": 542
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 544
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 547,
                            "end": 553
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 554,
                            "end": 560
                          }
                        ],
                        "start": 547,
                        "end": 560
                      },
                      "start": 546,
                      "end": 563
                    },
                    "start": 544,
                    "end": 563
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 543,
                  "end": 563
                }
              ],
              "start": 489,
              "end": 565
            },
            "start": 487,
            "end": 565
          },
          "start": 456,
          "end": 565
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 567,
        "end": 570
      },
      "expression": false,
      "start": 444,
      "end": 570
    },
    {
      "type": "EmptyStatement",
      "start": 570,
      "end": 571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 583
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 586
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 586
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 585,
              "end": 586
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 589
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 589
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 588,
              "end": 589
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 597,
                      "end": 603
                    },
                    "start": 595,
                    "end": 603
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 594,
                  "end": 604
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 606
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 608,
                      "end": 614
                    },
                    "start": 606,
                    "end": 614
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 605,
                  "end": 614
                }
              ],
              "start": 592,
              "end": 616
            },
            "start": 590,
            "end": 616
          },
          "start": 584,
          "end": 616
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 618,
        "end": 621
      },
      "expression": false,
      "start": 572,
      "end": 621
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 625
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 627,
                "end": 628
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 630,
                "end": 631
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "world",
                        "raw": "\"world\"",
                        "start": 635,
                        "end": 642
                      }
                    ],
                    "start": 634,
                    "end": 643
                  }
                ],
                "start": 633,
                "end": 644
              }
            ],
            "start": 626,
            "end": 645
          }
        ],
        "optional": false,
        "start": 623,
        "end": 646
      },
      "directive": null,
      "start": 623,
      "end": 647
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 648,
          "end": 650
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 652,
                "end": 653
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 655,
                "end": 656
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "world",
                        "raw": "\"world\"",
                        "start": 660,
                        "end": 667
                      }
                    ],
                    "start": 659,
                    "end": 668
                  }
                ],
                "start": 658,
                "end": 669
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 671,
                "end": 672
              }
            ],
            "start": 651,
            "end": 673
          }
        ],
        "optional": false,
        "start": 648,
        "end": 674
      },
      "directive": null,
      "start": 648,
      "end": 675
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null,
        "start": 942,
        "end": 944
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 946
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 959
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 961,
                "end": 965
              }
            ],
            "start": 949,
            "end": 966
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 945,
          "end": 966
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 968,
        "end": 971
      },
      "expression": false,
      "start": 933,
      "end": 971
    },
    {
      "type": "EmptyStatement",
      "start": 971,
      "end": 972
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 984
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 985,
            "end": 986
          },
          "right": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 989,
            "end": 993
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 985,
          "end": 993
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 995,
            "end": 996
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1001,
                  "end": 1002
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1004,
                  "end": 1005
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1001,
                "end": 1005
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1007,
                  "end": 1008
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1010,
                  "end": 1019
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1007,
                "end": 1019
              }
            ],
            "start": 999,
            "end": 1021
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 995,
          "end": 1021
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1023,
        "end": 1026
      },
      "expression": false,
      "start": 973,
      "end": 1026
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1036,
        "end": 1038
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1040,
                  "end": 1041
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1044,
                        "end": 1045
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1044,
                        "end": 1045
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1044,
                      "end": 1045
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1047,
                        "end": 1048
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1051,
                              "end": 1052
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1051,
                              "end": 1052
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1051,
                            "end": 1052
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1050,
                        "end": 1053
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1047,
                      "end": 1053
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1043,
                  "end": 1054
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1040,
                "end": 1054
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1039,
            "end": 1055
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1060,
                  "end": 1061
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1065,
                        "end": 1066
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "\"hi\"",
                        "start": 1068,
                        "end": 1072
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1065,
                      "end": 1072
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1074,
                        "end": 1075
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1079,
                              "end": 1080
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1082,
                              "end": 1083
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1079,
                            "end": 1083
                          }
                        ],
                        "start": 1077,
                        "end": 1085
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1074,
                      "end": 1085
                    }
                  ],
                  "start": 1063,
                  "end": 1087
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1060,
                "end": 1087
              }
            ],
            "start": 1058,
            "end": 1089
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1039,
          "end": 1089
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1091,
        "end": 1094
      },
      "expression": false,
      "start": 1027,
      "end": 1094
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1106,
        "end": 1108
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1117
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1118,
                "end": 1119
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1121,
                "end": 1122
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1127,
                    "end": 1128
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1130,
                    "end": 1131
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1124,
                "end": 1132
              },
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1136
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1136
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1135,
                    "end": 1136
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1138,
                      "end": 1139
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1143,
                            "end": 1144
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1143,
                            "end": 1144
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1143,
                          "end": 1144
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1146,
                            "end": 1147
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1146,
                            "end": 1147
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1146,
                          "end": 1147
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1141,
                      "end": 1148
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1138,
                    "end": 1148
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1149
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1115,
            "end": 1151
          }
        ],
        "start": 1109,
        "end": 1153
      },
      "declare": false,
      "start": 1096,
      "end": 1153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1164,
        "end": 1166
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1169
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1171,
                "end": 1172
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1174,
                "end": 1175
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1167,
            "end": 1176
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1180,
                "end": 1189
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1191,
                "end": 1195
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1197,
                "end": 1206
              }
            ],
            "start": 1179,
            "end": 1207
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1167,
          "end": 1207
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1209,
        "end": 1212
      },
      "expression": false,
      "start": 1155,
      "end": 1212
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1222,
        "end": 1224
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1227,
                    "end": 1228
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1232
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1236,
                        "end": 1237
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1239,
                        "end": 1240
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1235,
                    "end": 1241
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1242
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1225,
            "end": 1243
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1248,
                    "end": 1257
                  }
                ],
                "start": 1247,
                "end": 1258
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1260,
                "end": 1269
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1273,
                        "end": 1282
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1284,
                        "end": 1293
                      }
                    ],
                    "start": 1272,
                    "end": 1294
                  }
                ],
                "start": 1271,
                "end": 1295
              }
            ],
            "start": 1246,
            "end": 1296
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1225,
          "end": 1296
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1298,
        "end": 1301
      },
      "expression": false,
      "start": 1213,
      "end": 1301
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1303,
          "end": 1305
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1307,
                "end": 1308
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1310,
                "end": 1311
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1313,
                "end": 1314
              }
            ],
            "start": 1306,
            "end": 1315
          }
        ],
        "optional": false,
        "start": 1303,
        "end": 1316
      },
      "directive": null,
      "start": 1303,
      "end": 1317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1351,
          "end": 1353
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1354,
            "end": 1362
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1366,
                  "end": 1367
                },
                "value": {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200",
                  "start": 1369,
                  "end": 1372
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1366,
                "end": 1372
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1374,
                  "end": 1375
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1377,
                  "end": 1385
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1374,
                "end": 1385
              }
            ],
            "start": 1364,
            "end": 1387
          }
        ],
        "optional": false,
        "start": 1351,
        "end": 1388
      },
      "directive": null,
      "start": 1351,
      "end": 1389
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1390,
          "end": 1392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1393,
            "end": 1401
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1405,
                  "end": 1406
                },
                "value": {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200",
                  "start": 1408,
                  "end": 1411
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1405,
                "end": 1411
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1414
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1416,
                  "end": 1420
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1413,
                "end": 1420
              }
            ],
            "start": 1403,
            "end": 1422
          }
        ],
        "optional": false,
        "start": 1390,
        "end": 1423
      },
      "directive": null,
      "start": 1390,
      "end": 1424
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1565
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1569
            },
            "initializer": null,
            "computed": false,
            "start": 1568,
            "end": 1569
          }
        ],
        "start": 1566,
        "end": 1571
      },
      "const": false,
      "declare": false,
      "start": 1557,
      "end": 1571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1581,
        "end": 1583
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1585,
                "end": 1586
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1590
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1590
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1589,
                    "end": 1590
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1592,
                      "end": 1593
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1596,
                            "end": 1597
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1596,
                            "end": 1597
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1596,
                          "end": 1597
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1595,
                      "end": 1598
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1592,
                    "end": 1598
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1599
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1585,
              "end": 1599
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1584,
          "end": 1600
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1602,
        "end": 1605
      },
      "expression": false,
      "start": 1572,
      "end": 1605
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1615,
        "end": 1617
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1619,
                  "end": 1620
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1619,
                  "end": 1620
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1619,
                "end": 1620
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1618,
            "end": 1621
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1626,
                  "end": 1627
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1629,
                  "end": 1631
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1626,
                "end": 1631
              }
            ],
            "start": 1624,
            "end": 1633
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1618,
          "end": 1633
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1635,
        "end": 1638
      },
      "expression": false,
      "start": 1606,
      "end": 1638
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1648,
        "end": 1650
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1652,
                "end": 1653
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1652,
                  "end": 1653
                },
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1656,
                  "end": 1658
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1652,
                "end": 1658
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1652,
              "end": 1658
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1651,
          "end": 1659
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1661,
        "end": 1664
      },
      "expression": false,
      "start": 1639,
      "end": 1664
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1674,
        "end": 1676
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1679
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1679
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1678,
                "end": 1679
              }
            ],
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1684,
                      "end": 1685
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1687,
                            "end": 1693
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1694,
                            "end": 1700
                          }
                        ],
                        "start": 1687,
                        "end": 1700
                      },
                      "start": 1685,
                      "end": 1700
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1684,
                    "end": 1700
                  }
                ],
                "start": 1682,
                "end": 1701
              },
              "start": 1680,
              "end": 1701
            },
            "start": 1677,
            "end": 1701
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1706,
                  "end": 1707
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1709,
                  "end": 1716
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1706,
                "end": 1716
              }
            ],
            "start": 1704,
            "end": 1718
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1677,
          "end": 1718
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1720,
        "end": 1723
      },
      "expression": false,
      "start": 1665,
      "end": 1723
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1733,
        "end": 1735
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1737,
              "end": 1738
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1740,
              "end": 1741
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1745,
                      "end": 1746
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1744,
                  "end": 1747
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1743,
              "end": 1748
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1736,
          "end": 1749
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1751,
        "end": 1754
      },
      "expression": false,
      "start": 1724,
      "end": 1754
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1764,
        "end": 1766
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1768,
              "end": 1769
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1771,
              "end": 1772
            },
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1776,
                        "end": 1777
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1778,
                        "end": 1779
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1776,
                      "end": 1779
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1775,
                  "end": 1780
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1774,
              "end": 1781
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1767,
          "end": 1782
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1784,
        "end": 1787
      },
      "expression": false,
      "start": 1755,
      "end": 1787
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1789,
          "end": 1791
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1793,
                  "end": 1794
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1799,
                        "end": 1800
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1802,
                        "end": 1803
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1799,
                      "end": 1803
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1805,
                        "end": 1806
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1810,
                              "end": 1811
                            },
                            "value": {
                              "type": "Literal",
                              "value": "world",
                              "raw": "\"world\"",
                              "start": 1813,
                              "end": 1820
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1810,
                            "end": 1820
                          }
                        ],
                        "start": 1808,
                        "end": 1822
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1805,
                      "end": 1822
                    }
                  ],
                  "start": 1797,
                  "end": 1824
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1793,
                "end": 1824
              }
            ],
            "start": 1792,
            "end": 1825
          }
        ],
        "optional": false,
        "start": 1789,
        "end": 1826
      },
      "directive": null,
      "start": 1789,
      "end": 1827
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1881,
          "end": 1883
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1885,
                  "end": 1886
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1891,
                        "end": 1892
                      },
                      "value": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 1894,
                        "end": 1902
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1891,
                      "end": 1902
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1904,
                        "end": 1905
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1909,
                              "end": 1910
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 1912,
                              "end": 1916
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1909,
                            "end": 1916
                          }
                        ],
                        "start": 1907,
                        "end": 1918
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1904,
                      "end": 1918
                    }
                  ],
                  "start": 1889,
                  "end": 1920
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1885,
                "end": 1920
              }
            ],
            "start": 1884,
            "end": 1921
          }
        ],
        "optional": false,
        "start": 1881,
        "end": 1922
      },
      "directive": null,
      "start": 1881,
      "end": 1923
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1974,
          "end": 1976
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1974,
        "end": 1978
      },
      "directive": null,
      "start": 1974,
      "end": 1979
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2023,
          "end": 2025
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2028,
                  "end": 2029
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2031,
                  "end": 2032
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2028,
                "end": 2032
              }
            ],
            "start": 2026,
            "end": 2034
          }
        ],
        "optional": false,
        "start": 2023,
        "end": 2035
      },
      "directive": null,
      "start": 2023,
      "end": 2035
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2074,
          "end": 2076
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2077,
            "end": 2079
          }
        ],
        "optional": false,
        "start": 2074,
        "end": 2080
      },
      "directive": null,
      "start": 2074,
      "end": 2081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2122,
          "end": 2124
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2126,
                  "end": 2127
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2128,
                  "end": 2129
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2126,
                "end": 2129
              }
            ],
            "start": 2125,
            "end": 2130
          }
        ],
        "optional": false,
        "start": 2122,
        "end": 2131
      },
      "directive": null,
      "start": 2122,
      "end": 2132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2171,
          "end": 2173
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2176,
                  "end": 2177
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2179,
                  "end": 2180
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2176,
                "end": 2180
              }
            ],
            "start": 2174,
            "end": 2182
          }
        ],
        "optional": false,
        "start": 2171,
        "end": 2183
      },
      "directive": null,
      "start": 2171,
      "end": 2184
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2231,
          "end": 2233
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2235,
                "end": 2236
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2238,
                "end": 2239
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 2243,
                        "end": 2251
                      }
                    ],
                    "start": 2242,
                    "end": 2252
                  }
                ],
                "start": 2241,
                "end": 2253
              }
            ],
            "start": 2234,
            "end": 2254
          }
        ],
        "optional": false,
        "start": 2231,
        "end": 2255
      },
      "directive": null,
      "start": 2231,
      "end": 2256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2313,
          "end": 2315
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2317,
                "end": 2318
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2320,
                "end": 2321
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 2325,
                        "end": 2333
                      }
                    ],
                    "start": 2324,
                    "end": 2334
                  }
                ],
                "start": 2323,
                "end": 2335
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 2337,
                "end": 2342
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2344,
                "end": 2348
              }
            ],
            "start": 2316,
            "end": 2349
          }
        ],
        "optional": false,
        "start": 2313,
        "end": 2350
      },
      "directive": null,
      "start": 2313,
      "end": 2351
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2547,
        "end": 2549
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2556,
              "end": 2558
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2560,
                    "end": 2561
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2563,
                    "end": 2564
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2566,
                    "end": 2567
                  }
                ],
                "optional": true,
                "typeAnnotation": null,
                "start": 2559,
                "end": 2569
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2556,
            "end": 2571
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2576,
              "end": 2578
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2580,
                      "end": 2581
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2580,
                      "end": 2581
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2580,
                    "end": 2581
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2583,
                      "end": 2584
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2583,
                      "end": 2584
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2583,
                    "end": 2584
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2586,
                      "end": 2587
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2586,
                      "end": 2587
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2586,
                    "end": 2587
                  }
                ],
                "optional": true,
                "typeAnnotation": null,
                "start": 2579,
                "end": 2589
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2576,
            "end": 2591
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2596,
              "end": 2598
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2600,
                    "end": 2601
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2603,
                    "end": 2604
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2606,
                    "end": 2607
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2599,
                "end": 2608
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2596,
            "end": 2610
          }
        ],
        "start": 2550,
        "end": 2612
      },
      "declare": false,
      "start": 2537,
      "end": 2612
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
        "start": 2620,
        "end": 2622
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2634,
            "end": 2636
          },
          "typeArguments": null,
          "start": 2634,
          "end": 2636
        }
      ],
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
              "start": 2643,
              "end": 2654
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
                "body": [],
                "start": 2657,
                "end": 2660
              },
              "expression": false,
              "start": 2654,
              "end": 2660
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2643,
            "end": 2660
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2665,
              "end": 2667
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
                "body": [],
                "start": 2670,
                "end": 2673
              },
              "expression": false,
              "start": 2667,
              "end": 2673
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2665,
            "end": 2673
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2678,
              "end": 2680
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
                "body": [],
                "start": 2683,
                "end": 2686
              },
              "expression": false,
              "start": 2680,
              "end": 2686
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2678,
            "end": 2686
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2691,
              "end": 2693
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2695,
                      "end": 2696
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2698,
                      "end": 2699
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2701,
                      "end": 2702
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2694,
                  "end": 2703
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2705,
                "end": 2708
              },
              "expression": false,
              "start": 2693,
              "end": 2708
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2691,
            "end": 2708
          }
        ],
        "start": 2637,
        "end": 2710
      },
      "abstract": false,
      "declare": false,
      "start": 2614,
      "end": 2710
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
        "start": 2718,
        "end": 2720
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2732,
            "end": 2734
          },
          "typeArguments": null,
          "start": 2732,
          "end": 2734
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2741,
              "end": 2743
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2745,
                      "end": 2746
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2748,
                      "end": 2749
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2751,
                      "end": 2752
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2744,
                  "end": 2753
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2755,
                "end": 2758
              },
              "expression": false,
              "start": 2743,
              "end": 2758
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2741,
            "end": 2758
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2763,
              "end": 2765
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2767,
                        "end": 2768
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2767,
                        "end": 2768
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2767,
                      "end": 2768
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2770,
                        "end": 2771
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2770,
                        "end": 2771
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2770,
                      "end": 2771
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2773,
                        "end": 2774
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2773,
                        "end": 2774
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2773,
                      "end": 2774
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2766,
                  "end": 2775
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2777,
                "end": 2780
              },
              "expression": false,
              "start": 2765,
              "end": 2780
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2763,
            "end": 2780
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2785,
              "end": 2787
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2789,
                      "end": 2790
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2792,
                      "end": 2793
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2795,
                      "end": 2796
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2788,
                  "end": 2797
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2799,
                "end": 2802
              },
              "expression": false,
              "start": 2787,
              "end": 2802
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2785,
            "end": 2802
          }
        ],
        "start": 2735,
        "end": 2804
      },
      "abstract": false,
      "declare": false,
      "start": 2712,
      "end": 2804
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2815,
        "end": 2817
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2819,
                  "end": 2820
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2819,
                  "end": 2820
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 2819,
                "end": 2820
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2822,
                  "end": 2823
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2822,
                  "end": 2823
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 2822,
                "end": 2823
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 2818,
            "end": 2824
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2829,
                  "end": 2830
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2832,
                  "end": 2833
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2829,
                "end": 2833
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2835,
                  "end": 2836
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2838,
                  "end": 2839
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2835,
                "end": 2839
              }
            ],
            "start": 2827,
            "end": 2841
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2818,
          "end": 2841
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2843,
        "end": 2846
      },
      "expression": false,
      "start": 2806,
      "end": 2846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2847,
          "end": 2849
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2847,
        "end": 2851
      },
      "directive": null,
      "start": 2847,
      "end": 2852
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3229,
        "end": 3231
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3233,
                "end": 3234
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "number",
                "optional": false,
                "typeAnnotation": null,
                "start": 3236,
                "end": 3242
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3233,
              "end": 3242
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3232,
          "end": 3243
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3245,
        "end": 3248
      },
      "expression": false,
      "start": 3220,
      "end": 3248
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3288,
        "end": 3290
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3292,
                "end": 3293
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3292,
                "end": 3293
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3292,
              "end": 3293
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3298,
                    "end": 3299
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3301,
                      "end": 3307
                    },
                    "start": 3299,
                    "end": 3307
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3298,
                  "end": 3307
                }
              ],
              "start": 3296,
              "end": 3309
            },
            "start": 3294,
            "end": 3309
          },
          "start": 3291,
          "end": 3309
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3311,
        "end": 3314
      },
      "expression": false,
      "start": 3279,
      "end": 3314
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3345,
        "end": 3347
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3349,
                "end": 3350
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3349,
                "end": 3350
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3349,
              "end": 3350
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3355,
                    "end": 3356
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3359,
                      "end": 3365
                    },
                    "start": 3357,
                    "end": 3365
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3355,
                  "end": 3365
                }
              ],
              "start": 3353,
              "end": 3367
            },
            "start": 3351,
            "end": 3367
          },
          "start": 3348,
          "end": 3367
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3369,
        "end": 3372
      },
      "expression": false,
      "start": 3336,
      "end": 3372
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3420,
        "end": 3422
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3424,
                "end": 3425
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3428,
                    "end": 3434
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3435,
                    "end": 3441
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3442,
                    "end": 3445
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3427,
                "end": 3446
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3424,
              "end": 3446
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3423,
          "end": 3448
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3450,
        "end": 3453
      },
      "expression": false,
      "start": 3411,
      "end": 3453
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3494,
        "end": 3496
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3498,
                "end": 3499
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3502,
                    "end": 3503
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3505,
                    "end": 3506
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3508,
                    "end": 3509
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3501,
                "end": 3510
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3498,
              "end": 3510
            }
          ],
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3515,
                    "end": 3516
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 3519,
                          "end": 3525
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3527,
                          "end": 3533
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3535,
                          "end": 3541
                        }
                      ],
                      "start": 3518,
                      "end": 3542
                    },
                    "start": 3516,
                    "end": 3542
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3515,
                  "end": 3542
                }
              ],
              "start": 3513,
              "end": 3544
            },
            "start": 3511,
            "end": 3544
          },
          "start": 3497,
          "end": 3544
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3546,
        "end": 3549
      },
      "expression": false,
      "start": 3485,
      "end": 3549
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e6",
        "optional": false,
        "typeAnnotation": null,
        "start": 3591,
        "end": 3593
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3595,
                "end": 3596
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3599,
                    "end": 3605
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3607,
                    "end": 3613
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3615,
                    "end": 3621
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3598,
                "end": 3622
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3595,
              "end": 3622
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3594,
          "end": 3623
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3625,
        "end": 3628
      },
      "expression": false,
      "start": 3582,
      "end": 3628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 338,
  "end": 3663
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 338,
    "end": 346,
    "range": [
      338,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 347,
    "end": 349,
    "range": [
      347,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 366,
    "end": 372,
    "range": [
      366,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 374,
    "end": 380,
    "range": [
      374,
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
    "value": "string",
    "start": 382,
    "end": 388,
    "range": [
      382,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 399,
    "end": 407,
    "range": [
      399,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 408,
    "end": 410,
    "range": [
      408,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 419,
    "end": 425,
    "range": [
      419,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 427,
    "end": 428,
    "range": [
      427,
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
    "value": "}",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 444,
    "end": 452,
    "range": [
      444,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 453,
    "end": 455,
    "range": [
      453,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 494,
    "end": 500,
    "range": [
      494,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 505,
    "end": 511,
    "range": [
      505,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 513,
    "end": 514,
    "range": [
      513,
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
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 521,
    "end": 528,
    "range": [
      521,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 533,
    "end": 539,
    "range": [
      533,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 547,
    "end": 553,
    "range": [
      547,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 554,
    "end": 560,
    "range": [
      554,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "]",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 572,
    "end": 580,
    "range": [
      572,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 581,
    "end": 583,
    "range": [
      581,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 597,
    "end": 603,
    "range": [
      597,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 608,
    "end": 614,
    "range": [
      608,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 623,
    "end": 625,
    "range": [
      623,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 635,
    "end": 642,
    "range": [
      635,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 648,
    "end": 650,
    "range": [
      648,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 660,
    "end": 667,
    "range": [
      660,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 933,
    "end": 941,
    "range": [
      933,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 942,
    "end": 944,
    "range": [
      942,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 950,
    "end": 959,
    "range": [
      950,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 961,
    "end": 965,
    "range": [
      961,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 973,
    "end": 981,
    "range": [
      973,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 982,
    "end": 984,
    "range": [
      982,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 989,
    "end": 993,
    "range": [
      989,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1010,
    "end": 1019,
    "range": [
      1010,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1027,
    "end": 1035,
    "range": [
      1027,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1036,
    "end": 1038,
    "range": [
      1036,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1068,
    "end": 1072,
    "range": [
      1068,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1096,
    "end": 1105,
    "range": [
      1096,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 1106,
    "end": 1108,
    "range": [
      1106,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1115,
    "end": 1117,
    "range": [
      1115,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1155,
    "end": 1163,
    "range": [
      1155,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1164,
    "end": 1166,
    "range": [
      1164,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1180,
    "end": 1189,
    "range": [
      1180,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1191,
    "end": 1195,
    "range": [
      1191,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1197,
    "end": 1206,
    "range": [
      1197,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1213,
    "end": 1221,
    "range": [
      1213,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1222,
    "end": 1224,
    "range": [
      1222,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1248,
    "end": 1257,
    "range": [
      1248,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1260,
    "end": 1269,
    "range": [
      1260,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1273,
    "end": 1282,
    "range": [
      1273,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1284,
    "end": 1293,
    "range": [
      1284,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1303,
    "end": 1305,
    "range": [
      1303,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1351,
    "end": 1353,
    "range": [
      1351,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1354,
    "end": 1362,
    "range": [
      1354,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1369,
    "end": 1372,
    "range": [
      1369,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1377,
    "end": 1385,
    "range": [
      1377,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
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
    "value": ";",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1390,
    "end": 1392,
    "range": [
      1390,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1393,
    "end": 1401,
    "range": [
      1393,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1416,
    "end": 1420,
    "range": [
      1416,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1557,
    "end": 1561,
    "range": [
      1557,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1562,
    "end": 1565,
    "range": [
      1562,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1572,
    "end": 1580,
    "range": [
      1572,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1581,
    "end": 1583,
    "range": [
      1581,
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
    "value": "{",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1606,
    "end": 1614,
    "range": [
      1606,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1615,
    "end": 1617,
    "range": [
      1615,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1629,
    "end": 1631,
    "range": [
      1629,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1639,
    "end": 1647,
    "range": [
      1639,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1648,
    "end": 1650,
    "range": [
      1648,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1656,
    "end": 1658,
    "range": [
      1656,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1665,
    "end": 1673,
    "range": [
      1665,
      1673
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1674,
    "end": 1676,
    "range": [
      1674,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1687,
    "end": 1693,
    "range": [
      1687,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1694,
    "end": 1700,
    "range": [
      1694,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1709,
    "end": 1716,
    "range": [
      1709,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1724,
    "end": 1732,
    "range": [
      1724,
      1732
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1733,
    "end": 1735,
    "range": [
      1733,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1755,
    "end": 1763,
    "range": [
      1755,
      1763
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1764,
    "end": 1766,
    "range": [
      1764,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1789,
    "end": 1791,
    "range": [
      1789,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
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
    "value": ":",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 1813,
    "end": 1820,
    "range": [
      1813,
      1820
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1881,
    "end": 1883,
    "range": [
      1881,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1894,
    "end": 1902,
    "range": [
      1894,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1912,
    "end": 1916,
    "range": [
      1912,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1974,
    "end": 1976,
    "range": [
      1974,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
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
    "type": "Identifier",
    "value": "c1",
    "start": 2023,
    "end": 2025,
    "range": [
      2023,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2029,
    "end": 2030,
    "range": [
      2029,
      2030
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2074,
    "end": 2076,
    "range": [
      2074,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2078,
    "end": 2079,
    "range": [
      2078,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2122,
    "end": 2124,
    "range": [
      2122,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2171,
    "end": 2173,
    "range": [
      2171,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2231,
    "end": 2233,
    "range": [
      2231,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2243,
    "end": 2251,
    "range": [
      2243,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2313,
    "end": 2315,
    "range": [
      2313,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2320,
    "end": 2321,
    "range": [
      2320,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2321,
    "end": 2322,
    "range": [
      2321,
      2322
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2325,
    "end": 2333,
    "range": [
      2325,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2337,
    "end": 2342,
    "range": [
      2337,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2344,
    "end": 2348,
    "range": [
      2344,
      2348
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2537,
    "end": 2546,
    "range": [
      2537,
      2546
    ]
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2547,
    "end": 2549,
    "range": [
      2547,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2556,
    "end": 2558,
    "range": [
      2556,
      2558
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2558,
    "end": 2559,
    "range": [
      2558,
      2559
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2559,
    "end": 2560,
    "range": [
      2559,
      2560
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2560,
    "end": 2561,
    "range": [
      2560,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2564,
    "end": 2565,
    "range": [
      2564,
      2565
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2567,
    "end": 2568,
    "range": [
      2567,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2576,
    "end": 2578,
    "range": [
      2576,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2596,
    "end": 2598,
    "range": [
      2596,
      2598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2598,
    "end": 2599,
    "range": [
      2598,
      2599
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2599,
    "end": 2600,
    "range": [
      2599,
      2600
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2614,
    "end": 2619,
    "range": [
      2614,
      2619
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2620,
    "end": 2622,
    "range": [
      2620,
      2622
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2623,
    "end": 2633,
    "range": [
      2623,
      2633
    ]
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2634,
    "end": 2636,
    "range": [
      2634,
      2636
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2643,
    "end": 2654,
    "range": [
      2643,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2665,
    "end": 2667,
    "range": [
      2665,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2678,
    "end": 2680,
    "range": [
      2678,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2685,
    "end": 2686,
    "range": [
      2685,
      2686
    ]
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2691,
    "end": 2693,
    "range": [
      2691,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2712,
    "end": 2717,
    "range": [
      2712,
      2717
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2718,
    "end": 2720,
    "range": [
      2718,
      2720
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2721,
    "end": 2731,
    "range": [
      2721,
      2731
    ]
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2732,
    "end": 2734,
    "range": [
      2732,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2741,
    "end": 2743,
    "range": [
      2741,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2745,
    "end": 2746,
    "range": [
      2745,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2755,
    "end": 2756,
    "range": [
      2755,
      2756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2763,
    "end": 2765,
    "range": [
      2763,
      2765
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2765,
    "end": 2766,
    "range": [
      2765,
      2766
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2779,
    "end": 2780,
    "range": [
      2779,
      2780
    ]
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2785,
    "end": 2787,
    "range": [
      2785,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2790,
    "end": 2791,
    "range": [
      2790,
      2791
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2792,
    "end": 2793,
    "range": [
      2792,
      2793
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2793,
    "end": 2794,
    "range": [
      2793,
      2794
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2806,
    "end": 2814,
    "range": [
      2806,
      2814
    ]
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2815,
    "end": 2817,
    "range": [
      2815,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2841,
    "end": 2842,
    "range": [
      2841,
      2842
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2847,
    "end": 2849,
    "range": [
      2847,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3220,
    "end": 3228,
    "range": [
      3220,
      3228
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 3229,
    "end": 3231,
    "range": [
      3229,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3236,
    "end": 3242,
    "range": [
      3236,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3245,
    "end": 3246,
    "range": [
      3245,
      3246
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3247,
    "end": 3248,
    "range": [
      3247,
      3248
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3279,
    "end": 3287,
    "range": [
      3279,
      3287
    ]
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 3288,
    "end": 3290,
    "range": [
      3288,
      3290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3290,
    "end": 3291,
    "range": [
      3290,
      3291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3291,
    "end": 3292,
    "range": [
      3291,
      3292
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3292,
    "end": 3293,
    "range": [
      3292,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3293,
    "end": 3294,
    "range": [
      3293,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3301,
    "end": 3307,
    "range": [
      3301,
      3307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3308,
    "end": 3309,
    "range": [
      3308,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3311,
    "end": 3312,
    "range": [
      3311,
      3312
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3336,
    "end": 3344,
    "range": [
      3336,
      3344
    ]
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 3345,
    "end": 3347,
    "range": [
      3345,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3348,
    "end": 3349,
    "range": [
      3348,
      3349
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3349,
    "end": 3350,
    "range": [
      3349,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3350,
    "end": 3351,
    "range": [
      3350,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3357,
    "end": 3358,
    "range": [
      3357,
      3358
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3359,
    "end": 3365,
    "range": [
      3359,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3369,
    "end": 3370,
    "range": [
      3369,
      3370
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3411,
    "end": 3419,
    "range": [
      3411,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 3420,
    "end": 3422,
    "range": [
      3420,
      3422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3422,
    "end": 3423,
    "range": [
      3422,
      3423
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3423,
    "end": 3424,
    "range": [
      3423,
      3424
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3427,
    "end": 3428,
    "range": [
      3427,
      3428
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3428,
    "end": 3434,
    "range": [
      3428,
      3434
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3435,
    "end": 3441,
    "range": [
      3435,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3442,
    "end": 3445,
    "range": [
      3442,
      3445
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3445,
    "end": 3446,
    "range": [
      3445,
      3446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3447,
    "end": 3448,
    "range": [
      3447,
      3448
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3448,
    "end": 3449,
    "range": [
      3448,
      3449
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3485,
    "end": 3493,
    "range": [
      3485,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 3494,
    "end": 3496,
    "range": [
      3494,
      3496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3498,
    "end": 3499,
    "range": [
      3498,
      3499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3501,
    "end": 3502,
    "range": [
      3501,
      3502
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3502,
    "end": 3503,
    "range": [
      3502,
      3503
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3503,
    "end": 3504,
    "range": [
      3503,
      3504
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3505,
    "end": 3506,
    "range": [
      3505,
      3506
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3510,
    "end": 3511,
    "range": [
      3510,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3513,
    "end": 3514,
    "range": [
      3513,
      3514
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3515,
    "end": 3516,
    "range": [
      3515,
      3516
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3516,
    "end": 3517,
    "range": [
      3516,
      3517
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3518,
    "end": 3519,
    "range": [
      3518,
      3519
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3519,
    "end": 3525,
    "range": [
      3519,
      3525
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3525,
    "end": 3526,
    "range": [
      3525,
      3526
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3527,
    "end": 3533,
    "range": [
      3527,
      3533
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3533,
    "end": 3534,
    "range": [
      3533,
      3534
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3535,
    "end": 3541,
    "range": [
      3535,
      3541
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3541,
    "end": 3542,
    "range": [
      3541,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3543,
    "end": 3544,
    "range": [
      3543,
      3544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3544,
    "end": 3545,
    "range": [
      3544,
      3545
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3546,
    "end": 3547,
    "range": [
      3546,
      3547
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3548,
    "end": 3549,
    "range": [
      3548,
      3549
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3582,
    "end": 3590,
    "range": [
      3582,
      3590
    ]
  },
  {
    "type": "Identifier",
    "value": "e6",
    "start": 3591,
    "end": 3593,
    "range": [
      3591,
      3593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3593,
    "end": 3594,
    "range": [
      3593,
      3594
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3596,
    "end": 3597,
    "range": [
      3596,
      3597
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3598,
    "end": 3599,
    "range": [
      3598,
      3599
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3599,
    "end": 3605,
    "range": [
      3599,
      3605
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3605,
    "end": 3606,
    "range": [
      3605,
      3606
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3607,
    "end": 3613,
    "range": [
      3607,
      3613
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3613,
    "end": 3614,
    "range": [
      3613,
      3614
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3615,
    "end": 3621,
    "range": [
      3615,
      3621
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3622,
    "end": 3623,
    "range": [
      3622,
      3623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3627,
    "end": 3628,
    "range": [
      3627,
      3628
    ]
  }
]
```
