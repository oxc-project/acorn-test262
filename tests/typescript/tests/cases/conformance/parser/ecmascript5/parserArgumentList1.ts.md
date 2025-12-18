__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "removeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 27
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 45
                },
                "typeArguments": null,
                "start": 34,
                "end": 45
              },
              "start": 33,
              "end": 45
            },
            "start": 29,
            "end": 45
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "className",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              },
              "start": 56,
              "end": 63
            },
            "start": 47,
            "end": 63
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
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
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 72
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "className",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 82
                  },
                  "optional": false,
                  "computed": false,
                  "start": 68,
                  "end": 82
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 89
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "className",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 90,
                        "end": 99
                      },
                      "optional": false,
                      "computed": false,
                      "start": 85,
                      "end": 99
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "replace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 107
                    },
                    "optional": false,
                    "computed": false,
                    "start": 85,
                    "end": 107
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_classNameRegexp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 124
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "className",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 134
                        }
                      ],
                      "optional": false,
                      "start": 108,
                      "end": 135
                    },
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "everything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 157
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "leftDelimiter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 172
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 178
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rightDelimiter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 194
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "leftDelimiter",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 207,
                                      "end": 220
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 221,
                                      "end": 227
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 207,
                                    "end": 227
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "rightDelimiter",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 230,
                                      "end": 244
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 245,
                                      "end": 251
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 230,
                                    "end": 251
                                  },
                                  "start": 207,
                                  "end": 251
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 256,
                                  "end": 257
                                },
                                "start": 207,
                                "end": 257
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": " ",
                                "raw": "' '",
                                "start": 260,
                                "end": 263
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''",
                                "start": 266,
                                "end": 268
                              },
                              "start": 207,
                              "end": 268
                            },
                            "start": 200,
                            "end": 269
                          }
                        ],
                        "start": 196,
                        "end": 272
                      },
                      "expression": false,
                      "start": 137,
                      "end": 272
                    }
                  ],
                  "optional": false,
                  "start": 85,
                  "end": 273
                },
                "start": 68,
                "end": 273
              },
              "directive": null,
              "start": 68,
              "end": 274
            }
          ],
          "start": 65,
          "end": 276
        },
        "expression": false,
        "start": 7,
        "end": 276
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 276
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 276
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15,
    "range": [
      7,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "removeClass",
    "start": 16,
    "end": 27,
    "range": [
      16,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 29,
    "end": 33,
    "range": [
      29,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 34,
    "end": 45,
    "range": [
      34,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 47,
    "end": 56,
    "range": [
      47,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64,
    "range": [
      63,
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
    "value": "node",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 73,
    "end": 82,
    "range": [
      73,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 90,
    "end": 99,
    "range": [
      90,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "replace",
    "start": 100,
    "end": 107,
    "range": [
      100,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "_classNameRegexp",
    "start": 108,
    "end": 124,
    "range": [
      108,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 125,
    "end": 134,
    "range": [
      125,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 137,
    "end": 145,
    "range": [
      137,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "everything",
    "start": 147,
    "end": 157,
    "range": [
      147,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "leftDelimiter",
    "start": 159,
    "end": 172,
    "range": [
      159,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 174,
    "end": 178,
    "range": [
      174,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "rightDelimiter",
    "start": 180,
    "end": 194,
    "range": [
      180,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "leftDelimiter",
    "start": 207,
    "end": 220,
    "range": [
      207,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 221,
    "end": 227,
    "range": [
      221,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "rightDelimiter",
    "start": 230,
    "end": 244,
    "range": [
      230,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 252,
    "end": 255,
    "range": [
      252,
      255
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "String",
    "value": "' '",
    "start": 260,
    "end": 263,
    "range": [
      260,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 266,
    "end": 268,
    "range": [
      266,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  }
]
```
