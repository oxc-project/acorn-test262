__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 330,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 15,
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
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 15,
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
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 16,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 25,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
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
          "start": 28,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
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
        "start": 23,
        "end": 31,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 25,
            "end": 26,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
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
            "start": 28,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
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
      "start": 33,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
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
      "start": 48,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
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
      "start": 58,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 70,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 70,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 65,
                "end": 70,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 66,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 69,
                    "end": 70,
                    "typeName": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
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
      "start": 73,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 82,
            "end": 87,
            "left": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
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
      "start": 89,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 95,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 98,
            "end": 103,
            "left": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "start": 105,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 111,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 114,
            "end": 119,
            "left": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
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
      "start": 121,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 127,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 130,
            "end": 135,
            "left": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
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
      "start": 138,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 144,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 147,
            "end": 152,
            "left": {
              "type": "Literal",
              "start": 147,
              "end": 148,
              "value": 0,
              "raw": "0"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
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
      "start": 154,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 163,
            "end": 170,
            "left": {
              "type": "MemberExpression",
              "start": 163,
              "end": 166,
              "object": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 169,
              "end": 170,
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
      "start": 172,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 178,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 181,
            "end": 190,
            "left": {
              "type": "MemberExpression",
              "start": 181,
              "end": 184,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 187,
              "end": 190,
              "object": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
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
      "start": 192,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 201,
            "end": 216,
            "left": {
              "type": "MemberExpression",
              "start": 201,
              "end": 207,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 203,
                "end": 206,
                "value": "a",
                "raw": "'a'"
              },
              "computed": true,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 210,
              "end": 216,
              "object": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 212,
                "end": 215,
                "value": "b",
                "raw": "'b'"
              },
              "computed": true,
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
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 227,
            "end": 242,
            "left": {
              "type": "MemberExpression",
              "start": 227,
              "end": 233,
              "object": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 229,
                "end": 232,
                "value": "a",
                "raw": "'a'"
              },
              "computed": true,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 236,
              "end": 242,
              "object": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 238,
                "end": 241,
                "value": "c",
                "raw": "'c'"
              },
              "computed": true,
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
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 252,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 255,
            "end": 260,
            "left": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
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
      "start": 262,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 272,
            "end": 277,
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
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
      "start": 279,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 286,
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 289,
            "end": 294,
            "left": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
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
      "start": 296,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 303,
            "name": "r13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 306,
            "end": 311,
            "left": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
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
            "name": "r14",
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
