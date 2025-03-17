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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "equal",
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
          "start": 18,
          "end": 22,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
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
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 33,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 43,
            "end": 48,
            "expression": {
              "type": "Literal",
              "start": 43,
              "end": 47,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 91,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 100,
        "end": 115,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
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
      "start": 116,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 125,
        "end": 153,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 139,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 151,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 151,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 145,
                "end": 151
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
      "type": "ExpressionStatement",
      "start": 155,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 155,
        "end": 188,
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 160,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 161,
            "end": 167,
            "expression": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 166,
              "end": 167,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 222,
      "expression": {
        "type": "CallExpression",
        "start": 189,
        "end": 222,
        "callee": {
          "type": "Identifier",
          "start": 189,
          "end": 194,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 195,
            "end": 213,
            "expression": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "name": "D",
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
            "type": "TSAsExpression",
            "start": 215,
            "end": 221,
            "expression": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 220,
              "end": 221,
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 272,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 272,
        "callee": {
          "type": "Identifier",
          "start": 224,
          "end": 229,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 245,
            "end": 251,
            "expression": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "name": "B",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 321,
      "expression": {
        "type": "CallExpression",
        "start": 273,
        "end": 321,
        "callee": {
          "type": "Identifier",
          "start": 273,
          "end": 278,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 294,
            "end": 312,
            "expression": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "name": "D",
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
            "type": "TSAsExpression",
            "start": 314,
            "end": 320,
            "expression": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 319,
              "end": 320,
              "typeName": {
                "type": "Identifier",
                "start": 319,
                "end": 320,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "name": "B",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 352,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 352,
        "callee": {
          "type": "Identifier",
          "start": 323,
          "end": 328,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 329,
            "end": 335,
            "expression": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 334,
              "end": 335,
              "typeName": {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 342,
              "end": 351
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 353,
      "end": 382,
      "expression": {
        "type": "CallExpression",
        "start": 353,
        "end": 382,
        "callee": {
          "type": "Identifier",
          "start": 353,
          "end": 358,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 359,
            "end": 373,
            "expression": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 380,
              "end": 381,
              "typeName": {
                "type": "Identifier",
                "start": 380,
                "end": 381,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 405,
      "expression": {
        "type": "CallExpression",
        "start": 384,
        "end": 405,
        "callee": {
          "type": "Identifier",
          "start": 384,
          "end": 389,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 390,
            "end": 396,
            "expression": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 395,
              "end": 396,
              "typeName": {
                "type": "Identifier",
                "start": 395,
                "end": 396,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 403,
              "end": 404,
              "typeName": {
                "type": "Identifier",
                "start": 403,
                "end": 404,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 406,
      "end": 427,
      "expression": {
        "type": "CallExpression",
        "start": 406,
        "end": 427,
        "callee": {
          "type": "Identifier",
          "start": 406,
          "end": 411,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 412,
            "end": 418,
            "expression": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 417,
              "end": 418,
              "typeName": {
                "type": "Identifier",
                "start": 417,
                "end": 418,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 426,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 426,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 462,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 462,
        "callee": {
          "type": "Identifier",
          "start": 429,
          "end": 434,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 435,
            "end": 441,
            "expression": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 440,
              "end": 441,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 449,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 463,
      "end": 496,
      "expression": {
        "type": "CallExpression",
        "start": 463,
        "end": 496,
        "callee": {
          "type": "Identifier",
          "start": 463,
          "end": 468,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 469,
            "end": 487,
            "expression": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 475,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 494,
              "end": 495,
              "typeName": {
                "type": "Identifier",
                "start": 494,
                "end": 495,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 498,
      "end": 536,
      "expression": {
        "type": "CallExpression",
        "start": 498,
        "end": 535,
        "callee": {
          "type": "Identifier",
          "start": 498,
          "end": 503,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 504,
            "end": 524,
            "expression": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "value": "a",
                    "raw": "'a'"
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 531,
              "end": 534,
              "literal": {
                "type": "Literal",
                "start": 531,
                "end": 534,
                "value": "b",
                "raw": "'b'"
              }
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 537,
      "end": 575,
      "expression": {
        "type": "CallExpression",
        "start": 537,
        "end": 574,
        "callee": {
          "type": "Identifier",
          "start": 537,
          "end": 542,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 543,
            "end": 551,
            "expression": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 548,
              "end": 551,
              "literal": {
                "type": "Literal",
                "start": 548,
                "end": 551,
                "value": "a",
                "raw": "'a'"
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "value": "b",
                    "raw": "'b'"
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 577,
      "end": 622,
      "expression": {
        "type": "CallExpression",
        "start": 577,
        "end": 621,
        "callee": {
          "type": "Identifier",
          "start": 577,
          "end": 582,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 583,
            "end": 603,
            "expression": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "value": "a",
                    "raw": "'a'"
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "value": "b",
                    "raw": "'b'"
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 623,
      "end": 668,
      "expression": {
        "type": "CallExpression",
        "start": 623,
        "end": 667,
        "callee": {
          "type": "Identifier",
          "start": 623,
          "end": 628,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 629,
            "end": 644,
            "expression": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "value": "a",
                    "raw": "'a'"
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "value": "b",
                    "raw": "'b'"
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 670,
      "end": 731,
      "expression": {
        "type": "CallExpression",
        "start": 670,
        "end": 730,
        "callee": {
          "type": "Identifier",
          "start": 670,
          "end": 675,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 676,
            "end": 687,
            "expression": {
              "type": "Identifier",
              "start": 676,
              "end": 677,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 705,
                            "end": 708,
                            "name": "tag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                "value": "foo",
                                "raw": "'foo'"
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 732,
      "end": 793,
      "expression": {
        "type": "CallExpression",
        "start": 732,
        "end": 792,
        "callee": {
          "type": "Identifier",
          "start": 732,
          "end": 737,
          "name": "equal",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSAsExpression",
            "start": 738,
            "end": 778,
            "expression": {
              "type": "Identifier",
              "start": 738,
              "end": 739,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 754,
                            "end": 757,
                            "name": "tag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                "value": "foo",
                                "raw": "'foo'"
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 785,
              "end": 791
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
