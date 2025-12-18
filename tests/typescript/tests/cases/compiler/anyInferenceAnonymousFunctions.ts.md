__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "paired",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 12,
                  "end": 15
                },
                "start": 12,
                "end": 17
              },
              "start": 10,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
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
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 26
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 33
          },
          "optional": false,
          "computed": false,
          "start": 20,
          "end": 33
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 46
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 50
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
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 68
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 75
                      },
                      "optional": false,
                      "computed": false,
                      "start": 66,
                      "end": 75
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 76,
                        "end": 78
                      }
                    ],
                    "optional": false,
                    "start": 66,
                    "end": 79
                  },
                  "start": 59,
                  "end": 80
                }
              ],
              "start": 52,
              "end": 83
            },
            "expression": false,
            "start": 34,
            "end": 83
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 86,
            "end": 88
          }
        ],
        "optional": false,
        "start": 20,
        "end": 89
      },
      "directive": null,
      "start": 20,
      "end": 90
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
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 105
          },
          "optional": false,
          "computed": false,
          "start": 92,
          "end": 105
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
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 109
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 113
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
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 134
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 141
                      },
                      "optional": false,
                      "computed": false,
                      "start": 132,
                      "end": 141
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 142,
                        "end": 144
                      }
                    ],
                    "optional": false,
                    "start": 132,
                    "end": 145
                  },
                  "start": 125,
                  "end": 146
                }
              ],
              "start": 118,
              "end": 148
            },
            "id": null,
            "generator": false,
            "start": 106,
            "end": 148
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 151,
            "end": 153
          }
        ],
        "optional": false,
        "start": 92,
        "end": 154
      },
      "directive": null,
      "start": 92,
      "end": 155
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
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 163
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 170
          },
          "optional": false,
          "computed": false,
          "start": 157,
          "end": 170
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b3",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 174
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 178
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 185
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 192
                },
                "optional": false,
                "computed": false,
                "start": 183,
                "end": 192
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 193,
                  "end": 195
                }
              ],
              "optional": false,
              "start": 183,
              "end": 196
            },
            "id": null,
            "generator": false,
            "start": 171,
            "end": 196
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 198,
            "end": 200
          }
        ],
        "optional": false,
        "start": 157,
        "end": 201
      },
      "directive": null,
      "start": 157,
      "end": 202
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
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 210
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 214
          },
          "optional": false,
          "computed": false,
          "start": 204,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 218
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 225
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 231
              },
              "optional": false,
              "computed": false,
              "start": 223,
              "end": 231
            },
            "id": null,
            "generator": false,
            "start": 215,
            "end": 231
          }
        ],
        "optional": false,
        "start": 204,
        "end": 232
      },
      "directive": null,
      "start": 204,
      "end": 233
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
            "name": "paired",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 240
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 244
          },
          "optional": false,
          "computed": false,
          "start": 234,
          "end": 244
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 257
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 270
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 276
                    },
                    "optional": false,
                    "computed": false,
                    "start": 268,
                    "end": 276
                  },
                  "start": 261,
                  "end": 277
                }
              ],
              "start": 259,
              "end": 279
            },
            "expression": false,
            "start": 245,
            "end": 279
          }
        ],
        "optional": false,
        "start": 234,
        "end": 280
      },
      "directive": null,
      "start": 234,
      "end": 281
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 281
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "paired",
    "start": 4,
    "end": 10,
    "range": [
      4,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "paired",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 34,
    "end": 42,
    "range": [
      34,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 44,
    "end": 46,
    "range": [
      44,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 48,
    "end": 50,
    "range": [
      48,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 66,
    "end": 68,
    "range": [
      66,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "paired",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 99,
    "end": 105,
    "range": [
      99,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 107,
    "end": 109,
    "range": [
      107,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 115,
    "end": 117,
    "range": [
      115,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 132,
    "end": 134,
    "range": [
      132,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
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
    "value": ",",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "paired",
    "start": 157,
    "end": 163,
    "range": [
      157,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 164,
    "end": 170,
    "range": [
      164,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 172,
    "end": 174,
    "range": [
      172,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 176,
    "end": 178,
    "range": [
      176,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 180,
    "end": 182,
    "range": [
      180,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 183,
    "end": 185,
    "range": [
      183,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195,
    "range": [
      194,
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
    "value": ",",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "paired",
    "start": 204,
    "end": 210,
    "range": [
      204,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 211,
    "end": 214,
    "range": [
      211,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 216,
    "end": 218,
    "range": [
      216,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 223,
    "end": 225,
    "range": [
      223,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 226,
    "end": 231,
    "range": [
      226,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "paired",
    "start": 234,
    "end": 240,
    "range": [
      234,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 241,
    "end": 244,
    "range": [
      241,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253,
    "range": [
      245,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 255,
    "end": 257,
    "range": [
      255,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 268,
    "end": 270,
    "range": [
      268,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 271,
    "end": 276,
    "range": [
      271,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  }
]
```
