__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 4777,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "Id",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 42,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 46,
        "end": 74,
        "key": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 54,
          "end": 61,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 60,
            "end": 61,
            "typeName": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 64,
          "end": 72,
          "typeName": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "Id",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 66,
            "end": 72,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 67,
                "end": 71,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 69,
                  "end": 70,
                  "typeName": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 86,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 89,
        "end": 141,
        "typeName": {
          "type": "Identifier",
          "start": 89,
          "end": 91,
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 91,
          "end": 141,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 92,
              "end": 140,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 94,
                  "end": 138,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 97,
                      "end": 138,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 99,
                          "end": 136,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 100,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 100,
                            "end": 136,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 102,
                              "end": 136,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 104,
                                  "end": 134,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 104,
                                    "end": 105,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 105,
                                    "end": 134,
                                    "typeAnnotation": {
                                      "type": "TSTypeLiteral",
                                      "start": 107,
                                      "end": 134,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 109,
                                          "end": 132,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 109,
                                            "end": 110,
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 110,
                                            "end": 132,
                                            "typeAnnotation": {
                                              "type": "TSTypeLiteral",
                                              "start": 112,
                                              "end": 132,
                                              "members": [
                                                {
                                                  "type": "TSPropertySignature",
                                                  "start": 114,
                                                  "end": 130,
                                                  "computed": false,
                                                  "optional": false,
                                                  "readonly": false,
                                                  "key": {
                                                    "type": "Identifier",
                                                    "start": 114,
                                                    "end": 115,
                                                    "decorators": [],
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "start": 115,
                                                    "end": 130,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeLiteral",
                                                      "start": 117,
                                                      "end": 130,
                                                      "members": [
                                                        {
                                                          "type": "TSPropertySignature",
                                                          "start": 119,
                                                          "end": 128,
                                                          "computed": false,
                                                          "optional": false,
                                                          "readonly": false,
                                                          "key": {
                                                            "type": "Identifier",
                                                            "start": 119,
                                                            "end": 120,
                                                            "decorators": [],
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "start": 120,
                                                            "end": 128,
                                                            "typeAnnotation": {
                                                              "type": "TSNumberKeyword",
                                                              "start": 122,
                                                              "end": 128
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
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 143,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 152,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 155,
        "end": 207,
        "typeName": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 157,
          "end": 207,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 158,
              "end": 206,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 160,
                  "end": 204,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 161,
                    "end": 204,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 163,
                      "end": 204,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 165,
                          "end": 202,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 166,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 166,
                            "end": 202,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 168,
                              "end": 202,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 170,
                                  "end": 200,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 170,
                                    "end": 171,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 171,
                                    "end": 200,
                                    "typeAnnotation": {
                                      "type": "TSTypeLiteral",
                                      "start": 173,
                                      "end": 200,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 175,
                                          "end": 198,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 175,
                                            "end": 176,
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 176,
                                            "end": 198,
                                            "typeAnnotation": {
                                              "type": "TSTypeLiteral",
                                              "start": 178,
                                              "end": 198,
                                              "members": [
                                                {
                                                  "type": "TSPropertySignature",
                                                  "start": 180,
                                                  "end": 196,
                                                  "computed": false,
                                                  "optional": false,
                                                  "readonly": false,
                                                  "key": {
                                                    "type": "Identifier",
                                                    "start": 180,
                                                    "end": 181,
                                                    "decorators": [],
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "start": 181,
                                                    "end": 196,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeLiteral",
                                                      "start": 183,
                                                      "end": 196,
                                                      "members": [
                                                        {
                                                          "type": "TSPropertySignature",
                                                          "start": 185,
                                                          "end": 194,
                                                          "computed": false,
                                                          "optional": false,
                                                          "readonly": false,
                                                          "key": {
                                                            "type": "Identifier",
                                                            "start": 185,
                                                            "end": 186,
                                                            "decorators": [],
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "start": 186,
                                                            "end": 194,
                                                            "typeAnnotation": {
                                                              "type": "TSStringKeyword",
                                                              "start": 188,
                                                              "end": 194
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
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 235,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 234,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 230,
                "end": 234,
                "typeName": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 234,
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 260,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 252,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 252,
                "typeName": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 252,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 255,
            "end": 259,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 281,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 289,
        "decorators": [],
        "name": "Id2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 289,
        "end": 292,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 290,
            "end": 291,
            "name": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 295,
        "end": 329,
        "key": {
          "type": "Identifier",
          "start": 298,
          "end": 299,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 303,
          "end": 310,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 309,
            "end": 310,
            "typeName": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 313,
          "end": 327,
          "typeName": {
            "type": "Identifier",
            "start": 313,
            "end": 316,
            "decorators": [],
            "name": "Id2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 316,
            "end": 327,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 317,
                "end": 326,
                "typeName": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 320,
                  "decorators": [],
                  "name": "Id2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 320,
                  "end": 326,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 321,
                      "end": 325,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 321,
                        "end": 322,
                        "typeName": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 323,
                        "end": 324,
                        "typeName": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 324,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 332,
      "end": 398,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 341,
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 344,
        "end": 397,
        "typeName": {
          "type": "Identifier",
          "start": 344,
          "end": 347,
          "decorators": [],
          "name": "Id2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 347,
          "end": 397,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 348,
              "end": 396,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 350,
                  "end": 394,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 351,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 394,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 353,
                      "end": 394,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 355,
                          "end": 392,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 355,
                            "end": 356,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 356,
                            "end": 392,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 358,
                              "end": 392,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 360,
                                  "end": 390,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 360,
                                    "end": 361,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 361,
                                    "end": 390,
                                    "typeAnnotation": {
                                      "type": "TSTypeLiteral",
                                      "start": 363,
                                      "end": 390,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 365,
                                          "end": 388,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 365,
                                            "end": 366,
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 366,
                                            "end": 388,
                                            "typeAnnotation": {
                                              "type": "TSTypeLiteral",
                                              "start": 368,
                                              "end": 388,
                                              "members": [
                                                {
                                                  "type": "TSPropertySignature",
                                                  "start": 370,
                                                  "end": 386,
                                                  "computed": false,
                                                  "optional": false,
                                                  "readonly": false,
                                                  "key": {
                                                    "type": "Identifier",
                                                    "start": 370,
                                                    "end": 371,
                                                    "decorators": [],
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "start": 371,
                                                    "end": 386,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeLiteral",
                                                      "start": 373,
                                                      "end": 386,
                                                      "members": [
                                                        {
                                                          "type": "TSPropertySignature",
                                                          "start": 375,
                                                          "end": 384,
                                                          "computed": false,
                                                          "optional": false,
                                                          "readonly": false,
                                                          "key": {
                                                            "type": "Identifier",
                                                            "start": 375,
                                                            "end": 376,
                                                            "decorators": [],
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "start": 376,
                                                            "end": 384,
                                                            "typeAnnotation": {
                                                              "type": "TSNumberKeyword",
                                                              "start": 378,
                                                              "end": 384
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
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 399,
      "end": 465,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 411,
        "end": 464,
        "typeName": {
          "type": "Identifier",
          "start": 411,
          "end": 414,
          "decorators": [],
          "name": "Id2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 414,
          "end": 464,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 415,
              "end": 463,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 417,
                  "end": 461,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 418,
                    "end": 461,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 420,
                      "end": 461,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 422,
                          "end": 459,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 422,
                            "end": 423,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 423,
                            "end": 459,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 425,
                              "end": 459,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 427,
                                  "end": 457,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 427,
                                    "end": 428,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 428,
                                    "end": 457,
                                    "typeAnnotation": {
                                      "type": "TSTypeLiteral",
                                      "start": 430,
                                      "end": 457,
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "start": 432,
                                          "end": 455,
                                          "computed": false,
                                          "optional": false,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 432,
                                            "end": 433,
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 433,
                                            "end": 455,
                                            "typeAnnotation": {
                                              "type": "TSTypeLiteral",
                                              "start": 435,
                                              "end": 455,
                                              "members": [
                                                {
                                                  "type": "TSPropertySignature",
                                                  "start": 437,
                                                  "end": 453,
                                                  "computed": false,
                                                  "optional": false,
                                                  "readonly": false,
                                                  "key": {
                                                    "type": "Identifier",
                                                    "start": 437,
                                                    "end": 438,
                                                    "decorators": [],
                                                    "name": "b",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "start": 438,
                                                    "end": 453,
                                                    "typeAnnotation": {
                                                      "type": "TSTypeLiteral",
                                                      "start": 440,
                                                      "end": 453,
                                                      "members": [
                                                        {
                                                          "type": "TSPropertySignature",
                                                          "start": 442,
                                                          "end": 451,
                                                          "computed": false,
                                                          "optional": false,
                                                          "readonly": false,
                                                          "key": {
                                                            "type": "Identifier",
                                                            "start": 442,
                                                            "end": 443,
                                                            "decorators": [],
                                                            "name": "c",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "start": 443,
                                                            "end": 451,
                                                            "typeAnnotation": {
                                                              "type": "TSStringKeyword",
                                                              "start": 445,
                                                              "end": 451
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
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 467,
      "end": 492,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 491,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 491,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 491,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 487,
                "end": 491,
                "typeName": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 491,
                  "decorators": [],
                  "name": "Foo3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 493,
      "end": 517,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 509,
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 503,
              "end": 509,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 505,
                "end": 509,
                "typeName": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 509,
                  "decorators": [],
                  "name": "Foo4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 512,
            "end": 516,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 576,
      "end": 640,
      "id": {
        "type": "Identifier",
        "start": 581,
        "end": 593,
        "decorators": [],
        "name": "RequiredDeep",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 593,
        "end": 596,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 594,
            "end": 595,
            "name": {
              "type": "Identifier",
              "start": 594,
              "end": 595,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 599,
        "end": 639,
        "key": {
          "type": "Identifier",
          "start": 602,
          "end": 603,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 607,
          "end": 614,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 613,
            "end": 614,
            "typeName": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 619,
          "end": 637,
          "typeName": {
            "type": "Identifier",
            "start": 619,
            "end": 631,
            "decorators": [],
            "name": "RequiredDeep",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 631,
            "end": 637,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 632,
                "end": 636,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 632,
                  "end": 633,
                  "typeName": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 634,
                  "end": 635,
                  "typeName": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 635,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": "-",
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 642,
      "end": 686,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 648,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 651,
        "end": 686,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 653,
            "end": 685,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 655,
              "end": 685,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 657,
                "end": 685,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 659,
                    "end": 684,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 659,
                      "end": 660,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 660,
                      "end": 684,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 662,
                        "end": 684,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 664,
                            "end": 682,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 664,
                              "end": 665,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 665,
                              "end": 682,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 667,
                                "end": 682,
                                "types": [
                                  {
                                    "type": "TSLiteralType",
                                    "start": 667,
                                    "end": 668,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 667,
                                      "end": 668,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 671,
                                    "end": 682,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 673,
                                        "end": 680,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 673,
                                          "end": 674,
                                          "decorators": [],
                                          "name": "d",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 674,
                                          "end": 680,
                                          "typeAnnotation": {
                                            "type": "TSLiteralType",
                                            "start": 676,
                                            "end": 680,
                                            "literal": {
                                              "type": "Literal",
                                              "start": 676,
                                              "end": 680,
                                              "value": 2000,
                                              "raw": "2000"
                                            }
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 687,
      "end": 751,
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 693,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 696,
        "end": 751,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 698,
            "end": 750,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 698,
              "end": 699,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 700,
              "end": 750,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 702,
                "end": 750,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 704,
                    "end": 749,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 704,
                      "end": 705,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 705,
                      "end": 749,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 707,
                        "end": 749,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 709,
                            "end": 739,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 709,
                              "end": 710,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 710,
                              "end": 738,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 712,
                                "end": 738,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 714,
                                    "end": 737,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 714,
                                      "end": 715,
                                      "decorators": [],
                                      "name": "d",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 715,
                                      "end": 737,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 717,
                                        "end": 737,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 719,
                                            "end": 736,
                                            "computed": false,
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 719,
                                              "end": 720,
                                              "decorators": [],
                                              "name": "e",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 720,
                                              "end": 736,
                                              "typeAnnotation": {
                                                "type": "TSTypeLiteral",
                                                "start": 722,
                                                "end": 736,
                                                "members": [
                                                  {
                                                    "type": "TSPropertySignature",
                                                    "start": 724,
                                                    "end": 735,
                                                    "computed": false,
                                                    "optional": false,
                                                    "readonly": false,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "start": 724,
                                                      "end": 725,
                                                      "decorators": [],
                                                      "name": "f",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "typeAnnotation": {
                                                      "type": "TSTypeAnnotation",
                                                      "start": 725,
                                                      "end": 735,
                                                      "typeAnnotation": {
                                                        "type": "TSTypeLiteral",
                                                        "start": 727,
                                                        "end": 735,
                                                        "members": [
                                                          {
                                                            "type": "TSPropertySignature",
                                                            "start": 729,
                                                            "end": 733,
                                                            "computed": false,
                                                            "optional": false,
                                                            "readonly": false,
                                                            "key": {
                                                              "type": "Identifier",
                                                              "start": 729,
                                                              "end": 730,
                                                              "decorators": [],
                                                              "name": "g",
                                                              "optional": false,
                                                              "typeAnnotation": null
                                                            },
                                                            "typeAnnotation": {
                                                              "type": "TSTypeAnnotation",
                                                              "start": 730,
                                                              "end": 733,
                                                              "typeAnnotation": {
                                                                "type": "TSLiteralType",
                                                                "start": 732,
                                                                "end": 733,
                                                                "literal": {
                                                                  "type": "Literal",
                                                                  "start": 732,
                                                                  "end": 733,
                                                                  "value": 2,
                                                                  "raw": "2"
                                                                }
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
                            "start": 740,
                            "end": 747,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 740,
                              "end": 741,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 741,
                              "end": 747,
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "start": 743,
                                "end": 747,
                                "literal": {
                                  "type": "Literal",
                                  "start": 743,
                                  "end": 747,
                                  "value": 1000,
                                  "raw": "1000"
                                }
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
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 753,
      "end": 778,
      "id": {
        "type": "Identifier",
        "start": 758,
        "end": 759,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 762,
        "end": 777,
        "typeName": {
          "type": "Identifier",
          "start": 762,
          "end": 774,
          "decorators": [],
          "name": "RequiredDeep",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 774,
          "end": 777,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 775,
              "end": 776,
              "typeName": {
                "type": "Identifier",
                "start": 775,
                "end": 776,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
      "start": 779,
      "end": 804,
      "id": {
        "type": "Identifier",
        "start": 784,
        "end": 785,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 788,
        "end": 803,
        "typeName": {
          "type": "Identifier",
          "start": 788,
          "end": 800,
          "decorators": [],
          "name": "RequiredDeep",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 800,
          "end": 803,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 801,
              "end": 802,
              "typeName": {
                "type": "Identifier",
                "start": 801,
                "end": 802,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
      "start": 806,
      "end": 856,
      "id": {
        "type": "Identifier",
        "start": 811,
        "end": 816,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 819,
        "end": 855,
        "checkType": {
          "type": "TSTupleType",
          "start": 819,
          "end": 825,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 820,
              "end": 821,
              "typeName": {
                "type": "Identifier",
                "start": 820,
                "end": 821,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 823,
              "end": 824,
              "typeName": {
                "type": "Identifier",
                "start": 823,
                "end": 824,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 834,
          "end": 840,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 835,
              "end": 836,
              "typeName": {
                "type": "Identifier",
                "start": 835,
                "end": 836,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 838,
              "end": 839,
              "typeName": {
                "type": "Identifier",
                "start": 838,
                "end": 839,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 843,
          "end": 847,
          "literal": {
            "type": "Literal",
            "start": 843,
            "end": 847,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 850,
          "end": 855,
          "literal": {
            "type": "Literal",
            "start": 850,
            "end": 855,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 867,
      "end": 907,
      "id": {
        "type": "Identifier",
        "start": 872,
        "end": 877,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 880,
        "end": 906,
        "checkType": {
          "type": "TSTypeReference",
          "start": 880,
          "end": 881,
          "typeName": {
            "type": "Identifier",
            "start": 880,
            "end": 881,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 890,
          "end": 891,
          "typeName": {
            "type": "Identifier",
            "start": 890,
            "end": 891,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 894,
          "end": 898,
          "literal": {
            "type": "Literal",
            "start": 894,
            "end": 898,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 901,
          "end": 906,
          "literal": {
            "type": "Literal",
            "start": 901,
            "end": 906,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 918,
      "end": 958,
      "id": {
        "type": "Identifier",
        "start": 923,
        "end": 928,
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 931,
        "end": 957,
        "checkType": {
          "type": "TSTypeReference",
          "start": 931,
          "end": 932,
          "typeName": {
            "type": "Identifier",
            "start": 931,
            "end": 932,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 941,
          "end": 942,
          "typeName": {
            "type": "Identifier",
            "start": 941,
            "end": 942,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 945,
          "end": 949,
          "literal": {
            "type": "Literal",
            "start": 945,
            "end": 949,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 952,
          "end": 957,
          "literal": {
            "type": "Literal",
            "start": 952,
            "end": 957,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1326,
      "end": 1455,
      "id": {
        "type": "Identifier",
        "start": 1331,
        "end": 1343,
        "decorators": [],
        "name": "NestedRecord",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1343,
        "end": 1364,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1344,
            "end": 1360,
            "name": {
              "type": "Identifier",
              "start": 1344,
              "end": 1345,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1354,
              "end": 1360
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1362,
            "end": 1363,
            "name": {
              "type": "Identifier",
              "start": 1362,
              "end": 1363,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1367,
        "end": 1454,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1367,
          "end": 1368,
          "typeName": {
            "type": "Identifier",
            "start": 1367,
            "end": 1368,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 1377,
          "end": 1402,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1377,
              "end": 1380,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1388,
              "end": 1392,
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 1400,
              "end": 1402,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 1380,
              "end": 1388,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1386,
                "end": 1388,
                "name": {
                  "type": "Identifier",
                  "start": 1386,
                  "end": 1388,
                  "decorators": [],
                  "name": "K0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 1392,
              "end": 1400,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1398,
                "end": 1400,
                "name": {
                  "type": "Identifier",
                  "start": 1398,
                  "end": 1400,
                  "decorators": [],
                  "name": "KR",
                  "optional": false,
                  "typeAnnotation": null
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
          "type": "TSMappedType",
          "start": 1405,
          "end": 1439,
          "key": {
            "type": "Identifier",
            "start": 1408,
            "end": 1409,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 1413,
            "end": 1415,
            "typeName": {
              "type": "Identifier",
              "start": 1413,
              "end": 1415,
              "decorators": [],
              "name": "K0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1418,
            "end": 1437,
            "typeName": {
              "type": "Identifier",
              "start": 1418,
              "end": 1430,
              "decorators": [],
              "name": "NestedRecord",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1430,
              "end": 1437,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1431,
                  "end": 1433,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1431,
                    "end": 1433,
                    "decorators": [],
                    "name": "KR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1435,
                  "end": 1436,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1435,
                    "end": 1436,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "optional": false,
          "readonly": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1442,
          "end": 1454,
          "typeName": {
            "type": "Identifier",
            "start": 1442,
            "end": 1448,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1448,
            "end": 1454,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1449,
                "end": 1450,
                "typeName": {
                  "type": "Identifier",
                  "start": 1449,
                  "end": 1450,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1452,
                "end": 1453,
                "typeName": {
                  "type": "Identifier",
                  "start": 1452,
                  "end": 1453,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1457,
      "end": 1505,
      "id": {
        "type": "Identifier",
        "start": 1462,
        "end": 1466,
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1469,
        "end": 1504,
        "typeName": {
          "type": "Identifier",
          "start": 1469,
          "end": 1481,
          "decorators": [],
          "name": "NestedRecord",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1481,
          "end": 1504,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1482,
              "end": 1495,
              "literal": {
                "type": "Literal",
                "start": 1482,
                "end": 1495,
                "value": "x.y.z.a.b.c",
                "raw": "\"x.y.z.a.b.c\""
              }
            },
            {
              "type": "TSNumberKeyword",
              "start": 1497,
              "end": 1503
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1506,
      "end": 1554,
      "id": {
        "type": "Identifier",
        "start": 1511,
        "end": 1515,
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1518,
        "end": 1553,
        "typeName": {
          "type": "Identifier",
          "start": 1518,
          "end": 1530,
          "decorators": [],
          "name": "NestedRecord",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1530,
          "end": 1553,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1531,
              "end": 1544,
              "literal": {
                "type": "Literal",
                "start": 1531,
                "end": 1544,
                "value": "x.y.z.a.b.c",
                "raw": "\"x.y.z.a.b.c\""
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 1546,
              "end": 1552
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1556,
      "end": 1581,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1570,
          "end": 1580,
          "id": {
            "type": "Identifier",
            "start": 1570,
            "end": 1580,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1574,
              "end": 1580,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1576,
                "end": 1580,
                "typeName": {
                  "type": "Identifier",
                  "start": 1576,
                  "end": 1580,
                  "decorators": [],
                  "name": "Bar1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1582,
      "end": 1606,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1588,
          "end": 1605,
          "id": {
            "type": "Identifier",
            "start": 1588,
            "end": 1598,
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1592,
              "end": 1598,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1594,
                "end": 1598,
                "typeName": {
                  "type": "Identifier",
                  "start": 1594,
                  "end": 1598,
                  "decorators": [],
                  "name": "Bar2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1601,
            "end": 1605,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1649,
      "end": 1689,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1656,
        "end": 1689,
        "id": {
          "type": "Identifier",
          "start": 1661,
          "end": 1666,
          "decorators": [],
          "name": "Input",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1669,
          "end": 1689,
          "typeName": {
            "type": "Identifier",
            "start": 1669,
            "end": 1675,
            "decorators": [],
            "name": "Static",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1675,
            "end": 1689,
            "params": [
              {
                "type": "TSTypeQuery",
                "start": 1676,
                "end": 1688,
                "exprName": {
                  "type": "Identifier",
                  "start": 1683,
                  "end": 1688,
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1690,
      "end": 1833,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1697,
        "end": 1833,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1703,
            "end": 1833,
            "id": {
              "type": "Identifier",
              "start": 1703,
              "end": 1708,
              "decorators": [],
              "name": "Input",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1711,
              "end": 1833,
              "callee": {
                "type": "MemberExpression",
                "start": 1711,
                "end": 1722,
                "object": {
                  "type": "Identifier",
                  "start": 1711,
                  "end": 1715,
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1716,
                  "end": 1722,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1723,
                  "end": 1832,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1729,
                      "end": 1830,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1729,
                        "end": 1735,
                        "decorators": [],
                        "name": "level1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 1737,
                        "end": 1830,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1737,
                          "end": 1748,
                          "object": {
                            "type": "Identifier",
                            "start": 1737,
                            "end": 1741,
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1742,
                            "end": 1748,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 1749,
                            "end": 1829,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 1759,
                                "end": 1823,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 1759,
                                  "end": 1765,
                                  "decorators": [],
                                  "name": "level2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "CallExpression",
                                  "start": 1767,
                                  "end": 1823,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1767,
                                    "end": 1778,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1767,
                                      "end": 1771,
                                      "decorators": [],
                                      "name": "Type",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1772,
                                      "end": 1778,
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ObjectExpression",
                                      "start": 1779,
                                      "end": 1822,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 1793,
                                          "end": 1811,
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1793,
                                            "end": 1796,
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "start": 1798,
                                            "end": 1811,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 1798,
                                              "end": 1809,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 1798,
                                                "end": 1802,
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 1803,
                                                "end": 1809,
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1835,
      "end": 1877,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1842,
        "end": 1877,
        "id": {
          "type": "Identifier",
          "start": 1847,
          "end": 1853,
          "decorators": [],
          "name": "Output",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1856,
          "end": 1877,
          "typeName": {
            "type": "Identifier",
            "start": 1856,
            "end": 1862,
            "decorators": [],
            "name": "Static",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1862,
            "end": 1877,
            "params": [
              {
                "type": "TSTypeQuery",
                "start": 1863,
                "end": 1876,
                "exprName": {
                  "type": "Identifier",
                  "start": 1870,
                  "end": 1876,
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1878,
      "end": 2054,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1885,
        "end": 2054,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1891,
            "end": 2054,
            "id": {
              "type": "Identifier",
              "start": 1891,
              "end": 1897,
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1900,
              "end": 2054,
              "callee": {
                "type": "MemberExpression",
                "start": 1900,
                "end": 1911,
                "object": {
                  "type": "Identifier",
                  "start": 1900,
                  "end": 1904,
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1905,
                  "end": 1911,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 1912,
                  "end": 2053,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1918,
                      "end": 2051,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1918,
                        "end": 1924,
                        "decorators": [],
                        "name": "level1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 1926,
                        "end": 2051,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1926,
                          "end": 1937,
                          "object": {
                            "type": "Identifier",
                            "start": 1926,
                            "end": 1930,
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1931,
                            "end": 1937,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 1938,
                            "end": 2050,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 1948,
                                "end": 2044,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 1948,
                                  "end": 1954,
                                  "decorators": [],
                                  "name": "level2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "CallExpression",
                                  "start": 1956,
                                  "end": 2044,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1956,
                                    "end": 1967,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1956,
                                      "end": 1960,
                                      "decorators": [],
                                      "name": "Type",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1961,
                                      "end": 1967,
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ObjectExpression",
                                      "start": 1968,
                                      "end": 2043,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 1982,
                                          "end": 2000,
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 1982,
                                            "end": 1985,
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "start": 1987,
                                            "end": 2000,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 1987,
                                              "end": 1998,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 1987,
                                                "end": 1991,
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 1992,
                                                "end": 1998,
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        },
                                        {
                                          "type": "Property",
                                          "start": 2014,
                                          "end": 2032,
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 2014,
                                            "end": 2017,
                                            "decorators": [],
                                            "name": "bar",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "start": 2019,
                                            "end": 2032,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 2019,
                                              "end": 2030,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 2019,
                                                "end": 2023,
                                                "decorators": [],
                                                "name": "Type",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 2024,
                                                "end": 2030,
                                                "decorators": [],
                                                "name": "String",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 2056,
      "end": 2139,
      "id": {
        "type": "Identifier",
        "start": 2065,
        "end": 2085,
        "decorators": [],
        "name": "problematicFunction1",
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
          "start": 2086,
          "end": 2098,
          "decorators": [],
          "name": "ors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2089,
            "end": 2098,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 2091,
              "end": 2098,
              "elementType": {
                "type": "TSTypeReference",
                "start": 2091,
                "end": 2096,
                "typeName": {
                  "type": "Identifier",
                  "start": 2091,
                  "end": 2096,
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2099,
        "end": 2109,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 2101,
          "end": 2109,
          "elementType": {
            "type": "TSTypeReference",
            "start": 2101,
            "end": 2107,
            "typeName": {
              "type": "Identifier",
              "start": 2101,
              "end": 2107,
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2110,
        "end": 2139,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2116,
            "end": 2127,
            "argument": {
              "type": "Identifier",
              "start": 2123,
              "end": 2126,
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2141,
      "end": 2237,
      "id": {
        "type": "Identifier",
        "start": 2150,
        "end": 2170,
        "decorators": [],
        "name": "problematicFunction2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2170,
        "end": 2190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2171,
            "end": 2189,
            "name": {
              "type": "Identifier",
              "start": 2171,
              "end": 2172,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 2181,
              "end": 2189,
              "elementType": {
                "type": "TSTypeReference",
                "start": 2181,
                "end": 2187,
                "typeName": {
                  "type": "Identifier",
                  "start": 2181,
                  "end": 2187,
                  "decorators": [],
                  "name": "Output",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
          "start": 2191,
          "end": 2203,
          "decorators": [],
          "name": "ors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2194,
            "end": 2203,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 2196,
              "end": 2203,
              "elementType": {
                "type": "TSTypeReference",
                "start": 2196,
                "end": 2201,
                "typeName": {
                  "type": "Identifier",
                  "start": 2196,
                  "end": 2201,
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2204,
        "end": 2207,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2206,
          "end": 2207,
          "typeName": {
            "type": "Identifier",
            "start": 2206,
            "end": 2207,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2208,
        "end": 2237,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2214,
            "end": 2225,
            "argument": {
              "type": "Identifier",
              "start": 2221,
              "end": 2224,
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2239,
      "end": 2338,
      "id": {
        "type": "Identifier",
        "start": 2248,
        "end": 2268,
        "decorators": [],
        "name": "problematicFunction3",
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
          "start": 2269,
          "end": 2297,
          "decorators": [],
          "name": "ors",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2272,
            "end": 2297,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 2274,
              "end": 2297,
              "elementType": {
                "type": "TSTypeQuery",
                "start": 2275,
                "end": 2294,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 2282,
                  "end": 2294,
                  "left": {
                    "type": "Identifier",
                    "start": 2282,
                    "end": 2287,
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2288,
                    "end": 2294,
                    "decorators": [],
                    "name": "static",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2298,
        "end": 2308,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 2300,
          "end": 2308,
          "elementType": {
            "type": "TSTypeReference",
            "start": 2300,
            "end": 2306,
            "typeName": {
              "type": "Identifier",
              "start": 2300,
              "end": 2306,
              "decorators": [],
              "name": "Output",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2309,
        "end": 2338,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2315,
            "end": 2326,
            "argument": {
              "type": "Identifier",
              "start": 2322,
              "end": 2325,
              "decorators": [],
              "name": "ors",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2340,
      "end": 2418,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2347,
        "end": 2418,
        "id": {
          "type": "Identifier",
          "start": 2352,
          "end": 2360,
          "decorators": [],
          "name": "Evaluate",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2360,
          "end": 2363,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2361,
              "end": 2362,
              "name": {
                "type": "Identifier",
                "start": 2361,
                "end": 2362,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
          "start": 2366,
          "end": 2418,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2366,
            "end": 2367,
            "typeName": {
              "type": "Identifier",
              "start": 2366,
              "end": 2367,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSInferType",
            "start": 2376,
            "end": 2383,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 2382,
              "end": 2383,
              "name": {
                "type": "Identifier",
                "start": 2382,
                "end": 2383,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          },
          "trueType": {
            "type": "TSMappedType",
            "start": 2386,
            "end": 2410,
            "key": {
              "type": "Identifier",
              "start": 2389,
              "end": 2390,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2394,
              "end": 2401,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2400,
                "end": 2401,
                "typeName": {
                  "type": "Identifier",
                  "start": 2400,
                  "end": 2401,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 2404,
              "end": 2408,
              "objectType": {
                "type": "TSTypeReference",
                "start": 2404,
                "end": 2405,
                "typeName": {
                  "type": "Identifier",
                  "start": 2404,
                  "end": 2405,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 2406,
                "end": 2407,
                "typeName": {
                  "type": "Identifier",
                  "start": 2406,
                  "end": 2407,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "readonly": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2413,
            "end": 2418
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2420,
      "end": 2465,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2427,
        "end": 2465,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2441,
            "end": 2464,
            "id": {
              "type": "Identifier",
              "start": 2441,
              "end": 2464,
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2449,
                "end": 2464,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 2451,
                  "end": 2464,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2458,
                    "end": 2464
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2466,
      "end": 2511,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2473,
        "end": 2511,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2487,
            "end": 2510,
            "id": {
              "type": "Identifier",
              "start": 2487,
              "end": 2510,
              "decorators": [],
              "name": "Optional",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2495,
                "end": 2510,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 2497,
                  "end": 2510,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2504,
                    "end": 2510
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2512,
      "end": 2553,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2519,
        "end": 2553,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2533,
            "end": 2552,
            "id": {
              "type": "Identifier",
              "start": 2533,
              "end": 2552,
              "decorators": [],
              "name": "Hint",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2537,
                "end": 2552,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 2539,
                  "end": 2552,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2546,
                    "end": 2552
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2554,
      "end": 2595,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 2561,
        "end": 2595,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2575,
            "end": 2594,
            "id": {
              "type": "Identifier",
              "start": 2575,
              "end": 2594,
              "decorators": [],
              "name": "Kind",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2579,
                "end": 2594,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 2581,
                  "end": 2594,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2588,
                    "end": 2594
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2597,
      "end": 2642,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2604,
        "end": 2642,
        "id": {
          "type": "Identifier",
          "start": 2614,
          "end": 2619,
          "decorators": [],
          "name": "TKind",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 2620,
          "end": 2642,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 2626,
              "end": 2640,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2627,
                "end": 2631,
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2632,
                "end": 2640,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2634,
                  "end": 2640
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2643,
      "end": 2795,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2650,
        "end": 2795,
        "id": {
          "type": "Identifier",
          "start": 2660,
          "end": 2667,
          "decorators": [],
          "name": "TSchema",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 2676,
            "end": 2681,
            "expression": {
              "type": "Identifier",
              "start": 2676,
              "end": 2681,
              "decorators": [],
              "name": "TKind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 2682,
          "end": 2795,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 2688,
              "end": 2707,
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2689,
                "end": 2697,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2699,
                "end": 2707,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2701,
                  "end": 2707
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 2712,
              "end": 2731,
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2713,
                "end": 2721,
                "decorators": [],
                "name": "Optional",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2723,
                "end": 2731,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2725,
                  "end": 2731
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 2736,
              "end": 2751,
              "computed": true,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2737,
                "end": 2741,
                "decorators": [],
                "name": "Hint",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2743,
                "end": 2751,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2745,
                  "end": 2751
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 2756,
              "end": 2773,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2756,
                "end": 2762,
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2762,
                "end": 2773,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 2764,
                  "end": 2773,
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 2764,
                    "end": 2771
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 2778,
              "end": 2793,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2778,
                "end": 2784,
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2784,
                "end": 2793,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 2786,
                  "end": 2793
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2797,
      "end": 2875,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2804,
        "end": 2875,
        "id": {
          "type": "Identifier",
          "start": 2809,
          "end": 2826,
          "decorators": [],
          "name": "TReadonlyOptional",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2826,
          "end": 2845,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2827,
              "end": 2844,
              "name": {
                "type": "Identifier",
                "start": 2827,
                "end": 2828,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2837,
                "end": 2844,
                "typeName": {
                  "type": "Identifier",
                  "start": 2837,
                  "end": 2844,
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null
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
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2848,
          "end": 2875,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2848,
              "end": 2860,
              "typeName": {
                "type": "Identifier",
                "start": 2848,
                "end": 2857,
                "decorators": [],
                "name": "TOptional",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2857,
                "end": 2860,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2858,
                    "end": 2859,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2858,
                      "end": 2859,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2863,
              "end": 2875,
              "typeName": {
                "type": "Identifier",
                "start": 2863,
                "end": 2872,
                "decorators": [],
                "name": "TReadonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2872,
                "end": 2875,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2873,
                    "end": 2874,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2873,
                      "end": 2874,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2876,
      "end": 2949,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2883,
        "end": 2949,
        "id": {
          "type": "Identifier",
          "start": 2888,
          "end": 2897,
          "decorators": [],
          "name": "TReadonly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2897,
          "end": 2916,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2898,
              "end": 2915,
              "name": {
                "type": "Identifier",
                "start": 2898,
                "end": 2899,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2908,
                "end": 2915,
                "typeName": {
                  "type": "Identifier",
                  "start": 2908,
                  "end": 2915,
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null
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
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2919,
          "end": 2949,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2919,
              "end": 2920,
              "typeName": {
                "type": "Identifier",
                "start": 2919,
                "end": 2920,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeLiteral",
              "start": 2923,
              "end": 2949,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2925,
                  "end": 2947,
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2926,
                    "end": 2934,
                    "decorators": [],
                    "name": "Readonly",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2935,
                    "end": 2947,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2937,
                      "end": 2947,
                      "literal": {
                        "type": "Literal",
                        "start": 2937,
                        "end": 2947,
                        "value": "Readonly",
                        "raw": "'Readonly'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2950,
      "end": 3023,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2957,
        "end": 3023,
        "id": {
          "type": "Identifier",
          "start": 2962,
          "end": 2971,
          "decorators": [],
          "name": "TOptional",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2971,
          "end": 2990,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2972,
              "end": 2989,
              "name": {
                "type": "Identifier",
                "start": 2972,
                "end": 2973,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2982,
                "end": 2989,
                "typeName": {
                  "type": "Identifier",
                  "start": 2982,
                  "end": 2989,
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null
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
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2993,
          "end": 3023,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2993,
              "end": 2994,
              "typeName": {
                "type": "Identifier",
                "start": 2993,
                "end": 2994,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeLiteral",
              "start": 2997,
              "end": 3023,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2999,
                  "end": 3021,
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3000,
                    "end": 3008,
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3009,
                    "end": 3021,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3011,
                      "end": 3021,
                      "literal": {
                        "type": "Literal",
                        "start": 3011,
                        "end": 3021,
                        "value": "Optional",
                        "raw": "'Optional'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3025,
      "end": 3131,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 3032,
        "end": 3131,
        "id": {
          "type": "Identifier",
          "start": 3042,
          "end": 3049,
          "decorators": [],
          "name": "TString",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 3058,
            "end": 3065,
            "expression": {
              "type": "Identifier",
              "start": 3058,
              "end": 3065,
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 3066,
          "end": 3131,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 3072,
              "end": 3089,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3073,
                "end": 3077,
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3078,
                "end": 3088,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 3080,
                  "end": 3088,
                  "literal": {
                    "type": "Literal",
                    "start": 3080,
                    "end": 3088,
                    "value": "String",
                    "raw": "'String'"
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3094,
              "end": 3109,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3094,
                "end": 3100,
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3100,
                "end": 3108,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3102,
                  "end": 3108
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3114,
              "end": 3129,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3114,
                "end": 3118,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3118,
                "end": 3128,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 3120,
                  "end": 3128,
                  "literal": {
                    "type": "Literal",
                    "start": 3120,
                    "end": 3128,
                    "value": "string",
                    "raw": "'string'"
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3133,
      "end": 3312,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3140,
        "end": 3312,
        "id": {
          "type": "Identifier",
          "start": 3145,
          "end": 3173,
          "decorators": [],
          "name": "ReadonlyOptionalPropertyKeys",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3173,
          "end": 3196,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3174,
              "end": 3195,
              "name": {
                "type": "Identifier",
                "start": 3174,
                "end": 3175,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3184,
                "end": 3195,
                "typeName": {
                  "type": "Identifier",
                  "start": 3184,
                  "end": 3195,
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null
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
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 3199,
          "end": 3312,
          "objectType": {
            "type": "TSMappedType",
            "start": 3199,
            "end": 3303,
            "key": {
              "type": "Identifier",
              "start": 3202,
              "end": 3203,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3207,
              "end": 3214,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3213,
                "end": 3214,
                "typeName": {
                  "type": "Identifier",
                  "start": 3213,
                  "end": 3214,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 3217,
              "end": 3301,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 3217,
                "end": 3221,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3217,
                  "end": 3218,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3217,
                    "end": 3218,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3219,
                  "end": 3220,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3219,
                    "end": 3220,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 3230,
                "end": 3248,
                "typeName": {
                  "type": "Identifier",
                  "start": 3230,
                  "end": 3239,
                  "decorators": [],
                  "name": "TReadonly",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3239,
                  "end": 3248,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3240,
                      "end": 3247,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3240,
                        "end": 3247,
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "start": 3252,
                "end": 3292,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 3252,
                  "end": 3256,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3252,
                    "end": 3253,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3252,
                      "end": 3253,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3254,
                    "end": 3255,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3254,
                      "end": 3255,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 3265,
                  "end": 3280,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3265,
                    "end": 3274,
                    "decorators": [],
                    "name": "TOptional",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3274,
                    "end": 3280,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 3275,
                        "end": 3279,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 3275,
                          "end": 3276,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3275,
                            "end": 3276,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 3277,
                          "end": 3278,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3277,
                            "end": 3278,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 3283,
                  "end": 3284,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3283,
                    "end": 3284,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 3287,
                  "end": 3292
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3296,
                "end": 3301
              }
            },
            "optional": false,
            "readonly": null
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 3304,
            "end": 3311,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3310,
              "end": 3311,
              "typeName": {
                "type": "Identifier",
                "start": 3310,
                "end": 3311,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3313,
      "end": 3484,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3320,
        "end": 3484,
        "id": {
          "type": "Identifier",
          "start": 3325,
          "end": 3345,
          "decorators": [],
          "name": "ReadonlyPropertyKeys",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3345,
          "end": 3368,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3346,
              "end": 3367,
              "name": {
                "type": "Identifier",
                "start": 3346,
                "end": 3347,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3356,
                "end": 3367,
                "typeName": {
                  "type": "Identifier",
                  "start": 3356,
                  "end": 3367,
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null
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
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 3371,
          "end": 3484,
          "objectType": {
            "type": "TSMappedType",
            "start": 3371,
            "end": 3475,
            "key": {
              "type": "Identifier",
              "start": 3374,
              "end": 3375,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3379,
              "end": 3386,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3385,
                "end": 3386,
                "typeName": {
                  "type": "Identifier",
                  "start": 3385,
                  "end": 3386,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 3389,
              "end": 3473,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 3389,
                "end": 3393,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3389,
                  "end": 3390,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3389,
                    "end": 3390,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3391,
                  "end": 3392,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3391,
                    "end": 3392,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 3402,
                "end": 3420,
                "typeName": {
                  "type": "Identifier",
                  "start": 3402,
                  "end": 3411,
                  "decorators": [],
                  "name": "TReadonly",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3411,
                  "end": 3420,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3412,
                      "end": 3419,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3412,
                        "end": 3419,
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "start": 3424,
                "end": 3464,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 3424,
                  "end": 3428,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3424,
                    "end": 3425,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3424,
                      "end": 3425,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3426,
                    "end": 3427,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3426,
                      "end": 3427,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 3437,
                  "end": 3452,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3437,
                    "end": 3446,
                    "decorators": [],
                    "name": "TOptional",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3446,
                    "end": 3452,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 3447,
                        "end": 3451,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 3447,
                          "end": 3448,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3447,
                            "end": 3448,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 3449,
                          "end": 3450,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3449,
                            "end": 3450,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 3455,
                  "end": 3460
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 3463,
                  "end": 3464,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3463,
                    "end": 3464,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3468,
                "end": 3473
              }
            },
            "optional": false,
            "readonly": null
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 3476,
            "end": 3483,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3482,
              "end": 3483,
              "typeName": {
                "type": "Identifier",
                "start": 3482,
                "end": 3483,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3485,
      "end": 3656,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3492,
        "end": 3656,
        "id": {
          "type": "Identifier",
          "start": 3497,
          "end": 3517,
          "decorators": [],
          "name": "OptionalPropertyKeys",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3517,
          "end": 3540,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3518,
              "end": 3539,
              "name": {
                "type": "Identifier",
                "start": 3518,
                "end": 3519,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3528,
                "end": 3539,
                "typeName": {
                  "type": "Identifier",
                  "start": 3528,
                  "end": 3539,
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null
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
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 3543,
          "end": 3656,
          "objectType": {
            "type": "TSMappedType",
            "start": 3543,
            "end": 3647,
            "key": {
              "type": "Identifier",
              "start": 3546,
              "end": 3547,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3551,
              "end": 3558,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3557,
                "end": 3558,
                "typeName": {
                  "type": "Identifier",
                  "start": 3557,
                  "end": 3558,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 3561,
              "end": 3645,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 3561,
                "end": 3565,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3561,
                  "end": 3562,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3561,
                    "end": 3562,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3563,
                  "end": 3564,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3563,
                    "end": 3564,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 3574,
                "end": 3592,
                "typeName": {
                  "type": "Identifier",
                  "start": 3574,
                  "end": 3583,
                  "decorators": [],
                  "name": "TOptional",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3583,
                  "end": 3592,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3584,
                      "end": 3591,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3584,
                        "end": 3591,
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "start": 3596,
                "end": 3636,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 3596,
                  "end": 3600,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3596,
                    "end": 3597,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3596,
                      "end": 3597,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3598,
                    "end": 3599,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3598,
                      "end": 3599,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 3609,
                  "end": 3624,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3609,
                    "end": 3618,
                    "decorators": [],
                    "name": "TReadonly",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3618,
                    "end": 3624,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 3619,
                        "end": 3623,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 3619,
                          "end": 3620,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3619,
                            "end": 3620,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 3621,
                          "end": 3622,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3621,
                            "end": 3622,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 3627,
                  "end": 3632
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 3635,
                  "end": 3636,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3635,
                    "end": 3636,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 3640,
                "end": 3645
              }
            },
            "optional": false,
            "readonly": null
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 3648,
            "end": 3655,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3654,
              "end": 3655,
              "typeName": {
                "type": "Identifier",
                "start": 3654,
                "end": 3655,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3657,
      "end": 3813,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3664,
        "end": 3813,
        "id": {
          "type": "Identifier",
          "start": 3669,
          "end": 3689,
          "decorators": [],
          "name": "RequiredPropertyKeys",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3689,
          "end": 3712,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3690,
              "end": 3711,
              "name": {
                "type": "Identifier",
                "start": 3690,
                "end": 3691,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3700,
                "end": 3711,
                "typeName": {
                  "type": "Identifier",
                  "start": 3700,
                  "end": 3711,
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null
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
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 3715,
          "end": 3813,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3721,
            "end": 3813,
            "typeName": {
              "type": "Identifier",
              "start": 3721,
              "end": 3725,
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3725,
              "end": 3813,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3726,
                  "end": 3727,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3726,
                    "end": 3727,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 3729,
                  "end": 3812,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 3729,
                      "end": 3760,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3729,
                        "end": 3757,
                        "decorators": [],
                        "name": "ReadonlyOptionalPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3757,
                        "end": 3760,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3758,
                            "end": 3759,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3758,
                              "end": 3759,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3763,
                      "end": 3786,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3763,
                        "end": 3783,
                        "decorators": [],
                        "name": "ReadonlyPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3783,
                        "end": 3786,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3784,
                            "end": 3785,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3784,
                              "end": 3785,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3789,
                      "end": 3812,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3789,
                        "end": 3809,
                        "decorators": [],
                        "name": "OptionalPropertyKeys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3809,
                        "end": 3812,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3810,
                            "end": 3811,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3810,
                              "end": 3811,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3814,
      "end": 4130,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3821,
        "end": 4130,
        "id": {
          "type": "Identifier",
          "start": 3826,
          "end": 3843,
          "decorators": [],
          "name": "PropertiesReducer",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3843,
          "end": 3904,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3844,
              "end": 3865,
              "name": {
                "type": "Identifier",
                "start": 3844,
                "end": 3845,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3854,
                "end": 3865,
                "typeName": {
                  "type": "Identifier",
                  "start": 3854,
                  "end": 3865,
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 3867,
              "end": 3903,
              "name": {
                "type": "Identifier",
                "start": 3867,
                "end": 3868,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3877,
                "end": 3903,
                "typeName": {
                  "type": "Identifier",
                  "start": 3877,
                  "end": 3883,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3883,
                  "end": 3903,
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "start": 3884,
                      "end": 3893,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 3890,
                        "end": 3893
                      }
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 3895,
                      "end": 3902
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
          "type": "TSTypeReference",
          "start": 3907,
          "end": 4130,
          "typeName": {
            "type": "Identifier",
            "start": 3907,
            "end": 3915,
            "decorators": [],
            "name": "Evaluate",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3915,
            "end": 4130,
            "params": [
              {
                "type": "TSIntersectionType",
                "start": 3922,
                "end": 4127,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 3922,
                    "end": 3981,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3922,
                      "end": 3930,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3930,
                      "end": 3981,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3931,
                          "end": 3980,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3931,
                            "end": 3938,
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3938,
                            "end": 3980,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3939,
                                "end": 3979,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3939,
                                  "end": 3943,
                                  "decorators": [],
                                  "name": "Pick",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 3943,
                                  "end": 3979,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 3944,
                                      "end": 3945,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3944,
                                        "end": 3945,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 3947,
                                      "end": 3978,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3947,
                                        "end": 3975,
                                        "decorators": [],
                                        "name": "ReadonlyOptionalPropertyKeys",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 3975,
                                        "end": 3978,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 3976,
                                            "end": 3977,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3976,
                                              "end": 3977,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
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
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3988,
                    "end": 4030,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3988,
                      "end": 3996,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3996,
                      "end": 4030,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3997,
                          "end": 4029,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3997,
                            "end": 4001,
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4001,
                            "end": 4029,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4002,
                                "end": 4003,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4002,
                                  "end": 4003,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 4005,
                                "end": 4028,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4005,
                                  "end": 4025,
                                  "decorators": [],
                                  "name": "ReadonlyPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 4025,
                                  "end": 4028,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 4026,
                                      "end": 4027,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4026,
                                        "end": 4027,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 4037,
                    "end": 4078,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4037,
                      "end": 4044,
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4044,
                      "end": 4078,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4045,
                          "end": 4077,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4045,
                            "end": 4049,
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4049,
                            "end": 4077,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4050,
                                "end": 4051,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4050,
                                  "end": 4051,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 4053,
                                "end": 4076,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4053,
                                  "end": 4073,
                                  "decorators": [],
                                  "name": "OptionalPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 4073,
                                  "end": 4076,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 4074,
                                      "end": 4075,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4074,
                                        "end": 4075,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 4085,
                    "end": 4127,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4085,
                      "end": 4093,
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4093,
                      "end": 4127,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4094,
                          "end": 4126,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4094,
                            "end": 4098,
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4098,
                            "end": 4126,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4099,
                                "end": 4100,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4099,
                                  "end": 4100,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 4102,
                                "end": 4125,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4102,
                                  "end": 4122,
                                  "decorators": [],
                                  "name": "RequiredPropertyKeys",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 4122,
                                  "end": 4125,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 4123,
                                      "end": 4124,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4123,
                                        "end": 4124,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
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
                    }
                  }
                ]
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4131,
      "end": 4267,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4138,
        "end": 4267,
        "id": {
          "type": "Identifier",
          "start": 4143,
          "end": 4159,
          "decorators": [],
          "name": "PropertiesReduce",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4159,
          "end": 4203,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4160,
              "end": 4181,
              "name": {
                "type": "Identifier",
                "start": 4160,
                "end": 4161,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 4170,
                "end": 4181,
                "typeName": {
                  "type": "Identifier",
                  "start": 4170,
                  "end": 4181,
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 4183,
              "end": 4202,
              "name": {
                "type": "Identifier",
                "start": 4183,
                "end": 4184,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSArrayType",
                "start": 4193,
                "end": 4202,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4193,
                  "end": 4200
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
          "type": "TSTypeReference",
          "start": 4206,
          "end": 4267,
          "typeName": {
            "type": "Identifier",
            "start": 4206,
            "end": 4223,
            "decorators": [],
            "name": "PropertiesReducer",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4223,
            "end": 4267,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4224,
                "end": 4225,
                "typeName": {
                  "type": "Identifier",
                  "start": 4224,
                  "end": 4225,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSMappedType",
                "start": 4227,
                "end": 4266,
                "key": {
                  "type": "Identifier",
                  "start": 4234,
                  "end": 4235,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 4239,
                  "end": 4246,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4245,
                    "end": 4246,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4245,
                      "end": 4246,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4249,
                  "end": 4264,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4249,
                    "end": 4255,
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4255,
                    "end": 4264,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 4256,
                        "end": 4260,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 4256,
                          "end": 4257,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4256,
                            "end": 4257,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 4258,
                          "end": 4259,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4258,
                            "end": 4259,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 4262,
                        "end": 4263,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4262,
                          "end": 4263,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "optional": false,
                "readonly": null
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4268,
      "end": 4310,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4275,
        "end": 4310,
        "id": {
          "type": "Identifier",
          "start": 4280,
          "end": 4292,
          "decorators": [],
          "name": "TPropertyKey",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 4295,
          "end": 4310,
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
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4311,
      "end": 4366,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4318,
        "end": 4366,
        "id": {
          "type": "Identifier",
          "start": 4323,
          "end": 4334,
          "decorators": [],
          "name": "TProperties",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4337,
          "end": 4366,
          "typeName": {
            "type": "Identifier",
            "start": 4337,
            "end": 4343,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4343,
            "end": 4366,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4344,
                "end": 4356,
                "typeName": {
                  "type": "Identifier",
                  "start": 4344,
                  "end": 4356,
                  "decorators": [],
                  "name": "TPropertyKey",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 4358,
                "end": 4365,
                "typeName": {
                  "type": "Identifier",
                  "start": 4358,
                  "end": 4365,
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4367,
      "end": 4554,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 4374,
        "end": 4554,
        "id": {
          "type": "Identifier",
          "start": 4384,
          "end": 4391,
          "decorators": [],
          "name": "TObject",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4391,
          "end": 4428,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4392,
              "end": 4427,
              "name": {
                "type": "Identifier",
                "start": 4392,
                "end": 4393,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 4402,
                "end": 4413,
                "typeName": {
                  "type": "Identifier",
                  "start": 4402,
                  "end": 4413,
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": {
                "type": "TSTypeReference",
                "start": 4416,
                "end": 4427,
                "typeName": {
                  "type": "Identifier",
                  "start": 4416,
                  "end": 4427,
                  "decorators": [],
                  "name": "TProperties",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 4437,
            "end": 4444,
            "expression": {
              "type": "Identifier",
              "start": 4437,
              "end": 4444,
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 4445,
          "end": 4554,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 4451,
              "end": 4467,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4452,
                "end": 4456,
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4457,
                "end": 4467,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 4459,
                  "end": 4467,
                  "literal": {
                    "type": "Literal",
                    "start": 4459,
                    "end": 4467,
                    "value": "Object",
                    "raw": "'Object'"
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 4472,
              "end": 4515,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4472,
                "end": 4478,
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4478,
                "end": 4515,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4480,
                  "end": 4515,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4480,
                    "end": 4496,
                    "decorators": [],
                    "name": "PropertiesReduce",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4496,
                    "end": 4515,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 4497,
                        "end": 4498,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4497,
                          "end": 4498,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSIndexedAccessType",
                        "start": 4500,
                        "end": 4514,
                        "objectType": {
                          "type": "TSThisType",
                          "start": 4500,
                          "end": 4504
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 4505,
                          "end": 4513,
                          "literal": {
                            "type": "Literal",
                            "start": 4505,
                            "end": 4513,
                            "value": "params",
                            "raw": "'params'"
                          }
                        }
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 4520,
              "end": 4534,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4520,
                "end": 4524,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4524,
                "end": 4534,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 4526,
                  "end": 4534,
                  "literal": {
                    "type": "Literal",
                    "start": 4526,
                    "end": 4534,
                    "value": "object",
                    "raw": "'object'"
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 4539,
              "end": 4552,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 4539,
                "end": 4549,
                "decorators": [],
                "name": "properties",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4549,
                "end": 4552,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4551,
                  "end": 4552,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4551,
                    "end": 4552,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4556,
      "end": 4652,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4563,
        "end": 4652,
        "id": {
          "type": "Identifier",
          "start": 4568,
          "end": 4574,
          "decorators": [],
          "name": "Static",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4574,
          "end": 4619,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4575,
              "end": 4592,
              "name": {
                "type": "Identifier",
                "start": 4575,
                "end": 4576,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 4585,
                "end": 4592,
                "typeName": {
                  "type": "Identifier",
                  "start": 4585,
                  "end": 4592,
                  "decorators": [],
                  "name": "TSchema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 4594,
              "end": 4618,
              "name": {
                "type": "Identifier",
                "start": 4594,
                "end": 4595,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSArrayType",
                "start": 4604,
                "end": 4613,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4604,
                  "end": 4611
                }
              },
              "default": {
                "type": "TSTupleType",
                "start": 4616,
                "end": 4618,
                "elementTypes": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 4622,
          "end": 4652,
          "objectType": {
            "type": "TSIntersectionType",
            "start": 4623,
            "end": 4641,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 4623,
                "end": 4624,
                "typeName": {
                  "type": "Identifier",
                  "start": 4623,
                  "end": 4624,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeLiteral",
                "start": 4627,
                "end": 4641,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4629,
                    "end": 4639,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4629,
                      "end": 4635,
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4635,
                      "end": 4638,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4637,
                        "end": 4638,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4637,
                          "end": 4638,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            ]
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 4643,
            "end": 4651,
            "literal": {
              "type": "Literal",
              "start": 4643,
              "end": 4651,
              "value": "static",
              "raw": "'static'"
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 4654,
      "end": 4777,
      "id": {
        "type": "Identifier",
        "start": 4672,
        "end": 4676,
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4677,
        "end": 4777,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 4683,
            "end": 4744,
            "id": {
              "type": "Identifier",
              "start": 4692,
              "end": 4698,
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4698,
              "end": 4721,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4699,
                  "end": 4720,
                  "name": {
                    "type": "Identifier",
                    "start": 4699,
                    "end": 4700,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4709,
                    "end": 4720,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4709,
                      "end": 4720,
                      "decorators": [],
                      "name": "TProperties",
                      "optional": false,
                      "typeAnnotation": null
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
            "params": [
              {
                "type": "Identifier",
                "start": 4722,
                "end": 4731,
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4728,
                  "end": 4731,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4730,
                    "end": 4731,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4730,
                      "end": 4731,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4732,
              "end": 4744,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4734,
                "end": 4744,
                "typeName": {
                  "type": "Identifier",
                  "start": 4734,
                  "end": 4741,
                  "decorators": [],
                  "name": "TObject",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4741,
                  "end": 4744,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4742,
                      "end": 4743,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4742,
                        "end": 4743,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 4749,
            "end": 4775,
            "id": {
              "type": "Identifier",
              "start": 4758,
              "end": 4764,
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4766,
              "end": 4775,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4768,
                "end": 4775,
                "typeName": {
                  "type": "Identifier",
                  "start": 4768,
                  "end": 4775,
                  "decorators": [],
                  "name": "TString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
