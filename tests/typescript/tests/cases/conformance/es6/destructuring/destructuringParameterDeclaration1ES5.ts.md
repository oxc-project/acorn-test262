__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 305,
  "end": 3723,
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
      "start": 2172,
      "end": 2179,
      "expression": {
        "type": "CallExpression",
        "start": 2172,
        "end": 2178,
        "callee": {
          "type": "Identifier",
          "start": 2172,
          "end": 2174,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2175,
            "end": 2177,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2220,
      "end": 2230,
      "expression": {
        "type": "CallExpression",
        "start": 2220,
        "end": 2229,
        "callee": {
          "type": "Identifier",
          "start": 2220,
          "end": 2222,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2223,
            "end": 2228,
            "properties": [
              {
                "type": "Property",
                "start": 2224,
                "end": 2227,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2224,
                  "end": 2225,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2226,
                  "end": 2227,
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
      "start": 2269,
      "end": 2282,
      "expression": {
        "type": "CallExpression",
        "start": 2269,
        "end": 2281,
        "callee": {
          "type": "Identifier",
          "start": 2269,
          "end": 2271,
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2272,
            "end": 2280,
            "properties": [
              {
                "type": "Property",
                "start": 2274,
                "end": 2278,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2274,
                  "end": 2275,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2277,
                  "end": 2278,
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
      "start": 2329,
      "end": 2354,
      "expression": {
        "type": "CallExpression",
        "start": 2329,
        "end": 2353,
        "callee": {
          "type": "Identifier",
          "start": 2329,
          "end": 2331,
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2332,
            "end": 2352,
            "elements": [
              {
                "type": "Literal",
                "start": 2333,
                "end": 2334,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2336,
                "end": 2337,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2339,
                "end": 2351,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2340,
                    "end": 2350,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2341,
                        "end": 2349,
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
      "start": 2411,
      "end": 2449,
      "expression": {
        "type": "CallExpression",
        "start": 2411,
        "end": 2448,
        "callee": {
          "type": "Identifier",
          "start": 2411,
          "end": 2413,
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 2414,
            "end": 2447,
            "elements": [
              {
                "type": "Literal",
                "start": 2415,
                "end": 2416,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2418,
                "end": 2419,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "ArrayExpression",
                "start": 2421,
                "end": 2433,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 2422,
                    "end": 2432,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2423,
                        "end": 2431,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 2435,
                "end": 2440,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 2442,
                "end": 2446,
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
      "start": 2634,
      "end": 2653,
      "id": {
        "type": "Identifier",
        "start": 2643,
        "end": 2645,
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
          "start": 2646,
          "end": 2648,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2650,
        "end": 2653,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2654,
      "end": 2677,
      "id": {
        "type": "Identifier",
        "start": 2663,
        "end": 2665,
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
          "start": 2666,
          "end": 2672,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 2666,
            "end": 2667,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 2670,
            "end": 2672,
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
        "start": 2674,
        "end": 2677,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2679,
      "end": 2754,
      "id": {
        "type": "Identifier",
        "start": 2689,
        "end": 2691,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2692,
        "end": 2754,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2698,
            "end": 2713,
            "key": {
              "type": "Identifier",
              "start": 2698,
              "end": 2700,
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
                "start": 2701,
                "end": 2711,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2702,
                    "end": 2703,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2705,
                    "end": 2706,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2708,
                    "end": 2709,
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
            "start": 2718,
            "end": 2733,
            "key": {
              "type": "Identifier",
              "start": 2718,
              "end": 2720,
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
                "start": 2721,
                "end": 2731,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 2722,
                    "end": 2723,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2722,
                      "end": 2723,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2722,
                      "end": 2723,
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
                    "start": 2725,
                    "end": 2726,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2725,
                      "end": 2726,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2725,
                      "end": 2726,
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
                    "start": 2728,
                    "end": 2729,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2728,
                      "end": 2729,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2728,
                      "end": 2729,
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
            "start": 2738,
            "end": 2752,
            "key": {
              "type": "Identifier",
              "start": 2738,
              "end": 2740,
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
                "start": 2741,
                "end": 2750,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2742,
                    "end": 2743,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2745,
                    "end": 2746,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2748,
                    "end": 2749,
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
      "start": 2756,
      "end": 2852,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2762,
        "end": 2764,
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
          "start": 2776,
          "end": 2778,
          "expression": {
            "type": "Identifier",
            "start": 2776,
            "end": 2778,
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
        "start": 2779,
        "end": 2852,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2785,
            "end": 2802,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2785,
              "end": 2796,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2796,
              "end": 2802,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2799,
                "end": 2802,
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
            "start": 2807,
            "end": 2815,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2807,
              "end": 2809,
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2809,
              "end": 2815,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2812,
                "end": 2815,
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
            "start": 2820,
            "end": 2828,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2820,
              "end": 2822,
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2822,
              "end": 2828,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2825,
                "end": 2828,
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
            "start": 2833,
            "end": 2850,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2833,
              "end": 2835,
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2835,
              "end": 2850,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2836,
                  "end": 2845,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2837,
                      "end": 2838,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2840,
                      "end": 2841,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2843,
                      "end": 2844,
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
                "start": 2847,
                "end": 2850,
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
      "start": 2854,
      "end": 2946,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2860,
        "end": 2862,
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
          "start": 2874,
          "end": 2876,
          "expression": {
            "type": "Identifier",
            "start": 2874,
            "end": 2876,
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
        "start": 2877,
        "end": 2946,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2883,
            "end": 2900,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2883,
              "end": 2885,
              "decorators": [],
              "name": "d3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2885,
              "end": 2900,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2886,
                  "end": 2895,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2887,
                      "end": 2888,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2890,
                      "end": 2891,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2893,
                      "end": 2894,
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
                "start": 2897,
                "end": 2900,
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
            "start": 2905,
            "end": 2922,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2905,
              "end": 2907,
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2907,
              "end": 2922,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2908,
                  "end": 2917,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2909,
                      "end": 2910,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2909,
                        "end": 2910,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2909,
                        "end": 2910,
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
                      "start": 2912,
                      "end": 2913,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2912,
                        "end": 2913,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2912,
                        "end": 2913,
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
                      "start": 2915,
                      "end": 2916,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2915,
                        "end": 2916,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2915,
                        "end": 2916,
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
                "start": 2919,
                "end": 2922,
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
            "start": 2927,
            "end": 2944,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2927,
              "end": 2929,
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2929,
              "end": 2944,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ArrayPattern",
                  "start": 2930,
                  "end": 2939,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 2931,
                      "end": 2932,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2934,
                      "end": 2935,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2937,
                      "end": 2938,
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
                "start": 2941,
                "end": 2944,
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
      "start": 2949,
      "end": 2989,
      "id": {
        "type": "Identifier",
        "start": 2958,
        "end": 2960,
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
          "start": 2961,
          "end": 2984,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 2961,
            "end": 2967,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 2962,
                "end": 2963,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2962,
                  "end": 2963,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 2962,
                  "end": 2963,
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
                "start": 2965,
                "end": 2966,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2965,
                  "end": 2966,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 2965,
                  "end": 2966,
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
            "start": 2970,
            "end": 2984,
            "properties": [
              {
                "type": "Property",
                "start": 2972,
                "end": 2976,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2972,
                  "end": 2973,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2975,
                  "end": 2976,
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
                "start": 2978,
                "end": 2982,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2978,
                  "end": 2979,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2981,
                  "end": 2982,
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
        "start": 2986,
        "end": 2989,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2990,
      "end": 2995,
      "expression": {
        "type": "CallExpression",
        "start": 2990,
        "end": 2994,
        "callee": {
          "type": "Identifier",
          "start": 2990,
          "end": 2992,
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
      "start": 3363,
      "end": 3391,
      "id": {
        "type": "Identifier",
        "start": 3372,
        "end": 3374,
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
          "start": 3375,
          "end": 3386,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3376,
              "end": 3385,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3376,
                "end": 3377,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3379,
                "end": 3385,
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
        "start": 3388,
        "end": 3391,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3422,
      "end": 3457,
      "id": {
        "type": "Identifier",
        "start": 3431,
        "end": 3433,
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
          "start": 3434,
          "end": 3452,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3435,
              "end": 3436,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3435,
                "end": 3436,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3435,
                "end": 3436,
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
            "start": 3437,
            "end": 3452,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3439,
              "end": 3452,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3441,
                  "end": 3450,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3441,
                    "end": 3442,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3442,
                    "end": 3450,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3444,
                      "end": 3450
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
        "start": 3454,
        "end": 3457,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3479,
      "end": 3515,
      "id": {
        "type": "Identifier",
        "start": 3488,
        "end": 3490,
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
          "start": 3491,
          "end": 3510,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3492,
              "end": 3493,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3492,
                "end": 3493,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 3492,
                "end": 3493,
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
            "start": 3494,
            "end": 3510,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3496,
              "end": 3510,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3498,
                  "end": 3508,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3498,
                    "end": 3499,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3500,
                    "end": 3508,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3502,
                      "end": 3508
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
        "start": 3512,
        "end": 3515,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3554,
      "end": 3596,
      "id": {
        "type": "Identifier",
        "start": 3563,
        "end": 3565,
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
          "start": 3566,
          "end": 3591,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3567,
              "end": 3589,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3567,
                "end": 3568,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3570,
                "end": 3589,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3571,
                    "end": 3577,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3578,
                    "end": 3584,
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3585,
                    "end": 3588,
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
        "start": 3593,
        "end": 3596,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3628,
      "end": 3692,
      "id": {
        "type": "Identifier",
        "start": 3637,
        "end": 3639,
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
          "start": 3640,
          "end": 3687,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 3641,
              "end": 3653,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 3641,
                "end": 3642,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrayPattern",
                "start": 3644,
                "end": 3653,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 3645,
                    "end": 3646,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3648,
                    "end": 3649,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3651,
                    "end": 3652,
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
            "start": 3654,
            "end": 3687,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3656,
              "end": 3687,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3658,
                  "end": 3685,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3658,
                    "end": 3659,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3659,
                    "end": 3685,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 3661,
                      "end": 3685,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 3662,
                          "end": 3668
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3670,
                          "end": 3676
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 3678,
                          "end": 3684
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
        "start": 3689,
        "end": 3692,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
