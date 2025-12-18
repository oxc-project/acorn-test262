__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 39,
                      "end": 44
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 47,
                      "end": 49
                    },
                    "expression": false,
                    "start": 30,
                    "end": 49
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
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 62
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": true,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 83,
                                  "end": 88
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 89,
                                  "end": 94
                                },
                                "optional": false,
                                "computed": false,
                                "start": 83,
                                "end": 94
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 95,
                                  "end": 99
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arguments",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 101,
                                  "end": 110
                                }
                              ],
                              "optional": false,
                              "start": 83,
                              "end": 111
                            },
                            "start": 77,
                            "end": 111
                          },
                          "id": null,
                          "generator": false,
                          "start": 65,
                          "end": 111
                        },
                        "definite": false,
                        "start": 60,
                        "end": 111
                      }
                    ],
                    "declare": false,
                    "start": 56,
                    "end": 112
                  }
                ],
                "start": 22,
                "end": 117
              },
              "expression": false,
              "start": 19,
              "end": 117
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 13,
            "end": 117
          }
        ],
        "start": 8,
        "end": 119
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 131
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
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": true,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 179
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 186
                  },
                  "optional": false,
                  "computed": false,
                  "start": 170,
                  "end": 186
                },
                "id": null,
                "generator": false,
                "start": 158,
                "end": 186
              },
              "id": null,
              "generator": false,
              "start": 146,
              "end": 186
            },
            "start": 139,
            "end": 187
          }
        ],
        "start": 134,
        "end": 189
      },
      "expression": false,
      "start": 121,
      "end": 189
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
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
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 30,
    "end": 38,
    "range": [
      30,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 39,
    "end": 44,
    "range": [
      39,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 60,
    "end": 62,
    "range": [
      60,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 74,
    "end": 76,
    "range": [
      74,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 83,
    "end": 88,
    "range": [
      83,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 89,
    "end": 94,
    "range": [
      89,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 95,
    "end": 99,
    "range": [
      95,
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
    "type": "Identifier",
    "value": "arguments",
    "start": 101,
    "end": 110,
    "range": [
      101,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
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
    "value": "function",
    "start": 121,
    "end": 129,
    "range": [
      121,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
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
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 155,
    "end": 157,
    "range": [
      155,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 158,
    "end": 163,
    "range": [
      158,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 167,
    "end": 169,
    "range": [
      167,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 170,
    "end": 179,
    "range": [
      170,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  }
]
```
