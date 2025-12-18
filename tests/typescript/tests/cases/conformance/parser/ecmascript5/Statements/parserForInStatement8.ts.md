__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 82,
                      "end": 85
                    },
                    "operator": "in",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 89,
                      "end": 91
                    },
                    "start": 82,
                    "end": 91
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 91
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 92
            },
            "init": null,
            "definite": false,
            "start": 77,
            "end": 92
          }
        ],
        "declare": false,
        "start": 73,
        "end": 92
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 98,
              "end": 100
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 102,
              "end": 103
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 98,
            "end": 103
          }
        ],
        "start": 96,
        "end": 105
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 114
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 118
            },
            "optional": false,
            "computed": false,
            "start": 107,
            "end": 118
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            }
          ],
          "optional": false,
          "start": 107,
          "end": 121
        },
        "directive": null,
        "start": 107,
        "end": 121
      },
      "start": 68,
      "end": 121
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 133
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 133
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 136,
                        "end": 139
                      },
                      "operator": "in",
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 143,
                        "end": 145
                      },
                      "start": 136,
                      "end": 145
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 145
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 132,
                  "end": 145
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 146
            },
            "init": null,
            "definite": false,
            "start": 131,
            "end": 146
          }
        ],
        "declare": false,
        "start": 127,
        "end": 146
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 152,
              "end": 154
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 156,
              "end": 157
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 152,
            "end": 157
          }
        ],
        "start": 150,
        "end": 159
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 168
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 172
            },
            "optional": false,
            "computed": false,
            "start": 161,
            "end": 172
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            }
          ],
          "optional": false,
          "start": 161,
          "end": 175
        },
        "directive": null,
        "start": 161,
        "end": 175
      },
      "start": 122,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 175
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 73,
    "end": 76,
    "range": [
      73,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 78,
    "end": 79,
    "range": [
      78,
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
    "type": "String",
    "value": "'a'",
    "start": 82,
    "end": 85,
    "range": [
      82,
      85
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 86,
    "end": 88,
    "range": [
      86,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 93,
    "end": 95,
    "range": [
      93,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 98,
    "end": 100,
    "range": [
      98,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 107,
    "end": 114,
    "range": [
      107,
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
    "value": "log",
    "start": 115,
    "end": 118,
    "range": [
      115,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 127,
    "end": 130,
    "range": [
      127,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 136,
    "end": 139,
    "range": [
      136,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
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
    "type": "Keyword",
    "value": "in",
    "start": 147,
    "end": 149,
    "range": [
      147,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 152,
    "end": 154,
    "range": [
      152,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 161,
    "end": 168,
    "range": [
      161,
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
    "value": "log",
    "start": 169,
    "end": 172,
    "range": [
      169,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  }
]
```
