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
        "name": "getT",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 78
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
              "start": 79,
              "end": 80
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 79,
            "end": 80
          }
        ],
        "start": 78,
        "end": 81
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "typeArguments": null,
          "start": 85,
          "end": 86
        },
        "start": 83,
        "end": 86
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 96
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 100
              },
              "optional": false,
              "computed": false,
              "start": 89,
              "end": 100
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 106
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 107,
                          "end": 113
                        }
                      ],
                      "start": 106,
                      "end": 114
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 102,
                    "end": 116
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 125
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 126,
                            "end": 129
                          }
                        ],
                        "start": 125,
                        "end": 130
                      },
                      "arguments": [],
                      "optional": false,
                      "start": 121,
                      "end": 132
                    },
                    "start": 118,
                    "end": 132
                  }
                ],
                "start": 101,
                "end": 133
              }
            ],
            "optional": false,
            "start": 89,
            "end": 134
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 89,
          "end": 139
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 147
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "head",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 166
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 175
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 176,
                          "end": 177
                        },
                        "optional": false,
                        "computed": true,
                        "start": 169,
                        "end": 178
                      },
                      "definite": false,
                      "start": 162,
                      "end": 178
                    }
                  ],
                  "declare": false,
                  "start": 156,
                  "end": 179
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
                        "name": "tail",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 202
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 205,
                            "end": 211
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 217
                          },
                          "optional": false,
                          "computed": false,
                          "start": 205,
                          "end": 217
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 218,
                            "end": 219
                          }
                        ],
                        "optional": false,
                        "start": 205,
                        "end": 220
                      },
                      "definite": false,
                      "start": 198,
                      "end": 220
                    }
                  ],
                  "declare": false,
                  "start": 192,
                  "end": 221
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TSSatisfiesExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 237
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 248,
                        "end": 254
                      },
                      "start": 248,
                      "end": 256
                    },
                    "start": 233,
                    "end": 256
                  },
                  "directive": null,
                  "start": 233,
                  "end": 257
                }
              ],
              "start": 152,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 140,
            "end": 265
          }
        ],
        "optional": false,
        "start": 89,
        "end": 266
      },
      "directive": null,
      "start": 89,
      "end": 267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 267
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
    "value": "getT",
    "start": 74,
    "end": 78,
    "range": [
      74,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 89,
    "end": 96,
    "range": [
      89,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "getT",
    "start": 102,
    "end": 106,
    "range": [
      102,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113,
    "range": [
      107,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116,
    "range": [
      115,
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
    "type": "Punctuator",
    "value": "...",
    "start": 118,
    "end": 121,
    "range": [
      118,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "getT",
    "start": 121,
    "end": 125,
    "range": [
      121,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 126,
    "end": 129,
    "range": [
      126,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 156,
    "end": 161,
    "range": [
      156,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 162,
    "end": 166,
    "range": [
      162,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178,
    "range": [
      177,
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
    "type": "Keyword",
    "value": "const",
    "start": 192,
    "end": 197,
    "range": [
      192,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 198,
    "end": 202,
    "range": [
      198,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 205,
    "end": 211,
    "range": [
      205,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 212,
    "end": 217,
    "range": [
      212,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 233,
    "end": 237,
    "range": [
      233,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 238,
    "end": 247,
    "range": [
      238,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 248,
    "end": 254,
    "range": [
      248,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
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
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  }
]
```
