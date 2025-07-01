__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Meat",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sausage",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 23
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bacon",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 34
            },
            "initializer": null,
            "computed": false,
            "start": 29,
            "end": 34
          }
        ],
        "start": 10,
        "end": 38
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sausage",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 61
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sausage",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 69
            },
            "optional": false,
            "computed": false,
            "start": 57,
            "end": 69
          },
          "definite": false,
          "start": 47,
          "end": 69
        }
      ],
      "declare": false,
      "start": 41,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueSausage",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 90
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 97
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "sausage",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 105
            },
            "optional": false,
            "computed": true,
            "start": 93,
            "end": 106
          },
          "definite": false,
          "start": 78,
          "end": 106
        }
      ],
      "declare": false,
      "start": 72,
      "end": 106
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bacon",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bacon",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 134
            },
            "optional": false,
            "computed": false,
            "start": 124,
            "end": 134
          },
          "definite": false,
          "start": 116,
          "end": 134
        }
      ],
      "declare": false,
      "start": 110,
      "end": 134
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueBacon",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 153
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 160
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bacon",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 166
            },
            "optional": false,
            "computed": true,
            "start": 156,
            "end": 167
          },
          "definite": false,
          "start": 143,
          "end": 167
        }
      ],
      "declare": false,
      "start": 137,
      "end": 167
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Meat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 188
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bacon",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 194
                      },
                      "start": 184,
                      "end": 194
                    },
                    "typeArguments": null,
                    "start": 184,
                    "end": 194
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Meat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 201
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sausage",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 209
                      },
                      "start": 197,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 197,
                    "end": 209
                  }
                ],
                "start": 184,
                "end": 209
              },
              "start": 182,
              "end": 209
            },
            "start": 177,
            "end": 209
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 216
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bacon",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 222
            },
            "optional": false,
            "computed": false,
            "start": 212,
            "end": 222
          },
          "definite": false,
          "start": 177,
          "end": 222
        }
      ],
      "declare": false,
      "start": 171,
      "end": 222
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 241
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 248
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "union",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 254
            },
            "optional": false,
            "computed": true,
            "start": 244,
            "end": 255
          },
          "definite": false,
          "start": 231,
          "end": 255
        }
      ],
      "declare": false,
      "start": 225,
      "end": 255
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 300
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 307
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 308,
              "end": 309
            },
            "optional": false,
            "computed": true,
            "start": 303,
            "end": 310
          },
          "definite": false,
          "start": 295,
          "end": 310
        }
      ],
      "declare": false,
      "start": 289,
      "end": 310
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "valueUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 334
          },
          "init": {
            "type": "Literal",
            "value": "testing",
            "raw": "\"testing\"",
            "start": 337,
            "end": 346
          },
          "definite": false,
          "start": 320,
          "end": 346
        }
      ],
      "declare": false,
      "start": 314,
      "end": 346
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 361
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Meat",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 368
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueUndefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 383
            },
            "optional": false,
            "computed": true,
            "start": 364,
            "end": 384
          },
          "definite": false,
          "start": 355,
          "end": 384
        }
      ],
      "declare": false,
      "start": 349,
      "end": 384
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 394
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 402
            },
            "initializer": null,
            "computed": false,
            "start": 401,
            "end": 402
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "initializer": null,
            "computed": false,
            "start": 404,
            "end": 405
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 408
            },
            "initializer": null,
            "computed": false,
            "start": 407,
            "end": 408
          }
        ],
        "start": 395,
        "end": 412
      },
      "const": false,
      "declare": false,
      "start": 388,
      "end": 412
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 421
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "initializer": null,
            "computed": false,
            "start": 428,
            "end": 429
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
            },
            "initializer": null,
            "computed": false,
            "start": 431,
            "end": 432
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 435
            },
            "initializer": null,
            "computed": false,
            "start": 434,
            "end": 435
          }
        ],
        "start": 422,
        "end": 439
      },
      "const": false,
      "declare": false,
      "start": 415,
      "end": 439
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value3",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 457
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 463
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "optional": false,
              "computed": false,
              "start": 462,
              "end": 465
            },
            "optional": false,
            "computed": true,
            "start": 460,
            "end": 466
          },
          "definite": false,
          "start": 451,
          "end": 466
        }
      ],
      "declare": false,
      "start": 445,
      "end": 467
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 467
}
```
