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
          "name": "Point",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 71
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "ThisExpression",
                    "start": 90,
                    "end": 94
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 111
                  },
                  "start": 90,
                  "end": 111
                },
                "prefix": true,
                "start": 88,
                "end": 112
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 140
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 142
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 145
                        }
                      ],
                      "start": 131,
                      "end": 146
                    },
                    "start": 124,
                    "end": 147
                  }
                ],
                "start": 114,
                "end": 153
              },
              "alternate": null,
              "start": 84,
              "end": 153
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 158,
                    "end": 162
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  },
                  "optional": false,
                  "computed": false,
                  "start": 158,
                  "end": 164
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 168
                },
                "start": 158,
                "end": 168
              },
              "directive": null,
              "start": 158,
              "end": 169
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 174,
                    "end": 178
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 180
                  },
                  "optional": false,
                  "computed": false,
                  "start": 174,
                  "end": 180
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "start": 174,
                "end": 184
              },
              "directive": null,
              "start": 174,
              "end": 185
            }
          ],
          "start": 78,
          "end": 187
        },
        "expression": false,
        "start": 57,
        "end": 187
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 50,
  "end": 188
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65,
    "range": [
      57,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 66,
    "end": 71,
    "range": [
      66,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 84,
    "end": 86,
    "range": [
      84,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 90,
    "end": 94,
    "range": [
      90,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 95,
    "end": 105,
    "range": [
      95,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 106,
    "end": 111,
    "range": [
      106,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 124,
    "end": 130,
    "range": [
      124,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 131,
    "end": 134,
    "range": [
      131,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 135,
    "end": 140,
    "range": [
      135,
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
    "value": "x",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 158,
    "end": 162,
    "range": [
      158,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164,
    "range": [
      163,
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
    "type": "Identifier",
    "value": "x",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 174,
    "end": 178,
    "range": [
      174,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "importKind": "value",
          "start": 8,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./source",
        "raw": "\"./source\"",
        "start": 20,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "magnitude",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 86
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 107
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sqrt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 112
                  },
                  "optional": false,
                  "computed": false,
                  "start": 103,
                  "end": 112
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 114
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 115,
                          "end": 116
                        },
                        "optional": false,
                        "computed": false,
                        "start": 113,
                        "end": 116
                      },
                      "operator": "**",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 120,
                        "end": 121
                      },
                      "start": 113,
                      "end": 121
                    },
                    "operator": "+",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 124,
                          "end": 125
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 127
                        },
                        "optional": false,
                        "computed": false,
                        "start": 124,
                        "end": 127
                      },
                      "operator": "**",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 131,
                        "end": 132
                      },
                      "start": 124,
                      "end": 132
                    },
                    "start": 113,
                    "end": 132
                  }
                ],
                "optional": false,
                "start": 103,
                "end": 133
              },
              "start": 96,
              "end": 134
            }
          ],
          "start": 90,
          "end": 136
        },
        "expression": false,
        "start": 68,
        "end": 136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 136
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 136
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19,
    "range": [
      15,
      19
    ]
  },
  {
    "type": "String",
    "value": "\"./source\"",
    "start": 20,
    "end": 30,
    "range": [
      20,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76,
    "range": [
      68,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "magnitude",
    "start": 77,
    "end": 86,
    "range": [
      77,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 96,
    "end": 102,
    "range": [
      96,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 103,
    "end": 107,
    "range": [
      103,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "sqrt",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 117,
    "end": 119,
    "range": [
      117,
      119
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 128,
    "end": 130,
    "range": [
      128,
      130
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  }
]
```
