__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "classnames",
        "raw": "\"classnames\"",
        "start": 15,
        "end": 27
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "String",
    "value": "\"classnames\"",
    "start": 15,
    "end": 27,
    "range": [
      15,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cx",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 55
          },
          "start": 48,
          "end": 55
        }
      ],
      "source": {
        "type": "Literal",
        "value": "classnames",
        "raw": "'classnames'",
        "start": 61,
        "end": 73
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 74
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 92
          },
          "start": 82,
          "end": 92
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 98,
        "end": 105
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 75,
      "end": 106
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
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 123
        }
      ],
      "declare": false,
      "start": 108,
      "end": 124
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "start": 141,
                "end": 147
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buttonProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 163
                  },
                  "start": 148,
                  "end": 164
                }
              ],
              "selfClosing": false,
              "start": 140,
              "end": 165
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n            ",
                "raw": "\n            ",
                "start": 165,
                "end": 178
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 179,
                    "end": 183
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "className",
                        "start": 184,
                        "end": 193
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 195,
                            "end": 197
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "class1",
                              "raw": "'class1'",
                              "start": 198,
                              "end": 206
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
                                    "name": "class2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 210,
                                    "end": 216
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 218,
                                    "end": 222
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 210,
                                  "end": 222
                                }
                              ],
                              "start": 208,
                              "end": 224
                            }
                          ],
                          "optional": false,
                          "start": 195,
                          "end": 225
                        },
                        "start": 194,
                        "end": 226
                      },
                      "start": 184,
                      "end": 226
                    }
                  ],
                  "selfClosing": true,
                  "start": 178,
                  "end": 229
                },
                "children": [],
                "closingElement": null,
                "start": 178,
                "end": 229
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 229,
                "end": 238
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "start": 240,
                "end": 246
              },
              "start": 238,
              "end": 247
            },
            "start": 140,
            "end": 247
          },
          "definite": false,
          "start": 136,
          "end": 247
        }
      ],
      "declare": false,
      "start": 132,
      "end": 248
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 248
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 50,
    "end": 52,
    "range": [
      50,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "cx",
    "start": 53,
    "end": 55,
    "range": [
      53,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "String",
    "value": "'classnames'",
    "start": 61,
    "end": 73,
    "range": [
      61,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 84,
    "end": 86,
    "range": [
      84,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 87,
    "end": 92,
    "range": [
      87,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 93,
    "end": 97,
    "range": [
      93,
      97
    ]
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 98,
    "end": 105,
    "range": [
      98,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 108,
    "end": 111,
    "range": [
      108,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 112,
    "end": 123,
    "range": [
      112,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 132,
    "end": 135,
    "range": [
      132,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 152,
    "end": 163,
    "range": [
      152,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "JSXText",
    "value": "\n            ",
    "start": 165,
    "end": 178,
    "range": [
      165,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 179,
    "end": 183,
    "range": [
      179,
      183
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 184,
    "end": 193,
    "range": [
      184,
      193
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
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "cx",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "String",
    "value": "'class1'",
    "start": 198,
    "end": 206,
    "range": [
      198,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "class2",
    "start": 210,
    "end": 216,
    "range": [
      210,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 218,
    "end": 222,
    "range": [
      218,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 229,
    "end": 238,
    "range": [
      229,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  }
]
```
