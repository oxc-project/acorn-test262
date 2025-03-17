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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 7,
              "end": 8,
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15,
                "end": 18,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 17,
                  "end": 18,
                  "typeName": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 18,
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
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 29,
          "end": 37,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 31,
              "end": 35,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "value": 0,
                    "raw": "0"
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 40,
          "end": 41,
          "literal": {
            "type": "Literal",
            "start": 40,
            "end": 41,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 44,
          "end": 45,
          "literal": {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 48,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "name": "T0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
        "start": 61,
        "end": 83,
        "checkType": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 65,
          "typeName": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 65,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
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
        "extendsType": {
          "type": "TSLiteralType",
          "start": 74,
          "end": 75,
          "literal": {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "value": 0,
            "raw": "0"
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
            "value": 1,
            "raw": "1"
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
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 98,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 105,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 113,
                "end": 116,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 114,
                    "end": 115,
                    "typeName": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 115,
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
                "value": 0,
                "raw": "0"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 132,
          "end": 133,
          "literal": {
            "type": "Literal",
            "start": 132,
            "end": 133,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 136,
          "end": 137,
          "literal": {
            "type": "Literal",
            "start": 136,
            "end": 137,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 152,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 159,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
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
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 167,
                "end": 170,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 168,
                    "end": 169,
                    "typeName": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
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
            {
              "type": "TSTypeReference",
              "start": 172,
              "end": 176,
              "typeName": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 173,
                "end": 176,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
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
                "value": 0,
                "raw": "0"
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
                "value": 0,
                "raw": "0"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 195,
          "end": 196,
          "literal": {
            "type": "Literal",
            "start": 195,
            "end": 196,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 199,
          "end": 200,
          "literal": {
            "type": "Literal",
            "start": 199,
            "end": 200,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 215,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 222,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
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
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 230,
                "end": 233,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 232,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
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
            {
              "type": "TSTypeReference",
              "start": 235,
              "end": 239,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 236,
                "end": 239,
                "params": [
                  {
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
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 241,
              "end": 245,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 242,
                "end": 245,
                "params": [
                  {
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
                ]
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
                "value": 0,
                "raw": "0"
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
                "value": 0,
                "raw": "0"
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
                "value": 0,
                "raw": "0"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 267,
          "end": 268,
          "literal": {
            "type": "Literal",
            "start": 267,
            "end": 268,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 271,
          "end": 272,
          "literal": {
            "type": "Literal",
            "start": 271,
            "end": 272,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 288,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 295,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
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
              "typeName": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 303,
                "end": 306,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 304,
                    "end": 305,
                    "typeName": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 305,
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
                "value": 0,
                "raw": "0"
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
                "value": 0,
                "raw": "0"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 325,
          "end": 326,
          "literal": {
            "type": "Literal",
            "start": 325,
            "end": 326,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 329,
          "end": 330,
          "literal": {
            "type": "Literal",
            "start": 329,
            "end": 330,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 338,
      "end": 384,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 345,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
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
              "typeName": {
                "type": "Identifier",
                "start": 352,
                "end": 353,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 353,
                "end": 356,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 354,
                    "end": 355,
                    "typeName": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 355,
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
            {
              "type": "TSTypeReference",
              "start": 358,
              "end": 362,
              "typeName": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 359,
                "end": 362,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 360,
                    "end": 361,
                    "typeName": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 361,
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
                "value": 0,
                "raw": "0"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 378,
          "end": 379,
          "literal": {
            "type": "Literal",
            "start": 378,
            "end": 379,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 382,
          "end": 383,
          "literal": {
            "type": "Literal",
            "start": 382,
            "end": 383,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 392,
      "end": 442,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 399,
        "name": "T6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 407,
                "end": 408,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 408,
                "end": 414,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 410,
                  "end": 414,
                  "typeName": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 411,
                    "end": 414,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 412,
                        "end": 413,
                        "typeName": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 413,
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
              "accessibility": null,
              "static": false
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "value": 0,
                    "raw": "0"
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 436,
          "end": 437,
          "literal": {
            "type": "Literal",
            "start": 436,
            "end": 437,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 440,
          "end": 441,
          "literal": {
            "type": "Literal",
            "start": 440,
            "end": 441,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 496,
      "end": 589,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 503,
        "name": "Or",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 514,
              "end": 521
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 523,
            "end": 540,
            "name": {
              "type": "Identifier",
              "start": 523,
              "end": 524,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 533,
              "end": 540
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
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 548,
              "end": 549,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
                "value": false,
                "raw": "false"
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
                "value": false,
                "raw": "false"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 576,
          "end": 581,
          "literal": {
            "type": "Literal",
            "start": 576,
            "end": 581,
            "value": false,
            "raw": "false"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 584,
          "end": 588,
          "literal": {
            "type": "Literal",
            "start": 584,
            "end": 588,
            "value": true,
            "raw": "true"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 590,
      "end": 682,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 598,
        "name": "And",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 599,
              "end": 600,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 609,
              "end": 616
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 618,
            "end": 635,
            "name": {
              "type": "Identifier",
              "start": 618,
              "end": 619,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 628,
              "end": 635
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
              "typeName": {
                "type": "Identifier",
                "start": 640,
                "end": 641,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 643,
              "end": 644,
              "typeName": {
                "type": "Identifier",
                "start": 643,
                "end": 644,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
                "value": true,
                "raw": "true"
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
                "value": true,
                "raw": "true"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 669,
          "end": 673,
          "literal": {
            "type": "Literal",
            "start": 669,
            "end": 673,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 676,
          "end": 681,
          "literal": {
            "type": "Literal",
            "start": 676,
            "end": 681,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 683,
      "end": 743,
      "id": {
        "type": "Identifier",
        "start": 688,
        "end": 691,
        "name": "Not",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 692,
              "end": 693,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 702,
              "end": 709
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
        "start": 713,
        "end": 742,
        "checkType": {
          "type": "TSTypeReference",
          "start": 713,
          "end": 714,
          "typeName": {
            "type": "Identifier",
            "start": 713,
            "end": 714,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 723,
          "end": 727,
          "literal": {
            "type": "Literal",
            "start": 723,
            "end": 727,
            "value": true,
            "raw": "true"
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
            "value": false,
            "raw": "false"
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
            "value": true,
            "raw": "true"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 744,
      "end": 792,
      "id": {
        "type": "Identifier",
        "start": 749,
        "end": 756,
        "name": "Extends",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 757,
              "end": 758,
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
            "start": 760,
            "end": 761,
            "name": {
              "type": "Identifier",
              "start": 760,
              "end": 761,
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 765,
        "end": 791,
        "checkType": {
          "type": "TSTypeReference",
          "start": 765,
          "end": 766,
          "typeName": {
            "type": "Identifier",
            "start": 765,
            "end": 766,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 775,
          "end": 776,
          "typeName": {
            "type": "Identifier",
            "start": 775,
            "end": 776,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 779,
          "end": 783,
          "literal": {
            "type": "Literal",
            "start": 779,
            "end": 783,
            "value": true,
            "raw": "true"
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
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 794,
      "end": 869,
      "id": {
        "type": "Identifier",
        "start": 799,
        "end": 814,
        "name": "IsNumberLiteral",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 815,
              "end": 816,
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
        "type": "TSTypeReference",
        "start": 820,
        "end": 868,
        "typeName": {
          "type": "Identifier",
          "start": 820,
          "end": 823,
          "name": "And",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 823,
          "end": 868,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 824,
              "end": 842,
              "typeName": {
                "type": "Identifier",
                "start": 824,
                "end": 831,
                "name": "Extends",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 831,
                "end": 842,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 832,
                    "end": 833,
                    "typeName": {
                      "type": "Identifier",
                      "start": 832,
                      "end": 833,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 835,
                    "end": 841
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 844,
              "end": 867,
              "typeName": {
                "type": "Identifier",
                "start": 844,
                "end": 847,
                "name": "Not",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 847,
                "end": 867,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 848,
                    "end": 866,
                    "typeName": {
                      "type": "Identifier",
                      "start": 848,
                      "end": 855,
                      "name": "Extends",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 864,
                            "end": 865,
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
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 871,
      "end": 921,
      "id": {
        "type": "Identifier",
        "start": 876,
        "end": 885,
        "name": "IsLiteral",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 886,
              "end": 887,
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
        "type": "TSTypeReference",
        "start": 891,
        "end": 920,
        "typeName": {
          "type": "Identifier",
          "start": 891,
          "end": 893,
          "name": "Or",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": false,
                "raw": "false"
              }
            },
            {
              "type": "TSTypeReference",
              "start": 901,
              "end": 919,
              "typeName": {
                "type": "Identifier",
                "start": 901,
                "end": 916,
                "name": "IsNumberLiteral",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 916,
                "end": 919,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 917,
                    "end": 918,
                    "typeName": {
                      "type": "Identifier",
                      "start": 917,
                      "end": 918,
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
      "type": "TSTypeAliasDeclaration",
      "start": 969,
      "end": 1052,
      "id": {
        "type": "Identifier",
        "start": 974,
        "end": 980,
        "name": "Values",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 981,
              "end": 982,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 991,
              "end": 997
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
        "start": 1003,
        "end": 1052,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1003,
          "end": 1004,
          "typeName": {
            "type": "Identifier",
            "start": 1003,
            "end": 1004,
            "name": "O",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 1026,
          "end": 1035,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1026,
            "end": 1027,
            "typeName": {
              "type": "Identifier",
              "start": 1026,
              "end": 1027,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSNumberKeyword",
            "start": 1028,
            "end": 1034
          }
        },
        "falseType": {
          "type": "TSIndexedAccessType",
          "start": 1042,
          "end": 1052,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1042,
            "end": 1043,
            "typeName": {
              "type": "Identifier",
              "start": 1042,
              "end": 1043,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 1044,
            "end": 1051,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1050,
              "end": 1051,
              "typeName": {
                "type": "Identifier",
                "start": 1050,
                "end": 1051,
                "name": "O",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1054,
      "end": 1111,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1065,
        "name": "Equals",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1066,
              "end": 1067,
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
            "start": 1069,
            "end": 1070,
            "name": {
              "type": "Identifier",
              "start": 1069,
              "end": 1070,
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
              "typeName": {
                "type": "Identifier",
                "start": 1075,
                "end": 1076,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1078,
              "end": 1079,
              "typeName": {
                "type": "Identifier",
                "start": 1078,
                "end": 1079,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "typeName": {
                "type": "Identifier",
                "start": 1090,
                "end": 1091,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1093,
              "end": 1094,
              "typeName": {
                "type": "Identifier",
                "start": 1093,
                "end": 1094,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 1098,
          "end": 1102,
          "literal": {
            "type": "Literal",
            "start": 1098,
            "end": 1102,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1105,
          "end": 1110,
          "literal": {
            "type": "Literal",
            "start": 1105,
            "end": 1110,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1113,
      "end": 1232,
      "id": {
        "type": "Identifier",
        "start": 1118,
        "end": 1137,
        "name": "FilterByStringValue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1138,
              "end": 1139,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1148,
              "end": 1154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1158,
        "end": 1232,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1163,
          "end": 1175,
          "name": {
            "type": "Identifier",
            "start": 1163,
            "end": 1164,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1168,
            "end": 1175,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1174,
              "end": 1175,
              "typeName": {
                "type": "Identifier",
                "start": 1174,
                "end": 1175,
                "name": "O",
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
        "nameType": {
          "type": "TSConditionalType",
          "start": 1179,
          "end": 1224,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1179,
            "end": 1199,
            "typeName": {
              "type": "Identifier",
              "start": 1179,
              "end": 1185,
              "name": "Equals",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1185,
              "end": 1199,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1186,
                  "end": 1190,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1186,
                    "end": 1187,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1186,
                      "end": 1187,
                      "name": "O",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1188,
                    "end": 1189,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1188,
                      "end": 1189,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1192,
                  "end": 1198
                }
              ]
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
              "value": true,
              "raw": "true"
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1215,
            "end": 1216,
            "typeName": {
              "type": "Identifier",
              "start": 1215,
              "end": 1216,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1219,
            "end": 1224
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1227,
          "end": 1230
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1168,
          "end": 1175,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1174,
            "end": 1175,
            "typeName": {
              "type": "Identifier",
              "start": 1174,
              "end": 1175,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1163,
          "end": 1164,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1234,
      "end": 1333,
      "id": {
        "type": "Identifier",
        "start": 1239,
        "end": 1263,
        "name": "FilteredValuesMatchNever",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1264,
              "end": 1265,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1274,
              "end": 1280
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
        "start": 1286,
        "end": 1333,
        "typeName": {
          "type": "Identifier",
          "start": 1286,
          "end": 1292,
          "name": "Equals",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1292,
          "end": 1333,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1293,
              "end": 1325,
              "typeName": {
                "type": "Identifier",
                "start": 1293,
                "end": 1299,
                "name": "Values",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1299,
                "end": 1325,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1300,
                    "end": 1324,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1300,
                      "end": 1319,
                      "name": "FilterByStringValue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 1321,
                                "end": 1322,
                                "name": "O",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "TSNeverKeyword",
              "start": 1327,
              "end": 1332
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1335,
      "end": 1383,
      "id": {
        "type": "Identifier",
        "start": 1340,
        "end": 1352,
        "name": "FilteredRes1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1355,
        "end": 1383,
        "typeName": {
          "type": "Identifier",
          "start": 1355,
          "end": 1379,
          "name": "FilteredValuesMatchNever",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1407,
      "end": 1424,
      "id": {
        "type": "Identifier",
        "start": 1412,
        "end": 1415,
        "name": "Bit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": 0,
              "raw": "0"
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
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1426,
      "end": 1500,
      "id": {
        "type": "Identifier",
        "start": 1431,
        "end": 1437,
        "name": "AndBit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1438,
              "end": 1439,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1448,
              "end": 1451,
              "typeName": {
                "type": "Identifier",
                "start": 1448,
                "end": 1451,
                "name": "Bit",
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
            "start": 1453,
            "end": 1466,
            "name": {
              "type": "Identifier",
              "start": 1453,
              "end": 1454,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1463,
              "end": 1466,
              "typeName": {
                "type": "Identifier",
                "start": 1463,
                "end": 1466,
                "name": "Bit",
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
              "typeName": {
                "type": "Identifier",
                "start": 1471,
                "end": 1472,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1474,
              "end": 1475,
              "typeName": {
                "type": "Identifier",
                "start": 1474,
                "end": 1475,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
                "value": 1,
                "raw": "1"
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
                "value": 1,
                "raw": "1"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 1494,
          "end": 1495,
          "literal": {
            "type": "Literal",
            "start": 1494,
            "end": 1495,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1498,
          "end": 1499,
          "literal": {
            "type": "Literal",
            "start": 1498,
            "end": 1499,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1502,
      "end": 1602,
      "id": {
        "type": "Identifier",
        "start": 1507,
        "end": 1514,
        "name": "TestBit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1515,
              "end": 1516,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1525,
              "end": 1528,
              "typeName": {
                "type": "Identifier",
                "start": 1525,
                "end": 1528,
                "name": "Bit",
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
            "start": 1530,
            "end": 1543,
            "name": {
              "type": "Identifier",
              "start": 1530,
              "end": 1531,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1540,
              "end": 1543,
              "typeName": {
                "type": "Identifier",
                "start": 1540,
                "end": 1543,
                "name": "Bit",
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
        "type": "TSTypeReference",
        "start": 1547,
        "end": 1601,
        "typeName": {
          "type": "Identifier",
          "start": 1547,
          "end": 1553,
          "name": "AndBit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1557,
                  "end": 1558,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSLiteralType",
                "start": 1567,
                "end": 1568,
                "literal": {
                  "type": "Literal",
                  "start": 1567,
                  "end": 1568,
                  "value": 1,
                  "raw": "1"
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
                  "value": 0,
                  "raw": "0"
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
                  "value": 1,
                  "raw": "1"
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1580,
                  "end": 1581,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSLiteralType",
                "start": 1590,
                "end": 1591,
                "literal": {
                  "type": "Literal",
                  "start": 1590,
                  "end": 1591,
                  "value": 1,
                  "raw": "1"
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
                  "value": 0,
                  "raw": "0"
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
                  "value": 1,
                  "raw": "1"
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1604,
      "end": 1636,
      "id": {
        "type": "Identifier",
        "start": 1609,
        "end": 1619,
        "name": "TestBitRes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1622,
        "end": 1635,
        "typeName": {
          "type": "Identifier",
          "start": 1622,
          "end": 1629,
          "name": "TestBit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": 1,
                "raw": "1"
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
                "value": 1,
                "raw": "1"
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
