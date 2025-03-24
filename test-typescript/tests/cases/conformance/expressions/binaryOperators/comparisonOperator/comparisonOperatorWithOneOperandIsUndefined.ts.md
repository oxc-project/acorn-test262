__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2834,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 7,
                "end": 23,
                "exprName": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 23,
                  "name": "undefined",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 26,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 35,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 38,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 41,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 33,
        "end": 44,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 38,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 41,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "name": "foo",
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
          "start": 62,
          "end": 66,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 66,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 66,
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
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
        "start": 68,
        "end": 472,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 74,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 92,
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 84,
                  "name": "foo_r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 87,
                  "end": 92,
                  "left": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 98,
            "end": 117,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 102,
                "end": 116,
                "id": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 108,
                  "name": "foo_r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 111,
                  "end": 116,
                  "left": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 122,
            "end": 142,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 126,
                "end": 141,
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 132,
                  "name": "foo_r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 135,
                  "end": 141,
                  "left": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 147,
            "end": 167,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 151,
                "end": 166,
                "id": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 157,
                  "name": "foo_r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 160,
                  "end": 166,
                  "left": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 172,
            "end": 192,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 176,
                "end": 191,
                "id": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 182,
                  "name": "foo_r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 185,
                  "end": 191,
                  "left": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 191,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 217,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 216,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "name": "foo_r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 210,
                  "end": 216,
                  "left": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 222,
            "end": 243,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 226,
                "end": 242,
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 232,
                  "name": "foo_r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 235,
                  "end": 242,
                  "left": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 242,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 248,
            "end": 269,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 268,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 258,
                  "name": "foo_r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 261,
                  "end": 268,
                  "left": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 275,
            "end": 294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 279,
                "end": 293,
                "id": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 285,
                  "name": "foo_r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 288,
                  "end": 293,
                  "left": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 293,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 299,
            "end": 318,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 303,
                "end": 317,
                "id": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 309,
                  "name": "foo_r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 312,
                  "end": 317,
                  "left": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 313,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 317,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 323,
            "end": 343,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 327,
                "end": 342,
                "id": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 333,
                  "name": "foo_r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 336,
                  "end": 342,
                  "left": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 348,
            "end": 368,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 352,
                "end": 367,
                "id": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 358,
                  "name": "foo_r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 361,
                  "end": 367,
                  "left": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 367,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 373,
            "end": 393,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 377,
                "end": 392,
                "id": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 383,
                  "name": "foo_r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 386,
                  "end": 392,
                  "left": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 392,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 398,
            "end": 418,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 402,
                "end": 417,
                "id": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 408,
                  "name": "foo_r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 411,
                  "end": 417,
                  "left": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 412,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 423,
            "end": 444,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 427,
                "end": 443,
                "id": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 433,
                  "name": "foo_r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 436,
                  "end": 443,
                  "left": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 449,
            "end": 470,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 453,
                "end": 469,
                "id": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 459,
                  "name": "foo_r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 462,
                  "end": 469,
                  "left": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 468,
                    "end": 469,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
      "start": 474,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 488,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 488,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 479,
              "end": 488,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 481,
                "end": 488
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
      "start": 490,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 503,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 503,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 503,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 497,
                "end": 503
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
      "start": 505,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 518,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 510,
              "end": 518,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 512,
                "end": 518
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
      "start": 520,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 531,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 531,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 527,
                "end": 531
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
      "start": 533,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 541,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 541,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 540,
                "end": 541,
                "typeName": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "name": "E",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 552,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 548,
              "end": 552,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 550,
                "end": 552,
                "members": []
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
      "start": 554,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 569,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 569,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 569,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 561,
                "end": 569,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 561,
                  "end": 567
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 602,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 594,
            "name": "r1a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 597,
            "end": 602,
            "left": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 604,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 612,
            "name": "r1a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 615,
            "end": 620,
            "left": {
              "type": "Identifier",
              "start": 615,
              "end": 616,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 619,
              "end": 620,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 639,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 638,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 630,
            "name": "r1a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 633,
            "end": 638,
            "left": {
              "type": "Identifier",
              "start": 633,
              "end": 634,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 637,
              "end": 638,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 640,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 648,
            "name": "r1a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 651,
            "end": 656,
            "left": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 655,
              "end": 656,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 674,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 666,
            "name": "r1a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 669,
            "end": 674,
            "left": {
              "type": "Identifier",
              "start": 669,
              "end": 670,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 673,
              "end": 674,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 676,
      "end": 693,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 680,
          "end": 692,
          "id": {
            "type": "Identifier",
            "start": 680,
            "end": 684,
            "name": "r1a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 687,
            "end": 692,
            "left": {
              "type": "Identifier",
              "start": 687,
              "end": 688,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 691,
              "end": 692,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 694,
      "end": 711,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 710,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 702,
            "name": "r1a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 705,
            "end": 710,
            "left": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 709,
              "end": 710,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 713,
      "end": 730,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 717,
          "end": 729,
          "id": {
            "type": "Identifier",
            "start": 717,
            "end": 721,
            "name": "r1b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 724,
            "end": 729,
            "left": {
              "type": "Identifier",
              "start": 724,
              "end": 725,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 728,
              "end": 729,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 731,
      "end": 748,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 735,
          "end": 747,
          "id": {
            "type": "Identifier",
            "start": 735,
            "end": 739,
            "name": "r1b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 742,
            "end": 747,
            "left": {
              "type": "Identifier",
              "start": 742,
              "end": 743,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 746,
              "end": 747,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 749,
      "end": 766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 753,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 753,
            "end": 757,
            "name": "r1b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 760,
            "end": 765,
            "left": {
              "type": "Identifier",
              "start": 760,
              "end": 761,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 764,
              "end": 765,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 767,
      "end": 784,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 771,
          "end": 783,
          "id": {
            "type": "Identifier",
            "start": 771,
            "end": 775,
            "name": "r1b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 778,
            "end": 783,
            "left": {
              "type": "Identifier",
              "start": 778,
              "end": 779,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 782,
              "end": 783,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 785,
      "end": 802,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 789,
          "end": 801,
          "id": {
            "type": "Identifier",
            "start": 789,
            "end": 793,
            "name": "r1b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 796,
            "end": 801,
            "left": {
              "type": "Identifier",
              "start": 796,
              "end": 797,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 803,
      "end": 820,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 807,
          "end": 819,
          "id": {
            "type": "Identifier",
            "start": 807,
            "end": 811,
            "name": "r1b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 814,
            "end": 819,
            "left": {
              "type": "Identifier",
              "start": 814,
              "end": 815,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 818,
              "end": 819,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 821,
      "end": 838,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 825,
          "end": 837,
          "id": {
            "type": "Identifier",
            "start": 825,
            "end": 829,
            "name": "r1b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 832,
            "end": 837,
            "left": {
              "type": "Identifier",
              "start": 832,
              "end": 833,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 836,
              "end": 837,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 854,
      "end": 871,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 858,
          "end": 870,
          "id": {
            "type": "Identifier",
            "start": 858,
            "end": 862,
            "name": "r2a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 865,
            "end": 870,
            "left": {
              "type": "Identifier",
              "start": 865,
              "end": 866,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 869,
              "end": 870,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 872,
      "end": 889,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 876,
          "end": 888,
          "id": {
            "type": "Identifier",
            "start": 876,
            "end": 880,
            "name": "r2a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 883,
            "end": 888,
            "left": {
              "type": "Identifier",
              "start": 883,
              "end": 884,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 887,
              "end": 888,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 890,
      "end": 907,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 894,
          "end": 906,
          "id": {
            "type": "Identifier",
            "start": 894,
            "end": 898,
            "name": "r2a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 901,
            "end": 906,
            "left": {
              "type": "Identifier",
              "start": 901,
              "end": 902,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 905,
              "end": 906,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 908,
      "end": 925,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 912,
          "end": 924,
          "id": {
            "type": "Identifier",
            "start": 912,
            "end": 916,
            "name": "r2a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 919,
            "end": 924,
            "left": {
              "type": "Identifier",
              "start": 919,
              "end": 920,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 923,
              "end": 924,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 926,
      "end": 943,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 930,
          "end": 942,
          "id": {
            "type": "Identifier",
            "start": 930,
            "end": 934,
            "name": "r2a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 937,
            "end": 942,
            "left": {
              "type": "Identifier",
              "start": 937,
              "end": 938,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 941,
              "end": 942,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 944,
      "end": 961,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 948,
          "end": 960,
          "id": {
            "type": "Identifier",
            "start": 948,
            "end": 952,
            "name": "r2a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 955,
            "end": 960,
            "left": {
              "type": "Identifier",
              "start": 955,
              "end": 956,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 959,
              "end": 960,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 962,
      "end": 979,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 966,
          "end": 978,
          "id": {
            "type": "Identifier",
            "start": 966,
            "end": 970,
            "name": "r2a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 973,
            "end": 978,
            "left": {
              "type": "Identifier",
              "start": 973,
              "end": 974,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 977,
              "end": 978,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 981,
      "end": 998,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 985,
          "end": 997,
          "id": {
            "type": "Identifier",
            "start": 985,
            "end": 989,
            "name": "r2b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 992,
            "end": 997,
            "left": {
              "type": "Identifier",
              "start": 992,
              "end": 993,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 996,
              "end": 997,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 999,
      "end": 1016,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1003,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 1003,
            "end": 1007,
            "name": "r2b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1010,
            "end": 1015,
            "left": {
              "type": "Identifier",
              "start": 1010,
              "end": 1011,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1014,
              "end": 1015,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1017,
      "end": 1034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1021,
          "end": 1033,
          "id": {
            "type": "Identifier",
            "start": 1021,
            "end": 1025,
            "name": "r2b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1028,
            "end": 1033,
            "left": {
              "type": "Identifier",
              "start": 1028,
              "end": 1029,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1032,
              "end": 1033,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1035,
      "end": 1052,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1039,
          "end": 1051,
          "id": {
            "type": "Identifier",
            "start": 1039,
            "end": 1043,
            "name": "r2b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1046,
            "end": 1051,
            "left": {
              "type": "Identifier",
              "start": 1046,
              "end": 1047,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1050,
              "end": 1051,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1053,
      "end": 1070,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1057,
          "end": 1069,
          "id": {
            "type": "Identifier",
            "start": 1057,
            "end": 1061,
            "name": "r2b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1064,
            "end": 1069,
            "left": {
              "type": "Identifier",
              "start": 1064,
              "end": 1065,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1068,
              "end": 1069,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1071,
      "end": 1088,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1075,
          "end": 1087,
          "id": {
            "type": "Identifier",
            "start": 1075,
            "end": 1079,
            "name": "r2b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1082,
            "end": 1087,
            "left": {
              "type": "Identifier",
              "start": 1082,
              "end": 1083,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1086,
              "end": 1087,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1089,
      "end": 1106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1093,
          "end": 1105,
          "id": {
            "type": "Identifier",
            "start": 1093,
            "end": 1097,
            "name": "r2b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1100,
            "end": 1105,
            "left": {
              "type": "Identifier",
              "start": 1100,
              "end": 1101,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1104,
              "end": 1105,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1123,
      "end": 1141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1127,
          "end": 1140,
          "id": {
            "type": "Identifier",
            "start": 1127,
            "end": 1131,
            "name": "r3a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1134,
            "end": 1140,
            "left": {
              "type": "Identifier",
              "start": 1134,
              "end": 1135,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1139,
              "end": 1140,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1142,
      "end": 1160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1146,
          "end": 1159,
          "id": {
            "type": "Identifier",
            "start": 1146,
            "end": 1150,
            "name": "r3a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1153,
            "end": 1159,
            "left": {
              "type": "Identifier",
              "start": 1153,
              "end": 1154,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1158,
              "end": 1159,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1161,
      "end": 1179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1165,
          "end": 1178,
          "id": {
            "type": "Identifier",
            "start": 1165,
            "end": 1169,
            "name": "r3a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1172,
            "end": 1178,
            "left": {
              "type": "Identifier",
              "start": 1172,
              "end": 1173,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1177,
              "end": 1178,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1180,
      "end": 1198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1184,
          "end": 1197,
          "id": {
            "type": "Identifier",
            "start": 1184,
            "end": 1188,
            "name": "r3a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1191,
            "end": 1197,
            "left": {
              "type": "Identifier",
              "start": 1191,
              "end": 1192,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1196,
              "end": 1197,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1199,
      "end": 1217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1203,
          "end": 1216,
          "id": {
            "type": "Identifier",
            "start": 1203,
            "end": 1207,
            "name": "r3a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1210,
            "end": 1216,
            "left": {
              "type": "Identifier",
              "start": 1210,
              "end": 1211,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1215,
              "end": 1216,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1218,
      "end": 1236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1222,
          "end": 1235,
          "id": {
            "type": "Identifier",
            "start": 1222,
            "end": 1226,
            "name": "r3a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1229,
            "end": 1235,
            "left": {
              "type": "Identifier",
              "start": 1229,
              "end": 1230,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1234,
              "end": 1235,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1237,
      "end": 1255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1241,
          "end": 1254,
          "id": {
            "type": "Identifier",
            "start": 1241,
            "end": 1245,
            "name": "r3a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1248,
            "end": 1254,
            "left": {
              "type": "Identifier",
              "start": 1248,
              "end": 1249,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1253,
              "end": 1254,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1257,
      "end": 1275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1261,
          "end": 1274,
          "id": {
            "type": "Identifier",
            "start": 1261,
            "end": 1265,
            "name": "r3b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1268,
            "end": 1274,
            "left": {
              "type": "Identifier",
              "start": 1268,
              "end": 1269,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1273,
              "end": 1274,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1276,
      "end": 1294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1280,
          "end": 1293,
          "id": {
            "type": "Identifier",
            "start": 1280,
            "end": 1284,
            "name": "r3b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1287,
            "end": 1293,
            "left": {
              "type": "Identifier",
              "start": 1287,
              "end": 1288,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1292,
              "end": 1293,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1295,
      "end": 1313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1299,
          "end": 1312,
          "id": {
            "type": "Identifier",
            "start": 1299,
            "end": 1303,
            "name": "r3b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1306,
            "end": 1312,
            "left": {
              "type": "Identifier",
              "start": 1306,
              "end": 1307,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1311,
              "end": 1312,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1314,
      "end": 1332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1318,
          "end": 1331,
          "id": {
            "type": "Identifier",
            "start": 1318,
            "end": 1322,
            "name": "r3b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1325,
            "end": 1331,
            "left": {
              "type": "Identifier",
              "start": 1325,
              "end": 1326,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1330,
              "end": 1331,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1333,
      "end": 1351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1337,
          "end": 1350,
          "id": {
            "type": "Identifier",
            "start": 1337,
            "end": 1341,
            "name": "r3b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1344,
            "end": 1350,
            "left": {
              "type": "Identifier",
              "start": 1344,
              "end": 1345,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1349,
              "end": 1350,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1352,
      "end": 1370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1356,
          "end": 1369,
          "id": {
            "type": "Identifier",
            "start": 1356,
            "end": 1360,
            "name": "r3b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1363,
            "end": 1369,
            "left": {
              "type": "Identifier",
              "start": 1363,
              "end": 1364,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1368,
              "end": 1369,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1371,
      "end": 1389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1375,
          "end": 1388,
          "id": {
            "type": "Identifier",
            "start": 1375,
            "end": 1379,
            "name": "r3b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1382,
            "end": 1388,
            "left": {
              "type": "Identifier",
              "start": 1382,
              "end": 1383,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1387,
              "end": 1388,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1406,
      "end": 1424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1410,
          "end": 1423,
          "id": {
            "type": "Identifier",
            "start": 1410,
            "end": 1414,
            "name": "r4a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1417,
            "end": 1423,
            "left": {
              "type": "Identifier",
              "start": 1417,
              "end": 1418,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1422,
              "end": 1423,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1425,
      "end": 1443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1429,
          "end": 1442,
          "id": {
            "type": "Identifier",
            "start": 1429,
            "end": 1433,
            "name": "r4a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1436,
            "end": 1442,
            "left": {
              "type": "Identifier",
              "start": 1436,
              "end": 1437,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1441,
              "end": 1442,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1444,
      "end": 1462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1448,
          "end": 1461,
          "id": {
            "type": "Identifier",
            "start": 1448,
            "end": 1452,
            "name": "r4a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1455,
            "end": 1461,
            "left": {
              "type": "Identifier",
              "start": 1455,
              "end": 1456,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1460,
              "end": 1461,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1463,
      "end": 1481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1467,
          "end": 1480,
          "id": {
            "type": "Identifier",
            "start": 1467,
            "end": 1471,
            "name": "r4a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1474,
            "end": 1480,
            "left": {
              "type": "Identifier",
              "start": 1474,
              "end": 1475,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1479,
              "end": 1480,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1482,
      "end": 1500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1486,
          "end": 1499,
          "id": {
            "type": "Identifier",
            "start": 1486,
            "end": 1490,
            "name": "r4a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1493,
            "end": 1499,
            "left": {
              "type": "Identifier",
              "start": 1493,
              "end": 1494,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1498,
              "end": 1499,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1501,
      "end": 1519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1505,
          "end": 1518,
          "id": {
            "type": "Identifier",
            "start": 1505,
            "end": 1509,
            "name": "r4a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1512,
            "end": 1518,
            "left": {
              "type": "Identifier",
              "start": 1512,
              "end": 1513,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1517,
              "end": 1518,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1520,
      "end": 1538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1524,
          "end": 1537,
          "id": {
            "type": "Identifier",
            "start": 1524,
            "end": 1528,
            "name": "r4a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1531,
            "end": 1537,
            "left": {
              "type": "Identifier",
              "start": 1531,
              "end": 1532,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1536,
              "end": 1537,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1540,
      "end": 1558,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1544,
          "end": 1557,
          "id": {
            "type": "Identifier",
            "start": 1544,
            "end": 1548,
            "name": "r4b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1551,
            "end": 1557,
            "left": {
              "type": "Identifier",
              "start": 1551,
              "end": 1552,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1556,
              "end": 1557,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1559,
      "end": 1577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1563,
          "end": 1576,
          "id": {
            "type": "Identifier",
            "start": 1563,
            "end": 1567,
            "name": "r4b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1570,
            "end": 1576,
            "left": {
              "type": "Identifier",
              "start": 1570,
              "end": 1571,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1575,
              "end": 1576,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1578,
      "end": 1596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1582,
          "end": 1595,
          "id": {
            "type": "Identifier",
            "start": 1582,
            "end": 1586,
            "name": "r4b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1589,
            "end": 1595,
            "left": {
              "type": "Identifier",
              "start": 1589,
              "end": 1590,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1594,
              "end": 1595,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1597,
      "end": 1615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1601,
          "end": 1614,
          "id": {
            "type": "Identifier",
            "start": 1601,
            "end": 1605,
            "name": "r4b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1608,
            "end": 1614,
            "left": {
              "type": "Identifier",
              "start": 1608,
              "end": 1609,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1613,
              "end": 1614,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1616,
      "end": 1634,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1620,
          "end": 1633,
          "id": {
            "type": "Identifier",
            "start": 1620,
            "end": 1624,
            "name": "r4b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1627,
            "end": 1633,
            "left": {
              "type": "Identifier",
              "start": 1627,
              "end": 1628,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1632,
              "end": 1633,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1635,
      "end": 1653,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1639,
          "end": 1652,
          "id": {
            "type": "Identifier",
            "start": 1639,
            "end": 1643,
            "name": "r4b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1646,
            "end": 1652,
            "left": {
              "type": "Identifier",
              "start": 1646,
              "end": 1647,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1651,
              "end": 1652,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1654,
      "end": 1672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1658,
          "end": 1671,
          "id": {
            "type": "Identifier",
            "start": 1658,
            "end": 1662,
            "name": "r4b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1665,
            "end": 1671,
            "left": {
              "type": "Identifier",
              "start": 1665,
              "end": 1666,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1670,
              "end": 1671,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1689,
      "end": 1707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1693,
          "end": 1706,
          "id": {
            "type": "Identifier",
            "start": 1693,
            "end": 1697,
            "name": "r5a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1700,
            "end": 1706,
            "left": {
              "type": "Identifier",
              "start": 1700,
              "end": 1701,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1705,
              "end": 1706,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1708,
      "end": 1726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1712,
          "end": 1725,
          "id": {
            "type": "Identifier",
            "start": 1712,
            "end": 1716,
            "name": "r5a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1719,
            "end": 1725,
            "left": {
              "type": "Identifier",
              "start": 1719,
              "end": 1720,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1724,
              "end": 1725,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1727,
      "end": 1745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1731,
          "end": 1744,
          "id": {
            "type": "Identifier",
            "start": 1731,
            "end": 1735,
            "name": "r5a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1738,
            "end": 1744,
            "left": {
              "type": "Identifier",
              "start": 1738,
              "end": 1739,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1743,
              "end": 1744,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1746,
      "end": 1764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1750,
          "end": 1763,
          "id": {
            "type": "Identifier",
            "start": 1750,
            "end": 1754,
            "name": "r5a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1757,
            "end": 1763,
            "left": {
              "type": "Identifier",
              "start": 1757,
              "end": 1758,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1762,
              "end": 1763,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1765,
      "end": 1783,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1769,
          "end": 1782,
          "id": {
            "type": "Identifier",
            "start": 1769,
            "end": 1773,
            "name": "r5a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1776,
            "end": 1782,
            "left": {
              "type": "Identifier",
              "start": 1776,
              "end": 1777,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1781,
              "end": 1782,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1784,
      "end": 1802,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1788,
          "end": 1801,
          "id": {
            "type": "Identifier",
            "start": 1788,
            "end": 1792,
            "name": "r5a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1795,
            "end": 1801,
            "left": {
              "type": "Identifier",
              "start": 1795,
              "end": 1796,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1800,
              "end": 1801,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1803,
      "end": 1821,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1807,
          "end": 1820,
          "id": {
            "type": "Identifier",
            "start": 1807,
            "end": 1811,
            "name": "r5a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1814,
            "end": 1820,
            "left": {
              "type": "Identifier",
              "start": 1814,
              "end": 1815,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1819,
              "end": 1820,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1823,
      "end": 1841,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1827,
          "end": 1840,
          "id": {
            "type": "Identifier",
            "start": 1827,
            "end": 1831,
            "name": "r5b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1834,
            "end": 1840,
            "left": {
              "type": "Identifier",
              "start": 1834,
              "end": 1835,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1839,
              "end": 1840,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1842,
      "end": 1860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1846,
          "end": 1859,
          "id": {
            "type": "Identifier",
            "start": 1846,
            "end": 1850,
            "name": "r5b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1853,
            "end": 1859,
            "left": {
              "type": "Identifier",
              "start": 1853,
              "end": 1854,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1858,
              "end": 1859,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1861,
      "end": 1879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1865,
          "end": 1878,
          "id": {
            "type": "Identifier",
            "start": 1865,
            "end": 1869,
            "name": "r5b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1872,
            "end": 1878,
            "left": {
              "type": "Identifier",
              "start": 1872,
              "end": 1873,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1877,
              "end": 1878,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1880,
      "end": 1898,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1884,
          "end": 1897,
          "id": {
            "type": "Identifier",
            "start": 1884,
            "end": 1888,
            "name": "r5b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1891,
            "end": 1897,
            "left": {
              "type": "Identifier",
              "start": 1891,
              "end": 1892,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1896,
              "end": 1897,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1899,
      "end": 1917,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1903,
          "end": 1916,
          "id": {
            "type": "Identifier",
            "start": 1903,
            "end": 1907,
            "name": "r5b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1910,
            "end": 1916,
            "left": {
              "type": "Identifier",
              "start": 1910,
              "end": 1911,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1915,
              "end": 1916,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1918,
      "end": 1936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1922,
          "end": 1935,
          "id": {
            "type": "Identifier",
            "start": 1922,
            "end": 1926,
            "name": "r5b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1929,
            "end": 1935,
            "left": {
              "type": "Identifier",
              "start": 1929,
              "end": 1930,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1934,
              "end": 1935,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1937,
      "end": 1955,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1941,
          "end": 1954,
          "id": {
            "type": "Identifier",
            "start": 1941,
            "end": 1945,
            "name": "r5b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1948,
            "end": 1954,
            "left": {
              "type": "Identifier",
              "start": 1948,
              "end": 1949,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1953,
              "end": 1954,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1972,
      "end": 1990,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1976,
          "end": 1989,
          "id": {
            "type": "Identifier",
            "start": 1976,
            "end": 1980,
            "name": "r6a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1983,
            "end": 1989,
            "left": {
              "type": "Identifier",
              "start": 1983,
              "end": 1984,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1988,
              "end": 1989,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1991,
      "end": 2009,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1995,
          "end": 2008,
          "id": {
            "type": "Identifier",
            "start": 1995,
            "end": 1999,
            "name": "r6a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2002,
            "end": 2008,
            "left": {
              "type": "Identifier",
              "start": 2002,
              "end": 2003,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2007,
              "end": 2008,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2010,
      "end": 2028,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2014,
          "end": 2027,
          "id": {
            "type": "Identifier",
            "start": 2014,
            "end": 2018,
            "name": "r6a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2021,
            "end": 2027,
            "left": {
              "type": "Identifier",
              "start": 2021,
              "end": 2022,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2026,
              "end": 2027,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2029,
      "end": 2047,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2033,
          "end": 2046,
          "id": {
            "type": "Identifier",
            "start": 2033,
            "end": 2037,
            "name": "r6a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2040,
            "end": 2046,
            "left": {
              "type": "Identifier",
              "start": 2040,
              "end": 2041,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2045,
              "end": 2046,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2048,
      "end": 2066,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2052,
          "end": 2065,
          "id": {
            "type": "Identifier",
            "start": 2052,
            "end": 2056,
            "name": "r6a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2059,
            "end": 2065,
            "left": {
              "type": "Identifier",
              "start": 2059,
              "end": 2060,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2064,
              "end": 2065,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2067,
      "end": 2085,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2071,
          "end": 2084,
          "id": {
            "type": "Identifier",
            "start": 2071,
            "end": 2075,
            "name": "r6a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2078,
            "end": 2084,
            "left": {
              "type": "Identifier",
              "start": 2078,
              "end": 2079,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2083,
              "end": 2084,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2086,
      "end": 2104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2090,
          "end": 2103,
          "id": {
            "type": "Identifier",
            "start": 2090,
            "end": 2094,
            "name": "r6a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2097,
            "end": 2103,
            "left": {
              "type": "Identifier",
              "start": 2097,
              "end": 2098,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2102,
              "end": 2103,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2106,
      "end": 2124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2110,
          "end": 2123,
          "id": {
            "type": "Identifier",
            "start": 2110,
            "end": 2114,
            "name": "r6b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2117,
            "end": 2123,
            "left": {
              "type": "Identifier",
              "start": 2117,
              "end": 2118,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2122,
              "end": 2123,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2125,
      "end": 2143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2129,
          "end": 2142,
          "id": {
            "type": "Identifier",
            "start": 2129,
            "end": 2133,
            "name": "r6b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2136,
            "end": 2142,
            "left": {
              "type": "Identifier",
              "start": 2136,
              "end": 2137,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2141,
              "end": 2142,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2144,
      "end": 2162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2148,
          "end": 2161,
          "id": {
            "type": "Identifier",
            "start": 2148,
            "end": 2152,
            "name": "r6b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2155,
            "end": 2161,
            "left": {
              "type": "Identifier",
              "start": 2155,
              "end": 2156,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2160,
              "end": 2161,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2163,
      "end": 2181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2167,
          "end": 2180,
          "id": {
            "type": "Identifier",
            "start": 2167,
            "end": 2171,
            "name": "r6b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2174,
            "end": 2180,
            "left": {
              "type": "Identifier",
              "start": 2174,
              "end": 2175,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2179,
              "end": 2180,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2182,
      "end": 2200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2186,
          "end": 2199,
          "id": {
            "type": "Identifier",
            "start": 2186,
            "end": 2190,
            "name": "r6b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2193,
            "end": 2199,
            "left": {
              "type": "Identifier",
              "start": 2193,
              "end": 2194,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2198,
              "end": 2199,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2201,
      "end": 2219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2205,
          "end": 2218,
          "id": {
            "type": "Identifier",
            "start": 2205,
            "end": 2209,
            "name": "r6b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2212,
            "end": 2218,
            "left": {
              "type": "Identifier",
              "start": 2212,
              "end": 2213,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2217,
              "end": 2218,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2220,
      "end": 2238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2224,
          "end": 2237,
          "id": {
            "type": "Identifier",
            "start": 2224,
            "end": 2228,
            "name": "r6b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2231,
            "end": 2237,
            "left": {
              "type": "Identifier",
              "start": 2231,
              "end": 2232,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2236,
              "end": 2237,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2256,
      "end": 2275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2260,
          "end": 2274,
          "id": {
            "type": "Identifier",
            "start": 2260,
            "end": 2264,
            "name": "r7a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2267,
            "end": 2274,
            "left": {
              "type": "Identifier",
              "start": 2267,
              "end": 2268,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2273,
              "end": 2274,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2276,
      "end": 2295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2280,
          "end": 2294,
          "id": {
            "type": "Identifier",
            "start": 2280,
            "end": 2284,
            "name": "r7a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2287,
            "end": 2294,
            "left": {
              "type": "Identifier",
              "start": 2287,
              "end": 2288,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2293,
              "end": 2294,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2296,
      "end": 2315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2300,
          "end": 2314,
          "id": {
            "type": "Identifier",
            "start": 2300,
            "end": 2304,
            "name": "r7a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2307,
            "end": 2314,
            "left": {
              "type": "Identifier",
              "start": 2307,
              "end": 2308,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2313,
              "end": 2314,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2316,
      "end": 2335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2320,
          "end": 2334,
          "id": {
            "type": "Identifier",
            "start": 2320,
            "end": 2324,
            "name": "r7a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2327,
            "end": 2334,
            "left": {
              "type": "Identifier",
              "start": 2327,
              "end": 2328,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2333,
              "end": 2334,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2336,
      "end": 2355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2340,
          "end": 2354,
          "id": {
            "type": "Identifier",
            "start": 2340,
            "end": 2344,
            "name": "r7a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2347,
            "end": 2354,
            "left": {
              "type": "Identifier",
              "start": 2347,
              "end": 2348,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2353,
              "end": 2354,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2356,
      "end": 2375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2360,
          "end": 2374,
          "id": {
            "type": "Identifier",
            "start": 2360,
            "end": 2364,
            "name": "r7a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2367,
            "end": 2374,
            "left": {
              "type": "Identifier",
              "start": 2367,
              "end": 2368,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2373,
              "end": 2374,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2376,
      "end": 2395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2380,
          "end": 2394,
          "id": {
            "type": "Identifier",
            "start": 2380,
            "end": 2384,
            "name": "r7a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2387,
            "end": 2394,
            "left": {
              "type": "Identifier",
              "start": 2387,
              "end": 2388,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2393,
              "end": 2394,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2397,
      "end": 2416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2401,
          "end": 2415,
          "id": {
            "type": "Identifier",
            "start": 2401,
            "end": 2405,
            "name": "r7b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2408,
            "end": 2415,
            "left": {
              "type": "Identifier",
              "start": 2408,
              "end": 2409,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2414,
              "end": 2415,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2417,
      "end": 2436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2421,
          "end": 2435,
          "id": {
            "type": "Identifier",
            "start": 2421,
            "end": 2425,
            "name": "r7b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2428,
            "end": 2435,
            "left": {
              "type": "Identifier",
              "start": 2428,
              "end": 2429,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2434,
              "end": 2435,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2437,
      "end": 2456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2441,
          "end": 2455,
          "id": {
            "type": "Identifier",
            "start": 2441,
            "end": 2445,
            "name": "r7b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2448,
            "end": 2455,
            "left": {
              "type": "Identifier",
              "start": 2448,
              "end": 2449,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2454,
              "end": 2455,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2457,
      "end": 2476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2461,
          "end": 2475,
          "id": {
            "type": "Identifier",
            "start": 2461,
            "end": 2465,
            "name": "r7b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2468,
            "end": 2475,
            "left": {
              "type": "Identifier",
              "start": 2468,
              "end": 2469,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2474,
              "end": 2475,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2477,
      "end": 2496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2481,
          "end": 2495,
          "id": {
            "type": "Identifier",
            "start": 2481,
            "end": 2485,
            "name": "r7b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2488,
            "end": 2495,
            "left": {
              "type": "Identifier",
              "start": 2488,
              "end": 2489,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2494,
              "end": 2495,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2497,
      "end": 2516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2501,
          "end": 2515,
          "id": {
            "type": "Identifier",
            "start": 2501,
            "end": 2505,
            "name": "r7b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2508,
            "end": 2515,
            "left": {
              "type": "Identifier",
              "start": 2508,
              "end": 2509,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2514,
              "end": 2515,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2517,
      "end": 2536,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2521,
          "end": 2535,
          "id": {
            "type": "Identifier",
            "start": 2521,
            "end": 2525,
            "name": "r7b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2528,
            "end": 2535,
            "left": {
              "type": "Identifier",
              "start": 2528,
              "end": 2529,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2534,
              "end": 2535,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2554,
      "end": 2573,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2558,
          "end": 2572,
          "id": {
            "type": "Identifier",
            "start": 2558,
            "end": 2562,
            "name": "r8a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2565,
            "end": 2572,
            "left": {
              "type": "Identifier",
              "start": 2565,
              "end": 2566,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2571,
              "end": 2572,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2574,
      "end": 2593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2578,
          "end": 2592,
          "id": {
            "type": "Identifier",
            "start": 2578,
            "end": 2582,
            "name": "r8a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2585,
            "end": 2592,
            "left": {
              "type": "Identifier",
              "start": 2585,
              "end": 2586,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2591,
              "end": 2592,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2594,
      "end": 2613,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2598,
          "end": 2612,
          "id": {
            "type": "Identifier",
            "start": 2598,
            "end": 2602,
            "name": "r8a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2605,
            "end": 2612,
            "left": {
              "type": "Identifier",
              "start": 2605,
              "end": 2606,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2611,
              "end": 2612,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2614,
      "end": 2633,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2618,
          "end": 2632,
          "id": {
            "type": "Identifier",
            "start": 2618,
            "end": 2622,
            "name": "r8a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2625,
            "end": 2632,
            "left": {
              "type": "Identifier",
              "start": 2625,
              "end": 2626,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2631,
              "end": 2632,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2634,
      "end": 2653,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2638,
          "end": 2652,
          "id": {
            "type": "Identifier",
            "start": 2638,
            "end": 2642,
            "name": "r8a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2645,
            "end": 2652,
            "left": {
              "type": "Identifier",
              "start": 2645,
              "end": 2646,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2651,
              "end": 2652,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2654,
      "end": 2673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2658,
          "end": 2672,
          "id": {
            "type": "Identifier",
            "start": 2658,
            "end": 2662,
            "name": "r8a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2665,
            "end": 2672,
            "left": {
              "type": "Identifier",
              "start": 2665,
              "end": 2666,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2671,
              "end": 2672,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2674,
      "end": 2693,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2678,
          "end": 2692,
          "id": {
            "type": "Identifier",
            "start": 2678,
            "end": 2682,
            "name": "r8a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2685,
            "end": 2692,
            "left": {
              "type": "Identifier",
              "start": 2685,
              "end": 2686,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2691,
              "end": 2692,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2695,
      "end": 2714,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2699,
          "end": 2713,
          "id": {
            "type": "Identifier",
            "start": 2699,
            "end": 2703,
            "name": "r8b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2706,
            "end": 2713,
            "left": {
              "type": "Identifier",
              "start": 2706,
              "end": 2707,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2712,
              "end": 2713,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2715,
      "end": 2734,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2719,
          "end": 2733,
          "id": {
            "type": "Identifier",
            "start": 2719,
            "end": 2723,
            "name": "r8b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2726,
            "end": 2733,
            "left": {
              "type": "Identifier",
              "start": 2726,
              "end": 2727,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2732,
              "end": 2733,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2735,
      "end": 2754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2739,
          "end": 2753,
          "id": {
            "type": "Identifier",
            "start": 2739,
            "end": 2743,
            "name": "r8b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2746,
            "end": 2753,
            "left": {
              "type": "Identifier",
              "start": 2746,
              "end": 2747,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2752,
              "end": 2753,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2755,
      "end": 2774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2759,
          "end": 2773,
          "id": {
            "type": "Identifier",
            "start": 2759,
            "end": 2763,
            "name": "r8b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2766,
            "end": 2773,
            "left": {
              "type": "Identifier",
              "start": 2766,
              "end": 2767,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2772,
              "end": 2773,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2775,
      "end": 2794,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2779,
          "end": 2793,
          "id": {
            "type": "Identifier",
            "start": 2779,
            "end": 2783,
            "name": "r8b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2786,
            "end": 2793,
            "left": {
              "type": "Identifier",
              "start": 2786,
              "end": 2787,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2792,
              "end": 2793,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2795,
      "end": 2814,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2799,
          "end": 2813,
          "id": {
            "type": "Identifier",
            "start": 2799,
            "end": 2803,
            "name": "r8b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2806,
            "end": 2813,
            "left": {
              "type": "Identifier",
              "start": 2806,
              "end": 2807,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2812,
              "end": 2813,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2815,
      "end": 2834,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2819,
          "end": 2833,
          "id": {
            "type": "Identifier",
            "start": 2819,
            "end": 2823,
            "name": "r8b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2826,
            "end": 2833,
            "left": {
              "type": "Identifier",
              "start": 2826,
              "end": 2827,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2832,
              "end": 2833,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
