__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 3753,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 335,
      "end": 395,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 346,
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
          "start": 347,
          "end": 390,
          "elements": [
            {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 354,
              "end": 359,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 355,
                  "end": 358,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 356,
                      "end": 357,
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
            "start": 360,
            "end": 390,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 362,
              "end": 390,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 363,
                  "end": 369
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 371,
                  "end": 377
                },
                {
                  "type": "TSArrayType",
                  "start": 379,
                  "end": 389,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 379,
                    "end": 387,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 379,
                      "end": 385
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
        "start": 392,
        "end": 395,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 396,
      "end": 440,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 407,
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
          "start": 408,
          "end": 435,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 435,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 411,
              "end": 435,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 413,
                  "end": 423,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 414,
                    "end": 422,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 416,
                      "end": 422
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 424,
                  "end": 433,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 425,
                    "end": 433,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 427,
                      "end": 433
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
        "start": 437,
        "end": 440,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 441,
      "end": 567,
      "id": {
        "type": "Identifier",
        "start": 450,
        "end": 452,
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
          "start": 453,
          "end": 562,
          "properties": [
            {
              "type": "Property",
              "start": 454,
              "end": 455,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 454,
                "end": 455,
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 454,
                "end": 455,
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
              "start": 457,
              "end": 458,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
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
              "start": 460,
              "end": 469,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 463,
                "end": 469,
                "properties": [
                  {
                    "type": "Property",
                    "start": 464,
                    "end": 465,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 465,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 465,
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
                    "start": 467,
                    "end": 468,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
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
              "start": 471,
              "end": 483,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 474,
                "end": 483,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 475,
                    "end": 476,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 478,
                    "end": 479,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
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
            "start": 484,
            "end": 562,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 486,
              "end": 562,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 488,
                  "end": 498,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 488,
                    "end": 489,
                    "name": "j",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 489,
                    "end": 497,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 491,
                      "end": 497
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 499,
                  "end": 509,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 500,
                    "end": 508,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 502,
                      "end": 508
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 510,
                  "end": 539,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 511,
                    "name": "l",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 511,
                    "end": 538,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 513,
                      "end": 538,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 515,
                          "end": 526,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 516,
                            "name": "m",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 516,
                            "end": 525,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 518,
                              "end": 525
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 527,
                          "end": 536,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 527,
                            "end": 528,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 528,
                            "end": 536,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 530,
                              "end": 536
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
                  "start": 540,
                  "end": 560,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "name": "q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 541,
                    "end": 560,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 543,
                      "end": 560,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 544,
                        "end": 557,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 544,
                            "end": 550
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 551,
                            "end": 557
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
        "start": 564,
        "end": 567,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 567,
      "end": 568
    },
    {
      "type": "FunctionDeclaration",
      "start": 569,
      "end": 618,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 580,
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
          "start": 581,
          "end": 613,
          "properties": [
            {
              "type": "Property",
              "start": 582,
              "end": 583,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 582,
                "end": 583,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 582,
                "end": 583,
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
              "start": 585,
              "end": 586,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 585,
                "end": 586,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 585,
                "end": 586,
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
            "start": 587,
            "end": 613,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 589,
              "end": 613,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 591,
                  "end": 601,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 592,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 592,
                    "end": 600,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 594,
                      "end": 600
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 602,
                  "end": 611,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 603,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 603,
                    "end": 611,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 605,
                      "end": 611
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
        "start": 615,
        "end": 618,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 620,
      "end": 644,
      "expression": {
        "type": "CallExpression",
        "start": 620,
        "end": 643,
        "callee": {
          "type": "Identifier",
          "start": 620,
          "end": 622,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 623,
            "end": 642,
            "elements": [
              {
                "type": "Literal",
                "start": 624,
                "end": 625,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 627,
                "end": 628,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 630,
                "end": 641,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 631,
                    "end": 640,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 632,
                        "end": 639,
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
      "start": 645,
      "end": 672,
      "expression": {
        "type": "CallExpression",
        "start": 645,
        "end": 671,
        "callee": {
          "type": "Identifier",
          "start": 645,
          "end": 647,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 648,
            "end": 670,
            "elements": [
              {
                "type": "Literal",
                "start": 649,
                "end": 650,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 652,
                "end": 653,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 655,
                "end": 666,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 656,
                    "end": 665,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 657,
                        "end": 664,
                        "value": "world",
                        "raw": "\"world\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 668,
                "end": 669,
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
      "start": 929,
      "end": 967,
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 940,
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
          "start": 941,
          "end": 962,
          "left": {
            "type": "Identifier",
            "start": 941,
            "end": 942,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrayExpression",
            "start": 945,
            "end": 962,
            "elements": [
              {
                "type": "Identifier",
                "start": 946,
                "end": 955,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 957,
                "end": 961,
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
        "start": 964,
        "end": 967,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 967,
      "end": 968
    },
    {
      "type": "FunctionDeclaration",
      "start": 969,
      "end": 1022,
      "id": {
        "type": "Identifier",
        "start": 978,
        "end": 980,
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
          "start": 981,
          "end": 989,
          "left": {
            "type": "Identifier",
            "start": 981,
            "end": 982,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 985,
            "end": 989,
            "value": null,
            "raw": "null"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 991,
          "end": 1017,
          "left": {
            "type": "Identifier",
            "start": 991,
            "end": 992,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 995,
            "end": 1017,
            "properties": [
              {
                "type": "Property",
                "start": 997,
                "end": 1001,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 997,
                  "end": 998,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1000,
                  "end": 1001,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1003,
                "end": 1015,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1003,
                  "end": 1004,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1006,
                  "end": 1015,
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
        "start": 1019,
        "end": 1022,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1023,
      "end": 1090,
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1034,
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
          "start": 1035,
          "end": 1085,
          "left": {
            "type": "ObjectPattern",
            "start": 1035,
            "end": 1051,
            "properties": [
              {
                "type": "Property",
                "start": 1036,
                "end": 1050,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1036,
                  "end": 1037,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 1039,
                  "end": 1050,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1040,
                      "end": 1041,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1040,
                        "end": 1041,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1040,
                        "end": 1041,
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
                      "start": 1043,
                      "end": 1049,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1043,
                        "end": 1044,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 1046,
                        "end": 1049,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1047,
                            "end": 1048,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1047,
                              "end": 1048,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1047,
                              "end": 1048,
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
            "start": 1054,
            "end": 1085,
            "properties": [
              {
                "type": "Property",
                "start": 1056,
                "end": 1083,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1056,
                  "end": 1057,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1059,
                  "end": 1083,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1061,
                      "end": 1068,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1061,
                        "end": 1062,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1064,
                        "end": 1068,
                        "value": "hi",
                        "raw": "\"hi\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1070,
                      "end": 1081,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1070,
                        "end": 1071,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1073,
                        "end": 1081,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1075,
                            "end": 1079,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1075,
                              "end": 1076,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1078,
                              "end": 1079,
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
        "start": 1087,
        "end": 1090,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1092,
      "end": 1149,
      "id": {
        "type": "Identifier",
        "start": 1102,
        "end": 1104,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1105,
        "end": 1149,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1111,
            "end": 1147,
            "key": {
              "type": "Identifier",
              "start": 1111,
              "end": 1113,
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
                "start": 1114,
                "end": 1115,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1117,
                "end": 1118,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 1120,
                "end": 1128,
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "start": 1123,
                    "end": 1124,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1126,
                    "end": 1127,
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
                "start": 1130,
                "end": 1145,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1131,
                    "end": 1132,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1132,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1132,
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
                    "start": 1134,
                    "end": 1144,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1134,
                      "end": 1135,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1137,
                      "end": 1144,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1139,
                          "end": 1140,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1139,
                            "end": 1140,
                            "name": "q",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1139,
                            "end": 1140,
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
                          "start": 1142,
                          "end": 1143,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1142,
                            "end": 1143,
                            "name": "r",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1142,
                            "end": 1143,
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
      "start": 1151,
      "end": 1208,
      "id": {
        "type": "Identifier",
        "start": 1160,
        "end": 1162,
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
          "start": 1163,
          "end": 1203,
          "left": {
            "type": "ArrayPattern",
            "start": 1163,
            "end": 1172,
            "elements": [
              {
                "type": "Identifier",
                "start": 1164,
                "end": 1165,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1167,
                "end": 1168,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1170,
                "end": 1171,
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
            "start": 1175,
            "end": 1203,
            "elements": [
              {
                "type": "Identifier",
                "start": 1176,
                "end": 1185,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 1187,
                "end": 1191,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 1193,
                "end": 1202,
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
        "start": 1205,
        "end": 1208,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1209,
      "end": 1297,
      "id": {
        "type": "Identifier",
        "start": 1218,
        "end": 1220,
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
          "start": 1221,
          "end": 1292,
          "left": {
            "type": "ArrayPattern",
            "start": 1221,
            "end": 1239,
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 1222,
                "end": 1225,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
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
                "start": 1227,
                "end": 1228,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 1230,
                "end": 1238,
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 1231,
                    "end": 1237,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1232,
                        "end": 1233,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1235,
                        "end": 1236,
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
            "start": 1242,
            "end": 1292,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1243,
                "end": 1254,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1253,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 1256,
                "end": 1265,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 1267,
                "end": 1291,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1268,
                    "end": 1290,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1269,
                        "end": 1278,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1280,
                        "end": 1289,
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
        "start": 1294,
        "end": 1297,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1299,
      "end": 1313,
      "expression": {
        "type": "CallExpression",
        "start": 1299,
        "end": 1312,
        "callee": {
          "type": "Identifier",
          "start": 1299,
          "end": 1301,
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1302,
            "end": 1311,
            "elements": [
              {
                "type": "Literal",
                "start": 1303,
                "end": 1304,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1306,
                "end": 1307,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1309,
                "end": 1310,
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
      "start": 1347,
      "end": 1385,
      "expression": {
        "type": "CallExpression",
        "start": 1347,
        "end": 1384,
        "callee": {
          "type": "Identifier",
          "start": 1347,
          "end": 1349,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1350,
            "end": 1358,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1360,
            "end": 1383,
            "properties": [
              {
                "type": "Property",
                "start": 1362,
                "end": 1368,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1363,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1365,
                  "end": 1368,
                  "value": 200,
                  "raw": "200"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1370,
                "end": 1381,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1370,
                  "end": 1371,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1373,
                  "end": 1381,
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
      "start": 1386,
      "end": 1420,
      "expression": {
        "type": "CallExpression",
        "start": 1386,
        "end": 1419,
        "callee": {
          "type": "Identifier",
          "start": 1386,
          "end": 1388,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1389,
            "end": 1397,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1399,
            "end": 1418,
            "properties": [
              {
                "type": "Property",
                "start": 1401,
                "end": 1407,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1401,
                  "end": 1402,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1404,
                  "end": 1407,
                  "value": 200,
                  "raw": "200"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1409,
                "end": 1416,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1409,
                  "end": 1410,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1412,
                  "end": 1416,
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
      "start": 1421,
      "end": 1442,
      "expression": {
        "type": "CallExpression",
        "start": 1421,
        "end": 1441,
        "callee": {
          "type": "Identifier",
          "start": 1421,
          "end": 1423,
          "name": "b6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1424,
            "end": 1440,
            "elements": [
              {
                "type": "Literal",
                "start": 1425,
                "end": 1433,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 1435,
                "end": 1436,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1438,
                "end": 1439,
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
      "start": 1487,
      "end": 1524,
      "expression": {
        "type": "CallExpression",
        "start": 1487,
        "end": 1523,
        "callee": {
          "type": "Identifier",
          "start": 1487,
          "end": 1489,
          "name": "b7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1490,
            "end": 1522,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1491,
                "end": 1501,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1492,
                    "end": 1500,
                    "value": "string",
                    "raw": "\"string\""
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 1503,
                "end": 1504,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1506,
                "end": 1521,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1507,
                    "end": 1520,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1508,
                        "end": 1512,
                        "value": true,
                        "raw": "true"
                      },
                      {
                        "type": "Literal",
                        "start": 1514,
                        "end": 1519,
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
      "start": 1685,
      "end": 1699,
      "id": {
        "type": "Identifier",
        "start": 1690,
        "end": 1693,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1696,
          "end": 1697,
          "id": {
            "type": "Identifier",
            "start": 1696,
            "end": 1697,
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
        "start": 1694,
        "end": 1699,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1696,
            "end": 1697,
            "id": {
              "type": "Identifier",
              "start": 1696,
              "end": 1697,
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
      "start": 1700,
      "end": 1733,
      "id": {
        "type": "Identifier",
        "start": 1709,
        "end": 1711,
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
          "start": 1712,
          "end": 1728,
          "properties": [
            {
              "type": "Property",
              "start": 1713,
              "end": 1727,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1713,
                "end": 1714,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 1716,
                "end": 1727,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1717,
                    "end": 1718,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1717,
                      "end": 1718,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1717,
                      "end": 1718,
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
                    "start": 1720,
                    "end": 1726,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1720,
                      "end": 1721,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1723,
                      "end": 1726,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1724,
                          "end": 1725,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1724,
                            "end": 1725,
                            "name": "j",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1724,
                            "end": 1725,
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
        "start": 1730,
        "end": 1733,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1734,
      "end": 1766,
      "id": {
        "type": "Identifier",
        "start": 1743,
        "end": 1745,
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
          "start": 1746,
          "end": 1761,
          "left": {
            "type": "ObjectPattern",
            "start": 1746,
            "end": 1749,
            "properties": [
              {
                "type": "Property",
                "start": 1747,
                "end": 1748,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1747,
                  "end": 1748,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1747,
                  "end": 1748,
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
            "start": 1752,
            "end": 1761,
            "properties": [
              {
                "type": "Property",
                "start": 1754,
                "end": 1759,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1754,
                  "end": 1755,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1757,
                  "end": 1759,
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
        "start": 1763,
        "end": 1766,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1767,
      "end": 1792,
      "id": {
        "type": "Identifier",
        "start": 1776,
        "end": 1778,
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
          "start": 1779,
          "end": 1787,
          "properties": [
            {
              "type": "Property",
              "start": 1780,
              "end": 1786,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1780,
                "end": 1781,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 1780,
                "end": 1786,
                "left": {
                  "type": "Identifier",
                  "start": 1780,
                  "end": 1781,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1784,
                  "end": 1786,
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
        "start": 1789,
        "end": 1792,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1793,
      "end": 1851,
      "id": {
        "type": "Identifier",
        "start": 1802,
        "end": 1804,
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
          "start": 1805,
          "end": 1846,
          "left": {
            "type": "ObjectPattern",
            "start": 1805,
            "end": 1829,
            "properties": [
              {
                "type": "Property",
                "start": 1806,
                "end": 1807,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1806,
                  "end": 1807,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1806,
                  "end": 1807,
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
              "start": 1808,
              "end": 1829,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1810,
                "end": 1829,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1812,
                    "end": 1828,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1812,
                      "end": 1813,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1813,
                      "end": 1828,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1815,
                        "end": 1828,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1815,
                            "end": 1821
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1822,
                            "end": 1828
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
            "start": 1832,
            "end": 1846,
            "properties": [
              {
                "type": "Property",
                "start": 1834,
                "end": 1844,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1834,
                  "end": 1835,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1837,
                  "end": 1844,
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
        "start": 1848,
        "end": 1851,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1852,
      "end": 1882,
      "id": {
        "type": "Identifier",
        "start": 1861,
        "end": 1863,
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
          "start": 1864,
          "end": 1877,
          "elements": [
            {
              "type": "Identifier",
              "start": 1865,
              "end": 1866,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1868,
              "end": 1869,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 1871,
              "end": 1876,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1872,
                  "end": 1875,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1873,
                      "end": 1874,
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
        "start": 1879,
        "end": 1882,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1883,
      "end": 1915,
      "id": {
        "type": "Identifier",
        "start": 1892,
        "end": 1894,
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
          "start": 1895,
          "end": 1910,
          "elements": [
            {
              "type": "Identifier",
              "start": 1896,
              "end": 1897,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1899,
              "end": 1900,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 1902,
              "end": 1909,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1903,
                  "end": 1908,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1904,
                      "end": 1907,
                      "left": {
                        "type": "Identifier",
                        "start": 1904,
                        "end": 1905,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1906,
                        "end": 1907,
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
        "start": 1912,
        "end": 1915,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1917,
      "end": 1955,
      "expression": {
        "type": "CallExpression",
        "start": 1917,
        "end": 1954,
        "callee": {
          "type": "Identifier",
          "start": 1917,
          "end": 1919,
          "name": "c0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1920,
            "end": 1953,
            "properties": [
              {
                "type": "Property",
                "start": 1921,
                "end": 1952,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1921,
                  "end": 1922,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1925,
                  "end": 1952,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1927,
                      "end": 1931,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1927,
                        "end": 1928,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1930,
                        "end": 1931,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1933,
                      "end": 1950,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1933,
                        "end": 1934,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1936,
                        "end": 1950,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1938,
                            "end": 1948,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1938,
                              "end": 1939,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1941,
                              "end": 1948,
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
      "start": 2009,
      "end": 2051,
      "expression": {
        "type": "CallExpression",
        "start": 2009,
        "end": 2050,
        "callee": {
          "type": "Identifier",
          "start": 2009,
          "end": 2011,
          "name": "c0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2012,
            "end": 2049,
            "properties": [
              {
                "type": "Property",
                "start": 2013,
                "end": 2048,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2013,
                  "end": 2014,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2017,
                  "end": 2048,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2019,
                      "end": 2030,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2019,
                        "end": 2020,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2022,
                        "end": 2030,
                        "value": "string",
                        "raw": "\"string\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2032,
                      "end": 2046,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2032,
                        "end": 2033,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2035,
                        "end": 2046,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2037,
                            "end": 2044,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2037,
                              "end": 2038,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2040,
                              "end": 2044,
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
      "start": 2102,
      "end": 2107,
      "expression": {
        "type": "CallExpression",
        "start": 2102,
        "end": 2106,
        "callee": {
          "type": "Identifier",
          "start": 2102,
          "end": 2104,
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
      "start": 2151,
      "end": 2163,
      "expression": {
        "type": "CallExpression",
        "start": 2151,
        "end": 2163,
        "callee": {
          "type": "Identifier",
          "start": 2151,
          "end": 2153,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2154,
            "end": 2162,
            "properties": [
              {
                "type": "Property",
                "start": 2156,
                "end": 2160,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2156,
                  "end": 2157,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2159,
                  "end": 2160,
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
      "start": 2201,
      "end": 2208,
      "expression": {
        "type": "CallExpression",
        "start": 2201,
        "end": 2207,
        "callee": {
          "type": "Identifier",
          "start": 2201,
          "end": 2203,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2204,
            "end": 2206,
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
      "start": 2249,
      "end": 2259,
      "expression": {
        "type": "CallExpression",
        "start": 2249,
        "end": 2258,
        "callee": {
          "type": "Identifier",
          "start": 2249,
          "end": 2251,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2252,
            "end": 2257,
            "properties": [
              {
                "type": "Property",
                "start": 2253,
                "end": 2256,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2253,
                  "end": 2254,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2255,
                  "end": 2256,
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
      "start": 2298,
      "end": 2311,
      "expression": {
        "type": "CallExpression",
        "start": 2298,
        "end": 2310,
        "callee": {
          "type": "Identifier",
          "start": 2298,
          "end": 2300,
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2301,
            "end": 2309,
            "properties": [
              {
                "type": "Property",
                "start": 2303,
                "end": 2307,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2303,
                  "end": 2304,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2306,
                  "end": 2307,
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
      "start": 2358,
      "end": 2383,
      "expression": {
        "type": "CallExpression",
        "start": 2358,
        "end": 2382,
        "callee": {
          "type": "Identifier",
          "start": 2358,
          "end": 2360,
          "name": "c5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2361,
            "end": 2381,
            "elements": [
              {
                "type": "Literal",
                "start": 2362,
                "end": 2363,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2365,
                "end": 2366,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2368,
                "end": 2380,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2369,
                    "end": 2379,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2370,
                        "end": 2378,
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
      "start": 2440,
      "end": 2478,
      "expression": {
        "type": "CallExpression",
        "start": 2440,
        "end": 2477,
        "callee": {
          "type": "Identifier",
          "start": 2440,
          "end": 2442,
          "name": "c5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2443,
            "end": 2476,
            "elements": [
              {
                "type": "Literal",
                "start": 2444,
                "end": 2445,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2447,
                "end": 2448,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2450,
                "end": 2462,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2451,
                    "end": 2461,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2452,
                        "end": 2460,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 2464,
                "end": 2469,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 2471,
                "end": 2475,
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
      "start": 2663,
      "end": 2682,
      "id": {
        "type": "Identifier",
        "start": 2672,
        "end": 2674,
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
          "start": 2675,
          "end": 2677,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2679,
        "end": 2682,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2683,
      "end": 2706,
      "id": {
        "type": "Identifier",
        "start": 2692,
        "end": 2694,
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
          "start": 2695,
          "end": 2701,
          "left": {
            "type": "Identifier",
            "start": 2695,
            "end": 2696,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 2699,
            "end": 2701,
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
        "start": 2703,
        "end": 2706,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2708,
      "end": 2783,
      "id": {
        "type": "Identifier",
        "start": 2718,
        "end": 2720,
        "name": "F2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2721,
        "end": 2783,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2727,
            "end": 2742,
            "key": {
              "type": "Identifier",
              "start": 2727,
              "end": 2729,
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
                "start": 2730,
                "end": 2740,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2731,
                    "end": 2732,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2734,
                    "end": 2735,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2737,
                    "end": 2738,
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
            "start": 2747,
            "end": 2762,
            "key": {
              "type": "Identifier",
              "start": 2747,
              "end": 2749,
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
                "start": 2750,
                "end": 2760,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2751,
                    "end": 2752,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2751,
                      "end": 2752,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2751,
                      "end": 2752,
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
                    "start": 2754,
                    "end": 2755,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2754,
                      "end": 2755,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2754,
                      "end": 2755,
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
                    "start": 2757,
                    "end": 2758,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2757,
                      "end": 2758,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2757,
                      "end": 2758,
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
            "start": 2767,
            "end": 2781,
            "key": {
              "type": "Identifier",
              "start": 2767,
              "end": 2769,
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
                "start": 2770,
                "end": 2779,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2771,
                    "end": 2772,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2774,
                    "end": 2775,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2777,
                    "end": 2778,
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
      "start": 2785,
      "end": 2881,
      "id": {
        "type": "Identifier",
        "start": 2791,
        "end": 2793,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2808,
        "end": 2881,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2814,
            "end": 2831,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2814,
              "end": 2825,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2825,
              "end": 2831,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2828,
                "end": 2831,
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
            "start": 2836,
            "end": 2844,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2836,
              "end": 2838,
              "name": "d3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2838,
              "end": 2844,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2841,
                "end": 2844,
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
            "start": 2849,
            "end": 2857,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2849,
              "end": 2851,
              "name": "d4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2851,
              "end": 2857,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2854,
                "end": 2857,
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
            "start": 2862,
            "end": 2879,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2862,
              "end": 2864,
              "name": "e0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2864,
              "end": 2879,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2865,
                  "end": 2874,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2866,
                      "end": 2867,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2869,
                      "end": 2870,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2872,
                      "end": 2873,
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
                "start": 2876,
                "end": 2879,
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
          "start": 2805,
          "end": 2807,
          "expression": {
            "type": "Identifier",
            "start": 2805,
            "end": 2807,
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
      "start": 2883,
      "end": 2975,
      "id": {
        "type": "Identifier",
        "start": 2889,
        "end": 2891,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2906,
        "end": 2975,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2912,
            "end": 2929,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2912,
              "end": 2914,
              "name": "d3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2914,
              "end": 2929,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2915,
                  "end": 2924,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2916,
                      "end": 2917,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2919,
                      "end": 2920,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2922,
                      "end": 2923,
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
                "start": 2926,
                "end": 2929,
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
            "start": 2934,
            "end": 2951,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2934,
              "end": 2936,
              "name": "d4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2936,
              "end": 2951,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2937,
                  "end": 2946,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2938,
                      "end": 2939,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2938,
                        "end": 2939,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2938,
                        "end": 2939,
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
                      "start": 2941,
                      "end": 2942,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2941,
                        "end": 2942,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2941,
                        "end": 2942,
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
                      "start": 2944,
                      "end": 2945,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2944,
                        "end": 2945,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2944,
                        "end": 2945,
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
                "start": 2948,
                "end": 2951,
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
            "start": 2956,
            "end": 2973,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2956,
              "end": 2958,
              "name": "e0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2958,
              "end": 2973,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2959,
                  "end": 2968,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2960,
                      "end": 2961,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2963,
                      "end": 2964,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2966,
                      "end": 2967,
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
                "start": 2970,
                "end": 2973,
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
          "start": 2903,
          "end": 2905,
          "expression": {
            "type": "Identifier",
            "start": 2903,
            "end": 2905,
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
      "start": 2978,
      "end": 3018,
      "id": {
        "type": "Identifier",
        "start": 2987,
        "end": 2989,
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
          "start": 2990,
          "end": 3013,
          "left": {
            "type": "ObjectPattern",
            "start": 2990,
            "end": 2996,
            "properties": [
              {
                "type": "Property",
                "start": 2991,
                "end": 2992,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2991,
                  "end": 2992,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2991,
                  "end": 2992,
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
                "start": 2994,
                "end": 2995,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2994,
                  "end": 2995,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2994,
                  "end": 2995,
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
            "start": 2999,
            "end": 3013,
            "properties": [
              {
                "type": "Property",
                "start": 3001,
                "end": 3005,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3001,
                  "end": 3002,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3004,
                  "end": 3005,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3007,
                "end": 3011,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3007,
                  "end": 3008,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3010,
                  "end": 3011,
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
        "start": 3015,
        "end": 3018,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3019,
      "end": 3024,
      "expression": {
        "type": "CallExpression",
        "start": 3019,
        "end": 3023,
        "callee": {
          "type": "Identifier",
          "start": 3019,
          "end": 3021,
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
      "start": 3392,
      "end": 3420,
      "id": {
        "type": "Identifier",
        "start": 3401,
        "end": 3403,
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
          "start": 3404,
          "end": 3415,
          "properties": [
            {
              "type": "Property",
              "start": 3405,
              "end": 3414,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3405,
                "end": 3406,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3408,
                "end": 3414,
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
        "start": 3417,
        "end": 3420,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3451,
      "end": 3486,
      "id": {
        "type": "Identifier",
        "start": 3460,
        "end": 3462,
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
          "start": 3463,
          "end": 3481,
          "properties": [
            {
              "type": "Property",
              "start": 3464,
              "end": 3465,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3464,
                "end": 3465,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3464,
                "end": 3465,
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
            "start": 3466,
            "end": 3481,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3468,
              "end": 3481,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3470,
                  "end": 3479,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3470,
                    "end": 3471,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3471,
                    "end": 3479,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3473,
                      "end": 3479
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
        "start": 3483,
        "end": 3486,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3508,
      "end": 3544,
      "id": {
        "type": "Identifier",
        "start": 3517,
        "end": 3519,
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
          "start": 3520,
          "end": 3539,
          "properties": [
            {
              "type": "Property",
              "start": 3521,
              "end": 3522,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3521,
                "end": 3522,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3521,
                "end": 3522,
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
            "start": 3523,
            "end": 3539,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3525,
              "end": 3539,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3527,
                  "end": 3537,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3527,
                    "end": 3528,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3529,
                    "end": 3537,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3531,
                      "end": 3537
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
        "start": 3541,
        "end": 3544,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3583,
      "end": 3625,
      "id": {
        "type": "Identifier",
        "start": 3592,
        "end": 3594,
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
          "start": 3595,
          "end": 3620,
          "properties": [
            {
              "type": "Property",
              "start": 3596,
              "end": 3618,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3596,
                "end": 3597,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3599,
                "end": 3618,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3600,
                    "end": 3606,
                    "name": "number",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3607,
                    "end": 3613,
                    "name": "string",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3614,
                    "end": 3617,
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
        "start": 3622,
        "end": 3625,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3657,
      "end": 3721,
      "id": {
        "type": "Identifier",
        "start": 3666,
        "end": 3668,
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
          "start": 3669,
          "end": 3716,
          "properties": [
            {
              "type": "Property",
              "start": 3670,
              "end": 3682,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3670,
                "end": 3671,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3673,
                "end": 3682,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3674,
                    "end": 3675,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3677,
                    "end": 3678,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3680,
                    "end": 3681,
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
            "start": 3683,
            "end": 3716,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3685,
              "end": 3716,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3687,
                  "end": 3714,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3687,
                    "end": 3688,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3688,
                    "end": 3714,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 3690,
                      "end": 3714,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 3691,
                          "end": 3697
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3699,
                          "end": 3705
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3707,
                          "end": 3713
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
        "start": 3718,
        "end": 3721,
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
