__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1537,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 9,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 9,
                "members": []
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
      "start": 11,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 18,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 24,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 1537,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
            "start": 43,
            "end": 44,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 61,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "V",
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
          "start": 77,
          "end": 81,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 81,
            "typeAnnotation": {
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
          }
        },
        {
          "type": "Identifier",
          "start": 83,
          "end": 87,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 87,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 87,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 89,
          "end": 93,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 93,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 92,
              "end": 93,
              "typeName": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 95,
        "end": 1537,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 115,
            "end": 131,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 119,
                "end": 130,
                "id": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 122,
                  "decorators": [],
                  "name": "ra1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 125,
                  "end": 130,
                  "left": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 136,
            "end": 152,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 140,
                "end": 151,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 143,
                  "decorators": [],
                  "name": "ra2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 146,
                  "end": 151,
                  "left": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 157,
            "end": 174,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 161,
                "end": 173,
                "id": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "decorators": [],
                  "name": "ra3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 167,
                  "end": 173,
                  "left": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 179,
            "end": 196,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 183,
                "end": 195,
                "id": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 186,
                  "decorators": [],
                  "name": "ra4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 189,
                  "end": 195,
                  "left": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 201,
            "end": 218,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 205,
                "end": 217,
                "id": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 208,
                  "decorators": [],
                  "name": "ra5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 211,
                  "end": 217,
                  "left": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 212,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 223,
            "end": 240,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 227,
                "end": 239,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 230,
                  "decorators": [],
                  "name": "ra6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 233,
                  "end": 239,
                  "left": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 263,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 262,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 252,
                  "decorators": [],
                  "name": "ra7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 255,
                  "end": 262,
                  "left": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 256,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 268,
            "end": 286,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 272,
                "end": 285,
                "id": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 275,
                  "decorators": [],
                  "name": "ra8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 278,
                  "end": 285,
                  "left": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 279,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 292,
            "end": 308,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 296,
                "end": 307,
                "id": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 299,
                  "decorators": [],
                  "name": "rb1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 302,
                  "end": 307,
                  "left": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 307,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 313,
            "end": 329,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 317,
                "end": 328,
                "id": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 320,
                  "decorators": [],
                  "name": "rb2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 323,
                  "end": 328,
                  "left": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 324,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 328,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 334,
            "end": 351,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 338,
                "end": 350,
                "id": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 341,
                  "decorators": [],
                  "name": "rb3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 344,
                  "end": 350,
                  "left": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 356,
            "end": 373,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 360,
                "end": 372,
                "id": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 363,
                  "decorators": [],
                  "name": "rb4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 366,
                  "end": 372,
                  "left": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 367,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 371,
                    "end": 372,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 378,
            "end": 395,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 382,
                "end": 394,
                "id": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 385,
                  "decorators": [],
                  "name": "rb5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 388,
                  "end": 394,
                  "left": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 400,
            "end": 417,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 416,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 407,
                  "decorators": [],
                  "name": "rb6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 410,
                  "end": 416,
                  "left": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 422,
            "end": 440,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 426,
                "end": 439,
                "id": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 429,
                  "decorators": [],
                  "name": "rb7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 432,
                  "end": 439,
                  "left": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 445,
            "end": 463,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 449,
                "end": 462,
                "id": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 452,
                  "decorators": [],
                  "name": "rb8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 455,
                  "end": 462,
                  "left": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 469,
            "end": 485,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 473,
                "end": 484,
                "id": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 476,
                  "decorators": [],
                  "name": "rc1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 479,
                  "end": 484,
                  "left": {
                    "type": "Identifier",
                    "start": 479,
                    "end": 480,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 490,
            "end": 506,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 494,
                "end": 505,
                "id": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 497,
                  "decorators": [],
                  "name": "rc2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 500,
                  "end": 505,
                  "left": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 501,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 505,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 511,
            "end": 528,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 515,
                "end": 527,
                "id": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 518,
                  "decorators": [],
                  "name": "rc3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 521,
                  "end": 527,
                  "left": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 522,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 533,
            "end": 550,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 537,
                "end": 549,
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 540,
                  "decorators": [],
                  "name": "rc4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 543,
                  "end": 549,
                  "left": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 544,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 549,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 555,
            "end": 572,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 559,
                "end": 571,
                "id": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 562,
                  "decorators": [],
                  "name": "rc5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 565,
                  "end": 571,
                  "left": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 571,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 577,
            "end": 594,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 581,
                "end": 593,
                "id": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 584,
                  "decorators": [],
                  "name": "rc6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 587,
                  "end": 593,
                  "left": {
                    "type": "Identifier",
                    "start": 587,
                    "end": 588,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 593,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 599,
            "end": 617,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 603,
                "end": 616,
                "id": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 606,
                  "decorators": [],
                  "name": "rc7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 609,
                  "end": 616,
                  "left": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 610,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 622,
            "end": 640,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 626,
                "end": 639,
                "id": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 629,
                  "decorators": [],
                  "name": "rc8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 632,
                  "end": 639,
                  "left": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 639,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 646,
            "end": 662,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 650,
                "end": 661,
                "id": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 653,
                  "decorators": [],
                  "name": "rd1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 656,
                  "end": 661,
                  "left": {
                    "type": "Identifier",
                    "start": 656,
                    "end": 657,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 661,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 667,
            "end": 683,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 671,
                "end": 682,
                "id": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 674,
                  "decorators": [],
                  "name": "rd2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 677,
                  "end": 682,
                  "left": {
                    "type": "Identifier",
                    "start": 677,
                    "end": 678,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 682,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 688,
            "end": 705,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 692,
                "end": 704,
                "id": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 695,
                  "decorators": [],
                  "name": "rd3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 698,
                  "end": 704,
                  "left": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 699,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 703,
                    "end": 704,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 710,
            "end": 727,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 714,
                "end": 726,
                "id": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 717,
                  "decorators": [],
                  "name": "rd4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 720,
                  "end": 726,
                  "left": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 721,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 726,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 732,
            "end": 749,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 736,
                "end": 748,
                "id": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
                  "decorators": [],
                  "name": "rd5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 742,
                  "end": 748,
                  "left": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 743,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 747,
                    "end": 748,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 754,
            "end": 771,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 758,
                "end": 770,
                "id": {
                  "type": "Identifier",
                  "start": 758,
                  "end": 761,
                  "decorators": [],
                  "name": "rd6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 764,
                  "end": 770,
                  "left": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 770,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 776,
            "end": 794,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 780,
                "end": 793,
                "id": {
                  "type": "Identifier",
                  "start": 780,
                  "end": 783,
                  "decorators": [],
                  "name": "rd7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 786,
                  "end": 793,
                  "left": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 787,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 792,
                    "end": 793,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 799,
            "end": 817,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 803,
                "end": 816,
                "id": {
                  "type": "Identifier",
                  "start": 803,
                  "end": 806,
                  "decorators": [],
                  "name": "rd8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 809,
                  "end": 816,
                  "left": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 815,
                    "end": 816,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 833,
            "end": 849,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 837,
                "end": 848,
                "id": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 840,
                  "decorators": [],
                  "name": "re1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 843,
                  "end": 848,
                  "left": {
                    "type": "Identifier",
                    "start": 843,
                    "end": 844,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 847,
                    "end": 848,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 854,
            "end": 870,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 858,
                "end": 869,
                "id": {
                  "type": "Identifier",
                  "start": 858,
                  "end": 861,
                  "decorators": [],
                  "name": "re2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 864,
                  "end": 869,
                  "left": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 865,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 868,
                    "end": 869,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 875,
            "end": 892,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 879,
                "end": 891,
                "id": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 882,
                  "decorators": [],
                  "name": "re3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 885,
                  "end": 891,
                  "left": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 886,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 890,
                    "end": 891,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 897,
            "end": 914,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 901,
                "end": 913,
                "id": {
                  "type": "Identifier",
                  "start": 901,
                  "end": 904,
                  "decorators": [],
                  "name": "re4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 907,
                  "end": 913,
                  "left": {
                    "type": "Identifier",
                    "start": 907,
                    "end": 908,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 913,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 919,
            "end": 936,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 923,
                "end": 935,
                "id": {
                  "type": "Identifier",
                  "start": 923,
                  "end": 926,
                  "decorators": [],
                  "name": "re5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 929,
                  "end": 935,
                  "left": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 930,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 934,
                    "end": 935,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 941,
            "end": 958,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 945,
                "end": 957,
                "id": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 948,
                  "decorators": [],
                  "name": "re6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 951,
                  "end": 957,
                  "left": {
                    "type": "Identifier",
                    "start": 951,
                    "end": 952,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 956,
                    "end": 957,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 963,
            "end": 981,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 967,
                "end": 980,
                "id": {
                  "type": "Identifier",
                  "start": 967,
                  "end": 970,
                  "decorators": [],
                  "name": "re7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 973,
                  "end": 980,
                  "left": {
                    "type": "Identifier",
                    "start": 973,
                    "end": 974,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 980,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 986,
            "end": 1004,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 990,
                "end": 1003,
                "id": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 993,
                  "decorators": [],
                  "name": "re8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 996,
                  "end": 1003,
                  "left": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 997,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1002,
                    "end": 1003,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1010,
            "end": 1026,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1014,
                "end": 1025,
                "id": {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1017,
                  "decorators": [],
                  "name": "rf1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1020,
                  "end": 1025,
                  "left": {
                    "type": "Identifier",
                    "start": 1020,
                    "end": 1021,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 1024,
                    "end": 1025,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1031,
            "end": 1047,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1035,
                "end": 1046,
                "id": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1038,
                  "decorators": [],
                  "name": "rf2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1041,
                  "end": 1046,
                  "left": {
                    "type": "Identifier",
                    "start": 1041,
                    "end": 1042,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 1045,
                    "end": 1046,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1052,
            "end": 1069,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1056,
                "end": 1068,
                "id": {
                  "type": "Identifier",
                  "start": 1056,
                  "end": 1059,
                  "decorators": [],
                  "name": "rf3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1062,
                  "end": 1068,
                  "left": {
                    "type": "Identifier",
                    "start": 1062,
                    "end": 1063,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 1067,
                    "end": 1068,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1074,
            "end": 1091,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1078,
                "end": 1090,
                "id": {
                  "type": "Identifier",
                  "start": 1078,
                  "end": 1081,
                  "decorators": [],
                  "name": "rf4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1084,
                  "end": 1090,
                  "left": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1085,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 1089,
                    "end": 1090,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1096,
            "end": 1113,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1100,
                "end": 1112,
                "id": {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1103,
                  "decorators": [],
                  "name": "rf5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1106,
                  "end": 1112,
                  "left": {
                    "type": "Identifier",
                    "start": 1106,
                    "end": 1107,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 1111,
                    "end": 1112,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1118,
            "end": 1135,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1122,
                "end": 1134,
                "id": {
                  "type": "Identifier",
                  "start": 1122,
                  "end": 1125,
                  "decorators": [],
                  "name": "rf6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1128,
                  "end": 1134,
                  "left": {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1129,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 1133,
                    "end": 1134,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1140,
            "end": 1158,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1144,
                "end": 1157,
                "id": {
                  "type": "Identifier",
                  "start": 1144,
                  "end": 1147,
                  "decorators": [],
                  "name": "rf7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1150,
                  "end": 1157,
                  "left": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1151,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 1156,
                    "end": 1157,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1163,
            "end": 1181,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1167,
                "end": 1180,
                "id": {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1170,
                  "decorators": [],
                  "name": "rf8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1173,
                  "end": 1180,
                  "left": {
                    "type": "Identifier",
                    "start": 1173,
                    "end": 1174,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1179,
                    "end": 1180,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1187,
            "end": 1203,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1191,
                "end": 1202,
                "id": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1194,
                  "decorators": [],
                  "name": "rg1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1197,
                  "end": 1202,
                  "left": {
                    "type": "Identifier",
                    "start": 1197,
                    "end": 1198,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 1201,
                    "end": 1202,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1208,
            "end": 1224,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1212,
                "end": 1223,
                "id": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1215,
                  "decorators": [],
                  "name": "rg2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1218,
                  "end": 1223,
                  "left": {
                    "type": "Identifier",
                    "start": 1218,
                    "end": 1219,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 1222,
                    "end": 1223,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1229,
            "end": 1246,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1233,
                "end": 1245,
                "id": {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1236,
                  "decorators": [],
                  "name": "rg3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1239,
                  "end": 1245,
                  "left": {
                    "type": "Identifier",
                    "start": 1239,
                    "end": 1240,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1245,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1251,
            "end": 1268,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1255,
                "end": 1267,
                "id": {
                  "type": "Identifier",
                  "start": 1255,
                  "end": 1258,
                  "decorators": [],
                  "name": "rg4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1261,
                  "end": 1267,
                  "left": {
                    "type": "Identifier",
                    "start": 1261,
                    "end": 1262,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 1266,
                    "end": 1267,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1273,
            "end": 1290,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1277,
                "end": 1289,
                "id": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1280,
                  "decorators": [],
                  "name": "rg5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1283,
                  "end": 1289,
                  "left": {
                    "type": "Identifier",
                    "start": 1283,
                    "end": 1284,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 1288,
                    "end": 1289,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1295,
            "end": 1312,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1299,
                "end": 1311,
                "id": {
                  "type": "Identifier",
                  "start": 1299,
                  "end": 1302,
                  "decorators": [],
                  "name": "rg6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1305,
                  "end": 1311,
                  "left": {
                    "type": "Identifier",
                    "start": 1305,
                    "end": 1306,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 1310,
                    "end": 1311,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1317,
            "end": 1335,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1321,
                "end": 1334,
                "id": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1324,
                  "decorators": [],
                  "name": "rg7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1327,
                  "end": 1334,
                  "left": {
                    "type": "Identifier",
                    "start": 1327,
                    "end": 1328,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 1333,
                    "end": 1334,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1340,
            "end": 1358,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1344,
                "end": 1357,
                "id": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1347,
                  "decorators": [],
                  "name": "rg8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1350,
                  "end": 1357,
                  "left": {
                    "type": "Identifier",
                    "start": 1350,
                    "end": 1351,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1356,
                    "end": 1357,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1364,
            "end": 1380,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1368,
                "end": 1379,
                "id": {
                  "type": "Identifier",
                  "start": 1368,
                  "end": 1371,
                  "decorators": [],
                  "name": "rh1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1374,
                  "end": 1379,
                  "left": {
                    "type": "Identifier",
                    "start": 1374,
                    "end": 1375,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 1378,
                    "end": 1379,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1385,
            "end": 1401,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1389,
                "end": 1400,
                "id": {
                  "type": "Identifier",
                  "start": 1389,
                  "end": 1392,
                  "decorators": [],
                  "name": "rh2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1395,
                  "end": 1400,
                  "left": {
                    "type": "Identifier",
                    "start": 1395,
                    "end": 1396,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 1399,
                    "end": 1400,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1406,
            "end": 1423,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1410,
                "end": 1422,
                "id": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1413,
                  "decorators": [],
                  "name": "rh3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1416,
                  "end": 1422,
                  "left": {
                    "type": "Identifier",
                    "start": 1416,
                    "end": 1417,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 1421,
                    "end": 1422,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1428,
            "end": 1445,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1432,
                "end": 1444,
                "id": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1435,
                  "decorators": [],
                  "name": "rh4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1438,
                  "end": 1444,
                  "left": {
                    "type": "Identifier",
                    "start": 1438,
                    "end": 1439,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 1443,
                    "end": 1444,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1450,
            "end": 1467,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1454,
                "end": 1466,
                "id": {
                  "type": "Identifier",
                  "start": 1454,
                  "end": 1457,
                  "decorators": [],
                  "name": "rh5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1460,
                  "end": 1466,
                  "left": {
                    "type": "Identifier",
                    "start": 1460,
                    "end": 1461,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 1465,
                    "end": 1466,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1472,
            "end": 1489,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1476,
                "end": 1488,
                "id": {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1479,
                  "decorators": [],
                  "name": "rh6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1482,
                  "end": 1488,
                  "left": {
                    "type": "Identifier",
                    "start": 1482,
                    "end": 1483,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 1487,
                    "end": 1488,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1494,
            "end": 1512,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1498,
                "end": 1511,
                "id": {
                  "type": "Identifier",
                  "start": 1498,
                  "end": 1501,
                  "decorators": [],
                  "name": "rh7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1504,
                  "end": 1511,
                  "left": {
                    "type": "Identifier",
                    "start": 1504,
                    "end": 1505,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 1510,
                    "end": 1511,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1517,
            "end": 1535,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1521,
                "end": 1534,
                "id": {
                  "type": "Identifier",
                  "start": 1521,
                  "end": 1524,
                  "decorators": [],
                  "name": "rh8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1527,
                  "end": 1534,
                  "left": {
                    "type": "Identifier",
                    "start": 1527,
                    "end": 1528,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1533,
                    "end": 1534,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
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
