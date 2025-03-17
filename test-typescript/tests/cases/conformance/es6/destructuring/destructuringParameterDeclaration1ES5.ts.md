__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 306,
  "end": 3725,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 306,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 317,
        "name": "a1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 318,
          "end": 361,
          "elements": [
            {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 325,
              "end": 330,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 326,
                  "end": 329,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 327,
                      "end": 328,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 331,
            "end": 361,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 333,
              "end": 361,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 334,
                  "end": 340
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 342,
                  "end": 348
                },
                {
                  "type": "TSArrayType",
                  "start": 350,
                  "end": 360,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 350,
                    "end": 358,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 350,
                      "end": 356
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 363,
        "end": 366,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 367,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 378,
        "name": "a2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 379,
          "end": 406,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 406,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 382,
              "end": 406,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 384,
                  "end": 394,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 385,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 385,
                    "end": 393,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 387,
                      "end": 393
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 395,
                  "end": 404,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 396,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 396,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 398,
                      "end": 404
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 408,
        "end": 411,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 412,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 423,
        "name": "a3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 424,
          "end": 533,
          "properties": [
            {
              "type": "Property",
              "start": 425,
              "end": 426,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 428,
              "end": 429,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 431,
              "end": 440,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 431,
                "end": 432,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 434,
                "end": 440,
                "properties": [
                  {
                    "type": "Property",
                    "start": 435,
                    "end": 436,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 436,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 436,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 438,
                    "end": 439,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 439,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 438,
                      "end": 439,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 442,
              "end": 454,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 442,
                "end": 443,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 445,
                "end": 454,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 446,
                    "end": 447,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 449,
                    "end": 450,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 455,
            "end": 533,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 457,
              "end": 533,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 459,
                  "end": 469,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 459,
                    "end": 460,
                    "name": "j",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 460,
                    "end": 468,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 462,
                      "end": 468
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 470,
                  "end": 480,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 471,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 479,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 473,
                      "end": 479
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 481,
                  "end": 510,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "name": "l",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 482,
                    "end": 509,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 484,
                      "end": 509,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 486,
                          "end": 497,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 486,
                            "end": 487,
                            "name": "m",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 487,
                            "end": 496,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 489,
                              "end": 496
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 498,
                          "end": 507,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 498,
                            "end": 499,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 499,
                            "end": 507,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 501,
                              "end": 507
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 511,
                  "end": 531,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 512,
                    "name": "q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 531,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 514,
                      "end": 531,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 515,
                        "end": 528,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 515,
                            "end": 521
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 522,
                            "end": 528
                          }
                        ]
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 535,
        "end": 538,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 538,
      "end": 539
    },
    {
      "type": "FunctionDeclaration",
      "start": 540,
      "end": 589,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 551,
        "name": "a4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 552,
          "end": 584,
          "properties": [
            {
              "type": "Property",
              "start": 553,
              "end": 554,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 556,
              "end": 557,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 556,
                "end": 557,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 556,
                "end": 557,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 558,
            "end": 584,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 560,
              "end": 584,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 562,
                  "end": 572,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 563,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 571,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 565,
                      "end": 571
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 573,
                  "end": 582,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 582,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 576,
                      "end": 582
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 586,
        "end": 589,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 615,
      "expression": {
        "type": "CallExpression",
        "start": 591,
        "end": 614,
        "callee": {
          "type": "Identifier",
          "start": 591,
          "end": 593,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 594,
            "end": 613,
            "elements": [
              {
                "type": "Literal",
                "start": 595,
                "end": 596,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 598,
                "end": 599,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 601,
                "end": 612,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 602,
                    "end": 611,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 603,
                        "end": 610,
                        "value": "world",
                        "raw": "\"world\""
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 616,
      "end": 643,
      "expression": {
        "type": "CallExpression",
        "start": 616,
        "end": 642,
        "callee": {
          "type": "Identifier",
          "start": 616,
          "end": 618,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 619,
            "end": 641,
            "elements": [
              {
                "type": "Literal",
                "start": 620,
                "end": 621,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 623,
                "end": 624,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 626,
                "end": 637,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 627,
                    "end": 636,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 628,
                        "end": 635,
                        "value": "world",
                        "raw": "\"world\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 639,
                "end": 640,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 900,
      "end": 938,
      "id": {
        "type": "Identifier",
        "start": 909,
        "end": 911,
        "name": "b1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 912,
          "end": 933,
          "left": {
            "type": "Identifier",
            "start": 912,
            "end": 913,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrayExpression",
            "start": 916,
            "end": 933,
            "elements": [
              {
                "type": "Identifier",
                "start": 917,
                "end": 926,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 928,
                "end": 932,
                "value": null,
                "raw": "null"
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 935,
        "end": 938,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 938,
      "end": 939
    },
    {
      "type": "FunctionDeclaration",
      "start": 940,
      "end": 993,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 951,
        "name": "b2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 952,
          "end": 960,
          "left": {
            "type": "Identifier",
            "start": 952,
            "end": 953,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 956,
            "end": 960,
            "value": null,
            "raw": "null"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 962,
          "end": 988,
          "left": {
            "type": "Identifier",
            "start": 962,
            "end": 963,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 966,
            "end": 988,
            "properties": [
              {
                "type": "Property",
                "start": 968,
                "end": 972,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 969,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 971,
                  "end": 972,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 974,
                "end": 986,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 974,
                  "end": 975,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 986,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 990,
        "end": 993,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 994,
      "end": 1061,
      "id": {
        "type": "Identifier",
        "start": 1003,
        "end": 1005,
        "name": "b3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1006,
          "end": 1056,
          "left": {
            "type": "ObjectPattern",
            "start": 1006,
            "end": 1022,
            "properties": [
              {
                "type": "Property",
                "start": 1007,
                "end": 1021,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1007,
                  "end": 1008,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 1010,
                  "end": 1021,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1011,
                      "end": 1012,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1011,
                        "end": 1012,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1011,
                        "end": 1012,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1014,
                      "end": 1020,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1014,
                        "end": 1015,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 1017,
                        "end": 1020,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1018,
                            "end": 1019,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1018,
                              "end": 1019,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1018,
                              "end": 1019,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 1025,
            "end": 1056,
            "properties": [
              {
                "type": "Property",
                "start": 1027,
                "end": 1054,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1027,
                  "end": 1028,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1030,
                  "end": 1054,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1032,
                      "end": 1039,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1032,
                        "end": 1033,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1035,
                        "end": 1039,
                        "value": "hi",
                        "raw": "\"hi\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1041,
                      "end": 1052,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1041,
                        "end": 1042,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1044,
                        "end": 1052,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1046,
                            "end": 1050,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1046,
                              "end": 1047,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1049,
                              "end": 1050,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1058,
        "end": 1061,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1063,
      "end": 1120,
      "id": {
        "type": "Identifier",
        "start": 1073,
        "end": 1075,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1076,
        "end": 1120,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1082,
            "end": 1118,
            "key": {
              "type": "Identifier",
              "start": 1082,
              "end": 1084,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1085,
                "end": 1086,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1088,
                "end": 1089,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 1091,
                "end": 1099,
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "start": 1094,
                    "end": 1095,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1098,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectPattern",
                "start": 1101,
                "end": 1116,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1102,
                    "end": 1103,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1102,
                      "end": 1103,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1102,
                      "end": 1103,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1105,
                    "end": 1115,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1105,
                      "end": 1106,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1108,
                      "end": 1115,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1110,
                          "end": 1111,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1111,
                            "name": "q",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1111,
                            "name": "q",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1113,
                          "end": 1114,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1113,
                            "end": 1114,
                            "name": "r",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1113,
                            "end": 1114,
                            "name": "r",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1122,
      "end": 1179,
      "id": {
        "type": "Identifier",
        "start": 1131,
        "end": 1133,
        "name": "b6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1134,
          "end": 1174,
          "left": {
            "type": "ArrayPattern",
            "start": 1134,
            "end": 1143,
            "elements": [
              {
                "type": "Identifier",
                "start": 1135,
                "end": 1136,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1138,
                "end": 1139,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1141,
                "end": 1142,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 1146,
            "end": 1174,
            "elements": [
              {
                "type": "Identifier",
                "start": 1147,
                "end": 1156,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 1158,
                "end": 1162,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 1164,
                "end": 1173,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1176,
        "end": 1179,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1180,
      "end": 1268,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1191,
        "name": "b7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1192,
          "end": 1263,
          "left": {
            "type": "ArrayPattern",
            "start": 1192,
            "end": 1210,
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 1193,
                "end": 1196,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1194,
                    "end": 1195,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1198,
                "end": 1199,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 1201,
                "end": 1209,
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 1202,
                    "end": 1208,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1203,
                        "end": 1204,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1206,
                        "end": 1207,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 1213,
            "end": 1263,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1214,
                "end": 1225,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1215,
                    "end": 1224,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 1227,
                "end": 1236,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 1238,
                "end": 1262,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1239,
                    "end": 1261,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1240,
                        "end": 1249,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1251,
                        "end": 1260,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1265,
        "end": 1268,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1270,
      "end": 1284,
      "expression": {
        "type": "CallExpression",
        "start": 1270,
        "end": 1283,
        "callee": {
          "type": "Identifier",
          "start": 1270,
          "end": 1272,
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1273,
            "end": 1282,
            "elements": [
              {
                "type": "Literal",
                "start": 1274,
                "end": 1275,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1277,
                "end": 1278,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1280,
                "end": 1281,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1318,
      "end": 1356,
      "expression": {
        "type": "CallExpression",
        "start": 1318,
        "end": 1355,
        "callee": {
          "type": "Identifier",
          "start": 1318,
          "end": 1320,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1321,
            "end": 1329,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1331,
            "end": 1354,
            "properties": [
              {
                "type": "Property",
                "start": 1333,
                "end": 1339,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1334,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1336,
                  "end": 1339,
                  "value": 200,
                  "raw": "200"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1341,
                "end": 1352,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1342,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1344,
                  "end": 1352,
                  "value": "string",
                  "raw": "\"string\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1357,
      "end": 1391,
      "expression": {
        "type": "CallExpression",
        "start": 1357,
        "end": 1390,
        "callee": {
          "type": "Identifier",
          "start": 1357,
          "end": 1359,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1360,
            "end": 1368,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1370,
            "end": 1389,
            "properties": [
              {
                "type": "Property",
                "start": 1372,
                "end": 1378,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1372,
                  "end": 1373,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1375,
                  "end": 1378,
                  "value": 200,
                  "raw": "200"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1380,
                "end": 1387,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1380,
                  "end": 1381,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1383,
                  "end": 1387,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1392,
      "end": 1413,
      "expression": {
        "type": "CallExpression",
        "start": 1392,
        "end": 1412,
        "callee": {
          "type": "Identifier",
          "start": 1392,
          "end": 1394,
          "name": "b6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1395,
            "end": 1411,
            "elements": [
              {
                "type": "Literal",
                "start": 1396,
                "end": 1404,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 1406,
                "end": 1407,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1409,
                "end": 1410,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1458,
      "end": 1495,
      "expression": {
        "type": "CallExpression",
        "start": 1458,
        "end": 1494,
        "callee": {
          "type": "Identifier",
          "start": 1458,
          "end": 1460,
          "name": "b7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1461,
            "end": 1493,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1462,
                "end": 1472,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1463,
                    "end": 1471,
                    "value": "string",
                    "raw": "\"string\""
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 1474,
                "end": 1475,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1477,
                "end": 1492,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1478,
                    "end": 1491,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1479,
                        "end": 1483,
                        "value": true,
                        "raw": "true"
                      },
                      {
                        "type": "Literal",
                        "start": 1485,
                        "end": 1490,
                        "value": false,
                        "raw": "false"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1656,
      "end": 1670,
      "id": {
        "type": "Identifier",
        "start": 1661,
        "end": 1664,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1667,
          "end": 1668,
          "id": {
            "type": "Identifier",
            "start": 1667,
            "end": 1668,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 1665,
        "end": 1670,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1667,
            "end": 1668,
            "id": {
              "type": "Identifier",
              "start": 1667,
              "end": 1668,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1671,
      "end": 1704,
      "id": {
        "type": "Identifier",
        "start": 1680,
        "end": 1682,
        "name": "c0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1683,
          "end": 1699,
          "properties": [
            {
              "type": "Property",
              "start": 1684,
              "end": 1698,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1684,
                "end": 1685,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 1687,
                "end": 1698,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1688,
                    "end": 1689,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1688,
                      "end": 1689,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1688,
                      "end": 1689,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1691,
                    "end": 1697,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1691,
                      "end": 1692,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1694,
                      "end": 1697,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1695,
                          "end": 1696,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1695,
                            "end": 1696,
                            "name": "j",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1695,
                            "end": 1696,
                            "name": "j",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1701,
        "end": 1704,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1705,
      "end": 1737,
      "id": {
        "type": "Identifier",
        "start": 1714,
        "end": 1716,
        "name": "c1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1717,
          "end": 1732,
          "left": {
            "type": "ObjectPattern",
            "start": 1717,
            "end": 1720,
            "properties": [
              {
                "type": "Property",
                "start": 1718,
                "end": 1719,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1718,
                  "end": 1719,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1718,
                  "end": 1719,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 1723,
            "end": 1732,
            "properties": [
              {
                "type": "Property",
                "start": 1725,
                "end": 1730,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1725,
                  "end": 1726,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1728,
                  "end": 1730,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1734,
        "end": 1737,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1738,
      "end": 1763,
      "id": {
        "type": "Identifier",
        "start": 1747,
        "end": 1749,
        "name": "c2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1750,
          "end": 1758,
          "properties": [
            {
              "type": "Property",
              "start": 1751,
              "end": 1757,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1751,
                "end": 1752,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 1751,
                "end": 1757,
                "left": {
                  "type": "Identifier",
                  "start": 1751,
                  "end": 1752,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1755,
                  "end": 1757,
                  "value": 10,
                  "raw": "10"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1760,
        "end": 1763,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1764,
      "end": 1822,
      "id": {
        "type": "Identifier",
        "start": 1773,
        "end": 1775,
        "name": "c3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1776,
          "end": 1817,
          "left": {
            "type": "ObjectPattern",
            "start": 1776,
            "end": 1800,
            "properties": [
              {
                "type": "Property",
                "start": 1777,
                "end": 1778,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1777,
                  "end": 1778,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1777,
                  "end": 1778,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1779,
              "end": 1800,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1781,
                "end": 1800,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1783,
                    "end": 1799,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1783,
                      "end": 1784,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1784,
                      "end": 1799,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1786,
                        "end": 1799,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1786,
                            "end": 1792
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1793,
                            "end": 1799
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 1803,
            "end": 1817,
            "properties": [
              {
                "type": "Property",
                "start": 1805,
                "end": 1815,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1805,
                  "end": 1806,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1808,
                  "end": 1815,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1819,
        "end": 1822,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1823,
      "end": 1853,
      "id": {
        "type": "Identifier",
        "start": 1832,
        "end": 1834,
        "name": "c5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 1835,
          "end": 1848,
          "elements": [
            {
              "type": "Identifier",
              "start": 1836,
              "end": 1837,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1839,
              "end": 1840,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 1842,
              "end": 1847,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1843,
                  "end": 1846,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1844,
                      "end": 1845,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1850,
        "end": 1853,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1854,
      "end": 1886,
      "id": {
        "type": "Identifier",
        "start": 1863,
        "end": 1865,
        "name": "c6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 1866,
          "end": 1881,
          "elements": [
            {
              "type": "Identifier",
              "start": 1867,
              "end": 1868,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1870,
              "end": 1871,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 1873,
              "end": 1880,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1874,
                  "end": 1879,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1875,
                      "end": 1878,
                      "left": {
                        "type": "Identifier",
                        "start": 1875,
                        "end": 1876,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1877,
                        "end": 1878,
                        "value": 1,
                        "raw": "1"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1883,
        "end": 1886,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1888,
      "end": 1926,
      "expression": {
        "type": "CallExpression",
        "start": 1888,
        "end": 1925,
        "callee": {
          "type": "Identifier",
          "start": 1888,
          "end": 1890,
          "name": "c0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1891,
            "end": 1924,
            "properties": [
              {
                "type": "Property",
                "start": 1892,
                "end": 1923,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1892,
                  "end": 1893,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1896,
                  "end": 1923,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1898,
                      "end": 1902,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1898,
                        "end": 1899,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1901,
                        "end": 1902,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1904,
                      "end": 1921,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1904,
                        "end": 1905,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1907,
                        "end": 1921,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1909,
                            "end": 1919,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1909,
                              "end": 1910,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1912,
                              "end": 1919,
                              "value": "world",
                              "raw": "\"world\""
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1980,
      "end": 2022,
      "expression": {
        "type": "CallExpression",
        "start": 1980,
        "end": 2021,
        "callee": {
          "type": "Identifier",
          "start": 1980,
          "end": 1982,
          "name": "c0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1983,
            "end": 2020,
            "properties": [
              {
                "type": "Property",
                "start": 1984,
                "end": 2019,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1984,
                  "end": 1985,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1988,
                  "end": 2019,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1990,
                      "end": 2001,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1990,
                        "end": 1991,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1993,
                        "end": 2001,
                        "value": "string",
                        "raw": "\"string\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2003,
                      "end": 2017,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2003,
                        "end": 2004,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2006,
                        "end": 2017,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2008,
                            "end": 2015,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2008,
                              "end": 2009,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2011,
                              "end": 2015,
                              "value": true,
                              "raw": "true"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2073,
      "end": 2078,
      "expression": {
        "type": "CallExpression",
        "start": 2073,
        "end": 2077,
        "callee": {
          "type": "Identifier",
          "start": 2073,
          "end": 2075,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2122,
      "end": 2134,
      "expression": {
        "type": "CallExpression",
        "start": 2122,
        "end": 2134,
        "callee": {
          "type": "Identifier",
          "start": 2122,
          "end": 2124,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2125,
            "end": 2133,
            "properties": [
              {
                "type": "Property",
                "start": 2127,
                "end": 2131,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2127,
                  "end": 2128,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2130,
                  "end": 2131,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2173,
      "end": 2180,
      "expression": {
        "type": "CallExpression",
        "start": 2173,
        "end": 2179,
        "callee": {
          "type": "Identifier",
          "start": 2173,
          "end": 2175,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2176,
            "end": 2178,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2221,
      "end": 2231,
      "expression": {
        "type": "CallExpression",
        "start": 2221,
        "end": 2230,
        "callee": {
          "type": "Identifier",
          "start": 2221,
          "end": 2223,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2224,
            "end": 2229,
            "properties": [
              {
                "type": "Property",
                "start": 2225,
                "end": 2228,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2225,
                  "end": 2226,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2227,
                  "end": 2228,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2270,
      "end": 2283,
      "expression": {
        "type": "CallExpression",
        "start": 2270,
        "end": 2282,
        "callee": {
          "type": "Identifier",
          "start": 2270,
          "end": 2272,
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2273,
            "end": 2281,
            "properties": [
              {
                "type": "Property",
                "start": 2275,
                "end": 2279,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2275,
                  "end": 2276,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2278,
                  "end": 2279,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2330,
      "end": 2355,
      "expression": {
        "type": "CallExpression",
        "start": 2330,
        "end": 2354,
        "callee": {
          "type": "Identifier",
          "start": 2330,
          "end": 2332,
          "name": "c5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2333,
            "end": 2353,
            "elements": [
              {
                "type": "Literal",
                "start": 2334,
                "end": 2335,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2337,
                "end": 2338,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2340,
                "end": 2352,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2341,
                    "end": 2351,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2342,
                        "end": 2350,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2412,
      "end": 2450,
      "expression": {
        "type": "CallExpression",
        "start": 2412,
        "end": 2449,
        "callee": {
          "type": "Identifier",
          "start": 2412,
          "end": 2414,
          "name": "c5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2415,
            "end": 2448,
            "elements": [
              {
                "type": "Literal",
                "start": 2416,
                "end": 2417,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2419,
                "end": 2420,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2422,
                "end": 2434,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2423,
                    "end": 2433,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2424,
                        "end": 2432,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 2436,
                "end": 2441,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 2443,
                "end": 2447,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2635,
      "end": 2654,
      "id": {
        "type": "Identifier",
        "start": 2644,
        "end": 2646,
        "name": "d0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2647,
          "end": 2649,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2651,
        "end": 2654,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2655,
      "end": 2678,
      "id": {
        "type": "Identifier",
        "start": 2664,
        "end": 2666,
        "name": "d0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 2667,
          "end": 2673,
          "left": {
            "type": "Identifier",
            "start": 2667,
            "end": 2668,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 2671,
            "end": 2673,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2675,
        "end": 2678,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2680,
      "end": 2755,
      "id": {
        "type": "Identifier",
        "start": 2690,
        "end": 2692,
        "name": "F2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2693,
        "end": 2755,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2699,
            "end": 2714,
            "key": {
              "type": "Identifier",
              "start": 2699,
              "end": 2701,
              "name": "d3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 2702,
                "end": 2712,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2703,
                    "end": 2704,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2706,
                    "end": 2707,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2709,
                    "end": 2710,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": true,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2719,
            "end": 2734,
            "key": {
              "type": "Identifier",
              "start": 2719,
              "end": 2721,
              "name": "d4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 2722,
                "end": 2732,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2723,
                    "end": 2724,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2723,
                      "end": 2724,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2723,
                      "end": 2724,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2726,
                    "end": 2727,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2726,
                      "end": 2727,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2726,
                      "end": 2727,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2729,
                    "end": 2730,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2729,
                      "end": 2730,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2729,
                      "end": 2730,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": true,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2739,
            "end": 2753,
            "key": {
              "type": "Identifier",
              "start": 2739,
              "end": 2741,
              "name": "e0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 2742,
                "end": 2751,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2743,
                    "end": 2744,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2746,
                    "end": 2747,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2749,
                    "end": 2750,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2757,
      "end": 2853,
      "id": {
        "type": "Identifier",
        "start": 2763,
        "end": 2765,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2780,
        "end": 2853,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2786,
            "end": 2803,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2786,
              "end": 2797,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2797,
              "end": 2803,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2800,
                "end": 2803,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2808,
            "end": 2816,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2808,
              "end": 2810,
              "name": "d3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2810,
              "end": 2816,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2813,
                "end": 2816,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2821,
            "end": 2829,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2821,
              "end": 2823,
              "name": "d4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2823,
              "end": 2829,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2826,
                "end": 2829,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2834,
            "end": 2851,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2834,
              "end": 2836,
              "name": "e0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2836,
              "end": 2851,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2837,
                  "end": 2846,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2838,
                      "end": 2839,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2841,
                      "end": 2842,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2844,
                      "end": 2845,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2848,
                "end": 2851,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2777,
          "end": 2779,
          "expression": {
            "type": "Identifier",
            "start": 2777,
            "end": 2779,
            "name": "F2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2855,
      "end": 2947,
      "id": {
        "type": "Identifier",
        "start": 2861,
        "end": 2863,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2878,
        "end": 2947,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2884,
            "end": 2901,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2884,
              "end": 2886,
              "name": "d3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2886,
              "end": 2901,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2887,
                  "end": 2896,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2888,
                      "end": 2889,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2891,
                      "end": 2892,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2894,
                      "end": 2895,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2898,
                "end": 2901,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2906,
            "end": 2923,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2906,
              "end": 2908,
              "name": "d4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2908,
              "end": 2923,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2909,
                  "end": 2918,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2910,
                      "end": 2911,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2910,
                        "end": 2911,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2910,
                        "end": 2911,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2913,
                      "end": 2914,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2913,
                        "end": 2914,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2913,
                        "end": 2914,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2916,
                      "end": 2917,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2916,
                        "end": 2917,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2916,
                        "end": 2917,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2920,
                "end": 2923,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2928,
            "end": 2945,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2928,
              "end": 2930,
              "name": "e0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2930,
              "end": 2945,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2931,
                  "end": 2940,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2932,
                      "end": 2933,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2935,
                      "end": 2936,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2938,
                      "end": 2939,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2942,
                "end": 2945,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2875,
          "end": 2877,
          "expression": {
            "type": "Identifier",
            "start": 2875,
            "end": 2877,
            "name": "F2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2950,
      "end": 2990,
      "id": {
        "type": "Identifier",
        "start": 2959,
        "end": 2961,
        "name": "d5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 2962,
          "end": 2985,
          "left": {
            "type": "ObjectPattern",
            "start": 2962,
            "end": 2968,
            "properties": [
              {
                "type": "Property",
                "start": 2963,
                "end": 2964,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2963,
                  "end": 2964,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2963,
                  "end": 2964,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2966,
                "end": 2967,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2966,
                  "end": 2967,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2966,
                  "end": 2967,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 2971,
            "end": 2985,
            "properties": [
              {
                "type": "Property",
                "start": 2973,
                "end": 2977,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2973,
                  "end": 2974,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2976,
                  "end": 2977,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2979,
                "end": 2983,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2979,
                  "end": 2980,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2982,
                  "end": 2983,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2987,
        "end": 2990,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2991,
      "end": 2996,
      "expression": {
        "type": "CallExpression",
        "start": 2991,
        "end": 2995,
        "callee": {
          "type": "Identifier",
          "start": 2991,
          "end": 2993,
          "name": "d5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3364,
      "end": 3392,
      "id": {
        "type": "Identifier",
        "start": 3373,
        "end": 3375,
        "name": "e1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3376,
          "end": 3387,
          "properties": [
            {
              "type": "Property",
              "start": 3377,
              "end": 3386,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3377,
                "end": 3378,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3380,
                "end": 3386,
                "name": "number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3389,
        "end": 3392,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3423,
      "end": 3458,
      "id": {
        "type": "Identifier",
        "start": 3432,
        "end": 3434,
        "name": "e2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3435,
          "end": 3453,
          "properties": [
            {
              "type": "Property",
              "start": 3436,
              "end": 3437,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3436,
                "end": 3437,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3436,
                "end": 3437,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3438,
            "end": 3453,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3440,
              "end": 3453,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3442,
                  "end": 3451,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3442,
                    "end": 3443,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3443,
                    "end": 3451,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3445,
                      "end": 3451
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3455,
        "end": 3458,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3480,
      "end": 3516,
      "id": {
        "type": "Identifier",
        "start": 3489,
        "end": 3491,
        "name": "e3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3492,
          "end": 3511,
          "properties": [
            {
              "type": "Property",
              "start": 3493,
              "end": 3494,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3493,
                "end": 3494,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3493,
                "end": 3494,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3495,
            "end": 3511,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3497,
              "end": 3511,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3499,
                  "end": 3509,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3499,
                    "end": 3500,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3501,
                    "end": 3509,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3503,
                      "end": 3509
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3513,
        "end": 3516,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3555,
      "end": 3597,
      "id": {
        "type": "Identifier",
        "start": 3564,
        "end": 3566,
        "name": "e4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3567,
          "end": 3592,
          "properties": [
            {
              "type": "Property",
              "start": 3568,
              "end": 3590,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3568,
                "end": 3569,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3571,
                "end": 3590,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3572,
                    "end": 3578,
                    "name": "number",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3579,
                    "end": 3585,
                    "name": "string",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3586,
                    "end": 3589,
                    "name": "any",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3594,
        "end": 3597,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3629,
      "end": 3693,
      "id": {
        "type": "Identifier",
        "start": 3638,
        "end": 3640,
        "name": "e5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3641,
          "end": 3688,
          "properties": [
            {
              "type": "Property",
              "start": 3642,
              "end": 3654,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3642,
                "end": 3643,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3645,
                "end": 3654,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3646,
                    "end": 3647,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3649,
                    "end": 3650,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3652,
                    "end": 3653,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3655,
            "end": 3688,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3657,
              "end": 3688,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3659,
                  "end": 3686,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3659,
                    "end": 3660,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3660,
                    "end": 3686,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 3662,
                      "end": 3686,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 3663,
                          "end": 3669
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3671,
                          "end": 3677
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3679,
                          "end": 3685
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3690,
        "end": 3693,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
