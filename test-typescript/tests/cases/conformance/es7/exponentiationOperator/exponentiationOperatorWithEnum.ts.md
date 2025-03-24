__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 78,
  "end": 378,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 78,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 91,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
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
          "start": 98,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "b",
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
        "start": 85,
        "end": 101,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 91,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
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
            "start": 98,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "b",
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
      "start": 103,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 113,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 110,
                "end": 113
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
      "start": 115,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
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
      "start": 130,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
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
      "start": 156,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 165,
            "end": 171,
            "left": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
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
      "start": 173,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 182,
            "end": 188,
            "left": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
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
      "start": 190,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 196,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 199,
            "end": 205,
            "left": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
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
      "start": 207,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 222,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 213,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 216,
            "end": 222,
            "left": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
      "start": 224,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 230,
            "name": "r5",
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
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
      "start": 241,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 247,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 250,
            "end": 258,
            "left": {
              "type": "MemberExpression",
              "start": 250,
              "end": 253,
              "object": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
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
      "start": 260,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 266,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 269,
            "end": 277,
            "left": {
              "type": "MemberExpression",
              "start": 269,
              "end": 272,
              "object": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
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
      "start": 279,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 288,
            "end": 298,
            "left": {
              "type": "MemberExpression",
              "start": 288,
              "end": 291,
              "object": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "start": 295,
              "end": 298,
              "object": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "name": "b",
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
      "start": 300,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 306,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 309,
            "end": 317,
            "left": {
              "type": "MemberExpression",
              "start": 309,
              "end": 312,
              "object": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 316,
              "end": 317,
              "value": 1,
              "raw": "1"
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
      "start": 319,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 326,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 329,
            "end": 337,
            "left": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "start": 334,
              "end": 337,
              "object": {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 336,
                "end": 337,
                "name": "b",
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
      "start": 339,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 346,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 349,
            "end": 357,
            "left": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "start": 354,
              "end": 357,
              "object": {
                "type": "Identifier",
                "start": 354,
                "end": 355,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "name": "b",
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
      "start": 359,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 366,
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 369,
            "end": 377,
            "left": {
              "type": "Literal",
              "start": 369,
              "end": 370,
              "value": 1,
              "raw": "1"
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "start": 374,
              "end": 377,
              "object": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 376,
                "end": 377,
                "name": "b",
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
