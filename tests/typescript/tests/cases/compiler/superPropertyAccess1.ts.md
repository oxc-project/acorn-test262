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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 24
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
                "body": [],
                "start": 27,
                "end": 30
              },
              "expression": false,
              "start": 24,
              "end": 30
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 14,
            "end": 30
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 67,
                      "end": 68
                    },
                    "start": 60,
                    "end": 69
                  }
                ],
                "start": 50,
                "end": 75
              },
              "expression": false,
              "start": 47,
              "end": 75
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 35,
            "end": 75
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 91
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
                "body": [],
                "start": 94,
                "end": 97
              },
              "expression": false,
              "start": 91,
              "end": 97
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 81,
            "end": 97
          }
        ],
        "start": 8,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 135
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 148,
                          "end": 153
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 148,
                        "end": 157
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 148,
                      "end": 159
                    },
                    "directive": null,
                    "start": 148,
                    "end": 160
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 169,
                        "end": 174
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 176
                      },
                      "optional": false,
                      "computed": false,
                      "start": 169,
                      "end": 176
                    },
                    "directive": null,
                    "start": 169,
                    "end": 177
                  }
                ],
                "start": 138,
                "end": 193
              },
              "expression": false,
              "start": 135,
              "end": 193
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 125,
            "end": 193
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 214
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 227,
                        "end": 232
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 227,
                      "end": 234
                    },
                    "directive": null,
                    "start": 227,
                    "end": 235
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 244,
                          "end": 249
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 253
                        },
                        "optional": false,
                        "computed": false,
                        "start": 244,
                        "end": 253
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 244,
                      "end": 255
                    },
                    "directive": null,
                    "start": 244,
                    "end": 256
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 265,
                        "end": 270
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 272
                      },
                      "optional": false,
                      "computed": false,
                      "start": 265,
                      "end": 272
                    },
                    "directive": null,
                    "start": 265,
                    "end": 273
                  }
                ],
                "start": 217,
                "end": 289
              },
              "expression": false,
              "start": 214,
              "end": 289
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 203,
            "end": 289
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 320,
                          "end": 325
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 329
                        },
                        "optional": false,
                        "computed": false,
                        "start": 320,
                        "end": 329
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 320,
                      "end": 331
                    },
                    "directive": null,
                    "start": 320,
                    "end": 332
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 341,
                        "end": 346
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 348
                      },
                      "optional": false,
                      "computed": false,
                      "start": 341,
                      "end": 348
                    },
                    "directive": null,
                    "start": 341,
                    "end": 349
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 374,
                      "end": 375
                    },
                    "start": 367,
                    "end": 376
                  }
                ],
                "start": 310,
                "end": 382
              },
              "expression": false,
              "start": 307,
              "end": 382
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 295,
            "end": 382
          }
        ],
        "start": 119,
        "end": 384
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 384
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 384
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
    "type": "Keyword",
    "value": "public",
    "start": 14,
    "end": 20,
    "range": [
      14,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 21,
    "end": 24,
    "range": [
      21,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 35,
    "end": 41,
    "range": [
      35,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49,
    "range": [
      48,
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
    "type": "Keyword",
    "value": "return",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 88,
    "end": 91,
    "range": [
      88,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106,
    "range": [
      101,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116,
    "range": [
      109,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 132,
    "end": 135,
    "range": [
      132,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 154,
    "end": 157,
    "range": [
      154,
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
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 203,
    "end": 214,
    "range": [
      203,
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
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 227,
    "end": 232,
    "range": [
      227,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 244,
    "end": 249,
    "range": [
      244,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 250,
    "end": 253,
    "range": [
      250,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 265,
    "end": 270,
    "range": [
      265,
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
    "value": "x",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 295,
    "end": 301,
    "range": [
      295,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 320,
    "end": 325,
    "range": [
      320,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 326,
    "end": 329,
    "range": [
      326,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 341,
    "end": 346,
    "range": [
      341,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 367,
    "end": 373,
    "range": [
      367,
      373
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  }
]
```
