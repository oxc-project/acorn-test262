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
        "name": "__Awaited",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 36
      },
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
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          }
        ],
        "start": 36,
        "end": 39
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "typeArguments": null,
          "start": 46,
          "end": 47
        },
        "extendsType": {
          "type": "TSUnionType",
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
          ],
          "start": 56,
          "end": 72
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "typeArguments": null,
          "start": 75,
          "end": 76
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "typeArguments": null,
            "start": 83,
            "end": 84
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 104
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 112
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 111,
                    "end": 112
                  },
                  "start": 105,
                  "end": 112
                }
              ],
              "start": 104,
              "end": 113
            },
            "start": 93,
            "end": 113
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "__Awaited",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 125
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 127
                  },
                  "typeArguments": null,
                  "start": 126,
                  "end": 127
                }
              ],
              "start": 125,
              "end": 128
            },
            "start": 116,
            "end": 128
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "typeArguments": null,
            "start": 135,
            "end": 136
          },
          "start": 83,
          "end": 136
        },
        "start": 46,
        "end": 136
      },
      "declare": false,
      "start": 22,
      "end": 137
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 153
      },
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
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          }
        ],
        "start": 153,
        "end": 156
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 169
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 171
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 170,
                  "end": 171
                }
              ],
              "start": 169,
              "end": 172
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 185,
                                  "end": 186
                                },
                                "typeArguments": null,
                                "start": 185,
                                "end": 186
                              },
                              "start": 183,
                              "end": 186
                            },
                            "start": 178,
                            "end": 186
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 191,
                                  "end": 192
                                },
                                "typeArguments": null,
                                "start": 191,
                                "end": 192
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "PromiseLike",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 195,
                                  "end": 206
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 207,
                                        "end": 208
                                      },
                                      "typeArguments": null,
                                      "start": 207,
                                      "end": 208
                                    }
                                  ],
                                  "start": 206,
                                  "end": 209
                                },
                                "start": 195,
                                "end": 209
                              }
                            ],
                            "start": 191,
                            "end": 209
                          },
                          "start": 188,
                          "end": 209
                        },
                        "start": 177,
                        "end": 209
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
                    ],
                    "start": 176,
                    "end": 229
                  },
                  "start": 174,
                  "end": 229
                },
                "start": 173,
                "end": 229
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 241
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 243
                      },
                      "typeArguments": null,
                      "start": 242,
                      "end": 243
                    }
                  ],
                  "start": 241,
                  "end": 244
                },
                "start": 232,
                "end": 244
              },
              "start": 230,
              "end": 244
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 165,
            "end": 245
          }
        ],
        "start": 159,
        "end": 247
      },
      "declare": false,
      "start": 139,
      "end": 247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InfinitePromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 269
      },
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
              "start": 270,
              "end": 271
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 270,
            "end": 271
          }
        ],
        "start": 269,
        "end": 272
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 282
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InfinitePromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 298
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 300
                  }
                ],
                "start": 298,
                "end": 301
              },
              "start": 283,
              "end": 301
            }
          ],
          "start": 282,
          "end": 302
        },
        "start": 275,
        "end": 302
      },
      "declare": false,
      "start": 249,
      "end": 303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P0",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 312
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "__Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 324
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 332
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 333,
                        "end": 339
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 342,
                          "end": 349
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
                                    "name": "MyPromise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 350,
                                    "end": 359
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 360,
                                        "end": 366
                                      }
                                    ],
                                    "start": 359,
                                    "end": 367
                                  },
                                  "start": 350,
                                  "end": 367
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 370,
                                  "end": 374
                                }
                              ],
                              "start": 350,
                              "end": 374
                            }
                          ],
                          "start": 349,
                          "end": 375
                        },
                        "start": 342,
                        "end": 375
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 378,
                        "end": 387
                      }
                    ],
                    "start": 333,
                    "end": 387
                  }
                ],
                "start": 332,
                "end": 388
              },
              "start": 325,
              "end": 388
            }
          ],
          "start": 324,
          "end": 389
        },
        "start": 315,
        "end": 389
      },
      "declare": false,
      "start": 305,
      "end": 390
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P1",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 398
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "__Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 410
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 411,
              "end": 414
            }
          ],
          "start": 410,
          "end": 415
        },
        "start": 401,
        "end": 415
      },
      "declare": false,
      "start": 391,
      "end": 416
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P2",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 424
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "__Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 436
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InfinitePromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 452
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 453,
                    "end": 459
                  }
                ],
                "start": 452,
                "end": 460
              },
              "start": 437,
              "end": 460
            }
          ],
          "start": 436,
          "end": 461
        },
        "start": 427,
        "end": 461
      },
      "declare": false,
      "start": 417,
      "end": 462
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 486
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
              "start": 487,
              "end": 488
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 487,
            "end": 488
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 491
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "typeArguments": null,
              "start": 500,
              "end": 501
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 490,
            "end": 501
          }
        ],
        "start": 486,
        "end": 502
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tx",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 508
              },
              "typeArguments": null,
              "start": 507,
              "end": 508
            },
            "start": 505,
            "end": 508
          },
          "start": 503,
          "end": 508
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ta",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "__Awaited",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 523
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "typeArguments": null,
                    "start": 524,
                    "end": 525
                  }
                ],
                "start": 523,
                "end": 526
              },
              "start": 514,
              "end": 526
            },
            "start": 512,
            "end": 526
          },
          "start": 510,
          "end": 526
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ux",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 533
              },
              "typeArguments": null,
              "start": 532,
              "end": 533
            },
            "start": 530,
            "end": 533
          },
          "start": 528,
          "end": 533
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ua",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "__Awaited",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 548
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 549,
                      "end": 550
                    },
                    "typeArguments": null,
                    "start": 549,
                    "end": 550
                  }
                ],
                "start": 548,
                "end": 551
              },
              "start": 539,
              "end": 551
            },
            "start": 537,
            "end": 551
          },
          "start": 535,
          "end": 551
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ta",
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 561
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ua",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 566
              },
              "start": 559,
              "end": 566
            },
            "directive": null,
            "start": 559,
            "end": 567
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ua",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 574
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ta",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 579
              },
              "start": 572,
              "end": 579
            },
            "directive": null,
            "start": 572,
            "end": 580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ta",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 597
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tx",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 602
              },
              "start": 595,
              "end": 602
            },
            "directive": null,
            "start": 595,
            "end": 603
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tx",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 620
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ta",
                "optional": false,
                "typeAnnotation": null,
                "start": 623,
                "end": 625
              },
              "start": 618,
              "end": 625
            },
            "directive": null,
            "start": 618,
            "end": 626
          }
        ],
        "start": 553,
        "end": 638
      },
      "expression": false,
      "start": 474,
      "end": 638
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Flatten",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 674
      },
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
              "start": 675,
              "end": 676
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 694,
                  "end": 701
                },
                "start": 694,
                "end": 703
              },
              "start": 685,
              "end": 703
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 675,
            "end": 703
          }
        ],
        "start": 674,
        "end": 704
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 707,
            "end": 708
          },
          "typeArguments": null,
          "start": 707,
          "end": 708
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSUnknownKeyword",
            "start": 717,
            "end": 724
          },
          "start": 717,
          "end": 726
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_Flatten",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 737
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 739
                  },
                  "typeArguments": null,
                  "start": 738,
                  "end": 739
                }
              ],
              "start": 737,
              "end": 740
            },
            "start": 729,
            "end": 740
          },
          "start": 729,
          "end": 742
        },
        "falseType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Flatten",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 762
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 763,
                      "end": 764
                    },
                    "typeArguments": null,
                    "start": 763,
                    "end": 764
                  }
                ],
                "start": 762,
                "end": 765
              },
              "start": 754,
              "end": 765
            },
            "start": 754,
            "end": 767
          },
          "start": 745,
          "end": 767
        },
        "start": 707,
        "end": 767
      },
      "declare": false,
      "start": 662,
      "end": 768
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Flatten",
        "optional": false,
        "typeAnnotation": null,
        "start": 774,
        "end": 782
      },
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
              "start": 783,
              "end": 784
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 783,
            "end": 784
          }
        ],
        "start": 782,
        "end": 785
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 789
          },
          "typeArguments": null,
          "start": 788,
          "end": 789
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 815
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 814,
                "end": 815
              },
              "start": 808,
              "end": 815
            },
            "start": 807,
            "end": 818
          },
          "start": 798,
          "end": 818
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Flatten",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 829
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 831
                },
                "typeArguments": null,
                "start": 830,
                "end": 831
              }
            ],
            "start": 829,
            "end": 832
          },
          "start": 821,
          "end": 832
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 835,
            "end": 836
          },
          "typeArguments": null,
          "start": 835,
          "end": 836
        },
        "start": 788,
        "end": 836
      },
      "declare": false,
      "start": 769,
      "end": 837
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InfiniteArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 844,
        "end": 857
      },
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
              "start": 858,
              "end": 859
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 858,
            "end": 859
          }
        ],
        "start": 857,
        "end": 860
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InfiniteArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 863,
            "end": 876
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 878
                },
                "typeArguments": null,
                "start": 877,
                "end": 878
              }
            ],
            "start": 876,
            "end": 879
          },
          "start": 863,
          "end": 879
        },
        "start": 863,
        "end": 881
      },
      "declare": false,
      "start": 839,
      "end": 882
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B0",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 891
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Flatten",
          "optional": false,
          "typeAnnotation": null,
          "start": 894,
          "end": 901
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 902,
                    "end": 908
                  },
                  "start": 902,
                  "end": 910
                },
                "start": 902,
                "end": 912
              },
              "start": 902,
              "end": 914
            }
          ],
          "start": 901,
          "end": 915
        },
        "start": 894,
        "end": 915
      },
      "declare": false,
      "start": 884,
      "end": 916
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 922,
        "end": 924
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Flatten",
          "optional": false,
          "typeAnnotation": null,
          "start": 927,
          "end": 934
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 935,
                      "end": 941
                    },
                    "start": 935,
                    "end": 943
                  },
                  "start": 935,
                  "end": 945
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 958,
                            "end": 964
                          },
                          "start": 958,
                          "end": 966
                        },
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSBooleanKeyword",
                              "start": 969,
                              "end": 976
                            },
                            "start": 969,
                            "end": 978
                          },
                          "start": 969,
                          "end": 980
                        }
                      ],
                      "start": 958,
                      "end": 980
                    },
                    "start": 957,
                    "end": 983
                  },
                  "start": 948,
                  "end": 983
                }
              ],
              "start": 935,
              "end": 983
            }
          ],
          "start": 934,
          "end": 984
        },
        "start": 927,
        "end": 984
      },
      "declare": false,
      "start": 917,
      "end": 985
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 991,
        "end": 993
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Flatten",
          "optional": false,
          "typeAnnotation": null,
          "start": 996,
          "end": 1003
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InfiniteArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1017
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1018,
                    "end": 1024
                  }
                ],
                "start": 1017,
                "end": 1025
              },
              "start": 1004,
              "end": 1025
            }
          ],
          "start": 1003,
          "end": 1026
        },
        "start": 996,
        "end": 1026
      },
      "declare": false,
      "start": 986,
      "end": 1027
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1033,
        "end": 1035
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1038,
            "end": 1040
          },
          "typeArguments": null,
          "start": 1038,
          "end": 1040
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1041,
            "end": 1042
          },
          "start": 1041,
          "end": 1042
        },
        "start": 1038,
        "end": 1043
      },
      "declare": false,
      "start": 1028,
      "end": 1044
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1082,
        "end": 1089
      },
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
              "start": 1090,
              "end": 1091
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1090,
            "end": 1091
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1093,
              "end": 1094
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1103,
              "end": 1109
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1093,
            "end": 1109
          }
        ],
        "start": 1089,
        "end": 1110
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1114
          },
          "typeArguments": null,
          "start": 1113,
          "end": 1114
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1123,
            "end": 1124
          },
          "typeArguments": null,
          "start": 1123,
          "end": 1124
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 1127,
            "end": 1133
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1142,
              "end": 1143
            },
            "typeArguments": null,
            "start": 1142,
            "end": 1143
          },
          "trueType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1146,
                "end": 1147
              },
              "typeArguments": null,
              "start": 1146,
              "end": 1147
            },
            "start": 1146,
            "end": 1149
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_TupleOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1160
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1161,
                    "end": 1162
                  },
                  "typeArguments": null,
                  "start": 1161,
                  "end": 1162
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1164,
                    "end": 1165
                  },
                  "typeArguments": null,
                  "start": 1164,
                  "end": 1165
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 1167,
                  "end": 1169
                }
              ],
              "start": 1160,
              "end": 1170
            },
            "start": 1152,
            "end": 1170
          },
          "start": 1127,
          "end": 1170
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1173,
          "end": 1178
        },
        "start": 1113,
        "end": 1178
      },
      "declare": false,
      "start": 1077,
      "end": 1179
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_TupleOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1185,
        "end": 1193
      },
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
              "start": 1194,
              "end": 1195
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1194,
            "end": 1195
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1197,
              "end": 1198
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1207,
              "end": 1213
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1197,
            "end": 1213
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1216
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1225,
                "end": 1232
              },
              "start": 1225,
              "end": 1234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1215,
            "end": 1234
          }
        ],
        "start": 1193,
        "end": 1235
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1239
            },
            "typeArguments": null,
            "start": 1238,
            "end": 1239
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 1240,
              "end": 1248
            },
            "start": 1240,
            "end": 1248
          },
          "start": 1238,
          "end": 1249
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1258,
            "end": 1259
          },
          "typeArguments": null,
          "start": 1258,
          "end": 1259
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 1262,
            "end": 1263
          },
          "typeArguments": null,
          "start": 1262,
          "end": 1263
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_TupleOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1266,
            "end": 1274
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1275,
                  "end": 1276
                },
                "typeArguments": null,
                "start": 1275,
                "end": 1276
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1278,
                  "end": 1279
                },
                "typeArguments": null,
                "start": 1278,
                "end": 1279
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1283
                    },
                    "typeArguments": null,
                    "start": 1282,
                    "end": 1283
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1288,
                        "end": 1289
                      },
                      "typeArguments": null,
                      "start": 1288,
                      "end": 1289
                    },
                    "start": 1285,
                    "end": 1289
                  }
                ],
                "start": 1281,
                "end": 1290
              }
            ],
            "start": 1274,
            "end": 1291
          },
          "start": 1266,
          "end": 1291
        },
        "start": 1238,
        "end": 1291
      },
      "declare": false,
      "start": 1180,
      "end": 1292
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1299,
        "end": 1302
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1305,
          "end": 1312
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1313,
              "end": 1319
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1321,
                "end": 1322
              },
              "start": 1321,
              "end": 1322
            }
          ],
          "start": 1312,
          "end": 1323
        },
        "start": 1305,
        "end": 1323
      },
      "declare": false,
      "start": 1294,
      "end": 1324
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1330,
        "end": 1333
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1336,
          "end": 1343
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1344,
              "end": 1350
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1352,
                    "end": 1353
                  },
                  "start": 1352,
                  "end": 1353
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1356,
                    "end": 1357
                  },
                  "start": 1356,
                  "end": 1357
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1360,
                    "end": 1361
                  },
                  "start": 1360,
                  "end": 1361
                }
              ],
              "start": 1352,
              "end": 1361
            }
          ],
          "start": 1343,
          "end": 1362
        },
        "start": 1336,
        "end": 1362
      },
      "declare": false,
      "start": 1325,
      "end": 1363
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1369,
        "end": 1372
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1382
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
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
          ],
          "start": 1382,
          "end": 1398
        },
        "start": 1375,
        "end": 1398
      },
      "declare": false,
      "start": 1364,
      "end": 1399
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1405,
        "end": 1408
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1411,
          "end": 1418
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
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
          ],
          "start": 1418,
          "end": 1431
        },
        "start": 1411,
        "end": 1431
      },
      "declare": false,
      "start": 1400,
      "end": 1432
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1438,
        "end": 1441
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1444,
          "end": 1451
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1452,
              "end": 1458
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 1460,
                "end": 1463
              },
              "start": 1460,
              "end": 1463
            }
          ],
          "start": 1451,
          "end": 1464
        },
        "start": 1444,
        "end": 1464
      },
      "declare": false,
      "start": 1433,
      "end": 1465
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TT5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1471,
        "end": 1474
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1485,
              "end": 1491
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1000,
                "raw": "1000",
                "start": 1493,
                "end": 1497
              },
              "start": 1493,
              "end": 1497
            }
          ],
          "start": 1484,
          "end": 1498
        },
        "start": 1477,
        "end": 1498
      },
      "declare": false,
      "start": 1466,
      "end": 1499
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1529
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
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1530,
              "end": 1531
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1540,
              "end": 1546
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1530,
            "end": 1546
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1548,
              "end": 1549
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1559
              },
              "typeArguments": null,
              "start": 1558,
              "end": 1559
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1548,
            "end": 1559
          }
        ],
        "start": 1529,
        "end": 1560
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1565,
                "end": 1572
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1573,
                    "end": 1579
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1581,
                      "end": 1582
                    },
                    "typeArguments": null,
                    "start": 1581,
                    "end": 1582
                  }
                ],
                "start": 1572,
                "end": 1583
              },
              "start": 1565,
              "end": 1583
            },
            "start": 1563,
            "end": 1583
          },
          "start": 1561,
          "end": 1583
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tm",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1589,
                "end": 1596
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1597,
                    "end": 1603
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1605,
                      "end": 1606
                    },
                    "typeArguments": null,
                    "start": 1605,
                    "end": 1606
                  }
                ],
                "start": 1596,
                "end": 1607
              },
              "start": 1589,
              "end": 1607
            },
            "start": 1587,
            "end": 1607
          },
          "start": 1585,
          "end": 1607
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tn",
                "optional": false,
                "typeAnnotation": null,
                "start": 1615,
                "end": 1617
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tm",
                "optional": false,
                "typeAnnotation": null,
                "start": 1620,
                "end": 1622
              },
              "start": 1615,
              "end": 1622
            },
            "directive": null,
            "start": 1615,
            "end": 1623
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "tm",
                "optional": false,
                "typeAnnotation": null,
                "start": 1628,
                "end": 1630
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "tn",
                "optional": false,
                "typeAnnotation": null,
                "start": 1633,
                "end": 1635
              },
              "start": 1628,
              "end": 1635
            },
            "directive": null,
            "start": 1628,
            "end": 1636
          }
        ],
        "start": 1609,
        "end": 1638
      },
      "expression": false,
      "start": 1517,
      "end": 1638
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1657,
        "end": 1660
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1661,
              "end": 1662
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1661,
            "end": 1662
          }
        ],
        "start": 1660,
        "end": 1663
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1667,
                "end": 1674
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1675,
                      "end": 1676
                    },
                    "typeArguments": null,
                    "start": 1675,
                    "end": 1676
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1678,
                      "end": 1679
                    },
                    "start": 1678,
                    "end": 1679
                  }
                ],
                "start": 1674,
                "end": 1680
              },
              "start": 1667,
              "end": 1680
            },
            "start": 1665,
            "end": 1680
          },
          "start": 1664,
          "end": 1680
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1683,
            "end": 1684
          },
          "typeArguments": null,
          "start": 1683,
          "end": 1684
        },
        "start": 1681,
        "end": 1684
      },
      "body": null,
      "expression": false,
      "start": 1640,
      "end": 1685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f23",
          "optional": false,
          "typeAnnotation": null,
          "start": 1687,
          "end": 1690
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1692,
                "end": 1695
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1697,
                "end": 1700
              },
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1702,
                "end": 1705
              }
            ],
            "start": 1691,
            "end": 1706
          }
        ],
        "optional": false,
        "start": 1687,
        "end": 1707
      },
      "directive": null,
      "start": 1687,
      "end": 1708
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 1763,
        "end": 1766
      },
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
              "start": 1767,
              "end": 1768
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1767,
            "end": 1768
          }
        ],
        "start": 1766,
        "end": 1769
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1772,
              "end": 1777
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1779,
                  "end": 1780
                },
                "typeArguments": null,
                "start": 1779,
                "end": 1780
              },
              "start": 1777,
              "end": 1780
            },
            "accessibility": null,
            "static": false,
            "start": 1772,
            "end": 1780
          }
        ],
        "start": 1770,
        "end": 1782
      },
      "declare": false,
      "start": 1753,
      "end": 1782
    },
    {
      "type": "EmptyStatement",
      "start": 1782,
      "end": 1783
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1795
      },
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
              "start": 1796,
              "end": 1797
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1796,
            "end": 1797
          }
        ],
        "start": 1795,
        "end": 1798
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1801,
              "end": 1802
            },
            "typeArguments": null,
            "start": 1801,
            "end": 1802
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null,
              "start": 1805,
              "end": 1808
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RecBox",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1815
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1816,
                          "end": 1817
                        },
                        "typeArguments": null,
                        "start": 1816,
                        "end": 1817
                      }
                    ],
                    "start": 1815,
                    "end": 1818
                  },
                  "start": 1809,
                  "end": 1818
                }
              ],
              "start": 1808,
              "end": 1819
            },
            "start": 1805,
            "end": 1819
          }
        ],
        "start": 1801,
        "end": 1819
      },
      "declare": false,
      "start": 1784,
      "end": 1820
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InfBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 1826,
        "end": 1832
      },
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
              "start": 1833,
              "end": 1834
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1833,
            "end": 1834
          }
        ],
        "start": 1832,
        "end": 1835
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 1838,
          "end": 1841
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InfBox",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1848
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1849,
                      "end": 1850
                    },
                    "typeArguments": null,
                    "start": 1849,
                    "end": 1850
                  }
                ],
                "start": 1848,
                "end": 1851
              },
              "start": 1842,
              "end": 1851
            }
          ],
          "start": 1841,
          "end": 1852
        },
        "start": 1838,
        "end": 1852
      },
      "declare": false,
      "start": 1821,
      "end": 1853
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 1872,
        "end": 1877
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1878,
              "end": 1879
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1878,
            "end": 1879
          }
        ],
        "start": 1877,
        "end": 1880
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "box",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RecBox",
                "optional": false,
                "typeAnnotation": null,
                "start": 1886,
                "end": 1892
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1893,
                      "end": 1894
                    },
                    "typeArguments": null,
                    "start": 1893,
                    "end": 1894
                  }
                ],
                "start": 1892,
                "end": 1895
              },
              "start": 1886,
              "end": 1895
            },
            "start": 1884,
            "end": 1895
          },
          "start": 1881,
          "end": 1895
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1898,
            "end": 1899
          },
          "typeArguments": null,
          "start": 1898,
          "end": 1899
        },
        "start": 1896,
        "end": 1899
      },
      "body": null,
      "expression": false,
      "start": 1855,
      "end": 1899
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1906,
        "end": 1908
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 1911,
          "end": 1914
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1915,
              "end": 1921
            }
          ],
          "start": 1914,
          "end": 1922
        },
        "start": 1911,
        "end": 1922
      },
      "declare": false,
      "start": 1901,
      "end": 1923
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1929,
        "end": 1931
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 1934,
          "end": 1937
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1938,
                "end": 1940
              },
              "typeArguments": null,
              "start": 1938,
              "end": 1940
            }
          ],
          "start": 1937,
          "end": 1941
        },
        "start": 1934,
        "end": 1941
      },
      "declare": false,
      "start": 1924,
      "end": 1942
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1948,
        "end": 1950
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 1953,
          "end": 1956
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1957,
                "end": 1959
              },
              "typeArguments": null,
              "start": 1957,
              "end": 1959
            }
          ],
          "start": 1956,
          "end": 1960
        },
        "start": 1953,
        "end": 1960
      },
      "declare": false,
      "start": 1943,
      "end": 1961
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1967,
        "end": 1969
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 1972,
          "end": 1975
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1976,
                "end": 1978
              },
              "typeArguments": null,
              "start": 1976,
              "end": 1978
            }
          ],
          "start": 1975,
          "end": 1979
        },
        "start": 1972,
        "end": 1979
      },
      "declare": false,
      "start": 1962,
      "end": 1980
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1986,
        "end": 1988
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 1991,
          "end": 1994
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 1997
              },
              "typeArguments": null,
              "start": 1995,
              "end": 1997
            }
          ],
          "start": 1994,
          "end": 1998
        },
        "start": 1991,
        "end": 1998
      },
      "declare": false,
      "start": 1981,
      "end": 1999
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2005,
        "end": 2007
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 2010,
          "end": 2013
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null,
                "start": 2014,
                "end": 2016
              },
              "typeArguments": null,
              "start": 2014,
              "end": 2016
            }
          ],
          "start": 2013,
          "end": 2017
        },
        "start": 2010,
        "end": 2017
      },
      "declare": false,
      "start": 2000,
      "end": 2018
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2036,
                  "end": 2039
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Box",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2040,
                        "end": 2043
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Box",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2044,
                              "end": 2047
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Box",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2048,
                                    "end": 2051
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Box",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2052,
                                          "end": 2055
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Box",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2056,
                                                "end": 2059
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSStringKeyword",
                                                    "start": 2060,
                                                    "end": 2066
                                                  }
                                                ],
                                                "start": 2059,
                                                "end": 2067
                                              },
                                              "start": 2056,
                                              "end": 2067
                                            }
                                          ],
                                          "start": 2055,
                                          "end": 2068
                                        },
                                        "start": 2052,
                                        "end": 2068
                                      }
                                    ],
                                    "start": 2051,
                                    "end": 2069
                                  },
                                  "start": 2048,
                                  "end": 2069
                                }
                              ],
                              "start": 2047,
                              "end": 2070
                            },
                            "start": 2044,
                            "end": 2070
                          }
                        ],
                        "start": 2043,
                        "end": 2071
                      },
                      "start": 2040,
                      "end": 2071
                    }
                  ],
                  "start": 2039,
                  "end": 2072
                },
                "start": 2036,
                "end": 2072
              },
              "start": 2034,
              "end": 2072
            },
            "start": 2032,
            "end": 2072
          },
          "init": null,
          "definite": false,
          "start": 2032,
          "end": 2072
        }
      ],
      "declare": true,
      "start": 2020,
      "end": 2073
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2090,
                  "end": 2092
                },
                "typeArguments": null,
                "start": 2090,
                "end": 2092
              },
              "start": 2088,
              "end": 2092
            },
            "start": 2086,
            "end": 2092
          },
          "init": null,
          "definite": false,
          "start": 2086,
          "end": 2092
        }
      ],
      "declare": true,
      "start": 2074,
      "end": 2093
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InfBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2110,
                  "end": 2116
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2117,
                      "end": 2123
                    }
                  ],
                  "start": 2116,
                  "end": 2124
                },
                "start": 2110,
                "end": 2124
              },
              "start": 2108,
              "end": 2124
            },
            "start": 2106,
            "end": 2124
          },
          "init": null,
          "definite": false,
          "start": 2106,
          "end": 2124
        }
      ],
      "declare": true,
      "start": 2094,
      "end": 2125
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2144,
                      "end": 2149
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2153,
                              "end": 2158
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2162,
                                      "end": 2167
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeQuery",
                                        "exprName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b4",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2176,
                                          "end": 2178
                                        },
                                        "typeArguments": null,
                                        "start": 2169,
                                        "end": 2178
                                      },
                                      "start": 2167,
                                      "end": 2178
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2162,
                                    "end": 2178
                                  }
                                ],
                                "start": 2160,
                                "end": 2180
                              },
                              "start": 2158,
                              "end": 2180
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2153,
                            "end": 2180
                          }
                        ],
                        "start": 2151,
                        "end": 2181
                      },
                      "start": 2149,
                      "end": 2181
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2144,
                    "end": 2181
                  }
                ],
                "start": 2142,
                "end": 2182
              },
              "start": 2140,
              "end": 2182
            },
            "start": 2138,
            "end": 2182
          },
          "init": null,
          "definite": false,
          "start": 2138,
          "end": 2182
        }
      ],
      "declare": true,
      "start": 2126,
      "end": 2183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "typeAnnotation": null,
          "start": 2185,
          "end": 2190
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2191,
            "end": 2193
          }
        ],
        "optional": false,
        "start": 2185,
        "end": 2194
      },
      "directive": null,
      "start": 2185,
      "end": 2195
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "typeAnnotation": null,
          "start": 2207,
          "end": 2212
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2213,
            "end": 2215
          }
        ],
        "optional": false,
        "start": 2207,
        "end": 2216
      },
      "directive": null,
      "start": 2207,
      "end": 2217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "typeAnnotation": null,
          "start": 2229,
          "end": 2234
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2235,
            "end": 2237
          }
        ],
        "optional": false,
        "start": 2229,
        "end": 2238
      },
      "directive": null,
      "start": 2229,
      "end": 2239
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "typeAnnotation": null,
          "start": 2259,
          "end": 2264
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2267,
                  "end": 2272
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2276,
                        "end": 2281
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2285,
                              "end": 2290
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2294,
                                    "end": 2299
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2303,
                                          "end": 2308
                                        },
                                        "value": {
                                          "type": "ObjectExpression",
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2312,
                                                "end": 2317
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": 5,
                                                "raw": "5",
                                                "start": 2319,
                                                "end": 2320
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 2312,
                                              "end": 2320
                                            }
                                          ],
                                          "start": 2310,
                                          "end": 2322
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 2303,
                                        "end": 2322
                                      }
                                    ],
                                    "start": 2301,
                                    "end": 2323
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2294,
                                  "end": 2323
                                }
                              ],
                              "start": 2292,
                              "end": 2324
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2285,
                            "end": 2324
                          }
                        ],
                        "start": 2283,
                        "end": 2325
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2276,
                      "end": 2325
                    }
                  ],
                  "start": 2274,
                  "end": 2326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2267,
                "end": 2326
              }
            ],
            "start": 2265,
            "end": 2327
          }
        ],
        "optional": false,
        "start": 2259,
        "end": 2328
      },
      "directive": null,
      "start": 2259,
      "end": 2329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "typeAnnotation": null,
          "start": 2341,
          "end": 2346
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2347,
            "end": 2349
          }
        ],
        "optional": false,
        "start": 2341,
        "end": 2350
      },
      "directive": null,
      "start": 2341,
      "end": 2351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unbox",
          "optional": false,
          "typeAnnotation": null,
          "start": 2387,
          "end": 2392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2395,
                  "end": 2400
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2404,
                        "end": 2409
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "get",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2417,
                              "end": 2422
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "ThisExpression",
                                      "start": 2434,
                                      "end": 2438
                                    },
                                    "start": 2427,
                                    "end": 2439
                                  }
                                ],
                                "start": 2425,
                                "end": 2441
                              },
                              "expression": false,
                              "start": 2422,
                              "end": 2441
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2413,
                            "end": 2441
                          }
                        ],
                        "start": 2411,
                        "end": 2443
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2404,
                      "end": 2443
                    }
                  ],
                  "start": 2402,
                  "end": 2444
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2395,
                "end": 2444
              }
            ],
            "start": 2393,
            "end": 2445
          }
        ],
        "optional": false,
        "start": 2387,
        "end": 2446
      },
      "directive": null,
      "start": 2387,
      "end": 2447
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2545,
        "end": 2549
      },
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
              "start": 2550,
              "end": 2551
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2550,
            "end": 2551
          }
        ],
        "start": 2549,
        "end": 2552
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2557,
              "end": 2562
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2564,
                  "end": 2565
                },
                "typeArguments": null,
                "start": 2564,
                "end": 2565
              },
              "start": 2562,
              "end": 2565
            },
            "accessibility": null,
            "static": false,
            "start": 2557,
            "end": 2565
          }
        ],
        "start": 2555,
        "end": 2567
      },
      "declare": false,
      "start": 2540,
      "end": 2568
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2574,
        "end": 2578
      },
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
              "start": 2579,
              "end": 2580
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2579,
            "end": 2580
          }
        ],
        "start": 2578,
        "end": 2581
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2586,
              "end": 2591
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2593,
                  "end": 2594
                },
                "typeArguments": null,
                "start": 2593,
                "end": 2594
              },
              "start": 2591,
              "end": 2594
            },
            "accessibility": null,
            "static": false,
            "start": 2586,
            "end": 2594
          }
        ],
        "start": 2584,
        "end": 2596
      },
      "declare": false,
      "start": 2569,
      "end": 2597
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2616,
        "end": 2619
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2620,
              "end": 2621
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2620,
            "end": 2621
          }
        ],
        "start": 2619,
        "end": 2622
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2626,
                "end": 2630
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2631,
                      "end": 2635
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2636,
                            "end": 2637
                          },
                          "typeArguments": null,
                          "start": 2636,
                          "end": 2637
                        }
                      ],
                      "start": 2635,
                      "end": 2638
                    },
                    "start": 2631,
                    "end": 2638
                  }
                ],
                "start": 2630,
                "end": 2639
              },
              "start": 2626,
              "end": 2639
            },
            "start": 2624,
            "end": 2639
          },
          "start": 2623,
          "end": 2639
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2642,
            "end": 2643
          },
          "typeArguments": null,
          "start": 2642,
          "end": 2643
        },
        "start": 2640,
        "end": 2643
      },
      "body": null,
      "expression": false,
      "start": 2599,
      "end": 2644
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2661,
                  "end": 2665
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Box2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2666,
                        "end": 2670
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2671,
                            "end": 2677
                          }
                        ],
                        "start": 2670,
                        "end": 2678
                      },
                      "start": 2666,
                      "end": 2678
                    }
                  ],
                  "start": 2665,
                  "end": 2679
                },
                "start": 2661,
                "end": 2679
              },
              "start": 2659,
              "end": 2679
            },
            "start": 2658,
            "end": 2679
          },
          "init": null,
          "definite": false,
          "start": 2658,
          "end": 2679
        }
      ],
      "declare": true,
      "start": 2646,
      "end": 2680
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
          "start": 2682,
          "end": 2685
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 2686,
            "end": 2687
          }
        ],
        "optional": false,
        "start": 2682,
        "end": 2688
      },
      "directive": null,
      "start": 2682,
      "end": 2689
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Intersect",
        "optional": false,
        "typeAnnotation": null,
        "start": 2741,
        "end": 2750
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2751,
              "end": 2752
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2761,
                "end": 2764
              },
              "start": 2761,
              "end": 2766
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2751,
            "end": 2766
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 2768,
              "end": 2769
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2772,
              "end": 2779
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2768,
            "end": 2779
          }
        ],
        "start": 2750,
        "end": 2780
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2783,
            "end": 2784
          },
          "typeArguments": null,
          "start": 2783,
          "end": 2784
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "H",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2800,
                  "end": 2801
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2800,
                "end": 2801
              },
              "start": 2794,
              "end": 2801
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2812,
                    "end": 2813
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2812,
                  "end": 2813
                },
                "start": 2806,
                "end": 2813
              },
              "start": 2803,
              "end": 2813
            }
          ],
          "start": 2793,
          "end": 2814
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intersect",
            "optional": false,
            "typeAnnotation": null,
            "start": 2817,
            "end": 2826
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2827,
                  "end": 2828
                },
                "typeArguments": null,
                "start": 2827,
                "end": 2828
              },
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2830,
                      "end": 2831
                    },
                    "typeArguments": null,
                    "start": 2830,
                    "end": 2831
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "H",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2834,
                      "end": 2835
                    },
                    "typeArguments": null,
                    "start": 2834,
                    "end": 2835
                  }
                ],
                "start": 2830,
                "end": 2835
              }
            ],
            "start": 2826,
            "end": 2836
          },
          "start": 2817,
          "end": 2836
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 2839,
            "end": 2840
          },
          "typeArguments": null,
          "start": 2839,
          "end": 2840
        },
        "start": 2783,
        "end": 2840
      },
      "declare": false,
      "start": 2736,
      "end": 2841
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QQ",
        "optional": false,
        "typeAnnotation": null,
        "start": 2848,
        "end": 2850
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Intersect",
          "optional": false,
          "typeAnnotation": null,
          "start": 2853,
          "end": 2862
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 2864,
                    "end": 2870
                  },
                  "start": 2864,
                  "end": 2872
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 2874,
                    "end": 2880
                  },
                  "start": 2874,
                  "end": 2882
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 2884,
                    "end": 2885
                  },
                  "start": 2884,
                  "end": 2885
                }
              ],
              "start": 2863,
              "end": 2886
            }
          ],
          "start": 2862,
          "end": 2887
        },
        "start": 2853,
        "end": 2887
      },
      "declare": false,
      "start": 2843,
      "end": 2888
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unpack1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2964,
        "end": 2971
      },
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
              "start": 2972,
              "end": 2973
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2972,
            "end": 2973
          }
        ],
        "start": 2971,
        "end": 2974
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2977,
            "end": 2978
          },
          "typeArguments": null,
          "start": 2977,
          "end": 2978
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2994,
                "end": 2995
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2994,
              "end": 2995
            },
            "start": 2988,
            "end": 2995
          },
          "start": 2987,
          "end": 2998
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unpack1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3001,
            "end": 3008
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3009,
                  "end": 3010
                },
                "typeArguments": null,
                "start": 3009,
                "end": 3010
              }
            ],
            "start": 3008,
            "end": 3011
          },
          "start": 3001,
          "end": 3011
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3014,
            "end": 3015
          },
          "typeArguments": null,
          "start": 3014,
          "end": 3015
        },
        "start": 2977,
        "end": 3015
      },
      "declare": false,
      "start": 2959,
      "end": 3016
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unpack2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3022,
        "end": 3029
      },
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
              "start": 3030,
              "end": 3031
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3030,
            "end": 3031
          }
        ],
        "start": 3029,
        "end": 3032
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3035,
            "end": 3036
          },
          "typeArguments": null,
          "start": 3035,
          "end": 3036
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3052,
                "end": 3053
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3052,
              "end": 3053
            },
            "start": 3046,
            "end": 3053
          },
          "start": 3045,
          "end": 3056
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unpack2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3059,
            "end": 3066
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3067,
                  "end": 3068
                },
                "typeArguments": null,
                "start": 3067,
                "end": 3068
              }
            ],
            "start": 3066,
            "end": 3069
          },
          "start": 3059,
          "end": 3069
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3072,
            "end": 3073
          },
          "typeArguments": null,
          "start": 3072,
          "end": 3073
        },
        "start": 3035,
        "end": 3073
      },
      "declare": false,
      "start": 3017,
      "end": 3074
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 3085,
        "end": 3088
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
              "start": 3089,
              "end": 3090
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3089,
            "end": 3090
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3092,
              "end": 3093
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3102,
                "end": 3103
              },
              "typeArguments": null,
              "start": 3102,
              "end": 3103
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3092,
            "end": 3103
          }
        ],
        "start": 3088,
        "end": 3104
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unpack1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3108,
                "end": 3115
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3116,
                      "end": 3117
                    },
                    "typeArguments": null,
                    "start": 3116,
                    "end": 3117
                  }
                ],
                "start": 3115,
                "end": 3118
              },
              "start": 3108,
              "end": 3118
            },
            "start": 3106,
            "end": 3118
          },
          "start": 3105,
          "end": 3118
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unpack2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3123,
                "end": 3130
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3131,
                      "end": 3132
                    },
                    "typeArguments": null,
                    "start": 3131,
                    "end": 3132
                  }
                ],
                "start": 3130,
                "end": 3133
              },
              "start": 3123,
              "end": 3133
            },
            "start": 3121,
            "end": 3133
          },
          "start": 3120,
          "end": 3133
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3141,
                "end": 3142
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3145,
                "end": 3146
              },
              "start": 3141,
              "end": 3146
            },
            "directive": null,
            "start": 3141,
            "end": 3147
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3152,
                "end": 3153
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3156,
                "end": 3157
              },
              "start": 3152,
              "end": 3157
            },
            "directive": null,
            "start": 3152,
            "end": 3158
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f20",
                "optional": false,
                "typeAnnotation": null,
                "start": 3163,
                "end": 3166
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3167,
                  "end": 3168
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3170,
                  "end": 3171
                }
              ],
              "optional": false,
              "start": 3163,
              "end": 3172
            },
            "directive": null,
            "start": 3163,
            "end": 3173
          }
        ],
        "start": 3135,
        "end": 3175
      },
      "expression": false,
      "start": 3076,
      "end": 3175
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Grow1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3182,
        "end": 3187
      },
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
              "start": 3188,
              "end": 3189
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3198,
                "end": 3205
              },
              "start": 3198,
              "end": 3207
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3188,
            "end": 3207
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 3209,
              "end": 3210
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3219,
              "end": 3225
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3209,
            "end": 3225
          }
        ],
        "start": 3187,
        "end": 3226
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3229,
              "end": 3230
            },
            "typeArguments": null,
            "start": 3229,
            "end": 3230
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 3231,
              "end": 3239
            },
            "start": 3231,
            "end": 3239
          },
          "start": 3229,
          "end": 3240
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 3249,
            "end": 3250
          },
          "typeArguments": null,
          "start": 3249,
          "end": 3250
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3253,
            "end": 3254
          },
          "typeArguments": null,
          "start": 3253,
          "end": 3254
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Grow1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3257,
            "end": 3262
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 3264,
                    "end": 3270
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3275,
                        "end": 3276
                      },
                      "typeArguments": null,
                      "start": 3275,
                      "end": 3276
                    },
                    "start": 3272,
                    "end": 3276
                  }
                ],
                "start": 3263,
                "end": 3277
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3279,
                  "end": 3280
                },
                "typeArguments": null,
                "start": 3279,
                "end": 3280
              }
            ],
            "start": 3262,
            "end": 3281
          },
          "start": 3257,
          "end": 3281
        },
        "start": 3229,
        "end": 3281
      },
      "declare": false,
      "start": 3177,
      "end": 3282
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Grow2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3288,
        "end": 3293
      },
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
              "start": 3294,
              "end": 3295
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3304,
                "end": 3311
              },
              "start": 3304,
              "end": 3313
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3294,
            "end": 3313
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 3315,
              "end": 3316
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3325,
              "end": 3331
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3315,
            "end": 3331
          }
        ],
        "start": 3293,
        "end": 3332
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3335,
              "end": 3336
            },
            "typeArguments": null,
            "start": 3335,
            "end": 3336
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 3337,
              "end": 3345
            },
            "start": 3337,
            "end": 3345
          },
          "start": 3335,
          "end": 3346
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 3355,
            "end": 3356
          },
          "typeArguments": null,
          "start": 3355,
          "end": 3356
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3359,
            "end": 3360
          },
          "typeArguments": null,
          "start": 3359,
          "end": 3360
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Grow2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3363,
            "end": 3368
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3370,
                    "end": 3376
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3381,
                        "end": 3382
                      },
                      "typeArguments": null,
                      "start": 3381,
                      "end": 3382
                    },
                    "start": 3378,
                    "end": 3382
                  }
                ],
                "start": 3369,
                "end": 3383
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3385,
                  "end": 3386
                },
                "typeArguments": null,
                "start": 3385,
                "end": 3386
              }
            ],
            "start": 3368,
            "end": 3387
          },
          "start": 3363,
          "end": 3387
        },
        "start": 3335,
        "end": 3387
      },
      "declare": false,
      "start": 3283,
      "end": 3388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 3399,
        "end": 3402
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
              "start": 3403,
              "end": 3404
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3413,
              "end": 3419
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3403,
            "end": 3419
          }
        ],
        "start": 3402,
        "end": 3420
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grow1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3424,
                "end": 3429
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 3430,
                    "end": 3432
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3434,
                      "end": 3435
                    },
                    "typeArguments": null,
                    "start": 3434,
                    "end": 3435
                  }
                ],
                "start": 3429,
                "end": 3436
              },
              "start": 3424,
              "end": 3436
            },
            "start": 3422,
            "end": 3436
          },
          "start": 3421,
          "end": 3436
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grow2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3441,
                "end": 3446
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 3447,
                    "end": 3449
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3451,
                      "end": 3452
                    },
                    "typeArguments": null,
                    "start": 3451,
                    "end": 3452
                  }
                ],
                "start": 3446,
                "end": 3453
              },
              "start": 3441,
              "end": 3453
            },
            "start": 3439,
            "end": 3453
          },
          "start": 3438,
          "end": 3453
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f21",
                "optional": false,
                "typeAnnotation": null,
                "start": 3461,
                "end": 3464
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3465,
                  "end": 3466
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3468,
                  "end": 3469
                }
              ],
              "optional": false,
              "start": 3461,
              "end": 3470
            },
            "directive": null,
            "start": 3461,
            "end": 3471
          }
        ],
        "start": 3455,
        "end": 3483
      },
      "expression": false,
      "start": 3390,
      "end": 3483
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParseSuccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 3513,
        "end": 3525
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 3526,
              "end": 3527
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3536,
              "end": 3542
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3526,
            "end": 3542
          }
        ],
        "start": 3525,
        "end": 3543
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 3548,
              "end": 3552
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3554,
                  "end": 3555
                },
                "typeArguments": null,
                "start": 3554,
                "end": 3555
              },
              "start": 3552,
              "end": 3555
            },
            "accessibility": null,
            "static": false,
            "start": 3548,
            "end": 3555
          }
        ],
        "start": 3546,
        "end": 3557
      },
      "declare": false,
      "start": 3508,
      "end": 3558
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParseManyWhitespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 3565,
        "end": 3584
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 3585,
              "end": 3586
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3595,
              "end": 3601
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3585,
            "end": 3601
          }
        ],
        "start": 3584,
        "end": 3602
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 3609,
            "end": 3610
          },
          "typeArguments": null,
          "start": 3609,
          "end": 3610
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": " ",
                "cooked": " "
              },
              "tail": false,
              "start": 3619,
              "end": 3623
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3631,
              "end": 3633
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3629,
                  "end": 3631
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3629,
                "end": 3631
              },
              "start": 3623,
              "end": 3631
            }
          ],
          "start": 3619,
          "end": 3633
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParseManyWhitespace",
              "optional": false,
              "typeAnnotation": null,
              "start": 3644,
              "end": 3663
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3664,
                    "end": 3666
                  },
                  "typeArguments": null,
                  "start": 3664,
                  "end": 3666
                }
              ],
              "start": 3663,
              "end": 3667
            },
            "start": 3644,
            "end": 3667
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParseSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 3676,
              "end": 3688
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3695,
                      "end": 3697
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3695,
                    "end": 3697
                  },
                  "start": 3689,
                  "end": 3697
                }
              ],
              "start": 3688,
              "end": 3698
            },
            "start": 3676,
            "end": 3698
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParseSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 3701,
              "end": 3713
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3714,
                    "end": 3716
                  },
                  "typeArguments": null,
                  "start": 3714,
                  "end": 3716
                }
              ],
              "start": 3713,
              "end": 3717
            },
            "start": 3701,
            "end": 3717
          },
          "falseType": {
            "type": "TSNullKeyword",
            "start": 3720,
            "end": 3724
          },
          "start": 3644,
          "end": 3724
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 3735,
            "end": 3747
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3748,
                  "end": 3749
                },
                "typeArguments": null,
                "start": 3748,
                "end": 3749
              }
            ],
            "start": 3747,
            "end": 3750
          },
          "start": 3735,
          "end": 3750
        },
        "start": 3609,
        "end": 3750
      },
      "declare": false,
      "start": 3560,
      "end": 3751
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TP1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3758,
        "end": 3761
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ParseManyWhitespace",
          "optional": false,
          "typeAnnotation": null,
          "start": 3764,
          "end": 3783
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": " foo",
                "raw": "\" foo\"",
                "start": 3784,
                "end": 3790
              },
              "start": 3784,
              "end": 3790
            }
          ],
          "start": 3783,
          "end": 3791
        },
        "start": 3764,
        "end": 3791
      },
      "declare": false,
      "start": 3753,
      "end": 3792
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParseManyWhitespace2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3799,
        "end": 3819
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 3820,
              "end": 3821
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3830,
              "end": 3836
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3820,
            "end": 3836
          }
        ],
        "start": 3819,
        "end": 3837
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 3844,
            "end": 3845
          },
          "typeArguments": null,
          "start": 3844,
          "end": 3845
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": " ",
                "cooked": " "
              },
              "tail": false,
              "start": 3854,
              "end": 3858
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3866,
              "end": 3868
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3864,
                  "end": 3866
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 3864,
                "end": 3866
              },
              "start": 3858,
              "end": 3866
            }
          ],
          "start": 3854,
          "end": 3868
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Helper",
            "optional": false,
            "typeAnnotation": null,
            "start": 3879,
            "end": 3885
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParseManyWhitespace2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3886,
                  "end": 3906
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3907,
                        "end": 3909
                      },
                      "typeArguments": null,
                      "start": 3907,
                      "end": 3909
                    }
                  ],
                  "start": 3906,
                  "end": 3910
                },
                "start": 3886,
                "end": 3910
              }
            ],
            "start": 3885,
            "end": 3911
          },
          "start": 3879,
          "end": 3911
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 3922,
            "end": 3934
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3935,
                  "end": 3936
                },
                "typeArguments": null,
                "start": 3935,
                "end": 3936
              }
            ],
            "start": 3934,
            "end": 3937
          },
          "start": 3922,
          "end": 3937
        },
        "start": 3844,
        "end": 3937
      },
      "declare": false,
      "start": 3794,
      "end": 3938
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Helper",
        "optional": false,
        "typeAnnotation": null,
        "start": 3945,
        "end": 3951
      },
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
              "start": 3952,
              "end": 3953
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3952,
            "end": 3953
          }
        ],
        "start": 3951,
        "end": 3954
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3957,
            "end": 3958
          },
          "typeArguments": null,
          "start": 3957,
          "end": 3958
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 3967,
            "end": 3979
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3986,
                    "end": 3987
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3986,
                  "end": 3987
                },
                "start": 3980,
                "end": 3987
              }
            ],
            "start": 3979,
            "end": 3988
          },
          "start": 3967,
          "end": 3988
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParseSuccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 3991,
            "end": 4003
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4004,
                  "end": 4005
                },
                "typeArguments": null,
                "start": 4004,
                "end": 4005
              }
            ],
            "start": 4003,
            "end": 4006
          },
          "start": 3991,
          "end": 4006
        },
        "falseType": {
          "type": "TSNullKeyword",
          "start": 4009,
          "end": 4013
        },
        "start": 3957,
        "end": 4013
      },
      "declare": false,
      "start": 3940,
      "end": 4013
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TP2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4020,
        "end": 4023
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ParseManyWhitespace2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4026,
          "end": 4046
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": " foo",
                "raw": "\" foo\"",
                "start": 4047,
                "end": 4053
              },
              "start": 4047,
              "end": 4053
            }
          ],
          "start": 4046,
          "end": 4054
        },
        "start": 4026,
        "end": 4054
      },
      "declare": false,
      "start": 4015,
      "end": 4055
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 4084,
        "end": 4090
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 4091,
              "end": 4092
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4101,
              "end": 4107
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4091,
            "end": 4107
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tup",
              "optional": false,
              "typeAnnotation": null,
              "start": 4109,
              "end": 4112
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4121,
                "end": 4128
              },
              "start": 4121,
              "end": 4130
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 4133,
              "end": 4135
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 4109,
            "end": 4135
          }
        ],
        "start": 4090,
        "end": 4136
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tup",
              "optional": false,
              "typeAnnotation": null,
              "start": 4143,
              "end": 4146
            },
            "typeArguments": null,
            "start": 4143,
            "end": 4146
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 4147,
              "end": 4155
            },
            "start": 4147,
            "end": 4155
          },
          "start": 4143,
          "end": 4156
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 4165,
            "end": 4166
          },
          "typeArguments": null,
          "start": 4165,
          "end": 4166
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tup",
            "optional": false,
            "typeAnnotation": null,
            "start": 4169,
            "end": 4172
          },
          "typeArguments": null,
          "start": 4169,
          "end": 4172
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 4175,
            "end": 4181
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4182,
                  "end": 4183
                },
                "typeArguments": null,
                "start": 4182,
                "end": 4183
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tup",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4189,
                        "end": 4192
                      },
                      "typeArguments": null,
                      "start": 4189,
                      "end": 4192
                    },
                    "start": 4186,
                    "end": 4192
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 4194,
                    "end": 4201
                  }
                ],
                "start": 4185,
                "end": 4202
              }
            ],
            "start": 4181,
            "end": 4203
          },
          "start": 4175,
          "end": 4203
        },
        "start": 4143,
        "end": 4203
      },
      "declare": false,
      "start": 4079,
      "end": 4204
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Add",
        "optional": false,
        "typeAnnotation": null,
        "start": 4211,
        "end": 4214
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4215,
              "end": 4216
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4225,
              "end": 4231
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4215,
            "end": 4231
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 4233,
              "end": 4234
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4243,
              "end": 4249
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4233,
            "end": 4249
          }
        ],
        "start": 4214,
        "end": 4250
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4261,
                  "end": 4267
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4268,
                        "end": 4269
                      },
                      "typeArguments": null,
                      "start": 4268,
                      "end": 4269
                    }
                  ],
                  "start": 4267,
                  "end": 4270
                },
                "start": 4261,
                "end": 4270
              },
              "start": 4258,
              "end": 4270
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4275,
                  "end": 4281
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4282,
                        "end": 4283
                      },
                      "typeArguments": null,
                      "start": 4282,
                      "end": 4283
                    }
                  ],
                  "start": 4281,
                  "end": 4284
                },
                "start": 4275,
                "end": 4284
              },
              "start": 4272,
              "end": 4284
            }
          ],
          "start": 4257,
          "end": 4285
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "'length'",
            "start": 4286,
            "end": 4294
          },
          "start": 4286,
          "end": 4294
        },
        "start": 4257,
        "end": 4295
      },
      "declare": false,
      "start": 4206,
      "end": 4296
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "five",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4308,
                  "end": 4311
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 4312,
                        "end": 4313
                      },
                      "start": 4312,
                      "end": 4313
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 4315,
                        "end": 4316
                      },
                      "start": 4315,
                      "end": 4316
                    }
                  ],
                  "start": 4311,
                  "end": 4317
                },
                "start": 4308,
                "end": 4317
              },
              "start": 4306,
              "end": 4317
            },
            "start": 4302,
            "end": 4317
          },
          "init": null,
          "definite": false,
          "start": 4302,
          "end": 4317
        }
      ],
      "declare": false,
      "start": 4298,
      "end": 4318
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_PrependNextNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 4347,
        "end": 4362
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4363,
              "end": 4364
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 4373,
                "end": 4378
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 4379,
                    "end": 4386
                  }
                ],
                "start": 4378,
                "end": 4387
              },
              "start": 4373,
              "end": 4387
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4363,
            "end": 4387
          }
        ],
        "start": 4362,
        "end": 4388
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4391,
              "end": 4392
            },
            "typeArguments": null,
            "start": 4391,
            "end": 4392
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 4393,
              "end": 4401
            },
            "start": 4393,
            "end": 4401
          },
          "start": 4391,
          "end": 4402
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4417,
              "end": 4418
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4417,
            "end": 4418
          },
          "start": 4411,
          "end": 4418
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4426,
                  "end": 4427
                },
                "typeArguments": null,
                "start": 4426,
                "end": 4427
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4432,
                    "end": 4433
                  },
                  "typeArguments": null,
                  "start": 4432,
                  "end": 4433
                },
                "start": 4429,
                "end": 4433
              }
            ],
            "start": 4425,
            "end": 4434
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4453,
                      "end": 4454
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4453,
                    "end": 4454
                  },
                  "start": 4447,
                  "end": 4454
                },
                "start": 4444,
                "end": 4454
              }
            ],
            "start": 4443,
            "end": 4455
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 4467,
              "end": 4468
            },
            "typeArguments": null,
            "start": 4467,
            "end": 4468
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 4479,
            "end": 4484
          },
          "start": 4425,
          "end": 4484
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4491,
          "end": 4496
        },
        "start": 4391,
        "end": 4496
      },
      "declare": false,
      "start": 4342,
      "end": 4497
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Enumerate",
        "optional": false,
        "typeAnnotation": null,
        "start": 4504,
        "end": 4514
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4515,
              "end": 4516
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 4525,
                "end": 4530
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 4531,
                    "end": 4538
                  }
                ],
                "start": 4530,
                "end": 4539
              },
              "start": 4525,
              "end": 4539
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4515,
            "end": 4539
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 4541,
              "end": 4542
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4551,
              "end": 4557
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4541,
            "end": 4557
          }
        ],
        "start": 4514,
        "end": 4558
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 4561,
            "end": 4562
          },
          "typeArguments": null,
          "start": 4561,
          "end": 4562
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4571,
              "end": 4572
            },
            "typeArguments": null,
            "start": 4571,
            "end": 4572
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 4573,
              "end": 4581
            },
            "start": 4573,
            "end": 4581
          },
          "start": 4571,
          "end": 4582
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 4589,
            "end": 4590
          },
          "typeArguments": null,
          "start": 4589,
          "end": 4590
        },
        "falseType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Enumerate",
                "optional": false,
                "typeAnnotation": null,
                "start": 4597,
                "end": 4607
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_PrependNextNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4608,
                      "end": 4623
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4624,
                            "end": 4625
                          },
                          "typeArguments": null,
                          "start": 4624,
                          "end": 4625
                        }
                      ],
                      "start": 4623,
                      "end": 4626
                    },
                    "start": 4608,
                    "end": 4626
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4628,
                      "end": 4629
                    },
                    "typeArguments": null,
                    "start": 4628,
                    "end": 4629
                  }
                ],
                "start": 4607,
                "end": 4630
              },
              "start": 4597,
              "end": 4630
            },
            {
              "type": "TSNumberKeyword",
              "start": 4633,
              "end": 4639
            }
          ],
          "start": 4597,
          "end": 4639
        },
        "start": 4561,
        "end": 4639
      },
      "declare": false,
      "start": 4499,
      "end": 4640
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enumerate",
        "optional": false,
        "typeAnnotation": null,
        "start": 4647,
        "end": 4656
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 4657,
              "end": 4658
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4667,
              "end": 4673
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4657,
            "end": 4673
          }
        ],
        "start": 4656,
        "end": 4674
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 4677,
          "end": 4683
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 4692,
            "end": 4693
          },
          "typeArguments": null,
          "start": 4692,
          "end": 4693
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 4700,
          "end": 4706
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_Enumerate",
              "optional": false,
              "typeAnnotation": null,
              "start": 4713,
              "end": 4723
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 4724,
                  "end": 4726
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4728,
                    "end": 4729
                  },
                  "typeArguments": null,
                  "start": 4728,
                  "end": 4729
                }
              ],
              "start": 4723,
              "end": 4730
            },
            "start": 4713,
            "end": 4730
          },
          "extendsType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4746,
                  "end": 4747
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4746,
                "end": 4747
              },
              "start": 4740,
              "end": 4747
            },
            "start": 4739,
            "end": 4750
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 4757,
              "end": 4758
            },
            "typeArguments": null,
            "start": 4757,
            "end": 4758
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 4765,
            "end": 4770
          },
          "start": 4713,
          "end": 4770
        },
        "start": 4677,
        "end": 4770
      },
      "declare": false,
      "start": 4642,
      "end": 4771
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4782,
        "end": 4786
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
              "start": 4787,
              "end": 4788
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4797,
                "end": 4804
              },
              "start": 4797,
              "end": 4806
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4787,
            "end": 4806
          }
        ],
        "start": 4786,
        "end": 4807
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4815,
                "end": 4816
              },
              "typeArguments": null,
              "start": 4815,
              "end": 4816
            },
            "start": 4813,
            "end": 4816
          },
          "start": 4808,
          "end": 4816
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Enumerate",
            "optional": false,
            "typeAnnotation": null,
            "start": 4819,
            "end": 4828
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4829,
                    "end": 4830
                  },
                  "typeArguments": null,
                  "start": 4829,
                  "end": 4830
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "length",
                    "raw": "'length'",
                    "start": 4831,
                    "end": 4839
                  },
                  "start": 4831,
                  "end": 4839
                },
                "start": 4829,
                "end": 4840
              }
            ],
            "start": 4828,
            "end": 4841
          },
          "start": 4819,
          "end": 4841
        },
        "start": 4817,
        "end": 4841
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 4855,
                "end": 4860
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 4861,
                "end": 4867
              },
              "optional": false,
              "computed": false,
              "start": 4855,
              "end": 4867
            },
            "start": 4848,
            "end": 4868
          }
        ],
        "start": 4842,
        "end": 4880
      },
      "expression": false,
      "start": 4773,
      "end": 4880
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 4880
}
```
