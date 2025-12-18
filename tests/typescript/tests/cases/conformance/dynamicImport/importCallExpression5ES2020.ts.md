__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 26
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "I am B",
                        "raw": "\"I am B\"",
                        "start": 38,
                        "end": 46
                      },
                      "start": 31,
                      "end": 46
                    }
                  ],
                  "start": 29,
                  "end": 47
                },
                "expression": false,
                "start": 26,
                "end": 47
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 21,
              "end": 47
            }
          ],
          "start": 15,
          "end": 49
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 70
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 82,
                "end": 87
              },
              "start": 75,
              "end": 87
            }
          ],
          "start": 73,
          "end": 89
        },
        "expression": false,
        "start": 58,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 51,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
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
    "value": "class",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "print",
    "start": 21,
    "end": 26,
    "range": [
      21,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 31,
    "end": 37,
    "range": [
      31,
      37
    ]
  },
  {
    "type": "String",
    "value": "\"I am B\"",
    "start": 38,
    "end": 46,
    "range": [
      38,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57,
    "range": [
      51,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 58,
    "end": 66,
    "range": [
      58,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "backup",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 22
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "backup",
                "raw": "\"backup\"",
                "start": 34,
                "end": 42
              },
              "start": 27,
              "end": 43
            }
          ],
          "start": 25,
          "end": 45
        },
        "expression": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
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
    "value": "backup",
    "start": 16,
    "end": 22,
    "range": [
      16,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "String",
    "value": "\"backup\"",
    "start": 34,
    "end": 42,
    "range": [
      34,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
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
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 24,
          "end": 31
        },
        "start": 22,
        "end": 31
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 32
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
            "name": "specify",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 46
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 52
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 49,
              "end": 54
            },
            "consequent": {
              "type": "Literal",
              "value": "./0",
              "raw": "\"./0\"",
              "start": 57,
              "end": 62
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 74
            },
            "start": 49,
            "end": 74
          },
          "definite": false,
          "start": 39,
          "end": 74
        }
      ],
      "declare": false,
      "start": 33,
      "end": 75
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
            "name": "myModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 88
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Identifier",
              "decorators": [],
              "name": "specify",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 105
            },
            "options": null,
            "phase": null,
            "start": 91,
            "end": 106
          },
          "definite": false,
          "start": 80,
          "end": 106
        }
      ],
      "declare": false,
      "start": 76,
      "end": 107
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
            "name": "myModule1",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 121
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 140
            },
            "options": null,
            "phase": null,
            "start": 124,
            "end": 141
          },
          "definite": false,
          "start": 112,
          "end": 141
        }
      ],
      "declare": false,
      "start": 108,
      "end": 142
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
            "name": "myModule2",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 156
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 169
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 166,
                "end": 171
              },
              "consequent": {
                "type": "Literal",
                "value": "./1",
                "raw": "\"./1\"",
                "start": 174,
                "end": 179
              },
              "alternate": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 182,
                "end": 186
              },
              "start": 166,
              "end": 186
            },
            "options": null,
            "phase": null,
            "start": 159,
            "end": 187
          },
          "definite": false,
          "start": 147,
          "end": 187
        }
      ],
      "declare": false,
      "start": 143,
      "end": 188
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
            "name": "myModule3",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 202
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 212,
              "end": 216
            },
            "options": null,
            "phase": null,
            "start": 205,
            "end": 217
          },
          "definite": false,
          "start": 193,
          "end": 217
        }
      ],
      "declare": false,
      "start": 189,
      "end": 218
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 218
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
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 24,
    "end": 31,
    "range": [
      24,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "specify",
    "start": 39,
    "end": 46,
    "range": [
      39,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 65,
    "end": 74,
    "range": [
      65,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 76,
    "end": 79,
    "range": [
      76,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "myModule",
    "start": 80,
    "end": 88,
    "range": [
      80,
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
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "specify",
    "start": 98,
    "end": 105,
    "range": [
      98,
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
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
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
    "value": "myModule1",
    "start": 112,
    "end": 121,
    "range": [
      112,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 124,
    "end": 130,
    "range": [
      124,
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
    "type": "Identifier",
    "value": "undefined",
    "start": 131,
    "end": 140,
    "range": [
      131,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "myModule2",
    "start": 147,
    "end": 156,
    "range": [
      147,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 159,
    "end": 165,
    "range": [
      159,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 174,
    "end": 179,
    "range": [
      174,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 182,
    "end": 186,
    "range": [
      182,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "myModule3",
    "start": 193,
    "end": 202,
    "range": [
      193,
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
    "type": "Keyword",
    "value": "import",
    "start": 205,
    "end": 211,
    "range": [
      205,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 212,
    "end": 216,
    "range": [
      212,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  }
]
```
