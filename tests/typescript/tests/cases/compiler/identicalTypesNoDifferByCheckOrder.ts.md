__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 37
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 53
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "renderAs",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 87
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomeProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 97
                      },
                      "typeArguments": null,
                      "start": 88,
                      "end": 97
                    }
                  ],
                  "start": 87,
                  "end": 98
                },
                "start": 69,
                "end": 98
              },
              "start": 67,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 98
          }
        ],
        "start": 20,
        "end": 100
      },
      "declare": false,
      "start": 0,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomePropsX",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 117
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Required",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 128
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pick",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 133
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SomeProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 134,
                          "end": 143
                        },
                        "typeArguments": null,
                        "start": 134,
                        "end": 143
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 145,
                          "end": 148
                        },
                        "start": 145,
                        "end": 148
                      }
                    ],
                    "start": 133,
                    "end": 149
                  },
                  "start": 129,
                  "end": 149
                }
              ],
              "start": 128,
              "end": 150
            },
            "start": 120,
            "end": 150
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 157
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SomeProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 167
                  },
                  "typeArguments": null,
                  "start": 158,
                  "end": 167
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 169,
                    "end": 172
                  },
                  "start": 169,
                  "end": 172
                }
              ],
              "start": 157,
              "end": 173
            },
            "start": 153,
            "end": 173
          }
        ],
        "start": 120,
        "end": 173
      },
      "declare": false,
      "start": 102,
      "end": 174
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomePropsClone",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 200
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 211,
                "end": 217
              },
              "start": 209,
              "end": 217
            },
            "accessibility": null,
            "static": false,
            "start": 207,
            "end": 218
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 227,
                "end": 233
              },
              "start": 225,
              "end": 233
            },
            "accessibility": null,
            "static": false,
            "start": 223,
            "end": 234
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "renderAs",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 247
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 268
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomeProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 278
                      },
                      "typeArguments": null,
                      "start": 269,
                      "end": 278
                    }
                  ],
                  "start": 268,
                  "end": 279
                },
                "start": 250,
                "end": 279
              },
              "start": 248,
              "end": 279
            },
            "accessibility": null,
            "static": false,
            "start": 239,
            "end": 279
          }
        ],
        "start": 201,
        "end": 281
      },
      "declare": false,
      "start": 176,
      "end": 281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomePropsCloneX",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 303
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Required",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 314
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pick",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 319
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SomePropsClone",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 334
                        },
                        "typeArguments": null,
                        "start": 320,
                        "end": 334
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 336,
                          "end": 339
                        },
                        "start": 336,
                        "end": 339
                      }
                    ],
                    "start": 319,
                    "end": 340
                  },
                  "start": 315,
                  "end": 340
                }
              ],
              "start": 314,
              "end": 341
            },
            "start": 306,
            "end": 341
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 348
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SomePropsClone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 363
                  },
                  "typeArguments": null,
                  "start": 349,
                  "end": 363
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 365,
                    "end": 368
                  },
                  "start": 365,
                  "end": 368
                }
              ],
              "start": 348,
              "end": 369
            },
            "start": 344,
            "end": 369
          }
        ],
        "start": 306,
        "end": 369
      },
      "declare": false,
      "start": 283,
      "end": 370
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 386
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
              "start": 387,
              "end": 388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 387,
            "end": 388
          }
        ],
        "start": 386,
        "end": 389
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 397,
                "end": 404
              },
              "start": 395,
              "end": 404
            },
            "start": 393,
            "end": 405
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null,
              "start": 406,
              "end": 409
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
                  "start": 412,
                  "end": 413
                },
                "typeArguments": null,
                "start": 412,
                "end": 413
              },
              "start": 410,
              "end": 413
            },
            "accessibility": null,
            "static": false,
            "start": 406,
            "end": 413
          }
        ],
        "start": 392,
        "end": 414
      },
      "declare": false,
      "start": 372,
      "end": 415
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeakValidationMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 438
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
              "start": 439,
              "end": 440
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 440
          }
        ],
        "start": 438,
        "end": 441
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 447
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 458
            },
            "typeArguments": null,
            "start": 457,
            "end": 458
          },
          "start": 451,
          "end": 458
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "start": 462,
            "end": 466
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 476
              },
              "typeArguments": null,
              "start": 475,
              "end": 476
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 478
              },
              "typeArguments": null,
              "start": 477,
              "end": 478
            },
            "start": 475,
            "end": 479
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 491
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
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
                          "start": 492,
                          "end": 493
                        },
                        "typeArguments": null,
                        "start": 492,
                        "end": 493
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 494,
                          "end": 495
                        },
                        "typeArguments": null,
                        "start": 494,
                        "end": 495
                      },
                      "start": 492,
                      "end": 496
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 499,
                      "end": 503
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 506,
                      "end": 515
                    }
                  ],
                  "start": 492,
                  "end": 515
                }
              ],
              "start": 491,
              "end": 516
            },
            "start": 482,
            "end": 516
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 528
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
                      "start": 529,
                      "end": 530
                    },
                    "typeArguments": null,
                    "start": 529,
                    "end": 530
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 532
                    },
                    "typeArguments": null,
                    "start": 531,
                    "end": 532
                  },
                  "start": 529,
                  "end": 533
                }
              ],
              "start": 528,
              "end": 534
            },
            "start": 519,
            "end": 534
          },
          "start": 462,
          "end": 534
        },
        "optional": true,
        "readonly": null,
        "start": 444,
        "end": 535
      },
      "declare": false,
      "start": 416,
      "end": 536
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent1",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 566
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 568
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 567,
            "end": 568
          }
        ],
        "start": 566,
        "end": 569
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 584,
                          "end": 585
                        },
                        "typeArguments": null,
                        "start": 584,
                        "end": 585
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 590,
                              "end": 598
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 601,
                                "end": 608
                              },
                              "start": 599,
                              "end": 608
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 590,
                            "end": 608
                          }
                        ],
                        "start": 588,
                        "end": 610
                      }
                    ],
                    "start": 584,
                    "end": 610
                  },
                  "start": 582,
                  "end": 610
                },
                "start": 577,
                "end": 610
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 613,
                "end": 617
              },
              "start": 611,
              "end": 617
            },
            "start": 576,
            "end": 618
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 632
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 652
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 653,
                        "end": 654
                      },
                      "typeArguments": null,
                      "start": 653,
                      "end": 654
                    }
                  ],
                  "start": 652,
                  "end": 655
                },
                "start": 635,
                "end": 655
              },
              "start": 633,
              "end": 655
            },
            "accessibility": null,
            "static": false,
            "start": 623,
            "end": 656
          }
        ],
        "start": 570,
        "end": 658
      },
      "declare": false,
      "start": 538,
      "end": 658
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent2",
        "optional": false,
        "typeAnnotation": null,
        "start": 670,
        "end": 688
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 690
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 689,
            "end": 690
          }
        ],
        "start": 688,
        "end": 691
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 706,
                          "end": 707
                        },
                        "typeArguments": null,
                        "start": 706,
                        "end": 707
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 712,
                              "end": 720
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 723,
                                "end": 730
                              },
                              "start": 721,
                              "end": 730
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 712,
                            "end": 730
                          }
                        ],
                        "start": 710,
                        "end": 732
                      }
                    ],
                    "start": 706,
                    "end": 732
                  },
                  "start": 704,
                  "end": 732
                },
                "start": 699,
                "end": 732
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 735,
                "end": 739
              },
              "start": 733,
              "end": 739
            },
            "start": 698,
            "end": 740
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 754
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 774
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 775,
                        "end": 776
                      },
                      "typeArguments": null,
                      "start": 775,
                      "end": 776
                    }
                  ],
                  "start": 774,
                  "end": 777
                },
                "start": 757,
                "end": 777
              },
              "start": 755,
              "end": 777
            },
            "accessibility": null,
            "static": false,
            "start": 745,
            "end": 778
          }
        ],
        "start": 692,
        "end": 780
      },
      "declare": false,
      "start": 660,
      "end": 780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "needsComponentOfSomeProps3",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 817
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomePropsClone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 824,
                  "end": 838
                },
                "typeArguments": null,
                "start": 824,
                "end": 838
              },
              "start": 824,
              "end": 840
            },
            "start": 822,
            "end": 840
          },
          "value": null,
          "start": 818,
          "end": 840
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 843,
          "end": 847
        },
        "start": 841,
        "end": 847
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 848,
        "end": 850
      },
      "expression": false,
      "start": 782,
      "end": 850
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "comp3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 864,
                  "end": 882
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomePropsCloneX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 883,
                        "end": 898
                      },
                      "typeArguments": null,
                      "start": 883,
                      "end": 898
                    }
                  ],
                  "start": 882,
                  "end": 899
                },
                "start": 864,
                "end": 899
              },
              "start": 862,
              "end": 899
            },
            "start": 857,
            "end": 899
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 902,
              "end": 906
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 910,
              "end": 913
            },
            "start": 902,
            "end": 913
          },
          "definite": false,
          "start": 857,
          "end": 913
        }
      ],
      "declare": false,
      "start": 851,
      "end": 914
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "needsComponentOfSomeProps3",
          "optional": false,
          "typeAnnotation": null,
          "start": 915,
          "end": 941
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
                  "name": "renderAs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 952
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "comp3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 954,
                  "end": 959
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 944,
                "end": 959
              }
            ],
            "start": 942,
            "end": 961
          }
        ],
        "optional": false,
        "start": 915,
        "end": 962
      },
      "directive": null,
      "start": 915,
      "end": 963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "needsComponentOfSomeProps2",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 1000
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1005
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1007,
                  "end": 1016
                },
                "typeArguments": null,
                "start": 1007,
                "end": 1016
              },
              "start": 1007,
              "end": 1018
            },
            "start": 1005,
            "end": 1018
          },
          "value": null,
          "start": 1001,
          "end": 1018
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1021,
          "end": 1025
        },
        "start": 1019,
        "end": 1025
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1026,
        "end": 1028
      },
      "expression": false,
      "start": 965,
      "end": 1028
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "comp2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1060
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomePropsX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1061,
                        "end": 1071
                      },
                      "typeArguments": null,
                      "start": 1061,
                      "end": 1071
                    }
                  ],
                  "start": 1060,
                  "end": 1072
                },
                "start": 1042,
                "end": 1072
              },
              "start": 1040,
              "end": 1072
            },
            "start": 1035,
            "end": 1072
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1075,
              "end": 1079
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1083,
              "end": 1086
            },
            "start": 1075,
            "end": 1086
          },
          "definite": false,
          "start": 1035,
          "end": 1086
        }
      ],
      "declare": false,
      "start": 1029,
      "end": 1087
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "needsComponentOfSomeProps2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1088,
          "end": 1114
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
                  "name": "renderAs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1117,
                  "end": 1125
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "comp2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1132
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1117,
                "end": 1132
              }
            ],
            "start": 1115,
            "end": 1134
          }
        ],
        "optional": false,
        "start": 1088,
        "end": 1135
      },
      "directive": null,
      "start": 1088,
      "end": 1136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1136
}
```
