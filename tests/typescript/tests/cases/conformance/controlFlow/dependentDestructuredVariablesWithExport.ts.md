__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mutuallyEnabledPair",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 93
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
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
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 116
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 118,
                        "end": 122
                      },
                      "start": 118,
                      "end": 122
                    },
                    "start": 116,
                    "end": 122
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 103,
                  "end": 123
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 133
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    },
                    "start": 133,
                    "end": 141
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 128,
                  "end": 142
                }
              ],
              "start": 97,
              "end": 146
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
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 168
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 170,
                        "end": 175
                      },
                      "start": 170,
                      "end": 175
                    },
                    "start": 168,
                    "end": 175
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 155,
                  "end": 176
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 186
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNullKeyword",
                          "start": 188,
                          "end": 192
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 195,
                          "end": 204
                        }
                      ],
                      "start": 188,
                      "end": 204
                    },
                    "start": 186,
                    "end": 204
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 181,
                  "end": 205
                }
              ],
              "start": 149,
              "end": 209
            }
          ],
          "start": 97,
          "end": 209
        },
        "start": 95,
        "end": 209
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 209
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "discriminator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 232
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "discriminator1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 248
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 219,
                "end": 248
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 255
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 263
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 263
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 265
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mutuallyEnabledPair",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 287
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 268,
            "end": 289
          },
          "definite": false,
          "start": 217,
          "end": 289
        }
      ],
      "declare": false,
      "start": 211,
      "end": 289
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "discriminator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 309
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value1",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 321
            },
            "directive": null,
            "start": 315,
            "end": 322
          }
        ],
        "start": 311,
        "end": 324
      },
      "alternate": null,
      "start": 291,
      "end": 324
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "discriminator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 354
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "discriminator2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 370
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 341,
                  "end": 370
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 377
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 385
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 372,
                  "end": 385
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 387
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "mutuallyEnabledPair",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 409
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 390,
              "end": 411
            },
            "definite": false,
            "start": 339,
            "end": 411
          }
        ],
        "declare": false,
        "start": 333,
        "end": 411
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 326,
      "end": 411
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "discriminator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 431
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 443
            },
            "directive": null,
            "start": 437,
            "end": 444
          }
        ],
        "start": 433,
        "end": 446
      },
      "alternate": null,
      "start": 413,
      "end": 446
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 446
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73,
    "range": [
      65,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "mutuallyEnabledPair",
    "start": 74,
    "end": 93,
    "range": [
      74,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "discriminator",
    "start": 103,
    "end": 116,
    "range": [
      103,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 118,
    "end": 122,
    "range": [
      118,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "discriminator",
    "start": 155,
    "end": 168,
    "range": [
      155,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 170,
    "end": 175,
    "range": [
      170,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 181,
    "end": 186,
    "range": [
      181,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 195,
    "end": 204,
    "range": [
      195,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 211,
    "end": 216,
    "range": [
      211,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "discriminator",
    "start": 219,
    "end": 232,
    "range": [
      219,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "discriminator1",
    "start": 234,
    "end": 248,
    "range": [
      234,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 250,
    "end": 255,
    "range": [
      250,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 257,
    "end": 263,
    "range": [
      257,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265,
    "range": [
      264,
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
    "type": "Identifier",
    "value": "mutuallyEnabledPair",
    "start": 268,
    "end": 287,
    "range": [
      268,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 291,
    "end": 293,
    "range": [
      291,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "discriminator1",
    "start": 295,
    "end": 309,
    "range": [
      295,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 315,
    "end": 321,
    "range": [
      315,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 333,
    "end": 338,
    "range": [
      333,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "discriminator",
    "start": 341,
    "end": 354,
    "range": [
      341,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "discriminator2",
    "start": 356,
    "end": 370,
    "range": [
      356,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 372,
    "end": 377,
    "range": [
      372,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 379,
    "end": 385,
    "range": [
      379,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "mutuallyEnabledPair",
    "start": 390,
    "end": 409,
    "range": [
      390,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 413,
    "end": 415,
    "range": [
      413,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "discriminator2",
    "start": 417,
    "end": 431,
    "range": [
      417,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 437,
    "end": 443,
    "range": [
      437,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  }
]
```
