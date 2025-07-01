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
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
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
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          }
        ],
        "start": 35,
        "end": 38
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
              "name": "ref",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
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
                  "start": 47,
                  "end": 48
                },
                "typeArguments": null,
                "start": 47,
                "end": 48
              },
              "start": 45,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 49
          }
        ],
        "start": 39,
        "end": 51
      },
      "declare": false,
      "start": 22,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
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
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 68
          }
        ],
        "start": 66,
        "end": 69
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
                "name": "x",
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
                      "start": 77,
                      "end": 78
                    },
                    "typeArguments": null,
                    "start": 77,
                    "end": 78
                  },
                  "start": 75,
                  "end": 78
                },
                "start": 74,
                "end": 78
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 81,
                "end": 85
              },
              "start": 79,
              "end": 85
            },
            "start": 73,
            "end": 86
          }
        ],
        "start": 70,
        "end": 88
      },
      "declare": false,
      "start": 52,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 113
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
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          }
        ],
        "start": 113,
        "end": 116
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "typeArguments": null,
            "start": 120,
            "end": 121
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 130,
            "end": 133
          },
          "trueType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
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
                      "start": 140,
                      "end": 141
                    },
                    "typeArguments": null,
                    "start": 140,
                    "end": 141
                  },
                  "start": 138,
                  "end": 141
                },
                "start": 137,
                "end": 141
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 146,
                "end": 150
              },
              "start": 143,
              "end": 150
            },
            "start": 136,
            "end": 150
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 153,
            "end": 158
          },
          "start": 120,
          "end": 158
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 180
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 179,
                    "end": 180
                  },
                  "start": 173,
                  "end": 180
                },
                "start": 171,
                "end": 180
              },
              "start": 170,
              "end": 180
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 185,
              "end": 189
            },
            "start": 182,
            "end": 189
          },
          "start": 169,
          "end": 189
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "typeArguments": null,
          "start": 193,
          "end": 194
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 197,
          "end": 202
        },
        "start": 119,
        "end": 202
      },
      "declare": false,
      "start": 89,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CtorOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 215
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
              "start": 216,
              "end": 217
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 217
          }
        ],
        "start": 215,
        "end": 218
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionToIntersection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 246
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
                        "start": 247,
                        "end": 248
                      },
                      "typeArguments": null,
                      "start": 247,
                      "end": 248
                    }
                  ],
                  "start": 246,
                  "end": 249
                },
                "start": 227,
                "end": 249
              },
              "start": 225,
              "end": 249
            },
            "start": 222,
            "end": 249
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
              "start": 254,
              "end": 255
            },
            "typeArguments": null,
            "start": 254,
            "end": 255
          },
          "start": 251,
          "end": 255
        },
        "start": 221,
        "end": 255
      },
      "declare": false,
      "start": 204,
      "end": 256
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Big",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 271
      },
      "typeParameters": null,
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
              "type": "Literal",
              "value": "0",
              "raw": "\"0\"",
              "start": 278,
              "end": 281
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 291
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 294,
                        "end": 300
                      },
                      "start": 292,
                      "end": 300
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 285,
                    "end": 301
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "0",
                      "raw": "\"0\"",
                      "start": 302,
                      "end": 305
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      },
                      "start": 306,
                      "end": 314
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 302,
                    "end": 315
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 319
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 322,
                              "end": 325
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 326,
                                      "end": 329
                                    },
                                    "typeArguments": null,
                                    "start": 326,
                                    "end": 329
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "0",
                                      "raw": "\"0\"",
                                      "start": 330,
                                      "end": 333
                                    },
                                    "start": 330,
                                    "end": 333
                                  },
                                  "start": 326,
                                  "end": 334
                                }
                              ],
                              "start": 325,
                              "end": 335
                            },
                            "start": 322,
                            "end": 335
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 342
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 343,
                                      "end": 346
                                    },
                                    "typeArguments": null,
                                    "start": 343,
                                    "end": 346
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "0",
                                      "raw": "\"0\"",
                                      "start": 347,
                                      "end": 350
                                    },
                                    "start": 347,
                                    "end": 350
                                  },
                                  "start": 343,
                                  "end": 351
                                }
                              ],
                              "start": 342,
                              "end": 352
                            },
                            "start": 338,
                            "end": 352
                          }
                        ],
                        "start": 322,
                        "end": 352
                      },
                      "start": 320,
                      "end": 352
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 316,
                    "end": 353
                  }
                ],
                "start": 283,
                "end": 355
              },
              "start": 281,
              "end": 355
            },
            "accessibility": null,
            "static": false,
            "start": 278,
            "end": 355
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 360,
              "end": 363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 373
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 376,
                        "end": 382
                      },
                      "start": 374,
                      "end": 382
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 367,
                    "end": 383
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 384,
                      "end": 387
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 390,
                        "end": 396
                      },
                      "start": 388,
                      "end": 396
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 384,
                    "end": 397
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 401
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 404,
                              "end": 407
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 408,
                                      "end": 411
                                    },
                                    "typeArguments": null,
                                    "start": 408,
                                    "end": 411
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "1",
                                      "raw": "\"1\"",
                                      "start": 412,
                                      "end": 415
                                    },
                                    "start": 412,
                                    "end": 415
                                  },
                                  "start": 408,
                                  "end": 416
                                }
                              ],
                              "start": 407,
                              "end": 417
                            },
                            "start": 404,
                            "end": 417
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 420,
                              "end": 424
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 425,
                                      "end": 428
                                    },
                                    "typeArguments": null,
                                    "start": 425,
                                    "end": 428
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "1",
                                      "raw": "\"1\"",
                                      "start": 429,
                                      "end": 432
                                    },
                                    "start": 429,
                                    "end": 432
                                  },
                                  "start": 425,
                                  "end": 433
                                }
                              ],
                              "start": 424,
                              "end": 434
                            },
                            "start": 420,
                            "end": 434
                          }
                        ],
                        "start": 404,
                        "end": 434
                      },
                      "start": 402,
                      "end": 434
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 398,
                    "end": 435
                  }
                ],
                "start": 365,
                "end": 437
              },
              "start": 363,
              "end": 437
            },
            "accessibility": null,
            "static": false,
            "start": 360,
            "end": 437
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 442,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 455
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 458,
                        "end": 464
                      },
                      "start": 456,
                      "end": 464
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 449,
                    "end": 465
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 466,
                      "end": 469
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 472,
                        "end": 478
                      },
                      "start": 470,
                      "end": 478
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 466,
                    "end": 479
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 483
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 486,
                              "end": 489
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 490,
                                      "end": 493
                                    },
                                    "typeArguments": null,
                                    "start": 490,
                                    "end": 493
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "2",
                                      "raw": "\"2\"",
                                      "start": 494,
                                      "end": 497
                                    },
                                    "start": 494,
                                    "end": 497
                                  },
                                  "start": 490,
                                  "end": 498
                                }
                              ],
                              "start": 489,
                              "end": 499
                            },
                            "start": 486,
                            "end": 499
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 506
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 507,
                                      "end": 510
                                    },
                                    "typeArguments": null,
                                    "start": 507,
                                    "end": 510
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "2",
                                      "raw": "\"2\"",
                                      "start": 511,
                                      "end": 514
                                    },
                                    "start": 511,
                                    "end": 514
                                  },
                                  "start": 507,
                                  "end": 515
                                }
                              ],
                              "start": 506,
                              "end": 516
                            },
                            "start": 502,
                            "end": 516
                          }
                        ],
                        "start": 486,
                        "end": 516
                      },
                      "start": 484,
                      "end": 516
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 480,
                    "end": 517
                  }
                ],
                "start": 447,
                "end": 519
              },
              "start": 445,
              "end": 519
            },
            "accessibility": null,
            "static": false,
            "start": 442,
            "end": 519
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 524,
              "end": 527
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 537
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 540,
                        "end": 546
                      },
                      "start": 538,
                      "end": 546
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 531,
                    "end": 547
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "3",
                      "raw": "\"3\"",
                      "start": 548,
                      "end": 551
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      },
                      "start": 552,
                      "end": 560
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 548,
                    "end": 561
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 562,
                      "end": 565
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 571
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 572,
                                      "end": 575
                                    },
                                    "typeArguments": null,
                                    "start": 572,
                                    "end": 575
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "3",
                                      "raw": "\"3\"",
                                      "start": 576,
                                      "end": 579
                                    },
                                    "start": 576,
                                    "end": 579
                                  },
                                  "start": 572,
                                  "end": 580
                                }
                              ],
                              "start": 571,
                              "end": 581
                            },
                            "start": 568,
                            "end": 581
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 584,
                              "end": 588
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 589,
                                      "end": 592
                                    },
                                    "typeArguments": null,
                                    "start": 589,
                                    "end": 592
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "3",
                                      "raw": "\"3\"",
                                      "start": 593,
                                      "end": 596
                                    },
                                    "start": 593,
                                    "end": 596
                                  },
                                  "start": 589,
                                  "end": 597
                                }
                              ],
                              "start": 588,
                              "end": 598
                            },
                            "start": 584,
                            "end": 598
                          }
                        ],
                        "start": 568,
                        "end": 598
                      },
                      "start": 566,
                      "end": 598
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 562,
                    "end": 599
                  }
                ],
                "start": 529,
                "end": 601
              },
              "start": 527,
              "end": 601
            },
            "accessibility": null,
            "static": false,
            "start": 524,
            "end": 601
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "4",
              "raw": "\"4\"",
              "start": 606,
              "end": 609
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 613,
                      "end": 619
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 622,
                        "end": 628
                      },
                      "start": 620,
                      "end": 628
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 613,
                    "end": 629
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "4",
                      "raw": "\"4\"",
                      "start": 630,
                      "end": 633
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 636,
                        "end": 642
                      },
                      "start": 634,
                      "end": 642
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 630,
                    "end": 643
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 647
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 650,
                              "end": 653
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 654,
                                      "end": 657
                                    },
                                    "typeArguments": null,
                                    "start": 654,
                                    "end": 657
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "4",
                                      "raw": "\"4\"",
                                      "start": 658,
                                      "end": 661
                                    },
                                    "start": 658,
                                    "end": 661
                                  },
                                  "start": 654,
                                  "end": 662
                                }
                              ],
                              "start": 653,
                              "end": 663
                            },
                            "start": 650,
                            "end": 663
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 666,
                              "end": 670
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 671,
                                      "end": 674
                                    },
                                    "typeArguments": null,
                                    "start": 671,
                                    "end": 674
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "4",
                                      "raw": "\"4\"",
                                      "start": 675,
                                      "end": 678
                                    },
                                    "start": 675,
                                    "end": 678
                                  },
                                  "start": 671,
                                  "end": 679
                                }
                              ],
                              "start": 670,
                              "end": 680
                            },
                            "start": 666,
                            "end": 680
                          }
                        ],
                        "start": 650,
                        "end": 680
                      },
                      "start": 648,
                      "end": 680
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 644,
                    "end": 681
                  }
                ],
                "start": 611,
                "end": 683
              },
              "start": 609,
              "end": 683
            },
            "accessibility": null,
            "static": false,
            "start": 606,
            "end": 683
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "5",
              "raw": "\"5\"",
              "start": 688,
              "end": 691
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 695,
                      "end": 701
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 704,
                        "end": 710
                      },
                      "start": 702,
                      "end": 710
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 695,
                    "end": 711
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "5",
                      "raw": "\"5\"",
                      "start": 712,
                      "end": 715
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 718,
                        "end": 724
                      },
                      "start": 716,
                      "end": 724
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 712,
                    "end": 725
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 726,
                      "end": 729
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 732,
                              "end": 735
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 736,
                                      "end": 739
                                    },
                                    "typeArguments": null,
                                    "start": 736,
                                    "end": 739
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "5",
                                      "raw": "\"5\"",
                                      "start": 740,
                                      "end": 743
                                    },
                                    "start": 740,
                                    "end": 743
                                  },
                                  "start": 736,
                                  "end": 744
                                }
                              ],
                              "start": 735,
                              "end": 745
                            },
                            "start": 732,
                            "end": 745
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 748,
                              "end": 752
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 753,
                                      "end": 756
                                    },
                                    "typeArguments": null,
                                    "start": 753,
                                    "end": 756
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "5",
                                      "raw": "\"5\"",
                                      "start": 757,
                                      "end": 760
                                    },
                                    "start": 757,
                                    "end": 760
                                  },
                                  "start": 753,
                                  "end": 761
                                }
                              ],
                              "start": 752,
                              "end": 762
                            },
                            "start": 748,
                            "end": 762
                          }
                        ],
                        "start": 732,
                        "end": 762
                      },
                      "start": 730,
                      "end": 762
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 726,
                    "end": 763
                  }
                ],
                "start": 693,
                "end": 765
              },
              "start": 691,
              "end": 765
            },
            "accessibility": null,
            "static": false,
            "start": 688,
            "end": 765
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "6",
              "raw": "\"6\"",
              "start": 770,
              "end": 773
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 777,
                      "end": 783
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 786,
                        "end": 792
                      },
                      "start": 784,
                      "end": 792
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 777,
                    "end": 793
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "6",
                      "raw": "\"6\"",
                      "start": 794,
                      "end": 797
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 800,
                        "end": 806
                      },
                      "start": 798,
                      "end": 806
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 794,
                    "end": 807
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 808,
                      "end": 811
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 814,
                              "end": 817
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 818,
                                      "end": 821
                                    },
                                    "typeArguments": null,
                                    "start": 818,
                                    "end": 821
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "6",
                                      "raw": "\"6\"",
                                      "start": 822,
                                      "end": 825
                                    },
                                    "start": 822,
                                    "end": 825
                                  },
                                  "start": 818,
                                  "end": 826
                                }
                              ],
                              "start": 817,
                              "end": 827
                            },
                            "start": 814,
                            "end": 827
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 830,
                              "end": 834
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 835,
                                      "end": 838
                                    },
                                    "typeArguments": null,
                                    "start": 835,
                                    "end": 838
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "6",
                                      "raw": "\"6\"",
                                      "start": 839,
                                      "end": 842
                                    },
                                    "start": 839,
                                    "end": 842
                                  },
                                  "start": 835,
                                  "end": 843
                                }
                              ],
                              "start": 834,
                              "end": 844
                            },
                            "start": 830,
                            "end": 844
                          }
                        ],
                        "start": 814,
                        "end": 844
                      },
                      "start": 812,
                      "end": 844
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 808,
                    "end": 845
                  }
                ],
                "start": 775,
                "end": 847
              },
              "start": 773,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 770,
            "end": 847
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "7",
              "raw": "\"7\"",
              "start": 852,
              "end": 855
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 865
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 868,
                        "end": 874
                      },
                      "start": 866,
                      "end": 874
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 859,
                    "end": 875
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "7",
                      "raw": "\"7\"",
                      "start": 876,
                      "end": 879
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 882,
                        "end": 888
                      },
                      "start": 880,
                      "end": 888
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 876,
                    "end": 889
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 890,
                      "end": 893
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 896,
                              "end": 899
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 900,
                                      "end": 903
                                    },
                                    "typeArguments": null,
                                    "start": 900,
                                    "end": 903
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "7",
                                      "raw": "\"7\"",
                                      "start": 904,
                                      "end": 907
                                    },
                                    "start": 904,
                                    "end": 907
                                  },
                                  "start": 900,
                                  "end": 908
                                }
                              ],
                              "start": 899,
                              "end": 909
                            },
                            "start": 896,
                            "end": 909
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 912,
                              "end": 916
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 917,
                                      "end": 920
                                    },
                                    "typeArguments": null,
                                    "start": 917,
                                    "end": 920
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "7",
                                      "raw": "\"7\"",
                                      "start": 921,
                                      "end": 924
                                    },
                                    "start": 921,
                                    "end": 924
                                  },
                                  "start": 917,
                                  "end": 925
                                }
                              ],
                              "start": 916,
                              "end": 926
                            },
                            "start": 912,
                            "end": 926
                          }
                        ],
                        "start": 896,
                        "end": 926
                      },
                      "start": 894,
                      "end": 926
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 890,
                    "end": 927
                  }
                ],
                "start": 857,
                "end": 929
              },
              "start": 855,
              "end": 929
            },
            "accessibility": null,
            "static": false,
            "start": 852,
            "end": 929
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "8",
              "raw": "\"8\"",
              "start": 934,
              "end": 937
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 941,
                      "end": 947
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 950,
                        "end": 956
                      },
                      "start": 948,
                      "end": 956
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 941,
                    "end": 957
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "8",
                      "raw": "\"8\"",
                      "start": 958,
                      "end": 961
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 964,
                        "end": 970
                      },
                      "start": 962,
                      "end": 970
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 958,
                    "end": 971
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 972,
                      "end": 975
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 978,
                              "end": 981
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 982,
                                      "end": 985
                                    },
                                    "typeArguments": null,
                                    "start": 982,
                                    "end": 985
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "8",
                                      "raw": "\"8\"",
                                      "start": 986,
                                      "end": 989
                                    },
                                    "start": 986,
                                    "end": 989
                                  },
                                  "start": 982,
                                  "end": 990
                                }
                              ],
                              "start": 981,
                              "end": 991
                            },
                            "start": 978,
                            "end": 991
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 994,
                              "end": 998
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 999,
                                      "end": 1002
                                    },
                                    "typeArguments": null,
                                    "start": 999,
                                    "end": 1002
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "8",
                                      "raw": "\"8\"",
                                      "start": 1003,
                                      "end": 1006
                                    },
                                    "start": 1003,
                                    "end": 1006
                                  },
                                  "start": 999,
                                  "end": 1007
                                }
                              ],
                              "start": 998,
                              "end": 1008
                            },
                            "start": 994,
                            "end": 1008
                          }
                        ],
                        "start": 978,
                        "end": 1008
                      },
                      "start": 976,
                      "end": 1008
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 972,
                    "end": 1009
                  }
                ],
                "start": 939,
                "end": 1011
              },
              "start": 937,
              "end": 1011
            },
            "accessibility": null,
            "static": false,
            "start": 934,
            "end": 1011
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "9",
              "raw": "\"9\"",
              "start": 1016,
              "end": 1019
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1023,
                      "end": 1029
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1032,
                        "end": 1038
                      },
                      "start": 1030,
                      "end": 1038
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1023,
                    "end": 1039
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "9",
                      "raw": "\"9\"",
                      "start": 1040,
                      "end": 1043
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1046,
                        "end": 1052
                      },
                      "start": 1044,
                      "end": 1052
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1040,
                    "end": 1053
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1054,
                      "end": 1057
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1060,
                              "end": 1063
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1064,
                                      "end": 1067
                                    },
                                    "typeArguments": null,
                                    "start": 1064,
                                    "end": 1067
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "9",
                                      "raw": "\"9\"",
                                      "start": 1068,
                                      "end": 1071
                                    },
                                    "start": 1068,
                                    "end": 1071
                                  },
                                  "start": 1064,
                                  "end": 1072
                                }
                              ],
                              "start": 1063,
                              "end": 1073
                            },
                            "start": 1060,
                            "end": 1073
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1076,
                              "end": 1080
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1081,
                                      "end": 1084
                                    },
                                    "typeArguments": null,
                                    "start": 1081,
                                    "end": 1084
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "9",
                                      "raw": "\"9\"",
                                      "start": 1085,
                                      "end": 1088
                                    },
                                    "start": 1085,
                                    "end": 1088
                                  },
                                  "start": 1081,
                                  "end": 1089
                                }
                              ],
                              "start": 1080,
                              "end": 1090
                            },
                            "start": 1076,
                            "end": 1090
                          }
                        ],
                        "start": 1060,
                        "end": 1090
                      },
                      "start": 1058,
                      "end": 1090
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1054,
                    "end": 1091
                  }
                ],
                "start": 1021,
                "end": 1093
              },
              "start": 1019,
              "end": 1093
            },
            "accessibility": null,
            "static": false,
            "start": 1016,
            "end": 1093
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "10",
              "raw": "\"10\"",
              "start": 1098,
              "end": 1102
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1106,
                      "end": 1112
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1115,
                        "end": 1121
                      },
                      "start": 1113,
                      "end": 1121
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1106,
                    "end": 1122
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "10",
                      "raw": "\"10\"",
                      "start": 1123,
                      "end": 1127
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1130,
                        "end": 1136
                      },
                      "start": 1128,
                      "end": 1136
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1123,
                    "end": 1137
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1138,
                      "end": 1141
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1144,
                              "end": 1147
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1148,
                                      "end": 1151
                                    },
                                    "typeArguments": null,
                                    "start": 1148,
                                    "end": 1151
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "10",
                                      "raw": "\"10\"",
                                      "start": 1152,
                                      "end": 1156
                                    },
                                    "start": 1152,
                                    "end": 1156
                                  },
                                  "start": 1148,
                                  "end": 1157
                                }
                              ],
                              "start": 1147,
                              "end": 1158
                            },
                            "start": 1144,
                            "end": 1158
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1161,
                              "end": 1165
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1166,
                                      "end": 1169
                                    },
                                    "typeArguments": null,
                                    "start": 1166,
                                    "end": 1169
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "10",
                                      "raw": "\"10\"",
                                      "start": 1170,
                                      "end": 1174
                                    },
                                    "start": 1170,
                                    "end": 1174
                                  },
                                  "start": 1166,
                                  "end": 1175
                                }
                              ],
                              "start": 1165,
                              "end": 1176
                            },
                            "start": 1161,
                            "end": 1176
                          }
                        ],
                        "start": 1144,
                        "end": 1176
                      },
                      "start": 1142,
                      "end": 1176
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1138,
                    "end": 1177
                  }
                ],
                "start": 1104,
                "end": 1179
              },
              "start": 1102,
              "end": 1179
            },
            "accessibility": null,
            "static": false,
            "start": 1098,
            "end": 1179
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "11",
              "raw": "\"11\"",
              "start": 1184,
              "end": 1188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1192,
                      "end": 1198
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1201,
                        "end": 1207
                      },
                      "start": 1199,
                      "end": 1207
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1192,
                    "end": 1208
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "11",
                      "raw": "\"11\"",
                      "start": 1209,
                      "end": 1213
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1216,
                        "end": 1222
                      },
                      "start": 1214,
                      "end": 1222
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1209,
                    "end": 1223
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1224,
                      "end": 1227
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1230,
                              "end": 1233
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1234,
                                      "end": 1237
                                    },
                                    "typeArguments": null,
                                    "start": 1234,
                                    "end": 1237
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "11",
                                      "raw": "\"11\"",
                                      "start": 1238,
                                      "end": 1242
                                    },
                                    "start": 1238,
                                    "end": 1242
                                  },
                                  "start": 1234,
                                  "end": 1243
                                }
                              ],
                              "start": 1233,
                              "end": 1244
                            },
                            "start": 1230,
                            "end": 1244
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1247,
                              "end": 1251
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1252,
                                      "end": 1255
                                    },
                                    "typeArguments": null,
                                    "start": 1252,
                                    "end": 1255
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "11",
                                      "raw": "\"11\"",
                                      "start": 1256,
                                      "end": 1260
                                    },
                                    "start": 1256,
                                    "end": 1260
                                  },
                                  "start": 1252,
                                  "end": 1261
                                }
                              ],
                              "start": 1251,
                              "end": 1262
                            },
                            "start": 1247,
                            "end": 1262
                          }
                        ],
                        "start": 1230,
                        "end": 1262
                      },
                      "start": 1228,
                      "end": 1262
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1224,
                    "end": 1263
                  }
                ],
                "start": 1190,
                "end": 1265
              },
              "start": 1188,
              "end": 1265
            },
            "accessibility": null,
            "static": false,
            "start": 1184,
            "end": 1265
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "12",
              "raw": "\"12\"",
              "start": 1270,
              "end": 1274
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1278,
                      "end": 1284
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1287,
                        "end": 1293
                      },
                      "start": 1285,
                      "end": 1293
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1278,
                    "end": 1294
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "12",
                      "raw": "\"12\"",
                      "start": 1295,
                      "end": 1299
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1302,
                        "end": 1308
                      },
                      "start": 1300,
                      "end": 1308
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1295,
                    "end": 1309
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1310,
                      "end": 1313
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1316,
                              "end": 1319
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1320,
                                      "end": 1323
                                    },
                                    "typeArguments": null,
                                    "start": 1320,
                                    "end": 1323
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "12",
                                      "raw": "\"12\"",
                                      "start": 1324,
                                      "end": 1328
                                    },
                                    "start": 1324,
                                    "end": 1328
                                  },
                                  "start": 1320,
                                  "end": 1329
                                }
                              ],
                              "start": 1319,
                              "end": 1330
                            },
                            "start": 1316,
                            "end": 1330
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1333,
                              "end": 1337
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1338,
                                      "end": 1341
                                    },
                                    "typeArguments": null,
                                    "start": 1338,
                                    "end": 1341
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "12",
                                      "raw": "\"12\"",
                                      "start": 1342,
                                      "end": 1346
                                    },
                                    "start": 1342,
                                    "end": 1346
                                  },
                                  "start": 1338,
                                  "end": 1347
                                }
                              ],
                              "start": 1337,
                              "end": 1348
                            },
                            "start": 1333,
                            "end": 1348
                          }
                        ],
                        "start": 1316,
                        "end": 1348
                      },
                      "start": 1314,
                      "end": 1348
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1310,
                    "end": 1349
                  }
                ],
                "start": 1276,
                "end": 1351
              },
              "start": 1274,
              "end": 1351
            },
            "accessibility": null,
            "static": false,
            "start": 1270,
            "end": 1351
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "13",
              "raw": "\"13\"",
              "start": 1356,
              "end": 1360
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1364,
                      "end": 1370
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1373,
                        "end": 1379
                      },
                      "start": 1371,
                      "end": 1379
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1364,
                    "end": 1380
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "13",
                      "raw": "\"13\"",
                      "start": 1381,
                      "end": 1385
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1388,
                        "end": 1394
                      },
                      "start": 1386,
                      "end": 1394
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1381,
                    "end": 1395
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1396,
                      "end": 1399
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1405
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1406,
                                      "end": 1409
                                    },
                                    "typeArguments": null,
                                    "start": 1406,
                                    "end": 1409
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "13",
                                      "raw": "\"13\"",
                                      "start": 1410,
                                      "end": 1414
                                    },
                                    "start": 1410,
                                    "end": 1414
                                  },
                                  "start": 1406,
                                  "end": 1415
                                }
                              ],
                              "start": 1405,
                              "end": 1416
                            },
                            "start": 1402,
                            "end": 1416
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1419,
                              "end": 1423
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1424,
                                      "end": 1427
                                    },
                                    "typeArguments": null,
                                    "start": 1424,
                                    "end": 1427
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "13",
                                      "raw": "\"13\"",
                                      "start": 1428,
                                      "end": 1432
                                    },
                                    "start": 1428,
                                    "end": 1432
                                  },
                                  "start": 1424,
                                  "end": 1433
                                }
                              ],
                              "start": 1423,
                              "end": 1434
                            },
                            "start": 1419,
                            "end": 1434
                          }
                        ],
                        "start": 1402,
                        "end": 1434
                      },
                      "start": 1400,
                      "end": 1434
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1396,
                    "end": 1435
                  }
                ],
                "start": 1362,
                "end": 1437
              },
              "start": 1360,
              "end": 1437
            },
            "accessibility": null,
            "static": false,
            "start": 1356,
            "end": 1437
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "14",
              "raw": "\"14\"",
              "start": 1442,
              "end": 1446
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1450,
                      "end": 1456
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1459,
                        "end": 1465
                      },
                      "start": 1457,
                      "end": 1465
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1450,
                    "end": 1466
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "14",
                      "raw": "\"14\"",
                      "start": 1467,
                      "end": 1471
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1474,
                        "end": 1480
                      },
                      "start": 1472,
                      "end": 1480
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1467,
                    "end": 1481
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1482,
                      "end": 1485
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1488,
                              "end": 1491
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1492,
                                      "end": 1495
                                    },
                                    "typeArguments": null,
                                    "start": 1492,
                                    "end": 1495
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "14",
                                      "raw": "\"14\"",
                                      "start": 1496,
                                      "end": 1500
                                    },
                                    "start": 1496,
                                    "end": 1500
                                  },
                                  "start": 1492,
                                  "end": 1501
                                }
                              ],
                              "start": 1491,
                              "end": 1502
                            },
                            "start": 1488,
                            "end": 1502
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1505,
                              "end": 1509
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1510,
                                      "end": 1513
                                    },
                                    "typeArguments": null,
                                    "start": 1510,
                                    "end": 1513
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "14",
                                      "raw": "\"14\"",
                                      "start": 1514,
                                      "end": 1518
                                    },
                                    "start": 1514,
                                    "end": 1518
                                  },
                                  "start": 1510,
                                  "end": 1519
                                }
                              ],
                              "start": 1509,
                              "end": 1520
                            },
                            "start": 1505,
                            "end": 1520
                          }
                        ],
                        "start": 1488,
                        "end": 1520
                      },
                      "start": 1486,
                      "end": 1520
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1482,
                    "end": 1521
                  }
                ],
                "start": 1448,
                "end": 1523
              },
              "start": 1446,
              "end": 1523
            },
            "accessibility": null,
            "static": false,
            "start": 1442,
            "end": 1523
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "15",
              "raw": "\"15\"",
              "start": 1528,
              "end": 1532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1536,
                      "end": 1542
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1545,
                        "end": 1551
                      },
                      "start": 1543,
                      "end": 1551
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1536,
                    "end": 1552
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "15",
                      "raw": "\"15\"",
                      "start": 1553,
                      "end": 1557
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1560,
                        "end": 1566
                      },
                      "start": 1558,
                      "end": 1566
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1553,
                    "end": 1567
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1568,
                      "end": 1571
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1574,
                              "end": 1577
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1578,
                                      "end": 1581
                                    },
                                    "typeArguments": null,
                                    "start": 1578,
                                    "end": 1581
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "15",
                                      "raw": "\"15\"",
                                      "start": 1582,
                                      "end": 1586
                                    },
                                    "start": 1582,
                                    "end": 1586
                                  },
                                  "start": 1578,
                                  "end": 1587
                                }
                              ],
                              "start": 1577,
                              "end": 1588
                            },
                            "start": 1574,
                            "end": 1588
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1591,
                              "end": 1595
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1596,
                                      "end": 1599
                                    },
                                    "typeArguments": null,
                                    "start": 1596,
                                    "end": 1599
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "15",
                                      "raw": "\"15\"",
                                      "start": 1600,
                                      "end": 1604
                                    },
                                    "start": 1600,
                                    "end": 1604
                                  },
                                  "start": 1596,
                                  "end": 1605
                                }
                              ],
                              "start": 1595,
                              "end": 1606
                            },
                            "start": 1591,
                            "end": 1606
                          }
                        ],
                        "start": 1574,
                        "end": 1606
                      },
                      "start": 1572,
                      "end": 1606
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1568,
                    "end": 1607
                  }
                ],
                "start": 1534,
                "end": 1609
              },
              "start": 1532,
              "end": 1609
            },
            "accessibility": null,
            "static": false,
            "start": 1528,
            "end": 1609
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "16",
              "raw": "\"16\"",
              "start": 1614,
              "end": 1618
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1622,
                      "end": 1628
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1631,
                        "end": 1637
                      },
                      "start": 1629,
                      "end": 1637
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1622,
                    "end": 1638
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "16",
                      "raw": "\"16\"",
                      "start": 1639,
                      "end": 1643
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1646,
                        "end": 1652
                      },
                      "start": 1644,
                      "end": 1652
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1639,
                    "end": 1653
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1654,
                      "end": 1657
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1660,
                              "end": 1663
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1664,
                                      "end": 1667
                                    },
                                    "typeArguments": null,
                                    "start": 1664,
                                    "end": 1667
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "16",
                                      "raw": "\"16\"",
                                      "start": 1668,
                                      "end": 1672
                                    },
                                    "start": 1668,
                                    "end": 1672
                                  },
                                  "start": 1664,
                                  "end": 1673
                                }
                              ],
                              "start": 1663,
                              "end": 1674
                            },
                            "start": 1660,
                            "end": 1674
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1677,
                              "end": 1681
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1682,
                                      "end": 1685
                                    },
                                    "typeArguments": null,
                                    "start": 1682,
                                    "end": 1685
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "16",
                                      "raw": "\"16\"",
                                      "start": 1686,
                                      "end": 1690
                                    },
                                    "start": 1686,
                                    "end": 1690
                                  },
                                  "start": 1682,
                                  "end": 1691
                                }
                              ],
                              "start": 1681,
                              "end": 1692
                            },
                            "start": 1677,
                            "end": 1692
                          }
                        ],
                        "start": 1660,
                        "end": 1692
                      },
                      "start": 1658,
                      "end": 1692
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1654,
                    "end": 1693
                  }
                ],
                "start": 1620,
                "end": 1695
              },
              "start": 1618,
              "end": 1695
            },
            "accessibility": null,
            "static": false,
            "start": 1614,
            "end": 1695
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "17",
              "raw": "\"17\"",
              "start": 1700,
              "end": 1704
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1708,
                      "end": 1714
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1717,
                        "end": 1723
                      },
                      "start": 1715,
                      "end": 1723
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1708,
                    "end": 1724
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "17",
                      "raw": "\"17\"",
                      "start": 1725,
                      "end": 1729
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1732,
                        "end": 1738
                      },
                      "start": 1730,
                      "end": 1738
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1725,
                    "end": 1739
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1740,
                      "end": 1743
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1746,
                              "end": 1749
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1750,
                                      "end": 1753
                                    },
                                    "typeArguments": null,
                                    "start": 1750,
                                    "end": 1753
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "17",
                                      "raw": "\"17\"",
                                      "start": 1754,
                                      "end": 1758
                                    },
                                    "start": 1754,
                                    "end": 1758
                                  },
                                  "start": 1750,
                                  "end": 1759
                                }
                              ],
                              "start": 1749,
                              "end": 1760
                            },
                            "start": 1746,
                            "end": 1760
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1763,
                              "end": 1767
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
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1768,
                                      "end": 1771
                                    },
                                    "typeArguments": null,
                                    "start": 1768,
                                    "end": 1771
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "17",
                                      "raw": "\"17\"",
                                      "start": 1772,
                                      "end": 1776
                                    },
                                    "start": 1772,
                                    "end": 1776
                                  },
                                  "start": 1768,
                                  "end": 1777
                                }
                              ],
                              "start": 1767,
                              "end": 1778
                            },
                            "start": 1763,
                            "end": 1778
                          }
                        ],
                        "start": 1746,
                        "end": 1778
                      },
                      "start": 1744,
                      "end": 1778
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1740,
                    "end": 1779
                  }
                ],
                "start": 1706,
                "end": 1781
              },
              "start": 1704,
              "end": 1781
            },
            "accessibility": null,
            "static": false,
            "start": 1700,
            "end": 1781
          }
        ],
        "start": 272,
        "end": 1783
      },
      "declare": false,
      "start": 258,
      "end": 1783
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getCtor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1801,
        "end": 1808
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
              "start": 1809,
              "end": 1810
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Big",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1825,
                  "end": 1828
                },
                "typeArguments": null,
                "start": 1825,
                "end": 1828
              },
              "start": 1819,
              "end": 1828
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1809,
            "end": 1828
          }
        ],
        "start": 1808,
        "end": 1829
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "comp",
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
                "start": 1836,
                "end": 1837
              },
              "typeArguments": null,
              "start": 1836,
              "end": 1837
            },
            "start": 1834,
            "end": 1837
          },
          "start": 1830,
          "end": 1837
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CtorOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1840,
            "end": 1846
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
                    "name": "Big",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1847,
                    "end": 1850
                  },
                  "typeArguments": null,
                  "start": 1847,
                  "end": 1850
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1851,
                    "end": 1852
                  },
                  "typeArguments": null,
                  "start": 1851,
                  "end": 1852
                },
                "start": 1847,
                "end": 1853
              }
            ],
            "start": 1846,
            "end": 1854
          },
          "start": 1840,
          "end": 1854
        },
        "start": 1838,
        "end": 1854
      },
      "body": null,
      "expression": false,
      "start": 1784,
      "end": 1854
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Big",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1879,
                    "end": 1882
                  },
                  "typeArguments": null,
                  "start": 1879,
                  "end": 1882
                },
                "start": 1873,
                "end": 1882
              },
              "start": 1871,
              "end": 1882
            },
            "start": 1868,
            "end": 1882
          },
          "init": null,
          "definite": false,
          "start": 1868,
          "end": 1882
        }
      ],
      "declare": true,
      "start": 1856,
      "end": 1883
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
            "name": "ctor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1890,
            "end": 1894
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getCtor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1897,
              "end": 1904
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 1905,
                "end": 1908
              }
            ],
            "optional": false,
            "start": 1897,
            "end": 1909
          },
          "definite": false,
          "start": 1890,
          "end": 1909
        }
      ],
      "declare": false,
      "start": 1884,
      "end": 1910
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
            "name": "comp",
            "optional": false,
            "typeAnnotation": null,
            "start": 1917,
            "end": 1921
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1924,
              "end": 1928
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
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1931,
                      "end": 1937
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ok",
                      "raw": "\"ok\"",
                      "start": 1939,
                      "end": 1943
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1931,
                    "end": 1943
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1945,
                      "end": 1948
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1950,
                          "end": 1951
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1955,
                            "end": 1962
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1963,
                            "end": 1966
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1955,
                          "end": 1966
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1967,
                            "end": 1968
                          }
                        ],
                        "optional": false,
                        "start": 1955,
                        "end": 1969
                      },
                      "id": null,
                      "generator": false,
                      "start": 1950,
                      "end": 1969
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1945,
                    "end": 1969
                  }
                ],
                "start": 1929,
                "end": 1971
              }
            ],
            "optional": false,
            "start": 1924,
            "end": 1972
          },
          "definite": false,
          "start": 1917,
          "end": 1972
        }
      ],
      "declare": false,
      "start": 1911,
      "end": 1973
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 1973
}
```
