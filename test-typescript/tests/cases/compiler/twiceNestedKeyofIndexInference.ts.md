__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 826,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Set1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 31,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 24,
              "end": 31,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 35,
        "end": 139,
        "checkType": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 36,
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 45,
          "end": 50,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 45,
            "end": 48
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 53,
          "end": 54,
          "typeName": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSIntersectionType",
          "start": 57,
          "end": 139,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 57,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 61,
                "end": 86,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 63,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 85,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 72,
                      "name": "Exclude",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 72,
                      "end": 85,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 73,
                          "end": 80,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 79,
                            "end": 80,
                            "typeName": {
                              "type": "Identifier",
                              "start": 79,
                              "end": 80,
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
                          "start": 82,
                          "end": 84,
                          "typeName": {
                            "type": "Identifier",
                            "start": 82,
                            "end": 84,
                            "name": "K1",
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
            {
              "type": "TSIndexedAccessType",
              "start": 89,
              "end": 139,
              "objectType": {
                "type": "TSMappedType",
                "start": 89,
                "end": 135,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 96,
                  "end": 105,
                  "name": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 99,
                    "name": "SK1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 103,
                    "end": 105,
                    "typeName": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 105,
                      "name": "K1",
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
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 110,
                  "end": 132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 118,
                    "name": "Required",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 118,
                    "end": 132,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 119,
                        "end": 131,
                        "typeName": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 123,
                          "name": "Pick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 123,
                          "end": 131,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 124,
                              "end": 125,
                              "typeName": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 125,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 127,
                              "end": 130,
                              "typeName": {
                                "type": "Identifier",
                                "start": 127,
                                "end": 130,
                                "name": "SK1",
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
                "optional": "-",
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 103,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 105,
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "name": "SK1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 138,
                  "name": "K1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 142,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 151,
        "name": "Set2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 173,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 157,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 166,
              "end": 173,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
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
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 197,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 177,
              "name": "K2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 186,
              "end": 197,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 192,
                "end": 197,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 192,
                  "end": 193,
                  "typeName": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 193,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 194,
                  "end": 196,
                  "typeName": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 196,
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
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
        "type": "TSConditionalType",
        "start": 201,
        "end": 338,
        "checkType": {
          "type": "TSTypeReference",
          "start": 201,
          "end": 202,
          "typeName": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 211,
          "end": 216,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 211,
            "end": 214
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 219,
          "end": 220,
          "typeName": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSIntersectionType",
          "start": 223,
          "end": 338,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 223,
              "end": 252,
              "typeName": {
                "type": "Identifier",
                "start": 223,
                "end": 227,
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 227,
                "end": 252,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 228,
                    "end": 229,
                    "typeName": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 251,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 238,
                      "name": "Exclude",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 238,
                      "end": 251,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 239,
                          "end": 246,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 245,
                            "end": 246,
                            "typeName": {
                              "type": "Identifier",
                              "start": 245,
                              "end": 246,
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
                          "start": 248,
                          "end": 250,
                          "typeName": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 250,
                            "name": "K1",
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
            {
              "type": "TSIndexedAccessType",
              "start": 255,
              "end": 338,
              "objectType": {
                "type": "TSMappedType",
                "start": 255,
                "end": 334,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 262,
                  "end": 271,
                  "name": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 265,
                    "name": "SK1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 269,
                    "end": 271,
                    "typeName": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 271,
                      "name": "K1",
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
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 276,
                  "end": 331,
                  "typeName": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 284,
                    "name": "Required",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 284,
                    "end": 331,
                    "params": [
                      {
                        "type": "TSMappedType",
                        "start": 285,
                        "end": 330,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 296,
                          "end": 305,
                          "name": {
                            "type": "Identifier",
                            "start": 296,
                            "end": 299,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 303,
                            "end": 305,
                            "typeName": {
                              "type": "Identifier",
                              "start": 303,
                              "end": 305,
                              "name": "K1",
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
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 308,
                          "end": 323,
                          "typeName": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 312,
                            "name": "Set1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 312,
                            "end": 323,
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "start": 313,
                                "end": 318,
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 313,
                                  "end": 314,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 313,
                                    "end": 314,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 315,
                                  "end": 317,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 315,
                                    "end": 317,
                                    "name": "K1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 320,
                                "end": 322,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 320,
                                  "end": 322,
                                  "name": "K2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        "optional": null,
                        "readonly": null,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 303,
                          "end": 305,
                          "typeName": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 305,
                            "name": "K1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 299,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  }
                },
                "optional": "-",
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 269,
                  "end": 271,
                  "typeName": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 271,
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 265,
                  "name": "SK1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 335,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 337,
                  "name": "K1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 341,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 361,
        "name": "set",
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
          "start": 385,
          "end": 394,
          "name": "source",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 394,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 393,
              "end": 394,
              "typeName": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
                "name": "T",
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
          "start": 396,
          "end": 406,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 400,
            "end": 406,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 402,
              "end": 406,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 403,
                  "end": 405,
                  "typeName": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 405,
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 408,
          "end": 420,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 420,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 415,
              "end": 420,
              "objectType": {
                "type": "TSTypeReference",
                "start": 415,
                "end": 416,
                "typeName": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 417,
                "end": 419,
                "typeName": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 419,
                  "name": "K1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        "start": 361,
        "end": 384,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 362,
            "end": 363,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 365,
            "end": 383,
            "name": {
              "type": "Identifier",
              "start": 365,
              "end": 367,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 376,
              "end": 383,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 383,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 421,
        "end": 434,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 423,
          "end": 434,
          "typeName": {
            "type": "Identifier",
            "start": 423,
            "end": 427,
            "name": "Set1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 427,
            "end": 434,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 428,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 429,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 431,
                "end": 433,
                "typeName": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 433,
                  "name": "K1",
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
    {
      "type": "TSDeclareFunction",
      "start": 437,
      "end": 567,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 457,
        "name": "set",
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
          "start": 505,
          "end": 514,
          "name": "source",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 511,
            "end": 514,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 513,
              "end": 514,
              "typeName": {
                "type": "Identifier",
                "start": 513,
                "end": 514,
                "name": "T",
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
          "start": 516,
          "end": 530,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 520,
            "end": 530,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 522,
              "end": 530,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 523,
                  "end": 525,
                  "typeName": {
                    "type": "Identifier",
                    "start": 523,
                    "end": 525,
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 527,
                  "end": 529,
                  "typeName": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 529,
                    "name": "K2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 532,
          "end": 548,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 537,
            "end": 548,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 539,
              "end": 548,
              "objectType": {
                "type": "TSIndexedAccessType",
                "start": 539,
                "end": 544,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 539,
                  "end": 540,
                  "typeName": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 540,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 541,
                  "end": 543,
                  "typeName": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 543,
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 545,
                "end": 547,
                "typeName": {
                  "type": "Identifier",
                  "start": 545,
                  "end": 547,
                  "name": "K2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        "start": 457,
        "end": 504,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 458,
            "end": 459,
            "name": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 461,
            "end": 479,
            "name": {
              "type": "Identifier",
              "start": 461,
              "end": 463,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 472,
              "end": 479,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 478,
                "end": 479,
                "typeName": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 479,
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
          {
            "type": "TSTypeParameter",
            "start": 481,
            "end": 503,
            "name": {
              "type": "Identifier",
              "start": 481,
              "end": 483,
              "name": "K2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 492,
              "end": 503,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 498,
                "end": 503,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 498,
                  "end": 499,
                  "typeName": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 499,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 500,
                  "end": 502,
                  "typeName": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 502,
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
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
        "start": 549,
        "end": 566,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 551,
          "end": 566,
          "typeName": {
            "type": "Identifier",
            "start": 551,
            "end": 555,
            "name": "Set2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 555,
            "end": 566,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 556,
                "end": 557,
                "typeName": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 557,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 559,
                "end": 561,
                "typeName": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 561,
                  "name": "K1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 563,
                "end": 565,
                "typeName": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 565,
                  "name": "K2",
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 570,
      "end": 659,
      "id": {
        "type": "Identifier",
        "start": 580,
        "end": 585,
        "name": "State",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 586,
        "end": 659,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 592,
            "end": 641,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 593,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 595,
                "end": 640,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 605,
                    "end": 615,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 606,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 606,
                      "end": 614,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 608,
                        "end": 614
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 624,
                    "end": 634,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 624,
                      "end": 625,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 625,
                      "end": 633,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 627,
                        "end": 633
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
            "start": 646,
            "end": 657,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 647,
              "end": 656,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 649,
                "end": 656
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
      "start": 661,
      "end": 745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 667,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 667,
            "end": 679,
            "name": "state",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 672,
              "end": 679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 674,
                "end": 679,
                "typeName": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 679,
                  "name": "State",
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
          "init": {
            "type": "ObjectExpression",
            "start": 682,
            "end": 744,
            "properties": [
              {
                "type": "Property",
                "start": 688,
                "end": 727,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 689,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 691,
                  "end": 727,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 701,
                      "end": 706,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 701,
                        "end": 702,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 704,
                        "end": 706,
                        "value": "",
                        "raw": "\"\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 716,
                      "end": 720,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 716,
                        "end": 717,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 719,
                        "end": 720,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 733,
                "end": 741,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 733,
                  "end": 734,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 736,
                  "end": 741,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 747,
      "end": 801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 753,
          "end": 800,
          "id": {
            "type": "Identifier",
            "start": 753,
            "end": 768,
            "name": "newState",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 761,
              "end": 768,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 763,
                "end": 768,
                "typeName": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 768,
                  "name": "State",
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
          "init": {
            "type": "CallExpression",
            "start": 771,
            "end": 800,
            "callee": {
              "type": "Identifier",
              "start": 771,
              "end": 774,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 775,
                "end": 780,
                "name": "state",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 782,
                "end": 792,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 783,
                    "end": 786,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 788,
                    "end": 791,
                    "value": "b",
                    "raw": "'b'"
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 794,
                "end": 799,
                "value": "why",
                "raw": "'why'"
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
