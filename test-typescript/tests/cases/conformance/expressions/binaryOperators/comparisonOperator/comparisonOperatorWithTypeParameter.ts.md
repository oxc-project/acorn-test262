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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "a",
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
      "start": 11,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "name": "b",
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
                  "name": "Object",
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
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 1537,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
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
          "start": 77,
          "end": 81,
          "name": "t",
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
          "start": 83,
          "end": 87,
          "name": "u",
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
                "name": "U",
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
          "start": 89,
          "end": 93,
          "name": "v",
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
                "name": "V",
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
        "start": 95,
        "end": 1537,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 115,
            "end": 131,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 119,
                "end": 130,
                "id": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 122,
                  "name": "ra1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 125,
                  "end": 130,
                  "left": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "u",
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
            "start": 136,
            "end": 152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 140,
                "end": 151,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 143,
                  "name": "ra2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 146,
                  "end": 151,
                  "left": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "name": "u",
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
            "start": 157,
            "end": 174,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 161,
                "end": 173,
                "id": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "name": "ra3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 167,
                  "end": 173,
                  "left": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "name": "u",
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
            "start": 179,
            "end": 196,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 183,
                "end": 195,
                "id": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 186,
                  "name": "ra4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 189,
                  "end": 195,
                  "left": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "name": "u",
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
            "start": 201,
            "end": 218,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 205,
                "end": 217,
                "id": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 208,
                  "name": "ra5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 211,
                  "end": 217,
                  "left": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 212,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "name": "u",
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
            "start": 223,
            "end": 240,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 227,
                "end": 239,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 230,
                  "name": "ra6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 233,
                  "end": 239,
                  "left": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "name": "u",
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
            "start": 245,
            "end": 263,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 262,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 252,
                  "name": "ra7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 255,
                  "end": 262,
                  "left": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 256,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "name": "u",
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
            "start": 268,
            "end": 286,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 272,
                "end": 285,
                "id": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 275,
                  "name": "ra8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 278,
                  "end": 285,
                  "left": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 279,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
                    "name": "u",
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
            "start": 292,
            "end": 308,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 296,
                "end": 307,
                "id": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 299,
                  "name": "rb1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 302,
                  "end": 307,
                  "left": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 307,
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
            "start": 313,
            "end": 329,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 317,
                "end": 328,
                "id": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 320,
                  "name": "rb2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 323,
                  "end": 328,
                  "left": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 324,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 328,
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
            "start": 334,
            "end": 351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 338,
                "end": 350,
                "id": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 341,
                  "name": "rb3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 344,
                  "end": 350,
                  "left": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
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
            "start": 356,
            "end": 373,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 360,
                "end": 372,
                "id": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 363,
                  "name": "rb4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 366,
                  "end": 372,
                  "left": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 367,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 371,
                    "end": 372,
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
            "start": 378,
            "end": 395,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 382,
                "end": 394,
                "id": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 385,
                  "name": "rb5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 388,
                  "end": 394,
                  "left": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
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
            "start": 400,
            "end": 417,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 416,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 407,
                  "name": "rb6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 410,
                  "end": 416,
                  "left": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
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
            "start": 422,
            "end": 440,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 426,
                "end": 439,
                "id": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 429,
                  "name": "rb7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 432,
                  "end": 439,
                  "left": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
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
            "start": 445,
            "end": 463,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 449,
                "end": 462,
                "id": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 452,
                  "name": "rb8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 455,
                  "end": 462,
                  "left": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
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
            "start": 469,
            "end": 485,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 473,
                "end": 484,
                "id": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 476,
                  "name": "rc1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 479,
                  "end": 484,
                  "left": {
                    "type": "Identifier",
                    "start": 479,
                    "end": 480,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "name": "v",
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
            "start": 490,
            "end": 506,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 494,
                "end": 505,
                "id": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 497,
                  "name": "rc2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 500,
                  "end": 505,
                  "left": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 501,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 505,
                    "name": "v",
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
            "start": 511,
            "end": 528,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 515,
                "end": 527,
                "id": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 518,
                  "name": "rc3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 521,
                  "end": 527,
                  "left": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 522,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
                    "name": "v",
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
            "start": 533,
            "end": 550,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 537,
                "end": 549,
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 540,
                  "name": "rc4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 543,
                  "end": 549,
                  "left": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 544,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 549,
                    "name": "v",
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
            "start": 555,
            "end": 572,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 559,
                "end": 571,
                "id": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 562,
                  "name": "rc5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 565,
                  "end": 571,
                  "left": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 571,
                    "name": "v",
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
            "start": 577,
            "end": 594,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 581,
                "end": 593,
                "id": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 584,
                  "name": "rc6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 587,
                  "end": 593,
                  "left": {
                    "type": "Identifier",
                    "start": 587,
                    "end": 588,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 593,
                    "name": "v",
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
            "start": 599,
            "end": 617,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 603,
                "end": 616,
                "id": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 606,
                  "name": "rc7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 609,
                  "end": 616,
                  "left": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 610,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
                    "name": "v",
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
            "end": 640,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 626,
                "end": 639,
                "id": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 629,
                  "name": "rc8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 632,
                  "end": 639,
                  "left": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 639,
                    "name": "v",
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
            "start": 646,
            "end": 662,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 650,
                "end": 661,
                "id": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 653,
                  "name": "rd1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 656,
                  "end": 661,
                  "left": {
                    "type": "Identifier",
                    "start": 656,
                    "end": 657,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 660,
                    "end": 661,
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
            "start": 667,
            "end": 683,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 671,
                "end": 682,
                "id": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 674,
                  "name": "rd2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 677,
                  "end": 682,
                  "left": {
                    "type": "Identifier",
                    "start": 677,
                    "end": 678,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 682,
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
            "start": 688,
            "end": 705,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 692,
                "end": 704,
                "id": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 695,
                  "name": "rd3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 698,
                  "end": 704,
                  "left": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 699,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 703,
                    "end": 704,
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
            "start": 710,
            "end": 727,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 714,
                "end": 726,
                "id": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 717,
                  "name": "rd4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 720,
                  "end": 726,
                  "left": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 721,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 726,
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
            "start": 732,
            "end": 749,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 736,
                "end": 748,
                "id": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
                  "name": "rd5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 742,
                  "end": 748,
                  "left": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 743,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 747,
                    "end": 748,
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
            "start": 754,
            "end": 771,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 758,
                "end": 770,
                "id": {
                  "type": "Identifier",
                  "start": 758,
                  "end": 761,
                  "name": "rd6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 764,
                  "end": 770,
                  "left": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 770,
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
            "start": 776,
            "end": 794,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 780,
                "end": 793,
                "id": {
                  "type": "Identifier",
                  "start": 780,
                  "end": 783,
                  "name": "rd7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 786,
                  "end": 793,
                  "left": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 787,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 792,
                    "end": 793,
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
            "start": 799,
            "end": 817,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 803,
                "end": 816,
                "id": {
                  "type": "Identifier",
                  "start": 803,
                  "end": 806,
                  "name": "rd8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 809,
                  "end": 816,
                  "left": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 815,
                    "end": 816,
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
            "start": 833,
            "end": 849,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 837,
                "end": 848,
                "id": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 840,
                  "name": "re1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 843,
                  "end": 848,
                  "left": {
                    "type": "Identifier",
                    "start": 843,
                    "end": 844,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 847,
                    "end": 848,
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
            "start": 854,
            "end": 870,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 858,
                "end": 869,
                "id": {
                  "type": "Identifier",
                  "start": 858,
                  "end": 861,
                  "name": "re2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 864,
                  "end": 869,
                  "left": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 865,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 868,
                    "end": 869,
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
            "start": 875,
            "end": 892,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 879,
                "end": 891,
                "id": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 882,
                  "name": "re3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 885,
                  "end": 891,
                  "left": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 886,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 890,
                    "end": 891,
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
            "start": 897,
            "end": 914,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 901,
                "end": 913,
                "id": {
                  "type": "Identifier",
                  "start": 901,
                  "end": 904,
                  "name": "re4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 907,
                  "end": 913,
                  "left": {
                    "type": "Identifier",
                    "start": 907,
                    "end": 908,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 913,
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
            "start": 919,
            "end": 936,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 923,
                "end": 935,
                "id": {
                  "type": "Identifier",
                  "start": 923,
                  "end": 926,
                  "name": "re5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 929,
                  "end": 935,
                  "left": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 930,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 934,
                    "end": 935,
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
            "start": 941,
            "end": 958,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 945,
                "end": 957,
                "id": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 948,
                  "name": "re6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 951,
                  "end": 957,
                  "left": {
                    "type": "Identifier",
                    "start": 951,
                    "end": 952,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 956,
                    "end": 957,
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
            "start": 963,
            "end": 981,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 967,
                "end": 980,
                "id": {
                  "type": "Identifier",
                  "start": 967,
                  "end": 970,
                  "name": "re7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 973,
                  "end": 980,
                  "left": {
                    "type": "Identifier",
                    "start": 973,
                    "end": 974,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 980,
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
            "start": 986,
            "end": 1004,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 990,
                "end": 1003,
                "id": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 993,
                  "name": "re8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 996,
                  "end": 1003,
                  "left": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 997,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1002,
                    "end": 1003,
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
            "start": 1010,
            "end": 1026,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1014,
                "end": 1025,
                "id": {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1017,
                  "name": "rf1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1020,
                  "end": 1025,
                  "left": {
                    "type": "Identifier",
                    "start": 1020,
                    "end": 1021,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 1024,
                    "end": 1025,
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
            "start": 1031,
            "end": 1047,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1035,
                "end": 1046,
                "id": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1038,
                  "name": "rf2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1041,
                  "end": 1046,
                  "left": {
                    "type": "Identifier",
                    "start": 1041,
                    "end": 1042,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 1045,
                    "end": 1046,
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
            "start": 1052,
            "end": 1069,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1056,
                "end": 1068,
                "id": {
                  "type": "Identifier",
                  "start": 1056,
                  "end": 1059,
                  "name": "rf3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1062,
                  "end": 1068,
                  "left": {
                    "type": "Identifier",
                    "start": 1062,
                    "end": 1063,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 1067,
                    "end": 1068,
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
            "start": 1074,
            "end": 1091,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1078,
                "end": 1090,
                "id": {
                  "type": "Identifier",
                  "start": 1078,
                  "end": 1081,
                  "name": "rf4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1084,
                  "end": 1090,
                  "left": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1085,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 1089,
                    "end": 1090,
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
            "start": 1096,
            "end": 1113,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1100,
                "end": 1112,
                "id": {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1103,
                  "name": "rf5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1106,
                  "end": 1112,
                  "left": {
                    "type": "Identifier",
                    "start": 1106,
                    "end": 1107,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 1111,
                    "end": 1112,
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
            "start": 1118,
            "end": 1135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1122,
                "end": 1134,
                "id": {
                  "type": "Identifier",
                  "start": 1122,
                  "end": 1125,
                  "name": "rf6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1128,
                  "end": 1134,
                  "left": {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1129,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 1133,
                    "end": 1134,
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
            "start": 1140,
            "end": 1158,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1144,
                "end": 1157,
                "id": {
                  "type": "Identifier",
                  "start": 1144,
                  "end": 1147,
                  "name": "rf7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1150,
                  "end": 1157,
                  "left": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1151,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 1156,
                    "end": 1157,
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
            "start": 1163,
            "end": 1181,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1167,
                "end": 1180,
                "id": {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1170,
                  "name": "rf8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1173,
                  "end": 1180,
                  "left": {
                    "type": "Identifier",
                    "start": 1173,
                    "end": 1174,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1179,
                    "end": 1180,
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
            "start": 1187,
            "end": 1203,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1191,
                "end": 1202,
                "id": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1194,
                  "name": "rg1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1197,
                  "end": 1202,
                  "left": {
                    "type": "Identifier",
                    "start": 1197,
                    "end": 1198,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 1201,
                    "end": 1202,
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
            "start": 1208,
            "end": 1224,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1212,
                "end": 1223,
                "id": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1215,
                  "name": "rg2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1218,
                  "end": 1223,
                  "left": {
                    "type": "Identifier",
                    "start": 1218,
                    "end": 1219,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 1222,
                    "end": 1223,
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
            "start": 1229,
            "end": 1246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1233,
                "end": 1245,
                "id": {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1236,
                  "name": "rg3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1239,
                  "end": 1245,
                  "left": {
                    "type": "Identifier",
                    "start": 1239,
                    "end": 1240,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1245,
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
            "start": 1251,
            "end": 1268,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1255,
                "end": 1267,
                "id": {
                  "type": "Identifier",
                  "start": 1255,
                  "end": 1258,
                  "name": "rg4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1261,
                  "end": 1267,
                  "left": {
                    "type": "Identifier",
                    "start": 1261,
                    "end": 1262,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 1266,
                    "end": 1267,
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
            "start": 1273,
            "end": 1290,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1277,
                "end": 1289,
                "id": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1280,
                  "name": "rg5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1283,
                  "end": 1289,
                  "left": {
                    "type": "Identifier",
                    "start": 1283,
                    "end": 1284,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 1288,
                    "end": 1289,
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
            "start": 1295,
            "end": 1312,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1299,
                "end": 1311,
                "id": {
                  "type": "Identifier",
                  "start": 1299,
                  "end": 1302,
                  "name": "rg6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1305,
                  "end": 1311,
                  "left": {
                    "type": "Identifier",
                    "start": 1305,
                    "end": 1306,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 1310,
                    "end": 1311,
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
            "start": 1317,
            "end": 1335,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1321,
                "end": 1334,
                "id": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1324,
                  "name": "rg7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1327,
                  "end": 1334,
                  "left": {
                    "type": "Identifier",
                    "start": 1327,
                    "end": 1328,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 1333,
                    "end": 1334,
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
            "start": 1340,
            "end": 1358,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1344,
                "end": 1357,
                "id": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1347,
                  "name": "rg8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1350,
                  "end": 1357,
                  "left": {
                    "type": "Identifier",
                    "start": 1350,
                    "end": 1351,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1356,
                    "end": 1357,
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
            "start": 1364,
            "end": 1380,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1368,
                "end": 1379,
                "id": {
                  "type": "Identifier",
                  "start": 1368,
                  "end": 1371,
                  "name": "rh1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1374,
                  "end": 1379,
                  "left": {
                    "type": "Identifier",
                    "start": 1374,
                    "end": 1375,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 1378,
                    "end": 1379,
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
            "start": 1385,
            "end": 1401,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1389,
                "end": 1400,
                "id": {
                  "type": "Identifier",
                  "start": 1389,
                  "end": 1392,
                  "name": "rh2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1395,
                  "end": 1400,
                  "left": {
                    "type": "Identifier",
                    "start": 1395,
                    "end": 1396,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 1399,
                    "end": 1400,
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
            "start": 1406,
            "end": 1423,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1410,
                "end": 1422,
                "id": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1413,
                  "name": "rh3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1416,
                  "end": 1422,
                  "left": {
                    "type": "Identifier",
                    "start": 1416,
                    "end": 1417,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 1421,
                    "end": 1422,
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
            "start": 1428,
            "end": 1445,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1432,
                "end": 1444,
                "id": {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1435,
                  "name": "rh4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1438,
                  "end": 1444,
                  "left": {
                    "type": "Identifier",
                    "start": 1438,
                    "end": 1439,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 1443,
                    "end": 1444,
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
            "start": 1450,
            "end": 1467,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1454,
                "end": 1466,
                "id": {
                  "type": "Identifier",
                  "start": 1454,
                  "end": 1457,
                  "name": "rh5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1460,
                  "end": 1466,
                  "left": {
                    "type": "Identifier",
                    "start": 1460,
                    "end": 1461,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 1465,
                    "end": 1466,
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
            "start": 1472,
            "end": 1489,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1476,
                "end": 1488,
                "id": {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1479,
                  "name": "rh6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1482,
                  "end": 1488,
                  "left": {
                    "type": "Identifier",
                    "start": 1482,
                    "end": 1483,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 1487,
                    "end": 1488,
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
            "start": 1494,
            "end": 1512,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1498,
                "end": 1511,
                "id": {
                  "type": "Identifier",
                  "start": 1498,
                  "end": 1501,
                  "name": "rh7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1504,
                  "end": 1511,
                  "left": {
                    "type": "Identifier",
                    "start": 1504,
                    "end": 1505,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 1510,
                    "end": 1511,
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
            "start": 1517,
            "end": 1535,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1521,
                "end": 1534,
                "id": {
                  "type": "Identifier",
                  "start": 1521,
                  "end": 1524,
                  "name": "rh8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1527,
                  "end": 1534,
                  "left": {
                    "type": "Identifier",
                    "start": 1527,
                    "end": 1528,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1533,
                    "end": 1534,
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
            "start": 43,
            "end": 44,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 61,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "V",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
