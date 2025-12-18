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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSSymbolKeyword",
                "start": 19,
                "end": 25
              },
              "start": 19,
              "end": 27
            },
            "start": 17,
            "end": 27
          },
          "value": null,
          "start": 13,
          "end": 27
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 29,
        "end": 32
      },
      "expression": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 53
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 64
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 103
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 105,
                              "end": 111
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 105,
                            "end": 113
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 98,
                          "end": 113
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 127,
                            "end": 131
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 133,
                            "end": 138
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 127,
                          "end": 138
                        }
                      ],
                      "start": 84,
                      "end": 148
                    },
                    "start": 77,
                    "end": 149
                  }
                ],
                "start": 67,
                "end": 155
              },
              "expression": false,
              "start": 64,
              "end": 155
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 60,
            "end": 155
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 168
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 162,
              "end": 177
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
                      "type": "ThisExpression",
                      "start": 198,
                      "end": 202
                    },
                    "start": 191,
                    "end": 203
                  }
                ],
                "start": 181,
                "end": 209
              },
              "expression": false,
              "start": 178,
              "end": 209
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 161,
            "end": 209
          }
        ],
        "start": 54,
        "end": 211
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 216
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "SymbolIterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 238
              },
              "typeArguments": null,
              "arguments": [],
              "start": 220,
              "end": 238
            },
            "start": 217,
            "end": 238
          }
        ],
        "optional": false,
        "start": 213,
        "end": 239
      },
      "directive": null,
      "start": 213,
      "end": 240
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 13,
    "end": 16,
    "range": [
      13,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "SymbolIterator",
    "start": 39,
    "end": 53,
    "range": [
      39,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 60,
    "end": 64,
    "range": [
      60,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 77,
    "end": 83,
    "range": [
      77,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 98,
    "end": 103,
    "range": [
      98,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ",",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 127,
    "end": 131,
    "range": [
      127,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 133,
    "end": 138,
    "range": [
      133,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
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
    "value": "iterator",
    "start": 169,
    "end": 177,
    "range": [
      169,
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
    "value": "(",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 198,
    "end": 202,
    "range": [
      198,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 213,
    "end": 216,
    "range": [
      213,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 220,
    "end": 223,
    "range": [
      220,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "SymbolIterator",
    "start": 224,
    "end": 238,
    "range": [
      224,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  }
]
```
