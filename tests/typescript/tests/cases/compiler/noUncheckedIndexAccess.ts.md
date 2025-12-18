__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 5,
    "end": 9,
    "range": [
      5,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "Sausage",
    "start": 16,
    "end": 23,
    "range": [
      16,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 29,
    "end": 34,
    "range": [
      29,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46,
    "range": [
      41,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "sausage",
    "start": 47,
    "end": 54,
    "range": [
      47,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "Sausage",
    "start": 62,
    "end": 69,
    "range": [
      62,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77,
    "range": [
      72,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "valueSausage",
    "start": 78,
    "end": 90,
    "range": [
      78,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 93,
    "end": 97,
    "range": [
      93,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "sausage",
    "start": 98,
    "end": 105,
    "range": [
      98,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 110,
    "end": 115,
    "range": [
      110,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "bacon",
    "start": 116,
    "end": 121,
    "range": [
      116,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 124,
    "end": 128,
    "range": [
      124,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 137,
    "end": 142,
    "range": [
      137,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "valueBacon",
    "start": 143,
    "end": 153,
    "range": [
      143,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 156,
    "end": 160,
    "range": [
      156,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "bacon",
    "start": 161,
    "end": 166,
    "range": [
      161,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 171,
    "end": 176,
    "range": [
      171,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 177,
    "end": 182,
    "range": [
      177,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 184,
    "end": 188,
    "range": [
      184,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 189,
    "end": 194,
    "range": [
      189,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 197,
    "end": 201,
    "range": [
      197,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "Sausage",
    "start": 202,
    "end": 209,
    "range": [
      202,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 212,
    "end": 216,
    "range": [
      212,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 217,
    "end": 222,
    "range": [
      217,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 225,
    "end": 230,
    "range": [
      225,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "valueUnion",
    "start": 231,
    "end": 241,
    "range": [
      231,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 244,
    "end": 248,
    "range": [
      244,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 249,
    "end": 254,
    "range": [
      249,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 289,
    "end": 294,
    "range": [
      289,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 303,
    "end": 307,
    "range": [
      303,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 314,
    "end": 319,
    "range": [
      314,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "valueUndefined",
    "start": 320,
    "end": 334,
    "range": [
      320,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "String",
    "value": "\"testing\"",
    "start": 337,
    "end": 346,
    "range": [
      337,
      346
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 349,
    "end": 354,
    "range": [
      349,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 355,
    "end": 361,
    "range": [
      355,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "Meat",
    "start": 364,
    "end": 368,
    "range": [
      364,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "valueUndefined",
    "start": 369,
    "end": 383,
    "range": [
      369,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 388,
    "end": 392,
    "range": [
      388,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 415,
    "end": 419,
    "range": [
      415,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 445,
    "end": 450,
    "range": [
      445,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 451,
    "end": 457,
    "range": [
      451,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  }
]
```
