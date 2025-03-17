__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 794,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 33,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "equal",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "type": "VariableDeclaration",
      "start": 35,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 43,
            "end": 48,
            "expression": {
              "type": "Literal",
              "start": 43,
              "end": 47,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 91,
      "end": 115,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 100,
        "end": 115,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 113,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 116,
      "end": 153,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 125,
        "end": 153,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 139,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 151,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 151,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 145,
                "end": 151
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 188,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 155,
        "end": 188,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 161,
            "end": 167,
            "expression": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 166,
              "end": 167,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSAsExpression",
            "start": 169,
            "end": 187,
            "expression": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 174,
              "end": 187,
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 174,
                  "end": 183
                },
                {
                  "type": "TSTypeReference",
                  "start": 186,
                  "end": 187,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 160,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 222,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 189,
        "end": 222,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 195,
            "end": 213,
            "expression": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 200,
              "end": 213,
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 200,
                  "end": 209
                },
                {
                  "type": "TSTypeReference",
                  "start": 212,
                  "end": 213,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          },
          {
            "type": "TSAsExpression",
            "start": 215,
            "end": 221,
            "expression": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 220,
              "end": 221,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 194,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 272,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 272,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 245,
            "end": 251,
            "expression": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 251,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSAsExpression",
            "start": 253,
            "end": 271,
            "expression": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 258,
              "end": 271,
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 258,
                  "end": 267
                },
                {
                  "type": "TSTypeReference",
                  "start": 270,
                  "end": 271,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 224,
          "end": 229,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 229,
          "end": 244,
          "params": [
            {
              "type": "TSUnionType",
              "start": 230,
              "end": 243,
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 230,
                  "end": 239
                },
                {
                  "type": "TSTypeReference",
                  "start": 242,
                  "end": 243,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 321,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 273,
        "end": 321,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 294,
            "end": 312,
            "expression": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 299,
              "end": 312,
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 299,
                  "end": 308
                },
                {
                  "type": "TSTypeReference",
                  "start": 311,
                  "end": 312,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          },
          {
            "type": "TSAsExpression",
            "start": 314,
            "end": 320,
            "expression": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 319,
              "end": 320,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 319,
                "end": 320,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 273,
          "end": 278,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 278,
          "end": 293,
          "params": [
            {
              "type": "TSUnionType",
              "start": 279,
              "end": 292,
              "types": [
                {
                  "type": "TSUndefinedKeyword",
                  "start": 279,
                  "end": 288
                },
                {
                  "type": "TSTypeReference",
                  "start": 291,
                  "end": 292,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 352,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 352,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 329,
            "end": 335,
            "expression": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 334,
              "end": 335,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSAsExpression",
            "start": 337,
            "end": 351,
            "expression": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 342,
              "end": 351
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 323,
          "end": 328,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 353,
      "end": 382,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 353,
        "end": 382,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 359,
            "end": 373,
            "expression": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 364,
              "end": 373
            }
          },
          {
            "type": "TSAsExpression",
            "start": 375,
            "end": 381,
            "expression": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 380,
              "end": 381,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 380,
                "end": 381,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 353,
          "end": 358,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 405,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 384,
        "end": 405,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 390,
            "end": 396,
            "expression": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 395,
              "end": 396,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 395,
                "end": 396,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSAsExpression",
            "start": 398,
            "end": 404,
            "expression": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 403,
              "end": 404,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 403,
                "end": 404,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 384,
          "end": 389,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 406,
      "end": 427,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 406,
        "end": 427,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 412,
            "end": 418,
            "expression": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 417,
              "end": 418,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 417,
                "end": 418,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSAsExpression",
            "start": 420,
            "end": 426,
            "expression": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 426,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 406,
          "end": 411,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 462,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 462,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 435,
            "end": 441,
            "expression": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 440,
              "end": 441,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSAsExpression",
            "start": 443,
            "end": 461,
            "expression": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 448,
              "end": 461,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 448,
                  "end": 449,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 452,
                  "end": 461
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 429,
          "end": 434,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 463,
      "end": 496,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 463,
        "end": 496,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 469,
            "end": 487,
            "expression": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 474,
              "end": 487,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 474,
                  "end": 475,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 475,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 478,
                  "end": 487
                }
              ]
            }
          },
          {
            "type": "TSAsExpression",
            "start": 489,
            "end": 495,
            "expression": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 494,
              "end": 495,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 494,
                "end": 495,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 463,
          "end": 468,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 498,
      "end": 536,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 498,
        "end": 535,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 504,
            "end": 524,
            "expression": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 509,
              "end": 524,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 509,
                  "end": 512,
                  "literal": {
                    "type": "Literal",
                    "start": 509,
                    "end": 512,
                    "raw": "'a'",
                    "value": "a"
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 515,
                  "end": 524
                }
              ]
            }
          },
          {
            "type": "TSAsExpression",
            "start": 526,
            "end": 534,
            "expression": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 531,
              "end": 534,
              "literal": {
                "type": "Literal",
                "start": 531,
                "end": 534,
                "raw": "'b'",
                "value": "b"
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 498,
          "end": 503,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 537,
      "end": 575,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 537,
        "end": 574,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 543,
            "end": 551,
            "expression": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 548,
              "end": 551,
              "literal": {
                "type": "Literal",
                "start": 548,
                "end": 551,
                "raw": "'a'",
                "value": "a"
              }
            }
          },
          {
            "type": "TSAsExpression",
            "start": 553,
            "end": 573,
            "expression": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 558,
              "end": 573,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 558,
                  "end": 561,
                  "literal": {
                    "type": "Literal",
                    "start": 558,
                    "end": 561,
                    "raw": "'b'",
                    "value": "b"
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 564,
                  "end": 573
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 537,
          "end": 542,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 577,
      "end": 622,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 577,
        "end": 621,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 583,
            "end": 603,
            "expression": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 588,
              "end": 603,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 588,
                  "end": 591,
                  "literal": {
                    "type": "Literal",
                    "start": 588,
                    "end": 591,
                    "raw": "'a'",
                    "value": "a"
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 594,
                  "end": 603
                }
              ]
            }
          },
          {
            "type": "TSAsExpression",
            "start": 605,
            "end": 620,
            "expression": {
              "type": "Identifier",
              "start": 605,
              "end": 606,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 610,
              "end": 620,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 610,
                  "end": 613,
                  "literal": {
                    "type": "Literal",
                    "start": 610,
                    "end": 613,
                    "raw": "'b'",
                    "value": "b"
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 616,
                  "end": 620
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 577,
          "end": 582,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 623,
      "end": 668,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 623,
        "end": 667,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 629,
            "end": 644,
            "expression": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 634,
              "end": 644,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 634,
                  "end": 637,
                  "literal": {
                    "type": "Literal",
                    "start": 634,
                    "end": 637,
                    "raw": "'a'",
                    "value": "a"
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 640,
                  "end": 644
                }
              ]
            }
          },
          {
            "type": "TSAsExpression",
            "start": 646,
            "end": 666,
            "expression": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 651,
              "end": 666,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 651,
                  "end": 654,
                  "literal": {
                    "type": "Literal",
                    "start": 651,
                    "end": 654,
                    "raw": "'b'",
                    "value": "b"
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 657,
                  "end": 666
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 623,
          "end": 628,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 670,
      "end": 731,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 670,
        "end": 730,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 676,
            "end": 687,
            "expression": {
              "type": "Identifier",
              "start": 676,
              "end": 677,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 681,
              "end": 687
            }
          },
          {
            "type": "TSAsExpression",
            "start": 689,
            "end": 729,
            "expression": {
              "type": "Identifier",
              "start": 689,
              "end": 690,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 694,
              "end": 729,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 694,
                  "end": 717,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 694,
                      "end": 700
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 703,
                      "end": 717,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 705,
                          "end": 715,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 705,
                            "end": 708,
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 708,
                            "end": 715,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 710,
                              "end": 715,
                              "literal": {
                                "type": "Literal",
                                "start": 710,
                                "end": 715,
                                "raw": "'foo'",
                                "value": "foo"
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 720,
                  "end": 729
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 670,
          "end": 675,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 732,
      "end": 793,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 732,
        "end": 792,
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 738,
            "end": 778,
            "expression": {
              "type": "Identifier",
              "start": 738,
              "end": 739,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 743,
              "end": 778,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 743,
                  "end": 766,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 743,
                      "end": 749
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 752,
                      "end": 766,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 754,
                          "end": 764,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 754,
                            "end": 757,
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 757,
                            "end": 764,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 759,
                              "end": 764,
                              "literal": {
                                "type": "Literal",
                                "start": 759,
                                "end": 764,
                                "raw": "'foo'",
                                "value": "foo"
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 769,
                  "end": 778
                }
              ]
            }
          },
          {
            "type": "TSAsExpression",
            "start": 780,
            "end": 791,
            "expression": {
              "type": "Identifier",
              "start": 780,
              "end": 781,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 785,
              "end": 791
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 732,
          "end": 737,
          "decorators": [],
          "name": "equal",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
