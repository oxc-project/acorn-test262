__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 397,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "_R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
        "start": 13,
        "end": 67,
        "checkType": {
          "type": "TSTupleType",
          "start": 13,
          "end": 16,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 14,
              "end": 15,
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 25,
          "end": 55,
          "elementTypes": [
            {
              "type": "TSTypeLiteral",
              "start": 26,
              "end": 54,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 28,
                  "end": 52,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 30,
                    "decorators": [],
                    "name": "_R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 32,
                      "end": 52,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 33,
                          "end": 43,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 34,
                            "end": 43,
                            "typeAnnotation": {
                              "type": "TSInferType",
                              "start": 36,
                              "end": 43,
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "start": 42,
                                "end": 43,
                                "name": {
                                  "type": "Identifier",
                                  "start": 42,
                                  "end": 43,
                                  "decorators": [],
                                  "name": "R",
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
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 45,
                        "end": 52,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 48,
                          "end": 52
                        }
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
        "trueType": {
          "type": "TSTypeReference",
          "start": 58,
          "end": 59,
          "typeName": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 62,
          "end": 67
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 69,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "_E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
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
        "start": 82,
        "end": 129,
        "checkType": {
          "type": "TSTupleType",
          "start": 82,
          "end": 85,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 83,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 94,
          "end": 117,
          "elementTypes": [
            {
              "type": "TSTypeLiteral",
              "start": 95,
              "end": 116,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 97,
                  "end": 114,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 99,
                    "decorators": [],
                    "name": "_E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 101,
                      "end": 114,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 104,
                        "end": 114,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 107,
                          "end": 114,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 113,
                            "end": 114,
                            "name": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 114,
                              "decorators": [],
                              "name": "E",
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
        "trueType": {
          "type": "TSTypeReference",
          "start": 120,
          "end": 121,
          "typeName": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 124,
          "end": 129
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 131,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 138,
        "decorators": [],
        "name": "_A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 138,
        "end": 141,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 140,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
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
        "start": 144,
        "end": 191,
        "checkType": {
          "type": "TSTupleType",
          "start": 144,
          "end": 147,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 145,
              "end": 146,
              "typeName": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 156,
          "end": 179,
          "elementTypes": [
            {
              "type": "TSTypeLiteral",
              "start": 157,
              "end": 178,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 159,
                  "end": 176,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 161,
                    "decorators": [],
                    "name": "_A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 161,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 163,
                      "end": 176,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 166,
                        "end": 176,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 169,
                          "end": 176,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 175,
                            "end": 176,
                            "name": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "decorators": [],
                              "name": "A",
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
        "trueType": {
          "type": "TSTypeReference",
          "start": 182,
          "end": 183,
          "typeName": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 186,
          "end": 191
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 194,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 208,
        "decorators": [],
        "name": "Sync",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "R",
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
            "start": 212,
            "end": 213,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "E",
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
            "start": 215,
            "end": 216,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "A",
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
        "start": 218,
        "end": 273,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 222,
            "end": 241,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 224,
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 240,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 226,
                "end": 240,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 227,
                    "end": 231,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 228,
                      "end": 231,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 230,
                        "end": 231,
                        "typeName": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 231,
                          "decorators": [],
                          "name": "R",
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
                  "start": 233,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 236,
                    "end": 240
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 244,
            "end": 256,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 246,
              "decorators": [],
              "name": "_E",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 255,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 248,
                "end": 255,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 251,
                  "end": 255,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 254,
                    "end": 255,
                    "typeName": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 259,
            "end": 271,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 261,
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 270,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 263,
                "end": 270,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 266,
                  "end": 270,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 269,
                    "end": 270,
                    "typeName": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 270,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 275,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 281,
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 284,
        "end": 314,
        "typeName": {
          "type": "Identifier",
          "start": 284,
          "end": 286,
          "decorators": [],
          "name": "_R",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 286,
          "end": 314,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 287,
              "end": 313,
              "typeName": {
                "type": "Identifier",
                "start": 287,
                "end": 291,
                "decorators": [],
                "name": "Sync",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 291,
                "end": 313,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 292,
                    "end": 298
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 300,
                    "end": 306
                  },
                  {
                    "type": "TSVoidKeyword",
                    "start": 308,
                    "end": 312
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
      "type": "TSTypeAliasDeclaration",
      "start": 316,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 325,
        "end": 355,
        "typeName": {
          "type": "Identifier",
          "start": 325,
          "end": 327,
          "decorators": [],
          "name": "_E",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 327,
          "end": 355,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 328,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 328,
                "end": 332,
                "decorators": [],
                "name": "Sync",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 332,
                "end": 354,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 333,
                    "end": 339
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 341,
                    "end": 347
                  },
                  {
                    "type": "TSVoidKeyword",
                    "start": 349,
                    "end": 353
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
      "type": "TSTypeAliasDeclaration",
      "start": 357,
      "end": 397,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 363,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 366,
        "end": 396,
        "typeName": {
          "type": "Identifier",
          "start": 366,
          "end": 368,
          "decorators": [],
          "name": "_A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 368,
          "end": 396,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 369,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 369,
                "end": 373,
                "decorators": [],
                "name": "Sync",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 373,
                "end": 395,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 374,
                    "end": 380
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 382,
                    "end": 388
                  },
                  {
                    "type": "TSVoidKeyword",
                    "start": 390,
                    "end": 394
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
