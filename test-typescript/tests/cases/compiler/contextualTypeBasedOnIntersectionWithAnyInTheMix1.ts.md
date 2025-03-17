__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 793,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 18,
        "name": "ComponentType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "P",
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
        "type": "TSFunctionType",
        "start": 24,
        "end": 37,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 25,
            "end": 29,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 28,
                "end": 29,
                "typeName": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "name": "P",
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
          "start": 31,
          "end": 37,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 34,
            "end": 37
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 58,
        "name": "ComponentProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "C",
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
        "start": 64,
        "end": 108,
        "checkType": {
          "type": "TSTypeReference",
          "start": 64,
          "end": 65,
          "typeName": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 74,
          "end": 96,
          "typeName": {
            "type": "Identifier",
            "start": 74,
            "end": 87,
            "name": "ComponentType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 87,
            "end": 96,
            "params": [
              {
                "type": "TSInferType",
                "start": 88,
                "end": 95,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 94,
                  "end": 95,
                  "name": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "name": "P",
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
          "start": 99,
          "end": 100,
          "typeName": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 103,
          "end": 108
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 111,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 121,
        "name": "Attrs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 146,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "P",
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
            "start": 125,
            "end": 145,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 145,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 142,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 142,
                "end": 145,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 143,
                    "end": 144,
                    "typeName": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
        "start": 149,
        "end": 150,
        "typeName": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 153,
      "end": 483,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 177,
        "name": "StyledFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 177,
        "end": 268,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 209,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 209,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 204,
                "name": "ComponentType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 204,
                "end": 209,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 205,
                    "end": 208
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
            "start": 213,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 223,
              "end": 229
            },
            "default": {
              "type": "TSTypeLiteral",
              "start": 232,
              "end": 234,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 238,
            "end": 265,
            "name": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 248,
              "end": 257,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 254,
                "end": 257
              }
            },
            "default": {
              "type": "TSNeverKeyword",
              "start": 260,
              "end": 265
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 483,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 273,
            "end": 481,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 278,
              "name": "attrs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 278,
              "end": 383,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 284,
                  "end": 285,
                  "name": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 291,
                  "end": 378,
                  "name": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 295,
                    "name": "NewA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSIntersectionType",
                    "start": 304,
                    "end": 373,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 304,
                        "end": 334,
                        "typeName": {
                          "type": "Identifier",
                          "start": 304,
                          "end": 311,
                          "name": "Partial",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 311,
                          "end": 334,
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "start": 312,
                              "end": 333,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 312,
                                  "end": 329,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 312,
                                    "end": 326,
                                    "name": "ComponentProps",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 326,
                                    "end": 329,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 327,
                                        "end": 328,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 327,
                                          "end": 328,
                                          "name": "C",
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
                                  "start": 332,
                                  "end": 333,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 332,
                                    "end": 333,
                                    "name": "U",
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
                      {
                        "type": "TSTypeLiteral",
                        "start": 337,
                        "end": 373,
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "start": 345,
                            "end": 367,
                            "parameters": [
                              {
                                "type": "Identifier",
                                "start": 346,
                                "end": 360,
                                "name": "others",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 352,
                                  "end": 360,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 354,
                                    "end": 360
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 361,
                              "end": 366,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 363,
                                "end": 366
                              }
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null
                          }
                        ]
                      }
                    ]
                  },
                  "default": {
                    "type": "TSTypeLiteral",
                    "start": 376,
                    "end": 378,
                    "members": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 389,
                "end": 430,
                "name": "attrs",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 394,
                  "end": 430,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 396,
                    "end": 430,
                    "typeName": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 401,
                      "name": "Attrs",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 401,
                      "end": 430,
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "start": 402,
                          "end": 423,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 402,
                              "end": 419,
                              "typeName": {
                                "type": "Identifier",
                                "start": 402,
                                "end": 416,
                                "name": "ComponentProps",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 416,
                                "end": 419,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 417,
                                    "end": 418,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 417,
                                      "end": 418,
                                      "name": "C",
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
                              "start": 422,
                              "end": 423,
                              "typeName": {
                                "type": "Identifier",
                                "start": 422,
                                "end": 423,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 425,
                          "end": 429,
                          "typeName": {
                            "type": "Identifier",
                            "start": 425,
                            "end": 429,
                            "name": "NewA",
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
              "start": 435,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 480,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 451,
                  "name": "StyledFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 451,
                  "end": 480,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 452,
                      "end": 453,
                      "typeName": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 453,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSIntersectionType",
                      "start": 455,
                      "end": 463,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 455,
                          "end": 456,
                          "typeName": {
                            "type": "Identifier",
                            "start": 455,
                            "end": 456,
                            "name": "O",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 459,
                          "end": 463,
                          "typeName": {
                            "type": "Identifier",
                            "start": 459,
                            "end": 463,
                            "name": "NewA",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSUnionType",
                      "start": 465,
                      "end": 479,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 465,
                          "end": 466,
                          "typeName": {
                            "type": "Identifier",
                            "start": 465,
                            "end": 466,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeOperator",
                          "start": 469,
                          "end": 479,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 475,
                            "end": 479,
                            "typeName": {
                              "type": "Identifier",
                              "start": 475,
                              "end": 479,
                              "name": "NewA",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 485,
      "end": 581,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 510,
        "name": "StyledInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 511,
        "end": 581,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 515,
            "end": 579,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 515,
              "end": 545,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 516,
                  "end": 544,
                  "name": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 526,
                    "end": 544,
                    "typeName": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 539,
                      "name": "ComponentType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 539,
                      "end": 544,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 540,
                          "end": 543
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
            "params": [
              {
                "type": "Identifier",
                "start": 546,
                "end": 558,
                "name": "component",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 555,
                  "end": 558,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 557,
                    "end": 558,
                    "typeName": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 558,
                      "name": "C",
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
              "start": 559,
              "end": 578,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 561,
                "end": 578,
                "typeName": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 575,
                  "name": "StyledFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 575,
                  "end": 578,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 576,
                      "end": 577,
                      "typeName": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 577,
                        "name": "C",
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
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 620,
            "name": "styled",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 603,
              "end": 620,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 605,
                "end": 620,
                "typeName": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 620,
                  "name": "StyledInterface",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 623,
      "end": 673,
      "id": {
        "type": "Identifier",
        "start": 633,
        "end": 642,
        "name": "BaseProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 643,
        "end": 673,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 647,
            "end": 671,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 647,
              "end": 649,
              "name": "as",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 650,
              "end": 670,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 652,
                "end": 670,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 652,
                    "end": 660,
                    "literal": {
                      "type": "Literal",
                      "start": 652,
                      "end": 660,
                      "value": "select",
                      "raw": "\"select\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 663,
                    "end": 670,
                    "literal": {
                      "type": "Literal",
                      "start": 663,
                      "end": 670,
                      "value": "input",
                      "raw": "\"input\""
                    }
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
      "type": "VariableDeclaration",
      "start": 675,
      "end": 722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 689,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 689,
            "end": 721,
            "name": "Flex",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 693,
              "end": 721,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 695,
                "end": 721,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 696,
                    "end": 712,
                    "name": "props",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 701,
                      "end": 712,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 703,
                        "end": 712,
                        "typeName": {
                          "type": "Identifier",
                          "start": 703,
                          "end": 712,
                          "name": "BaseProps",
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
                  "start": 714,
                  "end": 721,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 717,
                    "end": 721
                  }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 724,
      "end": 792,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 731,
        "end": 792,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 737,
            "end": 791,
            "id": {
              "type": "Identifier",
              "start": 737,
              "end": 749,
              "name": "StyledSelect",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 752,
              "end": 791,
              "callee": {
                "type": "MemberExpression",
                "start": 752,
                "end": 770,
                "object": {
                  "type": "CallExpression",
                  "start": 752,
                  "end": 764,
                  "callee": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 758,
                    "name": "styled",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 759,
                      "end": 763,
                      "name": "Flex",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 770,
                  "name": "attrs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 771,
                  "end": 790,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 775,
                      "end": 787,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 777,
                        "name": "as",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 779,
                        "end": 787,
                        "value": "select",
                        "raw": "\"select\""
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
