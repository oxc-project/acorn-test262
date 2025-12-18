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
            "name": "localeName",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 16
          },
          "init": {
            "type": "Literal",
            "value": "zh-CN",
            "raw": "\"zh-CN\"",
            "start": 19,
            "end": 26
          },
          "definite": false,
          "start": 6,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ImportExpression",
            "source": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "./locales/",
                    "cooked": "./locales/"
                  },
                  "tail": false,
                  "start": 35,
                  "end": 48
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".js",
                    "cooked": ".js"
                  },
                  "tail": true,
                  "start": 58,
                  "end": 63
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 58
                }
              ],
              "start": 35,
              "end": 63
            },
            "options": null,
            "phase": null,
            "start": 28,
            "end": 64
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "optional": false,
          "computed": false,
          "start": 28,
          "end": 69
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 73
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
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
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 88
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 94
                      },
                      "definite": false,
                      "start": 87,
                      "end": 94
                    }
                  ],
                  "declare": false,
                  "start": 83,
                  "end": 95
                }
              ],
              "start": 77,
              "end": 97
            },
            "id": null,
            "generator": false,
            "start": 70,
            "end": 97
          }
        ],
        "optional": false,
        "start": 28,
        "end": 98
      },
      "directive": null,
      "start": 28,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ImportExpression",
            "source": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "./locales/",
                  "raw": "\"./locales/\"",
                  "start": 108,
                  "end": 120
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 133
                },
                "start": 108,
                "end": 133
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": ".js",
                "raw": "\".js\"",
                "start": 136,
                "end": 141
              },
              "start": 108,
              "end": 141
            },
            "options": null,
            "phase": null,
            "start": 101,
            "end": 142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 101,
          "end": 147
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 151
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
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
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 166
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 172
                      },
                      "definite": false,
                      "start": 165,
                      "end": 172
                    }
                  ],
                  "declare": false,
                  "start": 161,
                  "end": 173
                }
              ],
              "start": 155,
              "end": 175
            },
            "id": null,
            "generator": false,
            "start": 148,
            "end": 175
          }
        ],
        "optional": false,
        "start": 101,
        "end": 176
      },
      "directive": null,
      "start": 101,
      "end": 177
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 177
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
    "value": "localeName",
    "start": 6,
    "end": 16,
    "range": [
      6,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "String",
    "value": "\"zh-CN\"",
    "start": 19,
    "end": 26,
    "range": [
      19,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 28,
    "end": 34,
    "range": [
      28,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Template",
    "value": "`./locales/${",
    "start": 35,
    "end": 48,
    "range": [
      35,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "localeName",
    "start": 48,
    "end": 58,
    "range": [
      48,
      58
    ]
  },
  {
    "type": "Template",
    "value": "}.js`",
    "start": 58,
    "end": 63,
    "range": [
      58,
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
    "value": ".",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 70,
    "end": 73,
    "range": [
      70,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 74,
    "end": 76,
    "range": [
      74,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 101,
    "end": 107,
    "range": [
      101,
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
    "type": "String",
    "value": "\"./locales/\"",
    "start": 108,
    "end": 120,
    "range": [
      108,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "localeName",
    "start": 123,
    "end": 133,
    "range": [
      123,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "String",
    "value": "\".js\"",
    "start": 136,
    "end": 141,
    "range": [
      136,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 143,
    "end": 147,
    "range": [
      143,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 152,
    "end": 154,
    "range": [
      152,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166,
    "range": [
      165,
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
    "value": "bar",
    "start": 169,
    "end": 172,
    "range": [
      169,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  }
]
```
