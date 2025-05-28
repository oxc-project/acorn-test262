__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1100,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 18,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 28,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "E",
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 44,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 43,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
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
      "start": 60,
      "end": 76,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 67,
            "decorators": [],
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 70,
            "end": 75,
            "left": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
      "start": 77,
      "end": 93,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 84,
            "decorators": [],
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 87,
            "end": 92,
            "left": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
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
      "start": 94,
      "end": 112,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 101,
            "decorators": [],
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 104,
            "end": 111,
            "left": {
              "type": "MemberExpression",
              "start": 104,
              "end": 107,
              "object": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
      "start": 113,
      "end": 131,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "decorators": [],
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 123,
            "end": 130,
            "left": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "MemberExpression",
              "start": 127,
              "end": 130,
              "object": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 150,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 139,
            "decorators": [],
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 142,
            "end": 149,
            "left": {
              "type": "MemberExpression",
              "start": 142,
              "end": 145,
              "object": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "start": 148,
              "end": 149,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 158,
            "decorators": [],
            "name": "ra6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 161,
            "end": 168,
            "left": {
              "type": "Literal",
              "start": 161,
              "end": 162,
              "value": 0,
              "raw": "0"
            },
            "operator": "<",
            "right": {
              "type": "MemberExpression",
              "start": 165,
              "end": 168,
              "object": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 201,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 192,
            "decorators": [],
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 195,
            "end": 200,
            "left": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
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
      "start": 202,
      "end": 218,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 209,
            "decorators": [],
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 212,
            "end": 217,
            "left": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
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
      "start": 219,
      "end": 237,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 226,
            "decorators": [],
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 229,
            "end": 236,
            "left": {
              "type": "MemberExpression",
              "start": 229,
              "end": 232,
              "object": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
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
      "start": 238,
      "end": 256,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 245,
            "decorators": [],
            "name": "rb4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 248,
            "end": 255,
            "left": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "MemberExpression",
              "start": 252,
              "end": 255,
              "object": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 275,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 264,
            "decorators": [],
            "name": "rb5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 267,
            "end": 274,
            "left": {
              "type": "MemberExpression",
              "start": 267,
              "end": 270,
              "object": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": ">",
            "right": {
              "type": "Literal",
              "start": 273,
              "end": 274,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 294,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 283,
            "decorators": [],
            "name": "rb6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 286,
            "end": 293,
            "left": {
              "type": "Literal",
              "start": 286,
              "end": 287,
              "value": 0,
              "raw": "0"
            },
            "operator": ">",
            "right": {
              "type": "MemberExpression",
              "start": 290,
              "end": 293,
              "object": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 328,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 318,
            "decorators": [],
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 321,
            "end": 327,
            "left": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
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
      "start": 329,
      "end": 346,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 336,
            "decorators": [],
            "name": "rc2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 339,
            "end": 345,
            "left": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
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
      "start": 347,
      "end": 366,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 365,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 354,
            "decorators": [],
            "name": "rc3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 357,
            "end": 365,
            "left": {
              "type": "MemberExpression",
              "start": 357,
              "end": 360,
              "object": {
                "type": "Identifier",
                "start": 357,
                "end": 358,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
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
      "start": 367,
      "end": 386,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 374,
            "decorators": [],
            "name": "rc4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 377,
            "end": 385,
            "left": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "MemberExpression",
              "start": 382,
              "end": 385,
              "object": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 387,
      "end": 406,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 405,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 394,
            "decorators": [],
            "name": "rc5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 397,
            "end": 405,
            "left": {
              "type": "MemberExpression",
              "start": 397,
              "end": 400,
              "object": {
                "type": "Identifier",
                "start": 397,
                "end": 398,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "<=",
            "right": {
              "type": "Literal",
              "start": 404,
              "end": 405,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 407,
      "end": 426,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 414,
            "decorators": [],
            "name": "rc6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 417,
            "end": 425,
            "left": {
              "type": "Literal",
              "start": 417,
              "end": 418,
              "value": 0,
              "raw": "0"
            },
            "operator": "<=",
            "right": {
              "type": "MemberExpression",
              "start": 422,
              "end": 425,
              "object": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 443,
      "end": 460,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 450,
            "decorators": [],
            "name": "rd1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 453,
            "end": 459,
            "left": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
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
      "start": 461,
      "end": 478,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 468,
            "decorators": [],
            "name": "rd2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 471,
            "end": 477,
            "left": {
              "type": "Identifier",
              "start": 471,
              "end": 472,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 476,
              "end": 477,
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
      "start": 479,
      "end": 498,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 497,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 486,
            "decorators": [],
            "name": "rd3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 489,
            "end": 497,
            "left": {
              "type": "MemberExpression",
              "start": 489,
              "end": 492,
              "object": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
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
      "start": 499,
      "end": 518,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 506,
            "decorators": [],
            "name": "rd4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 509,
            "end": 517,
            "left": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "MemberExpression",
              "start": 514,
              "end": 517,
              "object": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 538,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 526,
            "decorators": [],
            "name": "rd5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 529,
            "end": 537,
            "left": {
              "type": "MemberExpression",
              "start": 529,
              "end": 532,
              "object": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 531,
                "end": 532,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": ">=",
            "right": {
              "type": "Literal",
              "start": 536,
              "end": 537,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 539,
      "end": 558,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 546,
            "decorators": [],
            "name": "rd6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 549,
            "end": 557,
            "left": {
              "type": "Literal",
              "start": 549,
              "end": 550,
              "value": 0,
              "raw": "0"
            },
            "operator": ">=",
            "right": {
              "type": "MemberExpression",
              "start": 554,
              "end": 557,
              "object": {
                "type": "Identifier",
                "start": 554,
                "end": 555,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 556,
                "end": 557,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 575,
      "end": 592,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 579,
          "end": 591,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 582,
            "decorators": [],
            "name": "re1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 585,
            "end": 591,
            "left": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 590,
              "end": 591,
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
      "start": 593,
      "end": 610,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 609,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 600,
            "decorators": [],
            "name": "re2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 603,
            "end": 609,
            "left": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 608,
              "end": 609,
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
      "start": 611,
      "end": 630,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 629,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 618,
            "decorators": [],
            "name": "re3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 621,
            "end": 629,
            "left": {
              "type": "MemberExpression",
              "start": 621,
              "end": 624,
              "object": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 623,
                "end": 624,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
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
      "start": 631,
      "end": 650,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 638,
            "decorators": [],
            "name": "re4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 641,
            "end": 649,
            "left": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "MemberExpression",
              "start": 646,
              "end": 649,
              "object": {
                "type": "Identifier",
                "start": 646,
                "end": 647,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 648,
                "end": 649,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 651,
      "end": 670,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 669,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 658,
            "decorators": [],
            "name": "re5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 661,
            "end": 669,
            "left": {
              "type": "MemberExpression",
              "start": 661,
              "end": 664,
              "object": {
                "type": "Identifier",
                "start": 661,
                "end": 662,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 663,
                "end": 664,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "==",
            "right": {
              "type": "Literal",
              "start": 668,
              "end": 669,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 671,
      "end": 690,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 689,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 678,
            "decorators": [],
            "name": "re6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 681,
            "end": 689,
            "left": {
              "type": "Literal",
              "start": 681,
              "end": 682,
              "value": 0,
              "raw": "0"
            },
            "operator": "==",
            "right": {
              "type": "MemberExpression",
              "start": 686,
              "end": 689,
              "object": {
                "type": "Identifier",
                "start": 686,
                "end": 687,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 688,
                "end": 689,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 707,
      "end": 724,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 711,
          "end": 723,
          "id": {
            "type": "Identifier",
            "start": 711,
            "end": 714,
            "decorators": [],
            "name": "rf1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 717,
            "end": 723,
            "left": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 722,
              "end": 723,
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
      "start": 725,
      "end": 742,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 741,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 732,
            "decorators": [],
            "name": "rf2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 735,
            "end": 741,
            "left": {
              "type": "Identifier",
              "start": 735,
              "end": 736,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 740,
              "end": 741,
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
      "start": 743,
      "end": 762,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 747,
          "end": 761,
          "id": {
            "type": "Identifier",
            "start": 747,
            "end": 750,
            "decorators": [],
            "name": "rf3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 753,
            "end": 761,
            "left": {
              "type": "MemberExpression",
              "start": 753,
              "end": 756,
              "object": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 755,
                "end": 756,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 760,
              "end": 761,
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
      "start": 763,
      "end": 782,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 767,
          "end": 781,
          "id": {
            "type": "Identifier",
            "start": 767,
            "end": 770,
            "decorators": [],
            "name": "rf4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 773,
            "end": 781,
            "left": {
              "type": "Identifier",
              "start": 773,
              "end": 774,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "MemberExpression",
              "start": 778,
              "end": 781,
              "object": {
                "type": "Identifier",
                "start": 778,
                "end": 779,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 780,
                "end": 781,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 783,
      "end": 802,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 787,
          "end": 801,
          "id": {
            "type": "Identifier",
            "start": 787,
            "end": 790,
            "decorators": [],
            "name": "rf5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 793,
            "end": 801,
            "left": {
              "type": "MemberExpression",
              "start": 793,
              "end": 796,
              "object": {
                "type": "Identifier",
                "start": 793,
                "end": 794,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 795,
                "end": 796,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "!=",
            "right": {
              "type": "Literal",
              "start": 800,
              "end": 801,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 803,
      "end": 822,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 807,
          "end": 821,
          "id": {
            "type": "Identifier",
            "start": 807,
            "end": 810,
            "decorators": [],
            "name": "rf6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 813,
            "end": 821,
            "left": {
              "type": "Literal",
              "start": 813,
              "end": 814,
              "value": 0,
              "raw": "0"
            },
            "operator": "!=",
            "right": {
              "type": "MemberExpression",
              "start": 818,
              "end": 821,
              "object": {
                "type": "Identifier",
                "start": 818,
                "end": 819,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 820,
                "end": 821,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 840,
      "end": 858,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 844,
          "end": 857,
          "id": {
            "type": "Identifier",
            "start": 844,
            "end": 847,
            "decorators": [],
            "name": "rg1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 850,
            "end": 857,
            "left": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
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
      "start": 859,
      "end": 877,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 863,
          "end": 876,
          "id": {
            "type": "Identifier",
            "start": 863,
            "end": 866,
            "decorators": [],
            "name": "rg2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 869,
            "end": 876,
            "left": {
              "type": "Identifier",
              "start": 869,
              "end": 870,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 875,
              "end": 876,
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
      "start": 878,
      "end": 898,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 882,
          "end": 897,
          "id": {
            "type": "Identifier",
            "start": 882,
            "end": 885,
            "decorators": [],
            "name": "rg3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 888,
            "end": 897,
            "left": {
              "type": "MemberExpression",
              "start": 888,
              "end": 891,
              "object": {
                "type": "Identifier",
                "start": 888,
                "end": 889,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 890,
                "end": 891,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 896,
              "end": 897,
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
      "start": 899,
      "end": 919,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 903,
          "end": 918,
          "id": {
            "type": "Identifier",
            "start": 903,
            "end": 906,
            "decorators": [],
            "name": "rg4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 909,
            "end": 918,
            "left": {
              "type": "Identifier",
              "start": 909,
              "end": 910,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "MemberExpression",
              "start": 915,
              "end": 918,
              "object": {
                "type": "Identifier",
                "start": 915,
                "end": 916,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 920,
      "end": 940,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 924,
          "end": 939,
          "id": {
            "type": "Identifier",
            "start": 924,
            "end": 927,
            "decorators": [],
            "name": "rg5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 930,
            "end": 939,
            "left": {
              "type": "MemberExpression",
              "start": 930,
              "end": 933,
              "object": {
                "type": "Identifier",
                "start": 930,
                "end": 931,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 938,
              "end": 939,
              "value": 0,
              "raw": "0"
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
      "end": 961,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 945,
          "end": 960,
          "id": {
            "type": "Identifier",
            "start": 945,
            "end": 948,
            "decorators": [],
            "name": "rg6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 951,
            "end": 960,
            "left": {
              "type": "Literal",
              "start": 951,
              "end": 952,
              "value": 0,
              "raw": "0"
            },
            "operator": "===",
            "right": {
              "type": "MemberExpression",
              "start": 957,
              "end": 960,
              "object": {
                "type": "Identifier",
                "start": 957,
                "end": 958,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 959,
                "end": 960,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 979,
      "end": 997,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 983,
          "end": 996,
          "id": {
            "type": "Identifier",
            "start": 983,
            "end": 986,
            "decorators": [],
            "name": "rh1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 989,
            "end": 996,
            "left": {
              "type": "Identifier",
              "start": 989,
              "end": 990,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 995,
              "end": 996,
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
      "start": 998,
      "end": 1016,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1002,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 1002,
            "end": 1005,
            "decorators": [],
            "name": "rh2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1008,
            "end": 1015,
            "left": {
              "type": "Identifier",
              "start": 1008,
              "end": 1009,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1014,
              "end": 1015,
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
      "start": 1017,
      "end": 1037,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1021,
          "end": 1036,
          "id": {
            "type": "Identifier",
            "start": 1021,
            "end": 1024,
            "decorators": [],
            "name": "rh3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1027,
            "end": 1036,
            "left": {
              "type": "MemberExpression",
              "start": 1027,
              "end": 1030,
              "object": {
                "type": "Identifier",
                "start": 1027,
                "end": 1028,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1029,
                "end": 1030,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1035,
              "end": 1036,
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
      "start": 1038,
      "end": 1058,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1042,
          "end": 1057,
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1045,
            "decorators": [],
            "name": "rh4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1048,
            "end": 1057,
            "left": {
              "type": "Identifier",
              "start": 1048,
              "end": 1049,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "MemberExpression",
              "start": 1054,
              "end": 1057,
              "object": {
                "type": "Identifier",
                "start": 1054,
                "end": 1055,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1056,
                "end": 1057,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1059,
      "end": 1079,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1063,
          "end": 1078,
          "id": {
            "type": "Identifier",
            "start": 1063,
            "end": 1066,
            "decorators": [],
            "name": "rh5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1069,
            "end": 1078,
            "left": {
              "type": "MemberExpression",
              "start": 1069,
              "end": 1072,
              "object": {
                "type": "Identifier",
                "start": 1069,
                "end": 1070,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1071,
                "end": 1072,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 1077,
              "end": 1078,
              "value": 0,
              "raw": "0"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1080,
      "end": 1100,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1084,
          "end": 1099,
          "id": {
            "type": "Identifier",
            "start": 1084,
            "end": 1087,
            "decorators": [],
            "name": "rh6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1090,
            "end": 1099,
            "left": {
              "type": "Literal",
              "start": 1090,
              "end": 1091,
              "value": 0,
              "raw": "0"
            },
            "operator": "!==",
            "right": {
              "type": "MemberExpression",
              "start": 1096,
              "end": 1099,
              "object": {
                "type": "Identifier",
                "start": 1096,
                "end": 1097,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1098,
                "end": 1099,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
