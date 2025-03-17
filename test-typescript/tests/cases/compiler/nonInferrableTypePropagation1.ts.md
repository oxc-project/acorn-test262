__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 729,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "Op",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "I",
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
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "O",
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
        "start": 16,
        "end": 45,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 17,
            "end": 32,
            "name": "thing",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 32,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 29,
                  "name": "Thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 29,
                  "end": 32,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 31,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "name": "I",
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
          "start": 34,
          "end": 45,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 37,
            "end": 45,
            "typeName": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "name": "Thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 42,
              "end": 45,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "name": "O",
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
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
        "start": 63,
        "end": 159,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 78,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
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
            "type": "TSMethodSignature",
            "start": 83,
            "end": 157,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "name": "pipe",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 87,
              "end": 93,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 88,
                  "end": 89,
                  "name": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
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
                  "start": 91,
                  "end": 92,
                  "name": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
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
                "start": 103,
                "end": 116,
                "name": "opA",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 106,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 116,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 110,
                      "name": "Op",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 110,
                      "end": 116,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 111,
                          "end": 112,
                          "typeName": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 114,
                          "end": 115,
                          "typeName": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 115,
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
              },
              {
                "type": "Identifier",
                "start": 126,
                "end": 139,
                "name": "opB",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 129,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 131,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 133,
                      "name": "Op",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 133,
                      "end": 139,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 134,
                          "end": 135,
                          "typeName": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 135,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 137,
                          "end": 138,
                          "typeName": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 138,
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
              "start": 146,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 153,
                  "name": "Thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 153,
                  "end": 156,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 154,
                      "end": 155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 161,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 169,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 175,
        "end": 186,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 177,
            "end": 184,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 181,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 183,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "name": "V",
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
      "type": "VariableDeclaration",
      "start": 189,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 223,
            "name": "thing",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 223,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 215,
                  "name": "Thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "type": "TSDeclareFunction",
      "start": 226,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 246,
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
          "start": 253,
          "end": 277,
          "name": "project",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 260,
            "end": 277,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 262,
              "end": 277,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 263,
                  "end": 271,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 268,
                    "end": 271,
                    "typeAnnotation": {
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
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "name": "R",
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
        "start": 246,
        "end": 252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 247,
            "end": 248,
            "name": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
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
            "start": 250,
            "end": 251,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "name": "R",
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
        "start": 278,
        "end": 288,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 280,
          "end": 288,
          "typeName": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "name": "Op",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 282,
            "end": 288,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 283,
                "end": 284,
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 286,
                "end": 287,
                "typeName": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 287,
                  "name": "R",
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
      "start": 290,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 310,
        "name": "tap",
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
          "start": 314,
          "end": 338,
          "name": "next",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 318,
            "end": 338,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 320,
              "end": 338,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 321,
                  "end": 329,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 326,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 329,
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
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
                "start": 331,
                "end": 338,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 334,
                  "end": 338
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
        "start": 310,
        "end": 313,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 311,
            "end": 312,
            "name": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
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
        "start": 339,
        "end": 349,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 341,
          "end": 349,
          "typeName": {
            "type": "Identifier",
            "start": 341,
            "end": 343,
            "name": "Op",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 343,
            "end": 349,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 344,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 345,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 347,
                "end": 348,
                "typeName": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 351,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 371,
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
          "start": 375,
          "end": 382,
          "name": "data",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 379,
            "end": 382,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 381,
              "end": 382,
              "typeName": {
                "type": "Identifier",
                "start": 381,
                "end": 382,
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
        "start": 371,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 373,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
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
        "start": 383,
        "end": 391,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 385,
          "end": 391,
          "typeName": {
            "type": "Identifier",
            "start": 385,
            "end": 388,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 388,
            "end": 391,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 389,
                "end": 390,
                "typeName": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 390,
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
      "start": 393,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 424,
        "name": "createAndUnbox",
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
          "start": 428,
          "end": 460,
          "name": "factory",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 435,
            "end": 460,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 437,
              "end": 460,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 440,
                "end": 460,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 443,
                  "end": 460,
                  "typeName": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 448,
                    "name": "Thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 450,
                              "name": "V",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 453,
                            "end": 459,
                            "typeName": {
                              "type": "Identifier",
                              "start": 453,
                              "end": 456,
                              "name": "Box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 456,
                              "end": 459,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 457,
                                  "end": 458,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 457,
                                    "end": 458,
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
                        ]
                      }
                    ]
                  }
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
        "start": 424,
        "end": 427,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 425,
            "end": 426,
            "name": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
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
        "start": 461,
        "end": 471,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 463,
          "end": 471,
          "typeName": {
            "type": "Identifier",
            "start": 463,
            "end": 468,
            "name": "Thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 468,
            "end": 471,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 469,
                "end": 470,
                "typeName": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 470,
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
      "start": 473,
      "end": 512,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 493,
        "name": "log",
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
          "start": 494,
          "end": 504,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 499,
            "end": 504,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 501,
              "end": 504
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 505,
        "end": 511,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 507,
          "end": 511
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 527,
            "name": "result1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 530,
            "end": 619,
            "callee": {
              "type": "Identifier",
              "start": 530,
              "end": 544,
              "name": "createAndUnbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 545,
                "end": 618,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 551,
                  "end": 618,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 551,
                    "end": 561,
                    "object": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 556,
                      "name": "thing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 561,
                      "name": "pipe",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 567,
                      "end": 591,
                      "callee": {
                        "type": "Identifier",
                        "start": 567,
                        "end": 570,
                        "name": "map",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 571,
                          "end": 590,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 572,
                              "end": 576,
                              "name": "data",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 581,
                            "end": 590,
                            "callee": {
                              "type": "Identifier",
                              "start": 581,
                              "end": 584,
                              "name": "box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 585,
                                "end": 589,
                                "name": "data",
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
                    {
                      "type": "CallExpression",
                      "start": 597,
                      "end": 615,
                      "callee": {
                        "type": "Identifier",
                        "start": 597,
                        "end": 600,
                        "name": "tap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 601,
                          "end": 614,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 602,
                              "end": 603,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 608,
                            "end": 614,
                            "callee": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 611,
                              "name": "log",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 612,
                                "end": 613,
                                "name": "v",
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
      "start": 622,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 628,
          "end": 727,
          "id": {
            "type": "Identifier",
            "start": 628,
            "end": 635,
            "name": "result2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 638,
            "end": 727,
            "callee": {
              "type": "Identifier",
              "start": 638,
              "end": 652,
              "name": "createAndUnbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 653,
                "end": 726,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "CallExpression",
                  "start": 659,
                  "end": 726,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 659,
                    "end": 669,
                    "object": {
                      "type": "Identifier",
                      "start": 659,
                      "end": 664,
                      "name": "thing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 665,
                      "end": 669,
                      "name": "pipe",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 675,
                      "end": 693,
                      "callee": {
                        "type": "Identifier",
                        "start": 675,
                        "end": 678,
                        "name": "tap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 679,
                          "end": 692,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 680,
                              "end": 681,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 686,
                            "end": 692,
                            "callee": {
                              "type": "Identifier",
                              "start": 686,
                              "end": 689,
                              "name": "log",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 690,
                                "end": 691,
                                "name": "v",
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
                    {
                      "type": "CallExpression",
                      "start": 699,
                      "end": 723,
                      "callee": {
                        "type": "Identifier",
                        "start": 699,
                        "end": 702,
                        "name": "map",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 703,
                          "end": 722,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 704,
                              "end": 708,
                              "name": "data",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 713,
                            "end": 722,
                            "callee": {
                              "type": "Identifier",
                              "start": 713,
                              "end": 716,
                              "name": "box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 717,
                                "end": 721,
                                "name": "data",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
