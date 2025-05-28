__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1197,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "ListItem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 24,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "TData",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 26,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 61,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "decorators": [],
              "name": "prev",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 60,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 38,
                "end": 60,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 53,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 46,
                      "decorators": [],
                      "name": "ListItem",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 46,
                      "end": 53,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 47,
                          "end": 52,
                          "typeName": {
                            "type": "Identifier",
                            "start": 47,
                            "end": 52,
                            "decorators": [],
                            "name": "TData",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 56,
                    "end": 60
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 66,
            "end": 95,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 70,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 94,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 72,
                "end": 94,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 72,
                    "end": 87,
                    "typeName": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 80,
                      "decorators": [],
                      "name": "ListItem",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 80,
                      "end": 87,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 81,
                          "end": 86,
                          "typeName": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 86,
                            "decorators": [],
                            "name": "TData",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 90,
                    "end": 94
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 100,
            "end": 112,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 104,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 111,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 111,
                  "decorators": [],
                  "name": "TData",
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 115,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 130,
        "decorators": [],
        "name": "IteratorFn",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 130,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 136,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 145,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 145,
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 169,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 155,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 169,
              "typeName": {
                "type": "Identifier",
                "start": 158,
                "end": 162,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 162,
                "end": 169,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 163,
                    "end": 168,
                    "typeName": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 168,
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 173,
        "end": 255,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 174,
            "end": 188,
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 188,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 188,
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 190,
            "end": 201,
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 201,
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 203,
            "end": 224,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 224,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 224,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 217,
                  "decorators": [],
                  "name": "ListItem",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 217,
                  "end": 224,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 218,
                      "end": 223,
                      "typeName": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 223,
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 226,
            "end": 243,
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 236,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 236,
                  "end": 243,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 242,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 242,
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 245,
          "end": 255,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 248,
            "end": 255,
            "typeName": {
              "type": "Identifier",
              "start": 248,
              "end": 255,
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 257,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 270,
        "decorators": [],
        "name": "FilterFn",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 270,
        "end": 324,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 271,
            "end": 276,
            "name": {
              "type": "Identifier",
              "start": 271,
              "end": 276,
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 278,
            "end": 299,
            "name": {
              "type": "Identifier",
              "start": 278,
              "end": 285,
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 294,
              "end": 299,
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 299,
                "decorators": [],
                "name": "TData",
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
            "start": 301,
            "end": 323,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 309,
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 312,
              "end": 323,
              "typeName": {
                "type": "Identifier",
                "start": 312,
                "end": 316,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 316,
                "end": 323,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 317,
                    "end": 322,
                    "typeName": {
                      "type": "Identifier",
                      "start": 317,
                      "end": 322,
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 327,
        "end": 417,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 328,
            "end": 342,
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 334,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 342,
                  "decorators": [],
                  "name": "TContext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 344,
            "end": 355,
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 350,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 355,
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 357,
            "end": 378,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 378,
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 371,
                  "decorators": [],
                  "name": "ListItem",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 371,
                  "end": 378,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 372,
                      "end": 377,
                      "typeName": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 377,
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 380,
            "end": 397,
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 384,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 386,
                "end": 397,
                "typeName": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 390,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 390,
                  "end": 397,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 391,
                      "end": 396,
                      "typeName": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 396,
                        "decorators": [],
                        "name": "TData",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 399,
          "end": 417,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 402,
            "end": 417,
            "parameterName": {
              "type": "Identifier",
              "start": 402,
              "end": 406,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 410,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 410,
                "end": 417,
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 417,
                  "decorators": [],
                  "name": "TResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 420,
      "end": 801,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 438,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 438,
        "end": 445,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 439,
            "end": 444,
            "name": {
              "type": "Identifier",
              "start": 439,
              "end": 444,
              "decorators": [],
              "name": "TData",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 446,
        "end": 801,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 452,
            "end": 566,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 458,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 458,
              "end": 566,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 458,
                "end": 491,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 459,
                    "end": 467,
                    "name": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 467,
                      "decorators": [],
                      "name": "TContext",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 469,
                    "end": 490,
                    "name": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 476,
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 485,
                      "end": 490,
                      "typeName": {
                        "type": "Identifier",
                        "start": 485,
                        "end": 490,
                        "decorators": [],
                        "name": "TData",
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
                  "start": 492,
                  "end": 530,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 494,
                    "end": 530,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 496,
                      "end": 530,
                      "typeName": {
                        "type": "Identifier",
                        "start": 496,
                        "end": 504,
                        "decorators": [],
                        "name": "FilterFn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 504,
                        "end": 530,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 505,
                            "end": 510,
                            "typeName": {
                              "type": "Identifier",
                              "start": 505,
                              "end": 510,
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 512,
                            "end": 519,
                            "typeName": {
                              "type": "Identifier",
                              "start": 512,
                              "end": 519,
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 521,
                            "end": 529,
                            "typeName": {
                              "type": "Identifier",
                              "start": 521,
                              "end": 529,
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 532,
                  "end": 549,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 539,
                    "end": 549,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 541,
                      "end": 549,
                      "typeName": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 549,
                        "decorators": [],
                        "name": "TContext",
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
                "start": 550,
                "end": 565,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 552,
                  "end": 565,
                  "typeName": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 556,
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 556,
                    "end": 565,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 557,
                        "end": 564,
                        "typeName": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 564,
                          "decorators": [],
                          "name": "TResult",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 571,
            "end": 646,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 577,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 577,
              "end": 646,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 577,
                "end": 600,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 578,
                    "end": 599,
                    "name": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 585,
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 594,
                      "end": 599,
                      "typeName": {
                        "type": "Identifier",
                        "start": 594,
                        "end": 599,
                        "decorators": [],
                        "name": "TData",
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
                  "start": 601,
                  "end": 629,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 603,
                    "end": 629,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 605,
                      "end": 629,
                      "typeName": {
                        "type": "Identifier",
                        "start": 605,
                        "end": 613,
                        "decorators": [],
                        "name": "FilterFn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 613,
                        "end": 629,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 614,
                            "end": 619,
                            "typeName": {
                              "type": "Identifier",
                              "start": 614,
                              "end": 619,
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 621,
                            "end": 628,
                            "typeName": {
                              "type": "Identifier",
                              "start": 621,
                              "end": 628,
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 630,
                "end": 645,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 632,
                  "end": 645,
                  "typeName": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 636,
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 636,
                    "end": 645,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 637,
                        "end": 644,
                        "typeName": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 644,
                          "decorators": [],
                          "name": "TResult",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 651,
            "end": 742,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 651,
              "end": 657,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 657,
              "end": 742,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 657,
                "end": 667,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 658,
                    "end": 666,
                    "name": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 666,
                      "decorators": [],
                      "name": "TContext",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 668,
                  "end": 708,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 670,
                    "end": 708,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 672,
                      "end": 708,
                      "typeName": {
                        "type": "Identifier",
                        "start": 672,
                        "end": 682,
                        "decorators": [],
                        "name": "IteratorFn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 682,
                        "end": 708,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 683,
                            "end": 688,
                            "typeName": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 688,
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 690,
                            "end": 697
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 699,
                            "end": 707,
                            "typeName": {
                              "type": "Identifier",
                              "start": 699,
                              "end": 707,
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 710,
                  "end": 727,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 717,
                    "end": 727,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 719,
                      "end": 727,
                      "typeName": {
                        "type": "Identifier",
                        "start": 719,
                        "end": 727,
                        "decorators": [],
                        "name": "TContext",
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
                "start": 728,
                "end": 741,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 730,
                  "end": 741,
                  "typeName": {
                    "type": "Identifier",
                    "start": 730,
                    "end": 734,
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 734,
                    "end": 741,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 735,
                        "end": 740,
                        "typeName": {
                          "type": "Identifier",
                          "start": 735,
                          "end": 740,
                          "decorators": [],
                          "name": "TData",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 747,
            "end": 799,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 747,
              "end": 753,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 753,
              "end": 799,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 784,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 756,
                    "end": 784,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 758,
                      "end": 784,
                      "typeName": {
                        "type": "Identifier",
                        "start": 758,
                        "end": 768,
                        "decorators": [],
                        "name": "IteratorFn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 768,
                        "end": 784,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 769,
                            "end": 774,
                            "typeName": {
                              "type": "Identifier",
                              "start": 769,
                              "end": 774,
                              "decorators": [],
                              "name": "TData",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 776,
                            "end": 783
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 785,
                "end": 798,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 787,
                  "end": 798,
                  "typeName": {
                    "type": "Identifier",
                    "start": 787,
                    "end": 791,
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 791,
                    "end": 798,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 792,
                        "end": 797,
                        "typeName": {
                          "type": "Identifier",
                          "start": 792,
                          "end": 797,
                          "decorators": [],
                          "name": "TData",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 802,
      "end": 835,
      "id": {
        "type": "Identifier",
        "start": 812,
        "end": 816,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 817,
        "end": 835,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 823,
            "end": 833,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 823,
              "end": 824,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 824,
              "end": 832,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 826,
                "end": 832
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
      "type": "VariableDeclaration",
      "start": 836,
      "end": 874,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 842,
          "end": 873,
          "id": {
            "type": "Identifier",
            "start": 842,
            "end": 847,
            "decorators": [],
            "name": "list2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 850,
            "end": 873,
            "callee": {
              "type": "Identifier",
              "start": 854,
              "end": 858,
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 858,
              "end": 871,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 859,
                  "end": 870,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 859,
                      "end": 863,
                      "typeName": {
                        "type": "Identifier",
                        "start": 859,
                        "end": 863,
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 866,
                      "end": 870
                    }
                  ]
                }
              ]
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 875,
      "end": 1140,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 881,
          "end": 1139,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 888,
            "decorators": [],
            "name": "filter1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 891,
            "end": 1139,
            "callee": {
              "type": "MemberExpression",
              "start": 891,
              "end": 903,
              "object": {
                "type": "Identifier",
                "start": 891,
                "end": 896,
                "decorators": [],
                "name": "list2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 897,
                "end": 903,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 904,
                "end": 1128,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 913,
                    "end": 917,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 919,
                    "end": 923,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 925,
                    "end": 929,
                    "decorators": [],
                    "name": "list",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 930,
                  "end": 944,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 932,
                    "end": 944,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 932,
                      "end": 936,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 940,
                      "end": 944,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 940,
                        "end": 944,
                        "typeName": {
                          "type": "Identifier",
                          "start": 940,
                          "end": 944,
                          "decorators": [],
                          "name": "Test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 945,
                  "end": 1128,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 951,
                      "end": 958,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 951,
                        "end": 957,
                        "object": {
                          "type": "ThisExpression",
                          "start": 951,
                          "end": 955
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 956,
                          "end": 957,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 985,
                      "end": 990,
                      "expression": {
                        "type": "Identifier",
                        "start": 985,
                        "end": 989,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1022,
                      "end": 1027,
                      "expression": {
                        "type": "Identifier",
                        "start": 1022,
                        "end": 1026,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1069,
                      "end": 1074,
                      "expression": {
                        "type": "Identifier",
                        "start": 1069,
                        "end": 1073,
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1112,
                      "end": 1126,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 1119,
                        "end": 1125,
                        "operator": "!",
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 1120,
                          "end": 1125,
                          "operator": "!",
                          "argument": {
                            "type": "Identifier",
                            "start": 1121,
                            "end": 1125,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "prefix": true
                      }
                    }
                  ]
                },
                "expression": false
              },
              {
                "type": "ObjectExpression",
                "start": 1130,
                "end": 1138,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1131,
                    "end": 1137,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1132,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1134,
                      "end": 1137,
                      "value": "c",
                      "raw": "'c'"
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
    {
      "type": "VariableDeclaration",
      "start": 1141,
      "end": 1171,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1147,
          "end": 1170,
          "id": {
            "type": "Identifier",
            "start": 1147,
            "end": 1160,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1148,
              "end": 1160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1150,
                "end": 1160,
                "typeName": {
                  "type": "Identifier",
                  "start": 1150,
                  "end": 1154,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1154,
                  "end": 1160,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1155,
                      "end": 1159,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1155,
                        "end": 1159,
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1163,
            "end": 1170,
            "decorators": [],
            "name": "filter1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
