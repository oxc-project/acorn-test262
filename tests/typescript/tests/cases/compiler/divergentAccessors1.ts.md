__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "IHasGetSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 60
          },
          "typeParameters": null,
          "extends": [],
          "body": {
            "type": "TSInterfaceBody",
            "body": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 78
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 82,
                    "end": 88
                  },
                  "start": 80,
                  "end": 88
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 71,
                "end": 89
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 105
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 109,
                            "end": 115
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 118,
                            "end": 124
                          }
                        ],
                        "start": 109,
                        "end": 124
                      },
                      "start": 107,
                      "end": 124
                    },
                    "start": 106,
                    "end": 124
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 98,
                "end": 126
              }
            ],
            "start": 61,
            "end": 132
          },
          "declare": false,
          "start": 40,
          "end": 132
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
                "name": "ihgs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IHasGetSet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 164
                    },
                    "typeArguments": null,
                    "start": 154,
                    "end": 164
                  },
                  "start": 152,
                  "end": 164
                },
                "start": 148,
                "end": 164
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 167,
                  "end": 171
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 175,
                  "end": 178
                },
                "start": 167,
                "end": 178
              },
              "definite": false,
              "start": 148,
              "end": 178
            }
          ],
          "declare": false,
          "start": 142,
          "end": 179
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ihgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 192
              },
              "optional": false,
              "computed": false,
              "start": 184,
              "end": 192
            },
            "right": {
              "type": "Literal",
              "value": "32",
              "raw": "\"32\"",
              "start": 195,
              "end": 199
            },
            "start": 184,
            "end": 199
          },
          "directive": null,
          "start": 184,
          "end": 200
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "r_ihgs_foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 221,
                    "end": 227
                  },
                  "start": 219,
                  "end": 227
                },
                "start": 209,
                "end": 227
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ihgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 234
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 238
                },
                "optional": false,
                "computed": false,
                "start": 230,
                "end": 238
              },
              "definite": false,
              "start": 209,
              "end": 238
            }
          ],
          "declare": false,
          "start": 205,
          "end": 239
        }
      ],
      "start": 34,
      "end": 241
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSTypeAliasDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "T_HasGetSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 265
          },
          "typeParameters": null,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 285
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 289,
                    "end": 295
                  },
                  "start": 287,
                  "end": 295
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 278,
                "end": 296
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 312
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 316,
                            "end": 322
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 325,
                            "end": 331
                          }
                        ],
                        "start": 316,
                        "end": 331
                      },
                      "start": 314,
                      "end": 331
                    },
                    "start": 313,
                    "end": 331
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 305,
                "end": 333
              }
            ],
            "start": 268,
            "end": 339
          },
          "declare": false,
          "start": 249,
          "end": 339
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
                "name": "t_hgs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T_HasGetSet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 373
                    },
                    "typeArguments": null,
                    "start": 362,
                    "end": 373
                  },
                  "start": 360,
                  "end": 373
                },
                "start": 355,
                "end": 373
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 376,
                  "end": 380
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 384,
                  "end": 387
                },
                "start": 376,
                "end": 387
              },
              "definite": false,
              "start": 355,
              "end": 387
            }
          ],
          "declare": false,
          "start": 349,
          "end": 388
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t_hgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 398
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 402
              },
              "optional": false,
              "computed": false,
              "start": 393,
              "end": 402
            },
            "right": {
              "type": "Literal",
              "value": "32",
              "raw": "\"32\"",
              "start": 405,
              "end": 409
            },
            "start": 393,
            "end": 409
          },
          "directive": null,
          "start": 393,
          "end": 410
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "r_t_hgs_foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 432,
                    "end": 438
                  },
                  "start": 430,
                  "end": 438
                },
                "start": 419,
                "end": 438
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t_hgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 446
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 450
                },
                "optional": false,
                "computed": false,
                "start": 441,
                "end": 450
              },
              "definite": false,
              "start": 419,
              "end": 450
            }
          ],
          "declare": false,
          "start": 415,
          "end": 451
        }
      ],
      "start": 243,
      "end": 453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 453
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 40,
    "end": 49,
    "range": [
      40,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "IHasGetSet",
    "start": 50,
    "end": 60,
    "range": [
      50,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 102,
    "end": 105,
    "range": [
      102,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "ihgs",
    "start": 148,
    "end": 152,
    "range": [
      148,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "IHasGetSet",
    "start": 154,
    "end": 164,
    "range": [
      154,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 167,
    "end": 171,
    "range": [
      167,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 172,
    "end": 174,
    "range": [
      172,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "ihgs",
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
    "value": "foo",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "String",
    "value": "\"32\"",
    "start": 195,
    "end": 199,
    "range": [
      195,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 205,
    "end": 208,
    "range": [
      205,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "r_ihgs_foo",
    "start": 209,
    "end": 219,
    "range": [
      209,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 221,
    "end": 227,
    "range": [
      221,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "ihgs",
    "start": 230,
    "end": 234,
    "range": [
      230,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 235,
    "end": 238,
    "range": [
      235,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 249,
    "end": 253,
    "range": [
      249,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "T_HasGetSet",
    "start": 254,
    "end": 265,
    "range": [
      254,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 278,
    "end": 281,
    "range": [
      278,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 282,
    "end": 285,
    "range": [
      282,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 289,
    "end": 295,
    "range": [
      289,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 305,
    "end": 308,
    "range": [
      305,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 309,
    "end": 312,
    "range": [
      309,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 316,
    "end": 322,
    "range": [
      316,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 325,
    "end": 331,
    "range": [
      325,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
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
    "value": "t_hgs",
    "start": 355,
    "end": 360,
    "range": [
      355,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "T_HasGetSet",
    "start": 362,
    "end": 373,
    "range": [
      362,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 376,
    "end": 380,
    "range": [
      376,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 381,
    "end": 383,
    "range": [
      381,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 384,
    "end": 387,
    "range": [
      384,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "t_hgs",
    "start": 393,
    "end": 398,
    "range": [
      393,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 399,
    "end": 402,
    "range": [
      399,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "String",
    "value": "\"32\"",
    "start": 405,
    "end": 409,
    "range": [
      405,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 415,
    "end": 418,
    "range": [
      415,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "r_t_hgs_foo",
    "start": 419,
    "end": 430,
    "range": [
      419,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 432,
    "end": 438,
    "range": [
      432,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "t_hgs",
    "start": 441,
    "end": 446,
    "range": [
      441,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 447,
    "end": 450,
    "range": [
      447,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  }
]
```
