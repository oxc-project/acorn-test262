__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 828,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "name": "Predicate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 26,
          "end": 29,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 28,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "A",
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
          "start": 30,
          "end": 53,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 36,
              "end": 51,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 40,
                      "end": 41,
                      "typeName": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
                        "name": "A",
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
                "start": 42,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 44,
                  "end": 51
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "name": "Left",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 71,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "E",
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
        "start": 73,
        "end": 123,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 100,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 92,
              "name": "_tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 94,
                "end": 100,
                "literal": {
                  "type": "Literal",
                  "start": 94,
                  "end": 100,
                  "value": "Left",
                  "raw": "'Left'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 121,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "name": "left",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "E",
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
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 142,
        "name": "Right",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "name": "A",
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
        "start": 146,
        "end": 198,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 174,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 165,
              "name": "_tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 174,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 167,
                "end": 174,
                "literal": {
                  "type": "Literal",
                  "start": 167,
                  "end": 174,
                  "value": "Right",
                  "raw": "'Right'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 196,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 193,
              "name": "right",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "A",
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
      "start": 200,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 211,
        "name": "Either",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 211,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 212,
            "end": 213,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "name": "E",
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
            "start": 215,
            "end": 216,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "A",
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
        "type": "TSUnionType",
        "start": 220,
        "end": 238,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 220,
            "end": 227,
            "typeName": {
              "type": "Identifier",
              "start": 220,
              "end": 224,
              "name": "Left",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 224,
              "end": 227,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 225,
                  "end": 226,
                  "typeName": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "name": "E",
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
            "start": 230,
            "end": 238,
            "typeName": {
              "type": "Identifier",
              "start": 230,
              "end": 235,
              "name": "Right",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 235,
              "end": 238,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 236,
                  "end": 237,
                  "typeName": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 237,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 241,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 261,
        "name": "Refinement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 261,
        "end": 277,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 262,
            "end": 263,
            "name": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "name": "A",
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
            "start": 265,
            "end": 276,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 276,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 276,
                "name": "A",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 278,
        "end": 300,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 284,
            "end": 298,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 285,
                "end": 289,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 289,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 288,
                    "end": 289,
                    "typeName": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 289,
                      "name": "A",
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
              "start": 290,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 292,
                "end": 298,
                "parameterName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 297,
                  "end": 298,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 297,
                    "end": 298,
                    "typeName": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
      "start": 302,
      "end": 590,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 589,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 589,
            "name": "filter",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 589,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 324,
                "end": 589,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 330,
                    "end": 420,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 330,
                      "end": 346,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 331,
                          "end": 332,
                          "name": {
                            "type": "Identifier",
                            "start": 331,
                            "end": 332,
                            "name": "A",
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
                          "start": 334,
                          "end": 345,
                          "name": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 335,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 344,
                            "end": 345,
                            "typeName": {
                              "type": "Identifier",
                              "start": 344,
                              "end": 345,
                              "name": "A",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 347,
                        "end": 375,
                        "name": "refinement",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 357,
                          "end": 375,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 359,
                            "end": 375,
                            "typeName": {
                              "type": "Identifier",
                              "start": 359,
                              "end": 369,
                              "name": "Refinement",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 369,
                              "end": 375,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 370,
                                  "end": 371,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 370,
                                    "end": 371,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 373,
                                  "end": 374,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 373,
                                    "end": 374,
                                    "name": "B",
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
                      "start": 376,
                      "end": 420,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 378,
                        "end": 420,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 379,
                            "end": 399,
                            "name": "as",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 381,
                              "end": 399,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 383,
                                "end": 399,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 383,
                                  "end": 396,
                                  "name": "ReadonlyArray",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 396,
                                  "end": 399,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 397,
                                      "end": 398,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 397,
                                        "end": 398,
                                        "name": "A",
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
                          "start": 401,
                          "end": 420,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 404,
                            "end": 420,
                            "typeName": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 417,
                              "name": "ReadonlyArray",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 417,
                              "end": 420,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 418,
                                  "end": 419,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 418,
                                    "end": 419,
                                    "name": "B",
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
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 425,
                    "end": 510,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 425,
                      "end": 428,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 426,
                          "end": 427,
                          "name": {
                            "type": "Identifier",
                            "start": 426,
                            "end": 427,
                            "name": "A",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 429,
                        "end": 452,
                        "name": "predicate",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 438,
                          "end": 452,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 440,
                            "end": 452,
                            "typeName": {
                              "type": "Identifier",
                              "start": 440,
                              "end": 449,
                              "name": "Predicate",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 449,
                              "end": 452,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 450,
                                  "end": 451,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 450,
                                    "end": 451,
                                    "name": "A",
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
                      "start": 453,
                      "end": 510,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 455,
                        "end": 510,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 455,
                          "end": 468,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 456,
                              "end": 467,
                              "name": {
                                "type": "Identifier",
                                "start": 456,
                                "end": 457,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 466,
                                "end": 467,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 466,
                                  "end": 467,
                                  "name": "A",
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 469,
                            "end": 489,
                            "name": "bs",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 471,
                              "end": 489,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 473,
                                "end": 489,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 473,
                                  "end": 486,
                                  "name": "ReadonlyArray",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 486,
                                  "end": 489,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 487,
                                      "end": 488,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 487,
                                        "end": 488,
                                        "name": "B",
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
                          "start": 491,
                          "end": 510,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 494,
                            "end": 510,
                            "typeName": {
                              "type": "Identifier",
                              "start": 494,
                              "end": 507,
                              "name": "ReadonlyArray",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 507,
                              "end": 510,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 508,
                                  "end": 509,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 508,
                                    "end": 509,
                                    "name": "B",
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
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 515,
                    "end": 587,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 515,
                      "end": 518,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 516,
                          "end": 517,
                          "name": {
                            "type": "Identifier",
                            "start": 516,
                            "end": 517,
                            "name": "A",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 519,
                        "end": 542,
                        "name": "predicate",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 528,
                          "end": 542,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 530,
                            "end": 542,
                            "typeName": {
                              "type": "Identifier",
                              "start": 530,
                              "end": 539,
                              "name": "Predicate",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 539,
                              "end": 542,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 540,
                                  "end": 541,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 540,
                                    "end": 541,
                                    "name": "A",
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
                      "start": 543,
                      "end": 587,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 545,
                        "end": 587,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 546,
                            "end": 566,
                            "name": "as",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 548,
                              "end": 566,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 550,
                                "end": 566,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 550,
                                  "end": 563,
                                  "name": "ReadonlyArray",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 563,
                                  "end": 566,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 564,
                                      "end": 565,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 564,
                                        "end": 565,
                                        "name": "A",
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
                          "start": 568,
                          "end": 587,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 571,
                            "end": 587,
                            "typeName": {
                              "type": "Identifier",
                              "start": 571,
                              "end": 584,
                              "name": "ReadonlyArray",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 584,
                              "end": 587,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 585,
                                  "end": 586,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 585,
                                    "end": 586,
                                    "name": "A",
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
                    }
                  }
                ]
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
      "type": "TSDeclareFunction",
      "start": 592,
      "end": 646,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 613,
        "name": "pipe",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 620,
          "end": 624,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 621,
            "end": 624,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 623,
              "end": 624,
              "typeName": {
                "type": "Identifier",
                "start": 623,
                "end": 624,
                "name": "A",
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
          "start": 626,
          "end": 641,
          "name": "ab",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 628,
            "end": 641,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 630,
              "end": 641,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 631,
                  "end": 635,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 632,
                    "end": 635,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 634,
                      "end": 635,
                      "typeName": {
                        "type": "Identifier",
                        "start": 634,
                        "end": 635,
                        "name": "A",
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
                "start": 637,
                "end": 641,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 640,
                  "end": 641,
                  "typeName": {
                    "type": "Identifier",
                    "start": 640,
                    "end": 641,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 613,
        "end": 619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 614,
            "end": 615,
            "name": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "name": "A",
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
            "start": 617,
            "end": 618,
            "name": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "name": "B",
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
        "start": 642,
        "end": 645,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 644,
          "end": 645,
          "typeName": {
            "type": "Identifier",
            "start": 644,
            "end": 645,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 647,
      "end": 733,
      "id": {
        "type": "Identifier",
        "start": 664,
        "end": 670,
        "name": "exists",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 674,
          "end": 697,
          "name": "predicate",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 683,
            "end": 697,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 685,
              "end": 697,
              "typeName": {
                "type": "Identifier",
                "start": 685,
                "end": 694,
                "name": "Predicate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 694,
                "end": 697,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 695,
                    "end": 696,
                    "typeName": {
                      "type": "Identifier",
                      "start": 695,
                      "end": 696,
                      "name": "A",
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 670,
        "end": 673,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 671,
            "end": 672,
            "name": {
              "type": "Identifier",
              "start": 671,
              "end": 672,
              "name": "A",
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
        "start": 698,
        "end": 732,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 700,
          "end": 732,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 700,
            "end": 703,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 701,
                "end": 702,
                "name": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "name": "E",
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
          "params": [
            {
              "type": "Identifier",
              "start": 704,
              "end": 720,
              "name": "ma",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 706,
                "end": 720,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 708,
                  "end": 720,
                  "typeName": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 714,
                    "name": "Either",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 714,
                    "end": 720,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 715,
                        "end": 716,
                        "typeName": {
                          "type": "Identifier",
                          "start": 715,
                          "end": 716,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 718,
                        "end": 719,
                        "typeName": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 719,
                          "name": "A",
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
            "start": 722,
            "end": 732,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 725,
              "end": 732
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 735,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 777,
            "name": "es",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 777,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 753,
                "end": 777,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 753,
                  "end": 775,
                  "typeName": {
                    "type": "Identifier",
                    "start": 753,
                    "end": 759,
                    "name": "Either",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 759,
                    "end": 775,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 760,
                        "end": 766
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 768,
                        "end": 774
                      }
                    ]
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
      "type": "VariableDeclaration",
      "start": 779,
      "end": 827,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 785,
          "end": 827,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 786,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 789,
            "end": 827,
            "callee": {
              "type": "Identifier",
              "start": 789,
              "end": 793,
              "name": "pipe",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 794,
                "end": 796,
                "name": "es",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 798,
                "end": 826,
                "callee": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 804,
                  "name": "filter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 805,
                    "end": 825,
                    "callee": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 811,
                      "name": "exists",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 812,
                        "end": 824,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 813,
                            "end": 814,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BinaryExpression",
                          "start": 819,
                          "end": 824,
                          "left": {
                            "type": "Identifier",
                            "start": 819,
                            "end": 820,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": ">",
                          "right": {
                            "type": "Literal",
                            "start": 823,
                            "end": 824,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
