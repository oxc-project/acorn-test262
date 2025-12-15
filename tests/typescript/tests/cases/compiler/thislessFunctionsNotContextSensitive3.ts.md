__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 20
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_editor",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 40
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 25,
            "end": 41
          }
        ],
        "start": 21,
        "end": 43
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 43
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Plugin",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 65
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_plugin",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 85
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 70,
            "end": 86
          }
        ],
        "start": 66,
        "end": 88
      },
      "abstract": false,
      "declare": true,
      "start": 45,
      "end": 88
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParentConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 107
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
              "start": 108,
              "end": 109
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 108,
            "end": 109
          }
        ],
        "start": 107,
        "end": 110
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 120
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
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
                    "start": 137,
                    "end": 138
                  },
                  "typeArguments": null,
                  "start": 137,
                  "end": 138
                },
                "start": 131,
                "end": 138
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
                      "name": "Required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 149
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
                            "start": 150,
                            "end": 151
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 151
                        }
                      ],
                      "start": 149,
                      "end": 152
                    },
                    "start": 141,
                    "end": 152
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 153,
                    "end": 154
                  },
                  "start": 141,
                  "end": 155
                },
                "extendsType": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 172
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 174,
                          "end": 177
                        },
                        "start": 172,
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
                      "type": "TSAnyKeyword",
                      "start": 182,
                      "end": 185
                    },
                    "start": 179,
                    "end": 185
                  },
                  "start": 164,
                  "end": 185
                },
                "trueType": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 200
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Parameters",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 212
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
                                    "name": "Required",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 213,
                                    "end": 221
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
                                          "start": 222,
                                          "end": 223
                                        },
                                        "typeArguments": null,
                                        "start": 222,
                                        "end": 223
                                      }
                                    ],
                                    "start": 221,
                                    "end": 224
                                  },
                                  "start": 213,
                                  "end": 224
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 225,
                                    "end": 226
                                  },
                                  "typeArguments": null,
                                  "start": 225,
                                  "end": 226
                                },
                                "start": 213,
                                "end": 227
                              }
                            ],
                            "start": 212,
                            "end": 228
                          },
                          "start": 202,
                          "end": 228
                        },
                        "start": 200,
                        "end": 228
                      },
                      "value": null,
                      "start": 193,
                      "end": 228
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReturnType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 233,
                        "end": 243
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
                                "name": "Required",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 244,
                                "end": 252
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
                                      "start": 253,
                                      "end": 254
                                    },
                                    "typeArguments": null,
                                    "start": 253,
                                    "end": 254
                                  }
                                ],
                                "start": 252,
                                "end": 255
                              },
                              "start": 244,
                              "end": 255
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 256,
                                "end": 257
                              },
                              "typeArguments": null,
                              "start": 256,
                              "end": 257
                            },
                            "start": 244,
                            "end": 258
                          }
                        ],
                        "start": 243,
                        "end": 259
                      },
                      "start": 233,
                      "end": 259
                    },
                    "start": 230,
                    "end": 259
                  },
                  "start": 192,
                  "end": 259
                },
                "falseType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "typeArguments": null,
                    "start": 266,
                    "end": 267
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 269
                    },
                    "typeArguments": null,
                    "start": 268,
                    "end": 269
                  },
                  "start": 266,
                  "end": 270
                },
                "start": 141,
                "end": 270
              },
              "optional": false,
              "readonly": null,
              "start": 121,
              "end": 273
            }
          ],
          "start": 120,
          "end": 274
        },
        "start": 113,
        "end": 274
      },
      "declare": false,
      "start": 90,
      "end": 275
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendableConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 303
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 314
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 317,
              "end": 320
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 307,
            "end": 320
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Config",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 330
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExtensionConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 360
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 368
                        },
                        "typeArguments": null,
                        "start": 361,
                        "end": 368
                      }
                    ],
                    "start": 360,
                    "end": 369
                  },
                  "start": 345,
                  "end": 369
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExtendableConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 392
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 400
                        },
                        "typeArguments": null,
                        "start": 393,
                        "end": 400
                      }
                    ],
                    "start": 392,
                    "end": 401
                  },
                  "start": 376,
                  "end": 401
                }
              ],
              "start": 343,
              "end": 401
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtendableConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 420
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 428
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 428
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 430,
                    "end": 433
                  }
                ],
                "start": 420,
                "end": 434
              },
              "start": 404,
              "end": 434
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 324,
            "end": 434
          }
        ],
        "start": 303,
        "end": 437
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 446
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 448,
                "end": 454
              },
              "start": 446,
              "end": 454
            },
            "accessibility": null,
            "static": false,
            "start": 442,
            "end": 455
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 468
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "this",
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 484,
                              "end": 488
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 490,
                                "end": 496
                              },
                              "start": 488,
                              "end": 496
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 484,
                            "end": 497
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "parent",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 508
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ParentConfig",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 510,
                                    "end": 522
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Config",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 523,
                                          "end": 529
                                        },
                                        "typeArguments": null,
                                        "start": 523,
                                        "end": 529
                                      }
                                    ],
                                    "start": 522,
                                    "end": 530
                                  },
                                  "start": 510,
                                  "end": 530
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "addOptions",
                                    "raw": "\"addOptions\"",
                                    "start": 531,
                                    "end": 543
                                  },
                                  "start": 531,
                                  "end": 543
                                },
                                "start": 510,
                                "end": 544
                              },
                              "start": 508,
                              "end": 544
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 502,
                            "end": 545
                          }
                        ],
                        "start": 478,
                        "end": 549
                      },
                      "start": 476,
                      "end": 549
                    },
                    "start": 472,
                    "end": 549
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 561
                    },
                    "typeArguments": null,
                    "start": 554,
                    "end": 561
                  },
                  "start": 551,
                  "end": 561
                },
                "start": 471,
                "end": 561
              },
              "start": 469,
              "end": 561
            },
            "accessibility": null,
            "static": false,
            "start": 458,
            "end": 562
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addProseMirrorPlugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 586
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "this",
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
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 602,
                              "end": 609
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 611,
                                  "end": 618
                                },
                                "typeArguments": null,
                                "start": 611,
                                "end": 618
                              },
                              "start": 609,
                              "end": 618
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 602,
                            "end": 619
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "editor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 624,
                              "end": 630
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Editor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 632,
                                  "end": 638
                                },
                                "typeArguments": null,
                                "start": 632,
                                "end": 638
                              },
                              "start": 630,
                              "end": 638
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 624,
                            "end": 639
                          }
                        ],
                        "start": 596,
                        "end": 643
                      },
                      "start": 594,
                      "end": 643
                    },
                    "start": 590,
                    "end": 643
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Plugin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 648,
                        "end": 654
                      },
                      "typeArguments": null,
                      "start": 648,
                      "end": 654
                    },
                    "start": 648,
                    "end": 656
                  },
                  "start": 645,
                  "end": 656
                },
                "start": 589,
                "end": 656
              },
              "start": 587,
              "end": 656
            },
            "accessibility": null,
            "static": false,
            "start": 565,
            "end": 657
          }
        ],
        "start": 438,
        "end": 659
      },
      "declare": false,
      "start": 277,
      "end": 659
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtensionConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 686
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 694
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 687,
            "end": 700
          }
        ],
        "start": 686,
        "end": 701
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExtendableConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 728
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 736
                },
                "typeArguments": null,
                "start": 729,
                "end": 736
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExtensionConfig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 738,
                  "end": 753
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 754,
                        "end": 761
                      },
                      "typeArguments": null,
                      "start": 754,
                      "end": 761
                    }
                  ],
                  "start": 753,
                  "end": 762
                },
                "start": 738,
                "end": 762
              }
            ],
            "start": 728,
            "end": 763
          },
          "start": 712,
          "end": 763
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 764,
        "end": 766
      },
      "declare": false,
      "start": 661,
      "end": 766
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Extension",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 791
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 792,
              "end": 799
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 802,
              "end": 805
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 792,
            "end": 805
          }
        ],
        "start": 791,
        "end": 806
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_options",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 819
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 828
                },
                "typeArguments": null,
                "start": 821,
                "end": 828
              },
              "start": 819,
              "end": 828
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 811,
            "end": 829
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 840,
              "end": 846
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 848
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSAnyKeyword",
                      "start": 851,
                      "end": 854
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 847,
                    "end": 854
                  }
                ],
                "start": 846,
                "end": 855
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "config",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 864,
                        "end": 871
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ExtensionConfig",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 872,
                              "end": 887
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
                                    "start": 888,
                                    "end": 889
                                  },
                                  "typeArguments": null,
                                  "start": 888,
                                  "end": 889
                                }
                              ],
                              "start": 887,
                              "end": 890
                            },
                            "start": 872,
                            "end": 890
                          }
                        ],
                        "start": 871,
                        "end": 891
                      },
                      "start": 864,
                      "end": 891
                    },
                    "start": 862,
                    "end": 891
                  },
                  "start": 856,
                  "end": 891
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extension",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 903
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
                          "start": 904,
                          "end": 905
                        },
                        "typeArguments": null,
                        "start": 904,
                        "end": 905
                      }
                    ],
                    "start": 903,
                    "end": 906
                  },
                  "start": 894,
                  "end": 906
                },
                "start": 892,
                "end": 906
              },
              "body": null,
              "expression": false,
              "start": 846,
              "end": 907
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 833,
            "end": 907
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "configure",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 920
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 931,
                        "end": 938
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 939,
                              "end": 946
                            },
                            "typeArguments": null,
                            "start": 939,
                            "end": 946
                          }
                        ],
                        "start": 938,
                        "end": 947
                      },
                      "start": 931,
                      "end": 947
                    },
                    "start": 929,
                    "end": 947
                  },
                  "start": 921,
                  "end": 947
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extension",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 950,
                    "end": 959
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 960,
                          "end": 967
                        },
                        "typeArguments": null,
                        "start": 960,
                        "end": 967
                      }
                    ],
                    "start": 959,
                    "end": 968
                  },
                  "start": 950,
                  "end": 968
                },
                "start": 948,
                "end": 968
              },
              "body": null,
              "expression": false,
              "start": 920,
              "end": 969
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 911,
            "end": 969
          }
        ],
        "start": 807,
        "end": 971
      },
      "abstract": false,
      "declare": true,
      "start": 768,
      "end": 971
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuggestionOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 983,
        "end": 1000
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
              "type": "Identifier",
              "decorators": [],
              "name": "editor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1005,
              "end": 1011
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Editor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1019
                },
                "typeArguments": null,
                "start": 1013,
                "end": 1019
              },
              "start": 1011,
              "end": 1019
            },
            "accessibility": null,
            "static": false,
            "start": 1005,
            "end": 1020
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "char",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1027
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1030,
                "end": 1036
              },
              "start": 1028,
              "end": 1036
            },
            "accessibility": null,
            "static": false,
            "start": 1023,
            "end": 1037
          }
        ],
        "start": 1001,
        "end": 1039
      },
      "declare": false,
      "start": 973,
      "end": 1039
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Suggestion",
        "optional": false,
        "typeAnnotation": null,
        "start": 1058,
        "end": 1068
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SuggestionOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1078,
                "end": 1095
              },
              "typeArguments": null,
              "start": 1078,
              "end": 1095
            },
            "start": 1076,
            "end": 1095
          },
          "start": 1069,
          "end": 1095
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Plugin",
            "optional": false,
            "typeAnnotation": null,
            "start": 1098,
            "end": 1104
          },
          "typeArguments": null,
          "start": 1098,
          "end": 1104
        },
        "start": 1096,
        "end": 1104
      },
      "body": null,
      "expression": false,
      "start": 1041,
      "end": 1105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extension",
            "optional": false,
            "typeAnnotation": null,
            "start": 1107,
            "end": 1116
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 1117,
            "end": 1123
          },
          "optional": false,
          "computed": false,
          "start": 1107,
          "end": 1123
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1132
                },
                "value": {
                  "type": "Literal",
                  "value": "slash-command",
                  "raw": "\"slash-command\"",
                  "start": 1134,
                  "end": 1149
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1128,
                "end": 1149
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1153,
                  "end": 1163
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
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "suggestion",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1187,
                                "end": 1197
                              },
                              "value": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "char",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1209,
                                        "end": 1213
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "/",
                                        "raw": "\"/\"",
                                        "start": 1215,
                                        "end": 1218
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1209,
                                      "end": 1218
                                    }
                                  ],
                                  "start": 1199,
                                  "end": 1227
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SuggestionOptions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1231,
                                    "end": 1248
                                  },
                                  "typeArguments": null,
                                  "start": 1231,
                                  "end": 1248
                                },
                                "start": 1199,
                                "end": 1248
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1187,
                              "end": 1248
                            }
                          ],
                          "start": 1179,
                          "end": 1255
                        },
                        "start": 1172,
                        "end": 1256
                      }
                    ],
                    "start": 1166,
                    "end": 1260
                  },
                  "expression": false,
                  "start": 1163,
                  "end": 1260
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1153,
                "end": 1260
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addProseMirrorPlugins",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1264,
                  "end": 1285
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
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Suggestion",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1309,
                                "end": 1319
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
                                        "name": "editor",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1330,
                                        "end": 1336
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1338,
                                          "end": 1342
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "editor",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1343,
                                          "end": 1349
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1338,
                                        "end": 1349
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1330,
                                      "end": 1349
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1371,
                                            "end": 1375
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "options",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1376,
                                            "end": 1383
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1371,
                                          "end": 1383
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "suggestion",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1384,
                                          "end": 1394
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1371,
                                        "end": 1394
                                      },
                                      "start": 1368,
                                      "end": 1394
                                    }
                                  ],
                                  "start": 1320,
                                  "end": 1403
                                }
                              ],
                              "optional": false,
                              "start": 1309,
                              "end": 1404
                            }
                          ],
                          "start": 1301,
                          "end": 1411
                        },
                        "start": 1294,
                        "end": 1412
                      }
                    ],
                    "start": 1288,
                    "end": 1416
                  },
                  "expression": false,
                  "start": 1285,
                  "end": 1416
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1264,
                "end": 1416
              }
            ],
            "start": 1124,
            "end": 1419
          }
        ],
        "optional": false,
        "start": 1107,
        "end": 1420
      },
      "directive": null,
      "start": 1107,
      "end": 1421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extension",
            "optional": false,
            "typeAnnotation": null,
            "start": 1423,
            "end": 1432
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 1433,
            "end": 1439
          },
          "optional": false,
          "computed": false,
          "start": 1423,
          "end": 1439
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1448
                },
                "value": {
                  "type": "Literal",
                  "value": "slash-command",
                  "raw": "\"slash-command\"",
                  "start": 1450,
                  "end": 1465
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1444,
                "end": 1465
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1469,
                  "end": 1479
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "suggestion",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1508,
                                "end": 1518
                              },
                              "value": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "char",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1530,
                                        "end": 1534
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "/",
                                        "raw": "\"/\"",
                                        "start": 1536,
                                        "end": 1539
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1530,
                                      "end": 1539
                                    }
                                  ],
                                  "start": 1520,
                                  "end": 1548
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SuggestionOptions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1552,
                                    "end": 1569
                                  },
                                  "typeArguments": null,
                                  "start": 1552,
                                  "end": 1569
                                },
                                "start": 1520,
                                "end": 1569
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1508,
                              "end": 1569
                            }
                          ],
                          "start": 1500,
                          "end": 1576
                        },
                        "start": 1493,
                        "end": 1577
                      }
                    ],
                    "start": 1487,
                    "end": 1581
                  },
                  "id": null,
                  "generator": false,
                  "start": 1481,
                  "end": 1581
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1469,
                "end": 1581
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addProseMirrorPlugins",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1585,
                  "end": 1606
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
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Suggestion",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1630,
                                "end": 1640
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
                                        "name": "editor",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1651,
                                        "end": 1657
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1659,
                                          "end": 1663
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "editor",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1664,
                                          "end": 1670
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1659,
                                        "end": 1670
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1651,
                                      "end": 1670
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1692,
                                            "end": 1696
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "options",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1697,
                                            "end": 1704
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1692,
                                          "end": 1704
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "suggestion",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1705,
                                          "end": 1715
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1692,
                                        "end": 1715
                                      },
                                      "start": 1689,
                                      "end": 1715
                                    }
                                  ],
                                  "start": 1641,
                                  "end": 1724
                                }
                              ],
                              "optional": false,
                              "start": 1630,
                              "end": 1725
                            }
                          ],
                          "start": 1622,
                          "end": 1732
                        },
                        "start": 1615,
                        "end": 1733
                      }
                    ],
                    "start": 1609,
                    "end": 1737
                  },
                  "expression": false,
                  "start": 1606,
                  "end": 1737
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1585,
                "end": 1737
              }
            ],
            "start": 1440,
            "end": 1740
          }
        ],
        "optional": false,
        "start": 1423,
        "end": 1741
      },
      "directive": null,
      "start": 1423,
      "end": 1742
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
            "name": "parentExtension",
            "optional": false,
            "typeAnnotation": null,
            "start": 1750,
            "end": 1765
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extension",
                "optional": false,
                "typeAnnotation": null,
                "start": 1768,
                "end": 1777
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 1778,
                "end": 1784
              },
              "optional": false,
              "computed": false,
              "start": 1768,
              "end": 1784
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1789,
                      "end": 1793
                    },
                    "value": {
                      "type": "Literal",
                      "value": "parentExtension",
                      "raw": "\"parentExtension\"",
                      "start": 1795,
                      "end": 1812
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1789,
                    "end": 1812
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1816,
                      "end": 1826
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
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "parent",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1844,
                                    "end": 1850
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "exists",
                                    "raw": "\"exists\"",
                                    "start": 1852,
                                    "end": 1860
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1844,
                                  "end": 1860
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "overwrite",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1862,
                                    "end": 1871
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "parent",
                                    "raw": "\"parent\"",
                                    "start": 1873,
                                    "end": 1881
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1862,
                                  "end": 1881
                                }
                              ],
                              "start": 1842,
                              "end": 1883
                            },
                            "start": 1835,
                            "end": 1884
                          }
                        ],
                        "start": 1829,
                        "end": 1888
                      },
                      "expression": false,
                      "start": 1826,
                      "end": 1888
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1816,
                    "end": 1888
                  }
                ],
                "start": 1785,
                "end": 1891
              }
            ],
            "optional": false,
            "start": 1768,
            "end": 1892
          },
          "definite": false,
          "start": 1750,
          "end": 1892
        }
      ],
      "declare": false,
      "start": 1744,
      "end": 1893
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
            "name": "childExtension",
            "optional": false,
            "typeAnnotation": null,
            "start": 1901,
            "end": 1915
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "parentExtension",
                "optional": false,
                "typeAnnotation": null,
                "start": 1918,
                "end": 1933
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "configure",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1943
              },
              "optional": false,
              "computed": false,
              "start": 1918,
              "end": 1943
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
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1948,
                      "end": 1953
                    },
                    "value": {
                      "type": "Literal",
                      "value": "exists-too",
                      "raw": "\"exists-too\"",
                      "start": 1955,
                      "end": 1967
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1948,
                    "end": 1967
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1980,
                      "end": 1989
                    },
                    "value": {
                      "type": "Literal",
                      "value": "child",
                      "raw": "\"child\"",
                      "start": 1991,
                      "end": 1998
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1980,
                    "end": 1998
                  }
                ],
                "start": 1944,
                "end": 2001
              }
            ],
            "optional": false,
            "start": 1918,
            "end": 2002
          },
          "definite": false,
          "start": 1901,
          "end": 2002
        }
      ],
      "declare": false,
      "start": 1895,
      "end": 2003
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
            "name": "parentExtension2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2011,
            "end": 2027
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extension",
                "optional": false,
                "typeAnnotation": null,
                "start": 2030,
                "end": 2039
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2046
              },
              "optional": false,
              "computed": false,
              "start": 2030,
              "end": 2046
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2051,
                      "end": 2055
                    },
                    "value": {
                      "type": "Literal",
                      "value": "parentExtension2",
                      "raw": "\"parentExtension2\"",
                      "start": 2057,
                      "end": 2075
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2051,
                    "end": 2075
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2079,
                      "end": 2089
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "parent",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2112,
                                    "end": 2118
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "exists",
                                    "raw": "\"exists\"",
                                    "start": 2120,
                                    "end": 2128
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2112,
                                  "end": 2128
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "overwrite",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2130,
                                    "end": 2139
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "parent",
                                    "raw": "\"parent\"",
                                    "start": 2141,
                                    "end": 2149
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2130,
                                  "end": 2149
                                }
                              ],
                              "start": 2110,
                              "end": 2151
                            },
                            "start": 2103,
                            "end": 2152
                          }
                        ],
                        "start": 2097,
                        "end": 2156
                      },
                      "id": null,
                      "generator": false,
                      "start": 2091,
                      "end": 2156
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2079,
                    "end": 2156
                  }
                ],
                "start": 2047,
                "end": 2159
              }
            ],
            "optional": false,
            "start": 2030,
            "end": 2160
          },
          "definite": false,
          "start": 2011,
          "end": 2160
        }
      ],
      "declare": false,
      "start": 2005,
      "end": 2161
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
            "name": "childExtension2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2169,
            "end": 2184
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "parentExtension2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2187,
                "end": 2203
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "configure",
                "optional": false,
                "typeAnnotation": null,
                "start": 2204,
                "end": 2213
              },
              "optional": false,
              "computed": false,
              "start": 2187,
              "end": 2213
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
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2218,
                      "end": 2223
                    },
                    "value": {
                      "type": "Literal",
                      "value": "exists-too",
                      "raw": "\"exists-too\"",
                      "start": 2225,
                      "end": 2237
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2218,
                    "end": 2237
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2259
                    },
                    "value": {
                      "type": "Literal",
                      "value": "child",
                      "raw": "\"child\"",
                      "start": 2261,
                      "end": 2268
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2250,
                    "end": 2268
                  }
                ],
                "start": 2214,
                "end": 2271
              }
            ],
            "optional": false,
            "start": 2187,
            "end": 2272
          },
          "definite": false,
          "start": 2169,
          "end": 2272
        }
      ],
      "declare": false,
      "start": 2163,
      "end": 2273
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2275,
      "end": 2285
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2285
}
```
