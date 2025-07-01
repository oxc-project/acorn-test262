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
        "name": "Id",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
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
              "start": 41,
              "end": 42
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 42
          }
        ],
        "start": 40,
        "end": 43
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 50
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
              "start": 60,
              "end": 61
            },
            "typeArguments": null,
            "start": 60,
            "end": 61
          },
          "start": 54,
          "end": 61
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Id",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
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
                    "start": 67,
                    "end": 68
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 68
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 69,
                  "end": 70
                },
                "start": 67,
                "end": 71
              }
            ],
            "start": 66,
            "end": 72
          },
          "start": 64,
          "end": 72
        },
        "optional": false,
        "readonly": null,
        "start": 46,
        "end": 74
      },
      "declare": false,
      "start": 33,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 86
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 91
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 99,
                            "end": 100
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 104,
                                    "end": 105
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
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 109,
                                            "end": 110
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 114,
                                                    "end": 115
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 119,
                                                            "end": 120
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSNumberKeyword",
                                                              "start": 122,
                                                              "end": 128
                                                            },
                                                            "start": 120,
                                                            "end": 128
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 119,
                                                          "end": 128
                                                        }
                                                      ],
                                                      "start": 117,
                                                      "end": 130
                                                    },
                                                    "start": 115,
                                                    "end": 130
                                                  },
                                                  "accessibility": null,
                                                  "static": false,
                                                  "start": 114,
                                                  "end": 130
                                                }
                                              ],
                                              "start": 112,
                                              "end": 132
                                            },
                                            "start": 110,
                                            "end": 132
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 109,
                                          "end": 132
                                        }
                                      ],
                                      "start": 107,
                                      "end": 134
                                    },
                                    "start": 105,
                                    "end": 134
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 104,
                                  "end": 134
                                }
                              ],
                              "start": 102,
                              "end": 136
                            },
                            "start": 100,
                            "end": 136
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 99,
                          "end": 136
                        }
                      ],
                      "start": 97,
                      "end": 138
                    },
                    "start": 95,
                    "end": 138
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 94,
                  "end": 138
                }
              ],
              "start": 92,
              "end": 140
            }
          ],
          "start": 91,
          "end": 141
        },
        "start": 89,
        "end": 141
      },
      "declare": false,
      "start": 77,
      "end": 142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 157
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 170,
                                    "end": 171
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
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 175,
                                            "end": 176
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 180,
                                                    "end": 181
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 185,
                                                            "end": 186
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSStringKeyword",
                                                              "start": 188,
                                                              "end": 194
                                                            },
                                                            "start": 186,
                                                            "end": 194
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 185,
                                                          "end": 194
                                                        }
                                                      ],
                                                      "start": 183,
                                                      "end": 196
                                                    },
                                                    "start": 181,
                                                    "end": 196
                                                  },
                                                  "accessibility": null,
                                                  "static": false,
                                                  "start": 180,
                                                  "end": 196
                                                }
                                              ],
                                              "start": 178,
                                              "end": 198
                                            },
                                            "start": 176,
                                            "end": 198
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 175,
                                          "end": 198
                                        }
                                      ],
                                      "start": 173,
                                      "end": 200
                                    },
                                    "start": 171,
                                    "end": 200
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 170,
                                  "end": 200
                                }
                              ],
                              "start": 168,
                              "end": 202
                            },
                            "start": 166,
                            "end": 202
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 165,
                          "end": 202
                        }
                      ],
                      "start": 163,
                      "end": 204
                    },
                    "start": 161,
                    "end": 204
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 160,
                  "end": 204
                }
              ],
              "start": 158,
              "end": 206
            }
          ],
          "start": 157,
          "end": 207
        },
        "start": 155,
        "end": 207
      },
      "declare": false,
      "start": 143,
      "end": 208
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
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 234
                },
                "typeArguments": null,
                "start": 230,
                "end": 234
              },
              "start": 228,
              "end": 234
            },
            "start": 224,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 224,
          "end": 234
        }
      ],
      "declare": true,
      "start": 210,
      "end": 235
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 252
                },
                "typeArguments": null,
                "start": 248,
                "end": 252
              },
              "start": 246,
              "end": 252
            },
            "start": 242,
            "end": 252
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 259
          },
          "definite": false,
          "start": 242,
          "end": 259
        }
      ],
      "declare": false,
      "start": 236,
      "end": 260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Id2",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 289
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
              "start": 290,
              "end": 291
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 290,
            "end": 291
          }
        ],
        "start": 289,
        "end": 292
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 299
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
              "start": 309,
              "end": 310
            },
            "typeArguments": null,
            "start": 309,
            "end": 310
          },
          "start": 303,
          "end": 310
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Id2",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 316
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 320
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
                          "start": 321,
                          "end": 322
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 322
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 324
                        },
                        "typeArguments": null,
                        "start": 323,
                        "end": 324
                      },
                      "start": 321,
                      "end": 325
                    }
                  ],
                  "start": 320,
                  "end": 326
                },
                "start": 317,
                "end": 326
              }
            ],
            "start": 316,
            "end": 327
          },
          "start": 313,
          "end": 327
        },
        "optional": false,
        "readonly": null,
        "start": 295,
        "end": 329
      },
      "declare": false,
      "start": 281,
      "end": 330
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 341
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id2",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 347
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 351
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 355,
                            "end": 356
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 360,
                                    "end": 361
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
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 365,
                                            "end": 366
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 370,
                                                    "end": 371
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 375,
                                                            "end": 376
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSNumberKeyword",
                                                              "start": 378,
                                                              "end": 384
                                                            },
                                                            "start": 376,
                                                            "end": 384
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 375,
                                                          "end": 384
                                                        }
                                                      ],
                                                      "start": 373,
                                                      "end": 386
                                                    },
                                                    "start": 371,
                                                    "end": 386
                                                  },
                                                  "accessibility": null,
                                                  "static": false,
                                                  "start": 370,
                                                  "end": 386
                                                }
                                              ],
                                              "start": 368,
                                              "end": 388
                                            },
                                            "start": 366,
                                            "end": 388
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 365,
                                          "end": 388
                                        }
                                      ],
                                      "start": 363,
                                      "end": 390
                                    },
                                    "start": 361,
                                    "end": 390
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 360,
                                  "end": 390
                                }
                              ],
                              "start": 358,
                              "end": 392
                            },
                            "start": 356,
                            "end": 392
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 355,
                          "end": 392
                        }
                      ],
                      "start": 353,
                      "end": 394
                    },
                    "start": 351,
                    "end": 394
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 350,
                  "end": 394
                }
              ],
              "start": 348,
              "end": 396
            }
          ],
          "start": 347,
          "end": 397
        },
        "start": 344,
        "end": 397
      },
      "declare": false,
      "start": 332,
      "end": 398
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id2",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 414
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 422,
                            "end": 423
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 427,
                                    "end": 428
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
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 432,
                                            "end": 433
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
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 437,
                                                    "end": 438
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
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 442,
                                                            "end": 443
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSStringKeyword",
                                                              "start": 445,
                                                              "end": 451
                                                            },
                                                            "start": 443,
                                                            "end": 451
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 442,
                                                          "end": 451
                                                        }
                                                      ],
                                                      "start": 440,
                                                      "end": 453
                                                    },
                                                    "start": 438,
                                                    "end": 453
                                                  },
                                                  "accessibility": null,
                                                  "static": false,
                                                  "start": 437,
                                                  "end": 453
                                                }
                                              ],
                                              "start": 435,
                                              "end": 455
                                            },
                                            "start": 433,
                                            "end": 455
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 432,
                                          "end": 455
                                        }
                                      ],
                                      "start": 430,
                                      "end": 457
                                    },
                                    "start": 428,
                                    "end": 457
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 427,
                                  "end": 457
                                }
                              ],
                              "start": 425,
                              "end": 459
                            },
                            "start": 423,
                            "end": 459
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 422,
                          "end": 459
                        }
                      ],
                      "start": 420,
                      "end": 461
                    },
                    "start": 418,
                    "end": 461
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 417,
                  "end": 461
                }
              ],
              "start": 415,
              "end": 463
            }
          ],
          "start": 414,
          "end": 464
        },
        "start": 411,
        "end": 464
      },
      "declare": false,
      "start": 399,
      "end": 465
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 491
                },
                "typeArguments": null,
                "start": 487,
                "end": 491
              },
              "start": 485,
              "end": 491
            },
            "start": 481,
            "end": 491
          },
          "init": null,
          "definite": false,
          "start": 481,
          "end": 491
        }
      ],
      "declare": true,
      "start": 467,
      "end": 492
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
            "name": "foo4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 509
                },
                "typeArguments": null,
                "start": 505,
                "end": 509
              },
              "start": 503,
              "end": 509
            },
            "start": 499,
            "end": 509
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 516
          },
          "definite": false,
          "start": 499,
          "end": 516
        }
      ],
      "declare": false,
      "start": 493,
      "end": 517
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiredDeep",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 593
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
              "start": 594,
              "end": 595
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 594,
            "end": 595
          }
        ],
        "start": 593,
        "end": 596
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 603
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
              "start": 613,
              "end": 614
            },
            "typeArguments": null,
            "start": 613,
            "end": 614
          },
          "start": 607,
          "end": 614
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequiredDeep",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 631
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
                    "start": 632,
                    "end": 633
                  },
                  "typeArguments": null,
                  "start": 632,
                  "end": 633
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 634,
                    "end": 635
                  },
                  "typeArguments": null,
                  "start": 634,
                  "end": 635
                },
                "start": 632,
                "end": 636
              }
            ],
            "start": 631,
            "end": 637
          },
          "start": 619,
          "end": 637
        },
        "optional": "-",
        "readonly": null,
        "start": 599,
        "end": 639
      },
      "declare": false,
      "start": 576,
      "end": 640
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 648
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 660
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 664,
                              "end": 665
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 667,
                                      "end": 668
                                    },
                                    "start": 667,
                                    "end": 668
                                  },
                                  {
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
                                          "name": "d",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 673,
                                          "end": 674
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": 2000,
                                              "raw": "2000",
                                              "start": 676,
                                              "end": 680
                                            },
                                            "start": 676,
                                            "end": 680
                                          },
                                          "start": 674,
                                          "end": 680
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 673,
                                        "end": 680
                                      }
                                    ],
                                    "start": 671,
                                    "end": 682
                                  }
                                ],
                                "start": 667,
                                "end": 682
                              },
                              "start": 665,
                              "end": 682
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 664,
                            "end": 682
                          }
                        ],
                        "start": 662,
                        "end": 684
                      },
                      "start": 660,
                      "end": 684
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 659,
                    "end": 684
                  }
                ],
                "start": 657,
                "end": 685
              },
              "start": 655,
              "end": 685
            },
            "accessibility": null,
            "static": false,
            "start": 653,
            "end": 685
          }
        ],
        "start": 651,
        "end": 686
      },
      "declare": false,
      "start": 642,
      "end": 686
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 692,
        "end": 693
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 698,
              "end": 699
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 705
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 709,
                              "end": 710
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
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 714,
                                      "end": 715
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
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 719,
                                              "end": 720
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
                                                      "name": "f",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 724,
                                                      "end": 725
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
                                                              "name": "g",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 729,
                                                              "end": 730
                                                            },
                                                            "typeAnnotation": {
                                                              "type": "TSTypeAnnotation",
                                                              "typeAnnotation": {
                                                                "type": "TSLiteralType",
                                                                "literal": {
                                                                  "type": "Literal",
                                                                  "value": 2,
                                                                  "raw": "2",
                                                                  "start": 732,
                                                                  "end": 733
                                                                },
                                                                "start": 732,
                                                                "end": 733
                                                              },
                                                              "start": 730,
                                                              "end": 733
                                                            },
                                                            "accessibility": null,
                                                            "static": false,
                                                            "start": 729,
                                                            "end": 733
                                                          }
                                                        ],
                                                        "start": 727,
                                                        "end": 735
                                                      },
                                                      "start": 725,
                                                      "end": 735
                                                    },
                                                    "accessibility": null,
                                                    "static": false,
                                                    "start": 724,
                                                    "end": 735
                                                  }
                                                ],
                                                "start": 722,
                                                "end": 736
                                              },
                                              "start": 720,
                                              "end": 736
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 719,
                                            "end": 736
                                          }
                                        ],
                                        "start": 717,
                                        "end": 737
                                      },
                                      "start": 715,
                                      "end": 737
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 714,
                                    "end": 737
                                  }
                                ],
                                "start": 712,
                                "end": 738
                              },
                              "start": 710,
                              "end": 738
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 709,
                            "end": 739
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 740,
                              "end": 741
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 1000,
                                  "raw": "1000",
                                  "start": 743,
                                  "end": 747
                                },
                                "start": 743,
                                "end": 747
                              },
                              "start": 741,
                              "end": 747
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 740,
                            "end": 747
                          }
                        ],
                        "start": 707,
                        "end": 749
                      },
                      "start": 705,
                      "end": 749
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 704,
                    "end": 749
                  }
                ],
                "start": 702,
                "end": 750
              },
              "start": 700,
              "end": 750
            },
            "accessibility": null,
            "static": false,
            "start": 698,
            "end": 750
          }
        ],
        "start": 696,
        "end": 751
      },
      "declare": false,
      "start": 687,
      "end": 751
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 758,
        "end": 759
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredDeep",
          "optional": false,
          "typeAnnotation": null,
          "start": 762,
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
                "name": "A",
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
        "start": 762,
        "end": 777
      },
      "declare": false,
      "start": 753,
      "end": 778
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 784,
        "end": 785
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredDeep",
          "optional": false,
          "typeAnnotation": null,
          "start": 788,
          "end": 800
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
                "start": 801,
                "end": 802
              },
              "typeArguments": null,
              "start": 801,
              "end": 802
            }
          ],
          "start": 800,
          "end": 803
        },
        "start": 788,
        "end": 803
      },
      "declare": false,
      "start": 779,
      "end": 804
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 816
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 821
              },
              "typeArguments": null,
              "start": 820,
              "end": 821
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "typeArguments": null,
              "start": 823,
              "end": 824
            }
          ],
          "start": 819,
          "end": 825
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 836
              },
              "typeArguments": null,
              "start": 835,
              "end": 836
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 839
              },
              "typeArguments": null,
              "start": 838,
              "end": 839
            }
          ],
          "start": 834,
          "end": 840
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 843,
            "end": 847
          },
          "start": 843,
          "end": 847
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 850,
            "end": 855
          },
          "start": 850,
          "end": 855
        },
        "start": 819,
        "end": 855
      },
      "declare": false,
      "start": 806,
      "end": 856
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 872,
        "end": 877
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 880,
            "end": 881
          },
          "typeArguments": null,
          "start": 880,
          "end": 881
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 891
          },
          "typeArguments": null,
          "start": 890,
          "end": 891
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 894,
            "end": 898
          },
          "start": 894,
          "end": 898
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 901,
            "end": 906
          },
          "start": 901,
          "end": 906
        },
        "start": 880,
        "end": 906
      },
      "declare": false,
      "start": 867,
      "end": 907
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 923,
        "end": 928
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 931,
            "end": 932
          },
          "typeArguments": null,
          "start": 931,
          "end": 932
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 942
          },
          "typeArguments": null,
          "start": 941,
          "end": 942
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 945,
            "end": 949
          },
          "start": 945,
          "end": 949
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 952,
            "end": 957
          },
          "start": 952,
          "end": 957
        },
        "start": 931,
        "end": 957
      },
      "declare": false,
      "start": 918,
      "end": 958
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 1331,
        "end": 1343
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1344,
              "end": 1345
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1354,
              "end": 1360
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1344,
            "end": 1360
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1363
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1362,
            "end": 1363
          }
        ],
        "start": 1343,
        "end": 1364
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1367,
            "end": 1368
          },
          "typeArguments": null,
          "start": 1367,
          "end": 1368
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 1377,
              "end": 1380
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false,
              "start": 1388,
              "end": 1392
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1400,
              "end": 1402
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
                  "name": "K0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1386,
                  "end": 1388
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1386,
                "end": 1388
              },
              "start": 1380,
              "end": 1388
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1398,
                  "end": 1400
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1398,
                "end": 1400
              },
              "start": 1392,
              "end": 1400
            }
          ],
          "start": 1377,
          "end": 1402
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1408,
            "end": 1409
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1415
            },
            "typeArguments": null,
            "start": 1413,
            "end": 1415
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NestedRecord",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1430
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "KR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1431,
                    "end": 1433
                  },
                  "typeArguments": null,
                  "start": 1431,
                  "end": 1433
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1435,
                    "end": 1436
                  },
                  "typeArguments": null,
                  "start": 1435,
                  "end": 1436
                }
              ],
              "start": 1430,
              "end": 1437
            },
            "start": 1418,
            "end": 1437
          },
          "optional": false,
          "readonly": null,
          "start": 1405,
          "end": 1439
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 1442,
            "end": 1448
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1450
                },
                "typeArguments": null,
                "start": 1449,
                "end": 1450
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1452,
                  "end": 1453
                },
                "typeArguments": null,
                "start": 1452,
                "end": 1453
              }
            ],
            "start": 1448,
            "end": 1454
          },
          "start": 1442,
          "end": 1454
        },
        "start": 1367,
        "end": 1454
      },
      "declare": false,
      "start": 1326,
      "end": 1455
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1462,
        "end": 1466
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NestedRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 1469,
          "end": 1481
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x.y.z.a.b.c",
                "raw": "\"x.y.z.a.b.c\"",
                "start": 1482,
                "end": 1495
              },
              "start": 1482,
              "end": 1495
            },
            {
              "type": "TSNumberKeyword",
              "start": 1497,
              "end": 1503
            }
          ],
          "start": 1481,
          "end": 1504
        },
        "start": 1469,
        "end": 1504
      },
      "declare": false,
      "start": 1457,
      "end": 1505
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1511,
        "end": 1515
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NestedRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 1518,
          "end": 1530
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x.y.z.a.b.c",
                "raw": "\"x.y.z.a.b.c\"",
                "start": 1531,
                "end": 1544
              },
              "start": 1531,
              "end": 1544
            },
            {
              "type": "TSStringKeyword",
              "start": 1546,
              "end": 1552
            }
          ],
          "start": 1530,
          "end": 1553
        },
        "start": 1518,
        "end": 1553
      },
      "declare": false,
      "start": 1506,
      "end": 1554
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
            "name": "bar1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1576,
                  "end": 1580
                },
                "typeArguments": null,
                "start": 1576,
                "end": 1580
              },
              "start": 1574,
              "end": 1580
            },
            "start": 1570,
            "end": 1580
          },
          "init": null,
          "definite": false,
          "start": 1570,
          "end": 1580
        }
      ],
      "declare": true,
      "start": 1556,
      "end": 1581
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
            "name": "bar2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1594,
                  "end": 1598
                },
                "typeArguments": null,
                "start": 1594,
                "end": 1598
              },
              "start": 1592,
              "end": 1598
            },
            "start": 1588,
            "end": 1598
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1601,
            "end": 1605
          },
          "definite": false,
          "start": 1588,
          "end": 1605
        }
      ],
      "declare": false,
      "start": 1582,
      "end": 1606
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Input",
          "optional": false,
          "typeAnnotation": null,
          "start": 1661,
          "end": 1666
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Static",
            "optional": false,
            "typeAnnotation": null,
            "start": 1669,
            "end": 1675
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1683,
                  "end": 1688
                },
                "typeArguments": null,
                "start": 1676,
                "end": 1688
              }
            ],
            "start": 1675,
            "end": 1689
          },
          "start": 1669,
          "end": 1689
        },
        "declare": false,
        "start": 1656,
        "end": 1689
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1649,
      "end": 1689
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 1703,
              "end": 1708
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1711,
                  "end": 1715
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1716,
                  "end": 1722
                },
                "optional": false,
                "computed": false,
                "start": 1711,
                "end": 1722
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
                        "name": "level1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1729,
                        "end": 1735
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1737,
                            "end": 1741
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1742,
                            "end": 1748
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1737,
                          "end": 1748
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
                                  "name": "level2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1759,
                                  "end": 1765
                                },
                                "value": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Type",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1767,
                                      "end": 1771
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1772,
                                      "end": 1778
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1767,
                                    "end": 1778
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
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1793,
                                            "end": 1796
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1798,
                                                "end": 1802
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1803,
                                                "end": 1809
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1798,
                                              "end": 1809
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 1798,
                                            "end": 1811
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1793,
                                          "end": 1811
                                        }
                                      ],
                                      "start": 1779,
                                      "end": 1822
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1767,
                                  "end": 1823
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1759,
                                "end": 1823
                              }
                            ],
                            "start": 1749,
                            "end": 1829
                          }
                        ],
                        "optional": false,
                        "start": 1737,
                        "end": 1830
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1729,
                      "end": 1830
                    }
                  ],
                  "start": 1723,
                  "end": 1832
                }
              ],
              "optional": false,
              "start": 1711,
              "end": 1833
            },
            "definite": false,
            "start": 1703,
            "end": 1833
          }
        ],
        "declare": false,
        "start": 1697,
        "end": 1833
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1690,
      "end": 1833
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Output",
          "optional": false,
          "typeAnnotation": null,
          "start": 1847,
          "end": 1853
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Static",
            "optional": false,
            "typeAnnotation": null,
            "start": 1856,
            "end": 1862
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1870,
                  "end": 1876
                },
                "typeArguments": null,
                "start": 1863,
                "end": 1876
              }
            ],
            "start": 1862,
            "end": 1877
          },
          "start": 1856,
          "end": 1877
        },
        "declare": false,
        "start": 1842,
        "end": 1877
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1835,
      "end": 1877
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 1891,
              "end": 1897
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1900,
                  "end": 1904
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1905,
                  "end": 1911
                },
                "optional": false,
                "computed": false,
                "start": 1900,
                "end": 1911
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
                        "name": "level1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1918,
                        "end": 1924
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1926,
                            "end": 1930
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1931,
                            "end": 1937
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1926,
                          "end": 1937
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
                                  "name": "level2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1948,
                                  "end": 1954
                                },
                                "value": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Type",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1956,
                                      "end": 1960
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1961,
                                      "end": 1967
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1956,
                                    "end": 1967
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
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1982,
                                            "end": 1985
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1987,
                                                "end": 1991
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1992,
                                                "end": 1998
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1987,
                                              "end": 1998
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 1987,
                                            "end": 2000
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1982,
                                          "end": 2000
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bar",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2014,
                                            "end": 2017
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2019,
                                                "end": 2023
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2024,
                                                "end": 2030
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 2019,
                                              "end": 2030
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 2019,
                                            "end": 2032
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 2014,
                                          "end": 2032
                                        }
                                      ],
                                      "start": 1968,
                                      "end": 2043
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1956,
                                  "end": 2044
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1948,
                                "end": 2044
                              }
                            ],
                            "start": 1938,
                            "end": 2050
                          }
                        ],
                        "optional": false,
                        "start": 1926,
                        "end": 2051
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1918,
                      "end": 2051
                    }
                  ],
                  "start": 1912,
                  "end": 2053
                }
              ],
              "optional": false,
              "start": 1900,
              "end": 2054
            },
            "definite": false,
            "start": 1891,
            "end": 2054
          }
        ],
        "declare": false,
        "start": 1885,
        "end": 2054
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1878,
      "end": 2054
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2065,
        "end": 2085
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
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
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2091,
                  "end": 2096
                },
                "typeArguments": null,
                "start": 2091,
                "end": 2096
              },
              "start": 2091,
              "end": 2098
            },
            "start": 2089,
            "end": 2098
          },
          "start": 2086,
          "end": 2098
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
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 2101,
              "end": 2107
            },
            "typeArguments": null,
            "start": 2101,
            "end": 2107
          },
          "start": 2101,
          "end": 2109
        },
        "start": 2099,
        "end": 2109
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null,
              "start": 2123,
              "end": 2126
            },
            "start": 2116,
            "end": 2127
          }
        ],
        "start": 2110,
        "end": 2139
      },
      "expression": false,
      "start": 2056,
      "end": 2139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2150,
        "end": 2170
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
              "start": 2171,
              "end": 2172
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2181,
                  "end": 2187
                },
                "typeArguments": null,
                "start": 2181,
                "end": 2187
              },
              "start": 2181,
              "end": 2189
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2171,
            "end": 2189
          }
        ],
        "start": 2170,
        "end": 2190
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
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
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2201
                },
                "typeArguments": null,
                "start": 2196,
                "end": 2201
              },
              "start": 2196,
              "end": 2203
            },
            "start": 2194,
            "end": 2203
          },
          "start": 2191,
          "end": 2203
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
            "start": 2206,
            "end": 2207
          },
          "typeArguments": null,
          "start": 2206,
          "end": 2207
        },
        "start": 2204,
        "end": 2207
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null,
              "start": 2221,
              "end": 2224
            },
            "start": 2214,
            "end": 2225
          }
        ],
        "start": 2208,
        "end": 2237
      },
      "expression": false,
      "start": 2141,
      "end": 2237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "problematicFunction3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2268
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2282,
                    "end": 2287
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2288,
                    "end": 2294
                  },
                  "start": 2282,
                  "end": 2294
                },
                "typeArguments": null,
                "start": 2275,
                "end": 2294
              },
              "start": 2274,
              "end": 2297
            },
            "start": 2272,
            "end": 2297
          },
          "start": 2269,
          "end": 2297
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
              "name": "Output",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2306
            },
            "typeArguments": null,
            "start": 2300,
            "end": 2306
          },
          "start": 2300,
          "end": 2308
        },
        "start": 2298,
        "end": 2308
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null,
              "start": 2322,
              "end": 2325
            },
            "start": 2315,
            "end": 2326
          }
        ],
        "start": 2309,
        "end": 2338
      },
      "expression": false,
      "start": 2239,
      "end": 2338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Evaluate",
          "optional": false,
          "typeAnnotation": null,
          "start": 2352,
          "end": 2360
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
                "start": 2361,
                "end": 2362
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2361,
              "end": 2362
            }
          ],
          "start": 2360,
          "end": 2363
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
              "start": 2366,
              "end": 2367
            },
            "typeArguments": null,
            "start": 2366,
            "end": 2367
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2382,
                "end": 2383
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2382,
              "end": 2383
            },
            "start": 2376,
            "end": 2383
          },
          "trueType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2389,
              "end": 2390
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2400,
                  "end": 2401
                },
                "typeArguments": null,
                "start": 2400,
                "end": 2401
              },
              "start": 2394,
              "end": 2401
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2404,
                  "end": 2405
                },
                "typeArguments": null,
                "start": 2404,
                "end": 2405
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2406,
                  "end": 2407
                },
                "typeArguments": null,
                "start": 2406,
                "end": 2407
              },
              "start": 2404,
              "end": 2408
            },
            "optional": false,
            "readonly": null,
            "start": 2386,
            "end": 2410
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2413,
            "end": 2418
          },
          "start": 2366,
          "end": 2418
        },
        "declare": false,
        "start": 2347,
        "end": 2418
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2340,
      "end": 2418
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2458,
                    "end": 2464
                  },
                  "start": 2451,
                  "end": 2464
                },
                "start": 2449,
                "end": 2464
              },
              "start": 2441,
              "end": 2464
            },
            "init": null,
            "definite": false,
            "start": 2441,
            "end": 2464
          }
        ],
        "declare": true,
        "start": 2427,
        "end": 2465
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2420,
      "end": 2465
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Optional",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2504,
                    "end": 2510
                  },
                  "start": 2497,
                  "end": 2510
                },
                "start": 2495,
                "end": 2510
              },
              "start": 2487,
              "end": 2510
            },
            "init": null,
            "definite": false,
            "start": 2487,
            "end": 2510
          }
        ],
        "declare": true,
        "start": 2473,
        "end": 2511
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2466,
      "end": 2511
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Hint",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2546,
                    "end": 2552
                  },
                  "start": 2539,
                  "end": 2552
                },
                "start": 2537,
                "end": 2552
              },
              "start": 2533,
              "end": 2552
            },
            "init": null,
            "definite": false,
            "start": 2533,
            "end": 2552
          }
        ],
        "declare": true,
        "start": 2519,
        "end": 2553
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2512,
      "end": 2553
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Kind",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2588,
                    "end": 2594
                  },
                  "start": 2581,
                  "end": 2594
                },
                "start": 2579,
                "end": 2594
              },
              "start": 2575,
              "end": 2594
            },
            "init": null,
            "definite": false,
            "start": 2575,
            "end": 2594
          }
        ],
        "declare": true,
        "start": 2561,
        "end": 2595
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2554,
      "end": 2595
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 2614,
          "end": 2619
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2627,
                "end": 2631
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2634,
                  "end": 2640
                },
                "start": 2632,
                "end": 2640
              },
              "accessibility": null,
              "static": false,
              "start": 2626,
              "end": 2640
            }
          ],
          "start": 2620,
          "end": 2642
        },
        "declare": false,
        "start": 2604,
        "end": 2642
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2597,
      "end": 2642
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TSchema",
          "optional": false,
          "typeAnnotation": null,
          "start": 2660,
          "end": 2667
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2676,
              "end": 2681
            },
            "typeArguments": null,
            "start": 2676,
            "end": 2681
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2689,
                "end": 2697
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2701,
                  "end": 2707
                },
                "start": 2699,
                "end": 2707
              },
              "accessibility": null,
              "static": false,
              "start": 2688,
              "end": 2707
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Optional",
                "optional": false,
                "typeAnnotation": null,
                "start": 2713,
                "end": 2721
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2725,
                  "end": 2731
                },
                "start": 2723,
                "end": 2731
              },
              "accessibility": null,
              "static": false,
              "start": 2712,
              "end": 2731
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Hint",
                "optional": false,
                "typeAnnotation": null,
                "start": 2737,
                "end": 2741
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2745,
                  "end": 2751
                },
                "start": 2743,
                "end": 2751
              },
              "accessibility": null,
              "static": false,
              "start": 2736,
              "end": 2751
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": null,
                "start": 2756,
                "end": 2762
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 2764,
                    "end": 2771
                  },
                  "start": 2764,
                  "end": 2773
                },
                "start": 2762,
                "end": 2773
              },
              "accessibility": null,
              "static": false,
              "start": 2756,
              "end": 2773
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 2778,
                "end": 2784
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 2786,
                  "end": 2793
                },
                "start": 2784,
                "end": 2793
              },
              "accessibility": null,
              "static": false,
              "start": 2778,
              "end": 2793
            }
          ],
          "start": 2682,
          "end": 2795
        },
        "declare": false,
        "start": 2650,
        "end": 2795
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2643,
      "end": 2795
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TReadonlyOptional",
          "optional": false,
          "typeAnnotation": null,
          "start": 2809,
          "end": 2826
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
                "start": 2827,
                "end": 2828
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2837,
                  "end": 2844
                },
                "typeArguments": null,
                "start": 2837,
                "end": 2844
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2827,
              "end": 2844
            }
          ],
          "start": 2826,
          "end": 2845
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 2848,
                "end": 2857
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
                      "start": 2858,
                      "end": 2859
                    },
                    "typeArguments": null,
                    "start": 2858,
                    "end": 2859
                  }
                ],
                "start": 2857,
                "end": 2860
              },
              "start": 2848,
              "end": 2860
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TReadonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2863,
                "end": 2872
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
                      "start": 2873,
                      "end": 2874
                    },
                    "typeArguments": null,
                    "start": 2873,
                    "end": 2874
                  }
                ],
                "start": 2872,
                "end": 2875
              },
              "start": 2863,
              "end": 2875
            }
          ],
          "start": 2848,
          "end": 2875
        },
        "declare": false,
        "start": 2804,
        "end": 2875
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2797,
      "end": 2875
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TReadonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 2888,
          "end": 2897
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
                "start": 2898,
                "end": 2899
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2908,
                  "end": 2915
                },
                "typeArguments": null,
                "start": 2908,
                "end": 2915
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2898,
              "end": 2915
            }
          ],
          "start": 2897,
          "end": 2916
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2919,
                "end": 2920
              },
              "typeArguments": null,
              "start": 2919,
              "end": 2920
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Readonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2926,
                    "end": 2934
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Readonly",
                        "raw": "'Readonly'",
                        "start": 2937,
                        "end": 2947
                      },
                      "start": 2937,
                      "end": 2947
                    },
                    "start": 2935,
                    "end": 2947
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2925,
                  "end": 2947
                }
              ],
              "start": 2923,
              "end": 2949
            }
          ],
          "start": 2919,
          "end": 2949
        },
        "declare": false,
        "start": 2883,
        "end": 2949
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2876,
      "end": 2949
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TOptional",
          "optional": false,
          "typeAnnotation": null,
          "start": 2962,
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
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2982,
                  "end": 2989
                },
                "typeArguments": null,
                "start": 2982,
                "end": 2989
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2972,
              "end": 2989
            }
          ],
          "start": 2971,
          "end": 2990
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2993,
                "end": 2994
              },
              "typeArguments": null,
              "start": 2993,
              "end": 2994
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3000,
                    "end": 3008
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Optional",
                        "raw": "'Optional'",
                        "start": 3011,
                        "end": 3021
                      },
                      "start": 3011,
                      "end": 3021
                    },
                    "start": 3009,
                    "end": 3021
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2999,
                  "end": 3021
                }
              ],
              "start": 2997,
              "end": 3023
            }
          ],
          "start": 2993,
          "end": 3023
        },
        "declare": false,
        "start": 2957,
        "end": 3023
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2950,
      "end": 3023
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TString",
          "optional": false,
          "typeAnnotation": null,
          "start": 3042,
          "end": 3049
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 3058,
              "end": 3065
            },
            "typeArguments": null,
            "start": 3058,
            "end": 3065
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 3073,
                "end": 3077
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "String",
                    "raw": "'String'",
                    "start": 3080,
                    "end": 3088
                  },
                  "start": 3080,
                  "end": 3088
                },
                "start": 3078,
                "end": 3088
              },
              "accessibility": null,
              "static": false,
              "start": 3072,
              "end": 3089
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 3094,
                "end": 3100
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3102,
                  "end": 3108
                },
                "start": 3100,
                "end": 3108
              },
              "accessibility": null,
              "static": false,
              "start": 3094,
              "end": 3109
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 3114,
                "end": 3118
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 3120,
                    "end": 3128
                  },
                  "start": 3120,
                  "end": 3128
                },
                "start": 3118,
                "end": 3128
              },
              "accessibility": null,
              "static": false,
              "start": 3114,
              "end": 3129
            }
          ],
          "start": 3066,
          "end": 3131
        },
        "declare": false,
        "start": 3032,
        "end": 3131
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3025,
      "end": 3131
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyOptionalPropertyKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3145,
          "end": 3173
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
                "start": 3174,
                "end": 3175
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3184,
                  "end": 3195
                },
                "typeArguments": null,
                "start": 3184,
                "end": 3195
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3174,
              "end": 3195
            }
          ],
          "start": 3173,
          "end": 3196
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3202,
              "end": 3203
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
                  "start": 3213,
                  "end": 3214
                },
                "typeArguments": null,
                "start": 3213,
                "end": 3214
              },
              "start": 3207,
              "end": 3214
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
                    "start": 3217,
                    "end": 3218
                  },
                  "typeArguments": null,
                  "start": 3217,
                  "end": 3218
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3219,
                    "end": 3220
                  },
                  "typeArguments": null,
                  "start": 3219,
                  "end": 3220
                },
                "start": 3217,
                "end": 3221
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TReadonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3230,
                  "end": 3239
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3240,
                        "end": 3247
                      },
                      "typeArguments": null,
                      "start": 3240,
                      "end": 3247
                    }
                  ],
                  "start": 3239,
                  "end": 3248
                },
                "start": 3230,
                "end": 3248
              },
              "trueType": {
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
                      "start": 3252,
                      "end": 3253
                    },
                    "typeArguments": null,
                    "start": 3252,
                    "end": 3253
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3254,
                      "end": 3255
                    },
                    "typeArguments": null,
                    "start": 3254,
                    "end": 3255
                  },
                  "start": 3252,
                  "end": 3256
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOptional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3265,
                    "end": 3274
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
                            "start": 3275,
                            "end": 3276
                          },
                          "typeArguments": null,
                          "start": 3275,
                          "end": 3276
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3277,
                            "end": 3278
                          },
                          "typeArguments": null,
                          "start": 3277,
                          "end": 3278
                        },
                        "start": 3275,
                        "end": 3279
                      }
                    ],
                    "start": 3274,
                    "end": 3280
                  },
                  "start": 3265,
                  "end": 3280
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3283,
                    "end": 3284
                  },
                  "typeArguments": null,
                  "start": 3283,
                  "end": 3284
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 3287,
                  "end": 3292
                },
                "start": 3252,
                "end": 3292
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3296,
                "end": 3301
              },
              "start": 3217,
              "end": 3301
            },
            "optional": false,
            "readonly": null,
            "start": 3199,
            "end": 3303
          },
          "indexType": {
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
                "start": 3310,
                "end": 3311
              },
              "typeArguments": null,
              "start": 3310,
              "end": 3311
            },
            "start": 3304,
            "end": 3311
          },
          "start": 3199,
          "end": 3312
        },
        "declare": false,
        "start": 3140,
        "end": 3312
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3133,
      "end": 3312
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyPropertyKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3325,
          "end": 3345
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
                "start": 3346,
                "end": 3347
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3356,
                  "end": 3367
                },
                "typeArguments": null,
                "start": 3356,
                "end": 3367
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3346,
              "end": 3367
            }
          ],
          "start": 3345,
          "end": 3368
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3374,
              "end": 3375
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
                  "start": 3385,
                  "end": 3386
                },
                "typeArguments": null,
                "start": 3385,
                "end": 3386
              },
              "start": 3379,
              "end": 3386
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
                    "start": 3389,
                    "end": 3390
                  },
                  "typeArguments": null,
                  "start": 3389,
                  "end": 3390
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3391,
                    "end": 3392
                  },
                  "typeArguments": null,
                  "start": 3391,
                  "end": 3392
                },
                "start": 3389,
                "end": 3393
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TReadonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3402,
                  "end": 3411
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3412,
                        "end": 3419
                      },
                      "typeArguments": null,
                      "start": 3412,
                      "end": 3419
                    }
                  ],
                  "start": 3411,
                  "end": 3420
                },
                "start": 3402,
                "end": 3420
              },
              "trueType": {
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
                      "start": 3424,
                      "end": 3425
                    },
                    "typeArguments": null,
                    "start": 3424,
                    "end": 3425
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3426,
                      "end": 3427
                    },
                    "typeArguments": null,
                    "start": 3426,
                    "end": 3427
                  },
                  "start": 3424,
                  "end": 3428
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TOptional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3437,
                    "end": 3446
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
                            "start": 3447,
                            "end": 3448
                          },
                          "typeArguments": null,
                          "start": 3447,
                          "end": 3448
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3449,
                            "end": 3450
                          },
                          "typeArguments": null,
                          "start": 3449,
                          "end": 3450
                        },
                        "start": 3447,
                        "end": 3451
                      }
                    ],
                    "start": 3446,
                    "end": 3452
                  },
                  "start": 3437,
                  "end": 3452
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 3455,
                  "end": 3460
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3463,
                    "end": 3464
                  },
                  "typeArguments": null,
                  "start": 3463,
                  "end": 3464
                },
                "start": 3424,
                "end": 3464
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3468,
                "end": 3473
              },
              "start": 3389,
              "end": 3473
            },
            "optional": false,
            "readonly": null,
            "start": 3371,
            "end": 3475
          },
          "indexType": {
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
                "start": 3482,
                "end": 3483
              },
              "typeArguments": null,
              "start": 3482,
              "end": 3483
            },
            "start": 3476,
            "end": 3483
          },
          "start": 3371,
          "end": 3484
        },
        "declare": false,
        "start": 3320,
        "end": 3484
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3313,
      "end": 3484
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionalPropertyKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3497,
          "end": 3517
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
                "start": 3518,
                "end": 3519
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3528,
                  "end": 3539
                },
                "typeArguments": null,
                "start": 3528,
                "end": 3539
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3518,
              "end": 3539
            }
          ],
          "start": 3517,
          "end": 3540
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3546,
              "end": 3547
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
                  "start": 3557,
                  "end": 3558
                },
                "typeArguments": null,
                "start": 3557,
                "end": 3558
              },
              "start": 3551,
              "end": 3558
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
                    "start": 3561,
                    "end": 3562
                  },
                  "typeArguments": null,
                  "start": 3561,
                  "end": 3562
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3563,
                    "end": 3564
                  },
                  "typeArguments": null,
                  "start": 3563,
                  "end": 3564
                },
                "start": 3561,
                "end": 3565
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TOptional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3574,
                  "end": 3583
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3584,
                        "end": 3591
                      },
                      "typeArguments": null,
                      "start": 3584,
                      "end": 3591
                    }
                  ],
                  "start": 3583,
                  "end": 3592
                },
                "start": 3574,
                "end": 3592
              },
              "trueType": {
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
                      "start": 3596,
                      "end": 3597
                    },
                    "typeArguments": null,
                    "start": 3596,
                    "end": 3597
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3598,
                      "end": 3599
                    },
                    "typeArguments": null,
                    "start": 3598,
                    "end": 3599
                  },
                  "start": 3596,
                  "end": 3600
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TReadonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3609,
                    "end": 3618
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
                            "start": 3619,
                            "end": 3620
                          },
                          "typeArguments": null,
                          "start": 3619,
                          "end": 3620
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3621,
                            "end": 3622
                          },
                          "typeArguments": null,
                          "start": 3621,
                          "end": 3622
                        },
                        "start": 3619,
                        "end": 3623
                      }
                    ],
                    "start": 3618,
                    "end": 3624
                  },
                  "start": 3609,
                  "end": 3624
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 3627,
                  "end": 3632
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3635,
                    "end": 3636
                  },
                  "typeArguments": null,
                  "start": 3635,
                  "end": 3636
                },
                "start": 3596,
                "end": 3636
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3640,
                "end": 3645
              },
              "start": 3561,
              "end": 3645
            },
            "optional": false,
            "readonly": null,
            "start": 3543,
            "end": 3647
          },
          "indexType": {
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
                "start": 3654,
                "end": 3655
              },
              "typeArguments": null,
              "start": 3654,
              "end": 3655
            },
            "start": 3648,
            "end": 3655
          },
          "start": 3543,
          "end": 3656
        },
        "declare": false,
        "start": 3492,
        "end": 3656
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3485,
      "end": 3656
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequiredPropertyKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 3669,
          "end": 3689
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
                "start": 3690,
                "end": 3691
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3700,
                  "end": 3711
                },
                "typeArguments": null,
                "start": 3700,
                "end": 3711
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3690,
              "end": 3711
            }
          ],
          "start": 3689,
          "end": 3712
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 3721,
              "end": 3725
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
                    "start": 3726,
                    "end": 3727
                  },
                  "typeArguments": null,
                  "start": 3726,
                  "end": 3727
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyOptionalPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3729,
                        "end": 3757
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
                              "start": 3758,
                              "end": 3759
                            },
                            "typeArguments": null,
                            "start": 3758,
                            "end": 3759
                          }
                        ],
                        "start": 3757,
                        "end": 3760
                      },
                      "start": 3729,
                      "end": 3760
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3763,
                        "end": 3783
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
                              "start": 3784,
                              "end": 3785
                            },
                            "typeArguments": null,
                            "start": 3784,
                            "end": 3785
                          }
                        ],
                        "start": 3783,
                        "end": 3786
                      },
                      "start": 3763,
                      "end": 3786
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OptionalPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3789,
                        "end": 3809
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
                              "start": 3810,
                              "end": 3811
                            },
                            "typeArguments": null,
                            "start": 3810,
                            "end": 3811
                          }
                        ],
                        "start": 3809,
                        "end": 3812
                      },
                      "start": 3789,
                      "end": 3812
                    }
                  ],
                  "start": 3729,
                  "end": 3812
                }
              ],
              "start": 3725,
              "end": 3813
            },
            "start": 3721,
            "end": 3813
          },
          "start": 3715,
          "end": 3813
        },
        "declare": false,
        "start": 3664,
        "end": 3813
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3657,
      "end": 3813
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesReducer",
          "optional": false,
          "typeAnnotation": null,
          "start": 3826,
          "end": 3843
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
                "start": 3844,
                "end": 3845
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3854,
                  "end": 3865
                },
                "typeArguments": null,
                "start": 3854,
                "end": 3865
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3844,
              "end": 3865
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 3867,
                "end": 3868
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3877,
                  "end": 3883
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 3890,
                        "end": 3893
                      },
                      "start": 3884,
                      "end": 3893
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 3895,
                      "end": 3902
                    }
                  ],
                  "start": 3883,
                  "end": 3903
                },
                "start": 3877,
                "end": 3903
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3867,
              "end": 3903
            }
          ],
          "start": 3843,
          "end": 3904
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Evaluate",
            "optional": false,
            "typeAnnotation": null,
            "start": 3907,
            "end": 3915
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3922,
                      "end": 3930
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3931,
                            "end": 3938
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
                                  "start": 3939,
                                  "end": 3943
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
                                        "start": 3944,
                                        "end": 3945
                                      },
                                      "typeArguments": null,
                                      "start": 3944,
                                      "end": 3945
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ReadonlyOptionalPropertyKeys",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3947,
                                        "end": 3975
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
                                              "start": 3976,
                                              "end": 3977
                                            },
                                            "typeArguments": null,
                                            "start": 3976,
                                            "end": 3977
                                          }
                                        ],
                                        "start": 3975,
                                        "end": 3978
                                      },
                                      "start": 3947,
                                      "end": 3978
                                    }
                                  ],
                                  "start": 3943,
                                  "end": 3979
                                },
                                "start": 3939,
                                "end": 3979
                              }
                            ],
                            "start": 3938,
                            "end": 3980
                          },
                          "start": 3931,
                          "end": 3980
                        }
                      ],
                      "start": 3930,
                      "end": 3981
                    },
                    "start": 3922,
                    "end": 3981
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3988,
                      "end": 3996
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
                            "start": 3997,
                            "end": 4001
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
                                  "start": 4002,
                                  "end": 4003
                                },
                                "typeArguments": null,
                                "start": 4002,
                                "end": 4003
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ReadonlyPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4005,
                                  "end": 4025
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
                                        "start": 4026,
                                        "end": 4027
                                      },
                                      "typeArguments": null,
                                      "start": 4026,
                                      "end": 4027
                                    }
                                  ],
                                  "start": 4025,
                                  "end": 4028
                                },
                                "start": 4005,
                                "end": 4028
                              }
                            ],
                            "start": 4001,
                            "end": 4029
                          },
                          "start": 3997,
                          "end": 4029
                        }
                      ],
                      "start": 3996,
                      "end": 4030
                    },
                    "start": 3988,
                    "end": 4030
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4037,
                      "end": 4044
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
                            "start": 4045,
                            "end": 4049
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
                                  "start": 4050,
                                  "end": 4051
                                },
                                "typeArguments": null,
                                "start": 4050,
                                "end": 4051
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OptionalPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4053,
                                  "end": 4073
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
                                        "start": 4074,
                                        "end": 4075
                                      },
                                      "typeArguments": null,
                                      "start": 4074,
                                      "end": 4075
                                    }
                                  ],
                                  "start": 4073,
                                  "end": 4076
                                },
                                "start": 4053,
                                "end": 4076
                              }
                            ],
                            "start": 4049,
                            "end": 4077
                          },
                          "start": 4045,
                          "end": 4077
                        }
                      ],
                      "start": 4044,
                      "end": 4078
                    },
                    "start": 4037,
                    "end": 4078
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4085,
                      "end": 4093
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
                            "start": 4094,
                            "end": 4098
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
                                  "start": 4099,
                                  "end": 4100
                                },
                                "typeArguments": null,
                                "start": 4099,
                                "end": 4100
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "RequiredPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4102,
                                  "end": 4122
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
                                        "start": 4123,
                                        "end": 4124
                                      },
                                      "typeArguments": null,
                                      "start": 4123,
                                      "end": 4124
                                    }
                                  ],
                                  "start": 4122,
                                  "end": 4125
                                },
                                "start": 4102,
                                "end": 4125
                              }
                            ],
                            "start": 4098,
                            "end": 4126
                          },
                          "start": 4094,
                          "end": 4126
                        }
                      ],
                      "start": 4093,
                      "end": 4127
                    },
                    "start": 4085,
                    "end": 4127
                  }
                ],
                "start": 3922,
                "end": 4127
              }
            ],
            "start": 3915,
            "end": 4130
          },
          "start": 3907,
          "end": 4130
        },
        "declare": false,
        "start": 3821,
        "end": 4130
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3814,
      "end": 4130
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesReduce",
          "optional": false,
          "typeAnnotation": null,
          "start": 4143,
          "end": 4159
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
                "start": 4160,
                "end": 4161
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4170,
                  "end": 4181
                },
                "typeArguments": null,
                "start": 4170,
                "end": 4181
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4160,
              "end": 4181
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4183,
                "end": 4184
              },
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4193,
                  "end": 4200
                },
                "start": 4193,
                "end": 4202
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4183,
              "end": 4202
            }
          ],
          "start": 4159,
          "end": 4203
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertiesReducer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4206,
            "end": 4223
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
                  "start": 4224,
                  "end": 4225
                },
                "typeArguments": null,
                "start": 4224,
                "end": 4225
              },
              {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4234,
                  "end": 4235
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
                      "start": 4245,
                      "end": 4246
                    },
                    "typeArguments": null,
                    "start": 4245,
                    "end": 4246
                  },
                  "start": 4239,
                  "end": 4246
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4249,
                    "end": 4255
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
                            "start": 4256,
                            "end": 4257
                          },
                          "typeArguments": null,
                          "start": 4256,
                          "end": 4257
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4258,
                            "end": 4259
                          },
                          "typeArguments": null,
                          "start": 4258,
                          "end": 4259
                        },
                        "start": 4256,
                        "end": 4260
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4262,
                          "end": 4263
                        },
                        "typeArguments": null,
                        "start": 4262,
                        "end": 4263
                      }
                    ],
                    "start": 4255,
                    "end": 4264
                  },
                  "start": 4249,
                  "end": 4264
                },
                "optional": false,
                "readonly": null,
                "start": 4227,
                "end": 4266
              }
            ],
            "start": 4223,
            "end": 4267
          },
          "start": 4206,
          "end": 4267
        },
        "declare": false,
        "start": 4138,
        "end": 4267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4131,
      "end": 4267
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TPropertyKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 4280,
          "end": 4292
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 4295,
              "end": 4301
            },
            {
              "type": "TSNumberKeyword",
              "start": 4304,
              "end": 4310
            }
          ],
          "start": 4295,
          "end": 4310
        },
        "declare": false,
        "start": 4275,
        "end": 4310
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4268,
      "end": 4310
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 4323,
          "end": 4334
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 4337,
            "end": 4343
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPropertyKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4344,
                  "end": 4356
                },
                "typeArguments": null,
                "start": 4344,
                "end": 4356
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4358,
                  "end": 4365
                },
                "typeArguments": null,
                "start": 4358,
                "end": 4365
              }
            ],
            "start": 4343,
            "end": 4366
          },
          "start": 4337,
          "end": 4366
        },
        "declare": false,
        "start": 4318,
        "end": 4366
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4311,
      "end": 4366
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 4384,
          "end": 4391
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
                "start": 4392,
                "end": 4393
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4402,
                  "end": 4413
                },
                "typeArguments": null,
                "start": 4402,
                "end": 4413
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4416,
                  "end": 4427
                },
                "typeArguments": null,
                "start": 4416,
                "end": 4427
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4392,
              "end": 4427
            }
          ],
          "start": 4391,
          "end": 4428
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 4437,
              "end": 4444
            },
            "typeArguments": null,
            "start": 4437,
            "end": 4444
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 4452,
                "end": 4456
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Object",
                    "raw": "'Object'",
                    "start": 4459,
                    "end": 4467
                  },
                  "start": 4459,
                  "end": 4467
                },
                "start": 4457,
                "end": 4467
              },
              "accessibility": null,
              "static": false,
              "start": 4451,
              "end": 4467
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 4472,
                "end": 4478
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropertiesReduce",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4480,
                    "end": 4496
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
                          "start": 4497,
                          "end": 4498
                        },
                        "typeArguments": null,
                        "start": 4497,
                        "end": 4498
                      },
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSThisType",
                          "start": 4500,
                          "end": 4504
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "params",
                            "raw": "'params'",
                            "start": 4505,
                            "end": 4513
                          },
                          "start": 4505,
                          "end": 4513
                        },
                        "start": 4500,
                        "end": 4514
                      }
                    ],
                    "start": 4496,
                    "end": 4515
                  },
                  "start": 4480,
                  "end": 4515
                },
                "start": 4478,
                "end": 4515
              },
              "accessibility": null,
              "static": false,
              "start": 4472,
              "end": 4515
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 4520,
                "end": 4524
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "object",
                    "raw": "'object'",
                    "start": 4526,
                    "end": 4534
                  },
                  "start": 4526,
                  "end": 4534
                },
                "start": 4524,
                "end": 4534
              },
              "accessibility": null,
              "static": false,
              "start": 4520,
              "end": 4534
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "properties",
                "optional": false,
                "typeAnnotation": null,
                "start": 4539,
                "end": 4549
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
                    "start": 4551,
                    "end": 4552
                  },
                  "typeArguments": null,
                  "start": 4551,
                  "end": 4552
                },
                "start": 4549,
                "end": 4552
              },
              "accessibility": null,
              "static": false,
              "start": 4539,
              "end": 4552
            }
          ],
          "start": 4445,
          "end": 4554
        },
        "declare": false,
        "start": 4374,
        "end": 4554
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4367,
      "end": 4554
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Static",
          "optional": false,
          "typeAnnotation": null,
          "start": 4568,
          "end": 4574
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
                "start": 4575,
                "end": 4576
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4585,
                  "end": 4592
                },
                "typeArguments": null,
                "start": 4585,
                "end": 4592
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4575,
              "end": 4592
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4594,
                "end": 4595
              },
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4604,
                  "end": 4611
                },
                "start": 4604,
                "end": 4613
              },
              "default": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 4616,
                "end": 4618
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4594,
              "end": 4618
            }
          ],
          "start": 4574,
          "end": 4619
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4623,
                  "end": 4624
                },
                "typeArguments": null,
                "start": 4623,
                "end": 4624
              },
              {
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
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4629,
                      "end": 4635
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4637,
                          "end": 4638
                        },
                        "typeArguments": null,
                        "start": 4637,
                        "end": 4638
                      },
                      "start": 4635,
                      "end": 4638
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4629,
                    "end": 4639
                  }
                ],
                "start": 4627,
                "end": 4641
              }
            ],
            "start": 4623,
            "end": 4641
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "static",
              "raw": "'static'",
              "start": 4643,
              "end": 4651
            },
            "start": 4643,
            "end": 4651
          },
          "start": 4622,
          "end": 4652
        },
        "declare": false,
        "start": 4563,
        "end": 4652
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4556,
      "end": 4652
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 4672,
        "end": 4676
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 4692,
              "end": 4698
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
                    "start": 4699,
                    "end": 4700
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4709,
                      "end": 4720
                    },
                    "typeArguments": null,
                    "start": 4709,
                    "end": 4720
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4699,
                  "end": 4720
                }
              ],
              "start": 4698,
              "end": 4721
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
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
                      "start": 4730,
                      "end": 4731
                    },
                    "typeArguments": null,
                    "start": 4730,
                    "end": 4731
                  },
                  "start": 4728,
                  "end": 4731
                },
                "start": 4722,
                "end": 4731
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4734,
                  "end": 4741
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
                        "start": 4742,
                        "end": 4743
                      },
                      "typeArguments": null,
                      "start": 4742,
                      "end": 4743
                    }
                  ],
                  "start": 4741,
                  "end": 4744
                },
                "start": 4734,
                "end": 4744
              },
              "start": 4732,
              "end": 4744
            },
            "body": null,
            "expression": false,
            "start": 4683,
            "end": 4744
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null,
              "start": 4758,
              "end": 4764
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4768,
                  "end": 4775
                },
                "typeArguments": null,
                "start": 4768,
                "end": 4775
              },
              "start": 4766,
              "end": 4775
            },
            "body": null,
            "expression": false,
            "start": 4749,
            "end": 4775
          }
        ],
        "start": 4677,
        "end": 4777
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 4654,
      "end": 4777
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 4777
}
```
