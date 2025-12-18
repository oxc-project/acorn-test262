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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 19,
                  "end": 26
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 14,
                "end": 26
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 31
                },
                "value": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "'world'",
                  "start": 33,
                  "end": 40
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 28,
                "end": 40
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 45
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bork",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 49,
                        "end": 53
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 57,
                              "end": 60
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "'a'",
                              "start": 62,
                              "end": 65
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 57,
                            "end": 65
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 67,
                              "end": 70
                            },
                            "value": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "'b'",
                              "start": 72,
                              "end": 75
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 67,
                            "end": 75
                          }
                        ],
                        "start": 55,
                        "end": 77
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 49,
                      "end": 77
                    }
                  ],
                  "start": 47,
                  "end": 79
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 79
              }
            ],
            "start": 12,
            "end": 81
          },
          "definite": false,
          "start": 6,
          "end": 81
        }
      ],
      "declare": false,
      "start": 0,
      "end": 82
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 95,
                      "end": 96
                    },
                    "start": 95,
                    "end": 96
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 98,
                      "end": 99
                    },
                    "start": 98,
                    "end": 99
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 101,
                      "end": 102
                    },
                    "start": 101,
                    "end": 102
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 105,
                          "end": 108
                        },
                        "start": 105,
                        "end": 108
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 110,
                          "end": 113
                        },
                        "start": 110,
                        "end": 113
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "'c'",
                          "start": 115,
                          "end": 118
                        },
                        "start": 115,
                        "end": 118
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
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
                                  "name": "def",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 122,
                                  "end": 125
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "def",
                                      "raw": "'def'",
                                      "start": 127,
                                      "end": 132
                                    },
                                    "start": 127,
                                    "end": 132
                                  },
                                  "start": 125,
                                  "end": 132
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 122,
                                "end": 132
                              }
                            ],
                            "start": 121,
                            "end": 133
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
                                  "name": "sec",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 136,
                                  "end": 139
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "sec",
                                      "raw": "'sec'",
                                      "start": 141,
                                      "end": 146
                                    },
                                    "start": 141,
                                    "end": 146
                                  },
                                  "start": 139,
                                  "end": 146
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 136,
                                "end": 146
                              }
                            ],
                            "start": 135,
                            "end": 147
                          }
                        ],
                        "start": 120,
                        "end": 148
                      }
                    ],
                    "start": 104,
                    "end": 149
                  }
                ],
                "start": 94,
                "end": 150
              },
              "start": 92,
              "end": 150
            },
            "start": 89,
            "end": 150
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 154,
                "end": 155
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 157,
                "end": 158
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 160,
                "end": 161
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 164,
                    "end": 167
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 169,
                    "end": 172
                  },
                  {
                    "type": "Literal",
                    "value": "c",
                    "raw": "'c'",
                    "start": 174,
                    "end": 177
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "def",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 181,
                              "end": 184
                            },
                            "value": {
                              "type": "Literal",
                              "value": "def",
                              "raw": "'def'",
                              "start": 186,
                              "end": 191
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 181,
                            "end": 191
                          }
                        ],
                        "start": 180,
                        "end": 192
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 195,
                              "end": 198
                            },
                            "value": {
                              "type": "Literal",
                              "value": "sec",
                              "raw": "'sec'",
                              "start": 200,
                              "end": 205
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 195,
                            "end": 205
                          }
                        ],
                        "start": 194,
                        "end": 206
                      }
                    ],
                    "start": 179,
                    "end": 207
                  }
                ],
                "start": 163,
                "end": 208
              }
            ],
            "start": 153,
            "end": 209
          },
          "definite": false,
          "start": 89,
          "end": 209
        }
      ],
      "declare": false,
      "start": 83,
      "end": 210
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 223
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 223
          },
          "exportKind": "value",
          "start": 220,
          "end": 223
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 228
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 228
          },
          "exportKind": "value",
          "start": 225,
          "end": 228
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 211,
      "end": 231
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 231
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
    "value": "foo",
    "start": 6,
    "end": 9,
    "range": [
      6,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "bar",
    "start": 14,
    "end": 17,
    "range": [
      14,
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
    "type": "String",
    "value": "'hello'",
    "start": 19,
    "end": 26,
    "range": [
      19,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "bat",
    "start": 28,
    "end": 31,
    "range": [
      28,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "String",
    "value": "'world'",
    "start": 33,
    "end": 40,
    "range": [
      33,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "bam",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "bork",
    "start": 49,
    "end": 53,
    "range": [
      49,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 72,
    "end": 75,
    "range": [
      72,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 83,
    "end": 88,
    "range": [
      83,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 110,
    "end": 113,
    "range": [
      110,
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
    "type": "String",
    "value": "'c'",
    "start": 115,
    "end": 118,
    "range": [
      115,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "String",
    "value": "'def'",
    "start": 127,
    "end": 132,
    "range": [
      127,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "sec",
    "start": 136,
    "end": 139,
    "range": [
      136,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "String",
    "value": "'sec'",
    "start": 141,
    "end": 146,
    "range": [
      141,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 169,
    "end": 172,
    "range": [
      169,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 174,
    "end": 177,
    "range": [
      174,
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
    "type": "Punctuator",
    "value": "[",
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
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 181,
    "end": 184,
    "range": [
      181,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "String",
    "value": "'def'",
    "start": 186,
    "end": 191,
    "range": [
      186,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "sec",
    "start": 195,
    "end": 198,
    "range": [
      195,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "String",
    "value": "'sec'",
    "start": 200,
    "end": 205,
    "range": [
      200,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 211,
    "end": 217,
    "range": [
      211,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 220,
    "end": 223,
    "range": [
      220,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 225,
    "end": 228,
    "range": [
      225,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "importKind": "value",
          "start": 14,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo",
        "raw": "'./foo'",
        "start": 25,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "exportKind": "value",
          "start": 43,
          "end": 46
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "exportKind": "value",
          "start": 48,
          "end": 51
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 54
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 67
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 72
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 64,
                "end": 72
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 77
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 77
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 74,
                "end": 77
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 82
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bork",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 90
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 94,
                              "end": 97
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ibar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 99,
                              "end": 103
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 94,
                            "end": 103
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 105,
                              "end": 108
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ibaz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 110,
                              "end": 114
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 105,
                            "end": 114
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 116
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 86,
                      "end": 116
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 118
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 79,
                "end": 118
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 120
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 126
          },
          "definite": false,
          "start": 62,
          "end": 126
        }
      ],
      "declare": false,
      "start": 56,
      "end": 127
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 140
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 140
          },
          "exportKind": "value",
          "start": 137,
          "end": 140
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ibaz",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 146
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ibaz",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 146
          },
          "exportKind": "value",
          "start": 142,
          "end": 146
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 128,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              {
                "type": "Identifier",
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 164
              },
              null,
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bee",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 174
                  },
                  null,
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      null,
                      {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 182,
                              "end": 185
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 182,
                              "end": 185
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 182,
                            "end": 185
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 181,
                        "end": 186
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 188
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 189
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 190
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 196
          },
          "definite": false,
          "start": 157,
          "end": 196
        }
      ],
      "declare": false,
      "start": 151,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 210
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 210
          },
          "exportKind": "value",
          "start": 207,
          "end": 210
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bee",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bee",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "exportKind": "value",
          "start": 212,
          "end": 215
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "sec",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "sec",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "exportKind": "value",
          "start": 217,
          "end": 220
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 223
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
            "name": "getFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 237
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
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
                    "start": 253,
                    "end": 256
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 258,
                    "end": 263
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 253,
                  "end": 263
                }
              ],
              "start": 247,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 240,
            "end": 266
          },
          "definite": false,
          "start": 231,
          "end": 266
        }
      ],
      "declare": false,
      "start": 225,
      "end": 267
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 280
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 286
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 277,
                "end": 286
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 288
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 297
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 291,
            "end": 299
          },
          "definite": false,
          "start": 275,
          "end": 299
        }
      ],
      "declare": false,
      "start": 269,
      "end": 300
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 314
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 314
          },
          "exportKind": "value",
          "start": 310,
          "end": 314
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 301,
      "end": 317
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 317
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
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
    "value": ",",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 14,
    "end": 17,
    "range": [
      14,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24,
    "range": [
      20,
      24
    ]
  },
  {
    "type": "String",
    "value": "'./foo'",
    "start": 25,
    "end": 32,
    "range": [
      25,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 43,
    "end": 46,
    "range": [
      43,
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
    "value": "arr",
    "start": 48,
    "end": 51,
    "range": [
      48,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61,
    "range": [
      56,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 64,
    "end": 67,
    "range": [
      64,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 69,
    "end": 72,
    "range": [
      69,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "bat",
    "start": 74,
    "end": 77,
    "range": [
      74,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "bam",
    "start": 79,
    "end": 82,
    "range": [
      79,
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
    "value": "bork",
    "start": 86,
    "end": 90,
    "range": [
      86,
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
    "value": "bar",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "ibar",
    "start": 99,
    "end": 103,
    "range": [
      99,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "ibaz",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 128,
    "end": 134,
    "range": [
      128,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 137,
    "end": 140,
    "range": [
      137,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "ibaz",
    "start": 142,
    "end": 146,
    "range": [
      142,
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
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "bee",
    "start": 171,
    "end": 174,
    "range": [
      171,
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
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Identifier",
    "value": "sec",
    "start": 182,
    "end": 185,
    "range": [
      182,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204,
    "range": [
      198,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "bee",
    "start": 212,
    "end": 215,
    "range": [
      212,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "sec",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 225,
    "end": 230,
    "range": [
      225,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "getFoo",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 243,
    "end": 245,
    "range": [
      243,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 253,
    "end": 256,
    "range": [
      253,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 258,
    "end": 263,
    "range": [
      258,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 269,
    "end": 274,
    "range": [
      269,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 277,
    "end": 280,
    "range": [
      277,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 282,
    "end": 286,
    "range": [
      282,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "getFoo",
    "start": 291,
    "end": 297,
    "range": [
      291,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 301,
    "end": 307,
    "range": [
      301,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 310,
    "end": 314,
    "range": [
      310,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  }
]
```
