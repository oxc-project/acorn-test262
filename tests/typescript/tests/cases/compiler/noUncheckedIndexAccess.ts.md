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
        "decorators": [],
        "name": "Meat",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "Sausage",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Bacon",
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
      "start": 41,
      "end": 69,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "decorators": [],
            "name": "sausage",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 57,
            "end": 69,
            "object": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 69,
              "decorators": [],
              "name": "Sausage",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 90,
            "decorators": [],
            "name": "valueSausage",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 93,
            "end": 106,
            "object": {
              "type": "Identifier",
              "start": 93,
              "end": 97,
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 105,
              "decorators": [],
              "name": "sausage",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 134,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "decorators": [],
            "name": "bacon",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 124,
            "end": 134,
            "object": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 134,
              "decorators": [],
              "name": "Bacon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 167,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 153,
            "decorators": [],
            "name": "valueBacon",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 156,
            "end": 167,
            "object": {
              "type": "Identifier",
              "start": 156,
              "end": 160,
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 161,
              "end": 166,
              "decorators": [],
              "name": "bacon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 222,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 222,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 209,
            "decorators": [],
            "name": "union",
            "optional": false,
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
                        "decorators": [],
                        "name": "Meat",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 194,
                        "decorators": [],
                        "name": "Bacon",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Meat",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 209,
                        "decorators": [],
                        "name": "Sausage",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 212,
            "end": 222,
            "object": {
              "type": "Identifier",
              "start": 212,
              "end": 216,
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 217,
              "end": 222,
              "decorators": [],
              "name": "Bacon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 255,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 241,
            "decorators": [],
            "name": "valueUnion",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 244,
            "end": 255,
            "object": {
              "type": "Identifier",
              "start": 244,
              "end": 248,
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 249,
              "end": 254,
              "decorators": [],
              "name": "union",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 310,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 300,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 303,
            "end": 310,
            "object": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 308,
              "end": 309,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 346,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 334,
            "decorators": [],
            "name": "valueUndefined",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 384,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 361,
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 364,
            "end": 384,
            "object": {
              "type": "Identifier",
              "start": 364,
              "end": 368,
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 369,
              "end": 383,
              "decorators": [],
              "name": "valueUndefined",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
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
            "start": 404,
            "end": 405,
            "id": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
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
            "start": 407,
            "end": 408,
            "id": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
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
      "type": "TSEnumDeclaration",
      "start": 415,
      "end": 439,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 421,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "z",
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
      "start": 445,
      "end": 467,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 466,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 457,
            "decorators": [],
            "name": "value3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 460,
            "end": 466,
            "object": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 462,
              "end": 465,
              "object": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
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
