__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 467,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Meat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 16,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 23,
            "name": "Sausage",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 29,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 34,
            "name": "Bacon",
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
        "start": 10,
        "end": 38,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 23,
              "name": "Sausage",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 29,
            "end": 34,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 34,
              "name": "Bacon",
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
      "start": 41,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "name": "sausage",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 57,
            "end": 69,
            "object": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "name": "Meat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 69,
              "name": "Sausage",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 90,
            "name": "valueSausage",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 93,
            "end": 106,
            "object": {
              "type": "Identifier",
              "start": 93,
              "end": 97,
              "name": "Meat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 105,
              "name": "sausage",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "name": "bacon",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 124,
            "end": 134,
            "object": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "name": "Meat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 134,
              "name": "Bacon",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 153,
            "name": "valueBacon",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 156,
            "end": 167,
            "object": {
              "type": "Identifier",
              "start": 156,
              "end": 160,
              "name": "Meat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 161,
              "end": 166,
              "name": "bacon",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 222,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 209,
            "name": "union",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 209,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 184,
                "end": 209,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 184,
                    "end": 194,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 184,
                      "end": 194,
                      "left": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 188,
                        "name": "Meat",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 194,
                        "name": "Bacon",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 197,
                    "end": 209,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 197,
                      "end": 209,
                      "left": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 201,
                        "name": "Meat",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 209,
                        "name": "Sausage",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 212,
            "end": 222,
            "object": {
              "type": "Identifier",
              "start": 212,
              "end": 216,
              "name": "Meat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 217,
              "end": 222,
              "name": "Bacon",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 241,
            "name": "valueUnion",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 244,
            "end": 255,
            "object": {
              "type": "Identifier",
              "start": 244,
              "end": 248,
              "name": "Meat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 249,
              "end": 254,
              "name": "union",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 300,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 303,
            "end": 310,
            "object": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "name": "Meat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 308,
              "end": 309,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 334,
            "name": "valueUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 337,
            "end": 346,
            "value": "testing",
            "raw": "\"testing\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 361,
            "name": "value2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 364,
            "end": 384,
            "object": {
              "type": "Identifier",
              "start": 364,
              "end": 368,
              "name": "Meat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 369,
              "end": 383,
              "name": "valueUndefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 388,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 394,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 401,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
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
          "start": 404,
          "end": 405,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
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
          "start": 407,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 408,
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
        "start": 395,
        "end": 412,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 401,
            "end": 402,
            "id": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
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
            "start": 404,
            "end": 405,
            "id": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
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
            "start": 407,
            "end": 408,
            "id": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
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
      "type": "TSEnumDeclaration",
      "start": 415,
      "end": 439,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 421,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 428,
          "end": 429,
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 429,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 431,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 432,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 434,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 435,
            "name": "z",
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
        "start": 422,
        "end": 439,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 428,
            "end": 429,
            "id": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 431,
            "end": 432,
            "id": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 434,
            "end": 435,
            "id": {
              "type": "Identifier",
              "start": 434,
              "end": 435,
              "name": "z",
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
      "start": 445,
      "end": 467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 466,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 457,
            "name": "value3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 460,
            "end": 466,
            "object": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 462,
              "end": 465,
              "object": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
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
