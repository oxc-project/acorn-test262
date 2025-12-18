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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 32,
                          "end": 33
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          },
                          "start": 33,
                          "end": 41
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 32,
                        "end": 41
                      }
                    ],
                    "start": 30,
                    "end": 43
                  }
                ],
                "start": 18,
                "end": 43
              },
              "start": 16,
              "end": 43
            },
            "start": 14,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 47
          },
          "property": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 50,
            "end": 53
          },
          "optional": true,
          "computed": true,
          "start": 45,
          "end": 54
        },
        "start": 45,
        "end": 54
      },
      "directive": null,
      "start": 45,
      "end": 55
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 75,
                    "end": 84
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 89,
                          "end": 90
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 94,
                                  "end": 95
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 97,
                                    "end": 103
                                  },
                                  "start": 95,
                                  "end": 103
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 94,
                                "end": 103
                              }
                            ],
                            "start": 92,
                            "end": 105
                          },
                          "start": 90,
                          "end": 105
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 89,
                        "end": 105
                      }
                    ],
                    "start": 87,
                    "end": 107
                  }
                ],
                "start": 75,
                "end": 107
              },
              "start": 73,
              "end": 107
            },
            "start": 71,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 107
        }
      ],
      "declare": true,
      "start": 57,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 111
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 114,
              "end": 117
            },
            "optional": true,
            "computed": true,
            "start": 109,
            "end": 118
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 109,
          "end": 120
        },
        "start": 109,
        "end": 120
      },
      "directive": null,
      "start": 109,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 124
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 127
            },
            "optional": true,
            "computed": false,
            "start": 122,
            "end": 127
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 128,
            "end": 131
          },
          "optional": false,
          "computed": true,
          "start": 122,
          "end": 132
        },
        "start": 122,
        "end": 132
      },
      "directive": null,
      "start": 122,
      "end": 133
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 156
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 158,
                            "end": 167
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 172,
                                  "end": 173
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 175,
                                    "end": 181
                                  },
                                  "start": 173,
                                  "end": 181
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 172,
                                "end": 181
                              }
                            ],
                            "start": 170,
                            "end": 183
                          }
                        ],
                        "start": 158,
                        "end": 183
                      },
                      "start": 156,
                      "end": 183
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 155,
                    "end": 183
                  }
                ],
                "start": 153,
                "end": 185
              },
              "start": 151,
              "end": 185
            },
            "start": 149,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 149,
          "end": 185
        }
      ],
      "declare": true,
      "start": 135,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 189
            },
            "property": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 190,
              "end": 193
            },
            "optional": false,
            "computed": true,
            "start": 187,
            "end": 194
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "optional": true,
          "computed": false,
          "start": 187,
          "end": 197
        },
        "start": 187,
        "end": 197
      },
      "directive": null,
      "start": 187,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 201
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "optional": false,
            "computed": false,
            "start": 199,
            "end": 203
          },
          "property": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 206,
            "end": 209
          },
          "optional": true,
          "computed": true,
          "start": 199,
          "end": 210
        },
        "start": 199,
        "end": 210
      },
      "directive": null,
      "start": 199,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
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
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 14,
    "end": 16,
    "range": [
      14,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 18,
    "end": 27,
    "range": [
      18,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "string",
    "start": 35,
    "end": 41,
    "range": [
      35,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 45,
    "end": 47,
    "range": [
      45,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 47,
    "end": 49,
    "range": [
      47,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 50,
    "end": 53,
    "range": [
      50,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 71,
    "end": 73,
    "range": [
      71,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 75,
    "end": 84,
    "range": [
      75,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "c",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103,
    "range": [
      97,
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
    "value": "}",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 109,
    "end": 111,
    "range": [
      109,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 114,
    "end": 117,
    "range": [
      114,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 122,
    "end": 124,
    "range": [
      122,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 124,
    "end": 126,
    "range": [
      124,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 135,
    "end": 142,
    "range": [
      135,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148,
    "range": [
      143,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 158,
    "end": 167,
    "range": [
      158,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "string",
    "start": 175,
    "end": 181,
    "range": [
      175,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 187,
    "end": 189,
    "range": [
      187,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 190,
    "end": 193,
    "range": [
      190,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 194,
    "end": 196,
    "range": [
      194,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 199,
    "end": 201,
    "range": [
      199,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 203,
    "end": 205,
    "range": [
      203,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  }
]
```
