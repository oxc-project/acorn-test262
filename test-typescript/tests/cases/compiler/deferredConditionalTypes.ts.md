__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1637,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 12,
        "end": 45,
        "checkType": {
          "type": "TSTypeLiteral",
          "start": 12,
          "end": 20,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 14,
              "end": 18,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15,
                "end": 18,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 17,
                  "end": 18,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 18,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 29,
          "end": 37,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 31,
              "end": 35,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 34,
                  "end": 35,
                  "literal": {
                    "type": "Literal",
                    "start": 34,
                    "end": 35,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 44,
          "end": 45,
          "literal": {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 40,
          "end": 41,
          "literal": {
            "type": "Literal",
            "start": 40,
            "end": 41,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6,
        "end": 9,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7,
            "end": 8,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 7,
              "end": 8,
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
      "start": 48,
      "end": 84,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 61,
        "end": 83,
        "checkType": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 65,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 65,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
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
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 74,
          "end": 75,
          "literal": {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 82,
          "end": 83,
          "literal": {
            "type": "Literal",
            "start": 82,
            "end": 83,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 78,
          "end": 79,
          "literal": {
            "type": "Literal",
            "start": 78,
            "end": 79,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 58,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
      "start": 98,
      "end": 138,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 105,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 111,
        "end": 137,
        "checkType": {
          "type": "TSTupleType",
          "start": 111,
          "end": 117,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 112,
              "end": 116,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 113,
                "end": 116,
                "params": [
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 126,
          "end": 129,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 127,
              "end": 128,
              "literal": {
                "type": "Literal",
                "start": 127,
                "end": 128,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 136,
          "end": 137,
          "literal": {
            "type": "Literal",
            "start": 136,
            "end": 137,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 132,
          "end": 133,
          "literal": {
            "type": "Literal",
            "start": 132,
            "end": 133,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
      "start": 152,
      "end": 201,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 159,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 165,
        "end": 200,
        "checkType": {
          "type": "TSTupleType",
          "start": 165,
          "end": 177,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 166,
              "end": 170,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 167,
                "end": 170,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 168,
                    "end": 169,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
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
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 172,
              "end": 176,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 173,
                "end": 176,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 175,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
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
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 186,
          "end": 192,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 187,
              "end": 188,
              "literal": {
                "type": "Literal",
                "start": 187,
                "end": 188,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 190,
              "end": 191,
              "literal": {
                "type": "Literal",
                "start": 190,
                "end": 191,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 199,
          "end": 200,
          "literal": {
            "type": "Literal",
            "start": 199,
            "end": 200,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 195,
          "end": 196,
          "literal": {
            "type": "Literal",
            "start": 195,
            "end": 196,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 161,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
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
      "start": 215,
      "end": 273,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 222,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 228,
        "end": 272,
        "checkType": {
          "type": "TSTupleType",
          "start": 228,
          "end": 246,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 229,
              "end": 233,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 230,
                "end": 233,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 232,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
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
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 235,
              "end": 239,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 236,
                "end": 239,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 237,
                    "end": 238,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 238,
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
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 241,
              "end": 245,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 242,
                "end": 245,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 243,
                    "end": 244,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
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
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 255,
          "end": 264,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 256,
              "end": 257,
              "literal": {
                "type": "Literal",
                "start": 256,
                "end": 257,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 259,
              "end": 260,
              "literal": {
                "type": "Literal",
                "start": 259,
                "end": 260,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 262,
              "end": 263,
              "literal": {
                "type": "Literal",
                "start": 262,
                "end": 263,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 271,
          "end": 272,
          "literal": {
            "type": "Literal",
            "start": 271,
            "end": 272,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 267,
          "end": 268,
          "literal": {
            "type": "Literal",
            "start": 267,
            "end": 268,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 222,
        "end": 225,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 224,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
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
      "start": 288,
      "end": 331,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 295,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 301,
        "end": 330,
        "checkType": {
          "type": "TSTupleType",
          "start": 301,
          "end": 307,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 302,
              "end": 306,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 303,
                "end": 306,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 304,
                    "end": 305,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 305,
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
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 316,
          "end": 322,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 317,
              "end": 318,
              "literal": {
                "type": "Literal",
                "start": 317,
                "end": 318,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 320,
              "end": 321,
              "literal": {
                "type": "Literal",
                "start": 320,
                "end": 321,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 329,
          "end": 330,
          "literal": {
            "type": "Literal",
            "start": 329,
            "end": 330,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 325,
          "end": 326,
          "literal": {
            "type": "Literal",
            "start": 325,
            "end": 326,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 295,
        "end": 298,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 296,
            "end": 297,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
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
      "start": 338,
      "end": 384,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 345,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 351,
        "end": 383,
        "checkType": {
          "type": "TSTupleType",
          "start": 351,
          "end": 363,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 352,
              "end": 356,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 353,
                "end": 356,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 354,
                    "end": 355,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 355,
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
                "start": 352,
                "end": 353,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 358,
              "end": 362,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 359,
                "end": 362,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 360,
                    "end": 361,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 361,
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
                "start": 358,
                "end": 359,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 372,
          "end": 375,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 373,
              "end": 374,
              "literal": {
                "type": "Literal",
                "start": 373,
                "end": 374,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 382,
          "end": 383,
          "literal": {
            "type": "Literal",
            "start": 382,
            "end": 383,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 378,
          "end": 379,
          "literal": {
            "type": "Literal",
            "start": 378,
            "end": 379,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 345,
        "end": 348,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 346,
            "end": 347,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
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
      "start": 392,
      "end": 442,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 399,
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 405,
        "end": 441,
        "checkType": {
          "type": "TSTypeLiteral",
          "start": 405,
          "end": 416,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 407,
              "end": 414,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 407,
                "end": 408,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 408,
                "end": 414,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 410,
                  "end": 414,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 411,
                    "end": 414,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 412,
                        "end": 413,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 413,
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
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 425,
          "end": 433,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 427,
              "end": 431,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 428,
                "end": 431,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 430,
                  "end": 431,
                  "literal": {
                    "type": "Literal",
                    "start": 430,
                    "end": 431,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 440,
          "end": 441,
          "literal": {
            "type": "Literal",
            "start": 440,
            "end": 441,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 436,
          "end": 437,
          "literal": {
            "type": "Literal",
            "start": 436,
            "end": 437,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 399,
        "end": 402,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 401,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
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
      "start": 496,
      "end": 589,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 503,
        "decorators": [],
        "name": "Or",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 544,
        "end": 588,
        "checkType": {
          "type": "TSTupleType",
          "start": 544,
          "end": 550,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 545,
              "end": 546,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 548,
              "end": 549,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 559,
          "end": 573,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 560,
              "end": 565,
              "literal": {
                "type": "Literal",
                "start": 560,
                "end": 565,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 567,
              "end": 572,
              "literal": {
                "type": "Literal",
                "start": 567,
                "end": 572,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 584,
          "end": 588,
          "literal": {
            "type": "Literal",
            "start": 584,
            "end": 588,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 576,
          "end": 581,
          "literal": {
            "type": "Literal",
            "start": 576,
            "end": 581,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 503,
        "end": 541,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 504,
            "end": 521,
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 514,
              "end": 521
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 523,
            "end": 540,
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 533,
              "end": 540
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 523,
              "end": 524,
              "decorators": [],
              "name": "B",
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
      "start": 590,
      "end": 682,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 598,
        "decorators": [],
        "name": "And",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 639,
        "end": 681,
        "checkType": {
          "type": "TSTupleType",
          "start": 639,
          "end": 645,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 640,
              "end": 641,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 640,
                "end": 641,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 643,
              "end": 644,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 643,
                "end": 644,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 654,
          "end": 666,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 655,
              "end": 659,
              "literal": {
                "type": "Literal",
                "start": 655,
                "end": 659,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 661,
              "end": 665,
              "literal": {
                "type": "Literal",
                "start": 661,
                "end": 665,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 676,
          "end": 681,
          "literal": {
            "type": "Literal",
            "start": 676,
            "end": 681,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 669,
          "end": 673,
          "literal": {
            "type": "Literal",
            "start": 669,
            "end": 673,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 598,
        "end": 636,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 599,
            "end": 616,
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 609,
              "end": 616
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 599,
              "end": 600,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 618,
            "end": 635,
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 628,
              "end": 635
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 618,
              "end": 619,
              "decorators": [],
              "name": "B",
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
      "start": 683,
      "end": 743,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 688,
        "end": 691,
        "decorators": [],
        "name": "Not",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 713,
        "end": 742,
        "checkType": {
          "type": "TSTypeReference",
          "start": 713,
          "end": 714,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 713,
            "end": 714,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 723,
          "end": 727,
          "literal": {
            "type": "Literal",
            "start": 723,
            "end": 727,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 738,
          "end": 742,
          "literal": {
            "type": "Literal",
            "start": 738,
            "end": 742,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 730,
          "end": 735,
          "literal": {
            "type": "Literal",
            "start": 730,
            "end": 735,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 691,
        "end": 710,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 692,
            "end": 709,
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 702,
              "end": 709
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 692,
              "end": 693,
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
      "start": 744,
      "end": 792,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 749,
        "end": 756,
        "decorators": [],
        "name": "Extends",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 765,
        "end": 791,
        "checkType": {
          "type": "TSTypeReference",
          "start": 765,
          "end": 766,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 765,
            "end": 766,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 775,
          "end": 776,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 775,
            "end": 776,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 786,
          "end": 791,
          "literal": {
            "type": "Literal",
            "start": 786,
            "end": 791,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 779,
          "end": 783,
          "literal": {
            "type": "Literal",
            "start": 779,
            "end": 783,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 756,
        "end": 762,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 757,
            "end": 758,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 757,
              "end": 758,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 760,
            "end": 761,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 760,
              "end": 761,
              "decorators": [],
              "name": "B",
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
      "start": 794,
      "end": 869,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 799,
        "end": 814,
        "decorators": [],
        "name": "IsNumberLiteral",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 820,
        "end": 868,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 823,
          "end": 868,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 824,
              "end": 842,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 831,
                "end": 842,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 832,
                    "end": 833,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 832,
                      "end": 833,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 835,
                    "end": 841
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 824,
                "end": 831,
                "decorators": [],
                "name": "Extends",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 844,
              "end": 867,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 847,
                "end": 867,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 848,
                    "end": 866,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 855,
                      "end": 866,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 856,
                          "end": 862
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 864,
                          "end": 865,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 864,
                            "end": 865,
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
                      "start": 848,
                      "end": 855,
                      "decorators": [],
                      "name": "Extends",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 844,
                "end": 847,
                "decorators": [],
                "name": "Not",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 820,
          "end": 823,
          "decorators": [],
          "name": "And",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 814,
        "end": 817,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 815,
            "end": 816,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 815,
              "end": 816,
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
      "start": 871,
      "end": 921,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 876,
        "end": 885,
        "decorators": [],
        "name": "IsLiteral",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 891,
        "end": 920,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 893,
          "end": 920,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 894,
              "end": 899,
              "literal": {
                "type": "Literal",
                "start": 894,
                "end": 899,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 901,
              "end": 919,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 916,
                "end": 919,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 917,
                    "end": 918,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 917,
                      "end": 918,
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
                "start": 901,
                "end": 916,
                "decorators": [],
                "name": "IsNumberLiteral",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 891,
          "end": 893,
          "decorators": [],
          "name": "Or",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 885,
        "end": 888,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 886,
            "end": 887,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 886,
              "end": 887,
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
      "start": 969,
      "end": 1052,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 974,
        "end": 980,
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1003,
        "end": 1052,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1003,
          "end": 1004,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1003,
            "end": 1004,
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 1013,
          "end": 1018,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 1013,
            "end": 1016
          }
        },
        "falseType": {
          "type": "TSIndexedAccessType",
          "start": 1042,
          "end": 1052,
          "indexType": {
            "type": "TSTypeOperator",
            "start": 1044,
            "end": 1051,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1050,
              "end": 1051,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1050,
                "end": 1051,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 1042,
            "end": 1043,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1042,
              "end": 1043,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 1026,
          "end": 1035,
          "indexType": {
            "type": "TSNumberKeyword",
            "start": 1028,
            "end": 1034
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 1026,
            "end": 1027,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1026,
              "end": 1027,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 980,
        "end": 998,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 981,
            "end": 997,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 991,
              "end": 997
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 981,
              "end": 982,
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
      "start": 1054,
      "end": 1111,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1065,
        "decorators": [],
        "name": "Equals",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1074,
        "end": 1110,
        "checkType": {
          "type": "TSTupleType",
          "start": 1074,
          "end": 1080,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 1075,
              "end": 1076,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1075,
                "end": 1076,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1078,
              "end": 1079,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1078,
                "end": 1079,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 1089,
          "end": 1095,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 1090,
              "end": 1091,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1090,
                "end": 1091,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1093,
              "end": 1094,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1093,
                "end": 1094,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1105,
          "end": 1110,
          "literal": {
            "type": "Literal",
            "start": 1105,
            "end": 1110,
            "raw": "false",
            "value": false,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 1098,
          "end": 1102,
          "literal": {
            "type": "Literal",
            "start": 1098,
            "end": 1102,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1065,
        "end": 1071,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1066,
            "end": 1067,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1066,
              "end": 1067,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1069,
            "end": 1070,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1069,
              "end": 1070,
              "decorators": [],
              "name": "B",
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
      "start": 1113,
      "end": 1232,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1118,
        "end": 1137,
        "decorators": [],
        "name": "FilterByStringValue",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1158,
        "end": 1232,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1168,
          "end": 1175,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1174,
            "end": 1175,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1174,
              "end": 1175,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1163,
          "end": 1164,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 1179,
          "end": 1224,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1179,
            "end": 1199,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1185,
              "end": 1199,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1186,
                  "end": 1190,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1188,
                    "end": 1189,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1188,
                      "end": 1189,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1186,
                    "end": 1187,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1186,
                      "end": 1187,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1192,
                  "end": 1198
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1179,
              "end": 1185,
              "decorators": [],
              "name": "Equals",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 1208,
            "end": 1212,
            "literal": {
              "type": "Literal",
              "start": 1208,
              "end": 1212,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1219,
            "end": 1224
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1215,
            "end": 1216,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1215,
              "end": 1216,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1227,
          "end": 1230
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1137,
        "end": 1155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1138,
            "end": 1154,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1148,
              "end": 1154
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1138,
              "end": 1139,
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
      "start": 1234,
      "end": 1333,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1239,
        "end": 1263,
        "decorators": [],
        "name": "FilteredValuesMatchNever",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1286,
        "end": 1333,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1292,
          "end": 1333,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1293,
              "end": 1325,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1299,
                "end": 1325,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1300,
                    "end": 1324,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1319,
                      "end": 1324,
                      "params": [
                        {
                          "type": "TSTupleType",
                          "start": 1320,
                          "end": 1323,
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "start": 1321,
                              "end": 1322,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1321,
                                "end": 1322,
                                "decorators": [],
                                "name": "O",
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
                      "start": 1300,
                      "end": 1319,
                      "decorators": [],
                      "name": "FilterByStringValue",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1293,
                "end": 1299,
                "decorators": [],
                "name": "Values",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSNeverKeyword",
              "start": 1327,
              "end": 1332
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1286,
          "end": 1292,
          "decorators": [],
          "name": "Equals",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1263,
        "end": 1281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1264,
            "end": 1280,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1274,
              "end": 1280
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1264,
              "end": 1265,
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
      "start": 1335,
      "end": 1383,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1340,
        "end": 1352,
        "decorators": [],
        "name": "FilteredRes1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1355,
        "end": 1383,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1379,
          "end": 1383,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1380,
              "end": 1382,
              "elementTypes": []
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1355,
          "end": 1379,
          "decorators": [],
          "name": "FilteredValuesMatchNever",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1407,
      "end": 1424,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1412,
        "end": 1415,
        "decorators": [],
        "name": "Bit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1418,
        "end": 1423,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 1418,
            "end": 1419,
            "literal": {
              "type": "Literal",
              "start": 1418,
              "end": 1419,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 1422,
            "end": 1423,
            "literal": {
              "type": "Literal",
              "start": 1422,
              "end": 1423,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1426,
      "end": 1500,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1431,
        "end": 1437,
        "decorators": [],
        "name": "AndBit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1470,
        "end": 1499,
        "checkType": {
          "type": "TSTupleType",
          "start": 1470,
          "end": 1476,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 1471,
              "end": 1472,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1471,
                "end": 1472,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1474,
              "end": 1475,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1474,
                "end": 1475,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 1485,
          "end": 1491,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 1486,
              "end": 1487,
              "literal": {
                "type": "Literal",
                "start": 1486,
                "end": 1487,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1489,
              "end": 1490,
              "literal": {
                "type": "Literal",
                "start": 1489,
                "end": 1490,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1498,
          "end": 1499,
          "literal": {
            "type": "Literal",
            "start": 1498,
            "end": 1499,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 1494,
          "end": 1495,
          "literal": {
            "type": "Literal",
            "start": 1494,
            "end": 1495,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1437,
        "end": 1467,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1438,
            "end": 1451,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1448,
              "end": 1451,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1448,
                "end": 1451,
                "decorators": [],
                "name": "Bit",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1438,
              "end": 1439,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1453,
            "end": 1466,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1463,
              "end": 1466,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1463,
                "end": 1466,
                "decorators": [],
                "name": "Bit",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1453,
              "end": 1454,
              "decorators": [],
              "name": "B",
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
      "start": 1502,
      "end": 1602,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1507,
        "end": 1514,
        "decorators": [],
        "name": "TestBit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1547,
        "end": 1601,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1553,
          "end": 1601,
          "params": [
            {
              "type": "TSConditionalType",
              "start": 1557,
              "end": 1576,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1557,
                "end": 1558,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1557,
                  "end": 1558,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSLiteralType",
                "start": 1567,
                "end": 1568,
                "literal": {
                  "type": "Literal",
                  "start": 1567,
                  "end": 1568,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 1575,
                "end": 1576,
                "literal": {
                  "type": "Literal",
                  "start": 1575,
                  "end": 1576,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 1571,
                "end": 1572,
                "literal": {
                  "type": "Literal",
                  "start": 1571,
                  "end": 1572,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            },
            {
              "type": "TSConditionalType",
              "start": 1580,
              "end": 1599,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1580,
                "end": 1581,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1580,
                  "end": 1581,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSLiteralType",
                "start": 1590,
                "end": 1591,
                "literal": {
                  "type": "Literal",
                  "start": 1590,
                  "end": 1591,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 1598,
                "end": 1599,
                "literal": {
                  "type": "Literal",
                  "start": 1598,
                  "end": 1599,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 1594,
                "end": 1595,
                "literal": {
                  "type": "Literal",
                  "start": 1594,
                  "end": 1595,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1547,
          "end": 1553,
          "decorators": [],
          "name": "AndBit",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1514,
        "end": 1544,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1515,
            "end": 1528,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1525,
              "end": 1528,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1525,
                "end": 1528,
                "decorators": [],
                "name": "Bit",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1515,
              "end": 1516,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1530,
            "end": 1543,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1540,
              "end": 1543,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1540,
                "end": 1543,
                "decorators": [],
                "name": "Bit",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1530,
              "end": 1531,
              "decorators": [],
              "name": "B",
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
      "start": 1604,
      "end": 1636,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1609,
        "end": 1619,
        "decorators": [],
        "name": "TestBitRes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1622,
        "end": 1635,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1629,
          "end": 1635,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1630,
              "end": 1631,
              "literal": {
                "type": "Literal",
                "start": 1630,
                "end": 1631,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1633,
              "end": 1634,
              "literal": {
                "type": "Literal",
                "start": 1633,
                "end": 1634,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1622,
          "end": 1629,
          "decorators": [],
          "name": "TestBit",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
