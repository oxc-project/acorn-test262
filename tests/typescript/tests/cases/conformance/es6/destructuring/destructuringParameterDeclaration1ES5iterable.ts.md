__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 305,
  "end": 3722,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 365,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 316,
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
          "start": 317,
          "end": 360,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 324,
              "end": 329,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 325,
                  "end": 328,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
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
            "start": 330,
            "end": 360,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 332,
              "end": 360,
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
                  "start": 349,
                  "end": 359,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 349,
                    "end": 357,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 349,
                      "end": 355
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
        "start": 362,
        "end": 365,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 366,
      "end": 410,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 377,
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
          "start": 378,
          "end": 405,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 379,
            "end": 405,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 381,
              "end": 405,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 383,
                  "end": 393,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 384,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 386,
                      "end": 392
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 394,
                  "end": 403,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 395,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 395,
                    "end": 403,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 397,
                      "end": 403
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
        "start": 407,
        "end": 410,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 537,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 422,
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
          "start": 423,
          "end": 532,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 424,
              "end": 425,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
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
              "start": 427,
              "end": 428,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
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
              "start": 430,
              "end": 439,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectPattern",
                "start": 433,
                "end": 439,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 434,
                    "end": 435,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 435,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 435,
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
                    "start": 437,
                    "end": 438,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 438,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 438,
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
              "start": 441,
              "end": 453,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 441,
                "end": 442,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 444,
                "end": 453,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 445,
                    "end": 446,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 451,
                    "end": 452,
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
            "start": 454,
            "end": 532,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 456,
              "end": 532,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 458,
                  "end": 468,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 459,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 467,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 461,
                      "end": 467
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 469,
                  "end": 479,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 470,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 470,
                    "end": 478,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 472,
                      "end": 478
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 480,
                  "end": 509,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 481,
                    "end": 508,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 483,
                      "end": 508,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 485,
                          "end": 496,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 485,
                            "end": 486,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 486,
                            "end": 495,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 488,
                              "end": 495
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 497,
                          "end": 506,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 497,
                            "end": 498,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 498,
                            "end": 506,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 500,
                              "end": 506
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
                  "start": 510,
                  "end": 530,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 511,
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 511,
                    "end": 530,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 513,
                      "end": 530,
                      "elementType": {
                        "type": "TSUnionType",
                        "start": 514,
                        "end": 527,
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
        "start": 534,
        "end": 537,
        "body": []
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 537,
      "end": 538
    },
    {
      "type": "FunctionDeclaration",
      "start": 539,
      "end": 588,
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 550,
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
          "start": 551,
          "end": 583,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 552,
              "end": 553,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 552,
                "end": 553,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 552,
                "end": 553,
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
              "start": 555,
              "end": 556,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
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
            "start": 557,
            "end": 583,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 559,
              "end": 583,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 561,
                  "end": 571,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 562,
                    "end": 570,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 572,
                  "end": 581,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 573,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 573,
                    "end": 581,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 575,
                      "end": 581
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
        "start": 585,
        "end": 588,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 590,
      "end": 614,
      "expression": {
        "type": "CallExpression",
        "start": 590,
        "end": 613,
        "callee": {
          "type": "Identifier",
          "start": 590,
          "end": 592,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 593,
            "end": 612,
            "elements": [
              {
                "type": "Literal",
                "start": 594,
                "end": 595,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 597,
                "end": 598,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 600,
                "end": 611,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 601,
                    "end": 610,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 602,
                        "end": 609,
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
      "start": 615,
      "end": 642,
      "expression": {
        "type": "CallExpression",
        "start": 615,
        "end": 641,
        "callee": {
          "type": "Identifier",
          "start": 615,
          "end": 617,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 618,
            "end": 640,
            "elements": [
              {
                "type": "Literal",
                "start": 619,
                "end": 620,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 622,
                "end": 623,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 625,
                "end": 636,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 626,
                    "end": 635,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 627,
                        "end": 634,
                        "value": "world",
                        "raw": "\"world\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 638,
                "end": 639,
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
      "start": 899,
      "end": 937,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 910,
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
          "start": 911,
          "end": 932,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 911,
            "end": 912,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 915,
            "end": 932,
            "elements": [
              {
                "type": "Identifier",
                "start": 916,
                "end": 925,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 927,
                "end": 931,
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
        "start": 934,
        "end": 937,
        "body": []
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 937,
      "end": 938
    },
    {
      "type": "FunctionDeclaration",
      "start": 939,
      "end": 992,
      "id": {
        "type": "Identifier",
        "start": 948,
        "end": 950,
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
          "start": 951,
          "end": 959,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 951,
            "end": 952,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 955,
            "end": 959,
            "value": null,
            "raw": "null"
          },
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 961,
          "end": 987,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 961,
            "end": 962,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 965,
            "end": 987,
            "properties": [
              {
                "type": "Property",
                "start": 967,
                "end": 971,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 967,
                  "end": 968,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 970,
                  "end": 971,
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
                "start": 973,
                "end": 985,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 974,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 985,
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
        "start": 989,
        "end": 992,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 993,
      "end": 1060,
      "id": {
        "type": "Identifier",
        "start": 1002,
        "end": 1004,
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
          "start": 1005,
          "end": 1055,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 1005,
            "end": 1021,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 1006,
                "end": 1020,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1006,
                  "end": 1007,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 1009,
                  "end": 1020,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1010,
                      "end": 1011,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1010,
                        "end": 1011,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1010,
                        "end": 1011,
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
                      "start": 1013,
                      "end": 1019,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1013,
                        "end": 1014,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 1016,
                        "end": 1019,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1017,
                            "end": 1018,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1017,
                              "end": 1018,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1017,
                              "end": 1018,
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
            "start": 1024,
            "end": 1055,
            "properties": [
              {
                "type": "Property",
                "start": 1026,
                "end": 1053,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1026,
                  "end": 1027,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1029,
                  "end": 1053,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1031,
                      "end": 1038,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1032,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1034,
                        "end": 1038,
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
                      "start": 1040,
                      "end": 1051,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1040,
                        "end": 1041,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1043,
                        "end": 1051,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1045,
                            "end": 1049,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1045,
                              "end": 1046,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1048,
                              "end": 1049,
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
        "start": 1057,
        "end": 1060,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1062,
      "end": 1119,
      "id": {
        "type": "Identifier",
        "start": 1072,
        "end": 1074,
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1075,
        "end": 1119,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1081,
            "end": 1117,
            "key": {
              "type": "Identifier",
              "start": 1081,
              "end": 1083,
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
                "start": 1084,
                "end": 1085,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1087,
                "end": 1088,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 1090,
                "end": 1098,
                "decorators": [],
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "start": 1093,
                    "end": 1094,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1096,
                    "end": 1097,
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
                "start": 1100,
                "end": 1115,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 1101,
                    "end": 1102,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1101,
                      "end": 1102,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1101,
                      "end": 1102,
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
                    "start": 1104,
                    "end": 1114,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1104,
                      "end": 1105,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1107,
                      "end": 1114,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1109,
                          "end": 1110,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1109,
                            "end": 1110,
                            "decorators": [],
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1109,
                            "end": 1110,
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
                          "start": 1112,
                          "end": 1113,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1112,
                            "end": 1113,
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1112,
                            "end": 1113,
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
      "start": 1121,
      "end": 1178,
      "id": {
        "type": "Identifier",
        "start": 1130,
        "end": 1132,
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
          "start": 1133,
          "end": 1173,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 1133,
            "end": 1142,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 1134,
                "end": 1135,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1137,
                "end": 1138,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1140,
                "end": 1141,
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
            "start": 1145,
            "end": 1173,
            "elements": [
              {
                "type": "Identifier",
                "start": 1146,
                "end": 1155,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 1157,
                "end": 1161,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 1163,
                "end": 1172,
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
        "start": 1175,
        "end": 1178,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1179,
      "end": 1267,
      "id": {
        "type": "Identifier",
        "start": 1188,
        "end": 1190,
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
          "start": 1191,
          "end": 1262,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 1191,
            "end": 1209,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 1192,
                "end": 1195,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1193,
                    "end": 1194,
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
                "start": 1197,
                "end": 1198,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 1200,
                "end": 1208,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 1201,
                    "end": 1207,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1202,
                        "end": 1203,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1205,
                        "end": 1206,
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
            "start": 1212,
            "end": 1262,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1213,
                "end": 1224,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1214,
                    "end": 1223,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              },
              {
                "type": "Identifier",
                "start": 1226,
                "end": 1235,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 1237,
                "end": 1261,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1238,
                    "end": 1260,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 1239,
                        "end": 1248,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1250,
                        "end": 1259,
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
        "start": 1264,
        "end": 1267,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1269,
      "end": 1283,
      "expression": {
        "type": "CallExpression",
        "start": 1269,
        "end": 1282,
        "callee": {
          "type": "Identifier",
          "start": 1269,
          "end": 1271,
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1272,
            "end": 1281,
            "elements": [
              {
                "type": "Literal",
                "start": 1273,
                "end": 1274,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1276,
                "end": 1277,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1279,
                "end": 1280,
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
      "start": 1317,
      "end": 1355,
      "expression": {
        "type": "CallExpression",
        "start": 1317,
        "end": 1354,
        "callee": {
          "type": "Identifier",
          "start": 1317,
          "end": 1319,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1320,
            "end": 1328,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1330,
            "end": 1353,
            "properties": [
              {
                "type": "Property",
                "start": 1332,
                "end": 1338,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1332,
                  "end": 1333,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1335,
                  "end": 1338,
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
                "start": 1340,
                "end": 1351,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1340,
                  "end": 1341,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1343,
                  "end": 1351,
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
      "start": 1356,
      "end": 1390,
      "expression": {
        "type": "CallExpression",
        "start": 1356,
        "end": 1389,
        "callee": {
          "type": "Identifier",
          "start": 1356,
          "end": 1358,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1359,
            "end": 1367,
            "value": "string",
            "raw": "\"string\""
          },
          {
            "type": "ObjectExpression",
            "start": 1369,
            "end": 1388,
            "properties": [
              {
                "type": "Property",
                "start": 1371,
                "end": 1377,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1371,
                  "end": 1372,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1374,
                  "end": 1377,
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
                "start": 1379,
                "end": 1386,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1379,
                  "end": 1380,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1382,
                  "end": 1386,
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
      "type": "ExpressionStatement",
      "start": 1391,
      "end": 1412,
      "expression": {
        "type": "CallExpression",
        "start": 1391,
        "end": 1411,
        "callee": {
          "type": "Identifier",
          "start": 1391,
          "end": 1393,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1394,
            "end": 1410,
            "elements": [
              {
                "type": "Literal",
                "start": 1395,
                "end": 1403,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 1405,
                "end": 1406,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1408,
                "end": 1409,
                "value": 2,
                "raw": "2"
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
      "start": 1457,
      "end": 1494,
      "expression": {
        "type": "CallExpression",
        "start": 1457,
        "end": 1493,
        "callee": {
          "type": "Identifier",
          "start": 1457,
          "end": 1459,
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1460,
            "end": 1492,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1461,
                "end": 1471,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1462,
                    "end": 1470,
                    "value": "string",
                    "raw": "\"string\""
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 1473,
                "end": 1474,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1476,
                "end": 1491,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1477,
                    "end": 1490,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1478,
                        "end": 1482,
                        "value": true,
                        "raw": "true"
                      },
                      {
                        "type": "Literal",
                        "start": 1484,
                        "end": 1489,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1655,
      "end": 1669,
      "id": {
        "type": "Identifier",
        "start": 1660,
        "end": 1663,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1664,
        "end": 1669,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1666,
            "end": 1667,
            "id": {
              "type": "Identifier",
              "start": 1666,
              "end": 1667,
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
      "start": 1670,
      "end": 1703,
      "id": {
        "type": "Identifier",
        "start": 1679,
        "end": 1681,
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
          "start": 1682,
          "end": 1698,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 1683,
              "end": 1697,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1683,
                "end": 1684,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectPattern",
                "start": 1686,
                "end": 1697,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 1687,
                    "end": 1688,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1687,
                      "end": 1688,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1687,
                      "end": 1688,
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
                    "start": 1690,
                    "end": 1696,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1690,
                      "end": 1691,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 1693,
                      "end": 1696,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1694,
                          "end": 1695,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1694,
                            "end": 1695,
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1694,
                            "end": 1695,
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
        "start": 1700,
        "end": 1703,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1704,
      "end": 1736,
      "id": {
        "type": "Identifier",
        "start": 1713,
        "end": 1715,
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
          "start": 1716,
          "end": 1731,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 1716,
            "end": 1719,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 1717,
                "end": 1718,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1717,
                  "end": 1718,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 1717,
                  "end": 1718,
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
            "start": 1722,
            "end": 1731,
            "properties": [
              {
                "type": "Property",
                "start": 1724,
                "end": 1729,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1724,
                  "end": 1725,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1727,
                  "end": 1729,
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
        "start": 1733,
        "end": 1736,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1737,
      "end": 1762,
      "id": {
        "type": "Identifier",
        "start": 1746,
        "end": 1748,
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
          "start": 1749,
          "end": 1757,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 1750,
              "end": 1756,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 1750,
                "end": 1751,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 1750,
                "end": 1756,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1750,
                  "end": 1751,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 1754,
                  "end": 1756,
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
        "start": 1759,
        "end": 1762,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1763,
      "end": 1821,
      "id": {
        "type": "Identifier",
        "start": 1772,
        "end": 1774,
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
          "start": 1775,
          "end": 1816,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 1775,
            "end": 1799,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 1776,
                "end": 1777,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1776,
                  "end": 1777,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 1776,
                  "end": 1777,
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
              "start": 1778,
              "end": 1799,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1780,
                "end": 1799,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1782,
                    "end": 1798,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1782,
                      "end": 1783,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1783,
                      "end": 1798,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1785,
                        "end": 1798,
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
            "start": 1802,
            "end": 1816,
            "properties": [
              {
                "type": "Property",
                "start": 1804,
                "end": 1814,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1804,
                  "end": 1805,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1807,
                  "end": 1814,
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
        "start": 1818,
        "end": 1821,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1822,
      "end": 1852,
      "id": {
        "type": "Identifier",
        "start": 1831,
        "end": 1833,
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
          "start": 1834,
          "end": 1847,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1835,
              "end": 1836,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1838,
              "end": 1839,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 1841,
              "end": 1846,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1842,
                  "end": 1845,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1843,
                      "end": 1844,
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
        "start": 1849,
        "end": 1852,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1853,
      "end": 1885,
      "id": {
        "type": "Identifier",
        "start": 1862,
        "end": 1864,
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
          "start": 1865,
          "end": 1880,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1866,
              "end": 1867,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1869,
              "end": 1870,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 1872,
              "end": 1879,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 1873,
                  "end": 1878,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1874,
                      "end": 1877,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1874,
                        "end": 1875,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1876,
                        "end": 1877,
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
        "start": 1882,
        "end": 1885,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1887,
      "end": 1925,
      "expression": {
        "type": "CallExpression",
        "start": 1887,
        "end": 1924,
        "callee": {
          "type": "Identifier",
          "start": 1887,
          "end": 1889,
          "decorators": [],
          "name": "c0",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1890,
            "end": 1923,
            "properties": [
              {
                "type": "Property",
                "start": 1891,
                "end": 1922,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1891,
                  "end": 1892,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1895,
                  "end": 1922,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1897,
                      "end": 1901,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1897,
                        "end": 1898,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1900,
                        "end": 1901,
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
                      "start": 1903,
                      "end": 1920,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1904,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1906,
                        "end": 1920,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1908,
                            "end": 1918,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1908,
                              "end": 1909,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1911,
                              "end": 1918,
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
      "start": 1979,
      "end": 2021,
      "expression": {
        "type": "CallExpression",
        "start": 1979,
        "end": 2020,
        "callee": {
          "type": "Identifier",
          "start": 1979,
          "end": 1981,
          "decorators": [],
          "name": "c0",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1982,
            "end": 2019,
            "properties": [
              {
                "type": "Property",
                "start": 1983,
                "end": 2018,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1983,
                  "end": 1984,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1987,
                  "end": 2018,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1989,
                      "end": 2000,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1989,
                        "end": 1990,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1992,
                        "end": 2000,
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
                      "start": 2002,
                      "end": 2016,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2002,
                        "end": 2003,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2005,
                        "end": 2016,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2007,
                            "end": 2014,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2007,
                              "end": 2008,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 2010,
                              "end": 2014,
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
      "start": 2072,
      "end": 2077,
      "expression": {
        "type": "CallExpression",
        "start": 2072,
        "end": 2076,
        "callee": {
          "type": "Identifier",
          "start": 2072,
          "end": 2074,
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
      "start": 2121,
      "end": 2133,
      "expression": {
        "type": "CallExpression",
        "start": 2121,
        "end": 2133,
        "callee": {
          "type": "Identifier",
          "start": 2121,
          "end": 2123,
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2124,
            "end": 2132,
            "properties": [
              {
                "type": "Property",
                "start": 2126,
                "end": 2130,
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
                  "start": 2129,
                  "end": 2130,
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
      "end": 2178,
      "expression": {
        "type": "CallExpression",
        "start": 2171,
        "end": 2177,
        "callee": {
          "type": "Identifier",
          "start": 2171,
          "end": 2173,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2174,
            "end": 2176,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2219,
      "end": 2229,
      "expression": {
        "type": "CallExpression",
        "start": 2219,
        "end": 2228,
        "callee": {
          "type": "Identifier",
          "start": 2219,
          "end": 2221,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2222,
            "end": 2227,
            "properties": [
              {
                "type": "Property",
                "start": 2223,
                "end": 2226,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2223,
                  "end": 2224,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2225,
                  "end": 2226,
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
      "start": 2268,
      "end": 2281,
      "expression": {
        "type": "CallExpression",
        "start": 2268,
        "end": 2280,
        "callee": {
          "type": "Identifier",
          "start": 2268,
          "end": 2270,
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2271,
            "end": 2279,
            "properties": [
              {
                "type": "Property",
                "start": 2273,
                "end": 2277,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2273,
                  "end": 2274,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2276,
                  "end": 2277,
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
      "start": 2328,
      "end": 2353,
      "expression": {
        "type": "CallExpression",
        "start": 2328,
        "end": 2352,
        "callee": {
          "type": "Identifier",
          "start": 2328,
          "end": 2330,
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2331,
            "end": 2351,
            "elements": [
              {
                "type": "Literal",
                "start": 2332,
                "end": 2333,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2335,
                "end": 2336,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2338,
                "end": 2350,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2339,
                    "end": 2349,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2340,
                        "end": 2348,
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
      "start": 2410,
      "end": 2448,
      "expression": {
        "type": "CallExpression",
        "start": 2410,
        "end": 2447,
        "callee": {
          "type": "Identifier",
          "start": 2410,
          "end": 2412,
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2413,
            "end": 2446,
            "elements": [
              {
                "type": "Literal",
                "start": 2414,
                "end": 2415,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2417,
                "end": 2418,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2420,
                "end": 2432,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2421,
                    "end": 2431,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2422,
                        "end": 2430,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 2434,
                "end": 2439,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 2441,
                "end": 2445,
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
      "type": "FunctionDeclaration",
      "start": 2633,
      "end": 2652,
      "id": {
        "type": "Identifier",
        "start": 2642,
        "end": 2644,
        "decorators": [],
        "name": "d0",
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
          "start": 2645,
          "end": 2647,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2649,
        "end": 2652,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2653,
      "end": 2676,
      "id": {
        "type": "Identifier",
        "start": 2662,
        "end": 2664,
        "decorators": [],
        "name": "d0",
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
          "start": 2665,
          "end": 2671,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 2665,
            "end": 2666,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 2669,
            "end": 2671,
            "value": 10,
            "raw": "10"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2673,
        "end": 2676,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2678,
      "end": 2753,
      "id": {
        "type": "Identifier",
        "start": 2688,
        "end": 2690,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2691,
        "end": 2753,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2697,
            "end": 2712,
            "key": {
              "type": "Identifier",
              "start": 2697,
              "end": 2699,
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
                "start": 2700,
                "end": 2710,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2701,
                    "end": 2702,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2704,
                    "end": 2705,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2707,
                    "end": 2708,
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
            "start": 2717,
            "end": 2732,
            "key": {
              "type": "Identifier",
              "start": 2717,
              "end": 2719,
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
                "start": 2720,
                "end": 2730,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 2721,
                    "end": 2722,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2721,
                      "end": 2722,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2721,
                      "end": 2722,
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
                    "start": 2724,
                    "end": 2725,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2724,
                      "end": 2725,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2724,
                      "end": 2725,
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
                    "start": 2727,
                    "end": 2728,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2727,
                      "end": 2728,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2727,
                      "end": 2728,
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
            "start": 2737,
            "end": 2751,
            "key": {
              "type": "Identifier",
              "start": 2737,
              "end": 2739,
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
                "start": 2740,
                "end": 2749,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2741,
                    "end": 2742,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2744,
                    "end": 2745,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2747,
                    "end": 2748,
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
      "start": 2755,
      "end": 2851,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2761,
        "end": 2763,
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
          "start": 2775,
          "end": 2777,
          "expression": {
            "type": "Identifier",
            "start": 2775,
            "end": 2777,
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
        "start": 2778,
        "end": 2851,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2784,
            "end": 2801,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2784,
              "end": 2795,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2795,
              "end": 2801,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2798,
                "end": 2801,
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
            "start": 2806,
            "end": 2814,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2806,
              "end": 2808,
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2808,
              "end": 2814,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2811,
                "end": 2814,
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
            "start": 2819,
            "end": 2827,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2819,
              "end": 2821,
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2821,
              "end": 2827,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2824,
                "end": 2827,
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
            "start": 2832,
            "end": 2849,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2832,
              "end": 2834,
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2834,
              "end": 2849,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2835,
                  "end": 2844,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2836,
                      "end": 2837,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2839,
                      "end": 2840,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2842,
                      "end": 2843,
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
                "start": 2846,
                "end": 2849,
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
      "start": 2853,
      "end": 2945,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2859,
        "end": 2861,
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
          "start": 2873,
          "end": 2875,
          "expression": {
            "type": "Identifier",
            "start": 2873,
            "end": 2875,
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
        "start": 2876,
        "end": 2945,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2882,
            "end": 2899,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2882,
              "end": 2884,
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2884,
              "end": 2899,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2885,
                  "end": 2894,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2886,
                      "end": 2887,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2889,
                      "end": 2890,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2892,
                      "end": 2893,
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
                "start": 2896,
                "end": 2899,
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
            "start": 2904,
            "end": 2921,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2904,
              "end": 2906,
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2906,
              "end": 2921,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2907,
                  "end": 2916,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2908,
                      "end": 2909,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2908,
                        "end": 2909,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2908,
                        "end": 2909,
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
                      "start": 2911,
                      "end": 2912,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2911,
                        "end": 2912,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2911,
                        "end": 2912,
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
                      "start": 2914,
                      "end": 2915,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2914,
                        "end": 2915,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2914,
                        "end": 2915,
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
                "start": 2918,
                "end": 2921,
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
            "start": 2926,
            "end": 2943,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2926,
              "end": 2928,
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2928,
              "end": 2943,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2929,
                  "end": 2938,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2930,
                      "end": 2931,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2933,
                      "end": 2934,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2936,
                      "end": 2937,
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
                "start": 2940,
                "end": 2943,
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
      "start": 2948,
      "end": 2988,
      "id": {
        "type": "Identifier",
        "start": 2957,
        "end": 2959,
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
          "start": 2960,
          "end": 2983,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 2960,
            "end": 2966,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 2961,
                "end": 2962,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2961,
                  "end": 2962,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 2961,
                  "end": 2962,
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
                "start": 2964,
                "end": 2965,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2964,
                  "end": 2965,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 2964,
                  "end": 2965,
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
            "start": 2969,
            "end": 2983,
            "properties": [
              {
                "type": "Property",
                "start": 2971,
                "end": 2975,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2971,
                  "end": 2972,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2974,
                  "end": 2975,
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
                "start": 2977,
                "end": 2981,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2977,
                  "end": 2978,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2980,
                  "end": 2981,
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
        "start": 2985,
        "end": 2988,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2989,
      "end": 2994,
      "expression": {
        "type": "CallExpression",
        "start": 2989,
        "end": 2993,
        "callee": {
          "type": "Identifier",
          "start": 2989,
          "end": 2991,
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
      "start": 3362,
      "end": 3390,
      "id": {
        "type": "Identifier",
        "start": 3371,
        "end": 3373,
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
          "start": 3374,
          "end": 3385,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3375,
              "end": 3384,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3375,
                "end": 3376,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3378,
                "end": 3384,
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
        "start": 3387,
        "end": 3390,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3421,
      "end": 3456,
      "id": {
        "type": "Identifier",
        "start": 3430,
        "end": 3432,
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
          "start": 3433,
          "end": 3451,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3434,
              "end": 3435,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3434,
                "end": 3435,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3434,
                "end": 3435,
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
            "start": 3436,
            "end": 3451,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3438,
              "end": 3451,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3440,
                  "end": 3449,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3440,
                    "end": 3441,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3441,
                    "end": 3449,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3443,
                      "end": 3449
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
        "start": 3453,
        "end": 3456,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3478,
      "end": 3514,
      "id": {
        "type": "Identifier",
        "start": 3487,
        "end": 3489,
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
          "start": 3490,
          "end": 3509,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3491,
              "end": 3492,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3491,
                "end": 3492,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3491,
                "end": 3492,
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
            "start": 3493,
            "end": 3509,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3495,
              "end": 3509,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3497,
                  "end": 3507,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3497,
                    "end": 3498,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3499,
                    "end": 3507,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3501,
                      "end": 3507
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
        "start": 3511,
        "end": 3514,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3553,
      "end": 3595,
      "id": {
        "type": "Identifier",
        "start": 3562,
        "end": 3564,
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
          "start": 3565,
          "end": 3590,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3566,
              "end": 3588,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3566,
                "end": 3567,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3569,
                "end": 3588,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3570,
                    "end": 3576,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3577,
                    "end": 3583,
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3584,
                    "end": 3587,
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
        "start": 3592,
        "end": 3595,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3627,
      "end": 3691,
      "id": {
        "type": "Identifier",
        "start": 3636,
        "end": 3638,
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
          "start": 3639,
          "end": 3686,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3640,
              "end": 3652,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3640,
                "end": 3641,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3643,
                "end": 3652,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3644,
                    "end": 3645,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3647,
                    "end": 3648,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3650,
                    "end": 3651,
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
            "start": 3653,
            "end": 3686,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3655,
              "end": 3686,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3657,
                  "end": 3684,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3657,
                    "end": 3658,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3658,
                    "end": 3684,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 3660,
                      "end": 3684,
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
        "start": 3688,
        "end": 3691,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
