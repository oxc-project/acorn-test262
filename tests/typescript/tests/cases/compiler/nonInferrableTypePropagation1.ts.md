__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 728,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "Op",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 16,
        "end": 45,
        "params": [
          {
            "type": "Identifier",
            "start": 17,
            "end": 32,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 32,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 29,
                  "end": 32,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 31,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 29,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 34,
          "end": 45,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 37,
            "end": 45,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 42,
              "end": 45,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 160,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 63,
        "end": 159,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 78,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 77,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 83,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 103,
                "end": 116,
                "decorators": [],
                "name": "opA",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 106,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 116,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 110,
                      "end": 116,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 111,
                          "end": 112,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 114,
                          "end": 115,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 115,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 110,
                      "decorators": [],
                      "name": "Op",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 126,
                "end": 139,
                "decorators": [],
                "name": "opB",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 129,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 131,
                    "end": 139,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 133,
                      "end": 139,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 134,
                          "end": 135,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 135,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 137,
                          "end": 138,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 138,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 133,
                      "decorators": [],
                      "name": "Op",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 156,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 153,
                  "end": 156,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 154,
                      "end": 155,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 153,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 87,
              "end": 93,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 88,
                  "end": 89,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 91,
                  "end": 92,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 57,
        "end": 60,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 59,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 161,
      "end": 187,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 169,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 175,
        "end": 186,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 177,
            "end": 184,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 181,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 183,
                "end": 184,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 169,
        "end": 172,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 170,
            "end": 171,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 223,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 223,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 215,
                  "end": 223,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 216,
                      "end": 222
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 215,
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSDeclareFunction",
      "start": 226,
      "end": 289,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 246,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 253,
          "end": 277,
          "decorators": [],
          "name": "project",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 260,
            "end": 277,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 262,
              "end": 277,
              "params": [
                {
                  "type": "Identifier",
                  "start": 263,
                  "end": 271,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 268,
                    "end": 271,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 270,
                      "end": 271,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 271,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 273,
                "end": 277,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 276,
                  "end": 277,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 278,
        "end": 288,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 280,
          "end": 288,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 282,
            "end": 288,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 283,
                "end": 284,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 286,
                "end": 287,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 287,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "decorators": [],
            "name": "Op",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 246,
        "end": 252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 247,
            "end": 248,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 251,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 290,
      "end": 350,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 310,
        "decorators": [],
        "name": "tap",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 314,
          "end": 338,
          "decorators": [],
          "name": "next",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 318,
            "end": 338,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 320,
              "end": 338,
              "params": [
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 329,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 326,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 329,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 331,
                "end": 338,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 334,
                  "end": 338
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 339,
        "end": 349,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 341,
          "end": 349,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 343,
            "end": 349,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 344,
                "end": 345,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 345,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 347,
                "end": 348,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 341,
            "end": 343,
            "decorators": [],
            "name": "Op",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 310,
        "end": 313,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 311,
            "end": 312,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 351,
      "end": 392,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 371,
        "decorators": [],
        "name": "box",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 375,
          "end": 382,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 379,
            "end": 382,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 381,
              "end": 382,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 381,
                "end": 382,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 383,
        "end": 391,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 385,
          "end": 391,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 388,
            "end": 391,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 389,
                "end": 390,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 390,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 385,
            "end": 388,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 371,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 373,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 393,
      "end": 472,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 424,
        "decorators": [],
        "name": "createAndUnbox",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 428,
          "end": 460,
          "decorators": [],
          "name": "factory",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 435,
            "end": 460,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 437,
              "end": 460,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 440,
                "end": 460,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 443,
                  "end": 460,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 448,
                    "end": 460,
                    "params": [
                      {
                        "type": "TSUnionType",
                        "start": 449,
                        "end": 459,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 449,
                            "end": 450,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 450,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 453,
                            "end": 459,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 456,
                              "end": 459,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 457,
                                  "end": 458,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 457,
                                    "end": 458,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 453,
                              "end": 456,
                              "decorators": [],
                              "name": "Box",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 448,
                    "decorators": [],
                    "name": "Thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 461,
        "end": 471,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 463,
          "end": 471,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 468,
            "end": 471,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 469,
                "end": 470,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 470,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 463,
            "end": 468,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 424,
        "end": 427,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 425,
            "end": 426,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 473,
      "end": 512,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 493,
        "decorators": [],
        "name": "log",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 494,
          "end": 504,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 499,
            "end": 504,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 501,
              "end": 504
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 505,
        "end": 511,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 507,
          "end": 511
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 514,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 619,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 527,
            "decorators": [],
            "name": "result1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 530,
            "end": 619,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 545,
                "end": 618,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 551,
                  "end": 618,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 567,
                      "end": 591,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 571,
                          "end": 590,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 581,
                            "end": 590,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 585,
                                "end": 589,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 581,
                              "end": 584,
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 572,
                              "end": 576,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 567,
                        "end": 570,
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "CallExpression",
                      "start": 597,
                      "end": 615,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 601,
                          "end": 614,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 608,
                            "end": 614,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 612,
                                "end": 613,
                                "decorators": [],
                                "name": "v",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 611,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 602,
                              "end": 603,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 597,
                        "end": 600,
                        "decorators": [],
                        "name": "tap",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 551,
                    "end": 561,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 556,
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 561,
                      "decorators": [],
                      "name": "pipe",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 530,
              "end": 544,
              "decorators": [],
              "name": "createAndUnbox",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 628,
          "end": 727,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 628,
            "end": 635,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 638,
            "end": 727,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 653,
                "end": 726,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 659,
                  "end": 726,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 675,
                      "end": 693,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 679,
                          "end": 692,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 686,
                            "end": 692,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 690,
                                "end": 691,
                                "decorators": [],
                                "name": "v",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 686,
                              "end": 689,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 680,
                              "end": 681,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 675,
                        "end": 678,
                        "decorators": [],
                        "name": "tap",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "CallExpression",
                      "start": 699,
                      "end": 723,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 703,
                          "end": 722,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 713,
                            "end": 722,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 717,
                                "end": 721,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 713,
                              "end": 716,
                              "decorators": [],
                              "name": "box",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 704,
                              "end": 708,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 699,
                        "end": 702,
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 659,
                    "end": 669,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 659,
                      "end": 664,
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 665,
                      "end": 669,
                      "decorators": [],
                      "name": "pipe",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 638,
              "end": 652,
              "decorators": [],
              "name": "createAndUnbox",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
