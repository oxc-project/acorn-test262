__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 338,
  "end": 3663,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 338,
      "end": 398,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 349,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 350,
          "end": 393,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 357,
              "end": 362,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 358,
                  "end": 361,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 363,
            "end": 393,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 365,
              "end": 393,
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
                  "start": 382,
                  "end": 392,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 382,
                    "end": 390,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 382,
                      "end": 388
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 395,
        "end": 398,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 399,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 410,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 411,
          "end": 438,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 412,
            "end": 438,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 414,
              "end": 438,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 416,
                  "end": 426,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 417,
                    "end": 425,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 419,
                      "end": 425
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 427,
                  "end": 436,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 428,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 428,
                    "end": 436,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 430,
                      "end": 436
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 440,
        "end": 443,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 444,
      "end": 570,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 455,
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 456,
          "end": 565,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 457,
              "end": 458,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 460,
              "end": 461,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 463,
              "end": 472,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectPattern",
                "start": 466,
                "end": 472,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 467,
                    "end": 468,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 470,
                    "end": 471,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 471,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 471,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 474,
              "end": 486,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 477,
                "end": 486,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 478,
                    "end": 479,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 484,
                    "end": 485,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 487,
            "end": 565,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 489,
              "end": 565,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 491,
                  "end": 501,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 491,
                    "end": 492,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 492,
                    "end": 500,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 494,
                      "end": 500
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 502,
                  "end": 512,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 503,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 503,
                    "end": 511,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 505,
                      "end": 511
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 513,
                  "end": 542,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 514,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 514,
                    "end": 541,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 516,
                      "end": 541,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 518,
                          "end": 529,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 519,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 519,
                            "end": 528,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 521,
                              "end": 528
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 530,
                          "end": 539,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 530,
                            "end": 531,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 531,
                            "end": 539,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 533,
                              "end": 539
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
                  "start": 543,
                  "end": 563,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 544,
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 544,
                    "end": 563,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 546,
                      "end": 563,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 547,
                        "end": 560,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 567,
        "end": 570,
        "body": []
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 570,
      "end": 571
    },
    {
      "type": "FunctionDeclaration",
      "start": 572,
      "end": 621,
      "id": {
        "type": "Identifier",
        "start": 581,
        "end": 583,
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 584,
          "end": 616,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 585,
              "end": 586,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 585,
                "end": 586,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 585,
                "end": 586,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 588,
              "end": 589,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 590,
            "end": 616,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 592,
              "end": 616,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 594,
                  "end": 604,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 595,
                    "end": 603,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 597,
                      "end": 603
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 605,
                  "end": 614,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 606,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 606,
                    "end": 614,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 608,
                      "end": 614
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 618,
        "end": 621,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 623,
      "end": 647,
      "expression": {
        "type": "CallExpression",
        "start": 623,
        "end": 646,
        "callee": {
          "type": "Identifier",
          "start": 623,
          "end": 625,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 626,
            "end": 645,
            "elements": [
              {
                "type": "Literal",
                "start": 627,
                "end": 628,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 630,
                "end": 631,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 633,
                "end": 644,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 634,
                    "end": 643,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 635,
                        "end": 642,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 648,
      "end": 675,
      "expression": {
        "type": "CallExpression",
        "start": 648,
        "end": 674,
        "callee": {
          "type": "Identifier",
          "start": 648,
          "end": 650,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 651,
            "end": 673,
            "elements": [
              {
                "type": "Literal",
                "start": 652,
                "end": 653,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 655,
                "end": 656,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 658,
                "end": 669,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 659,
                    "end": 668,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 660,
                        "end": 667,
                        "value": "world",
                        "raw": "\"world\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 671,
                "end": 672,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 933,
      "end": 971,
      "id": {
        "type": "Identifier",
        "start": 942,
        "end": 944,
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 945,
          "end": 966,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 945,
            "end": 946,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 949,
            "end": 966,
            "elements": [
              {
                "type": "Identifier",
                "start": 950,
                "end": 959,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 961,
                "end": 965,
                "value": null,
                "raw": "null"
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 968,
        "end": 971,
        "body": []
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 971,
      "end": 972
    },
    {
      "type": "FunctionDeclaration",
      "start": 973,
      "end": 1026,
      "id": {
        "type": "Identifier",
        "start": 982,
        "end": 984,
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 985,
          "end": 993,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 985,
            "end": 986,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 989,
            "end": 993,
            "value": null,
            "raw": "null"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 995,
          "end": 1021,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 995,
            "end": 996,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 999,
            "end": 1021,
            "properties": [
              {
                "type": "Property",
                "start": 1001,
                "end": 1005,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1001,
                  "end": 1002,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1004,
                  "end": 1005,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1007,
                "end": 1019,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1007,
                  "end": 1008,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 1010,
                  "end": 1019,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1023,
        "end": 1026,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1027,
      "end": 1094,
      "id": {
        "type": "Identifier",
        "start": 1036,
        "end": 1038,
        "decorators": [],
        "name": "b3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1039,
          "end": 1089,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 1039,
            "end": 1055,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 1040,
                "end": 1054,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1040,
                  "end": 1041,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 1043,
                  "end": 1054,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1044,
                      "end": 1045,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1044,
                        "end": 1045,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1044,
                        "end": 1045,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1047,
                      "end": 1053,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1047,
                        "end": 1048,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 1050,
                        "end": 1053,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1051,
                            "end": 1052,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1051,
                              "end": 1052,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1051,
                              "end": 1052,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 1058,
            "end": 1089,
            "properties": [
              {
                "type": "Property",
                "start": 1060,
                "end": 1087,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1060,
                  "end": 1061,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1063,
                  "end": 1087,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1065,
                      "end": 1072,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1065,
                        "end": 1066,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1068,
                        "end": 1072,
                        "value": "hi",
                        "raw": "\"hi\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1074,
                      "end": 1085,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1074,
                        "end": 1075,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1077,
                        "end": 1085,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1079,
                            "end": 1083,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1079,
                              "end": 1080,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1082,
                              "end": 1083,
                              "value": 1,
                              "raw": "1"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1091,
        "end": 1094,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1096,
      "end": 1153,
      "id": {
        "type": "Identifier",
        "start": 1106,
        "end": 1108,
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1109,
        "end": 1153,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1115,
            "end": 1151,
            "key": {
              "type": "Identifier",
              "start": 1115,
              "end": 1117,
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1118,
                "end": 1119,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1121,
                "end": 1122,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 1124,
                "end": 1132,
                "decorators": [],
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "start": 1127,
                    "end": 1128,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1130,
                    "end": 1131,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectPattern",
                "start": 1134,
                "end": 1149,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 1135,
                    "end": 1136,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1135,
                      "end": 1136,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1135,
                      "end": 1136,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1138,
                    "end": 1148,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1138,
                      "end": 1139,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1141,
                      "end": 1148,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1143,
                          "end": 1144,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1143,
                            "end": 1144,
                            "decorators": [],
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1143,
                            "end": 1144,
                            "decorators": [],
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1146,
                          "end": 1147,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1146,
                            "end": 1147,
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1146,
                            "end": 1147,
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
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
      "start": 1155,
      "end": 1212,
      "id": {
        "type": "Identifier",
        "start": 1164,
        "end": 1166,
        "decorators": [],
        "name": "b6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1167,
          "end": 1207,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 1167,
            "end": 1176,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1168,
                "end": 1169,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1171,
                "end": 1172,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1174,
                "end": 1175,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 1179,
            "end": 1207,
            "elements": [
              {
                "type": "Identifier",
                "start": 1180,
                "end": 1189,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1191,
                "end": 1195,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 1197,
                "end": 1206,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1209,
        "end": 1212,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1213,
      "end": 1301,
      "id": {
        "type": "Identifier",
        "start": 1222,
        "end": 1224,
        "decorators": [],
        "name": "b7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1225,
          "end": 1296,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 1225,
            "end": 1243,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 1226,
                "end": 1229,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1227,
                    "end": 1228,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1231,
                "end": 1232,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 1234,
                "end": 1242,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 1235,
                    "end": 1241,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1236,
                        "end": 1237,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1239,
                        "end": 1240,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 1246,
            "end": 1296,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1247,
                "end": 1258,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1257,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 1260,
                "end": 1269,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 1271,
                "end": 1295,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1272,
                    "end": 1294,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1273,
                        "end": 1282,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1284,
                        "end": 1293,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1298,
        "end": 1301,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1303,
      "end": 1317,
      "expression": {
        "type": "CallExpression",
        "start": 1303,
        "end": 1316,
        "callee": {
          "type": "Identifier",
          "start": 1303,
          "end": 1305,
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1306,
            "end": 1315,
            "elements": [
              {
                "type": "Literal",
                "start": 1307,
                "end": 1308,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1310,
                "end": 1311,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1313,
                "end": 1314,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1351,
      "end": 1389,
      "expression": {
        "type": "CallExpression",
        "start": 1351,
        "end": 1388,
        "callee": {
          "type": "Identifier",
          "start": 1351,
          "end": 1353,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1354,
            "end": 1362,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1364,
            "end": 1387,
            "properties": [
              {
                "type": "Property",
                "start": 1366,
                "end": 1372,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1366,
                  "end": 1367,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1369,
                  "end": 1372,
                  "value": 200,
                  "raw": "200"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1374,
                "end": 1385,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1374,
                  "end": 1375,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1377,
                  "end": 1385,
                  "value": "string",
                  "raw": "\"string\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1390,
      "end": 1424,
      "expression": {
        "type": "CallExpression",
        "start": 1390,
        "end": 1423,
        "callee": {
          "type": "Identifier",
          "start": 1390,
          "end": 1392,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1393,
            "end": 1401,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1403,
            "end": 1422,
            "properties": [
              {
                "type": "Property",
                "start": 1405,
                "end": 1411,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1405,
                  "end": 1406,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1408,
                  "end": 1411,
                  "value": 200,
                  "raw": "200"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1413,
                "end": 1420,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1414,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1416,
                  "end": 1420,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1557,
      "end": 1571,
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1565,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1566,
        "end": 1571,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1568,
            "end": 1569,
            "id": {
              "type": "Identifier",
              "start": 1568,
              "end": 1569,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1572,
      "end": 1605,
      "id": {
        "type": "Identifier",
        "start": 1581,
        "end": 1583,
        "decorators": [],
        "name": "c0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1584,
          "end": 1600,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 1585,
              "end": 1599,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1585,
                "end": 1586,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectPattern",
                "start": 1588,
                "end": 1599,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 1589,
                    "end": 1590,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1589,
                      "end": 1590,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1589,
                      "end": 1590,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1592,
                    "end": 1598,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1592,
                      "end": 1593,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1595,
                      "end": 1598,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1596,
                          "end": 1597,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1596,
                            "end": 1597,
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1596,
                            "end": 1597,
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1602,
        "end": 1605,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1606,
      "end": 1638,
      "id": {
        "type": "Identifier",
        "start": 1615,
        "end": 1617,
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1618,
          "end": 1633,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 1618,
            "end": 1621,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 1619,
                "end": 1620,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1619,
                  "end": 1620,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 1619,
                  "end": 1620,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 1624,
            "end": 1633,
            "properties": [
              {
                "type": "Property",
                "start": 1626,
                "end": 1631,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1626,
                  "end": 1627,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1629,
                  "end": 1631,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1635,
        "end": 1638,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1639,
      "end": 1664,
      "id": {
        "type": "Identifier",
        "start": 1648,
        "end": 1650,
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1651,
          "end": 1659,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 1652,
              "end": 1658,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1652,
                "end": 1653,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 1652,
                "end": 1658,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1652,
                  "end": 1653,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 1656,
                  "end": 1658,
                  "value": 10,
                  "raw": "10"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1661,
        "end": 1664,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1665,
      "end": 1723,
      "id": {
        "type": "Identifier",
        "start": 1674,
        "end": 1676,
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 1677,
          "end": 1718,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 1677,
            "end": 1701,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 1678,
                "end": 1679,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1679,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1679,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1680,
              "end": 1701,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1682,
                "end": 1701,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1684,
                    "end": 1700,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1684,
                      "end": 1685,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1685,
                      "end": 1700,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1687,
                        "end": 1700,
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
            "start": 1704,
            "end": 1718,
            "properties": [
              {
                "type": "Property",
                "start": 1706,
                "end": 1716,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1706,
                  "end": 1707,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1709,
                  "end": 1716,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1720,
        "end": 1723,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1724,
      "end": 1754,
      "id": {
        "type": "Identifier",
        "start": 1733,
        "end": 1735,
        "decorators": [],
        "name": "c5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 1736,
          "end": 1749,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1737,
              "end": 1738,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1740,
              "end": 1741,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 1743,
              "end": 1748,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1744,
                  "end": 1747,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1745,
                      "end": 1746,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1751,
        "end": 1754,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1755,
      "end": 1787,
      "id": {
        "type": "Identifier",
        "start": 1764,
        "end": 1766,
        "decorators": [],
        "name": "c6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 1767,
          "end": 1782,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1768,
              "end": 1769,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1771,
              "end": 1772,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 1774,
              "end": 1781,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1775,
                  "end": 1780,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1776,
                      "end": 1779,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1776,
                        "end": 1777,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1778,
                        "end": 1779,
                        "value": 1,
                        "raw": "1"
                      },
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1784,
        "end": 1787,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1789,
      "end": 1827,
      "expression": {
        "type": "CallExpression",
        "start": 1789,
        "end": 1826,
        "callee": {
          "type": "Identifier",
          "start": 1789,
          "end": 1791,
          "decorators": [],
          "name": "c0",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1792,
            "end": 1825,
            "properties": [
              {
                "type": "Property",
                "start": 1793,
                "end": 1824,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1793,
                  "end": 1794,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1797,
                  "end": 1824,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1799,
                      "end": 1803,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1799,
                        "end": 1800,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1802,
                        "end": 1803,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1805,
                      "end": 1822,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1805,
                        "end": 1806,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1808,
                        "end": 1822,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1810,
                            "end": 1820,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1810,
                              "end": 1811,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1813,
                              "end": 1820,
                              "value": "world",
                              "raw": "\"world\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1881,
      "end": 1923,
      "expression": {
        "type": "CallExpression",
        "start": 1881,
        "end": 1922,
        "callee": {
          "type": "Identifier",
          "start": 1881,
          "end": 1883,
          "decorators": [],
          "name": "c0",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1884,
            "end": 1921,
            "properties": [
              {
                "type": "Property",
                "start": 1885,
                "end": 1920,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1885,
                  "end": 1886,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1889,
                  "end": 1920,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1891,
                      "end": 1902,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1891,
                        "end": 1892,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1894,
                        "end": 1902,
                        "value": "string",
                        "raw": "\"string\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1904,
                      "end": 1918,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1904,
                        "end": 1905,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1907,
                        "end": 1918,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1909,
                            "end": 1916,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1909,
                              "end": 1910,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1912,
                              "end": 1916,
                              "value": true,
                              "raw": "true"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1974,
      "end": 1979,
      "expression": {
        "type": "CallExpression",
        "start": 1974,
        "end": 1978,
        "callee": {
          "type": "Identifier",
          "start": 1974,
          "end": 1976,
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2023,
      "end": 2035,
      "expression": {
        "type": "CallExpression",
        "start": 2023,
        "end": 2035,
        "callee": {
          "type": "Identifier",
          "start": 2023,
          "end": 2025,
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2026,
            "end": 2034,
            "properties": [
              {
                "type": "Property",
                "start": 2028,
                "end": 2032,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2028,
                  "end": 2029,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2031,
                  "end": 2032,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2074,
      "end": 2081,
      "expression": {
        "type": "CallExpression",
        "start": 2074,
        "end": 2080,
        "callee": {
          "type": "Identifier",
          "start": 2074,
          "end": 2076,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2077,
            "end": 2079,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2122,
      "end": 2132,
      "expression": {
        "type": "CallExpression",
        "start": 2122,
        "end": 2131,
        "callee": {
          "type": "Identifier",
          "start": 2122,
          "end": 2124,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2125,
            "end": 2130,
            "properties": [
              {
                "type": "Property",
                "start": 2126,
                "end": 2129,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2126,
                  "end": 2127,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2128,
                  "end": 2129,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2171,
      "end": 2184,
      "expression": {
        "type": "CallExpression",
        "start": 2171,
        "end": 2183,
        "callee": {
          "type": "Identifier",
          "start": 2171,
          "end": 2173,
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2174,
            "end": 2182,
            "properties": [
              {
                "type": "Property",
                "start": 2176,
                "end": 2180,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2176,
                  "end": 2177,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2179,
                  "end": 2180,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2231,
      "end": 2256,
      "expression": {
        "type": "CallExpression",
        "start": 2231,
        "end": 2255,
        "callee": {
          "type": "Identifier",
          "start": 2231,
          "end": 2233,
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2234,
            "end": 2254,
            "elements": [
              {
                "type": "Literal",
                "start": 2235,
                "end": 2236,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2238,
                "end": 2239,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2241,
                "end": 2253,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2242,
                    "end": 2252,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2243,
                        "end": 2251,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2313,
      "end": 2351,
      "expression": {
        "type": "CallExpression",
        "start": 2313,
        "end": 2350,
        "callee": {
          "type": "Identifier",
          "start": 2313,
          "end": 2315,
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2316,
            "end": 2349,
            "elements": [
              {
                "type": "Literal",
                "start": 2317,
                "end": 2318,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2320,
                "end": 2321,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2323,
                "end": 2335,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2324,
                    "end": 2334,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2325,
                        "end": 2333,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 2337,
                "end": 2342,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 2344,
                "end": 2348,
                "value": true,
                "raw": "true"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2537,
      "end": 2612,
      "id": {
        "type": "Identifier",
        "start": 2547,
        "end": 2549,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2550,
        "end": 2612,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2556,
            "end": 2571,
            "key": {
              "type": "Identifier",
              "start": 2556,
              "end": 2558,
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 2559,
                "end": 2569,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2560,
                    "end": 2561,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2563,
                    "end": 2564,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2566,
                    "end": 2567,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
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
            "start": 2576,
            "end": 2591,
            "key": {
              "type": "Identifier",
              "start": 2576,
              "end": 2578,
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 2579,
                "end": 2589,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 2580,
                    "end": 2581,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2580,
                      "end": 2581,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2580,
                      "end": 2581,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2583,
                    "end": 2584,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2583,
                      "end": 2584,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2583,
                      "end": 2584,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2586,
                    "end": 2587,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2586,
                      "end": 2587,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2586,
                      "end": 2587,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
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
            "start": 2596,
            "end": 2610,
            "key": {
              "type": "Identifier",
              "start": 2596,
              "end": 2598,
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 2599,
                "end": 2608,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2600,
                    "end": 2601,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2603,
                    "end": 2604,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2606,
                    "end": 2607,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
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
      "start": 2614,
      "end": 2710,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2620,
        "end": 2622,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2634,
          "end": 2636,
          "expression": {
            "type": "Identifier",
            "start": 2634,
            "end": 2636,
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 2637,
        "end": 2710,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2643,
            "end": 2660,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2643,
              "end": 2654,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2654,
              "end": 2660,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2657,
                "end": 2660,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2665,
            "end": 2673,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2665,
              "end": 2667,
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2667,
              "end": 2673,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2670,
                "end": 2673,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2678,
            "end": 2686,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2678,
              "end": 2680,
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2680,
              "end": 2686,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2683,
                "end": 2686,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2691,
            "end": 2708,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2691,
              "end": 2693,
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2693,
              "end": 2708,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2694,
                  "end": 2703,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2695,
                      "end": 2696,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2698,
                      "end": 2699,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2701,
                      "end": 2702,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2705,
                "end": 2708,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2712,
      "end": 2804,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2718,
        "end": 2720,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2732,
          "end": 2734,
          "expression": {
            "type": "Identifier",
            "start": 2732,
            "end": 2734,
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 2735,
        "end": 2804,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2741,
            "end": 2758,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2741,
              "end": 2743,
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2743,
              "end": 2758,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2744,
                  "end": 2753,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2745,
                      "end": 2746,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2748,
                      "end": 2749,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2751,
                      "end": 2752,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2755,
                "end": 2758,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2763,
            "end": 2780,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2763,
              "end": 2765,
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2765,
              "end": 2780,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2766,
                  "end": 2775,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2767,
                      "end": 2768,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2767,
                        "end": 2768,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2767,
                        "end": 2768,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2770,
                      "end": 2771,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2770,
                        "end": 2771,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2770,
                        "end": 2771,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2773,
                      "end": 2774,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2773,
                        "end": 2774,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2773,
                        "end": 2774,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2777,
                "end": 2780,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2785,
            "end": 2802,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2785,
              "end": 2787,
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2787,
              "end": 2802,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2788,
                  "end": 2797,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2789,
                      "end": 2790,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2792,
                      "end": 2793,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2795,
                      "end": 2796,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2799,
                "end": 2802,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2806,
      "end": 2846,
      "id": {
        "type": "Identifier",
        "start": 2815,
        "end": 2817,
        "decorators": [],
        "name": "d5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 2818,
          "end": 2841,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 2818,
            "end": 2824,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 2819,
                "end": 2820,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2819,
                  "end": 2820,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 2819,
                  "end": 2820,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 2822,
                "end": 2823,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2822,
                  "end": 2823,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 2822,
                  "end": 2823,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 2827,
            "end": 2841,
            "properties": [
              {
                "type": "Property",
                "start": 2829,
                "end": 2833,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2829,
                  "end": 2830,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2832,
                  "end": 2833,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 2835,
                "end": 2839,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2835,
                  "end": 2836,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2838,
                  "end": 2839,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2843,
        "end": 2846,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2847,
      "end": 2852,
      "expression": {
        "type": "CallExpression",
        "start": 2847,
        "end": 2851,
        "callee": {
          "type": "Identifier",
          "start": 2847,
          "end": 2849,
          "decorators": [],
          "name": "d5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3220,
      "end": 3248,
      "id": {
        "type": "Identifier",
        "start": 3229,
        "end": 3231,
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3232,
          "end": 3243,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3233,
              "end": 3242,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3233,
                "end": 3234,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3236,
                "end": 3242,
                "decorators": [],
                "name": "number",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3245,
        "end": 3248,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3279,
      "end": 3314,
      "id": {
        "type": "Identifier",
        "start": 3288,
        "end": 3290,
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3291,
          "end": 3309,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3292,
              "end": 3293,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3292,
                "end": 3293,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3292,
                "end": 3293,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3294,
            "end": 3309,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3296,
              "end": 3309,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3298,
                  "end": 3307,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3298,
                    "end": 3299,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3299,
                    "end": 3307,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3301,
                      "end": 3307
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3311,
        "end": 3314,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3336,
      "end": 3372,
      "id": {
        "type": "Identifier",
        "start": 3345,
        "end": 3347,
        "decorators": [],
        "name": "e3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3348,
          "end": 3367,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3349,
              "end": 3350,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3349,
                "end": 3350,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3349,
                "end": 3350,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3351,
            "end": 3367,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3353,
              "end": 3367,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3355,
                  "end": 3365,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3355,
                    "end": 3356,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3357,
                    "end": 3365,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3359,
                      "end": 3365
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3369,
        "end": 3372,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3411,
      "end": 3453,
      "id": {
        "type": "Identifier",
        "start": 3420,
        "end": 3422,
        "decorators": [],
        "name": "e4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3423,
          "end": 3448,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3424,
              "end": 3446,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3424,
                "end": 3425,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3427,
                "end": 3446,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3428,
                    "end": 3434,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3435,
                    "end": 3441,
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3442,
                    "end": 3445,
                    "decorators": [],
                    "name": "any",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3450,
        "end": 3453,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3485,
      "end": 3549,
      "id": {
        "type": "Identifier",
        "start": 3494,
        "end": 3496,
        "decorators": [],
        "name": "e5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3497,
          "end": 3544,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3498,
              "end": 3510,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3498,
                "end": 3499,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3501,
                "end": 3510,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3502,
                    "end": 3503,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3505,
                    "end": 3506,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3508,
                    "end": 3509,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3511,
            "end": 3544,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3513,
              "end": 3544,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3515,
                  "end": 3542,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3515,
                    "end": 3516,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3516,
                    "end": 3542,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 3518,
                      "end": 3542,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3546,
        "end": 3549,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3582,
      "end": 3628,
      "id": {
        "type": "Identifier",
        "start": 3591,
        "end": 3593,
        "decorators": [],
        "name": "e6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 3594,
          "end": 3623,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3595,
              "end": 3622,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3595,
                "end": 3596,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3598,
                "end": 3622,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3599,
                    "end": 3605,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3607,
                    "end": 3613,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3615,
                    "end": 3621,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3625,
        "end": 3628,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
