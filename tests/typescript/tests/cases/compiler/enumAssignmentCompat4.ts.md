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
        "name": "M",
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
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 36
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 50
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 47,
                    "end": 50
                  }
                ],
                "start": 37,
                "end": 56
              },
              "const": false,
              "declare": false,
              "start": 25,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 56
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 79
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
                          "start": 92,
                          "end": 95
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 103
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BAR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 104,
                            "end": 107
                          },
                          "optional": false,
                          "computed": false,
                          "start": 97,
                          "end": 107
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 92,
                        "end": 107
                      }
                    ],
                    "start": 82,
                    "end": 113
                  },
                  "definite": false,
                  "start": 72,
                  "end": 113
                }
              ],
              "declare": false,
              "start": 68,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 61,
            "end": 114
          }
        ],
        "start": 12,
        "end": 116
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 116
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 129
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 154
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FOO",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 168
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 165,
                    "end": 168
                  }
                ],
                "start": 155,
                "end": 174
              },
              "const": false,
              "declare": false,
              "start": 143,
              "end": 174
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 136,
            "end": 174
          },
          {
            "type": "EmptyStatement",
            "start": 174,
            "end": 175
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 198
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
                          "start": 211,
                          "end": 214
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 216,
                            "end": 222
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FOO",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 223,
                            "end": 226
                          },
                          "optional": false,
                          "computed": false,
                          "start": 216,
                          "end": 226
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 211,
                        "end": 226
                      }
                    ],
                    "start": 201,
                    "end": 232
                  },
                  "definite": false,
                  "start": 191,
                  "end": 232
                }
              ],
              "declare": false,
              "start": 187,
              "end": 233
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 180,
            "end": 233
          }
        ],
        "start": 130,
        "end": 235
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 118,
      "end": 235
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
            "name": "broken",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 247
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 265
                },
                "optional": false,
                "computed": false,
                "start": 256,
                "end": 265
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 272
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 280
                },
                "optional": false,
                "computed": false,
                "start": 271,
                "end": 280
              }
            ],
            "start": 250,
            "end": 282
          },
          "definite": false,
          "start": 241,
          "end": 282
        }
      ],
      "declare": false,
      "start": 237,
      "end": 283
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
    "value": "M",
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
    "value": "enum",
    "start": 25,
    "end": 29,
    "range": [
      25,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 47,
    "end": 50,
    "range": [
      47,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "object2",
    "start": 72,
    "end": 79,
    "range": [
      72,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 92,
    "end": 95,
    "range": [
      92,
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
    "value": "MyEnum",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "BAR",
    "start": 104,
    "end": 107,
    "range": [
      104,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
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
    "type": "Identifier",
    "value": "namespace",
    "start": 118,
    "end": 127,
    "range": [
      118,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 143,
    "end": 147,
    "range": [
      143,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 148,
    "end": 154,
    "range": [
      148,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "FOO",
    "start": 165,
    "end": 168,
    "range": [
      165,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190,
    "range": [
      187,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "object1",
    "start": 191,
    "end": 198,
    "range": [
      191,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 211,
    "end": 214,
    "range": [
      211,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 216,
    "end": 222,
    "range": [
      216,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "FOO",
    "start": 223,
    "end": 226,
    "range": [
      223,
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
    "value": ";",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 237,
    "end": 240,
    "range": [
      237,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 241,
    "end": 247,
    "range": [
      241,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "object1",
    "start": 258,
    "end": 265,
    "range": [
      258,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "object2",
    "start": 273,
    "end": 280,
    "range": [
      273,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  }
]
```
