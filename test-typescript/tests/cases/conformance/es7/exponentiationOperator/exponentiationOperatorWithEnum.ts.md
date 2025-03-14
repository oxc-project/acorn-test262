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
      "body": {
        "type": "TSEnumBody",
        "start": 85,
        "end": 101,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 91,
            "end": 92,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 98,
            "end": 99,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "E",
        "optional": false
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 113,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 110,
                "end": 113
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 165,
            "end": 171,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 179,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 182,
            "end": 188,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 196,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 199,
            "end": 205,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 213,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 216,
            "end": 222,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 230,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 233,
            "end": 239,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 247,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 250,
            "end": 258,
            "operator": "**",
            "left": {
              "type": "MemberExpression",
              "start": 250,
              "end": 253,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 266,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 269,
            "end": 277,
            "operator": "**",
            "left": {
              "type": "MemberExpression",
              "start": 269,
              "end": 272,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 288,
            "end": 298,
            "operator": "**",
            "left": {
              "type": "MemberExpression",
              "start": 288,
              "end": 291,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 295,
              "end": 298,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 306,
            "decorators": [],
            "name": "r9",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 309,
            "end": 317,
            "operator": "**",
            "left": {
              "type": "MemberExpression",
              "start": 309,
              "end": 312,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 316,
              "end": 317,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 326,
            "decorators": [],
            "name": "r10",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 329,
            "end": 337,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 334,
              "end": 337,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 336,
                "end": 337,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 346,
            "decorators": [],
            "name": "r11",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 349,
            "end": 357,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 354,
              "end": 357,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 354,
                "end": 355,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 366,
            "decorators": [],
            "name": "r12",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 369,
            "end": 377,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 369,
              "end": 370,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "MemberExpression",
              "start": 374,
              "end": 377,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 374,
                "end": 375,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 376,
                "end": 377,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
