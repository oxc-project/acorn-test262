__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 595,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "E1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 14,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
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
          "start": 21,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
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
        "start": 8,
        "end": 24,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 15,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
            "start": 21,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "start": 26,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 40,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 44,
            "end": 47,
            "value": "a",
            "raw": "'a'"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 53,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 57,
            "end": 60,
            "value": "b",
            "raw": "'b'"
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 34,
        "end": 62,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 40,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 44,
              "end": 47,
              "value": "a",
              "raw": "'a'"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 53,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 57,
              "end": 60,
              "value": "b",
              "raw": "'b'"
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 64,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 71,
        "name": "E3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 78,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 82,
            "end": 83,
            "value": 1,
            "raw": "1"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 89,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 93,
            "end": 99,
            "left": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "start": 98,
              "end": 99,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 105,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 109,
            "end": 115,
            "left": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<<",
            "right": {
              "type": "Literal",
              "start": 114,
              "end": 115,
              "value": 2,
              "raw": "2"
            }
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 72,
        "end": 118,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 78,
            "end": 83,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 82,
              "end": 83,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 89,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 93,
              "end": 99,
              "left": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 98,
                "end": 99,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 105,
            "end": 115,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 109,
              "end": 115,
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 114,
                "end": 115,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 120,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 133,
        "name": "E4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 140,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
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
          "start": 147,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 134,
        "end": 150,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 140,
            "end": 141,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
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
            "start": 147,
            "end": 148,
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
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
      "start": 152,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 160,
            "name": "E5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 163,
            "end": 189,
            "properties": [
              {
                "type": "Property",
                "start": 169,
                "end": 175,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 172,
                  "end": 175,
                  "value": "a",
                  "raw": "'a'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 181,
                "end": 187,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 187,
                  "value": "b",
                  "raw": "'b'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 201,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 204,
            "end": 215,
            "properties": [
              {
                "type": "Property",
                "start": 206,
                "end": 213,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 209,
                  "end": 213,
                  "object": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 211,
                    "name": "E1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 227,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 230,
            "end": 241,
            "properties": [
              {
                "type": "Property",
                "start": 232,
                "end": 239,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 233,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 235,
                  "end": 239,
                  "object": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 237,
                    "name": "E2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 253,
            "name": "foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 256,
            "end": 276,
            "expression": {
              "type": "ObjectExpression",
              "start": 256,
              "end": 267,
              "properties": [
                {
                  "type": "Property",
                  "start": 258,
                  "end": 265,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 259,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 261,
                    "end": 265,
                    "object": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 263,
                      "name": "E1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 264,
                      "end": 265,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 271,
              "end": 276,
              "typeName": {
                "type": "Identifier",
                "start": 271,
                "end": 276,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 288,
            "name": "foo4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 291,
            "end": 311,
            "expression": {
              "type": "ObjectExpression",
              "start": 291,
              "end": 302,
              "properties": [
                {
                  "type": "Property",
                  "start": 293,
                  "end": 300,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 296,
                    "end": 300,
                    "object": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 298,
                      "name": "E2",
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
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 306,
              "end": 311,
              "typeName": {
                "type": "Identifier",
                "start": 306,
                "end": 311,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 323,
            "name": "foo5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 326,
            "end": 346,
            "expression": {
              "type": "ObjectExpression",
              "start": 326,
              "end": 337,
              "properties": [
                {
                  "type": "Property",
                  "start": 328,
                  "end": 335,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 329,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 331,
                    "end": 335,
                    "object": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 333,
                      "name": "E3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 335,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 341,
              "end": 346,
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 346,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 358,
            "name": "foo6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 361,
            "end": 381,
            "expression": {
              "type": "ObjectExpression",
              "start": 361,
              "end": 372,
              "properties": [
                {
                  "type": "Property",
                  "start": 363,
                  "end": 370,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 366,
                    "end": 370,
                    "object": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 368,
                      "name": "E4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 376,
              "end": 381,
              "typeName": {
                "type": "Identifier",
                "start": 376,
                "end": 381,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 416,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 393,
            "name": "foo7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 396,
            "end": 416,
            "expression": {
              "type": "ObjectExpression",
              "start": 396,
              "end": 407,
              "properties": [
                {
                  "type": "Property",
                  "start": 398,
                  "end": 405,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 401,
                    "end": 405,
                    "object": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 403,
                      "name": "E5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 411,
              "end": 416,
              "typeName": {
                "type": "Identifier",
                "start": 411,
                "end": 416,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 428,
            "name": "foo8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 431,
            "end": 451,
            "properties": [
              {
                "type": "Property",
                "start": 433,
                "end": 449,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 436,
                  "end": 449,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 436,
                    "end": 440,
                    "object": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 438,
                      "name": "E1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 440,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 444,
                    "end": 449,
                    "typeName": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 449,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 453,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 486,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 463,
            "name": "foo9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 466,
            "end": 486,
            "properties": [
              {
                "type": "Property",
                "start": 468,
                "end": 484,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 471,
                  "end": 484,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 471,
                    "end": 475,
                    "object": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 473,
                      "name": "E2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 475,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 479,
                    "end": 484,
                    "typeName": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 484,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 522,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 499,
            "name": "foo10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 502,
            "end": 522,
            "properties": [
              {
                "type": "Property",
                "start": 504,
                "end": 520,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 505,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 507,
                  "end": 520,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 507,
                    "end": 511,
                    "object": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 509,
                      "name": "E3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 511,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 515,
                    "end": 520,
                    "typeName": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 520,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 524,
      "end": 558,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 558,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 535,
            "name": "foo11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 538,
            "end": 558,
            "properties": [
              {
                "type": "Property",
                "start": 540,
                "end": 556,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 543,
                  "end": 556,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 543,
                    "end": 547,
                    "object": {
                      "type": "Identifier",
                      "start": 543,
                      "end": 545,
                      "name": "E4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 547,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 551,
                    "end": 556,
                    "typeName": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 556,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 560,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 594,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 571,
            "name": "foo12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 574,
            "end": 594,
            "properties": [
              {
                "type": "Property",
                "start": 576,
                "end": 592,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 577,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 579,
                  "end": 592,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 579,
                    "end": 583,
                    "object": {
                      "type": "Identifier",
                      "start": 579,
                      "end": 581,
                      "name": "E5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 587,
                    "end": 592,
                    "typeName": {
                      "type": "Identifier",
                      "start": 587,
                      "end": 592,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
