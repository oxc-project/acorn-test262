__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 961,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 30,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 29,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 19,
                "end": 29,
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 20,
                    "end": 23
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 25,
                    "end": 28
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 50,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 50,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 51,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
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
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "T",
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
        "start": 59,
        "end": 62,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 62,
          "typeName": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
      "params": [
        {
          "type": "Identifier",
          "start": 86,
          "end": 92,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 92,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 89,
              "end": 92,
              "elementType": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 93,
        "end": 96,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 95,
          "end": 96,
          "typeName": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 98,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 117,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 119,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "U",
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
      "params": [
        {
          "type": "Identifier",
          "start": 124,
          "end": 133,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 133,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 127,
              "end": 133,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 128,
                  "end": 129,
                  "typeName": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 131,
                  "end": 132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 134,
        "end": 142,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 136,
          "end": 142,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 137,
              "end": 138,
              "typeName": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 140,
              "end": 141,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 144,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 163,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 163,
        "end": 166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 165,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
      "params": [
        {
          "type": "Identifier",
          "start": 167,
          "end": 188,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 188,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 170,
              "end": 188,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 172,
                  "end": 179,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 175,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 180,
                  "end": 186,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 183,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 183,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 186,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 186,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 189,
        "end": 192,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 191,
          "end": 192,
          "typeName": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 194,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 215,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
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
      "params": [
        {
          "type": "Identifier",
          "start": 217,
          "end": 234,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 218,
            "end": 234,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 220,
              "end": 234,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 221,
                  "end": 225,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 224,
                      "end": 225,
                      "typeName": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 225,
                        "decorators": [],
                        "name": "T",
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
                "start": 227,
                "end": 234,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 230,
                  "end": 234
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 235,
        "end": 238,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 237,
          "end": 238,
          "typeName": {
            "type": "Identifier",
            "start": 237,
            "end": 238,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 240,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 259,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 259,
        "end": 262,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 260,
            "end": 261,
            "name": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
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
      "params": [
        {
          "type": "Identifier",
          "start": 263,
          "end": 282,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 264,
            "end": 282,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 266,
              "end": 282,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 271,
                  "end": 275,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
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
                "start": 277,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 280,
                  "end": 282,
                  "members": []
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 283,
        "end": 286,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 285,
          "end": 286,
          "typeName": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 288,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 307,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 307,
        "end": 310,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 308,
            "end": 309,
            "name": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
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
      "params": [
        {
          "type": "Identifier",
          "start": 311,
          "end": 332,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 312,
            "end": 332,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 314,
              "end": 332,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 315,
                  "end": 321,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 316,
                    "end": 321,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 318,
                      "end": 321
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 323,
                "end": 332,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 326,
                  "end": 332,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 332,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 331,
                      "end": 332,
                      "typeName": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 332,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 333,
        "end": 336,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 335,
          "end": 336,
          "typeName": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 338,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 357,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 357,
        "end": 360,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 359,
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
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
      "params": [
        {
          "type": "Identifier",
          "start": 361,
          "end": 371,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 362,
            "end": 371,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 364,
              "end": 371,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 367,
                "end": 371,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 370,
                  "end": 371,
                  "typeName": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 371,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 372,
        "end": 375,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 374,
          "end": 375,
          "typeName": {
            "type": "Identifier",
            "start": 374,
            "end": 375,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 377,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 396,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 396,
        "end": 399,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 397,
            "end": 398,
            "name": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
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
      "params": [
        {
          "type": "Identifier",
          "start": 400,
          "end": 414,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 401,
            "end": 414,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 403,
              "end": 414,
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 410,
                "end": 414,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 413,
                  "end": 414,
                  "typeName": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 415,
        "end": 418,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 417,
          "end": 418,
          "typeName": {
            "type": "Identifier",
            "start": 417,
            "end": 418,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 420,
      "end": 470,
      "id": {
        "type": "Identifier",
        "start": 437,
        "end": 440,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 440,
        "end": 443,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 441,
            "end": 442,
            "name": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
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
      "params": [
        {
          "type": "Identifier",
          "start": 444,
          "end": 465,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 445,
            "end": 465,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 447,
              "end": 465,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 449,
                  "end": 463,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 450,
                      "end": 459,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 451,
                        "end": 459,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 453,
                          "end": 459
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 460,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 462,
                      "end": 463,
                      "typeName": {
                        "type": "Identifier",
                        "start": 462,
                        "end": 463,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 466,
        "end": 469,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 468,
          "end": 469,
          "typeName": {
            "type": "Identifier",
            "start": 468,
            "end": 469,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 471,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 491,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 491,
        "end": 494,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 492,
            "end": 493,
            "name": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
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
      "params": [
        {
          "type": "Identifier",
          "start": 495,
          "end": 516,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 496,
            "end": 516,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 498,
              "end": 516,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 500,
                  "end": 514,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 501,
                      "end": 510,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 502,
                        "end": 510,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 504,
                          "end": 510
                        }
                      }
                    }
                  ],
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 517,
        "end": 520,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 519,
          "end": 520,
          "typeName": {
            "type": "Identifier",
            "start": 519,
            "end": 520,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 522,
      "end": 567,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 542,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 542,
        "end": 548,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 543,
            "end": 544,
            "name": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 546,
            "end": 547,
            "name": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
              "decorators": [],
              "name": "U",
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
      "params": [
        {
          "type": "Identifier",
          "start": 549,
          "end": 557,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 550,
            "end": 557,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 552,
              "end": 557,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 552,
                  "end": 553,
                  "typeName": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 556,
                  "end": 557,
                  "typeName": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 557,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 558,
        "end": 566,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 560,
          "end": 566,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 561,
              "end": 562,
              "typeName": {
                "type": "Identifier",
                "start": 561,
                "end": 562,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 564,
              "end": 565,
              "typeName": {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 568,
      "end": 613,
      "id": {
        "type": "Identifier",
        "start": 585,
        "end": 588,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 588,
        "end": 594,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 589,
            "end": 590,
            "name": {
              "type": "Identifier",
              "start": 589,
              "end": 590,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 592,
            "end": 593,
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "U",
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
      "params": [
        {
          "type": "Identifier",
          "start": 595,
          "end": 603,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 596,
            "end": 603,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 598,
              "end": 603,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 598,
                  "end": 599,
                  "typeName": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 599,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 602,
                  "end": 603,
                  "typeName": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 603,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 604,
        "end": 612,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 606,
          "end": 612,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 607,
              "end": 608,
              "typeName": {
                "type": "Identifier",
                "start": 607,
                "end": 608,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 610,
              "end": 611,
              "typeName": {
                "type": "Identifier",
                "start": 610,
                "end": 611,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 614,
      "end": 676,
      "id": {
        "type": "Identifier",
        "start": 631,
        "end": 634,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 634,
        "end": 640,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 635,
            "end": 636,
            "name": {
              "type": "Identifier",
              "start": 635,
              "end": 636,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 638,
            "end": 639,
            "name": {
              "type": "Identifier",
              "start": 638,
              "end": 639,
              "decorators": [],
              "name": "U",
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
      "params": [
        {
          "type": "Identifier",
          "start": 641,
          "end": 666,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 642,
            "end": 666,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 644,
              "end": 666,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 646,
                  "end": 655,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 647,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 647,
                    "end": 654,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 649,
                      "end": 654,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 649,
                          "end": 650,
                          "typeName": {
                            "type": "Identifier",
                            "start": 649,
                            "end": 650,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 653,
                          "end": 654,
                          "typeName": {
                            "type": "Identifier",
                            "start": 653,
                            "end": 654,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 656,
                  "end": 664,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 656,
                    "end": 657,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 657,
                    "end": 664,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 659,
                      "end": 664,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 659,
                          "end": 660,
                          "typeName": {
                            "type": "Identifier",
                            "start": 659,
                            "end": 660,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 663,
                          "end": 664,
                          "typeName": {
                            "type": "Identifier",
                            "start": 663,
                            "end": 664,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 667,
        "end": 675,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 669,
          "end": 675,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 670,
              "end": 671,
              "typeName": {
                "type": "Identifier",
                "start": 670,
                "end": 671,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 673,
              "end": 674,
              "typeName": {
                "type": "Identifier",
                "start": 673,
                "end": 674,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 677,
      "end": 695,
      "id": {
        "type": "Identifier",
        "start": 687,
        "end": 688,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 688,
        "end": 691,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 689,
            "end": 690,
            "name": {
              "type": "Identifier",
              "start": 689,
              "end": 690,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 692,
        "end": 695,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 696,
      "end": 732,
      "id": {
        "type": "Identifier",
        "start": 713,
        "end": 716,
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 716,
        "end": 719,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 717,
            "end": 718,
            "name": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
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
      "params": [
        {
          "type": "Identifier",
          "start": 720,
          "end": 727,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 721,
            "end": 727,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 723,
              "end": 727,
              "typeName": {
                "type": "Identifier",
                "start": 723,
                "end": 724,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 724,
                "end": 727,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 725,
                    "end": 726,
                    "typeName": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 726,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 728,
        "end": 731,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 730,
          "end": 731,
          "typeName": {
            "type": "Identifier",
            "start": 730,
            "end": 731,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 733,
      "end": 775,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 753,
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 753,
        "end": 756,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 754,
            "end": 755,
            "name": {
              "type": "Identifier",
              "start": 754,
              "end": 755,
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
      "params": [
        {
          "type": "Identifier",
          "start": 757,
          "end": 770,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 758,
            "end": 770,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 760,
              "end": 770,
              "typeName": {
                "type": "Identifier",
                "start": 760,
                "end": 767,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 767,
                "end": 770,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 768,
                    "end": 769,
                    "typeName": {
                      "type": "Identifier",
                      "start": 768,
                      "end": 769,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 771,
        "end": 774,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 773,
          "end": 774,
          "typeName": {
            "type": "Identifier",
            "start": 773,
            "end": 774,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 776,
      "end": 830,
      "id": {
        "type": "Identifier",
        "start": 793,
        "end": 796,
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 796,
        "end": 802,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 797,
            "end": 798,
            "name": {
              "type": "Identifier",
              "start": 797,
              "end": 798,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 800,
            "end": 801,
            "name": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "decorators": [],
              "name": "K",
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
      "params": [
        {
          "type": "Identifier",
          "start": 803,
          "end": 825,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 804,
            "end": 825,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 806,
              "end": 825,
              "key": {
                "type": "Identifier",
                "start": 808,
                "end": 809,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 813,
                "end": 820,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 819,
                  "end": 820,
                  "typeName": {
                    "type": "Identifier",
                    "start": 819,
                    "end": 820,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 823,
                "end": 824,
                "typeName": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 824,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 826,
        "end": 829,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 828,
          "end": 829,
          "typeName": {
            "type": "Identifier",
            "start": 828,
            "end": 829,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 831,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 851,
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 851,
        "end": 873,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 852,
            "end": 853,
            "name": {
              "type": "Identifier",
              "start": 852,
              "end": 853,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 855,
            "end": 872,
            "name": {
              "type": "Identifier",
              "start": 855,
              "end": 856,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 865,
              "end": 872,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 871,
                "end": 872,
                "typeName": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 872,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 874,
          "end": 893,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 875,
            "end": 893,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 877,
              "end": 893,
              "key": {
                "type": "Identifier",
                "start": 879,
                "end": 880,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 884,
                "end": 885,
                "typeName": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 885,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 888,
                "end": 892,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 888,
                  "end": 889,
                  "typeName": {
                    "type": "Identifier",
                    "start": 888,
                    "end": 889,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 890,
                  "end": 891,
                  "typeName": {
                    "type": "Identifier",
                    "start": 890,
                    "end": 891,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 894,
        "end": 897,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 896,
          "end": 897,
          "typeName": {
            "type": "Identifier",
            "start": 896,
            "end": 897,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 899,
      "end": 960,
      "id": {
        "type": "Identifier",
        "start": 916,
        "end": 919,
        "decorators": [],
        "name": "f19",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 919,
        "end": 941,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 920,
            "end": 921,
            "name": {
              "type": "Identifier",
              "start": 920,
              "end": 921,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 923,
            "end": 940,
            "name": {
              "type": "Identifier",
              "start": 923,
              "end": 924,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 933,
              "end": 940,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 939,
                "end": 940,
                "typeName": {
                  "type": "Identifier",
                  "start": 939,
                  "end": 940,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 942,
          "end": 946,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 943,
            "end": 946,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 945,
              "end": 946,
              "typeName": {
                "type": "Identifier",
                "start": 945,
                "end": 946,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 948,
          "end": 955,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 949,
            "end": 955,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 951,
              "end": 955,
              "objectType": {
                "type": "TSTypeReference",
                "start": 951,
                "end": 952,
                "typeName": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 952,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 953,
                "end": 954,
                "typeName": {
                  "type": "Identifier",
                  "start": 953,
                  "end": 954,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 956,
        "end": 959,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 958,
          "end": 959,
          "typeName": {
            "type": "Identifier",
            "start": 958,
            "end": 959,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 13,
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 10,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 11,
                "end": 12,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 23,
            "end": 28,
            "callee": {
              "type": "Identifier",
              "start": 23,
              "end": 25,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 44,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 38,
            "end": 43,
            "callee": {
              "type": "Identifier",
              "start": 38,
              "end": 40,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 59,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 53,
            "end": 58,
            "callee": {
              "type": "Identifier",
              "start": 53,
              "end": 55,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 74,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 68,
            "end": 73,
            "callee": {
              "type": "Identifier",
              "start": 68,
              "end": 70,
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 89,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 83,
            "end": 88,
            "callee": {
              "type": "Identifier",
              "start": 83,
              "end": 85,
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 104,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 98,
            "end": 103,
            "callee": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "decorators": [],
              "name": "f7",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 119,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 113,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "decorators": [],
              "name": "f8",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 134,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 133,
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 130,
              "decorators": [],
              "name": "f9",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 150,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 143,
            "end": 149,
            "callee": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 166,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 159,
            "end": 165,
            "callee": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 182,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 175,
            "end": 181,
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "decorators": [],
              "name": "f12",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 198,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 191,
            "end": 197,
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "f13",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 214,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 213,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 207,
            "end": 213,
            "callee": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "decorators": [],
              "name": "f14",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 230,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 223,
            "end": 229,
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "f15",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 239,
            "end": 245,
            "callee": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
              "decorators": [],
              "name": "f16",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 262,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 252,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 255,
            "end": 261,
            "callee": {
              "type": "Identifier",
              "start": 255,
              "end": 258,
              "decorators": [],
              "name": "f17",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 278,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 271,
            "end": 277,
            "callee": {
              "type": "Identifier",
              "start": 271,
              "end": 274,
              "decorators": [],
              "name": "f18",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 275,
                "end": 276,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 297,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 287,
            "end": 296,
            "callee": {
              "type": "Identifier",
              "start": 287,
              "end": 290,
              "decorators": [],
              "name": "f19",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 291,
                "end": 292,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
