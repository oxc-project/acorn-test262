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
        "start": 314,
        "end": 316
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
              "start": 318,
              "end": 319
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
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
                      "start": 326,
                      "end": 327
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 328
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 329
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
                  "start": 333,
                  "end": 339
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 341,
                  "end": 347
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 349,
                      "end": 355
                    },
                    "start": 349,
                    "end": 357
                  },
                  "start": 349,
                  "end": 359
                }
              ],
              "start": 332,
              "end": 360
            },
            "start": 330,
            "end": 360
          },
          "start": 317,
          "end": 360
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 362,
        "end": 365
      },
      "expression": false,
      "start": 305,
      "end": 365
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 377
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
                    "start": 383,
                    "end": 384
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 386,
                      "end": 392
                    },
                    "start": 384,
                    "end": 392
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 383,
                  "end": 393
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
                    "start": 394,
                    "end": 395
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 397,
                      "end": 403
                    },
                    "start": 395,
                    "end": 403
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 394,
                  "end": 403
                }
              ],
              "start": 381,
              "end": 405
            },
            "start": 379,
            "end": 405
          },
          "start": 378,
          "end": 405
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 407,
        "end": 410
      },
      "expression": false,
      "start": 366,
      "end": 410
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 422
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
                "start": 424,
                "end": 425
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 424,
              "end": 425
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
                "start": 427,
                "end": 428
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 428
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 427,
              "end": 428
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
                "start": 430,
                "end": 431
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
                      "start": 434,
                      "end": 435
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 434,
                      "end": 435
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 434,
                    "end": 435
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
                      "start": 437,
                      "end": 438
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 438
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 437,
                    "end": 438
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 439
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 430,
              "end": 439
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
                "start": 441,
                "end": 442
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
                    "start": 445,
                    "end": 446
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 449
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 451,
                    "end": 452
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 453
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 441,
              "end": 453
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
                    "start": 458,
                    "end": 459
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 461,
                      "end": 467
                    },
                    "start": 459,
                    "end": 467
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 458,
                  "end": 468
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
                    "start": 469,
                    "end": 470
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 472,
                      "end": 478
                    },
                    "start": 470,
                    "end": 478
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 469,
                  "end": 479
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
                    "start": 480,
                    "end": 481
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
                            "start": 485,
                            "end": 486
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 488,
                              "end": 495
                            },
                            "start": 486,
                            "end": 495
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 485,
                          "end": 496
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
                            "start": 497,
                            "end": 498
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 500,
                              "end": 506
                            },
                            "start": 498,
                            "end": 506
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 497,
                          "end": 506
                        }
                      ],
                      "start": 483,
                      "end": 508
                    },
                    "start": 481,
                    "end": 508
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 480,
                  "end": 509
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
                    "start": 510,
                    "end": 511
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
                            "start": 514,
                            "end": 520
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 521,
                            "end": 527
                          }
                        ],
                        "start": 514,
                        "end": 527
                      },
                      "start": 513,
                      "end": 530
                    },
                    "start": 511,
                    "end": 530
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 510,
                  "end": 530
                }
              ],
              "start": 456,
              "end": 532
            },
            "start": 454,
            "end": 532
          },
          "start": 423,
          "end": 532
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 534,
        "end": 537
      },
      "expression": false,
      "start": 411,
      "end": 537
    },
    {
      "type": "EmptyStatement",
      "start": 537,
      "end": 538
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 550
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
                "start": 552,
                "end": 553
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 553
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 552,
              "end": 553
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
                "start": 555,
                "end": 556
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 555,
              "end": 556
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
                    "start": 561,
                    "end": 562
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
                    },
                    "start": 562,
                    "end": 570
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 561,
                  "end": 571
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
                    "start": 572,
                    "end": 573
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 575,
                      "end": 581
                    },
                    "start": 573,
                    "end": 581
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 572,
                  "end": 581
                }
              ],
              "start": 559,
              "end": 583
            },
            "start": 557,
            "end": 583
          },
          "start": 551,
          "end": 583
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 585,
        "end": 588
      },
      "expression": false,
      "start": 539,
      "end": 588
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
          "start": 590,
          "end": 592
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
                "start": 594,
                "end": 595
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 597,
                "end": 598
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
                        "start": 602,
                        "end": 609
                      }
                    ],
                    "start": 601,
                    "end": 610
                  }
                ],
                "start": 600,
                "end": 611
              }
            ],
            "start": 593,
            "end": 612
          }
        ],
        "optional": false,
        "start": 590,
        "end": 613
      },
      "directive": null,
      "start": 590,
      "end": 614
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
          "start": 615,
          "end": 617
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
                "start": 619,
                "end": 620
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 622,
                "end": 623
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
                        "start": 627,
                        "end": 634
                      }
                    ],
                    "start": 626,
                    "end": 635
                  }
                ],
                "start": 625,
                "end": 636
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 638,
                "end": 639
              }
            ],
            "start": 618,
            "end": 640
          }
        ],
        "optional": false,
        "start": 615,
        "end": 641
      },
      "directive": null,
      "start": 615,
      "end": 642
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 910
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
            "start": 911,
            "end": 912
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
                "start": 916,
                "end": 925
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 927,
                "end": 931
              }
            ],
            "start": 915,
            "end": 932
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 911,
          "end": 932
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 934,
        "end": 937
      },
      "expression": false,
      "start": 899,
      "end": 937
    },
    {
      "type": "EmptyStatement",
      "start": 937,
      "end": 938
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null,
        "start": 948,
        "end": 950
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
            "start": 951,
            "end": 952
          },
          "right": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 955,
            "end": 959
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 959
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
            "start": 961,
            "end": 962
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
                  "start": 967,
                  "end": 968
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 970,
                  "end": 971
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 967,
                "end": 971
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
                  "start": 973,
                  "end": 974
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 985
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 973,
                "end": 985
              }
            ],
            "start": 965,
            "end": 987
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 961,
          "end": 987
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 989,
        "end": 992
      },
      "expression": false,
      "start": 939,
      "end": 992
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1002,
        "end": 1004
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
                  "start": 1006,
                  "end": 1007
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
                        "start": 1010,
                        "end": 1011
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1010,
                        "end": 1011
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1010,
                      "end": 1011
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
                        "start": 1013,
                        "end": 1014
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
                              "start": 1017,
                              "end": 1018
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1017,
                              "end": 1018
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1017,
                            "end": 1018
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1016,
                        "end": 1019
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1013,
                      "end": 1019
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1009,
                  "end": 1020
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1006,
                "end": 1020
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1005,
            "end": 1021
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
                  "start": 1026,
                  "end": 1027
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
                        "start": 1031,
                        "end": 1032
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "\"hi\"",
                        "start": 1034,
                        "end": 1038
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1031,
                      "end": 1038
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
                        "start": 1040,
                        "end": 1041
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
                              "start": 1045,
                              "end": 1046
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1048,
                              "end": 1049
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1045,
                            "end": 1049
                          }
                        ],
                        "start": 1043,
                        "end": 1051
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1040,
                      "end": 1051
                    }
                  ],
                  "start": 1029,
                  "end": 1053
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1026,
                "end": 1053
              }
            ],
            "start": 1024,
            "end": 1055
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1005,
          "end": 1055
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1057,
        "end": 1060
      },
      "expression": false,
      "start": 993,
      "end": 1060
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1072,
        "end": 1074
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
              "start": 1081,
              "end": 1083
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
                "start": 1084,
                "end": 1085
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1087,
                "end": 1088
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
                    "start": 1093,
                    "end": 1094
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1096,
                    "end": 1097
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1090,
                "end": 1098
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
                      "start": 1101,
                      "end": 1102
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1101,
                      "end": 1102
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1101,
                    "end": 1102
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
                      "start": 1104,
                      "end": 1105
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
                            "start": 1109,
                            "end": 1110
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1109,
                            "end": 1110
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1109,
                          "end": 1110
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
                            "start": 1112,
                            "end": 1113
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1112,
                            "end": 1113
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1112,
                          "end": 1113
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1107,
                      "end": 1114
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1104,
                    "end": 1114
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1115
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1081,
            "end": 1117
          }
        ],
        "start": 1075,
        "end": 1119
      },
      "declare": false,
      "start": 1062,
      "end": 1119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1132
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
                "start": 1134,
                "end": 1135
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1138
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1140,
                "end": 1141
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1133,
            "end": 1142
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
                "start": 1146,
                "end": 1155
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1157,
                "end": 1161
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1163,
                "end": 1172
              }
            ],
            "start": 1145,
            "end": 1173
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1173
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1175,
        "end": 1178
      },
      "expression": false,
      "start": 1121,
      "end": 1178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1188,
        "end": 1190
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
                    "start": 1193,
                    "end": 1194
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1192,
                "end": 1195
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1197,
                "end": 1198
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
                        "start": 1202,
                        "end": 1203
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1205,
                        "end": 1206
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1207
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1208
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1191,
            "end": 1209
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
                    "start": 1214,
                    "end": 1223
                  }
                ],
                "start": 1213,
                "end": 1224
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1235
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
                        "start": 1239,
                        "end": 1248
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1250,
                        "end": 1259
                      }
                    ],
                    "start": 1238,
                    "end": 1260
                  }
                ],
                "start": 1237,
                "end": 1261
              }
            ],
            "start": 1212,
            "end": 1262
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1191,
          "end": 1262
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1264,
        "end": 1267
      },
      "expression": false,
      "start": 1179,
      "end": 1267
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
          "start": 1269,
          "end": 1271
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
                "start": 1273,
                "end": 1274
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1276,
                "end": 1277
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1279,
                "end": 1280
              }
            ],
            "start": 1272,
            "end": 1281
          }
        ],
        "optional": false,
        "start": 1269,
        "end": 1282
      },
      "directive": null,
      "start": 1269,
      "end": 1283
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
          "start": 1317,
          "end": 1319
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1320,
            "end": 1328
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
                  "start": 1332,
                  "end": 1333
                },
                "value": {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200",
                  "start": 1335,
                  "end": 1338
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1332,
                "end": 1338
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
                  "start": 1340,
                  "end": 1341
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1343,
                  "end": 1351
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1340,
                "end": 1351
              }
            ],
            "start": 1330,
            "end": 1353
          }
        ],
        "optional": false,
        "start": 1317,
        "end": 1354
      },
      "directive": null,
      "start": 1317,
      "end": 1355
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
          "start": 1356,
          "end": 1358
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1359,
            "end": 1367
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
                  "start": 1371,
                  "end": 1372
                },
                "value": {
                  "type": "Literal",
                  "value": 200,
                  "raw": "200",
                  "start": 1374,
                  "end": 1377
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1371,
                "end": 1377
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
                  "start": 1379,
                  "end": 1380
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1382,
                  "end": 1386
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1379,
                "end": 1386
              }
            ],
            "start": 1369,
            "end": 1388
          }
        ],
        "optional": false,
        "start": 1356,
        "end": 1389
      },
      "directive": null,
      "start": 1356,
      "end": 1390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1391,
          "end": 1393
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1395,
                "end": 1403
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1405,
                "end": 1406
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1408,
                "end": 1409
              }
            ],
            "start": 1394,
            "end": 1410
          }
        ],
        "optional": false,
        "start": 1391,
        "end": 1411
      },
      "directive": null,
      "start": 1391,
      "end": 1412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1457,
          "end": 1459
        },
        "typeArguments": null,
        "arguments": [
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
                    "start": 1462,
                    "end": 1470
                  }
                ],
                "start": 1461,
                "end": 1471
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1473,
                "end": 1474
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1478,
                        "end": 1482
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1484,
                        "end": 1489
                      }
                    ],
                    "start": 1477,
                    "end": 1490
                  }
                ],
                "start": 1476,
                "end": 1491
              }
            ],
            "start": 1460,
            "end": 1492
          }
        ],
        "optional": false,
        "start": 1457,
        "end": 1493
      },
      "directive": null,
      "start": 1457,
      "end": 1494
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1663
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
              "start": 1666,
              "end": 1667
            },
            "initializer": null,
            "computed": false,
            "start": 1666,
            "end": 1667
          }
        ],
        "start": 1664,
        "end": 1669
      },
      "const": false,
      "declare": false,
      "start": 1655,
      "end": 1669
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1679,
        "end": 1681
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
                "start": 1683,
                "end": 1684
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
                      "start": 1687,
                      "end": 1688
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1687,
                      "end": 1688
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1687,
                    "end": 1688
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
                      "start": 1690,
                      "end": 1691
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
                            "start": 1694,
                            "end": 1695
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1694,
                            "end": 1695
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1694,
                          "end": 1695
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1693,
                      "end": 1696
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1690,
                    "end": 1696
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1686,
                "end": 1697
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1683,
              "end": 1697
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1682,
          "end": 1698
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1700,
        "end": 1703
      },
      "expression": false,
      "start": 1670,
      "end": 1703
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1713,
        "end": 1715
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
                  "start": 1717,
                  "end": 1718
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1717,
                  "end": 1718
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1717,
                "end": 1718
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1716,
            "end": 1719
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
                  "start": 1724,
                  "end": 1725
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1727,
                  "end": 1729
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1724,
                "end": 1729
              }
            ],
            "start": 1722,
            "end": 1731
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1716,
          "end": 1731
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1733,
        "end": 1736
      },
      "expression": false,
      "start": 1704,
      "end": 1736
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1746,
        "end": 1748
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
                "start": 1750,
                "end": 1751
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
                  "start": 1750,
                  "end": 1751
                },
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1754,
                  "end": 1756
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1750,
                "end": 1756
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1750,
              "end": 1756
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1757
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1759,
        "end": 1762
      },
      "expression": false,
      "start": 1737,
      "end": 1762
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1774
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
                  "start": 1776,
                  "end": 1777
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1776,
                  "end": 1777
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1776,
                "end": 1777
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
                      "start": 1782,
                      "end": 1783
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1785,
                            "end": 1791
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1792,
                            "end": 1798
                          }
                        ],
                        "start": 1785,
                        "end": 1798
                      },
                      "start": 1783,
                      "end": 1798
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1782,
                    "end": 1798
                  }
                ],
                "start": 1780,
                "end": 1799
              },
              "start": 1778,
              "end": 1799
            },
            "start": 1775,
            "end": 1799
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
                  "start": 1804,
                  "end": 1805
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1807,
                  "end": 1814
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1804,
                "end": 1814
              }
            ],
            "start": 1802,
            "end": 1816
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1775,
          "end": 1816
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1818,
        "end": 1821
      },
      "expression": false,
      "start": 1763,
      "end": 1821
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1831,
        "end": 1833
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
              "start": 1835,
              "end": 1836
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1838,
              "end": 1839
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
                      "start": 1843,
                      "end": 1844
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1842,
                  "end": 1845
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1846
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1834,
          "end": 1847
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1849,
        "end": 1852
      },
      "expression": false,
      "start": 1822,
      "end": 1852
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1864
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
              "start": 1866,
              "end": 1867
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1869,
              "end": 1870
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
                        "start": 1874,
                        "end": 1875
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1876,
                        "end": 1877
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1874,
                      "end": 1877
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1878
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1872,
              "end": 1879
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1865,
          "end": 1880
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1882,
        "end": 1885
      },
      "expression": false,
      "start": 1853,
      "end": 1885
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
          "start": 1887,
          "end": 1889
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
                  "start": 1891,
                  "end": 1892
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
                        "start": 1897,
                        "end": 1898
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1900,
                        "end": 1901
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1897,
                      "end": 1901
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
                        "start": 1903,
                        "end": 1904
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
                              "start": 1908,
                              "end": 1909
                            },
                            "value": {
                              "type": "Literal",
                              "value": "world",
                              "raw": "\"world\"",
                              "start": 1911,
                              "end": 1918
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1908,
                            "end": 1918
                          }
                        ],
                        "start": 1906,
                        "end": 1920
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1903,
                      "end": 1920
                    }
                  ],
                  "start": 1895,
                  "end": 1922
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1891,
                "end": 1922
              }
            ],
            "start": 1890,
            "end": 1923
          }
        ],
        "optional": false,
        "start": 1887,
        "end": 1924
      },
      "directive": null,
      "start": 1887,
      "end": 1925
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
          "start": 1979,
          "end": 1981
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
                  "start": 1983,
                  "end": 1984
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
                        "start": 1989,
                        "end": 1990
                      },
                      "value": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 1992,
                        "end": 2000
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1989,
                      "end": 2000
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
                        "start": 2002,
                        "end": 2003
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
                              "start": 2007,
                              "end": 2008
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 2010,
                              "end": 2014
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2007,
                            "end": 2014
                          }
                        ],
                        "start": 2005,
                        "end": 2016
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2002,
                      "end": 2016
                    }
                  ],
                  "start": 1987,
                  "end": 2018
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1983,
                "end": 2018
              }
            ],
            "start": 1982,
            "end": 2019
          }
        ],
        "optional": false,
        "start": 1979,
        "end": 2020
      },
      "directive": null,
      "start": 1979,
      "end": 2021
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
          "start": 2072,
          "end": 2074
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2072,
        "end": 2076
      },
      "directive": null,
      "start": 2072,
      "end": 2077
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
          "start": 2121,
          "end": 2123
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
                  "start": 2129,
                  "end": 2130
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2126,
                "end": 2130
              }
            ],
            "start": 2124,
            "end": 2132
          }
        ],
        "optional": false,
        "start": 2121,
        "end": 2133
      },
      "directive": null,
      "start": 2121,
      "end": 2133
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
          "start": 2171,
          "end": 2173
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2174,
            "end": 2176
          }
        ],
        "optional": false,
        "start": 2171,
        "end": 2177
      },
      "directive": null,
      "start": 2171,
      "end": 2178
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
          "start": 2219,
          "end": 2221
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
                  "start": 2223,
                  "end": 2224
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2225,
                  "end": 2226
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2223,
                "end": 2226
              }
            ],
            "start": 2222,
            "end": 2227
          }
        ],
        "optional": false,
        "start": 2219,
        "end": 2228
      },
      "directive": null,
      "start": 2219,
      "end": 2229
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
          "start": 2268,
          "end": 2270
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
                  "start": 2273,
                  "end": 2274
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2276,
                  "end": 2277
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2273,
                "end": 2277
              }
            ],
            "start": 2271,
            "end": 2279
          }
        ],
        "optional": false,
        "start": 2268,
        "end": 2280
      },
      "directive": null,
      "start": 2268,
      "end": 2281
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
          "start": 2328,
          "end": 2330
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
                "start": 2332,
                "end": 2333
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2335,
                "end": 2336
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
                        "start": 2340,
                        "end": 2348
                      }
                    ],
                    "start": 2339,
                    "end": 2349
                  }
                ],
                "start": 2338,
                "end": 2350
              }
            ],
            "start": 2331,
            "end": 2351
          }
        ],
        "optional": false,
        "start": 2328,
        "end": 2352
      },
      "directive": null,
      "start": 2328,
      "end": 2353
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
          "start": 2410,
          "end": 2412
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
                "start": 2414,
                "end": 2415
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2417,
                "end": 2418
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
                        "start": 2422,
                        "end": 2430
                      }
                    ],
                    "start": 2421,
                    "end": 2431
                  }
                ],
                "start": 2420,
                "end": 2432
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 2434,
                "end": 2439
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2441,
                "end": 2445
              }
            ],
            "start": 2413,
            "end": 2446
          }
        ],
        "optional": false,
        "start": 2410,
        "end": 2447
      },
      "directive": null,
      "start": 2410,
      "end": 2448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2642,
        "end": 2644
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
          "optional": true,
          "typeAnnotation": null,
          "start": 2645,
          "end": 2647
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2649,
        "end": 2652
      },
      "expression": false,
      "start": 2633,
      "end": 2652
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2662,
        "end": 2664
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2665,
            "end": 2666
          },
          "right": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2669,
            "end": 2671
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2665,
          "end": 2671
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2673,
        "end": 2676
      },
      "expression": false,
      "start": 2653,
      "end": 2676
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2688,
        "end": 2690
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
              "start": 2697,
              "end": 2699
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
                    "start": 2701,
                    "end": 2702
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2704,
                    "end": 2705
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2707,
                    "end": 2708
                  }
                ],
                "optional": true,
                "typeAnnotation": null,
                "start": 2700,
                "end": 2710
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2697,
            "end": 2712
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2717,
              "end": 2719
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
                      "start": 2721,
                      "end": 2722
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2721,
                      "end": 2722
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2721,
                    "end": 2722
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
                      "start": 2724,
                      "end": 2725
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2724,
                      "end": 2725
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2724,
                    "end": 2725
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
                      "start": 2727,
                      "end": 2728
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2727,
                      "end": 2728
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2727,
                    "end": 2728
                  }
                ],
                "optional": true,
                "typeAnnotation": null,
                "start": 2720,
                "end": 2730
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2717,
            "end": 2732
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2737,
              "end": 2739
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
                    "start": 2741,
                    "end": 2742
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2744,
                    "end": 2745
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2747,
                    "end": 2748
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2740,
                "end": 2749
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2737,
            "end": 2751
          }
        ],
        "start": 2691,
        "end": 2753
      },
      "declare": false,
      "start": 2678,
      "end": 2753
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
        "start": 2761,
        "end": 2763
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
            "start": 2775,
            "end": 2777
          },
          "typeArguments": null,
          "start": 2775,
          "end": 2777
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
              "start": 2784,
              "end": 2795
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
                "start": 2798,
                "end": 2801
              },
              "expression": false,
              "start": 2795,
              "end": 2801
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2784,
            "end": 2801
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
              "start": 2806,
              "end": 2808
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
                "start": 2811,
                "end": 2814
              },
              "expression": false,
              "start": 2808,
              "end": 2814
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2806,
            "end": 2814
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
              "start": 2819,
              "end": 2821
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
                "start": 2824,
                "end": 2827
              },
              "expression": false,
              "start": 2821,
              "end": 2827
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2819,
            "end": 2827
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
              "start": 2832,
              "end": 2834
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
                      "start": 2836,
                      "end": 2837
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2839,
                      "end": 2840
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2842,
                      "end": 2843
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2835,
                  "end": 2844
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2846,
                "end": 2849
              },
              "expression": false,
              "start": 2834,
              "end": 2849
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2832,
            "end": 2849
          }
        ],
        "start": 2778,
        "end": 2851
      },
      "abstract": false,
      "declare": false,
      "start": 2755,
      "end": 2851
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
        "start": 2859,
        "end": 2861
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
            "start": 2873,
            "end": 2875
          },
          "typeArguments": null,
          "start": 2873,
          "end": 2875
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
              "start": 2882,
              "end": 2884
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
                      "start": 2886,
                      "end": 2887
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2889,
                      "end": 2890
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2892,
                      "end": 2893
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2885,
                  "end": 2894
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2896,
                "end": 2899
              },
              "expression": false,
              "start": 2884,
              "end": 2899
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2882,
            "end": 2899
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
              "start": 2904,
              "end": 2906
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
                        "start": 2908,
                        "end": 2909
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2908,
                        "end": 2909
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2908,
                      "end": 2909
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
                        "start": 2911,
                        "end": 2912
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2911,
                        "end": 2912
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2911,
                      "end": 2912
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
                        "start": 2914,
                        "end": 2915
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2914,
                        "end": 2915
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2914,
                      "end": 2915
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2907,
                  "end": 2916
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2918,
                "end": 2921
              },
              "expression": false,
              "start": 2906,
              "end": 2921
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2904,
            "end": 2921
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
              "start": 2926,
              "end": 2928
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
                      "start": 2930,
                      "end": 2931
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2933,
                      "end": 2934
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2936,
                      "end": 2937
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2929,
                  "end": 2938
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2940,
                "end": 2943
              },
              "expression": false,
              "start": 2928,
              "end": 2943
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2926,
            "end": 2943
          }
        ],
        "start": 2876,
        "end": 2945
      },
      "abstract": false,
      "declare": false,
      "start": 2853,
      "end": 2945
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2957,
        "end": 2959
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
                  "start": 2961,
                  "end": 2962
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2961,
                  "end": 2962
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 2961,
                "end": 2962
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
                  "start": 2964,
                  "end": 2965
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2964,
                  "end": 2965
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 2964,
                "end": 2965
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 2960,
            "end": 2966
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
                  "start": 2971,
                  "end": 2972
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2974,
                  "end": 2975
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2971,
                "end": 2975
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
                  "start": 2977,
                  "end": 2978
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2980,
                  "end": 2981
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2977,
                "end": 2981
              }
            ],
            "start": 2969,
            "end": 2983
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2960,
          "end": 2983
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2985,
        "end": 2988
      },
      "expression": false,
      "start": 2948,
      "end": 2988
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
          "start": 2989,
          "end": 2991
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2989,
        "end": 2993
      },
      "directive": null,
      "start": 2989,
      "end": 2994
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3371,
        "end": 3373
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
                "start": 3375,
                "end": 3376
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "number",
                "optional": false,
                "typeAnnotation": null,
                "start": 3378,
                "end": 3384
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3375,
              "end": 3384
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3374,
          "end": 3385
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3387,
        "end": 3390
      },
      "expression": false,
      "start": 3362,
      "end": 3390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3430,
        "end": 3432
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
                "start": 3434,
                "end": 3435
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3434,
                "end": 3435
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3434,
              "end": 3435
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
                    "start": 3440,
                    "end": 3441
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3443,
                      "end": 3449
                    },
                    "start": 3441,
                    "end": 3449
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3440,
                  "end": 3449
                }
              ],
              "start": 3438,
              "end": 3451
            },
            "start": 3436,
            "end": 3451
          },
          "start": 3433,
          "end": 3451
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3453,
        "end": 3456
      },
      "expression": false,
      "start": 3421,
      "end": 3456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3487,
        "end": 3489
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
                "start": 3491,
                "end": 3492
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3491,
                "end": 3492
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3491,
              "end": 3492
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
                    "start": 3497,
                    "end": 3498
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3501,
                      "end": 3507
                    },
                    "start": 3499,
                    "end": 3507
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3497,
                  "end": 3507
                }
              ],
              "start": 3495,
              "end": 3509
            },
            "start": 3493,
            "end": 3509
          },
          "start": 3490,
          "end": 3509
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3511,
        "end": 3514
      },
      "expression": false,
      "start": 3478,
      "end": 3514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3562,
        "end": 3564
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
                "start": 3566,
                "end": 3567
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
                    "start": 3570,
                    "end": 3576
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3577,
                    "end": 3583
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3584,
                    "end": 3587
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3569,
                "end": 3588
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3566,
              "end": 3588
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 3565,
          "end": 3590
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3592,
        "end": 3595
      },
      "expression": false,
      "start": 3553,
      "end": 3595
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3636,
        "end": 3638
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
                "start": 3640,
                "end": 3641
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
                    "start": 3644,
                    "end": 3645
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3647,
                    "end": 3648
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3650,
                    "end": 3651
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 3643,
                "end": 3652
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3640,
              "end": 3652
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
                    "start": 3657,
                    "end": 3658
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 3661,
                          "end": 3667
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3669,
                          "end": 3675
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3677,
                          "end": 3683
                        }
                      ],
                      "start": 3660,
                      "end": 3684
                    },
                    "start": 3658,
                    "end": 3684
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3657,
                  "end": 3684
                }
              ],
              "start": 3655,
              "end": 3686
            },
            "start": 3653,
            "end": 3686
          },
          "start": 3639,
          "end": 3686
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3688,
        "end": 3691
      },
      "expression": false,
      "start": 3627,
      "end": 3691
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 3722
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313,
    "range": [
      305,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 314,
    "end": 316,
    "range": [
      314,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 333,
    "end": 339,
    "range": [
      333,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 349,
    "end": 355,
    "range": [
      349,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
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
    "value": "]",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 366,
    "end": 374,
    "range": [
      366,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 375,
    "end": 377,
    "range": [
      375,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 386,
    "end": 392,
    "range": [
      386,
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
    "type": "Identifier",
    "value": "a",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 397,
    "end": 403,
    "range": [
      397,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419,
    "range": [
      411,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 424,
    "end": 425,
    "range": [
      424,
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
    "value": "k",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
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
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 461,
    "end": 467,
    "range": [
      461,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 472,
    "end": 478,
    "range": [
      472,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 488,
    "end": 495,
    "range": [
      488,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 500,
    "end": 506,
    "range": [
      500,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 521,
    "end": 527,
    "range": [
      521,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 539,
    "end": 547,
    "range": [
      539,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 548,
    "end": 550,
    "range": [
      548,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 564,
    "end": 570,
    "range": [
      564,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 590,
    "end": 592,
    "range": [
      590,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 602,
    "end": 609,
    "range": [
      602,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 615,
    "end": 617,
    "range": [
      615,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "type": "String",
    "value": "\"world\"",
    "start": 627,
    "end": 634,
    "range": [
      627,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 899,
    "end": 907,
    "range": [
      899,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 908,
    "end": 910,
    "range": [
      908,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 916,
    "end": 925,
    "range": [
      916,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 927,
    "end": 931,
    "range": [
      927,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 939,
    "end": 947,
    "range": [
      939,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 948,
    "end": 950,
    "range": [
      948,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 955,
    "end": 959,
    "range": [
      955,
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
    "type": "Identifier",
    "value": "o",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 976,
    "end": 985,
    "range": [
      976,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 993,
    "end": 1001,
    "range": [
      993,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1002,
    "end": 1004,
    "range": [
      1002,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
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
    "value": "=",
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
    "type": "Identifier",
    "value": "z",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1034,
    "end": 1038,
    "range": [
      1034,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "j",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
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
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1062,
    "end": 1071,
    "range": [
      1062,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 1072,
    "end": 1074,
    "range": [
      1072,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1081,
    "end": 1083,
    "range": [
      1081,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1121,
    "end": 1129,
    "range": [
      1121,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1130,
    "end": 1132,
    "range": [
      1130,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1146,
    "end": 1155,
    "range": [
      1146,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1157,
    "end": 1161,
    "range": [
      1157,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1163,
    "end": 1172,
    "range": [
      1163,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1179,
    "end": 1187,
    "range": [
      1179,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1188,
    "end": 1190,
    "range": [
      1188,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
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
    "value": "b",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
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
    "value": "]",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1214,
    "end": 1223,
    "range": [
      1214,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1226,
    "end": 1235,
    "range": [
      1226,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1239,
    "end": 1248,
    "range": [
      1239,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1250,
    "end": 1259,
    "range": [
      1250,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1269,
    "end": 1271,
    "range": [
      1269,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Numeric",
    "value": "1",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1317,
    "end": 1319,
    "range": [
      1317,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1320,
    "end": 1328,
    "range": [
      1320,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1335,
    "end": 1338,
    "range": [
      1335,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1343,
    "end": 1351,
    "range": [
      1343,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1356,
    "end": 1358,
    "range": [
      1356,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1359,
    "end": 1367,
    "range": [
      1359,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1374,
    "end": 1377,
    "range": [
      1374,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1382,
    "end": 1386,
    "range": [
      1382,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1391,
    "end": 1393,
    "range": [
      1391,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1395,
    "end": 1403,
    "range": [
      1395,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1457,
    "end": 1459,
    "range": [
      1457,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1462,
    "end": 1470,
    "range": [
      1462,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1478,
    "end": 1482,
    "range": [
      1478,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1484,
    "end": 1489,
    "range": [
      1484,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1655,
    "end": 1659,
    "range": [
      1655,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1660,
    "end": 1663,
    "range": [
      1660,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1670,
    "end": 1678,
    "range": [
      1670,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1679,
    "end": 1681,
    "range": [
      1679,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
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
    "value": "z",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1704,
    "end": 1712,
    "range": [
      1704,
      1712
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1713,
    "end": 1715,
    "range": [
      1713,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1727,
    "end": 1729,
    "range": [
      1727,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1737,
    "end": 1745,
    "range": [
      1737,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1746,
    "end": 1748,
    "range": [
      1746,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1754,
    "end": 1756,
    "range": [
      1754,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
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
    "type": "Keyword",
    "value": "function",
    "start": 1763,
    "end": 1771,
    "range": [
      1763,
      1771
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1772,
    "end": 1774,
    "range": [
      1772,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1785,
    "end": 1791,
    "range": [
      1785,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1792,
    "end": 1798,
    "range": [
      1792,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1807,
    "end": 1814,
    "range": [
      1807,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1822,
    "end": 1830,
    "range": [
      1822,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1831,
    "end": 1833,
    "range": [
      1831,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1853,
    "end": 1861,
    "range": [
      1853,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1862,
    "end": 1864,
    "range": [
      1862,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1887,
    "end": 1889,
    "range": [
      1887,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 1911,
    "end": 1918,
    "range": [
      1911,
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
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 1979,
    "end": 1981,
    "range": [
      1979,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1992,
    "end": 2000,
    "range": [
      1992,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2010,
    "end": 2014,
    "range": [
      2010,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2072,
    "end": 2074,
    "range": [
      2072,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2121,
    "end": 2123,
    "range": [
      2121,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
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
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2219,
    "end": 2221,
    "range": [
      2219,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 2268,
    "end": 2270,
    "range": [
      2268,
      2270
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2328,
    "end": 2330,
    "range": [
      2328,
      2330
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2330,
    "end": 2331,
    "range": [
      2330,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2340,
    "end": 2348,
    "range": [
      2340,
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
    "value": "]",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 2410,
    "end": 2412,
    "range": [
      2410,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2422,
    "end": 2430,
    "range": [
      2422,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2434,
    "end": 2439,
    "range": [
      2434,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2441,
    "end": 2445,
    "range": [
      2441,
      2445
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2445,
    "end": 2446,
    "range": [
      2445,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2633,
    "end": 2641,
    "range": [
      2633,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 2642,
    "end": 2644,
    "range": [
      2642,
      2644
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2644,
    "end": 2645,
    "range": [
      2644,
      2645
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2653,
    "end": 2661,
    "range": [
      2653,
      2661
    ]
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 2662,
    "end": 2664,
    "range": [
      2662,
      2664
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2664,
    "end": 2665,
    "range": [
      2664,
      2665
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2669,
    "end": 2671,
    "range": [
      2669,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2678,
    "end": 2687,
    "range": [
      2678,
      2687
    ]
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2688,
    "end": 2690,
    "range": [
      2688,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2697,
    "end": 2699,
    "range": [
      2697,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2708,
    "end": 2709,
    "range": [
      2708,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2717,
    "end": 2719,
    "range": [
      2717,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2725,
    "end": 2726,
    "range": [
      2725,
      2726
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2730,
    "end": 2731,
    "range": [
      2730,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2737,
    "end": 2739,
    "range": [
      2737,
      2739
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2745,
    "end": 2746,
    "range": [
      2745,
      2746
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2755,
    "end": 2760,
    "range": [
      2755,
      2760
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2761,
    "end": 2763,
    "range": [
      2761,
      2763
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2764,
    "end": 2774,
    "range": [
      2764,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2775,
    "end": 2777,
    "range": [
      2775,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2778,
    "end": 2779,
    "range": [
      2778,
      2779
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2784,
    "end": 2795,
    "range": [
      2784,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2806,
    "end": 2808,
    "range": [
      2806,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2819,
    "end": 2821,
    "range": [
      2819,
      2821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2832,
    "end": 2834,
    "range": [
      2832,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2842,
    "end": 2843,
    "range": [
      2842,
      2843
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2853,
    "end": 2858,
    "range": [
      2853,
      2858
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2859,
    "end": 2861,
    "range": [
      2859,
      2861
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2862,
    "end": 2872,
    "range": [
      2862,
      2872
    ]
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 2873,
    "end": 2875,
    "range": [
      2873,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2876,
    "end": 2877,
    "range": [
      2876,
      2877
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2882,
    "end": 2884,
    "range": [
      2882,
      2884
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2885,
    "end": 2886,
    "range": [
      2885,
      2886
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2896,
    "end": 2897,
    "range": [
      2896,
      2897
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2898,
    "end": 2899,
    "range": [
      2898,
      2899
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2904,
    "end": 2906,
    "range": [
      2904,
      2906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2906,
    "end": 2907,
    "range": [
      2906,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2912,
    "end": 2913,
    "range": [
      2912,
      2913
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2914,
    "end": 2915,
    "range": [
      2914,
      2915
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2915,
    "end": 2916,
    "range": [
      2915,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 2926,
    "end": 2928,
    "range": [
      2926,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2931,
    "end": 2932,
    "range": [
      2931,
      2932
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2948,
    "end": 2956,
    "range": [
      2948,
      2956
    ]
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2957,
    "end": 2959,
    "range": [
      2957,
      2959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960,
    "range": [
      2959,
      2960
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2960,
    "end": 2961,
    "range": [
      2960,
      2961
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2974,
    "end": 2975,
    "range": [
      2974,
      2975
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2975,
    "end": 2976,
    "range": [
      2975,
      2976
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2983,
    "end": 2984,
    "range": [
      2983,
      2984
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2985,
    "end": 2986,
    "range": [
      2985,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 2989,
    "end": 2991,
    "range": [
      2989,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3362,
    "end": 3370,
    "range": [
      3362,
      3370
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 3371,
    "end": 3373,
    "range": [
      3371,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3373,
    "end": 3374,
    "range": [
      3373,
      3374
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3375,
    "end": 3376,
    "range": [
      3375,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3376,
    "end": 3377,
    "range": [
      3376,
      3377
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3378,
    "end": 3384,
    "range": [
      3378,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3389,
    "end": 3390,
    "range": [
      3389,
      3390
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3421,
    "end": 3429,
    "range": [
      3421,
      3429
    ]
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 3430,
    "end": 3432,
    "range": [
      3430,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3436,
    "end": 3437,
    "range": [
      3436,
      3437
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3438,
    "end": 3439,
    "range": [
      3438,
      3439
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3443,
    "end": 3449,
    "range": [
      3443,
      3449
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3478,
    "end": 3486,
    "range": [
      3478,
      3486
    ]
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 3487,
    "end": 3489,
    "range": [
      3487,
      3489
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3490,
    "end": 3491,
    "range": [
      3490,
      3491
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3491,
    "end": 3492,
    "range": [
      3491,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3493,
    "end": 3494,
    "range": [
      3493,
      3494
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3495,
    "end": 3496,
    "range": [
      3495,
      3496
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "number",
    "start": 3501,
    "end": 3507,
    "range": [
      3501,
      3507
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3513,
    "end": 3514,
    "range": [
      3513,
      3514
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3553,
    "end": 3561,
    "range": [
      3553,
      3561
    ]
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 3562,
    "end": 3564,
    "range": [
      3562,
      3564
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3564,
    "end": 3565,
    "range": [
      3564,
      3565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3565,
    "end": 3566,
    "range": [
      3565,
      3566
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3567,
    "end": 3568,
    "range": [
      3567,
      3568
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3570,
    "end": 3576,
    "range": [
      3570,
      3576
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3576,
    "end": 3577,
    "range": [
      3576,
      3577
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3577,
    "end": 3583,
    "range": [
      3577,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3583,
    "end": 3584,
    "range": [
      3583,
      3584
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3584,
    "end": 3587,
    "range": [
      3584,
      3587
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3587,
    "end": 3588,
    "range": [
      3587,
      3588
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3589,
    "end": 3590,
    "range": [
      3589,
      3590
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3590,
    "end": 3591,
    "range": [
      3590,
      3591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3627,
    "end": 3635,
    "range": [
      3627,
      3635
    ]
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 3636,
    "end": 3638,
    "range": [
      3636,
      3638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3638,
    "end": 3639,
    "range": [
      3638,
      3639
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3639,
    "end": 3640,
    "range": [
      3639,
      3640
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3641,
    "end": 3642,
    "range": [
      3641,
      3642
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3643,
    "end": 3644,
    "range": [
      3643,
      3644
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3644,
    "end": 3645,
    "range": [
      3644,
      3645
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3645,
    "end": 3646,
    "range": [
      3645,
      3646
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3648,
    "end": 3649,
    "range": [
      3648,
      3649
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3650,
    "end": 3651,
    "range": [
      3650,
      3651
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3651,
    "end": 3652,
    "range": [
      3651,
      3652
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3652,
    "end": 3653,
    "range": [
      3652,
      3653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3653,
    "end": 3654,
    "range": [
      3653,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3657,
    "end": 3658,
    "range": [
      3657,
      3658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3658,
    "end": 3659,
    "range": [
      3658,
      3659
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3660,
    "end": 3661,
    "range": [
      3660,
      3661
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3661,
    "end": 3667,
    "range": [
      3661,
      3667
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3667,
    "end": 3668,
    "range": [
      3667,
      3668
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3669,
    "end": 3675,
    "range": [
      3669,
      3675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3677,
    "end": 3683,
    "range": [
      3677,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3685,
    "end": 3686,
    "range": [
      3685,
      3686
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3688,
    "end": 3689,
    "range": [
      3688,
      3689
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3690,
    "end": 3691,
    "range": [
      3690,
      3691
    ]
  }
]
```
