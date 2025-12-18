__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 67
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 82
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 82
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "window",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 89
          },
          {
            "type": "Literal",
            "value": "prop",
            "raw": "\"prop\"",
            "start": 91,
            "end": 97
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 106
                },
                "value": {
                  "type": "Literal",
                  "value": "v1.0.0",
                  "raw": "\"v1.0.0\"",
                  "start": 108,
                  "end": 116
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 101,
                "end": 116
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 126
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 128,
                  "end": 133
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 118,
                "end": 133
              }
            ],
            "start": 99,
            "end": 135
          }
        ],
        "optional": false,
        "start": 61,
        "end": 136
      },
      "directive": null,
      "start": 61,
      "end": 137
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 150
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 163
          }
        ],
        "start": 151,
        "end": 165
      },
      "declare": false,
      "start": 139,
      "end": 165
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 213,
                    "end": 214
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThisType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 225
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 226,
                          "end": 229
                        }
                      ],
                      "start": 225,
                      "end": 230
                    },
                    "start": 217,
                    "end": 230
                  }
                ],
                "start": 213,
                "end": 230
              },
              "start": 211,
              "end": 230
            },
            "start": 210,
            "end": 230
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 238,
                  "end": 240
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 235,
                "end": 240
              }
            ],
            "start": 233,
            "end": 242
          },
          "definite": false,
          "start": 210,
          "end": 242
        }
      ],
      "declare": false,
      "start": 206,
      "end": 243
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Empty",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 260
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 261,
        "end": 263
      },
      "declare": false,
      "start": 245,
      "end": 263
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Empty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 311,
                    "end": 316
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 322
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 324,
                            "end": 330
                          },
                          "start": 322,
                          "end": 330
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 321,
                        "end": 330
                      }
                    ],
                    "start": 319,
                    "end": 332
                  }
                ],
                "start": 311,
                "end": 332
              },
              "start": 309,
              "end": 332
            },
            "start": 308,
            "end": 332
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 340,
                  "end": 347
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 337,
                "end": 347
              }
            ],
            "start": 335,
            "end": 349
          },
          "definite": false,
          "start": 308,
          "end": 349
        }
      ],
      "declare": false,
      "start": 304,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 350
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Object",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 68,
    "end": 82,
    "range": [
      68,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 101,
    "end": 106,
    "range": [
      101,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "String",
    "value": "\"v1.0.0\"",
    "start": 108,
    "end": 116,
    "range": [
      108,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 118,
    "end": 126,
    "range": [
      118,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 139,
    "end": 148,
    "range": [
      139,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 157,
    "end": 163,
    "range": [
      157,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "ThisType",
    "start": 217,
    "end": 225,
    "range": [
      217,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 226,
    "end": 229,
    "range": [
      226,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 238,
    "end": 240,
    "range": [
      238,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 245,
    "end": 254,
    "range": [
      245,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "Empty",
    "start": 255,
    "end": 260,
    "range": [
      255,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 304,
    "end": 307,
    "range": [
      304,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "Empty",
    "start": 311,
    "end": 316,
    "range": [
      311,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 324,
    "end": 330,
    "range": [
      324,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 340,
    "end": 347,
    "range": [
      340,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  }
]
```
