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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 53,
        "body": {
          "type": "TSInterfaceBody",
          "start": 30,
          "end": 53,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 36,
              "end": 51,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
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
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "decorators": [],
          "name": "Predicate",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 26,
          "end": 29,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 28,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 123,
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
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 92,
              "decorators": [],
              "name": "_tag",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
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
                  "raw": "'Left'",
                  "value": "Left"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 121,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 118,
              "decorators": [],
              "name": "left",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
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
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "decorators": [],
        "name": "Left",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 71,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 198,
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
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 165,
              "decorators": [],
              "name": "_tag",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
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
                  "raw": "'Right'",
                  "value": "Right"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 196,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 193,
              "decorators": [],
              "name": "right",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 142,
        "decorators": [],
        "name": "Right",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 200,
      "end": 239,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 211,
        "decorators": [],
        "name": "Either",
        "optional": false
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
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 220,
              "end": 224,
              "decorators": [],
              "name": "Left",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 230,
            "end": 238,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 230,
              "end": 235,
              "decorators": [],
              "name": "Right",
              "optional": false
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 216,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 241,
      "end": 300,
      "body": {
        "type": "TSInterfaceBody",
        "start": 278,
        "end": 300,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 284,
            "end": 298,
            "params": [
              {
                "type": "Identifier",
                "start": 285,
                "end": 289,
                "decorators": [],
                "name": "a",
                "optional": false,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
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
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
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
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 261,
        "decorators": [],
        "name": "Refinement",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 261,
        "end": 277,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 262,
            "end": 263,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 276,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 276,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 276,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 589,
            "decorators": [],
            "name": "filter",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 347,
                        "end": 375,
                        "decorators": [],
                        "name": "refinement",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 357,
                          "end": 375,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 359,
                            "end": 375,
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
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 373,
                                  "end": 374,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 373,
                                    "end": 374,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 359,
                              "end": 369,
                              "decorators": [],
                              "name": "Refinement",
                              "optional": false
                            }
                          }
                        }
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 379,
                            "end": 399,
                            "decorators": [],
                            "name": "as",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 381,
                              "end": 399,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 383,
                                "end": 399,
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
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 383,
                                  "end": 396,
                                  "decorators": [],
                                  "name": "ReadonlyArray",
                                  "optional": false
                                }
                              }
                            }
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
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 417,
                              "decorators": [],
                              "name": "ReadonlyArray",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 330,
                      "end": 346,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 331,
                          "end": 332,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 331,
                            "end": 332,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 334,
                          "end": 345,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 344,
                            "end": 345,
                            "typeName": {
                              "type": "Identifier",
                              "start": 344,
                              "end": 345,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 335,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 425,
                    "end": 510,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 429,
                        "end": 452,
                        "decorators": [],
                        "name": "predicate",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 438,
                          "end": 452,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 440,
                            "end": 452,
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
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 440,
                              "end": 449,
                              "decorators": [],
                              "name": "Predicate",
                              "optional": false
                            }
                          }
                        }
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 469,
                            "end": 489,
                            "decorators": [],
                            "name": "bs",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 471,
                              "end": 489,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 473,
                                "end": 489,
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
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 473,
                                  "end": 486,
                                  "decorators": [],
                                  "name": "ReadonlyArray",
                                  "optional": false
                                }
                              }
                            }
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
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 494,
                              "end": 507,
                              "decorators": [],
                              "name": "ReadonlyArray",
                              "optional": false
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 455,
                          "end": 468,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 456,
                              "end": 467,
                              "const": false,
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 466,
                                "end": 467,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 466,
                                  "end": 467,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false
                                }
                              },
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 456,
                                "end": 457,
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              },
                              "out": false
                            }
                          ]
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 425,
                      "end": 428,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 426,
                          "end": 427,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 426,
                            "end": 427,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 515,
                    "end": 587,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 519,
                        "end": 542,
                        "decorators": [],
                        "name": "predicate",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 528,
                          "end": 542,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 530,
                            "end": 542,
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
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 530,
                              "end": 539,
                              "decorators": [],
                              "name": "Predicate",
                              "optional": false
                            }
                          }
                        }
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 546,
                            "end": 566,
                            "decorators": [],
                            "name": "as",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 548,
                              "end": 566,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 550,
                                "end": 566,
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
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 550,
                                  "end": 563,
                                  "decorators": [],
                                  "name": "ReadonlyArray",
                                  "optional": false
                                }
                              }
                            }
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
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 571,
                              "end": 584,
                              "decorators": [],
                              "name": "ReadonlyArray",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 515,
                      "end": 518,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 516,
                          "end": 517,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 516,
                            "end": 517,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 592,
      "end": 646,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 613,
        "decorators": [],
        "name": "pipe",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 620,
          "end": 624,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 626,
          "end": 641,
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 628,
            "end": 641,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 630,
              "end": 641,
              "params": [
                {
                  "type": "Identifier",
                  "start": 631,
                  "end": 635,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 613,
        "end": 619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 614,
            "end": 615,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 617,
            "end": 618,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 647,
      "end": 733,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 664,
        "end": 670,
        "decorators": [],
        "name": "exists",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 674,
          "end": 697,
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 683,
            "end": 697,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 685,
              "end": 697,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 685,
                "end": 694,
                "decorators": [],
                "name": "Predicate",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 698,
        "end": 732,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 700,
          "end": 732,
          "params": [
            {
              "type": "Identifier",
              "start": 704,
              "end": 720,
              "decorators": [],
              "name": "ma",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 706,
                "end": 720,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 708,
                  "end": 720,
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
                          "decorators": [],
                          "name": "E",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 718,
                        "end": 719,
                        "typeName": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 719,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 714,
                    "decorators": [],
                    "name": "Either",
                    "optional": false
                  }
                }
              }
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
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 700,
            "end": 703,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 701,
                "end": 702,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                },
                "out": false
              }
            ]
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 670,
        "end": 673,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 671,
            "end": 672,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 671,
              "end": 672,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 777,
            "decorators": [],
            "name": "es",
            "optional": false,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 753,
                    "end": 759,
                    "decorators": [],
                    "name": "Either",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 786,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 789,
            "end": 827,
            "arguments": [
              {
                "type": "Identifier",
                "start": 794,
                "end": 796,
                "decorators": [],
                "name": "es",
                "optional": false
              },
              {
                "type": "CallExpression",
                "start": 798,
                "end": 826,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 805,
                    "end": 825,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 812,
                        "end": 824,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 819,
                          "end": 824,
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "start": 819,
                            "end": 820,
                            "decorators": [],
                            "name": "n",
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 823,
                            "end": 824,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 813,
                            "end": 814,
                            "decorators": [],
                            "name": "n",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 811,
                      "decorators": [],
                      "name": "exists",
                      "optional": false
                    },
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 804,
                  "decorators": [],
                  "name": "filter",
                  "optional": false
                },
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 789,
              "end": 793,
              "decorators": [],
              "name": "pipe",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
