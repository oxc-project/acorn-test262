__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "deprecatedRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 79
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "jsx-sort-default-props",
                  "raw": "\"jsx-sort-default-props\"",
                  "start": 86,
                  "end": 110
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 112,
                  "end": 116
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 86,
                "end": 116
              }
            ],
            "start": 82,
            "end": 118
          },
          "definite": false,
          "start": 64,
          "end": 118
        }
      ],
      "declare": false,
      "start": 58,
      "end": 118
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
            "name": "allRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 134
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "no-unsafe",
                  "raw": "'no-unsafe'",
                  "start": 141,
                  "end": 152
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 154,
                  "end": 158
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 141,
                "end": 158
              }
            ],
            "start": 137,
            "end": 160
          },
          "definite": false,
          "start": 126,
          "end": 160
        }
      ],
      "declare": false,
      "start": 120,
      "end": 160
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 176
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "plugins",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 190
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "react",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "deprecatedRules",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 228
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "deprecatedRules",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 228
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 213,
                          "end": 228
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rules",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 241
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "allRules",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 243,
                            "end": 251
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 236,
                          "end": 251
                        }
                      ],
                      "start": 205,
                      "end": 258
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 198,
                    "end": 258
                  }
                ],
                "start": 192,
                "end": 263
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 183,
              "end": 263
            }
          ],
          "start": 179,
          "end": 266
        },
        "start": 162,
        "end": 266
      },
      "directive": null,
      "start": 162,
      "end": 267
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 58,
  "end": 268
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 58,
    "end": 63,
    "range": [
      58,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "deprecatedRules",
    "start": 64,
    "end": 79,
    "range": [
      64,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "String",
    "value": "\"jsx-sort-default-props\"",
    "start": 86,
    "end": 110,
    "range": [
      86,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 112,
    "end": 116,
    "range": [
      112,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 120,
    "end": 125,
    "range": [
      120,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "allRules",
    "start": 126,
    "end": 134,
    "range": [
      126,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "String",
    "value": "'no-unsafe'",
    "start": 141,
    "end": 152,
    "range": [
      141,
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
    "type": "Boolean",
    "value": "true",
    "start": 154,
    "end": 158,
    "range": [
      154,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 169,
    "end": 176,
    "range": [
      169,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "plugins",
    "start": 183,
    "end": 190,
    "range": [
      183,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "react",
    "start": 198,
    "end": 203,
    "range": [
      198,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "deprecatedRules",
    "start": 213,
    "end": 228,
    "range": [
      213,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "rules",
    "start": 236,
    "end": 241,
    "range": [
      236,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "allRules",
    "start": 243,
    "end": 251,
    "range": [
      243,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
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
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "config",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 196
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "configs",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 207
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 197,
          "end": 207
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 209,
        "end": 212
      },
      "expression": false,
      "start": 181,
      "end": 212
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 220
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 228
          },
          "optional": false,
          "computed": false,
          "start": 214,
          "end": 228
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 239
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 239
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 233,
              "end": 239
            }
          ],
          "start": 231,
          "end": 241
        },
        "start": 214,
        "end": 241
      },
      "directive": null,
      "start": 214,
      "end": 242
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 181,
  "end": 243
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 181,
    "end": 189,
    "range": [
      181,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 190,
    "end": 196,
    "range": [
      190,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "configs",
    "start": 200,
    "end": 207,
    "range": [
      200,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 214,
    "end": 220,
    "range": [
      214,
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
    "value": "exports",
    "start": 221,
    "end": 228,
    "range": [
      221,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 233,
    "end": 239,
    "range": [
      233,
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
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "eslintReact",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./eslint-plugin-react.js",
                "raw": "'./eslint-plugin-react.js'",
                "start": 28,
                "end": 54
              }
            ],
            "optional": false,
            "start": 20,
            "end": 55
          },
          "definite": false,
          "start": 6,
          "end": 55
        }
      ],
      "declare": false,
      "start": 0,
      "end": 56
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
            "name": "tseslint",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 71
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 81
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./typescript-eslint.js",
                "raw": "'./typescript-eslint.js'",
                "start": 82,
                "end": 106
              }
            ],
            "optional": false,
            "start": 74,
            "end": 107
          },
          "definite": false,
          "start": 63,
          "end": 107
        }
      ],
      "declare": false,
      "start": 57,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "tseslint",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 118
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 125
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "eslintReact",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 137
          }
        ],
        "optional": false,
        "start": 110,
        "end": 138
      },
      "directive": null,
      "start": 110,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "eslintReact",
    "start": 6,
    "end": 17,
    "range": [
      6,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 20,
    "end": 27,
    "range": [
      20,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "String",
    "value": "'./eslint-plugin-react.js'",
    "start": 28,
    "end": 54,
    "range": [
      28,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "tseslint",
    "start": 63,
    "end": 71,
    "range": [
      63,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 74,
    "end": 81,
    "range": [
      74,
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
    "type": "String",
    "value": "'./typescript-eslint.js'",
    "start": 82,
    "end": 106,
    "range": [
      82,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "tseslint",
    "start": 110,
    "end": 118,
    "range": [
      110,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 119,
    "end": 125,
    "range": [
      119,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "eslintReact",
    "start": 126,
    "end": 137,
    "range": [
      126,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  }
]
```
