nearbyIdenticalGenericLambdasAssignable.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 743,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 35,
            "decorators": [],
            "name": "fA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 35,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 18,
                "end": 35,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 27,
                    "end": 35,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 29,
                        "end": 33,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 29,
                          "end": 30,
                          "decorators": [],
                          "name": "v",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 30,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 32,
                            "end": 33,
                            "typeName": {
                              "type": "Identifier",
                              "start": 32,
                              "end": 33,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 18,
                  "end": 21,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 19,
                      "end": 20,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 45,
            "decorators": [],
            "name": "fB",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 48,
            "end": 94,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 94,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 63,
                  "end": 92,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 70,
                    "end": 91,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 72,
                        "end": 89,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "decorators": [],
                          "name": "v",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "TSAsExpression",
                          "start": 75,
                          "end": 89,
                          "expression": {
                            "type": "TSAsExpression",
                            "start": 75,
                            "end": 84,
                            "expression": {
                              "type": "Literal",
                              "start": 75,
                              "end": 77,
                              "raw": "''",
                              "value": ""
                            },
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 81,
                              "end": 84
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 88,
                            "end": 89,
                            "typeName": {
                              "type": "Identifier",
                              "start": 88,
                              "end": 89,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 48,
              "end": 51,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 49,
                  "end": 50,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 104,
            "decorators": [],
            "name": "fC",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 107,
            "end": 153,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 116,
              "end": 153,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 122,
                  "end": 151,
                  "argument": {
                    "type": "TSAsExpression",
                    "start": 129,
                    "end": 150,
                    "expression": {
                      "type": "TSAsExpression",
                      "start": 129,
                      "end": 138,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 129,
                        "end": 131,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 135,
                        "end": 138
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 142,
                      "end": 150,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 144,
                          "end": 148,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "decorators": [],
                            "name": "v",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 145,
                            "end": 148,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 147,
                              "end": 148,
                              "typeName": {
                                "type": "Identifier",
                                "start": 147,
                                "end": 148,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 107,
              "end": 110,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 108,
                  "end": 109,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 202,
      "end": 222,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 209,
        "decorators": [],
        "name": "TA",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 212,
        "end": 221,
        "exprName": {
          "type": "Identifier",
          "start": 219,
          "end": 221,
          "decorators": [],
          "name": "fA",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 223,
      "end": 243,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 230,
        "decorators": [],
        "name": "TB",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 233,
        "end": 242,
        "exprName": {
          "type": "Identifier",
          "start": 240,
          "end": 242,
          "decorators": [],
          "name": "fB",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 244,
      "end": 264,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 251,
        "decorators": [],
        "name": "TC",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 254,
        "end": 263,
        "exprName": {
          "type": "Identifier",
          "start": 261,
          "end": 263,
          "decorators": [],
          "name": "fC",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 265,
      "end": 293,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 272,
        "decorators": [],
        "name": "TL",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 275,
        "end": 292,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 281,
          "end": 292,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 284,
            "end": 292,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 286,
                "end": 290,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 287,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 290,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 289,
                    "end": 290,
                    "typeName": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 275,
          "end": 278,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 276,
              "end": 277,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 296,
      "end": 331,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 317,
        "decorators": [],
        "name": "accA",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 318,
          "end": 323,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 319,
            "end": 323,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 321,
              "end": 323,
              "typeName": {
                "type": "Identifier",
                "start": 321,
                "end": 323,
                "decorators": [],
                "name": "TA",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 324,
        "end": 330,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 326,
          "end": 330
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 332,
      "end": 367,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 353,
        "decorators": [],
        "name": "accB",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 354,
          "end": 359,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 355,
            "end": 359,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 359,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 359,
                "decorators": [],
                "name": "TB",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 360,
        "end": 366,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 362,
          "end": 366
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 368,
      "end": 403,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 389,
        "decorators": [],
        "name": "accC",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 390,
          "end": 395,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 395,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 393,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 393,
                "end": 395,
                "decorators": [],
                "name": "TC",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 396,
        "end": 402,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 398,
          "end": 402
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 404,
      "end": 439,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 425,
        "decorators": [],
        "name": "accL",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 426,
          "end": 431,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 427,
            "end": 431,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 429,
              "end": 431,
              "typeName": {
                "type": "Identifier",
                "start": 429,
                "end": 431,
                "decorators": [],
                "name": "TL",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 432,
        "end": 438,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 434,
          "end": 438
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 501,
      "expression": {
        "type": "CallExpression",
        "start": 492,
        "end": 500,
        "arguments": [
          {
            "type": "Identifier",
            "start": 497,
            "end": 499,
            "decorators": [],
            "name": "fA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 492,
          "end": 496,
          "decorators": [],
          "name": "accA",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 502,
      "end": 511,
      "expression": {
        "type": "CallExpression",
        "start": 502,
        "end": 510,
        "arguments": [
          {
            "type": "Identifier",
            "start": 507,
            "end": 509,
            "decorators": [],
            "name": "fB",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 502,
          "end": 506,
          "decorators": [],
          "name": "accA",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 521,
      "expression": {
        "type": "CallExpression",
        "start": 512,
        "end": 520,
        "arguments": [
          {
            "type": "Identifier",
            "start": 517,
            "end": 519,
            "decorators": [],
            "name": "fC",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 512,
          "end": 516,
          "decorators": [],
          "name": "accA",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 560,
      "end": 569,
      "expression": {
        "type": "CallExpression",
        "start": 560,
        "end": 568,
        "arguments": [
          {
            "type": "Identifier",
            "start": 565,
            "end": 567,
            "decorators": [],
            "name": "fA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 560,
          "end": 564,
          "decorators": [],
          "name": "accB",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 570,
      "end": 579,
      "expression": {
        "type": "CallExpression",
        "start": 570,
        "end": 578,
        "arguments": [
          {
            "type": "Identifier",
            "start": 575,
            "end": 577,
            "decorators": [],
            "name": "fB",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 570,
          "end": 574,
          "decorators": [],
          "name": "accB",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 580,
      "end": 589,
      "expression": {
        "type": "CallExpression",
        "start": 580,
        "end": 588,
        "arguments": [
          {
            "type": "Identifier",
            "start": 585,
            "end": 587,
            "decorators": [],
            "name": "fC",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 580,
          "end": 584,
          "decorators": [],
          "name": "accB",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 608,
      "end": 617,
      "expression": {
        "type": "CallExpression",
        "start": 608,
        "end": 616,
        "arguments": [
          {
            "type": "Identifier",
            "start": 613,
            "end": 615,
            "decorators": [],
            "name": "fA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 608,
          "end": 612,
          "decorators": [],
          "name": "accC",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 618,
      "end": 627,
      "expression": {
        "type": "CallExpression",
        "start": 618,
        "end": 626,
        "arguments": [
          {
            "type": "Identifier",
            "start": 623,
            "end": 625,
            "decorators": [],
            "name": "fB",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 618,
          "end": 622,
          "decorators": [],
          "name": "accC",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 628,
      "end": 637,
      "expression": {
        "type": "CallExpression",
        "start": 628,
        "end": 636,
        "arguments": [
          {
            "type": "Identifier",
            "start": 633,
            "end": 635,
            "decorators": [],
            "name": "fC",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 628,
          "end": 632,
          "decorators": [],
          "name": "accC",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 676,
      "end": 685,
      "expression": {
        "type": "CallExpression",
        "start": 676,
        "end": 684,
        "arguments": [
          {
            "type": "Identifier",
            "start": 681,
            "end": 683,
            "decorators": [],
            "name": "fA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 676,
          "end": 680,
          "decorators": [],
          "name": "accL",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 686,
      "end": 695,
      "expression": {
        "type": "CallExpression",
        "start": 686,
        "end": 694,
        "arguments": [
          {
            "type": "Identifier",
            "start": 691,
            "end": 693,
            "decorators": [],
            "name": "fB",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 686,
          "end": 690,
          "decorators": [],
          "name": "accL",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 696,
      "end": 705,
      "expression": {
        "type": "CallExpression",
        "start": 696,
        "end": 704,
        "arguments": [
          {
            "type": "Identifier",
            "start": 701,
            "end": 703,
            "decorators": [],
            "name": "fC",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 696,
          "end": 700,
          "decorators": [],
          "name": "accL",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
