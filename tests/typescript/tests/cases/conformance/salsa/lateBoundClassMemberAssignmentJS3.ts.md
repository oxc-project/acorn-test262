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
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "_sym",
                "raw": "\"_sym\"",
                "start": 20,
                "end": 26
              }
            ],
            "optional": false,
            "start": 13,
            "end": 27
          },
          "definite": false,
          "start": 6,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 49
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
                "start": 56,
                "end": 67
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
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 84,
                            "end": 88
                          },
                          "init": {
                            "type": "ThisExpression",
                            "start": 91,
                            "end": 95
                          },
                          "definite": false,
                          "start": 84,
                          "end": 95
                        }
                      ],
                      "declare": false,
                      "start": 80,
                      "end": 95
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
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 104,
                            "end": 108
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 113
                          },
                          "optional": false,
                          "computed": true,
                          "start": 104,
                          "end": 114
                        },
                        "right": {
                          "type": "Literal",
                          "value": "ok",
                          "raw": "\"ok\"",
                          "start": 117,
                          "end": 121
                        },
                        "start": 104,
                        "end": 121
                      },
                      "directive": null,
                      "start": 104,
                      "end": 122
                    }
                  ],
                  "start": 70,
                  "end": 128
                },
                "expression": false,
                "start": 67,
                "end": 128
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 56,
              "end": 128
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 140
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
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 161
                          },
                          "init": {
                            "type": "ThisExpression",
                            "start": 164,
                            "end": 168
                          },
                          "definite": false,
                          "start": 157,
                          "end": 168
                        }
                      ],
                      "declare": false,
                      "start": 153,
                      "end": 168
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
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 177,
                            "end": 181
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 186
                          },
                          "optional": false,
                          "computed": true,
                          "start": 177,
                          "end": 187
                        },
                        "right": {
                          "type": "Literal",
                          "value": "yep",
                          "raw": "\"yep\"",
                          "start": 190,
                          "end": 195
                        },
                        "start": 177,
                        "end": 195
                      },
                      "directive": null,
                      "start": 177,
                      "end": 196
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
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 212
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 215,
                              "end": 219
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_sym",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 220,
                              "end": 224
                            },
                            "optional": false,
                            "computed": true,
                            "start": 215,
                            "end": 225
                          },
                          "definite": false,
                          "start": 211,
                          "end": 225
                        }
                      ],
                      "declare": false,
                      "start": 205,
                      "end": 226
                    }
                  ],
                  "start": 143,
                  "end": 232
                },
                "expression": false,
                "start": 140,
                "end": 232
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 134,
              "end": 232
            }
          ],
          "start": 50,
          "end": 234
        },
        "abstract": false,
        "declare": false,
        "start": 36,
        "end": 234
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 29,
      "end": 234
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 234
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
    "value": "_sym",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 13,
    "end": 19,
    "range": [
      13,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "String",
    "value": "\"_sym\"",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27,
    "range": [
      26,
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
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35,
    "range": [
      29,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 36,
    "end": 41,
    "range": [
      36,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 42,
    "end": 49,
    "range": [
      42,
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
    "value": "constructor",
    "start": 56,
    "end": 67,
    "range": [
      56,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 80,
    "end": 83,
    "range": [
      80,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 84,
    "end": 88,
    "range": [
      84,
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
    "value": "this",
    "start": 91,
    "end": 95,
    "range": [
      91,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 117,
    "end": 121,
    "range": [
      117,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 134,
    "end": 140,
    "range": [
      134,
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
    "value": "{",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 153,
    "end": 156,
    "range": [
      153,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 157,
    "end": 161,
    "range": [
      157,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 164,
    "end": 168,
    "range": [
      164,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 177,
    "end": 181,
    "range": [
      177,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 182,
    "end": 186,
    "range": [
      182,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "String",
    "value": "\"yep\"",
    "start": 190,
    "end": 195,
    "range": [
      190,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 205,
    "end": 210,
    "range": [
      205,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 215,
    "end": 219,
    "range": [
      215,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 220,
    "end": 224,
    "range": [
      220,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  }
]
```
