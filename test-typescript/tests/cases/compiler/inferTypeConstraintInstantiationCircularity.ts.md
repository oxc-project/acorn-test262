__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1702,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "AMappedType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "T",
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
        "type": "TSMappedType",
        "start": 22,
        "end": 54,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 25,
          "end": 43,
          "name": {
            "type": "Identifier",
            "start": 25,
            "end": 32,
            "name": "KeyType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 36,
            "end": 43,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 42,
              "end": 43,
              "typeName": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 46,
          "end": 52
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 36,
          "end": 43,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 42,
            "end": 43,
            "typeName": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 25,
          "end": 32,
          "name": "KeyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "HasM",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 69,
        "end": 85,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 73,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 76,
                "end": 82
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
      "start": 121,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 133,
        "name": "X1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 133,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 151,
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 151,
                "name": "HasM",
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
            "start": 155,
            "end": 221,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "name": "Output",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 221,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 175,
                "name": "AMappedType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 175,
                "end": 221,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 176,
                    "end": 220,
                    "types": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 176,
                        "end": 190,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 178,
                            "end": 188,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 179,
                              "name": "s",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 179,
                              "end": 187,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 181,
                                "end": 187
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      {
                        "type": "TSMappedType",
                        "start": 193,
                        "end": 220,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 196,
                          "end": 208,
                          "name": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 197,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeOperator",
                            "start": 201,
                            "end": 208,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 207,
                              "end": 208,
                              "typeName": {
                                "type": "Identifier",
                                "start": 207,
                                "end": 208,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 211,
                          "end": 217
                        },
                        "optional": null,
                        "readonly": null,
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 201,
                          "end": 208,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 207,
                            "end": 208,
                            "typeName": {
                              "type": "Identifier",
                              "start": 207,
                              "end": 208,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 197,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 224,
        "end": 255,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 228,
            "end": 235,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 231,
              "name": "tee",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 233,
                "end": 234,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 238,
            "end": 253,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 244,
              "name": "output",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 246,
                "end": 252,
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 252,
                  "name": "Output",
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
      "start": 257,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 264,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 264,
        "end": 267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 266,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "name": "T",
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
        "start": 270,
        "end": 303,
        "checkType": {
          "type": "TSTypeReference",
          "start": 270,
          "end": 271,
          "typeName": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 280,
          "end": 291,
          "typeName": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "name": "X1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 282,
            "end": 291,
            "params": [
              {
                "type": "TSInferType",
                "start": 283,
                "end": 290,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 289,
                  "end": 290,
                  "name": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
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
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 294,
          "end": 295,
          "typeName": {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 298,
          "end": 303
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 331,
      "end": 405,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 343,
        "name": "X2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 343,
        "end": 373,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 347,
            "end": 361,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 361,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 361,
                "name": "HasM",
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
            "start": 365,
            "end": 371,
            "name": {
              "type": "Identifier",
              "start": 365,
              "end": 371,
              "name": "Output",
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
        "start": 374,
        "end": 405,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 378,
            "end": 385,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "name": "tee",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 384,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 383,
                "end": 384,
                "typeName": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 384,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 388,
            "end": 403,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 394,
              "name": "output",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 402,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 402,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 402,
                  "name": "Output",
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
      "start": 407,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 414,
        "name": "F2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 414,
        "end": 417,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 415,
            "end": 416,
            "name": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "name": "T",
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
        "start": 420,
        "end": 520,
        "checkType": {
          "type": "TSTypeReference",
          "start": 420,
          "end": 421,
          "typeName": {
            "type": "Identifier",
            "start": 420,
            "end": 421,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 430,
          "end": 508,
          "typeName": {
            "type": "Identifier",
            "start": 430,
            "end": 432,
            "name": "X2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 432,
            "end": 508,
            "params": [
              {
                "type": "TSInferType",
                "start": 433,
                "end": 440,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 439,
                  "end": 440,
                  "name": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 440,
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
                }
              },
              {
                "type": "TSTypeReference",
                "start": 442,
                "end": 507,
                "typeName": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 453,
                  "name": "AMappedType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 453,
                  "end": 507,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 454,
                      "end": 506,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 454,
                          "end": 468,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 456,
                              "end": 466,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 456,
                                "end": 457,
                                "name": "s",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 457,
                                "end": 465,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 459,
                                  "end": 465
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        {
                          "type": "TSMappedType",
                          "start": 471,
                          "end": 506,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 474,
                            "end": 494,
                            "name": {
                              "type": "Identifier",
                              "start": 474,
                              "end": 475,
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeOperator",
                              "start": 479,
                              "end": 494,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSInferType",
                                "start": 486,
                                "end": 493,
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "start": 492,
                                  "end": 493,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 492,
                                    "end": 493,
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
                                }
                              }
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 497,
                            "end": 503
                          },
                          "optional": null,
                          "readonly": null,
                          "constraint": {
                            "type": "TSTypeOperator",
                            "start": 479,
                            "end": 494,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSInferType",
                              "start": 486,
                              "end": 493,
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "start": 492,
                                "end": 493,
                                "name": {
                                  "type": "Identifier",
                                  "start": 492,
                                  "end": 493,
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
                              }
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 475,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 511,
          "end": 512,
          "typeName": {
            "type": "Identifier",
            "start": 511,
            "end": 512,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 515,
          "end": 520
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 542,
      "end": 596,
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 555,
        "name": "Simplify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 555,
        "end": 558,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 556,
            "end": 557,
            "name": {
              "type": "Identifier",
              "start": 556,
              "end": 557,
              "name": "T",
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
        "type": "TSMappedType",
        "start": 561,
        "end": 595,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 563,
          "end": 581,
          "name": {
            "type": "Identifier",
            "start": 563,
            "end": 570,
            "name": "KeyType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 574,
            "end": 581,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 580,
              "end": 581,
              "typeName": {
                "type": "Identifier",
                "start": 580,
                "end": 581,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 584,
          "end": 594,
          "objectType": {
            "type": "TSTypeReference",
            "start": 584,
            "end": 585,
            "typeName": {
              "type": "Identifier",
              "start": 584,
              "end": 585,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 586,
            "end": 593,
            "typeName": {
              "type": "Identifier",
              "start": 586,
              "end": 593,
              "name": "KeyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 574,
          "end": 581,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 580,
            "end": 581,
            "typeName": {
              "type": "Identifier",
              "start": 580,
              "end": 581,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 563,
          "end": 570,
          "name": "KeyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 598,
      "end": 705,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 615,
        "name": "optionalKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 615,
        "end": 633,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 616,
            "end": 632,
            "name": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 626,
              "end": 632
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
        "start": 636,
        "end": 704,
        "objectType": {
          "type": "TSMappedType",
          "start": 636,
          "end": 695,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 643,
            "end": 655,
            "name": {
              "type": "Identifier",
              "start": 643,
              "end": 644,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 648,
              "end": 655,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 654,
                "end": 655,
                "typeName": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 655,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 658,
            "end": 692,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 658,
              "end": 667
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 676,
              "end": 680,
              "objectType": {
                "type": "TSTypeReference",
                "start": 676,
                "end": 677,
                "typeName": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 677,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 678,
                "end": 679,
                "typeName": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 683,
              "end": 684,
              "typeName": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 687,
              "end": 692
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 648,
            "end": 655,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 654,
              "end": 655,
              "typeName": {
                "type": "Identifier",
                "start": 654,
                "end": 655,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 643,
            "end": 644,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 696,
          "end": 703,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 702,
            "end": 703,
            "typeName": {
              "type": "Identifier",
              "start": 702,
              "end": 703,
              "name": "T",
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
      "start": 707,
      "end": 779,
      "id": {
        "type": "Identifier",
        "start": 712,
        "end": 724,
        "name": "requiredKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 724,
        "end": 742,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 725,
            "end": 741,
            "name": {
              "type": "Identifier",
              "start": 725,
              "end": 726,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 735,
              "end": 741
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
        "start": 745,
        "end": 778,
        "typeName": {
          "type": "Identifier",
          "start": 745,
          "end": 752,
          "name": "Exclude",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 752,
          "end": 778,
          "params": [
            {
              "type": "TSTypeOperator",
              "start": 753,
              "end": 760,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 759,
                "end": 760,
                "typeName": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 760,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 762,
              "end": 777,
              "typeName": {
                "type": "Identifier",
                "start": 762,
                "end": 774,
                "name": "optionalKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "T",
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
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 781,
      "end": 909,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 788,
        "end": 909,
        "id": {
          "type": "Identifier",
          "start": 793,
          "end": 809,
          "name": "addQuestionMarks",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 809,
          "end": 827,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 810,
              "end": 826,
              "name": {
                "type": "Identifier",
                "start": 810,
                "end": 811,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 820,
                "end": 826
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
          "start": 830,
          "end": 908,
          "types": [
            {
              "type": "TSMappedType",
              "start": 830,
              "end": 868,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 837,
                "end": 857,
                "name": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 838,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 842,
                  "end": 857,
                  "typeName": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 854,
                    "name": "optionalKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 854,
                    "end": 857,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 855,
                        "end": 856,
                        "typeName": {
                          "type": "Identifier",
                          "start": 855,
                          "end": 856,
                          "name": "T",
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
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 861,
                "end": 865,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 861,
                  "end": 862,
                  "typeName": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 862,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 863,
                  "end": 864,
                  "typeName": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 864,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": true,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 842,
                "end": 857,
                "typeName": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 854,
                  "name": "optionalKeys",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 854,
                  "end": 857,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 855,
                      "end": 856,
                      "typeName": {
                        "type": "Identifier",
                        "start": 855,
                        "end": 856,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "key": {
                "type": "Identifier",
                "start": 837,
                "end": 838,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "TSMappedType",
              "start": 871,
              "end": 908,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 878,
                "end": 898,
                "name": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 879,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 883,
                  "end": 898,
                  "typeName": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 895,
                    "name": "requiredKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 895,
                    "end": 898,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 896,
                        "end": 897,
                        "typeName": {
                          "type": "Identifier",
                          "start": 896,
                          "end": 897,
                          "name": "T",
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
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 901,
                "end": 905,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 901,
                  "end": 902,
                  "typeName": {
                    "type": "Identifier",
                    "start": 901,
                    "end": 902,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 903,
                  "end": 904,
                  "typeName": {
                    "type": "Identifier",
                    "start": 903,
                    "end": 904,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 883,
                "end": 898,
                "typeName": {
                  "type": "Identifier",
                  "start": 883,
                  "end": 895,
                  "name": "requiredKeys",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 895,
                  "end": 898,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 896,
                      "end": 897,
                      "typeName": {
                        "type": "Identifier",
                        "start": 896,
                        "end": 897,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "key": {
                "type": "Identifier",
                "start": 878,
                "end": 879,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 911,
      "end": 965,
      "id": {
        "type": "Identifier",
        "start": 916,
        "end": 927,
        "name": "ZodRawShape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 930,
        "end": 964,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 936,
            "end": 962,
            "parameters": [
              {
                "type": "Identifier",
                "start": 937,
                "end": 946,
                "name": "k",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 938,
                  "end": 946,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 940,
                    "end": 946
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 947,
              "end": 961,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 949,
                "end": 961,
                "typeName": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 956,
                  "name": "ZodType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 956,
                  "end": 961,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 957,
                      "end": 960
                    }
                  ]
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 967,
      "end": 1013,
      "id": {
        "type": "Identifier",
        "start": 977,
        "end": 984,
        "name": "ZodType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 984,
        "end": 992,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 985,
            "end": 991,
            "name": {
              "type": "Identifier",
              "start": 985,
              "end": 991,
              "name": "Output",
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
        "start": 993,
        "end": 1013,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 997,
            "end": 1011,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 997,
              "end": 1002,
              "name": "_type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1010,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1004,
                "end": 1010,
                "typeName": {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1010,
                  "name": "Output",
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
      "start": 1015,
      "end": 1232,
      "id": {
        "type": "Identifier",
        "start": 1025,
        "end": 1034,
        "name": "ZodObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1191,
          "end": 1206,
          "expression": {
            "type": "Identifier",
            "start": 1191,
            "end": 1198,
            "name": "ZodType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1198,
            "end": 1206,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1199,
                "end": 1205,
                "typeName": {
                  "type": "Identifier",
                  "start": 1199,
                  "end": 1205,
                  "name": "Output",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1034,
        "end": 1182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1038,
            "end": 1059,
            "name": {
              "type": "Identifier",
              "start": 1038,
              "end": 1039,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1048,
              "end": 1059,
              "typeName": {
                "type": "Identifier",
                "start": 1048,
                "end": 1059,
                "name": "ZodRawShape",
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
            "start": 1063,
            "end": 1180,
            "name": {
              "type": "Identifier",
              "start": 1063,
              "end": 1069,
              "name": "Output",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1072,
              "end": 1180,
              "typeName": {
                "type": "Identifier",
                "start": 1072,
                "end": 1080,
                "name": "Simplify",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1080,
                "end": 1180,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 1086,
                    "end": 1176,
                    "types": [
                      {
                        "type": "TSMappedType",
                        "start": 1086,
                        "end": 1130,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 1095,
                          "end": 1115,
                          "name": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1096,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1100,
                            "end": 1115,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1100,
                              "end": 1112,
                              "name": "optionalKeys",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1112,
                              "end": 1115,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1113,
                                  "end": 1114,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1113,
                                    "end": 1114,
                                    "name": "T",
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
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 1119,
                          "end": 1123,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 1119,
                            "end": 1120,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1119,
                              "end": 1120,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 1121,
                            "end": 1122,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1121,
                              "end": 1122,
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "optional": true,
                        "readonly": null,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1100,
                          "end": 1115,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1100,
                            "end": 1112,
                            "name": "optionalKeys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1112,
                            "end": 1115,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1113,
                                "end": 1114,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1113,
                                  "end": 1114,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 1095,
                          "end": 1096,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "TSMappedType",
                        "start": 1133,
                        "end": 1176,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 1142,
                          "end": 1162,
                          "name": {
                            "type": "Identifier",
                            "start": 1142,
                            "end": 1143,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1147,
                            "end": 1162,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1147,
                              "end": 1159,
                              "name": "requiredKeys",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1159,
                              "end": 1162,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1160,
                                  "end": 1161,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1160,
                                    "end": 1161,
                                    "name": "T",
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
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 1165,
                          "end": 1169,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 1165,
                            "end": 1166,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1165,
                              "end": 1166,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 1167,
                            "end": 1168,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1167,
                              "end": 1168,
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "optional": null,
                        "readonly": null,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1147,
                          "end": 1162,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1147,
                            "end": 1159,
                            "name": "requiredKeys",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1159,
                            "end": 1162,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1160,
                                "end": 1161,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1160,
                                  "end": 1161,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 1142,
                          "end": 1143,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1207,
        "end": 1232,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1211,
            "end": 1230,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1220,
              "end": 1226,
              "name": "_shape",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1226,
              "end": 1229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1228,
                "end": 1229,
                "typeName": {
                  "type": "Identifier",
                  "start": 1228,
                  "end": 1229,
                  "name": "T",
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
      "start": 1234,
      "end": 1338,
      "id": {
        "type": "Identifier",
        "start": 1239,
        "end": 1247,
        "name": "MyObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1247,
        "end": 1250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1248,
            "end": 1249,
            "name": {
              "type": "Identifier",
              "start": 1248,
              "end": 1249,
              "name": "T",
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
        "start": 1253,
        "end": 1337,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1253,
          "end": 1254,
          "typeName": {
            "type": "Identifier",
            "start": 1253,
            "end": 1254,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1263,
          "end": 1281,
          "typeName": {
            "type": "Identifier",
            "start": 1263,
            "end": 1272,
            "name": "ZodObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1272,
            "end": 1281,
            "params": [
              {
                "type": "TSInferType",
                "start": 1273,
                "end": 1280,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1279,
                  "end": 1280,
                  "name": {
                    "type": "Identifier",
                    "start": 1279,
                    "end": 1280,
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
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 1286,
          "end": 1327,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1286,
            "end": 1287,
            "typeName": {
              "type": "Identifier",
              "start": 1286,
              "end": 1287,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1296,
            "end": 1307,
            "typeName": {
              "type": "Identifier",
              "start": 1296,
              "end": 1307,
              "name": "ZodRawShape",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1314,
            "end": 1315,
            "typeName": {
              "type": "Identifier",
              "start": 1314,
              "end": 1315,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1322,
            "end": 1327
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1332,
          "end": 1337
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1362,
      "end": 1442,
      "id": {
        "type": "Identifier",
        "start": 1367,
        "end": 1371,
        "name": "Cell",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1371,
        "end": 1423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1372,
            "end": 1401,
            "name": {
              "type": "Identifier",
              "start": 1372,
              "end": 1377,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1386,
              "end": 1395,
              "typeName": {
                "type": "Identifier",
                "start": 1386,
                "end": 1395,
                "name": "BaseValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 1398,
              "end": 1401
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1403,
            "end": 1422,
            "name": {
              "type": "Identifier",
              "start": 1403,
              "end": 1412,
              "name": "BaseValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1415,
              "end": 1422
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1426,
        "end": 1442,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1430,
            "end": 1440,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1430,
              "end": 1432,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1432,
              "end": 1440,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1434,
                "end": 1440
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
      "start": 1444,
      "end": 1514,
      "id": {
        "type": "Identifier",
        "start": 1449,
        "end": 1454,
        "name": "Items",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1454,
        "end": 1480,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1455,
            "end": 1479,
            "name": {
              "type": "Identifier",
              "start": 1455,
              "end": 1459,
              "name": "Type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1468,
              "end": 1472,
              "typeName": {
                "type": "Identifier",
                "start": 1468,
                "end": 1472,
                "name": "Cell",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 1475,
              "end": 1479,
              "typeName": {
                "type": "Identifier",
                "start": 1475,
                "end": 1479,
                "name": "Cell",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1483,
        "end": 1514,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1487,
            "end": 1497,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1487,
              "end": 1491,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1491,
              "end": 1497,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1493,
                "end": 1497,
                "typeName": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1497,
                  "name": "Type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1500,
            "end": 1512,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1500,
              "end": 1504,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1504,
              "end": 1512,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1506,
                "end": 1512
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
      "start": 1516,
      "end": 1701,
      "id": {
        "type": "Identifier",
        "start": 1521,
        "end": 1540,
        "name": "InferIOItemToJSType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1540,
        "end": 1557,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1541,
            "end": 1556,
            "name": {
              "type": "Identifier",
              "start": 1541,
              "end": 1542,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1551,
              "end": 1556,
              "typeName": {
                "type": "Identifier",
                "start": 1551,
                "end": 1556,
                "name": "Items",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1562,
        "end": 1701,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1562,
          "end": 1563,
          "typeName": {
            "type": "Identifier",
            "start": 1562,
            "end": 1563,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 1572,
          "end": 1589,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1574,
              "end": 1587,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1574,
                "end": 1578,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1578,
                "end": 1587,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1580,
                  "end": 1587,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1586,
                    "end": 1587,
                    "name": {
                      "type": "Identifier",
                      "start": 1586,
                      "end": 1587,
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
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 1596,
          "end": 1689,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1596,
            "end": 1597,
            "typeName": {
              "type": "Identifier",
              "start": 1596,
              "end": 1597,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1606,
            "end": 1665,
            "typeName": {
              "type": "Identifier",
              "start": 1606,
              "end": 1610,
              "name": "Cell",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1610,
              "end": 1665,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 1611,
                  "end": 1618,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1617,
                    "end": 1618,
                    "name": {
                      "type": "Identifier",
                      "start": 1617,
                      "end": 1618,
                      "name": "V",
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
            "start": 1674,
            "end": 1675,
            "typeName": {
              "type": "Identifier",
              "start": 1674,
              "end": 1675,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1684,
            "end": 1689
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1696,
          "end": 1701
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
