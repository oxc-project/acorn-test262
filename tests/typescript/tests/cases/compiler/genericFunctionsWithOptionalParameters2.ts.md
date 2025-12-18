__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Utils",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fold",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 26,
                    "end": 27
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 26,
                  "end": 27
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 29,
                  "end": 30
                }
              ],
              "start": 25,
              "end": 31
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 40
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 41,
                            "end": 42
                          },
                          "typeArguments": null,
                          "start": 41,
                          "end": 42
                        }
                      ],
                      "start": 40,
                      "end": 43
                    },
                    "start": 35,
                    "end": 43
                  },
                  "start": 33,
                  "end": 43
                },
                "start": 32,
                "end": 43
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "folder",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 58,
                              "end": 59
                            },
                            "typeArguments": null,
                            "start": 58,
                            "end": 59
                          },
                          "start": 56,
                          "end": 59
                        },
                        "start": 55,
                        "end": 59
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
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
                              "start": 64,
                              "end": 65
                            },
                            "typeArguments": null,
                            "start": 64,
                            "end": 65
                          },
                          "start": 62,
                          "end": 65
                        },
                        "start": 61,
                        "end": 65
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 70,
                          "end": 71
                        },
                        "typeArguments": null,
                        "start": 70,
                        "end": 71
                      },
                      "start": 67,
                      "end": 71
                    },
                    "start": 54,
                    "end": 71
                  },
                  "start": 52,
                  "end": 71
                },
                "start": 45,
                "end": 71
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 81
                    },
                    "typeArguments": null,
                    "start": 80,
                    "end": 81
                  },
                  "start": 78,
                  "end": 81
                },
                "start": 73,
                "end": 81
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 82,
              "end": 85
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 21,
            "end": 86
          }
        ],
        "start": 16,
        "end": 88
      },
      "declare": false,
      "start": 0,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "utils",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 106
                },
                "typeArguments": null,
                "start": 101,
                "end": 106
              },
              "start": 99,
              "end": 106
            },
            "start": 94,
            "end": 106
          },
          "init": null,
          "definite": false,
          "start": 94,
          "end": 106
        }
      ],
      "declare": false,
      "start": 90,
      "end": 107
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 119
          },
          "optional": false,
          "computed": false,
          "start": 109,
          "end": 119
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 109,
        "end": 121
      },
      "directive": null,
      "start": 109,
      "end": 122
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 137
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 142
          },
          "optional": false,
          "computed": false,
          "start": 132,
          "end": 142
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 143,
            "end": 147
          }
        ],
        "optional": false,
        "start": 132,
        "end": 148
      },
      "directive": null,
      "start": 132,
      "end": 149
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 167
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 172
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 172
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 173,
            "end": 177
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 179,
            "end": 183
          }
        ],
        "optional": false,
        "start": 162,
        "end": 184
      },
      "directive": null,
      "start": 162,
      "end": 185
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 203
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "optional": false,
          "computed": false,
          "start": 198,
          "end": 208
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 209,
            "end": 213
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 215,
            "end": 219
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 221,
            "end": 225
          }
        ],
        "optional": false,
        "start": 198,
        "end": 226
      },
      "directive": null,
      "start": 198,
      "end": 227
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 283
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Utils",
    "start": 10,
    "end": 15,
    "range": [
      10,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 35,
    "end": 40,
    "range": [
      35,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "folder",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 73,
    "end": 77,
    "range": [
      73,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93,
    "range": [
      90,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "utils",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "Utils",
    "start": 101,
    "end": 106,
    "range": [
      101,
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
    "type": "Identifier",
    "value": "utils",
    "start": 109,
    "end": 114,
    "range": [
      109,
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
    "value": "fold",
    "start": 115,
    "end": 119,
    "range": [
      115,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "utils",
    "start": 132,
    "end": 137,
    "range": [
      132,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 138,
    "end": 142,
    "range": [
      138,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 143,
    "end": 147,
    "range": [
      143,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "utils",
    "start": 162,
    "end": 167,
    "range": [
      162,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 168,
    "end": 172,
    "range": [
      168,
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
    "type": "Null",
    "value": "null",
    "start": 173,
    "end": 177,
    "range": [
      173,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 179,
    "end": 183,
    "range": [
      179,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "utils",
    "start": 198,
    "end": 203,
    "range": [
      198,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 204,
    "end": 208,
    "range": [
      204,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 209,
    "end": 213,
    "range": [
      209,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 215,
    "end": 219,
    "range": [
      215,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 221,
    "end": 225,
    "range": [
      221,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  }
]
```
