__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1198,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "ListItem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "TData",
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
              "name": "prev",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "ListItem",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "TData",
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
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "ListItem",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "TData",
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
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "TData",
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
      "start": 115,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 130,
        "name": "IteratorFn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "TData",
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
            "start": 138,
            "end": 145,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 145,
              "name": "TResult",
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
            "start": 147,
            "end": 169,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 155,
              "name": "TContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "List",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "TData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "name": "this",
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
                  "name": "TContext",
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
            "start": 190,
            "end": 201,
            "name": "item",
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
                  "name": "TData",
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
            "start": 203,
            "end": 224,
            "name": "node",
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
                  "name": "ListItem",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "TData",
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
            "start": 226,
            "end": 243,
            "name": "list",
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
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "TData",
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
              "name": "TResult",
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
      "start": 257,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 270,
        "name": "FilterFn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "TData",
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
            "start": 278,
            "end": 299,
            "name": {
              "type": "Identifier",
              "start": 278,
              "end": 285,
              "name": "TResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 294,
              "end": 299,
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 299,
                "name": "TData",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 301,
            "end": 323,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 309,
              "name": "TContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "List",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "TData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "name": "this",
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
                  "name": "TContext",
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
            "start": 344,
            "end": 355,
            "name": "item",
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
                  "name": "TData",
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
            "start": 357,
            "end": 378,
            "name": "node",
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
                  "name": "ListItem",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "TData",
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
            "start": 380,
            "end": 397,
            "name": "list",
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
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "TData",
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
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "TResult",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 438,
        "name": "List",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 446,
        "end": 801,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 452,
            "end": 566,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 458,
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 458,
              "end": 566,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 492,
                  "end": 530,
                  "name": "fn",
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
                        "name": "FilterFn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TData",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "TResult",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "TContext",
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
                  "start": 532,
                  "end": 549,
                  "name": "context",
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
                        "name": "TContext",
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
              "body": null,
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
                      "name": "TContext",
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
                    "start": 469,
                    "end": 490,
                    "name": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 476,
                      "name": "TResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 485,
                      "end": 490,
                      "typeName": {
                        "type": "Identifier",
                        "start": 485,
                        "end": 490,
                        "name": "TData",
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
                    "name": "List",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "TResult",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 571,
            "end": 646,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 577,
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 577,
              "end": 646,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 601,
                  "end": 629,
                  "name": "fn",
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
                        "name": "FilterFn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TData",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "TResult",
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
                      "name": "TResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 594,
                      "end": 599,
                      "typeName": {
                        "type": "Identifier",
                        "start": 594,
                        "end": 599,
                        "name": "TData",
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
                    "name": "List",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "TResult",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 651,
            "end": 742,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 651,
              "end": 657,
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 657,
              "end": 742,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 668,
                  "end": 708,
                  "name": "fn",
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
                        "name": "IteratorFn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TData",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "TContext",
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
                  "start": 710,
                  "end": 727,
                  "name": "context",
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
                        "name": "TContext",
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
              "body": null,
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
                      "name": "TContext",
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
                    "name": "List",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "TData",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 747,
            "end": 799,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 747,
              "end": 753,
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 753,
              "end": 799,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 784,
                  "name": "fn",
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
                        "name": "IteratorFn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TData",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
                    "name": "List",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "TData",
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "TData",
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 802,
      "end": 835,
      "id": {
        "type": "Identifier",
        "start": 812,
        "end": 816,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 842,
          "end": 873,
          "id": {
            "type": "Identifier",
            "start": 842,
            "end": 847,
            "name": "list2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 850,
            "end": 873,
            "callee": {
              "type": "Identifier",
              "start": 854,
              "end": 858,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
                        "name": "Test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 875,
      "end": 1140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 881,
          "end": 1139,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 888,
            "name": "filter1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "list2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 897,
                "end": 903,
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 904,
                "end": 1128,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 913,
                    "end": 917,
                    "name": "item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 919,
                    "end": 923,
                    "name": "node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 925,
                    "end": 929,
                    "name": "list",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "list",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "prefix": true,
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 1120,
                          "end": 1125,
                          "operator": "!",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 1121,
                            "end": 1125,
                            "name": "item",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "Test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1131,
                      "end": 1132,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1134,
                      "end": 1137,
                      "value": "c",
                      "raw": "'c'"
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1141,
      "end": 1171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1147,
          "end": 1170,
          "id": {
            "type": "Identifier",
            "start": 1147,
            "end": 1160,
            "name": "x",
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
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Test",
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
          "init": {
            "type": "Identifier",
            "start": 1163,
            "end": 1170,
            "name": "filter1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
