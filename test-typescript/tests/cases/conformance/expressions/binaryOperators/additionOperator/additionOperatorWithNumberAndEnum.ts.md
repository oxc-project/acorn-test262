__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 329,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 15,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 15,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 10,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 16,
      "end": 31,
      "body": {
        "type": "TSEnumBody",
        "start": 23,
        "end": 31,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 25,
            "end": 26,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 28,
            "end": 29,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
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
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
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
      "start": 48,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 58,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 70,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 69,
                    "end": 70,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
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
      "start": 73,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 82,
            "end": 87,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
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
      "start": 89,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 95,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 98,
            "end": 103,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
      "start": 105,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 111,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 114,
            "end": 119,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
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
      "start": 121,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 127,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 130,
            "end": 135,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
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
      "start": 138,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 144,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 147,
            "end": 152,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 147,
              "end": 148,
              "raw": "0",
              "value": 0
            },
            "right": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
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
      "start": 154,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 170,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 163,
            "end": 170,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 163,
              "end": 166,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 169,
              "end": 170,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 178,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 181,
            "end": 190,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 181,
              "end": 184,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 183,
                "end": 184,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 187,
              "end": 190,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
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
      "start": 192,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 216,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 201,
            "end": 216,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 201,
              "end": 207,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 203,
                "end": 206,
                "raw": "'a'",
                "value": "a"
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 210,
              "end": 216,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 212,
                "end": 215,
                "raw": "'b'",
                "value": "b"
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
      "start": 218,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 227,
            "end": 242,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 227,
              "end": 233,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 229,
                "end": 232,
                "raw": "'a'",
                "value": "a"
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 236,
              "end": 242,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 238,
                "end": 241,
                "raw": "'c'",
                "value": "c"
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
      "start": 245,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 260,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 252,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 255,
            "end": 260,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
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
      "start": 262,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 272,
            "end": 277,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
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
      "start": 279,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 286,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 289,
            "end": 294,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
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
      "start": 296,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 303,
            "decorators": [],
            "name": "r13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 306,
            "end": 311,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
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
      "start": 313,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 320,
            "decorators": [],
            "name": "r14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 323,
            "end": 328,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
