__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 946,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 46,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 40,
              "end": 46
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 48,
            "end": 65,
            "name": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 58,
              "end": 65,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
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
          "start": 67,
          "end": 76,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 76,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            }
          }
        },
        {
          "type": "Identifier",
          "start": 78,
          "end": 86,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 86,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 82,
              "end": 86,
              "objectType": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "P",
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
        "start": 87,
        "end": 93,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 89,
          "end": 93
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 109,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 100,
            "end": 107,
            "expression": {
              "type": "AssignmentExpression",
              "start": 100,
              "end": 106,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 100,
                "end": 102,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 110,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 135,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNullKeyword",
              "start": 131,
              "end": 135
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 154,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 147,
              "end": 154,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 153,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
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
          "start": 156,
          "end": 165,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 165,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 159,
              "end": 165
            }
          }
        },
        {
          "type": "Identifier",
          "start": 167,
          "end": 175,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 175,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 171,
              "end": 175,
              "objectType": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 172,
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 173,
                "end": 174,
                "typeName": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "P",
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
        "start": 176,
        "end": 182,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 178,
          "end": 182
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 183,
        "end": 198,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 189,
            "end": 196,
            "expression": {
              "type": "AssignmentExpression",
              "start": 189,
              "end": 195,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 189,
                "end": 191,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 199,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 209,
        "end": 249,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 210,
            "end": 229,
            "name": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUndefinedKeyword",
              "start": 220,
              "end": 229
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 248,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 241,
              "end": 248,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 248,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
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
          "start": 250,
          "end": 259,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 251,
            "end": 259,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 253,
              "end": 259
            }
          }
        },
        {
          "type": "Identifier",
          "start": 261,
          "end": 269,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 263,
            "end": 269,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 265,
              "end": 269,
              "objectType": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 267,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "decorators": [],
                  "name": "P",
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
        "start": 270,
        "end": 276,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 272,
          "end": 276
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 277,
        "end": 292,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 283,
            "end": 290,
            "expression": {
              "type": "AssignmentExpression",
              "start": 283,
              "end": 289,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 283,
                "end": 285,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 293,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 303,
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 303,
        "end": 338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 304,
            "end": 318,
            "name": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSVoidKeyword",
              "start": 314,
              "end": 318
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 320,
            "end": 337,
            "name": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 330,
              "end": 337,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 336,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 337,
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
          "start": 339,
          "end": 348,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 340,
            "end": 348,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 342,
              "end": 348
            }
          }
        },
        {
          "type": "Identifier",
          "start": 350,
          "end": 358,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 352,
            "end": 358,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 354,
              "end": 358,
              "objectType": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 355,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 356,
                "end": 357,
                "typeName": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 357,
                  "decorators": [],
                  "name": "P",
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
        "start": 359,
        "end": 365,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 361,
          "end": 365
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 366,
        "end": 381,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 379,
            "expression": {
              "type": "AssignmentExpression",
              "start": 372,
              "end": 378,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 372,
                "end": 374,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 377,
                "end": 378,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 382,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 392,
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 392,
        "end": 428,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 393,
            "end": 408,
            "name": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNeverKeyword",
              "start": 403,
              "end": 408
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 410,
            "end": 427,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 420,
              "end": 427,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 426,
                "end": 427,
                "typeName": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 427,
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
          "start": 429,
          "end": 438,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 430,
            "end": 438,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 432,
              "end": 438
            }
          }
        },
        {
          "type": "Identifier",
          "start": 440,
          "end": 448,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 442,
            "end": 448,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 444,
              "end": 448,
              "objectType": {
                "type": "TSTypeReference",
                "start": 444,
                "end": 445,
                "typeName": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 446,
                "end": 447,
                "typeName": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "decorators": [],
                  "name": "P",
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
        "start": 449,
        "end": 455,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 451,
          "end": 455
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 456,
        "end": 471,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 462,
            "end": 469,
            "expression": {
              "type": "AssignmentExpression",
              "start": 462,
              "end": 468,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 462,
                "end": 464,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 472,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 482,
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 482,
        "end": 519,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 483,
            "end": 499,
            "name": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 493,
              "end": 499
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 501,
            "end": 518,
            "name": {
              "type": "Identifier",
              "start": 501,
              "end": 502,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 511,
              "end": 518,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 517,
                "end": 518,
                "typeName": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 518,
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
          "start": 520,
          "end": 529,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 521,
            "end": 529,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 523,
              "end": 529
            }
          }
        },
        {
          "type": "Identifier",
          "start": 531,
          "end": 539,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 533,
            "end": 539,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 535,
              "end": 539,
              "objectType": {
                "type": "TSTypeReference",
                "start": 535,
                "end": 536,
                "typeName": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 537,
                "end": 538,
                "typeName": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 538,
                  "decorators": [],
                  "name": "P",
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
        "start": 540,
        "end": 546,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 542,
          "end": 546
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 547,
        "end": 562,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 553,
            "end": 560,
            "expression": {
              "type": "AssignmentExpression",
              "start": 553,
              "end": 559,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 553,
                "end": 555,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 558,
                "end": 559,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 563,
      "end": 653,
      "id": {
        "type": "Identifier",
        "start": 572,
        "end": 573,
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 573,
        "end": 610,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 574,
            "end": 590,
            "name": {
              "type": "Identifier",
              "start": 574,
              "end": 575,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 584,
              "end": 590
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 592,
            "end": 609,
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 602,
              "end": 609,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 608,
                "end": 609,
                "typeName": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 609,
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
          "start": 611,
          "end": 620,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 612,
            "end": 620,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 614,
              "end": 620
            }
          }
        },
        {
          "type": "Identifier",
          "start": 622,
          "end": 630,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 624,
            "end": 630,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 626,
              "end": 630,
              "objectType": {
                "type": "TSTypeReference",
                "start": 626,
                "end": 627,
                "typeName": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 627,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 628,
                "end": 629,
                "typeName": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 629,
                  "decorators": [],
                  "name": "P",
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
        "start": 631,
        "end": 637,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 633,
          "end": 637
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 638,
        "end": 653,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 644,
            "end": 651,
            "expression": {
              "type": "AssignmentExpression",
              "start": 644,
              "end": 650,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 644,
                "end": 646,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 649,
                "end": 650,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 654,
      "end": 740,
      "id": {
        "type": "Identifier",
        "start": 663,
        "end": 664,
        "decorators": [],
        "name": "l",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 664,
        "end": 697,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 665,
            "end": 677,
            "name": {
              "type": "Identifier",
              "start": 665,
              "end": 666,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 675,
              "end": 677,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 679,
            "end": 696,
            "name": {
              "type": "Identifier",
              "start": 679,
              "end": 680,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 689,
              "end": 696,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 695,
                "end": 696,
                "typeName": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 696,
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
          "start": 698,
          "end": 707,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 699,
            "end": 707,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 701,
              "end": 707
            }
          }
        },
        {
          "type": "Identifier",
          "start": 709,
          "end": 717,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 711,
            "end": 717,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 713,
              "end": 717,
              "objectType": {
                "type": "TSTypeReference",
                "start": 713,
                "end": 714,
                "typeName": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 714,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 715,
                "end": 716,
                "typeName": {
                  "type": "Identifier",
                  "start": 715,
                  "end": 716,
                  "decorators": [],
                  "name": "P",
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
        "start": 718,
        "end": 724,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 720,
          "end": 724
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 725,
        "end": 740,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 731,
            "end": 738,
            "expression": {
              "type": "AssignmentExpression",
              "start": 731,
              "end": 737,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 731,
                "end": 733,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 736,
                "end": 737,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 741,
      "end": 838,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 751,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 751,
        "end": 795,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 752,
            "end": 775,
            "name": {
              "type": "Identifier",
              "start": 752,
              "end": 753,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 762,
              "end": 775,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 764,
                  "end": 773,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 765,
                    "end": 773,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 767,
                      "end": 773
                    }
                  },
                  "accessibility": null,
                  "static": false
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
            "start": 777,
            "end": 794,
            "name": {
              "type": "Identifier",
              "start": 777,
              "end": 778,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 787,
              "end": 794,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 793,
                "end": 794,
                "typeName": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 794,
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
          "start": 796,
          "end": 805,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 797,
            "end": 805,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 799,
              "end": 805
            }
          }
        },
        {
          "type": "Identifier",
          "start": 807,
          "end": 815,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 809,
            "end": 815,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 811,
              "end": 815,
              "objectType": {
                "type": "TSTypeReference",
                "start": 811,
                "end": 812,
                "typeName": {
                  "type": "Identifier",
                  "start": 811,
                  "end": 812,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 813,
                "end": 814,
                "typeName": {
                  "type": "Identifier",
                  "start": 813,
                  "end": 814,
                  "decorators": [],
                  "name": "P",
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
        "start": 816,
        "end": 822,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 818,
          "end": 822
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 823,
        "end": 838,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 829,
            "end": 836,
            "expression": {
              "type": "AssignmentExpression",
              "start": 829,
              "end": 835,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 829,
                "end": 831,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 834,
                "end": 835,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 839,
      "end": 946,
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 849,
        "decorators": [],
        "name": "n",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 849,
        "end": 903,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 850,
            "end": 883,
            "name": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 860,
              "end": 883,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 862,
                  "end": 881,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 863,
                      "end": 872,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 864,
                        "end": 872,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 866,
                          "end": 872
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 873,
                    "end": 881,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 875,
                      "end": 881
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
            "start": 885,
            "end": 902,
            "name": {
              "type": "Identifier",
              "start": 885,
              "end": 886,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 895,
              "end": 902,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 901,
                "end": 902,
                "typeName": {
                  "type": "Identifier",
                  "start": 901,
                  "end": 902,
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
          "start": 904,
          "end": 913,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 905,
            "end": 913,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 907,
              "end": 913
            }
          }
        },
        {
          "type": "Identifier",
          "start": 915,
          "end": 923,
          "decorators": [],
          "name": "tp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 917,
            "end": 923,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 919,
              "end": 923,
              "objectType": {
                "type": "TSTypeReference",
                "start": 919,
                "end": 920,
                "typeName": {
                  "type": "Identifier",
                  "start": 919,
                  "end": 920,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 921,
                "end": 922,
                "typeName": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 922,
                  "decorators": [],
                  "name": "P",
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
        "start": 924,
        "end": 930,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 926,
          "end": 930
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 931,
        "end": 946,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 937,
            "end": 944,
            "expression": {
              "type": "AssignmentExpression",
              "start": 937,
              "end": 943,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 937,
                "end": 939,
                "decorators": [],
                "name": "tp",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 942,
                "end": 943,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
