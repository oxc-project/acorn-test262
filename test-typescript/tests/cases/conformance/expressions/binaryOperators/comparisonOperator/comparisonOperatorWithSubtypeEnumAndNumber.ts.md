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
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 9,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
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
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
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
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
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
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
            "start": 15,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "type": "VariableDeclaration",
      "start": 20,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 28,
            "name": "a",
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
      "start": 30,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 43,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
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
      "start": 60,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 67,
            "name": "ra1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 70,
            "end": 75,
            "left": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
      "start": 77,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 84,
            "name": "ra2",
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
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
      "start": 94,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 101,
            "name": "ra3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
      "start": 113,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "name": "ra4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 123,
            "end": 130,
            "left": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 132,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 139,
            "name": "ra5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 158,
            "name": "ra6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 185,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 192,
            "name": "rb1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 195,
            "end": 200,
            "left": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
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
      "start": 202,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 209,
            "name": "rb2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 212,
            "end": 217,
            "left": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
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
      "start": 219,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 226,
            "name": "rb3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
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
      "start": 238,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 245,
            "name": "rb4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 248,
            "end": 255,
            "left": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 257,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 264,
            "name": "rb5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 283,
            "name": "rb6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 311,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 318,
            "name": "rc1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 321,
            "end": 327,
            "left": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
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
      "start": 329,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 336,
            "name": "rc2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 339,
            "end": 345,
            "left": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
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
      "start": 347,
      "end": 366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 365,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 354,
            "name": "rc3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
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
      "start": 367,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 374,
            "name": "rc4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 377,
            "end": 385,
            "left": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 387,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 405,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 394,
            "name": "rc5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 407,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 414,
            "name": "rc6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 443,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 450,
            "name": "rd1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 453,
            "end": 459,
            "left": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
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
      "start": 461,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 468,
            "name": "rd2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 471,
            "end": 477,
            "left": {
              "type": "Identifier",
              "start": 471,
              "end": 472,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 476,
              "end": 477,
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
      "start": 479,
      "end": 498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 497,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 486,
            "name": "rd3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
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
      "start": 499,
      "end": 518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 506,
            "name": "rd4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 509,
            "end": 517,
            "left": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 519,
      "end": 538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 526,
            "name": "rd5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 531,
                "end": 532,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 539,
      "end": 558,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 546,
            "name": "rd6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 556,
                "end": 557,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 575,
      "end": 592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 579,
          "end": 591,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 582,
            "name": "re1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 585,
            "end": 591,
            "left": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 590,
              "end": 591,
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
      "start": 593,
      "end": 610,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 609,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 600,
            "name": "re2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 603,
            "end": 609,
            "left": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 608,
              "end": 609,
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
      "start": 611,
      "end": 630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 629,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 618,
            "name": "re3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 623,
                "end": 624,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
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
      "start": 631,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 638,
            "name": "re4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 641,
            "end": 649,
            "left": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 648,
                "end": 649,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 651,
      "end": 670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 669,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 658,
            "name": "re5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 663,
                "end": 664,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 671,
      "end": 690,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 689,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 678,
            "name": "re6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 688,
                "end": 689,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 707,
      "end": 724,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 711,
          "end": 723,
          "id": {
            "type": "Identifier",
            "start": 711,
            "end": 714,
            "name": "rf1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 717,
            "end": 723,
            "left": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 722,
              "end": 723,
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
      "start": 725,
      "end": 742,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 741,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 732,
            "name": "rf2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 735,
            "end": 741,
            "left": {
              "type": "Identifier",
              "start": 735,
              "end": 736,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 740,
              "end": 741,
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
      "start": 743,
      "end": 762,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 747,
          "end": 761,
          "id": {
            "type": "Identifier",
            "start": 747,
            "end": 750,
            "name": "rf3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 755,
                "end": 756,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 760,
              "end": 761,
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
      "start": 763,
      "end": 782,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 767,
          "end": 781,
          "id": {
            "type": "Identifier",
            "start": 767,
            "end": 770,
            "name": "rf4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 773,
            "end": 781,
            "left": {
              "type": "Identifier",
              "start": 773,
              "end": 774,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 780,
                "end": 781,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 783,
      "end": 802,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 787,
          "end": 801,
          "id": {
            "type": "Identifier",
            "start": 787,
            "end": 790,
            "name": "rf5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 795,
                "end": 796,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 803,
      "end": 822,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 807,
          "end": 821,
          "id": {
            "type": "Identifier",
            "start": 807,
            "end": 810,
            "name": "rf6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 820,
                "end": 821,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 840,
      "end": 858,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 844,
          "end": 857,
          "id": {
            "type": "Identifier",
            "start": 844,
            "end": 847,
            "name": "rg1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 850,
            "end": 857,
            "left": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
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
      "start": 859,
      "end": 877,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 863,
          "end": 876,
          "id": {
            "type": "Identifier",
            "start": 863,
            "end": 866,
            "name": "rg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 869,
            "end": 876,
            "left": {
              "type": "Identifier",
              "start": 869,
              "end": 870,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 875,
              "end": 876,
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
      "start": 878,
      "end": 898,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 882,
          "end": 897,
          "id": {
            "type": "Identifier",
            "start": 882,
            "end": 885,
            "name": "rg3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 890,
                "end": 891,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 896,
              "end": 897,
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
      "start": 899,
      "end": 919,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 903,
          "end": 918,
          "id": {
            "type": "Identifier",
            "start": 903,
            "end": 906,
            "name": "rg4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 909,
            "end": 918,
            "left": {
              "type": "Identifier",
              "start": 909,
              "end": 910,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 920,
      "end": 940,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 924,
          "end": 939,
          "id": {
            "type": "Identifier",
            "start": 924,
            "end": 927,
            "name": "rg5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 941,
      "end": 961,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 945,
          "end": 960,
          "id": {
            "type": "Identifier",
            "start": 945,
            "end": 948,
            "name": "rg6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 959,
                "end": 960,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 979,
      "end": 997,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 983,
          "end": 996,
          "id": {
            "type": "Identifier",
            "start": 983,
            "end": 986,
            "name": "rh1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 989,
            "end": 996,
            "left": {
              "type": "Identifier",
              "start": 989,
              "end": 990,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 995,
              "end": 996,
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
      "start": 998,
      "end": 1016,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1002,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 1002,
            "end": 1005,
            "name": "rh2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1008,
            "end": 1015,
            "left": {
              "type": "Identifier",
              "start": 1008,
              "end": 1009,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1014,
              "end": 1015,
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
      "start": 1017,
      "end": 1037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1021,
          "end": 1036,
          "id": {
            "type": "Identifier",
            "start": 1021,
            "end": 1024,
            "name": "rh3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1029,
                "end": 1030,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1035,
              "end": 1036,
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
      "start": 1038,
      "end": 1058,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1042,
          "end": 1057,
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1045,
            "name": "rh4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1048,
            "end": 1057,
            "left": {
              "type": "Identifier",
              "start": 1048,
              "end": 1049,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1056,
                "end": 1057,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "start": 1059,
      "end": 1079,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1063,
          "end": 1078,
          "id": {
            "type": "Identifier",
            "start": 1063,
            "end": 1066,
            "name": "rh5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1071,
                "end": 1072,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1080,
      "end": 1100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1084,
          "end": 1099,
          "id": {
            "type": "Identifier",
            "start": 1084,
            "end": 1087,
            "name": "rh6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1098,
                "end": 1099,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
