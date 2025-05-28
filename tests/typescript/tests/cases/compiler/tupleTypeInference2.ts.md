__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 577,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 30,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
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
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 34,
        "end": 51,
        "types": [
          {
            "type": "TSTupleType",
            "start": 34,
            "end": 37,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 40,
            "end": 51,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 41,
                "end": 42,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
          "start": 75,
          "end": 82,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 82,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 78,
              "end": 82,
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 79,
                "end": 82,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 80,
                    "end": 81,
                    "typeName": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
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
        "start": 83,
        "end": 86,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 85,
          "end": 86,
          "typeName": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
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
      "type": "ExpressionStatement",
      "start": 88,
      "end": 126,
      "expression": {
        "type": "CallExpression",
        "start": 88,
        "end": 125,
        "callee": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 90,
            "end": 124,
            "expression": {
              "type": "ArrayExpression",
              "start": 90,
              "end": 105,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 91,
                  "end": 100,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Literal",
                  "start": 102,
                  "end": 104,
                  "value": "",
                  "raw": "''"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 109,
              "end": 124,
              "elementTypes": [
                {
                  "type": "TSNeverKeyword",
                  "start": 110,
                  "end": 115
                },
                {
                  "type": "TSStringKeyword",
                  "start": 117,
                  "end": 123
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 176,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 175,
        "callee": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 141,
            "end": 174,
            "expression": {
              "type": "ArrayExpression",
              "start": 141,
              "end": 156,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 151,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Literal",
                  "start": 153,
                  "end": 155,
                  "value": "",
                  "raw": "''"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 160,
              "end": 174,
              "elementTypes": [
                {
                  "type": "TSVoidKeyword",
                  "start": 161,
                  "end": 165
                },
                {
                  "type": "TSStringKeyword",
                  "start": 167,
                  "end": 173
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 211,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 217,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 218,
            "end": 219,
            "name": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
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
            "start": 221,
            "end": 222,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "S",
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
        "type": "TSUnionType",
        "start": 226,
        "end": 238,
        "types": [
          {
            "type": "TSTupleType",
            "start": 226,
            "end": 229,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 227,
                "end": 228,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 232,
            "end": 238,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 233,
                "end": 234,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 236,
                "end": 237,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 240,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 258,
        "end": 264,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 259,
            "end": 260,
            "name": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
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
            "start": 262,
            "end": 263,
            "name": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
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
          "start": 265,
          "end": 275,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 275,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 275,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 269,
                "end": 275,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 270,
                    "end": 271,
                    "typeName": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 273,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 276,
        "end": 279,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 278,
          "end": 279,
          "typeName": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "decorators": [],
            "name": "U",
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
      "type": "ExpressionStatement",
      "start": 281,
      "end": 301,
      "expression": {
        "type": "CallExpression",
        "start": 281,
        "end": 300,
        "callee": {
          "type": "Identifier",
          "start": 281,
          "end": 282,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 283,
            "end": 299,
            "expression": {
              "type": "ArrayExpression",
              "start": 283,
              "end": 287,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 284,
                  "end": 286,
                  "elements": []
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 291,
              "end": 299,
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "start": 292,
                  "end": 298,
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "start": 292,
                    "end": 296
                  }
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 312,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 318,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 324,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 320,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
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
            "start": 322,
            "end": 323,
            "name": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "decorators": [],
              "name": "S",
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
        "type": "TSUnionType",
        "start": 327,
        "end": 343,
        "types": [
          {
            "type": "TSTupleType",
            "start": 327,
            "end": 332,
            "elementTypes": [
              {
                "type": "TSArrayType",
                "start": 328,
                "end": 331,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 328,
                  "end": 329,
                  "typeName": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 329,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 335,
            "end": 343,
            "elementTypes": [
              {
                "type": "TSArrayType",
                "start": 336,
                "end": 339,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 336,
                  "end": 337,
                  "typeName": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 341,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 345,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 363,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 363,
        "end": 369,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 364,
            "end": 365,
            "name": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
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
            "start": 367,
            "end": 368,
            "name": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
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
          "start": 370,
          "end": 380,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 371,
            "end": 380,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 373,
              "end": 380,
              "typeName": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 374,
                "end": 380,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 375,
                    "end": 376,
                    "typeName": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 378,
                    "end": 379,
                    "typeName": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 379,
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 381,
        "end": 384,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 383,
          "end": 384,
          "typeName": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "decorators": [],
            "name": "U",
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
      "type": "ExpressionStatement",
      "start": 386,
      "end": 406,
      "expression": {
        "type": "CallExpression",
        "start": 386,
        "end": 405,
        "callee": {
          "type": "Identifier",
          "start": 386,
          "end": 387,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 388,
            "end": 404,
            "expression": {
              "type": "ArrayExpression",
              "start": 388,
              "end": 392,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 389,
                  "end": 391,
                  "elements": []
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 396,
              "end": 404,
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "start": 397,
                  "end": 403,
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "start": 397,
                    "end": 401
                  }
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 439,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 444,
        "end": 446,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 446,
        "end": 449,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 447,
            "end": 448,
            "name": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
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
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 452,
        "end": 471,
        "types": [
          {
            "type": "TSTupleType",
            "start": 452,
            "end": 457,
            "elementTypes": [
              {
                "type": "TSArrayType",
                "start": 453,
                "end": 456,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 453,
                  "end": 454,
                  "typeName": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 454,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 460,
            "end": 471,
            "elementTypes": [
              {
                "type": "TSArrayType",
                "start": 461,
                "end": 464,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 461,
                  "end": 462,
                  "typeName": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSVoidKeyword",
                "start": 466,
                "end": 470
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 473,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 492,
        "decorators": [],
        "name": "h2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 492,
        "end": 495,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 493,
            "end": 494,
            "name": {
              "type": "Identifier",
              "start": 493,
              "end": 494,
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
          "start": 496,
          "end": 504,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 497,
            "end": 504,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 499,
              "end": 504,
              "typeName": {
                "type": "Identifier",
                "start": 499,
                "end": 501,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 501,
                "end": 504,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 502,
                    "end": 503,
                    "typeName": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 503,
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
        "start": 505,
        "end": 508,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 507,
          "end": 508,
          "typeName": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
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
      "type": "ExpressionStatement",
      "start": 510,
      "end": 532,
      "expression": {
        "type": "CallExpression",
        "start": 510,
        "end": 531,
        "callee": {
          "type": "Identifier",
          "start": 510,
          "end": 512,
          "decorators": [],
          "name": "h2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 513,
            "end": 530,
            "expression": {
              "type": "ArrayExpression",
              "start": 513,
              "end": 517,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 514,
                  "end": 516,
                  "elements": []
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 521,
              "end": 530,
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "start": 522,
                  "end": 529,
                  "elementType": {
                    "type": "TSNeverKeyword",
                    "start": 522,
                    "end": 527
                  }
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 545,
      "end": 566,
      "expression": {
        "type": "CallExpression",
        "start": 545,
        "end": 565,
        "callee": {
          "type": "Identifier",
          "start": 545,
          "end": 547,
          "decorators": [],
          "name": "h2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 548,
            "end": 564,
            "expression": {
              "type": "ArrayExpression",
              "start": 548,
              "end": 552,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 549,
                  "end": 551,
                  "elements": []
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 556,
              "end": 564,
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "start": 557,
                  "end": 563,
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "start": 557,
                    "end": 561
                  }
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
