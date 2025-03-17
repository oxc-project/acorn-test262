__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 78,
  "end": 406,
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
      "type": "TSEnumDeclaration",
      "start": 102,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 115,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 122,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "name": "d",
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
        "start": 109,
        "end": 125,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 115,
            "end": 116,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 122,
            "end": 123,
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "d",
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
      "start": 127,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 137,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 134,
                "end": 137
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
      "start": 139,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 152,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 152,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
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
      "start": 154,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 166,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 166,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 161,
                "end": 166,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 161,
                    "end": 162,
                    "typeName": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 165,
                    "end": 166,
                    "typeName": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "name": "F",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 184,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 190,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 193,
            "end": 199,
            "left": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
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
      "start": 201,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "name": "r2",
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
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
      "start": 218,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 227,
            "end": 233,
            "left": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
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
      "start": 235,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 250,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 241,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 244,
            "end": 250,
            "left": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
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
      "start": 252,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 258,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 261,
            "end": 267,
            "left": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
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
      "start": 269,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 278,
            "end": 286,
            "left": {
              "type": "MemberExpression",
              "start": 278,
              "end": 281,
              "object": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
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
              "start": 285,
              "end": 286,
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
      "start": 288,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 294,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 297,
            "end": 305,
            "left": {
              "type": "MemberExpression",
              "start": 297,
              "end": 300,
              "object": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
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
              "start": 304,
              "end": 305,
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
      "start": 307,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 313,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 316,
            "end": 326,
            "left": {
              "type": "MemberExpression",
              "start": 316,
              "end": 319,
              "object": {
                "type": "Identifier",
                "start": 316,
                "end": 317,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
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
              "start": 323,
              "end": 326,
              "object": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
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
      "start": 328,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 337,
            "end": 345,
            "left": {
              "type": "MemberExpression",
              "start": 337,
              "end": 340,
              "object": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
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
              "start": 344,
              "end": 345,
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
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 357,
            "end": 365,
            "left": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "start": 362,
              "end": 365,
              "object": {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 365,
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
            "name": "r11",
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
            "operator": "**",
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
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 397,
            "end": 405,
            "left": {
              "type": "Literal",
              "start": 397,
              "end": 398,
              "value": 1,
              "raw": "1"
            },
            "operator": "**",
            "right": {
              "type": "MemberExpression",
              "start": 402,
              "end": 405,
              "object": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 404,
                "end": 405,
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
