__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 339,
  "end": 3665,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 339,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 350,
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
          "start": 351,
          "end": 394,
          "elements": [
            {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 358,
              "end": 363,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 359,
                  "end": 362,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 360,
                      "end": 361,
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
            "start": 364,
            "end": 394,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 366,
              "end": 394,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 367,
                  "end": 373
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 375,
                  "end": 381
                },
                {
                  "type": "TSArrayType",
                  "start": 383,
                  "end": 393,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 383,
                    "end": 391,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 383,
                      "end": 389
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
        "start": 396,
        "end": 399,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 400,
      "end": 444,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 411,
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
          "start": 412,
          "end": 439,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 439,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 415,
              "end": 439,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 417,
                  "end": 427,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 418,
                    "end": 426,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 420,
                      "end": 426
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 428,
                  "end": 437,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 429,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 437,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 431,
                      "end": 437
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
        "start": 441,
        "end": 444,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 445,
      "end": 571,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 456,
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
          "start": 457,
          "end": 566,
          "properties": [
            {
              "type": "Property",
              "start": 458,
              "end": 459,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 458,
                "end": 459,
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 458,
                "end": 459,
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
              "start": 461,
              "end": 462,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
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
              "start": 464,
              "end": 473,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 467,
                "end": 473,
                "properties": [
                  {
                    "type": "Property",
                    "start": 468,
                    "end": 469,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 469,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 469,
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
                    "start": 471,
                    "end": 472,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 472,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 472,
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
              "start": 475,
              "end": 487,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "name": "q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 478,
                "end": 487,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 479,
                    "end": 480,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 482,
                    "end": 483,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 485,
                    "end": 486,
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
            "start": 488,
            "end": 566,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 490,
              "end": 566,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 492,
                  "end": 502,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 493,
                    "name": "j",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 495,
                      "end": 501
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 503,
                  "end": 513,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 504,
                    "end": 512,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 506,
                      "end": 512
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 514,
                  "end": 543,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 515,
                    "name": "l",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 515,
                    "end": 542,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 517,
                      "end": 542,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 519,
                          "end": 530,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 519,
                            "end": 520,
                            "name": "m",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 520,
                            "end": 529,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 522,
                              "end": 529
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 531,
                          "end": 540,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 531,
                            "end": 532,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 532,
                            "end": 540,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 534,
                              "end": 540
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
                  "start": 544,
                  "end": 564,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 544,
                    "end": 545,
                    "name": "q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 545,
                    "end": 564,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 547,
                      "end": 564,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 548,
                        "end": 561,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 548,
                            "end": 554
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 555,
                            "end": 561
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
        "start": 568,
        "end": 571,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 571,
      "end": 572
    },
    {
      "type": "FunctionDeclaration",
      "start": 573,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 584,
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
          "start": 585,
          "end": 617,
          "properties": [
            {
              "type": "Property",
              "start": 586,
              "end": 587,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
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
              "start": 589,
              "end": 590,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 589,
                "end": 590,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 589,
                "end": 590,
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
            "start": 591,
            "end": 617,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 593,
              "end": 617,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 595,
                  "end": 605,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 595,
                    "end": 596,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 596,
                    "end": 604,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 598,
                      "end": 604
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 606,
                  "end": 615,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 606,
                    "end": 607,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 607,
                    "end": 615,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 609,
                      "end": 615
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
        "start": 619,
        "end": 622,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 624,
      "end": 648,
      "expression": {
        "type": "CallExpression",
        "start": 624,
        "end": 647,
        "callee": {
          "type": "Identifier",
          "start": 624,
          "end": 626,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 627,
            "end": 646,
            "elements": [
              {
                "type": "Literal",
                "start": 628,
                "end": 629,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 631,
                "end": 632,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 634,
                "end": 645,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 635,
                    "end": 644,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 636,
                        "end": 643,
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
      "start": 649,
      "end": 676,
      "expression": {
        "type": "CallExpression",
        "start": 649,
        "end": 675,
        "callee": {
          "type": "Identifier",
          "start": 649,
          "end": 651,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 652,
            "end": 674,
            "elements": [
              {
                "type": "Literal",
                "start": 653,
                "end": 654,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 656,
                "end": 657,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 659,
                "end": 670,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 660,
                    "end": 669,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 661,
                        "end": 668,
                        "value": "world",
                        "raw": "\"world\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 672,
                "end": 673,
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
      "start": 934,
      "end": 972,
      "id": {
        "type": "Identifier",
        "start": 943,
        "end": 945,
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
          "start": 946,
          "end": 967,
          "left": {
            "type": "Identifier",
            "start": 946,
            "end": 947,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrayExpression",
            "start": 950,
            "end": 967,
            "elements": [
              {
                "type": "Identifier",
                "start": 951,
                "end": 960,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 962,
                "end": 966,
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
        "start": 969,
        "end": 972,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 972,
      "end": 973
    },
    {
      "type": "FunctionDeclaration",
      "start": 974,
      "end": 1027,
      "id": {
        "type": "Identifier",
        "start": 983,
        "end": 985,
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
          "start": 986,
          "end": 994,
          "left": {
            "type": "Identifier",
            "start": 986,
            "end": 987,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 990,
            "end": 994,
            "value": null,
            "raw": "null"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 996,
          "end": 1022,
          "left": {
            "type": "Identifier",
            "start": 996,
            "end": 997,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 1000,
            "end": 1022,
            "properties": [
              {
                "type": "Property",
                "start": 1002,
                "end": 1006,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1002,
                  "end": 1003,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1005,
                  "end": 1006,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1008,
                "end": 1020,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1008,
                  "end": 1009,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1011,
                  "end": 1020,
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
        "start": 1024,
        "end": 1027,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1028,
      "end": 1095,
      "id": {
        "type": "Identifier",
        "start": 1037,
        "end": 1039,
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
          "start": 1040,
          "end": 1090,
          "left": {
            "type": "ObjectPattern",
            "start": 1040,
            "end": 1056,
            "properties": [
              {
                "type": "Property",
                "start": 1041,
                "end": 1055,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1042,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 1044,
                  "end": 1055,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1045,
                      "end": 1046,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1045,
                        "end": 1046,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1045,
                        "end": 1046,
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
                      "start": 1048,
                      "end": 1054,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1048,
                        "end": 1049,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 1051,
                        "end": 1054,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1052,
                            "end": 1053,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1052,
                              "end": 1053,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1052,
                              "end": 1053,
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
            "start": 1059,
            "end": 1090,
            "properties": [
              {
                "type": "Property",
                "start": 1061,
                "end": 1088,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1062,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1064,
                  "end": 1088,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1066,
                      "end": 1073,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1067,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1069,
                        "end": 1073,
                        "value": "hi",
                        "raw": "\"hi\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1075,
                      "end": 1086,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1075,
                        "end": 1076,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1078,
                        "end": 1086,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1080,
                            "end": 1084,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1080,
                              "end": 1081,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1083,
                              "end": 1084,
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
        "start": 1092,
        "end": 1095,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1097,
      "end": 1154,
      "id": {
        "type": "Identifier",
        "start": 1107,
        "end": 1109,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1110,
        "end": 1154,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1116,
            "end": 1152,
            "key": {
              "type": "Identifier",
              "start": 1116,
              "end": 1118,
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
                "start": 1119,
                "end": 1120,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1122,
                "end": 1123,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 1125,
                "end": 1133,
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1129,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1131,
                    "end": 1132,
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
                "start": 1135,
                "end": 1150,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1136,
                    "end": 1137,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1136,
                      "end": 1137,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1136,
                      "end": 1137,
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
                    "start": 1139,
                    "end": 1149,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1139,
                      "end": 1140,
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1142,
                      "end": 1149,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1144,
                          "end": 1145,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1144,
                            "end": 1145,
                            "name": "q",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1144,
                            "end": 1145,
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
                          "start": 1147,
                          "end": 1148,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1147,
                            "end": 1148,
                            "name": "r",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1147,
                            "end": 1148,
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
      "start": 1156,
      "end": 1213,
      "id": {
        "type": "Identifier",
        "start": 1165,
        "end": 1167,
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
          "start": 1168,
          "end": 1208,
          "left": {
            "type": "ArrayPattern",
            "start": 1168,
            "end": 1177,
            "elements": [
              {
                "type": "Identifier",
                "start": 1169,
                "end": 1170,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1172,
                "end": 1173,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1175,
                "end": 1176,
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
            "start": 1180,
            "end": 1208,
            "elements": [
              {
                "type": "Identifier",
                "start": 1181,
                "end": 1190,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 1192,
                "end": 1196,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 1198,
                "end": 1207,
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
        "start": 1210,
        "end": 1213,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1214,
      "end": 1302,
      "id": {
        "type": "Identifier",
        "start": 1223,
        "end": 1225,
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
          "start": 1226,
          "end": 1297,
          "left": {
            "type": "ArrayPattern",
            "start": 1226,
            "end": 1244,
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 1227,
                "end": 1230,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1228,
                    "end": 1229,
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
                "start": 1232,
                "end": 1233,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayPattern",
                "start": 1235,
                "end": 1243,
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 1236,
                    "end": 1242,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1237,
                        "end": 1238,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1240,
                        "end": 1241,
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
            "start": 1247,
            "end": 1297,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1248,
                "end": 1259,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1249,
                    "end": 1258,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 1261,
                "end": 1270,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 1272,
                "end": 1296,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1273,
                    "end": 1295,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1274,
                        "end": 1283,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1285,
                        "end": 1294,
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
        "start": 1299,
        "end": 1302,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1304,
      "end": 1318,
      "expression": {
        "type": "CallExpression",
        "start": 1304,
        "end": 1317,
        "callee": {
          "type": "Identifier",
          "start": 1304,
          "end": 1306,
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1307,
            "end": 1316,
            "elements": [
              {
                "type": "Literal",
                "start": 1308,
                "end": 1309,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1311,
                "end": 1312,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1314,
                "end": 1315,
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
      "start": 1352,
      "end": 1390,
      "expression": {
        "type": "CallExpression",
        "start": 1352,
        "end": 1389,
        "callee": {
          "type": "Identifier",
          "start": 1352,
          "end": 1354,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1355,
            "end": 1363,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1365,
            "end": 1388,
            "properties": [
              {
                "type": "Property",
                "start": 1367,
                "end": 1373,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1367,
                  "end": 1368,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1370,
                  "end": 1373,
                  "value": 200,
                  "raw": "200"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1375,
                "end": 1386,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1375,
                  "end": 1376,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1378,
                  "end": 1386,
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
      "start": 1391,
      "end": 1425,
      "expression": {
        "type": "CallExpression",
        "start": 1391,
        "end": 1424,
        "callee": {
          "type": "Identifier",
          "start": 1391,
          "end": 1393,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1394,
            "end": 1402,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1404,
            "end": 1423,
            "properties": [
              {
                "type": "Property",
                "start": 1406,
                "end": 1412,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1407,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1409,
                  "end": 1412,
                  "value": 200,
                  "raw": "200"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1414,
                "end": 1421,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1414,
                  "end": 1415,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1417,
                  "end": 1421,
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
      "type": "TSEnumDeclaration",
      "start": 1558,
      "end": 1572,
      "id": {
        "type": "Identifier",
        "start": 1563,
        "end": 1566,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1569,
          "end": 1570,
          "id": {
            "type": "Identifier",
            "start": 1569,
            "end": 1570,
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
        "start": 1567,
        "end": 1572,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1569,
            "end": 1570,
            "id": {
              "type": "Identifier",
              "start": 1569,
              "end": 1570,
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
      "start": 1573,
      "end": 1606,
      "id": {
        "type": "Identifier",
        "start": 1582,
        "end": 1584,
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
          "start": 1585,
          "end": 1601,
          "properties": [
            {
              "type": "Property",
              "start": 1586,
              "end": 1600,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1586,
                "end": 1587,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 1589,
                "end": 1600,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1590,
                    "end": 1591,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1590,
                      "end": 1591,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1590,
                      "end": 1591,
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
                    "start": 1593,
                    "end": 1599,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1593,
                      "end": 1594,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1596,
                      "end": 1599,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1597,
                          "end": 1598,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1597,
                            "end": 1598,
                            "name": "j",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1597,
                            "end": 1598,
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
        "start": 1603,
        "end": 1606,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1607,
      "end": 1639,
      "id": {
        "type": "Identifier",
        "start": 1616,
        "end": 1618,
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
          "start": 1619,
          "end": 1634,
          "left": {
            "type": "ObjectPattern",
            "start": 1619,
            "end": 1622,
            "properties": [
              {
                "type": "Property",
                "start": 1620,
                "end": 1621,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1620,
                  "end": 1621,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1620,
                  "end": 1621,
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
            "start": 1625,
            "end": 1634,
            "properties": [
              {
                "type": "Property",
                "start": 1627,
                "end": 1632,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1627,
                  "end": 1628,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1630,
                  "end": 1632,
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
        "start": 1636,
        "end": 1639,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1640,
      "end": 1665,
      "id": {
        "type": "Identifier",
        "start": 1649,
        "end": 1651,
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
          "start": 1652,
          "end": 1660,
          "properties": [
            {
              "type": "Property",
              "start": 1653,
              "end": 1659,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1653,
                "end": 1654,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 1653,
                "end": 1659,
                "left": {
                  "type": "Identifier",
                  "start": 1653,
                  "end": 1654,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1657,
                  "end": 1659,
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
        "start": 1662,
        "end": 1665,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1666,
      "end": 1724,
      "id": {
        "type": "Identifier",
        "start": 1675,
        "end": 1677,
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
          "start": 1678,
          "end": 1719,
          "left": {
            "type": "ObjectPattern",
            "start": 1678,
            "end": 1702,
            "properties": [
              {
                "type": "Property",
                "start": 1679,
                "end": 1680,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1679,
                  "end": 1680,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1679,
                  "end": 1680,
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
              "start": 1681,
              "end": 1702,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1683,
                "end": 1702,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1685,
                    "end": 1701,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1685,
                      "end": 1686,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1686,
                      "end": 1701,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1688,
                        "end": 1701,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1688,
                            "end": 1694
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1695,
                            "end": 1701
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
            "start": 1705,
            "end": 1719,
            "properties": [
              {
                "type": "Property",
                "start": 1707,
                "end": 1717,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1707,
                  "end": 1708,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1710,
                  "end": 1717,
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
        "start": 1721,
        "end": 1724,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1725,
      "end": 1755,
      "id": {
        "type": "Identifier",
        "start": 1734,
        "end": 1736,
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
          "start": 1737,
          "end": 1750,
          "elements": [
            {
              "type": "Identifier",
              "start": 1738,
              "end": 1739,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1741,
              "end": 1742,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 1744,
              "end": 1749,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1745,
                  "end": 1748,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1746,
                      "end": 1747,
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
        "start": 1752,
        "end": 1755,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1756,
      "end": 1788,
      "id": {
        "type": "Identifier",
        "start": 1765,
        "end": 1767,
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
          "start": 1768,
          "end": 1783,
          "elements": [
            {
              "type": "Identifier",
              "start": 1769,
              "end": 1770,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1772,
              "end": 1773,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 1775,
              "end": 1782,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1776,
                  "end": 1781,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1777,
                      "end": 1780,
                      "left": {
                        "type": "Identifier",
                        "start": 1777,
                        "end": 1778,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1779,
                        "end": 1780,
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
        "start": 1785,
        "end": 1788,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1790,
      "end": 1828,
      "expression": {
        "type": "CallExpression",
        "start": 1790,
        "end": 1827,
        "callee": {
          "type": "Identifier",
          "start": 1790,
          "end": 1792,
          "name": "c0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1793,
            "end": 1826,
            "properties": [
              {
                "type": "Property",
                "start": 1794,
                "end": 1825,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1794,
                  "end": 1795,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1798,
                  "end": 1825,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1800,
                      "end": 1804,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1800,
                        "end": 1801,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1803,
                        "end": 1804,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1806,
                      "end": 1823,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1806,
                        "end": 1807,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1809,
                        "end": 1823,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1811,
                            "end": 1821,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1811,
                              "end": 1812,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1814,
                              "end": 1821,
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
      "start": 1882,
      "end": 1924,
      "expression": {
        "type": "CallExpression",
        "start": 1882,
        "end": 1923,
        "callee": {
          "type": "Identifier",
          "start": 1882,
          "end": 1884,
          "name": "c0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1885,
            "end": 1922,
            "properties": [
              {
                "type": "Property",
                "start": 1886,
                "end": 1921,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1886,
                  "end": 1887,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1890,
                  "end": 1921,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1892,
                      "end": 1903,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1892,
                        "end": 1893,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1895,
                        "end": 1903,
                        "value": "string",
                        "raw": "\"string\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1905,
                      "end": 1919,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1905,
                        "end": 1906,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1908,
                        "end": 1919,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1910,
                            "end": 1917,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1910,
                              "end": 1911,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1913,
                              "end": 1917,
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
      "start": 1975,
      "end": 1980,
      "expression": {
        "type": "CallExpression",
        "start": 1975,
        "end": 1979,
        "callee": {
          "type": "Identifier",
          "start": 1975,
          "end": 1977,
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
      "start": 2024,
      "end": 2036,
      "expression": {
        "type": "CallExpression",
        "start": 2024,
        "end": 2036,
        "callee": {
          "type": "Identifier",
          "start": 2024,
          "end": 2026,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2027,
            "end": 2035,
            "properties": [
              {
                "type": "Property",
                "start": 2029,
                "end": 2033,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2029,
                  "end": 2030,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2032,
                  "end": 2033,
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
      "start": 2075,
      "end": 2082,
      "expression": {
        "type": "CallExpression",
        "start": 2075,
        "end": 2081,
        "callee": {
          "type": "Identifier",
          "start": 2075,
          "end": 2077,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2078,
            "end": 2080,
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
      "start": 2123,
      "end": 2133,
      "expression": {
        "type": "CallExpression",
        "start": 2123,
        "end": 2132,
        "callee": {
          "type": "Identifier",
          "start": 2123,
          "end": 2125,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2126,
            "end": 2131,
            "properties": [
              {
                "type": "Property",
                "start": 2127,
                "end": 2130,
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
                  "start": 2129,
                  "end": 2130,
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
      "start": 2172,
      "end": 2185,
      "expression": {
        "type": "CallExpression",
        "start": 2172,
        "end": 2184,
        "callee": {
          "type": "Identifier",
          "start": 2172,
          "end": 2174,
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2175,
            "end": 2183,
            "properties": [
              {
                "type": "Property",
                "start": 2177,
                "end": 2181,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2177,
                  "end": 2178,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2180,
                  "end": 2181,
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
      "start": 2232,
      "end": 2257,
      "expression": {
        "type": "CallExpression",
        "start": 2232,
        "end": 2256,
        "callee": {
          "type": "Identifier",
          "start": 2232,
          "end": 2234,
          "name": "c5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2235,
            "end": 2255,
            "elements": [
              {
                "type": "Literal",
                "start": 2236,
                "end": 2237,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2239,
                "end": 2240,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2242,
                "end": 2254,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2243,
                    "end": 2253,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2244,
                        "end": 2252,
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
      "start": 2314,
      "end": 2352,
      "expression": {
        "type": "CallExpression",
        "start": 2314,
        "end": 2351,
        "callee": {
          "type": "Identifier",
          "start": 2314,
          "end": 2316,
          "name": "c5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2317,
            "end": 2350,
            "elements": [
              {
                "type": "Literal",
                "start": 2318,
                "end": 2319,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2321,
                "end": 2322,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2324,
                "end": 2336,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2325,
                    "end": 2335,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2326,
                        "end": 2334,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 2338,
                "end": 2343,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 2345,
                "end": 2349,
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
      "type": "TSInterfaceDeclaration",
      "start": 2538,
      "end": 2613,
      "id": {
        "type": "Identifier",
        "start": 2548,
        "end": 2550,
        "name": "F2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2551,
        "end": 2613,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2557,
            "end": 2572,
            "key": {
              "type": "Identifier",
              "start": 2557,
              "end": 2559,
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
                "start": 2560,
                "end": 2570,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2561,
                    "end": 2562,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2564,
                    "end": 2565,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2567,
                    "end": 2568,
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
            "start": 2577,
            "end": 2592,
            "key": {
              "type": "Identifier",
              "start": 2577,
              "end": 2579,
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
                "start": 2580,
                "end": 2590,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2581,
                    "end": 2582,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2581,
                      "end": 2582,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2581,
                      "end": 2582,
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
                    "start": 2584,
                    "end": 2585,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2584,
                      "end": 2585,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2584,
                      "end": 2585,
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
                    "start": 2587,
                    "end": 2588,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2587,
                      "end": 2588,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2587,
                      "end": 2588,
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
            "start": 2597,
            "end": 2611,
            "key": {
              "type": "Identifier",
              "start": 2597,
              "end": 2599,
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
                "start": 2600,
                "end": 2609,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2601,
                    "end": 2602,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2604,
                    "end": 2605,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2607,
                    "end": 2608,
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
      "start": 2615,
      "end": 2711,
      "id": {
        "type": "Identifier",
        "start": 2621,
        "end": 2623,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2638,
        "end": 2711,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2644,
            "end": 2661,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2644,
              "end": 2655,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2655,
              "end": 2661,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2658,
                "end": 2661,
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
            "start": 2666,
            "end": 2674,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2666,
              "end": 2668,
              "name": "d3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2668,
              "end": 2674,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2671,
                "end": 2674,
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
            "start": 2679,
            "end": 2687,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2679,
              "end": 2681,
              "name": "d4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2681,
              "end": 2687,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2684,
                "end": 2687,
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
            "start": 2692,
            "end": 2709,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2692,
              "end": 2694,
              "name": "e0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2694,
              "end": 2709,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2695,
                  "end": 2704,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2696,
                      "end": 2697,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2699,
                      "end": 2700,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2702,
                      "end": 2703,
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
                "start": 2706,
                "end": 2709,
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
          "start": 2635,
          "end": 2637,
          "expression": {
            "type": "Identifier",
            "start": 2635,
            "end": 2637,
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
      "start": 2713,
      "end": 2805,
      "id": {
        "type": "Identifier",
        "start": 2719,
        "end": 2721,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2736,
        "end": 2805,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2742,
            "end": 2759,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2742,
              "end": 2744,
              "name": "d3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2744,
              "end": 2759,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2745,
                  "end": 2754,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2746,
                      "end": 2747,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2749,
                      "end": 2750,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2752,
                      "end": 2753,
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
                "start": 2756,
                "end": 2759,
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
            "start": 2764,
            "end": 2781,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2764,
              "end": 2766,
              "name": "d4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2766,
              "end": 2781,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2767,
                  "end": 2776,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2768,
                      "end": 2769,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2768,
                        "end": 2769,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2768,
                        "end": 2769,
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
                      "start": 2771,
                      "end": 2772,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2771,
                        "end": 2772,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2771,
                        "end": 2772,
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
                      "start": 2774,
                      "end": 2775,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2774,
                        "end": 2775,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2774,
                        "end": 2775,
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
                "start": 2778,
                "end": 2781,
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
            "start": 2786,
            "end": 2803,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2786,
              "end": 2788,
              "name": "e0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2788,
              "end": 2803,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2789,
                  "end": 2798,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2790,
                      "end": 2791,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2793,
                      "end": 2794,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2796,
                      "end": 2797,
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2733,
          "end": 2735,
          "expression": {
            "type": "Identifier",
            "start": 2733,
            "end": 2735,
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
      "start": 2807,
      "end": 2847,
      "id": {
        "type": "Identifier",
        "start": 2816,
        "end": 2818,
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
          "start": 2819,
          "end": 2842,
          "left": {
            "type": "ObjectPattern",
            "start": 2819,
            "end": 2825,
            "properties": [
              {
                "type": "Property",
                "start": 2820,
                "end": 2821,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2820,
                  "end": 2821,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2820,
                  "end": 2821,
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
                "start": 2823,
                "end": 2824,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2823,
                  "end": 2824,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2823,
                  "end": 2824,
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
            "start": 2828,
            "end": 2842,
            "properties": [
              {
                "type": "Property",
                "start": 2830,
                "end": 2834,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2830,
                  "end": 2831,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2833,
                  "end": 2834,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2836,
                "end": 2840,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2836,
                  "end": 2837,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2839,
                  "end": 2840,
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
        "start": 2844,
        "end": 2847,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2848,
      "end": 2853,
      "expression": {
        "type": "CallExpression",
        "start": 2848,
        "end": 2852,
        "callee": {
          "type": "Identifier",
          "start": 2848,
          "end": 2850,
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
      "start": 3221,
      "end": 3249,
      "id": {
        "type": "Identifier",
        "start": 3230,
        "end": 3232,
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
          "start": 3233,
          "end": 3244,
          "properties": [
            {
              "type": "Property",
              "start": 3234,
              "end": 3243,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3234,
                "end": 3235,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3237,
                "end": 3243,
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
        "start": 3246,
        "end": 3249,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3280,
      "end": 3315,
      "id": {
        "type": "Identifier",
        "start": 3289,
        "end": 3291,
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
          "start": 3292,
          "end": 3310,
          "properties": [
            {
              "type": "Property",
              "start": 3293,
              "end": 3294,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3293,
                "end": 3294,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3293,
                "end": 3294,
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
            "start": 3295,
            "end": 3310,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3297,
              "end": 3310,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3299,
                  "end": 3308,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3299,
                    "end": 3300,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3300,
                    "end": 3308,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3302,
                      "end": 3308
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
        "start": 3312,
        "end": 3315,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3337,
      "end": 3373,
      "id": {
        "type": "Identifier",
        "start": 3346,
        "end": 3348,
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
          "start": 3349,
          "end": 3368,
          "properties": [
            {
              "type": "Property",
              "start": 3350,
              "end": 3351,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3350,
                "end": 3351,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 3350,
                "end": 3351,
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
            "start": 3352,
            "end": 3368,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3354,
              "end": 3368,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3356,
                  "end": 3366,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3356,
                    "end": 3357,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3358,
                    "end": 3366,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3360,
                      "end": 3366
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
        "start": 3370,
        "end": 3373,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3412,
      "end": 3454,
      "id": {
        "type": "Identifier",
        "start": 3421,
        "end": 3423,
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
          "start": 3424,
          "end": 3449,
          "properties": [
            {
              "type": "Property",
              "start": 3425,
              "end": 3447,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3425,
                "end": 3426,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3428,
                "end": 3447,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3429,
                    "end": 3435,
                    "name": "number",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3436,
                    "end": 3442,
                    "name": "string",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3443,
                    "end": 3446,
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
        "start": 3451,
        "end": 3454,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3486,
      "end": 3550,
      "id": {
        "type": "Identifier",
        "start": 3495,
        "end": 3497,
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
          "start": 3498,
          "end": 3545,
          "properties": [
            {
              "type": "Property",
              "start": 3499,
              "end": 3511,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3499,
                "end": 3500,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3502,
                "end": 3511,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3503,
                    "end": 3504,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3506,
                    "end": 3507,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3509,
                    "end": 3510,
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
            "start": 3512,
            "end": 3545,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3514,
              "end": 3545,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3516,
                  "end": 3543,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3516,
                    "end": 3517,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3517,
                    "end": 3543,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 3519,
                      "end": 3543,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 3520,
                          "end": 3526
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3528,
                          "end": 3534
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3536,
                          "end": 3542
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
        "start": 3547,
        "end": 3550,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3583,
      "end": 3629,
      "id": {
        "type": "Identifier",
        "start": 3592,
        "end": 3594,
        "name": "e6",
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
          "end": 3624,
          "properties": [
            {
              "type": "Property",
              "start": 3596,
              "end": 3623,
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
                "end": 3623,
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
                    "start": 3608,
                    "end": 3614,
                    "name": "number",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3616,
                    "end": 3622,
                    "name": "number",
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
        "start": 3626,
        "end": 3629,
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
