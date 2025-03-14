__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 4881,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 137,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 36,
        "decorators": [],
        "name": "__Awaited",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 46,
        "end": 136,
        "checkType": {
          "type": "TSTypeReference",
          "start": 46,
          "end": 47,
          "typeName": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSUnionType",
          "start": 56,
          "end": 72,
          "types": [
            {
              "type": "TSNullKeyword",
              "start": 56,
              "end": 60
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 63,
              "end": 72
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 83,
          "end": 136,
          "checkType": {
            "type": "TSTypeReference",
            "start": 83,
            "end": 84,
            "typeName": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 93,
            "end": 113,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 113,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 105,
                  "end": 112,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 111,
                    "end": 112,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 93,
              "end": 104,
              "decorators": [],
              "name": "PromiseLike",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 135,
            "end": 136,
            "typeName": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 116,
            "end": 128,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 125,
              "end": 128,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 126,
                  "end": 127,
                  "typeName": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 125,
              "decorators": [],
              "name": "__Awaited",
              "optional": false
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 75,
          "end": 76,
          "typeName": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 139,
      "end": 247,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 153,
        "decorators": [],
        "name": "MyPromise",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 159,
        "end": 247,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 165,
            "end": 245,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 169,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 173,
                "end": 229,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 229,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 176,
                    "end": 229,
                    "types": [
                      {
                        "type": "TSFunctionType",
                        "start": 177,
                        "end": 209,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 178,
                            "end": 186,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 183,
                              "end": 186,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 185,
                                "end": 186,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 185,
                                  "end": 186,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 188,
                          "end": 209,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 191,
                            "end": 209,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 191,
                                "end": 192,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 191,
                                  "end": 192,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 195,
                                "end": 209,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 206,
                                  "end": 209,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 207,
                                      "end": 208,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 207,
                                        "end": 208,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 195,
                                  "end": 206,
                                  "decorators": [],
                                  "name": "PromiseLike",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 213,
                        "end": 217
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 220,
                        "end": 229
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 244,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 241,
                  "end": 244,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 242,
                      "end": 243,
                      "typeName": {
                        "type": "Identifier",
                        "start": 242,
                        "end": 243,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 241,
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 169,
              "end": 172,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 170,
                  "end": 171,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 155,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 249,
      "end": 303,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 269,
        "decorators": [],
        "name": "InfinitePromise",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 275,
        "end": 302,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 282,
          "end": 302,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 283,
              "end": 301,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 298,
                "end": 301,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 299,
                    "end": 300,
                    "typeName": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 283,
                "end": 298,
                "decorators": [],
                "name": "InfinitePromise",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 275,
          "end": 282,
          "decorators": [],
          "name": "Promise",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 269,
        "end": 272,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 270,
            "end": 271,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 305,
      "end": 390,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 312,
        "decorators": [],
        "name": "P0",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 315,
        "end": 389,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 324,
          "end": 389,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 325,
              "end": 388,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 332,
                "end": 388,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 333,
                    "end": 387,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 333,
                        "end": 339
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 342,
                        "end": 375,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 349,
                          "end": 375,
                          "params": [
                            {
                              "type": "TSUnionType",
                              "start": 350,
                              "end": 374,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 350,
                                  "end": 367,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 359,
                                    "end": 367,
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 360,
                                        "end": 366
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 350,
                                    "end": 359,
                                    "decorators": [],
                                    "name": "MyPromise",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 370,
                                  "end": 374
                                }
                              ]
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 342,
                          "end": 349,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 378,
                        "end": 387
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 332,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 315,
          "end": 324,
          "decorators": [],
          "name": "__Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 391,
      "end": 416,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 398,
        "decorators": [],
        "name": "P1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 401,
        "end": 415,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 410,
          "end": 415,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 411,
              "end": 414
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 401,
          "end": 410,
          "decorators": [],
          "name": "__Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 417,
      "end": 462,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 422,
        "end": 424,
        "decorators": [],
        "name": "P2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 427,
        "end": 461,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 436,
          "end": 461,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 437,
              "end": 460,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 452,
                "end": 460,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 453,
                    "end": 459
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 437,
                "end": 452,
                "decorators": [],
                "name": "InfinitePromise",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 427,
          "end": 436,
          "decorators": [],
          "name": "__Awaited",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 474,
      "end": 638,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 553,
        "end": 638,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 559,
            "end": 567,
            "expression": {
              "type": "AssignmentExpression",
              "start": 559,
              "end": 566,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 559,
                "end": 561,
                "decorators": [],
                "name": "ta",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 564,
                "end": 566,
                "decorators": [],
                "name": "ua",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 572,
            "end": 580,
            "expression": {
              "type": "AssignmentExpression",
              "start": 572,
              "end": 579,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 572,
                "end": 574,
                "decorators": [],
                "name": "ua",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 577,
                "end": 579,
                "decorators": [],
                "name": "ta",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 595,
            "end": 603,
            "expression": {
              "type": "AssignmentExpression",
              "start": 595,
              "end": 602,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 595,
                "end": 597,
                "decorators": [],
                "name": "ta",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 600,
                "end": 602,
                "decorators": [],
                "name": "tx",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 618,
            "end": 626,
            "expression": {
              "type": "AssignmentExpression",
              "start": 618,
              "end": 625,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 618,
                "end": 620,
                "decorators": [],
                "name": "tx",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 623,
                "end": 625,
                "decorators": [],
                "name": "ta",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 486,
        "decorators": [],
        "name": "f11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 503,
          "end": 508,
          "decorators": [],
          "name": "tx",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 505,
            "end": 508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 507,
              "end": 508,
              "typeName": {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 510,
          "end": 526,
          "decorators": [],
          "name": "ta",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 512,
            "end": 526,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 514,
              "end": 526,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 523,
                "end": 526,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 524,
                    "end": 525,
                    "typeName": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 525,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 514,
                "end": 523,
                "decorators": [],
                "name": "__Awaited",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 528,
          "end": 533,
          "decorators": [],
          "name": "ux",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 530,
            "end": 533,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 532,
              "end": 533,
              "typeName": {
                "type": "Identifier",
                "start": 532,
                "end": 533,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 535,
          "end": 551,
          "decorators": [],
          "name": "ua",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 537,
            "end": 551,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 539,
              "end": 551,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 548,
                "end": 551,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 549,
                    "end": 550,
                    "typeName": {
                      "type": "Identifier",
                      "start": 549,
                      "end": 550,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 539,
                "end": 548,
                "decorators": [],
                "name": "__Awaited",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 486,
        "end": 502,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 487,
            "end": 488,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 487,
              "end": 488,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 490,
            "end": 501,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 500,
              "end": 501,
              "typeName": {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 662,
      "end": 768,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 667,
        "end": 674,
        "decorators": [],
        "name": "Flatten",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 707,
        "end": 767,
        "checkType": {
          "type": "TSTypeReference",
          "start": 707,
          "end": 708,
          "typeName": {
            "type": "Identifier",
            "start": 707,
            "end": 708,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 717,
          "end": 726,
          "elementType": {
            "type": "TSUnknownKeyword",
            "start": 717,
            "end": 724
          }
        },
        "falseType": {
          "type": "TSTypeOperator",
          "start": 745,
          "end": 767,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 754,
            "end": 767,
            "elementType": {
              "type": "TSTypeReference",
              "start": 754,
              "end": 765,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 762,
                "end": 765,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 763,
                    "end": 764,
                    "typeName": {
                      "type": "Identifier",
                      "start": 763,
                      "end": 764,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 754,
                "end": 762,
                "decorators": [],
                "name": "_Flatten",
                "optional": false
              }
            }
          }
        },
        "trueType": {
          "type": "TSArrayType",
          "start": 729,
          "end": 742,
          "elementType": {
            "type": "TSTypeReference",
            "start": 729,
            "end": 740,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 737,
              "end": 740,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 738,
                  "end": 739,
                  "typeName": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 739,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 729,
              "end": 737,
              "decorators": [],
              "name": "_Flatten",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 674,
        "end": 704,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 675,
            "end": 703,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 685,
              "end": 703,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 694,
                "end": 703,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 694,
                  "end": 701
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 769,
      "end": 837,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 774,
        "end": 782,
        "decorators": [],
        "name": "_Flatten",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 788,
        "end": 836,
        "checkType": {
          "type": "TSTypeReference",
          "start": 788,
          "end": 789,
          "typeName": {
            "type": "Identifier",
            "start": 788,
            "end": 789,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 798,
          "end": 818,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 807,
            "end": 818,
            "elementType": {
              "type": "TSInferType",
              "start": 808,
              "end": 815,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 814,
                "end": 815,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 815,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                },
                "out": false
              }
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 835,
          "end": 836,
          "typeName": {
            "type": "Identifier",
            "start": 835,
            "end": 836,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 821,
          "end": 832,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 829,
            "end": 832,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 830,
                "end": 831,
                "typeName": {
                  "type": "Identifier",
                  "start": 830,
                  "end": 831,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 821,
            "end": 829,
            "decorators": [],
            "name": "_Flatten",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 782,
        "end": 785,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 783,
            "end": 784,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 783,
              "end": 784,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 839,
      "end": 882,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 844,
        "end": 857,
        "decorators": [],
        "name": "InfiniteArray",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 863,
        "end": 881,
        "elementType": {
          "type": "TSTypeReference",
          "start": 863,
          "end": 879,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 876,
            "end": 879,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 877,
                "end": 878,
                "typeName": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 878,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 863,
            "end": 876,
            "decorators": [],
            "name": "InfiniteArray",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 857,
        "end": 860,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 858,
            "end": 859,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 858,
              "end": 859,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 884,
      "end": 916,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 891,
        "decorators": [],
        "name": "B0",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 894,
        "end": 915,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 901,
          "end": 915,
          "params": [
            {
              "type": "TSArrayType",
              "start": 902,
              "end": 914,
              "elementType": {
                "type": "TSArrayType",
                "start": 902,
                "end": 912,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 902,
                  "end": 910,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 902,
                    "end": 908
                  }
                }
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 894,
          "end": 901,
          "decorators": [],
          "name": "Flatten",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 917,
      "end": 985,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 924,
        "decorators": [],
        "name": "B1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 927,
        "end": 984,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 934,
          "end": 984,
          "params": [
            {
              "type": "TSUnionType",
              "start": 935,
              "end": 983,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 935,
                  "end": 945,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 935,
                    "end": 943,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 935,
                      "end": 941
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 948,
                  "end": 983,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 957,
                    "end": 983,
                    "elementType": {
                      "type": "TSUnionType",
                      "start": 958,
                      "end": 980,
                      "types": [
                        {
                          "type": "TSArrayType",
                          "start": 958,
                          "end": 966,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 958,
                            "end": 964
                          }
                        },
                        {
                          "type": "TSArrayType",
                          "start": 969,
                          "end": 980,
                          "elementType": {
                            "type": "TSArrayType",
                            "start": 969,
                            "end": 978,
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 969,
                              "end": 976
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 927,
          "end": 934,
          "decorators": [],
          "name": "Flatten",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 986,
      "end": 1027,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 991,
        "end": 993,
        "decorators": [],
        "name": "B2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 996,
        "end": 1026,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1003,
          "end": 1026,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1004,
              "end": 1025,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1017,
                "end": 1025,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1018,
                    "end": 1024
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1004,
                "end": 1017,
                "decorators": [],
                "name": "InfiniteArray",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 996,
          "end": 1003,
          "decorators": [],
          "name": "Flatten",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1028,
      "end": 1044,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1033,
        "end": 1035,
        "decorators": [],
        "name": "B3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1038,
        "end": 1043,
        "indexType": {
          "type": "TSLiteralType",
          "start": 1041,
          "end": 1042,
          "literal": {
            "type": "Literal",
            "start": 1041,
            "end": 1042,
            "raw": "0",
            "value": 0
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 1038,
          "end": 1040,
          "typeName": {
            "type": "Identifier",
            "start": 1038,
            "end": 1040,
            "decorators": [],
            "name": "B2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1077,
      "end": 1179,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1082,
        "end": 1089,
        "decorators": [],
        "name": "TupleOf",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1113,
        "end": 1178,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1113,
          "end": 1114,
          "typeName": {
            "type": "Identifier",
            "start": 1113,
            "end": 1114,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1123,
          "end": 1124,
          "typeName": {
            "type": "Identifier",
            "start": 1123,
            "end": 1124,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1173,
          "end": 1178
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 1127,
          "end": 1170,
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 1127,
            "end": 1133
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1142,
            "end": 1143,
            "typeName": {
              "type": "Identifier",
              "start": 1142,
              "end": 1143,
              "decorators": [],
              "name": "N",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 1152,
            "end": 1170,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1160,
              "end": 1170,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1161,
                  "end": 1162,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1161,
                    "end": 1162,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1164,
                  "end": 1165,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1165,
                    "decorators": [],
                    "name": "N",
                    "optional": false
                  }
                },
                {
                  "type": "TSTupleType",
                  "start": 1167,
                  "end": 1169,
                  "elementTypes": []
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1152,
              "end": 1160,
              "decorators": [],
              "name": "_TupleOf",
              "optional": false
            }
          },
          "trueType": {
            "type": "TSArrayType",
            "start": 1146,
            "end": 1149,
            "elementType": {
              "type": "TSTypeReference",
              "start": 1146,
              "end": 1147,
              "typeName": {
                "type": "Identifier",
                "start": 1146,
                "end": 1147,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1089,
        "end": 1110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1090,
            "end": 1091,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1090,
              "end": 1091,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1093,
            "end": 1109,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1103,
              "end": 1109
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1093,
              "end": 1094,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1180,
      "end": 1292,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1185,
        "end": 1193,
        "decorators": [],
        "name": "_TupleOf",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1238,
        "end": 1291,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 1238,
          "end": 1249,
          "indexType": {
            "type": "TSLiteralType",
            "start": 1240,
            "end": 1248,
            "literal": {
              "type": "Literal",
              "start": 1240,
              "end": 1248,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 1238,
            "end": 1239,
            "typeName": {
              "type": "Identifier",
              "start": 1238,
              "end": 1239,
              "decorators": [],
              "name": "R",
              "optional": false
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1258,
          "end": 1259,
          "typeName": {
            "type": "Identifier",
            "start": 1258,
            "end": 1259,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1266,
          "end": 1291,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1274,
            "end": 1291,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1275,
                "end": 1276,
                "typeName": {
                  "type": "Identifier",
                  "start": 1275,
                  "end": 1276,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1278,
                "end": 1279,
                "typeName": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1279,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              },
              {
                "type": "TSTupleType",
                "start": 1281,
                "end": 1290,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 1282,
                    "end": 1283,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1282,
                      "end": 1283,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 1285,
                    "end": 1289,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1288,
                      "end": 1289,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1288,
                        "end": 1289,
                        "decorators": [],
                        "name": "R",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1266,
            "end": 1274,
            "decorators": [],
            "name": "_TupleOf",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1262,
          "end": 1263,
          "typeName": {
            "type": "Identifier",
            "start": 1262,
            "end": 1263,
            "decorators": [],
            "name": "R",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1193,
        "end": 1235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1194,
            "end": 1195,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1194,
              "end": 1195,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1197,
            "end": 1213,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1207,
              "end": 1213
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1197,
              "end": 1198,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1215,
            "end": 1234,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1225,
              "end": 1234,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1225,
                "end": 1232
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1215,
              "end": 1216,
              "decorators": [],
              "name": "R",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1294,
      "end": 1324,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1299,
        "end": 1302,
        "decorators": [],
        "name": "TT0",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1305,
        "end": 1323,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1312,
          "end": 1323,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1313,
              "end": 1319
            },
            {
              "type": "TSLiteralType",
              "start": 1321,
              "end": 1322,
              "literal": {
                "type": "Literal",
                "start": 1321,
                "end": 1322,
                "raw": "4",
                "value": 4
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1305,
          "end": 1312,
          "decorators": [],
          "name": "TupleOf",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1325,
      "end": 1363,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1330,
        "end": 1333,
        "decorators": [],
        "name": "TT1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1336,
        "end": 1362,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1343,
          "end": 1362,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1344,
              "end": 1350
            },
            {
              "type": "TSUnionType",
              "start": 1352,
              "end": 1361,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1352,
                  "end": 1353,
                  "literal": {
                    "type": "Literal",
                    "start": 1352,
                    "end": 1353,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1356,
                  "end": 1357,
                  "literal": {
                    "type": "Literal",
                    "start": 1356,
                    "end": 1357,
                    "raw": "2",
                    "value": 2
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1360,
                  "end": 1361,
                  "literal": {
                    "type": "Literal",
                    "start": 1360,
                    "end": 1361,
                    "raw": "4",
                    "value": 4
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1336,
          "end": 1343,
          "decorators": [],
          "name": "TupleOf",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1364,
      "end": 1399,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1369,
        "end": 1372,
        "decorators": [],
        "name": "TT2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1375,
        "end": 1398,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1382,
          "end": 1398,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1383,
              "end": 1389
            },
            {
              "type": "TSNumberKeyword",
              "start": 1391,
              "end": 1397
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1375,
          "end": 1382,
          "decorators": [],
          "name": "TupleOf",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1400,
      "end": 1432,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1405,
        "end": 1408,
        "decorators": [],
        "name": "TT3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1411,
        "end": 1431,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1418,
          "end": 1431,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1419,
              "end": 1425
            },
            {
              "type": "TSAnyKeyword",
              "start": 1427,
              "end": 1430
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1411,
          "end": 1418,
          "decorators": [],
          "name": "TupleOf",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1433,
      "end": 1465,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1438,
        "end": 1441,
        "decorators": [],
        "name": "TT4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1444,
        "end": 1464,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1451,
          "end": 1464,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1452,
              "end": 1458
            },
            {
              "type": "TSLiteralType",
              "start": 1460,
              "end": 1463,
              "literal": {
                "type": "Literal",
                "start": 1460,
                "end": 1463,
                "raw": "100",
                "value": 100
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1444,
          "end": 1451,
          "decorators": [],
          "name": "TupleOf",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1466,
      "end": 1499,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1471,
        "end": 1474,
        "decorators": [],
        "name": "TT5",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1477,
        "end": 1498,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1484,
          "end": 1498,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1485,
              "end": 1491
            },
            {
              "type": "TSLiteralType",
              "start": 1493,
              "end": 1497,
              "literal": {
                "type": "Literal",
                "start": 1493,
                "end": 1497,
                "raw": "1000",
                "value": 1000
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1477,
          "end": 1484,
          "decorators": [],
          "name": "TupleOf",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1517,
      "end": 1638,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1609,
        "end": 1638,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1615,
            "end": 1623,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1615,
              "end": 1622,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1615,
                "end": 1617,
                "decorators": [],
                "name": "tn",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1620,
                "end": 1622,
                "decorators": [],
                "name": "tm",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1628,
            "end": 1636,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1628,
              "end": 1635,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1628,
                "end": 1630,
                "decorators": [],
                "name": "tm",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1633,
                "end": 1635,
                "decorators": [],
                "name": "tn",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1529,
        "decorators": [],
        "name": "f22",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1561,
          "end": 1583,
          "decorators": [],
          "name": "tn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1563,
            "end": 1583,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1565,
              "end": 1583,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1572,
                "end": 1583,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1573,
                    "end": 1579
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1581,
                    "end": 1582,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1581,
                      "end": 1582,
                      "decorators": [],
                      "name": "N",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1565,
                "end": 1572,
                "decorators": [],
                "name": "TupleOf",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1585,
          "end": 1607,
          "decorators": [],
          "name": "tm",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1587,
            "end": 1607,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1589,
              "end": 1607,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1596,
                "end": 1607,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1597,
                    "end": 1603
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1605,
                    "end": 1606,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1605,
                      "end": 1606,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1589,
                "end": 1596,
                "decorators": [],
                "name": "TupleOf",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1529,
        "end": 1560,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1530,
            "end": 1546,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1540,
              "end": 1546
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1530,
              "end": 1531,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1548,
            "end": 1559,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1558,
              "end": 1559,
              "typeName": {
                "type": "Identifier",
                "start": 1558,
                "end": 1559,
                "decorators": [],
                "name": "N",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1548,
              "end": 1549,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1640,
      "end": 1685,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1657,
        "end": 1660,
        "decorators": [],
        "name": "f23",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1664,
          "end": 1680,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1665,
            "end": 1680,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1667,
              "end": 1680,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1674,
                "end": 1680,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1675,
                    "end": 1676,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1675,
                      "end": 1676,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1678,
                    "end": 1679,
                    "literal": {
                      "type": "Literal",
                      "start": 1678,
                      "end": 1679,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1667,
                "end": 1674,
                "decorators": [],
                "name": "TupleOf",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1681,
        "end": 1684,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1683,
          "end": 1684,
          "typeName": {
            "type": "Identifier",
            "start": 1683,
            "end": 1684,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1660,
        "end": 1663,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1661,
            "end": 1662,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1661,
              "end": 1662,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1687,
      "end": 1708,
      "expression": {
        "type": "CallExpression",
        "start": 1687,
        "end": 1707,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1691,
            "end": 1706,
            "elements": [
              {
                "type": "Literal",
                "start": 1692,
                "end": 1695,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 1697,
                "end": 1700,
                "raw": "'b'",
                "value": "b"
              },
              {
                "type": "Literal",
                "start": 1702,
                "end": 1705,
                "raw": "'c'",
                "value": "c"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1687,
          "end": 1690,
          "decorators": [],
          "name": "f23",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1753,
      "end": 1782,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1770,
        "end": 1782,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1772,
            "end": 1780,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1772,
              "end": 1777,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1777,
              "end": 1780,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1779,
                "end": 1780,
                "typeName": {
                  "type": "Identifier",
                  "start": 1779,
                  "end": 1780,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1763,
        "end": 1766,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1766,
        "end": 1769,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1767,
            "end": 1768,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1767,
              "end": 1768,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 1782,
      "end": 1783
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1784,
      "end": 1820,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1789,
        "end": 1795,
        "decorators": [],
        "name": "RecBox",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1801,
        "end": 1819,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1801,
            "end": 1802,
            "typeName": {
              "type": "Identifier",
              "start": 1801,
              "end": 1802,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1805,
            "end": 1819,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1808,
              "end": 1819,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1809,
                  "end": 1818,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1815,
                    "end": 1818,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1816,
                        "end": 1817,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1816,
                          "end": 1817,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1809,
                    "end": 1815,
                    "decorators": [],
                    "name": "RecBox",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1805,
              "end": 1808,
              "decorators": [],
              "name": "Box",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1795,
        "end": 1798,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1796,
            "end": 1797,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1796,
              "end": 1797,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1821,
      "end": 1853,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1826,
        "end": 1832,
        "decorators": [],
        "name": "InfBox",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1838,
        "end": 1852,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1841,
          "end": 1852,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1842,
              "end": 1851,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1848,
                "end": 1851,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1849,
                    "end": 1850,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1849,
                      "end": 1850,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1842,
                "end": 1848,
                "decorators": [],
                "name": "InfBox",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1838,
          "end": 1841,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1832,
        "end": 1835,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1833,
            "end": 1834,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1833,
              "end": 1834,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1855,
      "end": 1899,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1872,
        "end": 1877,
        "decorators": [],
        "name": "unbox",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1881,
          "end": 1895,
          "decorators": [],
          "name": "box",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1884,
            "end": 1895,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1886,
              "end": 1895,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1892,
                "end": 1895,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1893,
                    "end": 1894,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1893,
                      "end": 1894,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1886,
                "end": 1892,
                "decorators": [],
                "name": "RecBox",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1896,
        "end": 1899,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1898,
          "end": 1899,
          "typeName": {
            "type": "Identifier",
            "start": 1898,
            "end": 1899,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1877,
        "end": 1880,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1878,
            "end": 1879,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1878,
              "end": 1879,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1901,
      "end": 1923,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1906,
        "end": 1908,
        "decorators": [],
        "name": "T1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1911,
        "end": 1922,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1914,
          "end": 1922,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1915,
              "end": 1921
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1911,
          "end": 1914,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1924,
      "end": 1942,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1929,
        "end": 1931,
        "decorators": [],
        "name": "T2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1934,
        "end": 1941,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1937,
          "end": 1941,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1938,
              "end": 1940,
              "typeName": {
                "type": "Identifier",
                "start": 1938,
                "end": 1940,
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1934,
          "end": 1937,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1943,
      "end": 1961,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1948,
        "end": 1950,
        "decorators": [],
        "name": "T3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1953,
        "end": 1960,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1956,
          "end": 1960,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1957,
              "end": 1959,
              "typeName": {
                "type": "Identifier",
                "start": 1957,
                "end": 1959,
                "decorators": [],
                "name": "T2",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1953,
          "end": 1956,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1962,
      "end": 1980,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1967,
        "end": 1969,
        "decorators": [],
        "name": "T4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1972,
        "end": 1979,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1975,
          "end": 1979,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1976,
              "end": 1978,
              "typeName": {
                "type": "Identifier",
                "start": 1976,
                "end": 1978,
                "decorators": [],
                "name": "T3",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1972,
          "end": 1975,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1981,
      "end": 1999,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1986,
        "end": 1988,
        "decorators": [],
        "name": "T5",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1991,
        "end": 1998,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1994,
          "end": 1998,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1995,
              "end": 1997,
              "typeName": {
                "type": "Identifier",
                "start": 1995,
                "end": 1997,
                "decorators": [],
                "name": "T4",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1991,
          "end": 1994,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2000,
      "end": 2018,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2005,
        "end": 2007,
        "decorators": [],
        "name": "T6",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2010,
        "end": 2017,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2013,
          "end": 2017,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2014,
              "end": 2016,
              "typeName": {
                "type": "Identifier",
                "start": 2014,
                "end": 2016,
                "decorators": [],
                "name": "T5",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2010,
          "end": 2013,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2020,
      "end": 2073,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2032,
          "end": 2072,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2032,
            "end": 2072,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2034,
              "end": 2072,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2036,
                "end": 2072,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2039,
                  "end": 2072,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2040,
                      "end": 2071,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2043,
                        "end": 2071,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2044,
                            "end": 2070,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2047,
                              "end": 2070,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2048,
                                  "end": 2069,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 2051,
                                    "end": 2069,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2052,
                                        "end": 2068,
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 2055,
                                          "end": 2068,
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "start": 2056,
                                              "end": 2067,
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "start": 2059,
                                                "end": 2067,
                                                "params": [
                                                  {
                                                    "type": "TSStringKeyword",
                                                    "start": 2060,
                                                    "end": 2066
                                                  }
                                                ]
                                              },
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 2056,
                                                "end": 2059,
                                                "decorators": [],
                                                "name": "Box",
                                                "optional": false
                                              }
                                            }
                                          ]
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2052,
                                          "end": 2055,
                                          "decorators": [],
                                          "name": "Box",
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2048,
                                    "end": 2051,
                                    "decorators": [],
                                    "name": "Box",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 2044,
                              "end": 2047,
                              "decorators": [],
                              "name": "Box",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 2040,
                        "end": 2043,
                        "decorators": [],
                        "name": "Box",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2036,
                  "end": 2039,
                  "decorators": [],
                  "name": "Box",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2074,
      "end": 2093,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2086,
          "end": 2092,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2086,
            "end": 2092,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2088,
              "end": 2092,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2090,
                "end": 2092,
                "typeName": {
                  "type": "Identifier",
                  "start": 2090,
                  "end": 2092,
                  "decorators": [],
                  "name": "T6",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2094,
      "end": 2125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2106,
          "end": 2124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2106,
            "end": 2124,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2108,
              "end": 2124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2110,
                "end": 2124,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2116,
                  "end": 2124,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2117,
                      "end": 2123
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2110,
                  "end": 2116,
                  "decorators": [],
                  "name": "InfBox",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2126,
      "end": 2183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2138,
          "end": 2182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2138,
            "end": 2182,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2140,
              "end": 2182,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2142,
                "end": 2182,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2144,
                    "end": 2181,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2144,
                      "end": 2149,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2149,
                      "end": 2181,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2151,
                        "end": 2181,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2153,
                            "end": 2180,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2153,
                              "end": 2158,
                              "decorators": [],
                              "name": "value",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2158,
                              "end": 2180,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2160,
                                "end": 2180,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2162,
                                    "end": 2178,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2162,
                                      "end": 2167,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2167,
                                      "end": 2178,
                                      "typeAnnotation": {
                                        "type": "TSTypeQuery",
                                        "start": 2169,
                                        "end": 2178,
                                        "exprName": {
                                          "type": "Identifier",
                                          "start": 2176,
                                          "end": 2178,
                                          "decorators": [],
                                          "name": "b4",
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
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2185,
      "end": 2195,
      "expression": {
        "type": "CallExpression",
        "start": 2185,
        "end": 2194,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2191,
            "end": 2193,
            "decorators": [],
            "name": "b1",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2185,
          "end": 2190,
          "decorators": [],
          "name": "unbox",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2207,
      "end": 2217,
      "expression": {
        "type": "CallExpression",
        "start": 2207,
        "end": 2216,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2213,
            "end": 2215,
            "decorators": [],
            "name": "b2",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2207,
          "end": 2212,
          "decorators": [],
          "name": "unbox",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2229,
      "end": 2239,
      "expression": {
        "type": "CallExpression",
        "start": 2229,
        "end": 2238,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2235,
            "end": 2237,
            "decorators": [],
            "name": "b3",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2229,
          "end": 2234,
          "decorators": [],
          "name": "unbox",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2259,
      "end": 2329,
      "expression": {
        "type": "CallExpression",
        "start": 2259,
        "end": 2328,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2265,
            "end": 2327,
            "properties": [
              {
                "type": "Property",
                "start": 2267,
                "end": 2326,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2267,
                  "end": 2272,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 2274,
                  "end": 2326,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2276,
                      "end": 2325,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2276,
                        "end": 2281,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2283,
                        "end": 2325,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2285,
                            "end": 2324,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2285,
                              "end": 2290,
                              "decorators": [],
                              "name": "value",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 2292,
                              "end": 2324,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2294,
                                  "end": 2323,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2294,
                                    "end": 2299,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 2301,
                                    "end": 2323,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 2303,
                                        "end": 2322,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2303,
                                          "end": 2308,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "ObjectExpression",
                                          "start": 2310,
                                          "end": 2322,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 2312,
                                              "end": 2320,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 2312,
                                                "end": 2317,
                                                "decorators": [],
                                                "name": "value",
                                                "optional": false
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "Literal",
                                                "start": 2319,
                                                "end": 2320,
                                                "raw": "5",
                                                "value": 5
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2259,
          "end": 2264,
          "decorators": [],
          "name": "unbox",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2341,
      "end": 2351,
      "expression": {
        "type": "CallExpression",
        "start": 2341,
        "end": 2350,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2347,
            "end": 2349,
            "decorators": [],
            "name": "b4",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2341,
          "end": 2346,
          "decorators": [],
          "name": "unbox",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2387,
      "end": 2447,
      "expression": {
        "type": "CallExpression",
        "start": 2387,
        "end": 2446,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2393,
            "end": 2445,
            "properties": [
              {
                "type": "Property",
                "start": 2395,
                "end": 2444,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2395,
                  "end": 2400,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 2402,
                  "end": 2444,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2404,
                      "end": 2443,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2404,
                        "end": 2409,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2411,
                        "end": 2443,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2413,
                            "end": 2441,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2417,
                              "end": 2422,
                              "decorators": [],
                              "name": "value",
                              "optional": false
                            },
                            "kind": "get",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 2422,
                              "end": 2441,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 2425,
                                "end": 2441,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 2427,
                                    "end": 2439,
                                    "argument": {
                                      "type": "ThisExpression",
                                      "start": 2434,
                                      "end": 2438
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2387,
          "end": 2392,
          "decorators": [],
          "name": "unbox",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2540,
      "end": 2568,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2545,
        "end": 2549,
        "decorators": [],
        "name": "Box1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2555,
        "end": 2567,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2557,
            "end": 2565,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2557,
              "end": 2562,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2562,
              "end": 2565,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2564,
                "end": 2565,
                "typeName": {
                  "type": "Identifier",
                  "start": 2564,
                  "end": 2565,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2549,
        "end": 2552,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2550,
            "end": 2551,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2550,
              "end": 2551,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2569,
      "end": 2597,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2574,
        "end": 2578,
        "decorators": [],
        "name": "Box2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2584,
        "end": 2596,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2586,
            "end": 2594,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2586,
              "end": 2591,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2591,
              "end": 2594,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2593,
                "end": 2594,
                "typeName": {
                  "type": "Identifier",
                  "start": 2593,
                  "end": 2594,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2578,
        "end": 2581,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2579,
            "end": 2580,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2579,
              "end": 2580,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2599,
      "end": 2644,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2616,
        "end": 2619,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2623,
          "end": 2639,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2624,
            "end": 2639,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2626,
              "end": 2639,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2630,
                "end": 2639,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2631,
                    "end": 2638,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2635,
                      "end": 2638,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2636,
                          "end": 2637,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2636,
                            "end": 2637,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2631,
                      "end": 2635,
                      "decorators": [],
                      "name": "Box1",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2626,
                "end": 2630,
                "decorators": [],
                "name": "Box1",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2640,
        "end": 2643,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2642,
          "end": 2643,
          "typeName": {
            "type": "Identifier",
            "start": 2642,
            "end": 2643,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2619,
        "end": 2622,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2620,
            "end": 2621,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2620,
              "end": 2621,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2646,
      "end": 2680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2658,
          "end": 2679,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2658,
            "end": 2679,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2659,
              "end": 2679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2661,
                "end": 2679,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2665,
                  "end": 2679,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2666,
                      "end": 2678,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2670,
                        "end": 2678,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2671,
                            "end": 2677
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 2666,
                        "end": 2670,
                        "decorators": [],
                        "name": "Box2",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2661,
                  "end": 2665,
                  "decorators": [],
                  "name": "Box2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2682,
      "end": 2689,
      "expression": {
        "type": "CallExpression",
        "start": 2682,
        "end": 2688,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2686,
            "end": 2687,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2682,
          "end": 2685,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2736,
      "end": 2841,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2741,
        "end": 2750,
        "decorators": [],
        "name": "Intersect",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2783,
        "end": 2840,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2783,
          "end": 2784,
          "typeName": {
            "type": "Identifier",
            "start": 2783,
            "end": 2784,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 2793,
          "end": 2814,
          "elementTypes": [
            {
              "type": "TSInferType",
              "start": 2794,
              "end": 2801,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2800,
                "end": 2801,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 2800,
                  "end": 2801,
                  "decorators": [],
                  "name": "H",
                  "optional": false
                },
                "out": false
              }
            },
            {
              "type": "TSRestType",
              "start": 2803,
              "end": 2813,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 2806,
                "end": 2813,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2812,
                  "end": 2813,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2812,
                    "end": 2813,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 2839,
          "end": 2840,
          "typeName": {
            "type": "Identifier",
            "start": 2839,
            "end": 2840,
            "decorators": [],
            "name": "R",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2817,
          "end": 2836,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2826,
            "end": 2836,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2827,
                "end": 2828,
                "typeName": {
                  "type": "Identifier",
                  "start": 2827,
                  "end": 2828,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSIntersectionType",
                "start": 2830,
                "end": 2835,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2830,
                    "end": 2831,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2830,
                      "end": 2831,
                      "decorators": [],
                      "name": "R",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2834,
                    "end": 2835,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2834,
                      "end": 2835,
                      "decorators": [],
                      "name": "H",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2817,
            "end": 2826,
            "decorators": [],
            "name": "Intersect",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2750,
        "end": 2780,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2751,
            "end": 2766,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 2761,
              "end": 2766,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2761,
                "end": 2764
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2751,
              "end": 2752,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2768,
            "end": 2779,
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2772,
              "end": 2779
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2768,
              "end": 2769,
              "decorators": [],
              "name": "R",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2843,
      "end": 2888,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2848,
        "end": 2850,
        "decorators": [],
        "name": "QQ",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2853,
        "end": 2887,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2862,
          "end": 2887,
          "params": [
            {
              "type": "TSTupleType",
              "start": 2863,
              "end": 2886,
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "start": 2864,
                  "end": 2872,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 2864,
                    "end": 2870
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 2874,
                  "end": 2882,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 2874,
                    "end": 2880
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 2884,
                  "end": 2885,
                  "literal": {
                    "type": "Literal",
                    "start": 2884,
                    "end": 2885,
                    "raw": "7",
                    "value": 7
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2853,
          "end": 2862,
          "decorators": [],
          "name": "Intersect",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2959,
      "end": 3016,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2964,
        "end": 2971,
        "decorators": [],
        "name": "Unpack1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2977,
        "end": 3015,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2977,
          "end": 2978,
          "typeName": {
            "type": "Identifier",
            "start": 2977,
            "end": 2978,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 2987,
          "end": 2998,
          "elementType": {
            "type": "TSInferType",
            "start": 2988,
            "end": 2995,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 2994,
              "end": 2995,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 2994,
                "end": 2995,
                "decorators": [],
                "name": "U",
                "optional": false
              },
              "out": false
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3014,
          "end": 3015,
          "typeName": {
            "type": "Identifier",
            "start": 3014,
            "end": 3015,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3001,
          "end": 3011,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3008,
            "end": 3011,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3009,
                "end": 3010,
                "typeName": {
                  "type": "Identifier",
                  "start": 3009,
                  "end": 3010,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3001,
            "end": 3008,
            "decorators": [],
            "name": "Unpack1",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2971,
        "end": 2974,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2972,
            "end": 2973,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2972,
              "end": 2973,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3017,
      "end": 3074,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3022,
        "end": 3029,
        "decorators": [],
        "name": "Unpack2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3035,
        "end": 3073,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3035,
          "end": 3036,
          "typeName": {
            "type": "Identifier",
            "start": 3035,
            "end": 3036,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 3045,
          "end": 3056,
          "elementType": {
            "type": "TSInferType",
            "start": 3046,
            "end": 3053,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3052,
              "end": 3053,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3052,
                "end": 3053,
                "decorators": [],
                "name": "U",
                "optional": false
              },
              "out": false
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3072,
          "end": 3073,
          "typeName": {
            "type": "Identifier",
            "start": 3072,
            "end": 3073,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3059,
          "end": 3069,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3066,
            "end": 3069,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3067,
                "end": 3068,
                "typeName": {
                  "type": "Identifier",
                  "start": 3067,
                  "end": 3068,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3059,
            "end": 3066,
            "decorators": [],
            "name": "Unpack2",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3029,
        "end": 3032,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3030,
            "end": 3031,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3030,
              "end": 3031,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3076,
      "end": 3175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3135,
        "end": 3175,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3141,
            "end": 3147,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3141,
              "end": 3146,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3141,
                "end": 3142,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 3145,
                "end": 3146,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3152,
            "end": 3158,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3152,
              "end": 3157,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3152,
                "end": 3153,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 3156,
                "end": 3157,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3163,
            "end": 3173,
            "expression": {
              "type": "CallExpression",
              "start": 3163,
              "end": 3172,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3167,
                  "end": 3168,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 3170,
                  "end": 3171,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 3163,
                "end": 3166,
                "decorators": [],
                "name": "f20",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3085,
        "end": 3088,
        "decorators": [],
        "name": "f20",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3105,
          "end": 3118,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3106,
            "end": 3118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3108,
              "end": 3118,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3115,
                "end": 3118,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3116,
                    "end": 3117,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3116,
                      "end": 3117,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3108,
                "end": 3115,
                "decorators": [],
                "name": "Unpack1",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3120,
          "end": 3133,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3121,
            "end": 3133,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3123,
              "end": 3133,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3130,
                "end": 3133,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3131,
                    "end": 3132,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3131,
                      "end": 3132,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3123,
                "end": 3130,
                "decorators": [],
                "name": "Unpack2",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3088,
        "end": 3104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3089,
            "end": 3090,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3089,
              "end": 3090,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3092,
            "end": 3103,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3102,
              "end": 3103,
              "typeName": {
                "type": "Identifier",
                "start": 3102,
                "end": 3103,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3092,
              "end": 3093,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3177,
      "end": 3282,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3182,
        "end": 3187,
        "decorators": [],
        "name": "Grow1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3229,
        "end": 3281,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 3229,
          "end": 3240,
          "indexType": {
            "type": "TSLiteralType",
            "start": 3231,
            "end": 3239,
            "literal": {
              "type": "Literal",
              "start": 3231,
              "end": 3239,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 3229,
            "end": 3230,
            "typeName": {
              "type": "Identifier",
              "start": 3229,
              "end": 3230,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3249,
          "end": 3250,
          "typeName": {
            "type": "Identifier",
            "start": 3249,
            "end": 3250,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3257,
          "end": 3281,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3262,
            "end": 3281,
            "params": [
              {
                "type": "TSTupleType",
                "start": 3263,
                "end": 3277,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 3264,
                    "end": 3270
                  },
                  {
                    "type": "TSRestType",
                    "start": 3272,
                    "end": 3276,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3275,
                      "end": 3276,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3275,
                        "end": 3276,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 3279,
                "end": 3280,
                "typeName": {
                  "type": "Identifier",
                  "start": 3279,
                  "end": 3280,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3257,
            "end": 3262,
            "decorators": [],
            "name": "Grow1",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3253,
          "end": 3254,
          "typeName": {
            "type": "Identifier",
            "start": 3253,
            "end": 3254,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3187,
        "end": 3226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3188,
            "end": 3207,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 3198,
              "end": 3207,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3198,
                "end": 3205
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3188,
              "end": 3189,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3209,
            "end": 3225,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3219,
              "end": 3225
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3209,
              "end": 3210,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3283,
      "end": 3388,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3288,
        "end": 3293,
        "decorators": [],
        "name": "Grow2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3335,
        "end": 3387,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 3335,
          "end": 3346,
          "indexType": {
            "type": "TSLiteralType",
            "start": 3337,
            "end": 3345,
            "literal": {
              "type": "Literal",
              "start": 3337,
              "end": 3345,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 3335,
            "end": 3336,
            "typeName": {
              "type": "Identifier",
              "start": 3335,
              "end": 3336,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3355,
          "end": 3356,
          "typeName": {
            "type": "Identifier",
            "start": 3355,
            "end": 3356,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3363,
          "end": 3387,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3368,
            "end": 3387,
            "params": [
              {
                "type": "TSTupleType",
                "start": 3369,
                "end": 3383,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3370,
                    "end": 3376
                  },
                  {
                    "type": "TSRestType",
                    "start": 3378,
                    "end": 3382,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3381,
                      "end": 3382,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3381,
                        "end": 3382,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 3385,
                "end": 3386,
                "typeName": {
                  "type": "Identifier",
                  "start": 3385,
                  "end": 3386,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3363,
            "end": 3368,
            "decorators": [],
            "name": "Grow2",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3359,
          "end": 3360,
          "typeName": {
            "type": "Identifier",
            "start": 3359,
            "end": 3360,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3293,
        "end": 3332,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3294,
            "end": 3313,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 3304,
              "end": 3313,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3304,
                "end": 3311
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3294,
              "end": 3295,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3315,
            "end": 3331,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3325,
              "end": 3331
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3315,
              "end": 3316,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3390,
      "end": 3483,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3455,
        "end": 3483,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3461,
            "end": 3471,
            "expression": {
              "type": "CallExpression",
              "start": 3461,
              "end": 3470,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3465,
                  "end": 3466,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 3468,
                  "end": 3469,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 3461,
                "end": 3464,
                "decorators": [],
                "name": "f21",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3399,
        "end": 3402,
        "decorators": [],
        "name": "f21",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3421,
          "end": 3436,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3422,
            "end": 3436,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3424,
              "end": 3436,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3429,
                "end": 3436,
                "params": [
                  {
                    "type": "TSTupleType",
                    "start": 3430,
                    "end": 3432,
                    "elementTypes": []
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3434,
                    "end": 3435,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3434,
                      "end": 3435,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3424,
                "end": 3429,
                "decorators": [],
                "name": "Grow1",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3438,
          "end": 3453,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3439,
            "end": 3453,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3441,
              "end": 3453,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3446,
                "end": 3453,
                "params": [
                  {
                    "type": "TSTupleType",
                    "start": 3447,
                    "end": 3449,
                    "elementTypes": []
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3451,
                    "end": 3452,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3451,
                      "end": 3452,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3441,
                "end": 3446,
                "decorators": [],
                "name": "Grow2",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3402,
        "end": 3420,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3403,
            "end": 3419,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3413,
              "end": 3419
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3403,
              "end": 3404,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3508,
      "end": 3558,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3513,
        "end": 3525,
        "decorators": [],
        "name": "ParseSuccess",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3546,
        "end": 3557,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3548,
            "end": 3555,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3548,
              "end": 3552,
              "decorators": [],
              "name": "rest",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3552,
              "end": 3555,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3554,
                "end": 3555,
                "typeName": {
                  "type": "Identifier",
                  "start": 3554,
                  "end": 3555,
                  "decorators": [],
                  "name": "R",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3525,
        "end": 3543,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3526,
            "end": 3542,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3536,
              "end": 3542
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3526,
              "end": 3527,
              "decorators": [],
              "name": "R",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3560,
      "end": 3751,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3565,
        "end": 3584,
        "decorators": [],
        "name": "ParseManyWhitespace",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3609,
        "end": 3750,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3609,
          "end": 3610,
          "typeName": {
            "type": "Identifier",
            "start": 3609,
            "end": 3610,
            "decorators": [],
            "name": "S",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 3619,
          "end": 3633,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 3619,
              "end": 3623,
              "tail": false,
              "value": {
                "cooked": " ",
                "raw": " "
              }
            },
            {
              "type": "TemplateElement",
              "start": 3631,
              "end": 3633,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 3623,
              "end": 3631,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3629,
                "end": 3631,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 3629,
                  "end": 3631,
                  "decorators": [],
                  "name": "R0",
                  "optional": false
                },
                "out": false
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3735,
          "end": 3750,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3747,
            "end": 3750,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3748,
                "end": 3749,
                "typeName": {
                  "type": "Identifier",
                  "start": 3748,
                  "end": 3749,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3735,
            "end": 3747,
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 3644,
          "end": 3724,
          "checkType": {
            "type": "TSTypeReference",
            "start": 3644,
            "end": 3667,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3663,
              "end": 3667,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3664,
                  "end": 3666,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3664,
                    "end": 3666,
                    "decorators": [],
                    "name": "R0",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 3644,
              "end": 3663,
              "decorators": [],
              "name": "ParseManyWhitespace",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 3676,
            "end": 3698,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3688,
              "end": 3698,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 3689,
                  "end": 3697,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 3695,
                    "end": 3697,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3695,
                      "end": 3697,
                      "decorators": [],
                      "name": "R1",
                      "optional": false
                    },
                    "out": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 3676,
              "end": 3688,
              "decorators": [],
              "name": "ParseSuccess",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNullKeyword",
            "start": 3720,
            "end": 3724
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 3701,
            "end": 3717,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3713,
              "end": 3717,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3714,
                  "end": 3716,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3714,
                    "end": 3716,
                    "decorators": [],
                    "name": "R1",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 3701,
              "end": 3713,
              "decorators": [],
              "name": "ParseSuccess",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3584,
        "end": 3602,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3585,
            "end": 3601,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3595,
              "end": 3601
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3585,
              "end": 3586,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3753,
      "end": 3792,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3758,
        "end": 3761,
        "decorators": [],
        "name": "TP1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3764,
        "end": 3791,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3783,
          "end": 3791,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 3784,
              "end": 3790,
              "literal": {
                "type": "Literal",
                "start": 3784,
                "end": 3790,
                "raw": "\" foo\"",
                "value": " foo"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3764,
          "end": 3783,
          "decorators": [],
          "name": "ParseManyWhitespace",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3794,
      "end": 3938,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3799,
        "end": 3819,
        "decorators": [],
        "name": "ParseManyWhitespace2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3844,
        "end": 3937,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3844,
          "end": 3845,
          "typeName": {
            "type": "Identifier",
            "start": 3844,
            "end": 3845,
            "decorators": [],
            "name": "S",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 3854,
          "end": 3868,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 3854,
              "end": 3858,
              "tail": false,
              "value": {
                "cooked": " ",
                "raw": " "
              }
            },
            {
              "type": "TemplateElement",
              "start": 3866,
              "end": 3868,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 3858,
              "end": 3866,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 3864,
                "end": 3866,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 3864,
                  "end": 3866,
                  "decorators": [],
                  "name": "R0",
                  "optional": false
                },
                "out": false
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3922,
          "end": 3937,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3934,
            "end": 3937,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3935,
                "end": 3936,
                "typeName": {
                  "type": "Identifier",
                  "start": 3935,
                  "end": 3936,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3922,
            "end": 3934,
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3879,
          "end": 3911,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3885,
            "end": 3911,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3886,
                "end": 3910,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3906,
                  "end": 3910,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3907,
                      "end": 3909,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3907,
                        "end": 3909,
                        "decorators": [],
                        "name": "R0",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3886,
                  "end": 3906,
                  "decorators": [],
                  "name": "ParseManyWhitespace2",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3879,
            "end": 3885,
            "decorators": [],
            "name": "Helper",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3819,
        "end": 3837,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3820,
            "end": 3836,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3830,
              "end": 3836
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3820,
              "end": 3821,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3940,
      "end": 4013,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3945,
        "end": 3951,
        "decorators": [],
        "name": "Helper",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3957,
        "end": 4013,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3957,
          "end": 3958,
          "typeName": {
            "type": "Identifier",
            "start": 3957,
            "end": 3958,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3967,
          "end": 3988,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3979,
            "end": 3988,
            "params": [
              {
                "type": "TSInferType",
                "start": 3980,
                "end": 3987,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3986,
                  "end": 3987,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3986,
                    "end": 3987,
                    "decorators": [],
                    "name": "R",
                    "optional": false
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3967,
            "end": 3979,
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNullKeyword",
          "start": 4009,
          "end": 4013
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3991,
          "end": 4006,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4003,
            "end": 4006,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4004,
                "end": 4005,
                "typeName": {
                  "type": "Identifier",
                  "start": 4004,
                  "end": 4005,
                  "decorators": [],
                  "name": "R",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3991,
            "end": 4003,
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3951,
        "end": 3954,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3952,
            "end": 3953,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3952,
              "end": 3953,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4015,
      "end": 4055,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4020,
        "end": 4023,
        "decorators": [],
        "name": "TP2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4026,
        "end": 4054,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4046,
          "end": 4054,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4047,
              "end": 4053,
              "literal": {
                "type": "Literal",
                "start": 4047,
                "end": 4053,
                "raw": "\" foo\"",
                "value": " foo"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4026,
          "end": 4046,
          "decorators": [],
          "name": "ParseManyWhitespace2",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4079,
      "end": 4204,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4084,
        "end": 4090,
        "decorators": [],
        "name": "NTuple",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4143,
        "end": 4203,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 4143,
          "end": 4156,
          "indexType": {
            "type": "TSLiteralType",
            "start": 4147,
            "end": 4155,
            "literal": {
              "type": "Literal",
              "start": 4147,
              "end": 4155,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 4143,
            "end": 4146,
            "typeName": {
              "type": "Identifier",
              "start": 4143,
              "end": 4146,
              "decorators": [],
              "name": "Tup",
              "optional": false
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 4165,
          "end": 4166,
          "typeName": {
            "type": "Identifier",
            "start": 4165,
            "end": 4166,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 4175,
          "end": 4203,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4181,
            "end": 4203,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4182,
                "end": 4183,
                "typeName": {
                  "type": "Identifier",
                  "start": 4182,
                  "end": 4183,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              },
              {
                "type": "TSTupleType",
                "start": 4185,
                "end": 4202,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 4186,
                    "end": 4192,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4189,
                      "end": 4192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4189,
                        "end": 4192,
                        "decorators": [],
                        "name": "Tup",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 4194,
                    "end": 4201
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 4175,
            "end": 4181,
            "decorators": [],
            "name": "NTuple",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 4169,
          "end": 4172,
          "typeName": {
            "type": "Identifier",
            "start": 4169,
            "end": 4172,
            "decorators": [],
            "name": "Tup",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4090,
        "end": 4136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4091,
            "end": 4107,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4101,
              "end": 4107
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4091,
              "end": 4092,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4109,
            "end": 4135,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 4121,
              "end": 4130,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4121,
                "end": 4128
              }
            },
            "default": {
              "type": "TSTupleType",
              "start": 4133,
              "end": 4135,
              "elementTypes": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4109,
              "end": 4112,
              "decorators": [],
              "name": "Tup",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4206,
      "end": 4296,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4211,
        "end": 4214,
        "decorators": [],
        "name": "Add",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 4257,
        "end": 4295,
        "indexType": {
          "type": "TSLiteralType",
          "start": 4286,
          "end": 4294,
          "literal": {
            "type": "Literal",
            "start": 4286,
            "end": 4294,
            "raw": "'length'",
            "value": "length"
          }
        },
        "objectType": {
          "type": "TSTupleType",
          "start": 4257,
          "end": 4285,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 4258,
              "end": 4270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4261,
                "end": 4270,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4267,
                  "end": 4270,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4268,
                      "end": 4269,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4268,
                        "end": 4269,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4261,
                  "end": 4267,
                  "decorators": [],
                  "name": "NTuple",
                  "optional": false
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 4272,
              "end": 4284,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4275,
                "end": 4284,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4281,
                  "end": 4284,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4282,
                      "end": 4283,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4282,
                        "end": 4283,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4275,
                  "end": 4281,
                  "decorators": [],
                  "name": "NTuple",
                  "optional": false
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4214,
        "end": 4250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4215,
            "end": 4231,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4225,
              "end": 4231
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4215,
              "end": 4216,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4233,
            "end": 4249,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4243,
              "end": 4249
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4233,
              "end": 4234,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4298,
      "end": 4318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4302,
          "end": 4317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4302,
            "end": 4317,
            "decorators": [],
            "name": "five",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4306,
              "end": 4317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4308,
                "end": 4317,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4311,
                  "end": 4317,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 4312,
                      "end": 4313,
                      "literal": {
                        "type": "Literal",
                        "start": 4312,
                        "end": 4313,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 4315,
                      "end": 4316,
                      "literal": {
                        "type": "Literal",
                        "start": 4315,
                        "end": 4316,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4308,
                  "end": 4311,
                  "decorators": [],
                  "name": "Add",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4342,
      "end": 4497,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4347,
        "end": 4362,
        "decorators": [],
        "name": "_PrependNextNum",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4391,
        "end": 4496,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 4391,
          "end": 4402,
          "indexType": {
            "type": "TSLiteralType",
            "start": 4393,
            "end": 4401,
            "literal": {
              "type": "Literal",
              "start": 4393,
              "end": 4401,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 4391,
            "end": 4392,
            "typeName": {
              "type": "Identifier",
              "start": 4391,
              "end": 4392,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 4411,
          "end": 4418,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 4417,
            "end": 4418,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4417,
              "end": 4418,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4491,
          "end": 4496
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 4425,
          "end": 4484,
          "checkType": {
            "type": "TSTupleType",
            "start": 4425,
            "end": 4434,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 4426,
                "end": 4427,
                "typeName": {
                  "type": "Identifier",
                  "start": 4426,
                  "end": 4427,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSRestType",
                "start": 4429,
                "end": 4433,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4432,
                  "end": 4433,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4432,
                    "end": 4433,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            ]
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 4443,
            "end": 4455,
            "elementTypes": [
              {
                "type": "TSRestType",
                "start": 4444,
                "end": 4454,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 4447,
                  "end": 4454,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 4453,
                    "end": 4454,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 4453,
                      "end": 4454,
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 4479,
            "end": 4484
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 4467,
            "end": 4468,
            "typeName": {
              "type": "Identifier",
              "start": 4467,
              "end": 4468,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4362,
        "end": 4388,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4363,
            "end": 4387,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 4373,
              "end": 4387,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4378,
                "end": 4387,
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 4379,
                    "end": 4386
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4373,
                "end": 4378,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4363,
              "end": 4364,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4499,
      "end": 4640,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4504,
        "end": 4514,
        "decorators": [],
        "name": "_Enumerate",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4561,
        "end": 4639,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4561,
          "end": 4562,
          "typeName": {
            "type": "Identifier",
            "start": 4561,
            "end": 4562,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "start": 4571,
          "end": 4582,
          "indexType": {
            "type": "TSLiteralType",
            "start": 4573,
            "end": 4581,
            "literal": {
              "type": "Literal",
              "start": 4573,
              "end": 4581,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 4571,
            "end": 4572,
            "typeName": {
              "type": "Identifier",
              "start": 4571,
              "end": 4572,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        },
        "falseType": {
          "type": "TSIntersectionType",
          "start": 4597,
          "end": 4639,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 4597,
              "end": 4630,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4607,
                "end": 4630,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4608,
                    "end": 4626,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4623,
                      "end": 4626,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4624,
                          "end": 4625,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4624,
                            "end": 4625,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4608,
                      "end": 4623,
                      "decorators": [],
                      "name": "_PrependNextNum",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 4628,
                    "end": 4629,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4628,
                      "end": 4629,
                      "decorators": [],
                      "name": "N",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4597,
                "end": 4607,
                "decorators": [],
                "name": "_Enumerate",
                "optional": false
              }
            },
            {
              "type": "TSNumberKeyword",
              "start": 4633,
              "end": 4639
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 4589,
          "end": 4590,
          "typeName": {
            "type": "Identifier",
            "start": 4589,
            "end": 4590,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4514,
        "end": 4558,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4515,
            "end": 4539,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 4525,
              "end": 4539,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4530,
                "end": 4539,
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 4531,
                    "end": 4538
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4525,
                "end": 4530,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4515,
              "end": 4516,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4541,
            "end": 4557,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4551,
              "end": 4557
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4541,
              "end": 4542,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4642,
      "end": 4771,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4647,
        "end": 4656,
        "decorators": [],
        "name": "Enumerate",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4677,
        "end": 4770,
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 4677,
          "end": 4683
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 4692,
          "end": 4693,
          "typeName": {
            "type": "Identifier",
            "start": 4692,
            "end": 4693,
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 4713,
          "end": 4770,
          "checkType": {
            "type": "TSTypeReference",
            "start": 4713,
            "end": 4730,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 4723,
              "end": 4730,
              "params": [
                {
                  "type": "TSTupleType",
                  "start": 4724,
                  "end": 4726,
                  "elementTypes": []
                },
                {
                  "type": "TSTypeReference",
                  "start": 4728,
                  "end": 4729,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4728,
                    "end": 4729,
                    "decorators": [],
                    "name": "N",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 4713,
              "end": 4723,
              "decorators": [],
              "name": "_Enumerate",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSArrayType",
            "start": 4739,
            "end": 4750,
            "elementType": {
              "type": "TSInferType",
              "start": 4740,
              "end": 4747,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 4746,
                "end": 4747,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 4746,
                  "end": 4747,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                },
                "out": false
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 4765,
            "end": 4770
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 4757,
            "end": 4758,
            "typeName": {
              "type": "Identifier",
              "start": 4757,
              "end": 4758,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          }
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 4700,
          "end": 4706
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4656,
        "end": 4674,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4657,
            "end": 4673,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4667,
              "end": 4673
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4657,
              "end": 4658,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 4773,
      "end": 4880,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4842,
        "end": 4880,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4848,
            "end": 4868,
            "argument": {
              "type": "MemberExpression",
              "start": 4855,
              "end": 4867,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4855,
                "end": 4860,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4861,
                "end": 4867,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4782,
        "end": 4786,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4808,
          "end": 4816,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4813,
            "end": 4816,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4815,
              "end": 4816,
              "typeName": {
                "type": "Identifier",
                "start": 4815,
                "end": 4816,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4817,
        "end": 4841,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4819,
          "end": 4841,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4828,
            "end": 4841,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 4829,
                "end": 4840,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 4831,
                  "end": 4839,
                  "literal": {
                    "type": "Literal",
                    "start": 4831,
                    "end": 4839,
                    "raw": "'length'",
                    "value": "length"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4829,
                  "end": 4830,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4829,
                    "end": 4830,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 4819,
            "end": 4828,
            "decorators": [],
            "name": "Enumerate",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4786,
        "end": 4807,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4787,
            "end": 4806,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 4797,
              "end": 4806,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4797,
                "end": 4804
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4787,
              "end": 4788,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
