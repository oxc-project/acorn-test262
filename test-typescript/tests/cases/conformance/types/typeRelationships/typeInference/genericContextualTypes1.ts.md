__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1638,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
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
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 26,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 24,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 21,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
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
      "type": "TSDeclareFunction",
      "start": 29,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 50,
        "name": "wrap",
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
          "start": 57,
          "end": 71,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 71,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 60,
              "end": 71,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 65,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 64,
                      "end": 65,
                      "typeName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
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
                "start": 67,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 71,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
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
        "start": 50,
        "end": 56,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 51,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
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
            "start": 54,
            "end": 55,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
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
        "start": 72,
        "end": 85,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 74,
          "end": 85,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 79,
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
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
            "start": 81,
            "end": 85,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 84,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
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
    },
    {
      "type": "TSDeclareFunction",
      "start": 88,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 112,
        "name": "compose",
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
          "start": 122,
          "end": 136,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 136,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 125,
              "end": 136,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 126,
                  "end": 130,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 130,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
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
                "start": 132,
                "end": 136,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 135,
                  "end": 136,
                  "typeName": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
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
        },
        {
          "type": "Identifier",
          "start": 138,
          "end": 152,
          "name": "g",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 152,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 141,
              "end": 152,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 146,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 146,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 146,
                      "typeName": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 146,
                        "name": "B",
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
                "start": 148,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 151,
                  "end": 152,
                  "typeName": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "name": "C",
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
        "start": 112,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
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
            "start": 116,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 120,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 153,
        "end": 166,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 155,
          "end": 166,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 156,
              "end": 160,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 157,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 159,
                  "end": 160,
                  "typeName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
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
            "start": 162,
            "end": 166,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 165,
              "end": 166,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "name": "C",
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
      "type": "TSDeclareFunction",
      "start": 169,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 190,
        "name": "list",
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
          "start": 194,
          "end": 198,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 195,
            "end": 198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 197,
              "end": 198,
              "typeName": {
                "type": "Identifier",
                "start": 197,
                "end": 198,
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 190,
        "end": 193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 191,
            "end": 192,
            "name": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 199,
        "end": 204,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 201,
          "end": 204,
          "elementType": {
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 207,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 230,
        "name": "unlist",
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
          "start": 234,
          "end": 240,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 240,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 237,
              "end": 240,
              "elementType": {
                "type": "TSTypeReference",
                "start": 237,
                "end": 238,
                "typeName": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "name": "T",
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
        "start": 230,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 232,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 241,
        "end": 244,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 243,
          "end": 244,
          "typeName": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "name": "T",
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
      "start": 247,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 267,
        "name": "box",
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
          "start": 271,
          "end": 275,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 272,
            "end": 275,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 274,
              "end": 275,
              "typeName": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "name": "V",
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 267,
        "end": 270,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 268,
            "end": 269,
            "name": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
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
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 276,
        "end": 284,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 278,
          "end": 284,
          "typeName": {
            "type": "Identifier",
            "start": 278,
            "end": 281,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 281,
            "end": 284,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 282,
                "end": 283,
                "typeName": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "name": "V",
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
      "start": 287,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 309,
        "name": "unbox",
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
          "start": 313,
          "end": 322,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 314,
            "end": 322,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 316,
              "end": 322,
              "typeName": {
                "type": "Identifier",
                "start": 316,
                "end": 319,
                "name": "Box",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 319,
                "end": 322,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 320,
                    "end": 321,
                    "typeName": {
                      "type": "Identifier",
                      "start": 320,
                      "end": 321,
                      "name": "W",
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
        "start": 309,
        "end": 312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 311,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "name": "W",
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
        "start": 323,
        "end": 326,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 325,
          "end": 326,
          "typeName": {
            "type": "Identifier",
            "start": 325,
            "end": 326,
            "name": "W",
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
      "start": 329,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 349,
        "name": "map",
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
          "start": 356,
          "end": 362,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 362,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 359,
              "end": 362,
              "elementType": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 360,
                "typeName": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "name": "T",
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
        },
        {
          "type": "Identifier",
          "start": 364,
          "end": 378,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 365,
            "end": 378,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 367,
              "end": 378,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 368,
                  "end": 372,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 369,
                    "end": 372,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 371,
                      "end": 372,
                      "typeName": {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
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
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 374,
                "end": 378,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 377,
                  "end": 378,
                  "typeName": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 378,
                    "name": "U",
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
        "start": 349,
        "end": 355,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 350,
            "end": 351,
            "name": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
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
            "start": 353,
            "end": 354,
            "name": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
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
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 379,
        "end": 384,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 381,
          "end": 384,
          "elementType": {
            "type": "TSTypeReference",
            "start": 381,
            "end": 382,
            "typeName": {
              "type": "Identifier",
              "start": 381,
              "end": 382,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 387,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 412,
        "name": "identity",
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
          "start": 416,
          "end": 420,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 417,
            "end": 420,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 419,
              "end": 420,
              "typeName": {
                "type": "Identifier",
                "start": 419,
                "end": 420,
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 412,
        "end": 415,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 413,
            "end": 414,
            "name": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 421,
        "end": 424,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 423,
          "end": 424,
          "typeName": {
            "type": "Identifier",
            "start": 423,
            "end": 424,
            "name": "T",
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
      "start": 427,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 447,
        "name": "zip",
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
          "start": 454,
          "end": 458,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 455,
            "end": 458,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 457,
              "end": 458,
              "typeName": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
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
          "start": 460,
          "end": 464,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 461,
            "end": 464,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 463,
              "end": 464,
              "typeName": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "name": "B",
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 447,
        "end": 453,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 448,
            "end": 449,
            "name": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
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
            "start": 451,
            "end": 452,
            "name": {
              "type": "Identifier",
              "start": 451,
              "end": 452,
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
        "start": 465,
        "end": 473,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 467,
          "end": 473,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 468,
              "end": 469,
              "typeName": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 471,
              "end": 472,
              "typeName": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
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
    {
      "type": "TSDeclareFunction",
      "start": 476,
      "end": 548,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 497,
        "name": "flip",
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
          "start": 507,
          "end": 527,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 508,
            "end": 527,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 510,
              "end": 527,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 511,
                  "end": 515,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 515,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 514,
                      "end": 515,
                      "typeName": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 515,
                        "name": "X",
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
                  "start": 517,
                  "end": 521,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 518,
                    "end": 521,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 520,
                      "end": 521,
                      "typeName": {
                        "type": "Identifier",
                        "start": 520,
                        "end": 521,
                        "name": "Y",
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
                "start": 523,
                "end": 527,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 526,
                  "end": 527,
                  "typeName": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
                    "name": "Z",
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
        "start": 497,
        "end": 506,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 498,
            "end": 499,
            "name": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "name": "X",
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
            "start": 501,
            "end": 502,
            "name": {
              "type": "Identifier",
              "start": 501,
              "end": 502,
              "name": "Y",
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
            "start": 504,
            "end": 505,
            "name": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "name": "Z",
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
        "start": 528,
        "end": 547,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 530,
          "end": 547,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 531,
              "end": 535,
              "name": "y",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 532,
                "end": 535,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 534,
                  "end": 535,
                  "typeName": {
                    "type": "Identifier",
                    "start": 534,
                    "end": 535,
                    "name": "Y",
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
              "start": 537,
              "end": 541,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 538,
                "end": 541,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 540,
                  "end": 541,
                  "typeName": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "name": "X",
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
            "start": 543,
            "end": 547,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 546,
              "end": 547,
              "typeName": {
                "type": "Identifier",
                "start": 546,
                "end": 547,
                "name": "Z",
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
      "type": "VariableDeclaration",
      "start": 550,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 556,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 556,
            "end": 577,
            "name": "f00",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 577,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 561,
                "end": 577,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 561,
                  "end": 564,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 562,
                      "end": 563,
                      "name": {
                        "type": "Identifier",
                        "start": 562,
                        "end": 563,
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
                    "start": 565,
                    "end": 569,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 566,
                      "end": 569,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 568,
                        "end": 569,
                        "typeName": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 569,
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
                  "start": 571,
                  "end": 577,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 574,
                    "end": 577,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 574,
                      "end": 575,
                      "typeName": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 575,
                        "name": "A",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 580,
            "end": 584,
            "name": "list",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 625,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 624,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 613,
            "name": "f01",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 595,
              "end": 613,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 597,
                "end": 613,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 597,
                  "end": 600,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 598,
                      "end": 599,
                      "name": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 599,
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
                    "start": 601,
                    "end": 605,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 602,
                      "end": 605,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 604,
                        "end": 605,
                        "typeName": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 605,
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
                  "start": 607,
                  "end": 613,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 610,
                    "end": 613,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 610,
                      "end": 611,
                      "typeName": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
                        "name": "A",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 616,
            "end": 624,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrayExpression",
              "start": 621,
              "end": 624,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 622,
                  "end": 623,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 626,
      "end": 667,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 666,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 653,
            "name": "f02",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 653,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 637,
                "end": 653,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 637,
                  "end": 640,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 638,
                      "end": 639,
                      "name": {
                        "type": "Identifier",
                        "start": 638,
                        "end": 639,
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
                    "start": 641,
                    "end": 645,
                    "name": "x",
                    "typeAnnotation": {
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
                  "start": 647,
                  "end": 653,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 650,
                    "end": 653,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 650,
                      "end": 651,
                      "typeName": {
                        "type": "Identifier",
                        "start": 650,
                        "end": 651,
                        "name": "A",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 656,
            "end": 666,
            "callee": {
              "type": "Identifier",
              "start": 656,
              "end": 660,
              "name": "wrap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 661,
                "end": 665,
                "name": "list",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 668,
      "end": 713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 712,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 695,
            "name": "f03",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 677,
              "end": 695,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 679,
                "end": 695,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 679,
                  "end": 682,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 680,
                      "end": 681,
                      "name": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 681,
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
                    "start": 683,
                    "end": 687,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 684,
                      "end": 687,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 686,
                        "end": 687,
                        "typeName": {
                          "type": "Identifier",
                          "start": 686,
                          "end": 687,
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
                  "start": 689,
                  "end": 695,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 692,
                    "end": 695,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 692,
                      "end": 693,
                      "typeName": {
                        "type": "Identifier",
                        "start": 692,
                        "end": 693,
                        "name": "A",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 698,
            "end": 712,
            "callee": {
              "type": "Identifier",
              "start": 698,
              "end": 702,
              "name": "wrap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 703,
                "end": 711,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 703,
                    "end": 704,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ArrayExpression",
                  "start": 708,
                  "end": 711,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 709,
                      "end": 710,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 715,
      "end": 785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 721,
          "end": 784,
          "id": {
            "type": "Identifier",
            "start": 721,
            "end": 747,
            "name": "f10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 724,
              "end": 747,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 726,
                "end": 747,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 726,
                  "end": 729,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 727,
                      "end": 728,
                      "name": {
                        "type": "Identifier",
                        "start": 727,
                        "end": 728,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 730,
                    "end": 734,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 731,
                      "end": 734,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 733,
                        "end": 734,
                        "typeName": {
                          "type": "Identifier",
                          "start": 733,
                          "end": 734,
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 736,
                  "end": 747,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 739,
                    "end": 747,
                    "typeName": {
                      "type": "Identifier",
                      "start": 739,
                      "end": 742,
                      "name": "Box",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 742,
                      "end": 747,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 743,
                          "end": 746,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 743,
                            "end": 744,
                            "typeName": {
                              "type": "Identifier",
                              "start": 743,
                              "end": 744,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 750,
            "end": 784,
            "callee": {
              "type": "Identifier",
              "start": 750,
              "end": 757,
              "name": "compose",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 758,
                "end": 770,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 758,
                    "end": 759,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 763,
                  "end": 770,
                  "callee": {
                    "type": "Identifier",
                    "start": 763,
                    "end": 767,
                    "name": "list",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 768,
                      "end": 769,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 772,
                "end": 783,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 772,
                    "end": 773,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 777,
                  "end": 783,
                  "callee": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 780,
                    "name": "box",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 786,
      "end": 840,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 792,
          "end": 839,
          "id": {
            "type": "Identifier",
            "start": 792,
            "end": 818,
            "name": "f11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 795,
              "end": 818,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 797,
                "end": 818,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 797,
                  "end": 800,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 798,
                      "end": 799,
                      "name": {
                        "type": "Identifier",
                        "start": 798,
                        "end": 799,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 801,
                    "end": 805,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 802,
                      "end": 805,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 804,
                        "end": 805,
                        "typeName": {
                          "type": "Identifier",
                          "start": 804,
                          "end": 805,
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 807,
                  "end": 818,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 810,
                    "end": 818,
                    "typeName": {
                      "type": "Identifier",
                      "start": 810,
                      "end": 813,
                      "name": "Box",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 813,
                      "end": 818,
                      "params": [
                        {
                          "type": "TSArrayType",
                          "start": 814,
                          "end": 817,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 814,
                            "end": 815,
                            "typeName": {
                              "type": "Identifier",
                              "start": 814,
                              "end": 815,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 821,
            "end": 839,
            "callee": {
              "type": "Identifier",
              "start": 821,
              "end": 828,
              "name": "compose",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 829,
                "end": 833,
                "name": "list",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 835,
                "end": 838,
                "name": "box",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 841,
      "end": 915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 847,
          "end": 914,
          "id": {
            "type": "Identifier",
            "start": 847,
            "end": 873,
            "name": "f12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 850,
              "end": 873,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 852,
                "end": 873,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 852,
                  "end": 855,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 853,
                      "end": 854,
                      "name": {
                        "type": "Identifier",
                        "start": 853,
                        "end": 854,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 856,
                    "end": 867,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 857,
                      "end": 867,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 859,
                        "end": 867,
                        "typeName": {
                          "type": "Identifier",
                          "start": 859,
                          "end": 862,
                          "name": "Box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 862,
                          "end": 867,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 863,
                              "end": 866,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 863,
                                "end": 864,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 863,
                                  "end": 864,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
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
                  "start": 869,
                  "end": 873,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 872,
                    "end": 873,
                    "typeName": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 873,
                      "name": "T",
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
          },
          "init": {
            "type": "CallExpression",
            "start": 876,
            "end": 914,
            "callee": {
              "type": "Identifier",
              "start": 876,
              "end": 883,
              "name": "compose",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 884,
                "end": 897,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 884,
                    "end": 885,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 889,
                  "end": 897,
                  "callee": {
                    "type": "Identifier",
                    "start": 889,
                    "end": 894,
                    "name": "unbox",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 895,
                      "end": 896,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 899,
                "end": 913,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 899,
                    "end": 900,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 904,
                  "end": 913,
                  "callee": {
                    "type": "Identifier",
                    "start": 904,
                    "end": 910,
                    "name": "unlist",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 911,
                      "end": 912,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 916,
      "end": 974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 922,
          "end": 973,
          "id": {
            "type": "Identifier",
            "start": 922,
            "end": 948,
            "name": "f13",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 925,
              "end": 948,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 927,
                "end": 948,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 927,
                  "end": 930,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 928,
                      "end": 929,
                      "name": {
                        "type": "Identifier",
                        "start": 928,
                        "end": 929,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 931,
                    "end": 942,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 932,
                      "end": 942,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 934,
                        "end": 942,
                        "typeName": {
                          "type": "Identifier",
                          "start": 934,
                          "end": 937,
                          "name": "Box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 937,
                          "end": 942,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 938,
                              "end": 941,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 938,
                                "end": 939,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 938,
                                  "end": 939,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
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
                  "start": 944,
                  "end": 948,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 947,
                    "end": 948,
                    "typeName": {
                      "type": "Identifier",
                      "start": 947,
                      "end": 948,
                      "name": "T",
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
          },
          "init": {
            "type": "CallExpression",
            "start": 951,
            "end": 973,
            "callee": {
              "type": "Identifier",
              "start": 951,
              "end": 958,
              "name": "compose",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 959,
                "end": 964,
                "name": "unbox",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 966,
                "end": 972,
                "name": "unlist",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 976,
      "end": 1040,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 982,
          "end": 1039,
          "id": {
            "type": "Identifier",
            "start": 982,
            "end": 990,
            "name": "arrayMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 993,
            "end": 1039,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1000,
                "end": 1014,
                "name": "f",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1001,
                  "end": 1014,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1003,
                    "end": 1014,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1004,
                        "end": 1008,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1005,
                          "end": 1008,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1007,
                            "end": 1008,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1007,
                              "end": 1008,
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1010,
                      "end": 1014,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1013,
                        "end": 1014,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1013,
                          "end": 1014,
                          "name": "U",
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
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 1019,
              "end": 1039,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1020,
                  "end": 1026,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1021,
                    "end": 1026,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1023,
                      "end": 1026,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1023,
                        "end": 1024,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1023,
                          "end": 1024,
                          "name": "T",
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
              "body": {
                "type": "CallExpression",
                "start": 1031,
                "end": 1039,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1031,
                  "end": 1036,
                  "object": {
                    "type": "Identifier",
                    "start": 1031,
                    "end": 1032,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1033,
                    "end": 1036,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1037,
                    "end": 1038,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 993,
              "end": 999,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 994,
                  "end": 995,
                  "name": {
                    "type": "Identifier",
                    "start": 994,
                    "end": 995,
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
                  "start": 997,
                  "end": 998,
                  "name": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 998,
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
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1041,
      "end": 1114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1047,
          "end": 1113,
          "id": {
            "type": "Identifier",
            "start": 1047,
            "end": 1058,
            "name": "arrayFilter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1061,
            "end": 1113,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1065,
                "end": 1085,
                "name": "f",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1066,
                  "end": 1085,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1068,
                    "end": 1085,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1069,
                        "end": 1073,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1070,
                          "end": 1073,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1072,
                            "end": 1073,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1072,
                              "end": 1073,
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1075,
                      "end": 1085,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1078,
                        "end": 1085
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 1090,
              "end": 1113,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1091,
                  "end": 1097,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1092,
                    "end": 1097,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1094,
                      "end": 1097,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1094,
                        "end": 1095,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1094,
                          "end": 1095,
                          "name": "T",
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
              "body": {
                "type": "CallExpression",
                "start": 1102,
                "end": 1113,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1102,
                  "end": 1110,
                  "object": {
                    "type": "Identifier",
                    "start": 1102,
                    "end": 1103,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1104,
                    "end": 1110,
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
                    "type": "Identifier",
                    "start": 1111,
                    "end": 1112,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1061,
              "end": 1064,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1062,
                  "end": 1063,
                  "name": {
                    "type": "Identifier",
                    "start": 1062,
                    "end": 1063,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1116,
      "end": 1179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1122,
          "end": 1178,
          "id": {
            "type": "Identifier",
            "start": 1122,
            "end": 1152,
            "name": "f20",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1125,
              "end": 1152,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1127,
                "end": 1152,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1139,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1129,
                      "end": 1139,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1131,
                        "end": 1139,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1131,
                          "end": 1137
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1141,
                  "end": 1152,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1144,
                    "end": 1152,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 1144,
                      "end": 1150
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1155,
            "end": 1178,
            "callee": {
              "type": "Identifier",
              "start": 1155,
              "end": 1163,
              "name": "arrayMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1164,
                "end": 1177,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1165,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 1169,
                  "end": 1177,
                  "object": {
                    "type": "Identifier",
                    "start": 1169,
                    "end": 1170,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1171,
                    "end": 1177,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 1180,
      "end": 1233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1186,
          "end": 1232,
          "id": {
            "type": "Identifier",
            "start": 1186,
            "end": 1211,
            "name": "f21",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1189,
              "end": 1211,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1191,
                "end": 1211,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1191,
                  "end": 1194,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1192,
                      "end": 1193,
                      "name": {
                        "type": "Identifier",
                        "start": 1192,
                        "end": 1193,
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
                    "start": 1195,
                    "end": 1201,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1196,
                      "end": 1201,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1198,
                        "end": 1201,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1198,
                          "end": 1199,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1198,
                            "end": 1199,
                            "name": "A",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1203,
                  "end": 1211,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1206,
                    "end": 1211,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 1206,
                      "end": 1209,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1206,
                        "end": 1207,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1206,
                          "end": 1207,
                          "name": "A",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1214,
            "end": 1232,
            "callee": {
              "type": "Identifier",
              "start": 1214,
              "end": 1222,
              "name": "arrayMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1223,
                "end": 1231,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ArrayExpression",
                  "start": 1228,
                  "end": 1231,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1229,
                      "end": 1230,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 1234,
      "end": 1285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1240,
          "end": 1284,
          "id": {
            "type": "Identifier",
            "start": 1240,
            "end": 1263,
            "name": "f22",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1243,
              "end": 1263,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1245,
                "end": 1263,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1245,
                  "end": 1248,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1246,
                      "end": 1247,
                      "name": {
                        "type": "Identifier",
                        "start": 1246,
                        "end": 1247,
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
                    "start": 1249,
                    "end": 1255,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1250,
                      "end": 1255,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1252,
                        "end": 1255,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1252,
                          "end": 1253,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1252,
                            "end": 1253,
                            "name": "A",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1257,
                  "end": 1263,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1260,
                    "end": 1263,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1260,
                      "end": 1261,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1260,
                        "end": 1261,
                        "name": "A",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1266,
            "end": 1284,
            "callee": {
              "type": "Identifier",
              "start": 1266,
              "end": 1274,
              "name": "arrayMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1275,
                "end": 1283,
                "name": "identity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 1286,
      "end": 1354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1292,
          "end": 1353,
          "id": {
            "type": "Identifier",
            "start": 1292,
            "end": 1320,
            "name": "f23",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1295,
              "end": 1320,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1297,
                "end": 1320,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1297,
                  "end": 1300,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1298,
                      "end": 1299,
                      "name": {
                        "type": "Identifier",
                        "start": 1298,
                        "end": 1299,
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
                    "start": 1301,
                    "end": 1307,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1302,
                      "end": 1307,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1304,
                        "end": 1307,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1304,
                          "end": 1305,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1304,
                            "end": 1305,
                            "name": "A",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1309,
                  "end": 1320,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1312,
                    "end": 1320,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1312,
                      "end": 1318,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1312,
                        "end": 1315,
                        "name": "Box",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1315,
                        "end": 1318,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1316,
                            "end": 1317,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1316,
                              "end": 1317,
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1323,
            "end": 1353,
            "callee": {
              "type": "Identifier",
              "start": 1323,
              "end": 1331,
              "name": "arrayMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1332,
                "end": 1352,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1332,
                    "end": 1337,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ObjectExpression",
                  "start": 1342,
                  "end": 1351,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1344,
                      "end": 1349,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1344,
                        "end": 1349,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1344,
                        "end": 1349,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 1356,
      "end": 1427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1362,
          "end": 1426,
          "id": {
            "type": "Identifier",
            "start": 1362,
            "end": 1392,
            "name": "f30",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1365,
              "end": 1392,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1367,
                "end": 1392,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1368,
                    "end": 1379,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1369,
                      "end": 1379,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1371,
                        "end": 1379,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1371,
                          "end": 1377
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1381,
                  "end": 1392,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1384,
                    "end": 1392,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1384,
                      "end": 1390
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1395,
            "end": 1426,
            "callee": {
              "type": "Identifier",
              "start": 1395,
              "end": 1406,
              "name": "arrayFilter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1407,
                "end": 1425,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1407,
                    "end": 1408,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 1412,
                  "end": 1425,
                  "left": {
                    "type": "MemberExpression",
                    "start": 1412,
                    "end": 1420,
                    "object": {
                      "type": "Identifier",
                      "start": 1412,
                      "end": 1413,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1414,
                      "end": 1420,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Literal",
                    "start": 1423,
                    "end": 1425,
                    "value": 10,
                    "raw": "10"
                  }
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 1428,
      "end": 1511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1434,
          "end": 1510,
          "id": {
            "type": "Identifier",
            "start": 1434,
            "end": 1477,
            "name": "f31",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1437,
              "end": 1477,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1439,
                "end": 1477,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1439,
                  "end": 1462,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1440,
                      "end": 1461,
                      "name": {
                        "type": "Identifier",
                        "start": 1440,
                        "end": 1441,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1450,
                        "end": 1461,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1450,
                          "end": 1453,
                          "name": "Box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1453,
                          "end": 1461,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1454,
                              "end": 1460
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
                    "start": 1463,
                    "end": 1469,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1464,
                      "end": 1469,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1466,
                        "end": 1469,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1466,
                          "end": 1467,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1466,
                            "end": 1467,
                            "name": "T",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1471,
                  "end": 1477,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1474,
                    "end": 1477,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1474,
                      "end": 1475,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1474,
                        "end": 1475,
                        "name": "T",
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
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1480,
            "end": 1510,
            "callee": {
              "type": "Identifier",
              "start": 1480,
              "end": 1491,
              "name": "arrayFilter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1492,
                "end": 1509,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1492,
                    "end": 1493,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 1497,
                  "end": 1509,
                  "left": {
                    "type": "MemberExpression",
                    "start": 1497,
                    "end": 1504,
                    "object": {
                      "type": "Identifier",
                      "start": 1497,
                      "end": 1498,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1499,
                      "end": 1504,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Literal",
                    "start": 1507,
                    "end": 1509,
                    "value": 10,
                    "raw": "10"
                  }
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 1513,
      "end": 1565,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1519,
          "end": 1564,
          "id": {
            "type": "Identifier",
            "start": 1519,
            "end": 1552,
            "name": "f40",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1522,
              "end": 1552,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1524,
                "end": 1552,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1524,
                  "end": 1530,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1525,
                      "end": 1526,
                      "name": {
                        "type": "Identifier",
                        "start": 1525,
                        "end": 1526,
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
                      "start": 1528,
                      "end": 1529,
                      "name": {
                        "type": "Identifier",
                        "start": 1528,
                        "end": 1529,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1531,
                    "end": 1535,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1532,
                      "end": 1535,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1534,
                        "end": 1535,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1534,
                          "end": 1535,
                          "name": "B",
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
                    "start": 1537,
                    "end": 1541,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1538,
                      "end": 1541,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1540,
                        "end": 1541,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1540,
                          "end": 1541,
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
                  "start": 1543,
                  "end": 1552,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 1546,
                    "end": 1552,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 1547,
                        "end": 1548,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1547,
                          "end": 1548,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1550,
                        "end": 1551,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1550,
                          "end": 1551,
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1555,
            "end": 1564,
            "callee": {
              "type": "Identifier",
              "start": 1555,
              "end": 1559,
              "name": "flip",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1560,
                "end": 1563,
                "name": "zip",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 1589,
      "end": 1614,
      "id": {
        "type": "Identifier",
        "start": 1594,
        "end": 1596,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 1599,
        "end": 1613,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1599,
          "end": 1602,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1600,
              "end": 1601,
              "name": {
                "type": "Identifier",
                "start": 1600,
                "end": 1601,
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
            "start": 1603,
            "end": 1607,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1604,
              "end": 1607,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1606,
                "end": 1607,
                "typeName": {
                  "type": "Identifier",
                  "start": 1606,
                  "end": 1607,
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
          "start": 1609,
          "end": 1613,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1612,
            "end": 1613,
            "typeName": {
              "type": "Identifier",
              "start": 1612,
              "end": 1613,
              "name": "A",
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
      "type": "VariableDeclaration",
      "start": 1615,
      "end": 1637,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1621,
          "end": 1636,
          "id": {
            "type": "Identifier",
            "start": 1621,
            "end": 1627,
            "name": "fn",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1623,
              "end": 1627,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1625,
                "end": 1627,
                "typeName": {
                  "type": "Identifier",
                  "start": 1625,
                  "end": 1627,
                  "name": "fn",
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
            "type": "ArrowFunctionExpression",
            "start": 1630,
            "end": 1636,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1630,
                "end": 1631,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 1635,
              "end": 1636,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
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
