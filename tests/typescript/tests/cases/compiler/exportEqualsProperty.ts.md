__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 92
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 96
        },
        "start": 89,
        "end": 96
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 116
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              },
              "declare": false,
              "start": 110,
              "end": 126
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 103,
            "end": 126
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 147,
                        "end": 153
                      },
                      "start": 145,
                      "end": 153
                    },
                    "start": 144,
                    "end": 153
                  },
                  "init": null,
                  "definite": false,
                  "start": 144,
                  "end": 153
                }
              ],
              "declare": false,
              "start": 138,
              "end": 154
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 131,
            "end": 154
          }
        ],
        "start": 97,
        "end": 156
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 71,
      "end": 156
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foobar",
        "raw": "\"foobar\"",
        "start": 173,
        "end": 181
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 200
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 204
              },
              "optional": false,
              "computed": false,
              "start": 197,
              "end": 204
            },
            "start": 188,
            "end": 205
          }
        ],
        "start": 182,
        "end": 207
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 158,
      "end": 207
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foobarx",
        "raw": "\"foobarx\"",
        "start": 224,
        "end": 233
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 252
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 256
                },
                "optional": false,
                "computed": false,
                "start": 249,
                "end": 256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "optional": false,
              "computed": false,
              "start": 249,
              "end": 258
            },
            "start": 240,
            "end": 259
          }
        ],
        "start": 234,
        "end": 261
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 209,
      "end": 261
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 71,
  "end": 262
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 71,
    "end": 78,
    "range": [
      71,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 79,
    "end": 88,
    "range": [
      79,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 93,
    "end": 96,
    "range": [
      93,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 119,
    "end": 125,
    "range": [
      119,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 131,
    "end": 137,
    "range": [
      131,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143,
    "range": [
      138,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 158,
    "end": 165,
    "range": [
      158,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 166,
    "end": 172,
    "range": [
      166,
      172
    ]
  },
  {
    "type": "String",
    "value": "\"foobar\"",
    "start": 173,
    "end": 181,
    "range": [
      173,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 201,
    "end": 204,
    "range": [
      201,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 217,
    "end": 223,
    "range": [
      217,
      223
    ]
  },
  {
    "type": "String",
    "value": "\"foobarx\"",
    "start": 224,
    "end": 233,
    "range": [
      224,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 249,
    "end": 252,
    "range": [
      249,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 253,
    "end": 256,
    "range": [
      253,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
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
                "start": 31,
                "end": 32
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 46
                    },
                    "value": {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 50,
                              "end": 56
                            },
                            "start": 48,
                            "end": 56
                          },
                          "start": 47,
                          "end": 56
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 58,
                        "end": 60
                      },
                      "expression": false,
                      "start": 46,
                      "end": 60
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 35,
                    "end": 60
                  }
                ],
                "start": 33,
                "end": 62
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 62
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              },
                              "start": 102,
                              "end": 110
                            },
                            "start": 101,
                            "end": 110
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 113,
                            "end": 114
                          },
                          "definite": false,
                          "start": 101,
                          "end": 114
                        }
                      ],
                      "declare": false,
                      "start": 95,
                      "end": 115
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 88,
                    "end": 115
                  }
                ],
                "start": 86,
                "end": 117
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 74,
              "end": 117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 67,
            "end": 117
          }
        ],
        "start": 12,
        "end": 119
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 119
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 130
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 132
        },
        "optional": false,
        "computed": false,
        "start": 129,
        "end": 132
      },
      "start": 120,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30,
    "range": [
      25,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 35,
    "end": 46,
    "range": [
      35,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 74,
    "end": 83,
    "range": [
      74,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 88,
    "end": 94,
    "range": [
      88,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 95,
    "end": 100,
    "range": [
      95,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 120,
    "end": 126,
    "range": [
      120,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
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
      "type": "TSExportAssignment",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 9,
          "end": 14
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 15,
          "end": 21
        },
        "optional": false,
        "computed": false,
        "start": 9,
        "end": 21
      },
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 23
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
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 9,
    "end": 14,
    "range": [
      9,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
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
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "importKind": "value",
          "start": 52,
          "end": 53
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foobar",
        "raw": "\"foobar\"",
        "start": 61,
        "end": 69
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 43,
      "end": 70
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 80
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "foobarx",
          "raw": "\"foobarx\"",
          "start": 91,
          "end": 100
        },
        "start": 83,
        "end": 101
      },
      "importKind": "value",
      "start": 71,
      "end": 102
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "typeArguments": null,
                "start": 112,
                "end": 113
              },
              "start": 110,
              "end": 113
            },
            "start": 109,
            "end": 113
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "definite": false,
          "start": 109,
          "end": 117
        }
      ],
      "declare": false,
      "start": 103,
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 131
                },
                "typeArguments": null,
                "start": 129,
                "end": 131
              },
              "start": 127,
              "end": 131
            },
            "start": 125,
            "end": 131
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "X2",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 136
          },
          "definite": false,
          "start": 125,
          "end": 136
        }
      ],
      "declare": false,
      "start": 119,
      "end": 137
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./a",
          "raw": "\"./a\"",
          "start": 158,
          "end": 163
        },
        "start": 150,
        "end": 164
      },
      "importKind": "value",
      "start": 139,
      "end": 165
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "typeArguments": null,
                "start": 175,
                "end": 176
              },
              "start": 173,
              "end": 176
            },
            "start": 172,
            "end": 176
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 188
                },
                "optional": false,
                "computed": false,
                "start": 185,
                "end": 188
              }
            ],
            "start": 179,
            "end": 189
          },
          "definite": false,
          "start": 172,
          "end": 189
        }
      ],
      "declare": false,
      "start": 166,
      "end": 190
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 208
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./b",
          "raw": "\"./b\"",
          "start": 219,
          "end": 224
        },
        "start": 211,
        "end": 225
      },
      "importKind": "value",
      "start": 192,
      "end": 226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 236
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 239,
          "end": 240
        },
        "start": 227,
        "end": 240
      },
      "directive": null,
      "start": 227,
      "end": 241
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 43,
  "end": 241
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
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
    "value": "\"foobar\"",
    "start": 61,
    "end": 69,
    "range": [
      61,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 78,
    "end": 80,
    "range": [
      78,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 83,
    "end": 90,
    "range": [
      83,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "String",
    "value": "\"foobarx\"",
    "start": 91,
    "end": 100,
    "range": [
      91,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 103,
    "end": 108,
    "range": [
      103,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 109,
    "end": 110,
    "range": [
      109,
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
    "type": "Identifier",
    "value": "X",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 119,
    "end": 124,
    "range": [
      119,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 125,
    "end": 127,
    "range": [
      125,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 129,
    "end": 131,
    "range": [
      129,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 134,
    "end": 136,
    "range": [
      134,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 150,
    "end": 157,
    "range": [
      150,
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
    "type": "String",
    "value": "\"./a\"",
    "start": 158,
    "end": 163,
    "range": [
      158,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 166,
    "end": 171,
    "range": [
      166,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 175,
    "end": 176,
    "range": [
      175,
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
    "type": "Keyword",
    "value": "new",
    "start": 179,
    "end": 182,
    "range": [
      179,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 192,
    "end": 198,
    "range": [
      192,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "fooLength",
    "start": 199,
    "end": 208,
    "range": [
      199,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 211,
    "end": 218,
    "range": [
      211,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "String",
    "value": "\"./b\"",
    "start": 219,
    "end": 224,
    "range": [
      219,
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
    "value": ";",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "fooLength",
    "start": 227,
    "end": 236,
    "range": [
      227,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  }
]
```
