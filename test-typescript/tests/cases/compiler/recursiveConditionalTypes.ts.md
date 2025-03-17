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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 36,
        "name": "__Awaited",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
        "trueType": {
          "type": "TSTypeReference",
          "start": 75,
          "end": 76,
          "typeName": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 93,
            "end": 113,
            "typeName": {
              "type": "Identifier",
              "start": 93,
              "end": 104,
              "name": "PromiseLike",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 116,
            "end": 128,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 125,
              "name": "__Awaited",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 139,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 153,
        "name": "MyPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 169,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 169,
              "end": 172,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 170,
                  "end": 171,
                  "name": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 173,
                "end": 229,
                "name": "f",
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
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 178,
                            "end": 186,
                            "name": "value",
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
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 195,
                                "end": 209,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 195,
                                  "end": 206,
                                  "name": "PromiseLike",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                        "name": "U",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 241,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 249,
      "end": 303,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 269,
        "name": "InfinitePromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 275,
        "end": 302,
        "typeName": {
          "type": "Identifier",
          "start": 275,
          "end": 282,
          "name": "Promise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 282,
          "end": 302,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 283,
              "end": 301,
              "typeName": {
                "type": "Identifier",
                "start": 283,
                "end": 298,
                "name": "InfinitePromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 305,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 312,
        "name": "P0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 315,
        "end": 389,
        "typeName": {
          "type": "Identifier",
          "start": 315,
          "end": 324,
          "name": "__Awaited",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 324,
          "end": 389,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 325,
              "end": 388,
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 332,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 342,
                          "end": 349,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 350,
                                    "end": 359,
                                    "name": "MyPromise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 391,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 398,
        "name": "P1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 401,
        "end": 415,
        "typeName": {
          "type": "Identifier",
          "start": 401,
          "end": 410,
          "name": "__Awaited",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 417,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 422,
        "end": 424,
        "name": "P2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 427,
        "end": 461,
        "typeName": {
          "type": "Identifier",
          "start": 427,
          "end": 436,
          "name": "__Awaited",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 436,
          "end": 461,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 437,
              "end": 460,
              "typeName": {
                "type": "Identifier",
                "start": 437,
                "end": 452,
                "name": "InfinitePromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 474,
      "end": 638,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 486,
        "name": "f11",
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
          "start": 503,
          "end": 508,
          "name": "tx",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 510,
          "end": 526,
          "name": "ta",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 512,
            "end": 526,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 514,
              "end": 526,
              "typeName": {
                "type": "Identifier",
                "start": 514,
                "end": 523,
                "name": "__Awaited",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 528,
          "end": 533,
          "name": "ux",
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 535,
          "end": 551,
          "name": "ua",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 537,
            "end": 551,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 539,
              "end": 551,
              "typeName": {
                "type": "Identifier",
                "start": 539,
                "end": 548,
                "name": "__Awaited",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "ta",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 564,
                "end": 566,
                "name": "ua",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "ua",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 577,
                "end": 579,
                "name": "ta",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "ta",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 600,
                "end": 602,
                "name": "tx",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "tx",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 623,
                "end": 625,
                "name": "ta",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 486,
        "end": 502,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 487,
            "end": 488,
            "name": {
              "type": "Identifier",
              "start": 487,
              "end": 488,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 490,
            "end": 501,
            "name": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 500,
              "end": 501,
              "typeName": {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 662,
      "end": 768,
      "id": {
        "type": "Identifier",
        "start": 667,
        "end": 674,
        "name": "Flatten",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
        "trueType": {
          "type": "TSArrayType",
          "start": 729,
          "end": 742,
          "elementType": {
            "type": "TSTypeReference",
            "start": 729,
            "end": 740,
            "typeName": {
              "type": "Identifier",
              "start": 729,
              "end": 737,
              "name": "_Flatten",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
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
              "typeName": {
                "type": "Identifier",
                "start": 754,
                "end": 762,
                "name": "_Flatten",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 769,
      "end": 837,
      "id": {
        "type": "Identifier",
        "start": 774,
        "end": 782,
        "name": "_Flatten",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 783,
              "end": 784,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                "name": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 815,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 821,
          "end": 832,
          "typeName": {
            "type": "Identifier",
            "start": 821,
            "end": 829,
            "name": "_Flatten",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 839,
      "end": 882,
      "id": {
        "type": "Identifier",
        "start": 844,
        "end": 857,
        "name": "InfiniteArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 858,
              "end": 859,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 863,
        "end": 881,
        "elementType": {
          "type": "TSTypeReference",
          "start": 863,
          "end": 879,
          "typeName": {
            "type": "Identifier",
            "start": 863,
            "end": 876,
            "name": "InfiniteArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 884,
      "end": 916,
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 891,
        "name": "B0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 894,
        "end": 915,
        "typeName": {
          "type": "Identifier",
          "start": 894,
          "end": 901,
          "name": "Flatten",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 917,
      "end": 985,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 924,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 927,
        "end": 984,
        "typeName": {
          "type": "Identifier",
          "start": 927,
          "end": 934,
          "name": "Flatten",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 986,
      "end": 1027,
      "id": {
        "type": "Identifier",
        "start": 991,
        "end": 993,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 996,
        "end": 1026,
        "typeName": {
          "type": "Identifier",
          "start": 996,
          "end": 1003,
          "name": "Flatten",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1003,
          "end": 1026,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1004,
              "end": 1025,
              "typeName": {
                "type": "Identifier",
                "start": 1004,
                "end": 1017,
                "name": "InfiniteArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1028,
      "end": 1044,
      "id": {
        "type": "Identifier",
        "start": 1033,
        "end": 1035,
        "name": "B3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1038,
        "end": 1043,
        "objectType": {
          "type": "TSTypeReference",
          "start": 1038,
          "end": 1040,
          "typeName": {
            "type": "Identifier",
            "start": 1038,
            "end": 1040,
            "name": "B2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 1041,
          "end": 1042,
          "literal": {
            "type": "Literal",
            "start": 1041,
            "end": 1042,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1077,
      "end": 1179,
      "id": {
        "type": "Identifier",
        "start": 1082,
        "end": 1089,
        "name": "TupleOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1090,
              "end": 1091,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1093,
            "end": 1109,
            "name": {
              "type": "Identifier",
              "start": 1093,
              "end": 1094,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1103,
              "end": 1109
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1123,
          "end": 1124,
          "typeName": {
            "type": "Identifier",
            "start": 1123,
            "end": 1124,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 1152,
            "end": 1170,
            "typeName": {
              "type": "Identifier",
              "start": 1152,
              "end": 1160,
              "name": "_TupleOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1164,
                  "end": 1165,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1165,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTupleType",
                  "start": 1167,
                  "end": 1169,
                  "elementTypes": []
                }
              ]
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1173,
          "end": 1178
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1180,
      "end": 1292,
      "id": {
        "type": "Identifier",
        "start": 1185,
        "end": 1193,
        "name": "_TupleOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1194,
              "end": 1195,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1197,
            "end": 1213,
            "name": {
              "type": "Identifier",
              "start": 1197,
              "end": 1198,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1207,
              "end": 1213
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1215,
            "end": 1234,
            "name": {
              "type": "Identifier",
              "start": 1215,
              "end": 1216,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1238,
        "end": 1291,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 1238,
          "end": 1249,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1238,
            "end": 1239,
            "typeName": {
              "type": "Identifier",
              "start": 1238,
              "end": 1239,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 1240,
            "end": 1248,
            "literal": {
              "type": "Literal",
              "start": 1240,
              "end": 1248,
              "value": "length",
              "raw": "'length'"
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
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1262,
          "end": 1263,
          "typeName": {
            "type": "Identifier",
            "start": 1262,
            "end": 1263,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1266,
          "end": 1291,
          "typeName": {
            "type": "Identifier",
            "start": 1266,
            "end": 1274,
            "name": "_TupleOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1278,
                "end": 1279,
                "typeName": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1279,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                        "name": "R",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1294,
      "end": 1324,
      "id": {
        "type": "Identifier",
        "start": 1299,
        "end": 1302,
        "name": "TT0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1305,
        "end": 1323,
        "typeName": {
          "type": "Identifier",
          "start": 1305,
          "end": 1312,
          "name": "TupleOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": 4,
                "raw": "4"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1325,
      "end": 1363,
      "id": {
        "type": "Identifier",
        "start": 1330,
        "end": 1333,
        "name": "TT1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1336,
        "end": 1362,
        "typeName": {
          "type": "Identifier",
          "start": 1336,
          "end": 1343,
          "name": "TupleOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                    "value": 0,
                    "raw": "0"
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
                    "value": 2,
                    "raw": "2"
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
                    "value": 4,
                    "raw": "4"
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1364,
      "end": 1399,
      "id": {
        "type": "Identifier",
        "start": 1369,
        "end": 1372,
        "name": "TT2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1375,
        "end": 1398,
        "typeName": {
          "type": "Identifier",
          "start": 1375,
          "end": 1382,
          "name": "TupleOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1400,
      "end": 1432,
      "id": {
        "type": "Identifier",
        "start": 1405,
        "end": 1408,
        "name": "TT3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1411,
        "end": 1431,
        "typeName": {
          "type": "Identifier",
          "start": 1411,
          "end": 1418,
          "name": "TupleOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1433,
      "end": 1465,
      "id": {
        "type": "Identifier",
        "start": 1438,
        "end": 1441,
        "name": "TT4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1444,
        "end": 1464,
        "typeName": {
          "type": "Identifier",
          "start": 1444,
          "end": 1451,
          "name": "TupleOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": 100,
                "raw": "100"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1466,
      "end": 1499,
      "id": {
        "type": "Identifier",
        "start": 1471,
        "end": 1474,
        "name": "TT5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1477,
        "end": 1498,
        "typeName": {
          "type": "Identifier",
          "start": 1477,
          "end": 1484,
          "name": "TupleOf",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": 1000,
                "raw": "1000"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1517,
      "end": 1638,
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1529,
        "name": "f22",
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
          "start": 1561,
          "end": 1583,
          "name": "tn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1563,
            "end": 1583,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1565,
              "end": 1583,
              "typeName": {
                "type": "Identifier",
                "start": 1565,
                "end": 1572,
                "name": "TupleOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "N",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1585,
          "end": 1607,
          "name": "tm",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1587,
            "end": 1607,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1589,
              "end": 1607,
              "typeName": {
                "type": "Identifier",
                "start": 1589,
                "end": 1596,
                "name": "TupleOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "tn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1620,
                "end": 1622,
                "name": "tm",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "tm",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1633,
                "end": 1635,
                "name": "tn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1529,
        "end": 1560,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1530,
            "end": 1546,
            "name": {
              "type": "Identifier",
              "start": 1530,
              "end": 1531,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1540,
              "end": 1546
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1548,
            "end": 1559,
            "name": {
              "type": "Identifier",
              "start": 1548,
              "end": 1549,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1558,
              "end": 1559,
              "typeName": {
                "type": "Identifier",
                "start": 1558,
                "end": 1559,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1640,
      "end": 1685,
      "id": {
        "type": "Identifier",
        "start": 1657,
        "end": 1660,
        "name": "f23",
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
          "start": 1664,
          "end": 1680,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1665,
            "end": 1680,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1667,
              "end": 1680,
              "typeName": {
                "type": "Identifier",
                "start": 1667,
                "end": 1674,
                "name": "TupleOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1678,
                    "end": 1679,
                    "literal": {
                      "type": "Literal",
                      "start": 1678,
                      "end": 1679,
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1660,
        "end": 1663,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1661,
            "end": 1662,
            "name": {
              "type": "Identifier",
              "start": 1661,
              "end": 1662,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
        "callee": {
          "type": "Identifier",
          "start": 1687,
          "end": 1690,
          "name": "f23",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 1697,
                "end": 1700,
                "value": "b",
                "raw": "'b'"
              },
              {
                "type": "Literal",
                "start": 1702,
                "end": 1705,
                "value": "c",
                "raw": "'c'"
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
      "start": 1753,
      "end": 1782,
      "id": {
        "type": "Identifier",
        "start": 1763,
        "end": 1766,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1766,
        "end": 1769,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1767,
            "end": 1768,
            "name": {
              "type": "Identifier",
              "start": 1767,
              "end": 1768,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1772,
              "end": 1777,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 1789,
        "end": 1795,
        "name": "RecBox",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1796,
              "end": 1797,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1805,
            "end": 1819,
            "typeName": {
              "type": "Identifier",
              "start": 1805,
              "end": 1808,
              "name": "Box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1808,
              "end": 1819,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1809,
                  "end": 1818,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1809,
                    "end": 1815,
                    "name": "RecBox",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1821,
      "end": 1853,
      "id": {
        "type": "Identifier",
        "start": 1826,
        "end": 1832,
        "name": "InfBox",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1833,
              "end": 1834,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1838,
        "end": 1852,
        "typeName": {
          "type": "Identifier",
          "start": 1838,
          "end": 1841,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1841,
          "end": 1852,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1842,
              "end": 1851,
              "typeName": {
                "type": "Identifier",
                "start": 1842,
                "end": 1848,
                "name": "InfBox",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1855,
      "end": 1899,
      "id": {
        "type": "Identifier",
        "start": 1872,
        "end": 1877,
        "name": "unbox",
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
          "start": 1881,
          "end": 1895,
          "name": "box",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1884,
            "end": 1895,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1886,
              "end": 1895,
              "typeName": {
                "type": "Identifier",
                "start": 1886,
                "end": 1892,
                "name": "RecBox",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1877,
        "end": 1880,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1878,
            "end": 1879,
            "name": {
              "type": "Identifier",
              "start": 1878,
              "end": 1879,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1901,
      "end": 1923,
      "id": {
        "type": "Identifier",
        "start": 1906,
        "end": 1908,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1911,
        "end": 1922,
        "typeName": {
          "type": "Identifier",
          "start": 1911,
          "end": 1914,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1924,
      "end": 1942,
      "id": {
        "type": "Identifier",
        "start": 1929,
        "end": 1931,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1934,
        "end": 1941,
        "typeName": {
          "type": "Identifier",
          "start": 1934,
          "end": 1937,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1943,
      "end": 1961,
      "id": {
        "type": "Identifier",
        "start": 1948,
        "end": 1950,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1953,
        "end": 1960,
        "typeName": {
          "type": "Identifier",
          "start": 1953,
          "end": 1956,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "T2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1962,
      "end": 1980,
      "id": {
        "type": "Identifier",
        "start": 1967,
        "end": 1969,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1972,
        "end": 1979,
        "typeName": {
          "type": "Identifier",
          "start": 1972,
          "end": 1975,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "T3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1981,
      "end": 1999,
      "id": {
        "type": "Identifier",
        "start": 1986,
        "end": 1988,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1991,
        "end": 1998,
        "typeName": {
          "type": "Identifier",
          "start": 1991,
          "end": 1994,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "T4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2000,
      "end": 2018,
      "id": {
        "type": "Identifier",
        "start": 2005,
        "end": 2007,
        "name": "T6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2010,
        "end": 2017,
        "typeName": {
          "type": "Identifier",
          "start": 2010,
          "end": 2013,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "T5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2032,
            "end": 2072,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2034,
              "end": 2072,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2036,
                "end": 2072,
                "typeName": {
                  "type": "Identifier",
                  "start": 2036,
                  "end": 2039,
                  "name": "Box",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2039,
                  "end": 2072,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2040,
                      "end": 2071,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2040,
                        "end": 2043,
                        "name": "Box",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2043,
                        "end": 2071,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2044,
                            "end": 2070,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2044,
                              "end": 2047,
                              "name": "Box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2047,
                              "end": 2070,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2048,
                                  "end": 2069,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2048,
                                    "end": 2051,
                                    "name": "Box",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 2051,
                                    "end": 2069,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 2052,
                                        "end": 2068,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2052,
                                          "end": 2055,
                                          "name": "Box",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 2055,
                                          "end": 2068,
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "start": 2056,
                                              "end": 2067,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 2056,
                                                "end": 2059,
                                                "name": "Box",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 2086,
            "end": 2092,
            "name": "b2",
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
                  "name": "T6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 2106,
            "end": 2124,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2108,
              "end": 2124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2110,
                "end": 2124,
                "typeName": {
                  "type": "Identifier",
                  "start": 2110,
                  "end": 2116,
                  "name": "InfBox",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 2138,
            "end": 2182,
            "name": "b4",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2144,
                      "end": 2149,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2153,
                              "end": 2158,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2162,
                                      "end": 2167,
                                      "name": "value",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                                          "name": "b4",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
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
                          }
                        ]
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2185,
      "end": 2195,
      "expression": {
        "type": "CallExpression",
        "start": 2185,
        "end": 2194,
        "callee": {
          "type": "Identifier",
          "start": 2185,
          "end": 2190,
          "name": "unbox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2191,
            "end": 2193,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2207,
      "end": 2217,
      "expression": {
        "type": "CallExpression",
        "start": 2207,
        "end": 2216,
        "callee": {
          "type": "Identifier",
          "start": 2207,
          "end": 2212,
          "name": "unbox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2213,
            "end": 2215,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2229,
      "end": 2239,
      "expression": {
        "type": "CallExpression",
        "start": 2229,
        "end": 2238,
        "callee": {
          "type": "Identifier",
          "start": 2229,
          "end": 2234,
          "name": "unbox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2235,
            "end": 2237,
            "name": "b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2259,
      "end": 2329,
      "expression": {
        "type": "CallExpression",
        "start": 2259,
        "end": 2328,
        "callee": {
          "type": "Identifier",
          "start": 2259,
          "end": 2264,
          "name": "unbox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2267,
                  "end": 2272,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2274,
                  "end": 2326,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2276,
                      "end": 2325,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2276,
                        "end": 2281,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2283,
                        "end": 2325,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2285,
                            "end": 2324,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2285,
                              "end": 2290,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 2292,
                              "end": 2324,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2294,
                                  "end": 2323,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2294,
                                    "end": 2299,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 2301,
                                    "end": 2323,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 2303,
                                        "end": 2322,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2303,
                                          "end": 2308,
                                          "name": "value",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "ObjectExpression",
                                          "start": 2310,
                                          "end": 2322,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 2312,
                                              "end": 2320,
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 2312,
                                                "end": 2317,
                                                "name": "value",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "start": 2319,
                                                "end": 2320,
                                                "value": 5,
                                                "raw": "5"
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
      "start": 2341,
      "end": 2351,
      "expression": {
        "type": "CallExpression",
        "start": 2341,
        "end": 2350,
        "callee": {
          "type": "Identifier",
          "start": 2341,
          "end": 2346,
          "name": "unbox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2347,
            "end": 2349,
            "name": "b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2387,
      "end": 2447,
      "expression": {
        "type": "CallExpression",
        "start": 2387,
        "end": 2446,
        "callee": {
          "type": "Identifier",
          "start": 2387,
          "end": 2392,
          "name": "unbox",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2395,
                  "end": 2400,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2402,
                  "end": 2444,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2404,
                      "end": 2443,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2404,
                        "end": 2409,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 2411,
                        "end": 2443,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2413,
                            "end": 2441,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2417,
                              "end": 2422,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 2422,
                              "end": 2441,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                              "typeParameters": null,
                              "returnType": null
                            },
                            "kind": "get",
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
      "type": "TSTypeAliasDeclaration",
      "start": 2540,
      "end": 2568,
      "id": {
        "type": "Identifier",
        "start": 2545,
        "end": 2549,
        "name": "Box1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2550,
              "end": 2551,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2557,
              "end": 2562,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2569,
      "end": 2597,
      "id": {
        "type": "Identifier",
        "start": 2574,
        "end": 2578,
        "name": "Box2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2579,
              "end": 2580,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2586,
              "end": 2591,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2599,
      "end": 2644,
      "id": {
        "type": "Identifier",
        "start": 2616,
        "end": 2619,
        "name": "foo",
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
          "start": 2623,
          "end": 2639,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2624,
            "end": 2639,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2626,
              "end": 2639,
              "typeName": {
                "type": "Identifier",
                "start": 2626,
                "end": 2630,
                "name": "Box1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2630,
                "end": 2639,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2631,
                    "end": 2638,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2631,
                      "end": 2635,
                      "name": "Box1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2619,
        "end": 2622,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2620,
            "end": 2621,
            "name": {
              "type": "Identifier",
              "start": 2620,
              "end": 2621,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 2658,
            "end": 2679,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2659,
              "end": 2679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2661,
                "end": 2679,
                "typeName": {
                  "type": "Identifier",
                  "start": 2661,
                  "end": 2665,
                  "name": "Box2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2665,
                  "end": 2679,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2666,
                      "end": 2678,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2666,
                        "end": 2670,
                        "name": "Box2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2682,
      "end": 2689,
      "expression": {
        "type": "CallExpression",
        "start": 2682,
        "end": 2688,
        "callee": {
          "type": "Identifier",
          "start": 2682,
          "end": 2685,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2686,
            "end": 2687,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2736,
      "end": 2841,
      "id": {
        "type": "Identifier",
        "start": 2741,
        "end": 2750,
        "name": "Intersect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2751,
              "end": 2752,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2768,
            "end": 2779,
            "name": {
              "type": "Identifier",
              "start": 2768,
              "end": 2769,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2772,
              "end": 2779
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                "name": {
                  "type": "Identifier",
                  "start": 2800,
                  "end": 2801,
                  "name": "H",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
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
                  "name": {
                    "type": "Identifier",
                    "start": 2812,
                    "end": 2813,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2817,
          "end": 2836,
          "typeName": {
            "type": "Identifier",
            "start": 2817,
            "end": 2826,
            "name": "Intersect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                      "name": "R",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2834,
                    "end": 2835,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2834,
                      "end": 2835,
                      "name": "H",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 2839,
          "end": 2840,
          "typeName": {
            "type": "Identifier",
            "start": 2839,
            "end": 2840,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2843,
      "end": 2888,
      "id": {
        "type": "Identifier",
        "start": 2848,
        "end": 2850,
        "name": "QQ",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2853,
        "end": 2887,
        "typeName": {
          "type": "Identifier",
          "start": 2853,
          "end": 2862,
          "name": "Intersect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                    "value": 7,
                    "raw": "7"
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2959,
      "end": 3016,
      "id": {
        "type": "Identifier",
        "start": 2964,
        "end": 2971,
        "name": "Unpack1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2972,
              "end": 2973,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "name": {
                "type": "Identifier",
                "start": 2994,
                "end": 2995,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3001,
          "end": 3011,
          "typeName": {
            "type": "Identifier",
            "start": 3001,
            "end": 3008,
            "name": "Unpack1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3017,
      "end": 3074,
      "id": {
        "type": "Identifier",
        "start": 3022,
        "end": 3029,
        "name": "Unpack2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3030,
              "end": 3031,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "name": {
                "type": "Identifier",
                "start": 3052,
                "end": 3053,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3059,
          "end": 3069,
          "typeName": {
            "type": "Identifier",
            "start": 3059,
            "end": 3066,
            "name": "Unpack2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3076,
      "end": 3175,
      "id": {
        "type": "Identifier",
        "start": 3085,
        "end": 3088,
        "name": "f20",
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
          "start": 3105,
          "end": 3118,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3106,
            "end": 3118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3108,
              "end": 3118,
              "typeName": {
                "type": "Identifier",
                "start": 3108,
                "end": 3115,
                "name": "Unpack1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3120,
          "end": 3133,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3121,
            "end": 3133,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3123,
              "end": 3133,
              "typeName": {
                "type": "Identifier",
                "start": 3123,
                "end": 3130,
                "name": "Unpack2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 3145,
                "end": 3146,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 3156,
                "end": 3157,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3163,
            "end": 3173,
            "expression": {
              "type": "CallExpression",
              "start": 3163,
              "end": 3172,
              "callee": {
                "type": "Identifier",
                "start": 3163,
                "end": 3166,
                "name": "f20",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3167,
                  "end": 3168,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 3170,
                  "end": 3171,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3088,
        "end": 3104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3089,
            "end": 3090,
            "name": {
              "type": "Identifier",
              "start": 3089,
              "end": 3090,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3092,
            "end": 3103,
            "name": {
              "type": "Identifier",
              "start": 3092,
              "end": 3093,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3102,
              "end": 3103,
              "typeName": {
                "type": "Identifier",
                "start": 3102,
                "end": 3103,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3177,
      "end": 3282,
      "id": {
        "type": "Identifier",
        "start": 3182,
        "end": 3187,
        "name": "Grow1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3188,
              "end": 3189,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3209,
            "end": 3225,
            "name": {
              "type": "Identifier",
              "start": 3209,
              "end": 3210,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3219,
              "end": 3225
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3229,
        "end": 3281,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 3229,
          "end": 3240,
          "objectType": {
            "type": "TSTypeReference",
            "start": 3229,
            "end": 3230,
            "typeName": {
              "type": "Identifier",
              "start": 3229,
              "end": 3230,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 3231,
            "end": 3239,
            "literal": {
              "type": "Literal",
              "start": 3231,
              "end": 3239,
              "value": "length",
              "raw": "'length'"
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
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3253,
          "end": 3254,
          "typeName": {
            "type": "Identifier",
            "start": 3253,
            "end": 3254,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3257,
          "end": 3281,
          "typeName": {
            "type": "Identifier",
            "start": 3257,
            "end": 3262,
            "name": "Grow1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3283,
      "end": 3388,
      "id": {
        "type": "Identifier",
        "start": 3288,
        "end": 3293,
        "name": "Grow2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3294,
              "end": 3295,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3315,
            "end": 3331,
            "name": {
              "type": "Identifier",
              "start": 3315,
              "end": 3316,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3325,
              "end": 3331
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3335,
        "end": 3387,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 3335,
          "end": 3346,
          "objectType": {
            "type": "TSTypeReference",
            "start": 3335,
            "end": 3336,
            "typeName": {
              "type": "Identifier",
              "start": 3335,
              "end": 3336,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 3337,
            "end": 3345,
            "literal": {
              "type": "Literal",
              "start": 3337,
              "end": 3345,
              "value": "length",
              "raw": "'length'"
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
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3359,
          "end": 3360,
          "typeName": {
            "type": "Identifier",
            "start": 3359,
            "end": 3360,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3363,
          "end": 3387,
          "typeName": {
            "type": "Identifier",
            "start": 3363,
            "end": 3368,
            "name": "Grow2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3390,
      "end": 3483,
      "id": {
        "type": "Identifier",
        "start": 3399,
        "end": 3402,
        "name": "f21",
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
          "start": 3421,
          "end": 3436,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3422,
            "end": 3436,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3424,
              "end": 3436,
              "typeName": {
                "type": "Identifier",
                "start": 3424,
                "end": 3429,
                "name": "Grow1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3438,
          "end": 3453,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3439,
            "end": 3453,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3441,
              "end": 3453,
              "typeName": {
                "type": "Identifier",
                "start": 3441,
                "end": 3446,
                "name": "Grow2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 3461,
                "end": 3464,
                "name": "f21",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3465,
                  "end": 3466,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 3468,
                  "end": 3469,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3402,
        "end": 3420,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3403,
            "end": 3419,
            "name": {
              "type": "Identifier",
              "start": 3403,
              "end": 3404,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3413,
              "end": 3419
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3508,
      "end": 3558,
      "id": {
        "type": "Identifier",
        "start": 3513,
        "end": 3525,
        "name": "ParseSuccess",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3526,
              "end": 3527,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3536,
              "end": 3542
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3548,
              "end": 3552,
              "name": "rest",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "R",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3560,
      "end": 3751,
      "id": {
        "type": "Identifier",
        "start": 3565,
        "end": 3584,
        "name": "ParseManyWhitespace",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3585,
              "end": 3586,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3595,
              "end": 3601
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "value": {
                "cooked": " ",
                "raw": " "
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3631,
              "end": 3633,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
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
                "name": {
                  "type": "Identifier",
                  "start": 3629,
                  "end": 3631,
                  "name": "R0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 3644,
          "end": 3724,
          "checkType": {
            "type": "TSTypeReference",
            "start": 3644,
            "end": 3667,
            "typeName": {
              "type": "Identifier",
              "start": 3644,
              "end": 3663,
              "name": "ParseManyWhitespace",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "R0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 3676,
            "end": 3698,
            "typeName": {
              "type": "Identifier",
              "start": 3676,
              "end": 3688,
              "name": "ParseSuccess",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": {
                      "type": "Identifier",
                      "start": 3695,
                      "end": 3697,
                      "name": "R1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 3701,
            "end": 3717,
            "typeName": {
              "type": "Identifier",
              "start": 3701,
              "end": 3713,
              "name": "ParseSuccess",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "R1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "falseType": {
            "type": "TSNullKeyword",
            "start": 3720,
            "end": 3724
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3735,
          "end": 3750,
          "typeName": {
            "type": "Identifier",
            "start": 3735,
            "end": 3747,
            "name": "ParseSuccess",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3753,
      "end": 3792,
      "id": {
        "type": "Identifier",
        "start": 3758,
        "end": 3761,
        "name": "TP1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3764,
        "end": 3791,
        "typeName": {
          "type": "Identifier",
          "start": 3764,
          "end": 3783,
          "name": "ParseManyWhitespace",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": " foo",
                "raw": "\" foo\""
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3794,
      "end": 3938,
      "id": {
        "type": "Identifier",
        "start": 3799,
        "end": 3819,
        "name": "ParseManyWhitespace2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3820,
              "end": 3821,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3830,
              "end": 3836
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "value": {
                "cooked": " ",
                "raw": " "
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3866,
              "end": 3868,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
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
                "name": {
                  "type": "Identifier",
                  "start": 3864,
                  "end": 3866,
                  "name": "R0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3879,
          "end": 3911,
          "typeName": {
            "type": "Identifier",
            "start": 3879,
            "end": 3885,
            "name": "Helper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3885,
            "end": 3911,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3886,
                "end": 3910,
                "typeName": {
                  "type": "Identifier",
                  "start": 3886,
                  "end": 3906,
                  "name": "ParseManyWhitespace2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "R0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3922,
          "end": 3937,
          "typeName": {
            "type": "Identifier",
            "start": 3922,
            "end": 3934,
            "name": "ParseSuccess",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3940,
      "end": 4013,
      "id": {
        "type": "Identifier",
        "start": 3945,
        "end": 3951,
        "name": "Helper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3952,
              "end": 3953,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3967,
          "end": 3988,
          "typeName": {
            "type": "Identifier",
            "start": 3967,
            "end": 3979,
            "name": "ParseSuccess",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": {
                    "type": "Identifier",
                    "start": 3986,
                    "end": 3987,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3991,
          "end": 4006,
          "typeName": {
            "type": "Identifier",
            "start": 3991,
            "end": 4003,
            "name": "ParseSuccess",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "R",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSNullKeyword",
          "start": 4009,
          "end": 4013
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4015,
      "end": 4055,
      "id": {
        "type": "Identifier",
        "start": 4020,
        "end": 4023,
        "name": "TP2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4026,
        "end": 4054,
        "typeName": {
          "type": "Identifier",
          "start": 4026,
          "end": 4046,
          "name": "ParseManyWhitespace2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": " foo",
                "raw": "\" foo\""
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4079,
      "end": 4204,
      "id": {
        "type": "Identifier",
        "start": 4084,
        "end": 4090,
        "name": "NTuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 4091,
              "end": 4092,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4101,
              "end": 4107
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4109,
            "end": 4135,
            "name": {
              "type": "Identifier",
              "start": 4109,
              "end": 4112,
              "name": "Tup",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4143,
        "end": 4203,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 4143,
          "end": 4156,
          "objectType": {
            "type": "TSTypeReference",
            "start": 4143,
            "end": 4146,
            "typeName": {
              "type": "Identifier",
              "start": 4143,
              "end": 4146,
              "name": "Tup",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 4147,
            "end": 4155,
            "literal": {
              "type": "Literal",
              "start": 4147,
              "end": 4155,
              "value": "length",
              "raw": "'length'"
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
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 4169,
          "end": 4172,
          "typeName": {
            "type": "Identifier",
            "start": 4169,
            "end": 4172,
            "name": "Tup",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 4175,
          "end": 4203,
          "typeName": {
            "type": "Identifier",
            "start": 4175,
            "end": 4181,
            "name": "NTuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                        "name": "Tup",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4206,
      "end": 4296,
      "id": {
        "type": "Identifier",
        "start": 4211,
        "end": 4214,
        "name": "Add",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 4215,
              "end": 4216,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4225,
              "end": 4231
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4233,
            "end": 4249,
            "name": {
              "type": "Identifier",
              "start": 4233,
              "end": 4234,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4243,
              "end": 4249
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 4257,
        "end": 4295,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 4261,
                  "end": 4267,
                  "name": "NTuple",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
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
                "typeName": {
                  "type": "Identifier",
                  "start": 4275,
                  "end": 4281,
                  "name": "NTuple",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 4286,
          "end": 4294,
          "literal": {
            "type": "Literal",
            "start": 4286,
            "end": 4294,
            "value": "length",
            "raw": "'length'"
          }
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4302,
            "end": 4317,
            "name": "five",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4306,
              "end": 4317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4308,
                "end": 4317,
                "typeName": {
                  "type": "Identifier",
                  "start": 4308,
                  "end": 4311,
                  "name": "Add",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "value": 2,
                        "raw": "2"
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
                        "value": 3,
                        "raw": "3"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4342,
      "end": 4497,
      "id": {
        "type": "Identifier",
        "start": 4347,
        "end": 4362,
        "name": "_PrependNextNum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 4363,
              "end": 4364,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4373,
              "end": 4387,
              "typeName": {
                "type": "Identifier",
                "start": 4373,
                "end": 4378,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4391,
        "end": 4496,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 4391,
          "end": 4402,
          "objectType": {
            "type": "TSTypeReference",
            "start": 4391,
            "end": 4392,
            "typeName": {
              "type": "Identifier",
              "start": 4391,
              "end": 4392,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 4393,
            "end": 4401,
            "literal": {
              "type": "Literal",
              "start": 4393,
              "end": 4401,
              "value": "length",
              "raw": "'length'"
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
            "name": {
              "type": "Identifier",
              "start": 4417,
              "end": 4418,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 4453,
                      "end": 4454,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 4467,
            "end": 4468,
            "typeName": {
              "type": "Identifier",
              "start": 4467,
              "end": 4468,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 4479,
            "end": 4484
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4491,
          "end": 4496
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4499,
      "end": 4640,
      "id": {
        "type": "Identifier",
        "start": 4504,
        "end": 4514,
        "name": "_Enumerate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 4515,
              "end": 4516,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4525,
              "end": 4539,
              "typeName": {
                "type": "Identifier",
                "start": 4525,
                "end": 4530,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4541,
            "end": 4557,
            "name": {
              "type": "Identifier",
              "start": 4541,
              "end": 4542,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4551,
              "end": 4557
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "start": 4571,
          "end": 4582,
          "objectType": {
            "type": "TSTypeReference",
            "start": 4571,
            "end": 4572,
            "typeName": {
              "type": "Identifier",
              "start": 4571,
              "end": 4572,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 4573,
            "end": 4581,
            "literal": {
              "type": "Literal",
              "start": 4573,
              "end": 4581,
              "value": "length",
              "raw": "'length'"
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 4589,
          "end": 4590,
          "typeName": {
            "type": "Identifier",
            "start": 4589,
            "end": 4590,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 4597,
                "end": 4607,
                "name": "_Enumerate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4607,
                "end": 4630,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4608,
                    "end": 4626,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4608,
                      "end": 4623,
                      "name": "_PrependNextNum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
                      "name": "N",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSNumberKeyword",
              "start": 4633,
              "end": 4639
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4642,
      "end": 4771,
      "id": {
        "type": "Identifier",
        "start": 4647,
        "end": 4656,
        "name": "Enumerate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 4657,
              "end": 4658,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4667,
              "end": 4673
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 4700,
          "end": 4706
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 4713,
          "end": 4770,
          "checkType": {
            "type": "TSTypeReference",
            "start": 4713,
            "end": 4730,
            "typeName": {
              "type": "Identifier",
              "start": 4713,
              "end": 4723,
              "name": "_Enumerate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
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
                "name": {
                  "type": "Identifier",
                  "start": 4746,
                  "end": 4747,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 4757,
            "end": 4758,
            "typeName": {
              "type": "Identifier",
              "start": 4757,
              "end": 4758,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 4765,
            "end": 4770
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4773,
      "end": 4880,
      "id": {
        "type": "Identifier",
        "start": 4782,
        "end": 4786,
        "name": "foo2",
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
          "start": 4808,
          "end": 4816,
          "name": "value",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "object": {
                "type": "Identifier",
                "start": 4855,
                "end": 4860,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4861,
                "end": 4867,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4786,
        "end": 4807,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4787,
            "end": 4806,
            "name": {
              "type": "Identifier",
              "start": 4787,
              "end": 4788,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4817,
        "end": 4841,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4819,
          "end": 4841,
          "typeName": {
            "type": "Identifier",
            "start": 4819,
            "end": 4828,
            "name": "Enumerate",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4828,
            "end": 4841,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 4829,
                "end": 4840,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4829,
                  "end": 4830,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4829,
                    "end": 4830,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 4831,
                  "end": 4839,
                  "literal": {
                    "type": "Literal",
                    "start": 4831,
                    "end": 4839,
                    "value": "length",
                    "raw": "'length'"
                  }
                }
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
