__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CanvasDirection",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 20
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "RIGHT",
              "raw": "\"RIGHT\"",
              "start": 23,
              "end": 30
            },
            "start": 23,
            "end": 30
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "LEFT",
              "raw": "\"LEFT\"",
              "start": 33,
              "end": 39
            },
            "start": 33,
            "end": 39
          }
        ],
        "start": 23,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GraphActions",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 64
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setDirection",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "CanvasDirection",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 110
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 110
                      },
                      "start": 93,
                      "end": 110
                    },
                    "start": 84,
                    "end": 110
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 115,
                    "end": 119
                  },
                  "start": 112,
                  "end": 119
                },
                "start": 83,
                "end": 119
              },
              "start": 81,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 120
          }
        ],
        "start": 65,
        "end": 122
      },
      "declare": false,
      "start": 42,
      "end": 122
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 154
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 155,
              "end": 156
            }
          ],
          "start": 154,
          "end": 157
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "typeArguments": null,
                "start": 166,
                "end": 167
              },
              "start": 164,
              "end": 167
            },
            "start": 158,
            "end": 167
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 170,
            "end": 174
          },
          "start": 168,
          "end": 174
        },
        "body": null,
        "expression": false,
        "start": 131,
        "end": 175
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 124,
      "end": 175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takesDirection",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 208
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "direction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CanvasDirection",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 235
              },
              "typeArguments": null,
              "start": 220,
              "end": 235
            },
            "start": 218,
            "end": 235
          },
          "start": 209,
          "end": 235
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 238,
          "end": 242
        },
        "start": 236,
        "end": 242
      },
      "body": null,
      "expression": false,
      "start": 177,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null,
          "start": 245,
          "end": 251
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GraphActions",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 264
              },
              "typeArguments": null,
              "start": 252,
              "end": 264
            }
          ],
          "start": 251,
          "end": 265
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setDirection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 282
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 294
                      },
                      "right": {
                        "type": "Literal",
                        "value": "RIGHT",
                        "raw": "\"RIGHT\"",
                        "start": 297,
                        "end": 304
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 304
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "takesDirection",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 315,
                            "end": 329
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "direction",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 330,
                              "end": 339
                            }
                          ],
                          "optional": false,
                          "start": 315,
                          "end": 340
                        },
                        "directive": null,
                        "start": 315,
                        "end": 341
                      }
                    ],
                    "start": 309,
                    "end": 345
                  },
                  "id": null,
                  "generator": false,
                  "start": 284,
                  "end": 345
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 345
              }
            ],
            "start": 266,
            "end": 348
          }
        ],
        "optional": false,
        "start": 245,
        "end": 349
      },
      "directive": null,
      "start": 245,
      "end": 350
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 350
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "CanvasDirection",
    "start": 5,
    "end": 20,
    "range": [
      5,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "String",
    "value": "\"RIGHT\"",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "String",
    "value": "\"LEFT\"",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51,
    "range": [
      42,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "GraphActions",
    "start": 52,
    "end": 64,
    "range": [
      52,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "setDirection",
    "start": 69,
    "end": 81,
    "range": [
      69,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 84,
    "end": 93,
    "range": [
      84,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "CanvasDirection",
    "start": 95,
    "end": 110,
    "range": [
      95,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 112,
    "end": 114,
    "range": [
      112,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 115,
    "end": 119,
    "range": [
      115,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130,
    "range": [
      124,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 131,
    "end": 138,
    "range": [
      131,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 139,
    "end": 147,
    "range": [
      139,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 148,
    "end": 154,
    "range": [
      148,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 158,
    "end": 164,
    "range": [
      158,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168,
    "range": [
      167,
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
    "type": "Keyword",
    "value": "void",
    "start": 170,
    "end": 174,
    "range": [
      170,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 177,
    "end": 184,
    "range": [
      177,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 185,
    "end": 193,
    "range": [
      185,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "takesDirection",
    "start": 194,
    "end": 208,
    "range": [
      194,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 209,
    "end": 218,
    "range": [
      209,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "CanvasDirection",
    "start": 220,
    "end": 235,
    "range": [
      220,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 238,
    "end": 242,
    "range": [
      238,
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
    "type": "Identifier",
    "value": "create",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "GraphActions",
    "start": 252,
    "end": 264,
    "range": [
      252,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "setDirection",
    "start": 270,
    "end": 282,
    "range": [
      270,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 285,
    "end": 294,
    "range": [
      285,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "String",
    "value": "\"RIGHT\"",
    "start": 297,
    "end": 304,
    "range": [
      297,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 306,
    "end": 308,
    "range": [
      306,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "takesDirection",
    "start": 315,
    "end": 329,
    "range": [
      315,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "direction",
    "start": 330,
    "end": 339,
    "range": [
      330,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
