__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 502,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 30,
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 58,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 39,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 45,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 42,
                "end": 45,
                "literal": {
                  "type": "Literal",
                  "start": 42,
                  "end": 45,
                  "value": "a",
                  "raw": "'a'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 56,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 56,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 53,
                "end": 56,
                "literal": {
                  "type": "Literal",
                  "start": 53,
                  "end": 56,
                  "value": "a",
                  "raw": "'a'"
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
      "start": 61,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 68,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 68,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 79,
              "end": 87,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 87,
                  "decorators": [],
                  "name": "AB",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 91,
        "end": 115,
        "key": {
          "type": "Identifier",
          "start": 94,
          "end": 97,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "start": 101,
          "end": 106,
          "objectType": {
            "type": "TSTypeReference",
            "start": 101,
            "end": 103,
            "typeName": {
              "type": "Identifier",
              "start": 101,
              "end": 103,
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 104,
            "end": 105,
            "typeName": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 109,
          "end": 113,
          "literal": {
            "type": "Literal",
            "start": 109,
            "end": 113,
            "value": true,
            "raw": "true"
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 117,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 124,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 143,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 142,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 135,
              "end": 142,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 135,
                  "end": 138,
                  "literal": {
                    "type": "Literal",
                    "start": 135,
                    "end": 138,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 139,
                  "end": 142,
                  "literal": {
                    "type": "Literal",
                    "start": 139,
                    "end": 142,
                    "value": "b",
                    "raw": "'b'"
                  }
                }
              ]
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
        "start": 146,
        "end": 154,
        "objectType": {
          "type": "TSTypeReference",
          "start": 146,
          "end": 151,
          "typeName": {
            "type": "Identifier",
            "start": 146,
            "end": 148,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 148,
            "end": 151,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 149,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 152,
          "end": 153,
          "typeName": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 166,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 172,
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 175,
        "end": 187,
        "objectType": {
          "type": "TSTypeReference",
          "start": 175,
          "end": 177,
          "typeName": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 178,
          "end": 186,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 184,
            "end": 186,
            "typeName": {
              "type": "Identifier",
              "start": 184,
              "end": 186,
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 196,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 203,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 206,
        "end": 226,
        "key": {
          "type": "Identifier",
          "start": 209,
          "end": 212,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 216,
          "end": 217,
          "typeName": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 220,
          "end": 224,
          "literal": {
            "type": "Literal",
            "start": 220,
            "end": 224,
            "value": true,
            "raw": "true"
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 228,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 235,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 235,
        "end": 254,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 236,
            "end": 253,
            "name": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 246,
              "end": 253,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 246,
                  "end": 249,
                  "literal": {
                    "type": "Literal",
                    "start": 246,
                    "end": 249,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 250,
                  "end": 253,
                  "literal": {
                    "type": "Literal",
                    "start": 250,
                    "end": 253,
                    "value": "b",
                    "raw": "'b'"
                  }
                }
              ]
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
        "start": 257,
        "end": 262,
        "objectType": {
          "type": "TSTypeReference",
          "start": 257,
          "end": 259,
          "typeName": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 260,
          "end": 261,
          "typeName": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 273,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 278,
        "end": 280,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 280,
        "end": 307,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 281,
            "end": 306,
            "name": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 291,
              "end": 306,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 291,
                  "end": 294,
                  "literal": {
                    "type": "Literal",
                    "start": 291,
                    "end": 294,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 295,
                  "end": 298,
                  "literal": {
                    "type": "Literal",
                    "start": 295,
                    "end": 298,
                    "value": "b",
                    "raw": "'b'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 299,
                  "end": 306,
                  "literal": {
                    "type": "Literal",
                    "start": 299,
                    "end": 306,
                    "value": "extra",
                    "raw": "'extra'"
                  }
                }
              ]
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
        "start": 310,
        "end": 335,
        "objectType": {
          "type": "TSMappedType",
          "start": 310,
          "end": 332,
          "key": {
            "type": "Identifier",
            "start": 312,
            "end": 315,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "start": 319,
            "end": 324,
            "objectType": {
              "type": "TSTypeReference",
              "start": 319,
              "end": 321,
              "typeName": {
                "type": "Identifier",
                "start": 319,
                "end": 321,
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 322,
              "end": 323,
              "typeName": {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "start": 327,
            "end": 331,
            "literal": {
              "type": "Literal",
              "start": 327,
              "end": 331,
              "value": true,
              "raw": "true"
            }
          },
          "optional": false,
          "readonly": null
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 333,
          "end": 334,
          "typeName": {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 347,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 354,
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 354,
        "end": 392,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 355,
            "end": 372,
            "name": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 365,
              "end": 372,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 365,
                  "end": 368,
                  "literal": {
                    "type": "Literal",
                    "start": 365,
                    "end": 368,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 369,
                  "end": 372,
                  "literal": {
                    "type": "Literal",
                    "start": 369,
                    "end": 372,
                    "value": "b",
                    "raw": "'b'"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 374,
            "end": 391,
            "name": {
              "type": "Identifier",
              "start": 374,
              "end": 375,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 384,
              "end": 391,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 384,
                  "end": 387,
                  "literal": {
                    "type": "Literal",
                    "start": 384,
                    "end": 387,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 388,
                  "end": 391,
                  "literal": {
                    "type": "Literal",
                    "start": 388,
                    "end": 391,
                    "value": "b",
                    "raw": "'b'"
                  }
                }
              ]
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
        "start": 395,
        "end": 420,
        "objectType": {
          "type": "TSMappedType",
          "start": 395,
          "end": 417,
          "key": {
            "type": "Identifier",
            "start": 397,
            "end": 400,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "start": 404,
            "end": 409,
            "objectType": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 406,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 406,
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 407,
              "end": 408,
              "typeName": {
                "type": "Identifier",
                "start": 407,
                "end": 408,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "start": 412,
            "end": 416,
            "literal": {
              "type": "Literal",
              "start": 412,
              "end": 416,
              "value": true,
              "raw": "true"
            }
          },
          "optional": false,
          "readonly": null
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 418,
          "end": 419,
          "typeName": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 432,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 437,
        "end": 439,
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 439,
        "end": 473,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 440,
            "end": 457,
            "name": {
              "type": "Identifier",
              "start": 440,
              "end": 441,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 450,
              "end": 457,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 450,
                  "end": 453,
                  "literal": {
                    "type": "Literal",
                    "start": 450,
                    "end": 453,
                    "value": "a",
                    "raw": "'a'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 454,
                  "end": 457,
                  "literal": {
                    "type": "Literal",
                    "start": 454,
                    "end": 457,
                    "value": "b",
                    "raw": "'b'"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 459,
            "end": 472,
            "name": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSLiteralType",
              "start": 469,
              "end": 472,
              "literal": {
                "type": "Literal",
                "start": 469,
                "end": 472,
                "value": "a",
                "raw": "'a'"
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
        "type": "TSIndexedAccessType",
        "start": 476,
        "end": 501,
        "objectType": {
          "type": "TSMappedType",
          "start": 476,
          "end": 498,
          "key": {
            "type": "Identifier",
            "start": 478,
            "end": 481,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "start": 485,
            "end": 490,
            "objectType": {
              "type": "TSTypeReference",
              "start": 485,
              "end": 487,
              "typeName": {
                "type": "Identifier",
                "start": 485,
                "end": 487,
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 488,
              "end": 489,
              "typeName": {
                "type": "Identifier",
                "start": 488,
                "end": 489,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "start": 493,
            "end": 497,
            "literal": {
              "type": "Literal",
              "start": 493,
              "end": 497,
              "value": true,
              "raw": "true"
            }
          },
          "optional": false,
          "readonly": null
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 499,
          "end": 500,
          "typeName": {
            "type": "Identifier",
            "start": 499,
            "end": 500,
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
