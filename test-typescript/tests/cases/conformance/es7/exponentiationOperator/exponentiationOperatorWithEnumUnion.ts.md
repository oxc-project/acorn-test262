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
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
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
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 102,
      "end": 125,
      "body": {
        "type": "TSEnumBody",
        "start": 109,
        "end": 125,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 115,
            "end": 116,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 122,
            "end": 123,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 137,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 134,
                "end": 137
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
      "start": 139,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 152,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 152,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
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
      "start": 154,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 166,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 165,
                    "end": 166,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 184,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 190,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 193,
            "end": 199,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 210,
            "end": 216,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 227,
            "end": 233,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 241,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 244,
            "end": 250,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 258,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 261,
            "end": 267,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 275,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 278,
            "end": 286,
            "operator": "**",
            "left": {
              "type": "MemberExpression",
              "start": 278,
              "end": 281,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 294,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 297,
            "end": 305,
            "operator": "**",
            "left": {
              "type": "MemberExpression",
              "start": 297,
              "end": 300,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 313,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 316,
            "end": 326,
            "operator": "**",
            "left": {
              "type": "MemberExpression",
              "start": 316,
              "end": 319,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 316,
                "end": 317,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 323,
              "end": 326,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 325,
                "end": 326,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
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
      "start": 328,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 345,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 337,
            "end": 345,
            "operator": "**",
            "left": {
              "type": "MemberExpression",
              "start": 337,
              "end": 340,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 344,
              "end": 345,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 354,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 357,
            "end": 365,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "MemberExpression",
              "start": 362,
              "end": 365,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 365,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
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
      "start": 367,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 374,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 377,
            "end": 385,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "MemberExpression",
              "start": 382,
              "end": 385,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
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
      "start": 387,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 405,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 394,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 397,
            "end": 405,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 397,
              "end": 398,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "MemberExpression",
              "start": 402,
              "end": 405,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 404,
                "end": 405,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
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
