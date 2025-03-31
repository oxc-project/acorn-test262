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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 29,
            "name": "t",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "f1",
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
          "start": 54,
          "end": 58,
          "name": "t",
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
      "start": 63,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "name": "f2",
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
          "start": 86,
          "end": 92,
          "name": "t",
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
      "start": 98,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 117,
        "name": "f3",
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
          "start": 124,
          "end": 133,
          "name": "t",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "U",
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
        }
      ],
      "body": null,
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
            "start": 121,
            "end": 122,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "U",
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
      "start": 144,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 163,
        "name": "f4",
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
          "start": 167,
          "end": 188,
          "name": "x",
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
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "start": 180,
                  "end": 186,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 183,
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 194,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "name": "f5",
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
          "start": 217,
          "end": 234,
          "name": "x",
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
                  "name": "a",
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
                "start": 227,
                "end": 234,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 230,
                  "end": 234
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
      "start": 240,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 259,
        "name": "f6",
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
          "start": 263,
          "end": 282,
          "name": "x",
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
                  "name": "a",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
      "start": 288,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 307,
        "name": "f7",
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
          "start": 311,
          "end": 332,
          "name": "x",
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
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 316,
                    "end": 321,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 318,
                      "end": 321
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 338,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 357,
        "name": "f8",
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
          "start": 361,
          "end": 371,
          "name": "x",
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
        }
      ],
      "body": null,
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
      "start": 377,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 396,
        "name": "f9",
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
          "start": 400,
          "end": 414,
          "name": "x",
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
        }
      ],
      "body": null,
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
      "start": 420,
      "end": 470,
      "id": {
        "type": "Identifier",
        "start": 437,
        "end": 440,
        "name": "f10",
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
          "start": 444,
          "end": 465,
          "name": "x",
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 451,
                        "end": 459,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 453,
                          "end": 459
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
      "start": 471,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 491,
        "name": "f11",
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
          "start": 495,
          "end": 516,
          "name": "x",
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 502,
                        "end": 510,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 504,
                          "end": 510
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
      "start": 522,
      "end": 567,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 542,
        "name": "f12",
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
          "start": 549,
          "end": 557,
          "name": "x",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "U",
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
        }
      ],
      "body": null,
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
            "start": 546,
            "end": 547,
            "name": {
              "type": "Identifier",
              "start": 546,
              "end": 547,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "U",
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
      "start": 568,
      "end": 613,
      "id": {
        "type": "Identifier",
        "start": 585,
        "end": 588,
        "name": "f13",
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
          "start": 595,
          "end": 603,
          "name": "x",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "U",
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
        }
      ],
      "body": null,
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
            "start": 592,
            "end": 593,
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "U",
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
      "start": 614,
      "end": 676,
      "id": {
        "type": "Identifier",
        "start": 631,
        "end": 634,
        "name": "f14",
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
          "start": 641,
          "end": 666,
          "name": "x",
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "accessibility": null,
                  "static": false
                }
              ]
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
            "start": 638,
            "end": 639,
            "name": {
              "type": "Identifier",
              "start": 638,
              "end": 639,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "U",
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
      "type": "TSInterfaceDeclaration",
      "start": 677,
      "end": 695,
      "id": {
        "type": "Identifier",
        "start": 687,
        "end": 688,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
        "name": "f15",
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
          "start": 720,
          "end": 727,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
      "start": 733,
      "end": 775,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 753,
        "name": "f16",
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
          "start": 757,
          "end": 770,
          "name": "x",
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
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
      "start": 776,
      "end": 830,
      "id": {
        "type": "Identifier",
        "start": 793,
        "end": 796,
        "name": "f17",
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
          "start": 803,
          "end": 825,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 804,
            "end": 825,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 806,
              "end": 825,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 808,
                "end": 820,
                "name": {
                  "type": "Identifier",
                  "start": 808,
                  "end": 809,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "type": "TSTypeReference",
                "start": 823,
                "end": 824,
                "typeName": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 824,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
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
                "start": 808,
                "end": 809,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "start": 800,
            "end": 801,
            "name": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "name": "K",
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
      "start": 831,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 851,
        "name": "f18",
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
          "start": 874,
          "end": 893,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 875,
            "end": 893,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 877,
              "end": 893,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 879,
                "end": 885,
                "name": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 880,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 884,
                  "end": 885,
                  "typeName": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 885,
                    "name": "K",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "P",
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
                "start": 884,
                "end": 885,
                "typeName": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 885,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 879,
                "end": 880,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "start": 855,
            "end": 872,
            "name": {
              "type": "Identifier",
              "start": 855,
              "end": 856,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 899,
      "end": 960,
      "id": {
        "type": "Identifier",
        "start": 916,
        "end": 919,
        "name": "f19",
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
          "start": 942,
          "end": 946,
          "name": "k",
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
                "name": "K",
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
          "start": 948,
          "end": 955,
          "name": "x",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "K",
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
            "start": 923,
            "end": 940,
            "name": {
              "type": "Identifier",
              "start": 923,
              "end": 924,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
