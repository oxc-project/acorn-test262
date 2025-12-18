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
          "name": "unsafeCast",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 26
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 27,
                "end": 28
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 27,
              "end": 28
            }
          ],
          "start": 26,
          "end": 29
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 38,
                "end": 45
              },
              "start": 36,
              "end": 45
            },
            "start": 30,
            "end": 45
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_value",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
            },
            "asserts": true,
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
                  "start": 66,
                  "end": 67
                },
                "typeArguments": null,
                "start": 66,
                "end": 67
              },
              "start": 66,
              "end": 67
            },
            "start": 48,
            "end": 67
          },
          "start": 46,
          "end": 67
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 68,
          "end": 71
        },
        "expression": false,
        "start": 7,
        "end": 71
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 71
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "yadda",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 87
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 103
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 106,
                  "end": 108
                },
                "definite": false,
                "start": 100,
                "end": 108
              }
            ],
            "declare": false,
            "start": 96,
            "end": 109
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
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 117
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 122
                },
                "optional": false,
                "computed": false,
                "start": 114,
                "end": 122
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 123,
                  "end": 126
                }
              ],
              "optional": false,
              "start": 114,
              "end": 127
            },
            "directive": null,
            "start": 114,
            "end": 127
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unsafeCast",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 142
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 143,
                    "end": 146
                  }
                ],
                "start": 142,
                "end": 147
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 151
                }
              ],
              "optional": false,
              "start": 132,
              "end": 152
            },
            "directive": null,
            "start": 132,
            "end": 153
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 168
            },
            "start": 158,
            "end": 169
          }
        ],
        "start": 90,
        "end": 171
      },
      "expression": false,
      "start": 73,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
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
    "value": "unsafeCast",
    "start": 16,
    "end": 26,
    "range": [
      16,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 38,
    "end": 45,
    "range": [
      38,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 48,
    "end": 55,
    "range": [
      48,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 56,
    "end": 62,
    "range": [
      56,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 63,
    "end": 65,
    "range": [
      63,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 73,
    "end": 81,
    "range": [
      73,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "yadda",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
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
    "value": "let",
    "start": 96,
    "end": 99,
    "range": [
      96,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 100,
    "end": 103,
    "range": [
      100,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 114,
    "end": 117,
    "range": [
      114,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 118,
    "end": 122,
    "range": [
      118,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "unsafeCast",
    "start": 132,
    "end": 142,
    "range": [
      132,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147,
    "range": [
      146,
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
    "value": "out",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 158,
    "end": 164,
    "range": [
      158,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 165,
    "end": 168,
    "range": [
      165,
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
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  }
]
```
