__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Option",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 33
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
                "start": 34,
                "end": 35
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 34,
              "end": 35
            }
          ],
          "start": 33,
          "end": 36
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip1",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 44
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
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 46
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 55,
                        "end": 60
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 61,
                              "end": 67
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 68,
                                  "end": 71
                                }
                              ],
                              "start": 67,
                              "end": 72
                            },
                            "start": 61,
                            "end": 72
                          }
                        ],
                        "start": 60,
                        "end": 73
                      },
                      "start": 55,
                      "end": 73
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 45,
                    "end": 73
                  }
                ],
                "start": 44,
                "end": 74
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 84
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 86,
                      "end": 87
                    },
                    "start": 84,
                    "end": 87
                  },
                  "value": null,
                  "start": 75,
                  "end": 87
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 96
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
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
                              "start": 98,
                              "end": 99
                            },
                            "typeArguments": null,
                            "start": 98,
                            "end": 99
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 104,
                                "end": 121
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 122,
                                      "end": 123
                                    },
                                    "typeArguments": null,
                                    "start": 122,
                                    "end": 123
                                  }
                                ],
                                "start": 121,
                                "end": 124
                              },
                              "start": 104,
                              "end": 124
                            },
                            "start": 101,
                            "end": 124
                          }
                        ],
                        "start": 97,
                        "end": 125
                      }
                    ],
                    "start": 96,
                    "end": 126
                  },
                  "start": 90,
                  "end": 126
                },
                "start": 88,
                "end": 126
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 40,
              "end": 127
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip2",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 134
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
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 136
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 150
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 151,
                              "end": 157
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 158,
                                  "end": 161
                                }
                              ],
                              "start": 157,
                              "end": 162
                            },
                            "start": 151,
                            "end": 162
                          }
                        ],
                        "start": 150,
                        "end": 163
                      },
                      "start": 145,
                      "end": 163
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 135,
                    "end": 163
                  }
                ],
                "start": 134,
                "end": 164
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 174
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 177
                      },
                      "typeArguments": null,
                      "start": 176,
                      "end": 177
                    },
                    "start": 174,
                    "end": 177
                  },
                  "value": null,
                  "start": 165,
                  "end": 177
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 186
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
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
                              "start": 188,
                              "end": 189
                            },
                            "typeArguments": null,
                            "start": 188,
                            "end": 189
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 194,
                                "end": 211
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 212,
                                      "end": 213
                                    },
                                    "typeArguments": null,
                                    "start": 212,
                                    "end": 213
                                  }
                                ],
                                "start": 211,
                                "end": 214
                              },
                              "start": 194,
                              "end": 214
                            },
                            "start": 191,
                            "end": 214
                          }
                        ],
                        "start": 187,
                        "end": 215
                      }
                    ],
                    "start": 186,
                    "end": 216
                  },
                  "start": 180,
                  "end": 216
                },
                "start": 178,
                "end": 216
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 130,
              "end": 217
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip3",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 224
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
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 226
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 240
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 241,
                              "end": 247
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 248,
                                  "end": 251
                                }
                              ],
                              "start": 247,
                              "end": 252
                            },
                            "start": 241,
                            "end": 252
                          }
                        ],
                        "start": 240,
                        "end": 253
                      },
                      "start": 235,
                      "end": 253
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 225,
                    "end": 253
                  }
                ],
                "start": 224,
                "end": 254
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 264
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 266,
                        "end": 267
                      },
                      "typeArguments": null,
                      "start": 266,
                      "end": 267
                    },
                    "start": 264,
                    "end": 267
                  },
                  "value": null,
                  "start": 255,
                  "end": 267
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 276
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
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
                              "start": 278,
                              "end": 279
                            },
                            "typeArguments": null,
                            "start": 278,
                            "end": 279
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 284,
                                "end": 301
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 302,
                                      "end": 303
                                    },
                                    "typeArguments": null,
                                    "start": 302,
                                    "end": 303
                                  }
                                ],
                                "start": 301,
                                "end": 304
                              },
                              "start": 284,
                              "end": 304
                            },
                            "start": 281,
                            "end": 304
                          }
                        ],
                        "start": 277,
                        "end": 305
                      }
                    ],
                    "start": 276,
                    "end": 306
                  },
                  "start": 270,
                  "end": 306
                },
                "start": 268,
                "end": 306
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 220,
              "end": 307
            }
          ],
          "start": 37,
          "end": 309
        },
        "declare": false,
        "start": 17,
        "end": 309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 10,
      "end": 309
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOption",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 327
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
              "start": 328,
              "end": 329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 328,
            "end": 329
          }
        ],
        "start": 327,
        "end": 330
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
            "start": 333,
            "end": 334
          },
          "typeArguments": null,
          "start": 333,
          "end": 334
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Option",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 349
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
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 357
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 356,
                  "end": 357
                },
                "start": 350,
                "end": 357
              }
            ],
            "start": 349,
            "end": 358
          },
          "start": 343,
          "end": 358
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 362
          },
          "typeArguments": null,
          "start": 361,
          "end": 362
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 365,
          "end": 370
        },
        "start": 333,
        "end": 370
      },
      "declare": false,
      "start": 311,
      "end": 371
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOptionArray1",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 417
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
              "start": 418,
              "end": 419
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 418,
            "end": 419
          }
        ],
        "start": 417,
        "end": 420
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 427
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
              "start": 437,
              "end": 438
            },
            "typeArguments": null,
            "start": 437,
            "end": 438
          },
          "start": 431,
          "end": 438
        },
        "nameType": null,
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
                "start": 441,
                "end": 442
              },
              "typeArguments": null,
              "start": 441,
              "end": 442
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 444
              },
              "typeArguments": null,
              "start": 443,
              "end": 444
            },
            "start": 441,
            "end": 445
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Option",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 460
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 461,
                  "end": 464
                }
              ],
              "start": 460,
              "end": 465
            },
            "start": 454,
            "end": 465
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnzipOption",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 479
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
                      "start": 480,
                      "end": 481
                    },
                    "typeArguments": null,
                    "start": 480,
                    "end": 481
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 482,
                      "end": 483
                    },
                    "typeArguments": null,
                    "start": 482,
                    "end": 483
                  },
                  "start": 480,
                  "end": 484
                }
              ],
              "start": 479,
              "end": 485
            },
            "start": 468,
            "end": 485
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 488,
            "end": 493
          },
          "start": 441,
          "end": 493
        },
        "optional": false,
        "readonly": null,
        "start": 423,
        "end": 495
      },
      "declare": false,
      "start": 395,
      "end": 496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOptionArray2",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 539
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
              "start": 540,
              "end": 541
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 540,
            "end": 541
          }
        ],
        "start": 539,
        "end": 542
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 549
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
              "start": 559,
              "end": 560
            },
            "typeArguments": null,
            "start": 559,
            "end": 560
          },
          "start": 553,
          "end": 560
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnzipOption",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 574
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
                    "start": 575,
                    "end": 576
                  },
                  "typeArguments": null,
                  "start": 575,
                  "end": 576
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 578
                  },
                  "typeArguments": null,
                  "start": 577,
                  "end": 578
                },
                "start": 575,
                "end": 579
              }
            ],
            "start": 574,
            "end": 580
          },
          "start": 563,
          "end": 580
        },
        "optional": false,
        "readonly": null,
        "start": 545,
        "end": 582
      },
      "declare": false,
      "start": 517,
      "end": 583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOptionArray3",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 606
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
              "start": 607,
              "end": 608
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 607,
            "end": 608
          }
        ],
        "start": 606,
        "end": 609
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 615,
          "end": 616
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
              "start": 626,
              "end": 627
            },
            "typeArguments": null,
            "start": 626,
            "end": 627
          },
          "start": 620,
          "end": 627
        },
        "nameType": null,
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
                "start": 630,
                "end": 631
              },
              "typeArguments": null,
              "start": 630,
              "end": 631
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 633
              },
              "typeArguments": null,
              "start": 632,
              "end": 633
            },
            "start": 630,
            "end": 634
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Option",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 649
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
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 656,
                      "end": 657
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 656,
                    "end": 657
                  },
                  "start": 650,
                  "end": 657
                }
              ],
              "start": 649,
              "end": 658
            },
            "start": 643,
            "end": 658
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 661,
              "end": 662
            },
            "typeArguments": null,
            "start": 661,
            "end": 662
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 665,
            "end": 670
          },
          "start": 630,
          "end": 670
        },
        "optional": false,
        "readonly": null,
        "start": 612,
        "end": 672
      },
      "declare": false,
      "start": 584,
      "end": 673
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
            "name": "opt1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 701
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 702,
                      "end": 708
                    }
                  ],
                  "start": 701,
                  "end": 709
                },
                "start": 695,
                "end": 709
              },
              "start": 693,
              "end": 709
            },
            "start": 689,
            "end": 709
          },
          "init": null,
          "definite": false,
          "start": 689,
          "end": 709
        }
      ],
      "declare": true,
      "start": 675,
      "end": 710
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
            "name": "opt2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 731,
                  "end": 737
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 738,
                      "end": 744
                    }
                  ],
                  "start": 737,
                  "end": 745
                },
                "start": 731,
                "end": 745
              },
              "start": 729,
              "end": 745
            },
            "start": 725,
            "end": 745
          },
          "init": null,
          "definite": false,
          "start": 725,
          "end": 745
        }
      ],
      "declare": true,
      "start": 711,
      "end": 746
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
            "name": "opt3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 773
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 774,
                      "end": 781
                    }
                  ],
                  "start": 773,
                  "end": 782
                },
                "start": 767,
                "end": 782
              },
              "start": 765,
              "end": 782
            },
            "start": 761,
            "end": 782
          },
          "init": null,
          "definite": false,
          "start": 761,
          "end": 782
        }
      ],
      "declare": true,
      "start": 747,
      "end": 783
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
            "name": "zipped1",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 798
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 805
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip1",
                "optional": false,
                "typeAnnotation": null,
                "start": 806,
                "end": 810
              },
              "optional": false,
              "computed": false,
              "start": 801,
              "end": 810
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 815
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null,
                "start": 817,
                "end": 821
              }
            ],
            "optional": false,
            "start": 801,
            "end": 822
          },
          "definite": false,
          "start": 791,
          "end": 822
        }
      ],
      "declare": false,
      "start": 785,
      "end": 823
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
            "name": "zipped2",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 837
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 844
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip2",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 849
              },
              "optional": false,
              "computed": false,
              "start": 840,
              "end": 849
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 854
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 860
              }
            ],
            "optional": false,
            "start": 840,
            "end": 861
          },
          "definite": false,
          "start": 830,
          "end": 861
        }
      ],
      "declare": false,
      "start": 824,
      "end": 862
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
            "name": "zipped3",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 876
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 883
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip3",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 888
              },
              "optional": false,
              "computed": false,
              "start": 879,
              "end": 888
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 893
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null,
                "start": 895,
                "end": 899
              }
            ],
            "optional": false,
            "start": 879,
            "end": 900
          },
          "definite": false,
          "start": 869,
          "end": 900
        }
      ],
      "declare": false,
      "start": 863,
      "end": 901
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 901
}
```
