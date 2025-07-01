__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayString",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 220
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 228
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 235
              },
              "typeArguments": null,
              "start": 229,
              "end": 235
            }
          ],
          "start": 228,
          "end": 236
        },
        "start": 223,
        "end": 236
      },
      "declare": false,
      "start": 204,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 251
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 259
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 266
                  },
                  "typeArguments": null,
                  "start": 260,
                  "end": 266
                }
              ],
              "start": 259,
              "end": 267
            },
            "start": 254,
            "end": 267
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 270,
              "end": 276
            },
            "start": 270,
            "end": 278
          }
        ],
        "start": 254,
        "end": 278
      },
      "declare": false,
      "start": 237,
      "end": 279
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringOrNumArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 301
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 309
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "String",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 316
                  },
                  "typeArguments": null,
                  "start": 310,
                  "end": 316
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 323
                  },
                  "typeArguments": null,
                  "start": 317,
                  "end": 323
                }
              ],
              "start": 310,
              "end": 323
            }
          ],
          "start": 309,
          "end": 324
        },
        "start": 304,
        "end": 324
      },
      "declare": false,
      "start": 280,
      "end": 325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 338
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 343
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 346,
                    "end": 352
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 353,
                    "end": 359
                  }
                ],
                "start": 346,
                "end": 359
              },
              "start": 345,
              "end": 362
            },
            "start": 343,
            "end": 362
          },
          "value": null,
          "start": 339,
          "end": 362
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 364,
        "end": 367
      },
      "expression": false,
      "start": 327,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 379
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 384
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 380,
          "end": 384
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 386,
        "end": 389
      },
      "expression": false,
      "start": 368,
      "end": 389
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 401
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 413
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 420
                    },
                    "typeArguments": null,
                    "start": 414,
                    "end": 420
                  }
                ],
                "start": 413,
                "end": 421
              },
              "start": 408,
              "end": 421
            },
            "start": 406,
            "end": 421
          },
          "value": null,
          "start": 402,
          "end": 421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 423,
        "end": 426
      },
      "expression": false,
      "start": 390,
      "end": 426
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 438
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 443
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayString",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 456
              },
              "typeArguments": null,
              "start": 445,
              "end": 456
            },
            "start": 443,
            "end": 456
          },
          "value": null,
          "start": 439,
          "end": 456
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 458,
        "end": 461
      },
      "expression": false,
      "start": 427,
      "end": 461
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 473
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 478
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringOrNumArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 496
              },
              "typeArguments": null,
              "start": 480,
              "end": 496
            },
            "start": 478,
            "end": 496
          },
          "value": null,
          "start": 474,
          "end": 496
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 498,
        "end": 501
      },
      "expression": false,
      "start": 462,
      "end": 501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a9",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 513
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
              "start": 515,
              "end": 516
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 519
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
                      "start": 523,
                      "end": 524
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 525
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 526
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 514,
          "end": 527
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 529,
        "end": 532
      },
      "expression": false,
      "start": 502,
      "end": 532
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a10",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 545
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
              "start": 547,
              "end": 548
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 551
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
                      "start": 555,
                      "end": 556
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 557
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 558
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 564
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 560,
              "end": 564
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 546,
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
      "start": 533,
      "end": 570
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a11",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 583
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
              "start": 585,
              "end": 586
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 592
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 598
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 594,
              "end": 598
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 601,
                "end": 607
              },
              "start": 601,
              "end": 609
            },
            "start": 599,
            "end": 609
          },
          "start": 584,
          "end": 609
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 611,
        "end": 614
      },
      "expression": false,
      "start": 571,
      "end": 614
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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 626
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 630,
                "end": 631
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 633,
                "end": 634
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 636,
                "end": 637
              }
            ],
            "start": 629,
            "end": 638
          },
          "definite": false,
          "start": 621,
          "end": 638
        }
      ],
      "declare": false,
      "start": 617,
      "end": 639
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
            "name": "array2",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 650
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 654,
                "end": 658
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 660,
                "end": 665
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 667,
                "end": 674
              }
            ],
            "start": 653,
            "end": 675
          },
          "definite": false,
          "start": 644,
          "end": 675
        }
      ],
      "declare": false,
      "start": 640,
      "end": 676
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 677,
          "end": 679
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 689
                },
                "start": 681,
                "end": 689
              }
            ],
            "start": 680,
            "end": 690
          }
        ],
        "optional": false,
        "start": 677,
        "end": 691
      },
      "directive": null,
      "start": 677,
      "end": 692
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
          "start": 693,
          "end": 695
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 704
            },
            "start": 696,
            "end": 704
          }
        ],
        "optional": false,
        "start": 693,
        "end": 705
      },
      "directive": null,
      "start": 693,
      "end": 706
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null,
          "start": 708,
          "end": 710
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
                "start": 712,
                "end": 713
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 715,
                "end": 716
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
                        "start": 720,
                        "end": 728
                      }
                    ],
                    "start": 719,
                    "end": 729
                  }
                ],
                "start": 718,
                "end": 730
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 732,
                "end": 737
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 739,
                "end": 743
              }
            ],
            "start": 711,
            "end": 744
          }
        ],
        "optional": false,
        "start": 708,
        "end": 745
      },
      "directive": null,
      "start": 708,
      "end": 746
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 791,
          "end": 794
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
                "start": 796,
                "end": 797
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 799,
                "end": 800
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
                        "start": 804,
                        "end": 812
                      }
                    ],
                    "start": 803,
                    "end": 813
                  }
                ],
                "start": 802,
                "end": 814
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 816,
                "end": 821
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 823,
                "end": 827
              }
            ],
            "start": 795,
            "end": 828
          }
        ],
        "optional": false,
        "start": 791,
        "end": 829
      },
      "directive": null,
      "start": 791,
      "end": 830
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 860,
          "end": 863
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
                "start": 865,
                "end": 866
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 868,
                "end": 869
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 871,
                "end": 872
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 874,
                "end": 879
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 881,
                "end": 885
              }
            ],
            "start": 864,
            "end": 886
          }
        ],
        "optional": false,
        "start": 860,
        "end": 887
      },
      "directive": null,
      "start": 860,
      "end": 888
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 929,
          "end": 932
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
                "start": 934,
                "end": 935
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 937,
                "end": 938
              }
            ],
            "start": 933,
            "end": 939
          }
        ],
        "optional": false,
        "start": 929,
        "end": 940
      },
      "directive": null,
      "start": 929,
      "end": 941
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 998,
          "end": 1001
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
                "start": 1003,
                "end": 1004
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1006,
                "end": 1007
              }
            ],
            "start": 1002,
            "end": 1008
          }
        ],
        "optional": false,
        "start": 998,
        "end": 1009
      },
      "directive": null,
      "start": 998,
      "end": 1010
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1111,
        "end": 1114
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1116
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1115,
            "end": 1116
          }
        ],
        "start": 1114,
        "end": 1117
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1121,
            "end": 1122
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1124,
                  "end": 1125
                },
                "typeArguments": null,
                "start": 1124,
                "end": 1125
              },
              "start": 1124,
              "end": 1127
            },
            "start": 1122,
            "end": 1127
          },
          "value": null,
          "start": 1118,
          "end": 1127
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1129,
        "end": 1132
      },
      "expression": false,
      "start": 1102,
      "end": 1132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1136
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1137,
                  "end": 1143
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1144,
                  "end": 1150
                }
              ],
              "start": 1137,
              "end": 1150
            }
          ],
          "start": 1136,
          "end": 1151
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1152,
            "end": 1159
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1161,
            "end": 1162
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1164,
            "end": 1165
          }
        ],
        "optional": false,
        "start": 1133,
        "end": 1166
      },
      "directive": null,
      "start": 1133,
      "end": 1167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1168,
          "end": 1171
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1172,
            "end": 1179
          },
          {
            "type": "Literal",
            "value": "world",
            "raw": "\"world\"",
            "start": 1181,
            "end": 1188
          }
        ],
        "optional": false,
        "start": 1168,
        "end": 1189
      },
      "directive": null,
      "start": 1168,
      "end": 1190
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1197,
        "end": 1198
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
              "start": 1201,
              "end": 1202
            },
            "initializer": null,
            "computed": false,
            "start": 1201,
            "end": 1202
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1204,
              "end": 1205
            },
            "initializer": null,
            "computed": false,
            "start": 1204,
            "end": 1205
          }
        ],
        "start": 1199,
        "end": 1207
      },
      "const": false,
      "declare": false,
      "start": 1192,
      "end": 1207
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1221
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
              "start": 1224,
              "end": 1225
            },
            "initializer": null,
            "computed": false,
            "start": 1224,
            "end": 1225
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1228
            },
            "initializer": null,
            "computed": false,
            "start": 1227,
            "end": 1228
          }
        ],
        "start": 1222,
        "end": 1230
      },
      "const": true,
      "declare": false,
      "start": 1208,
      "end": 1230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1240,
        "end": 1244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1245,
              "end": 1246
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1261
              },
              "typeArguments": null,
              "start": 1255,
              "end": 1261
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1245,
            "end": 1261
          }
        ],
        "start": 1244,
        "end": 1262
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1266,
            "end": 1267
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1269,
                  "end": 1270
                },
                "typeArguments": null,
                "start": 1269,
                "end": 1270
              },
              "start": 1269,
              "end": 1272
            },
            "start": 1267,
            "end": 1272
          },
          "value": null,
          "start": 1263,
          "end": 1272
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1274,
        "end": 1277
      },
      "expression": false,
      "start": 1231,
      "end": 1277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1278,
          "end": 1282
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1283,
            "end": 1284
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1286,
            "end": 1287
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1289,
            "end": 1290
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1292,
              "end": 1293
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1295
            },
            "optional": false,
            "computed": false,
            "start": 1292,
            "end": 1295
          }
        ],
        "optional": false,
        "start": 1278,
        "end": 1296
      },
      "directive": null,
      "start": 1278,
      "end": 1297
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1298,
          "end": 1302
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1303,
            "end": 1304
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1306,
            "end": 1307
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1309,
            "end": 1310
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1312,
              "end": 1314
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1316
            },
            "optional": false,
            "computed": false,
            "start": 1312,
            "end": 1316
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1319
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1321
            },
            "optional": false,
            "computed": false,
            "start": 1318,
            "end": 1321
          }
        ],
        "optional": false,
        "start": 1298,
        "end": 1322
      },
      "directive": null,
      "start": 1298,
      "end": 1323
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 204,
  "end": 1325
}
```
