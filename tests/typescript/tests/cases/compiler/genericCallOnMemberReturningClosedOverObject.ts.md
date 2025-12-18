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
        "name": "example",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 73
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 76
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 76
          }
        ],
        "start": 73,
        "end": 77
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 98,
                        "end": 101
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 104,
                                "end": 106
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 104,
                              "end": 106
                            }
                          ],
                          "start": 103,
                          "end": 107
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 112,
                                  "end": 114
                                },
                                "typeArguments": null,
                                "start": 112,
                                "end": 114
                              },
                              "start": 110,
                              "end": 114
                            },
                            "start": 108,
                            "end": 114
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 120
                        },
                        "id": null,
                        "generator": false,
                        "start": 103,
                        "end": 120
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 98,
                      "end": 120
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 129
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 136,
                                  "end": 138
                                },
                                "typeArguments": null,
                                "start": 136,
                                "end": 138
                              },
                              "start": 134,
                              "end": 138
                            },
                            "start": 132,
                            "end": 138
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 144
                        },
                        "id": null,
                        "generator": false,
                        "start": 131,
                        "end": 144
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 126,
                      "end": 144
                    }
                  ],
                  "start": 92,
                  "end": 149
                },
                "definite": false,
                "start": 88,
                "end": 149
              }
            ],
            "declare": false,
            "start": 84,
            "end": 150
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 161
            },
            "start": 153,
            "end": 162
          }
        ],
        "start": 80,
        "end": 164
      },
      "expression": false,
      "start": 57,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "example",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 173
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 174,
                      "end": 180
                    }
                  ],
                  "start": 173,
                  "end": 181
                },
                "arguments": [],
                "optional": false,
                "start": 166,
                "end": 183
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 187
              },
              "optional": false,
              "computed": false,
              "start": 166,
              "end": 187
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 188,
                "end": 195
              }
            ],
            "optional": false,
            "start": 166,
            "end": 196
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 200
          },
          "optional": false,
          "computed": false,
          "start": 166,
          "end": 200
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 201,
            "end": 202
          }
        ],
        "optional": false,
        "start": 166,
        "end": 203
      },
      "directive": null,
      "start": 166,
      "end": 204
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 204
}
```
__ESTREE_TEST__:TOKENS:
```json
[
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
    "value": "example",
    "start": 66,
    "end": 73,
    "range": [
      66,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 74,
    "end": 76,
    "range": [
      74,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 84,
    "end": 87,
    "range": [
      84,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 104,
    "end": 106,
    "range": [
      104,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107,
    "range": [
      106,
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
    "type": "Identifier",
    "value": "t2",
    "start": 108,
    "end": 110,
    "range": [
      108,
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
    "value": "T2",
    "start": 112,
    "end": 114,
    "range": [
      112,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 116,
    "end": 118,
    "range": [
      116,
      118
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
    "value": ",",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 126,
    "end": 129,
    "range": [
      126,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 132,
    "end": 134,
    "range": [
      132,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 136,
    "end": 138,
    "range": [
      136,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
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
    "type": "Identifier",
    "value": "example",
    "start": 166,
    "end": 173,
    "range": [
      166,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 174,
    "end": 180,
    "range": [
      174,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 184,
    "end": 187,
    "range": [
      184,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 188,
    "end": 195,
    "range": [
      188,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  }
]
```
