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
        "name": "Based",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 12,
        "end": 15
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 29
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Based",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 43
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 50,
            "end": 67
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
              "start": 72,
              "end": 83
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "innver",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 108
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 130,
                            "end": 131
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 133,
                              "end": 140
                            },
                            "start": 131,
                            "end": 140
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "public",
                          "start": 123,
                          "end": 141
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
                            "start": 154,
                            "end": 165
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 186,
                                        "end": 190
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 191,
                                        "end": 192
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 186,
                                      "end": 192
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 195,
                                      "end": 199
                                    },
                                    "start": 186,
                                    "end": 199
                                  },
                                  "directive": null,
                                  "start": 186,
                                  "end": 200
                                }
                              ],
                              "start": 168,
                              "end": 214
                            },
                            "expression": false,
                            "start": 165,
                            "end": 214
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 154,
                          "end": 214
                        }
                      ],
                      "start": 109,
                      "end": 224
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 96,
                    "end": 224
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 233,
                        "end": 238
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 233,
                      "end": 240
                    },
                    "directive": null,
                    "start": 233,
                    "end": 241
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 250,
                          "end": 254
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 255,
                          "end": 256
                        },
                        "optional": false,
                        "computed": false,
                        "start": 250,
                        "end": 256
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 259,
                        "end": 261
                      },
                      "start": 250,
                      "end": 261
                    },
                    "directive": null,
                    "start": 250,
                    "end": 262
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
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 275,
                          "end": 279
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 282,
                          "end": 286
                        },
                        "definite": false,
                        "start": 275,
                        "end": 286
                      }
                    ],
                    "declare": false,
                    "start": 271,
                    "end": 287
                  }
                ],
                "start": 86,
                "end": 293
              },
              "expression": false,
              "start": 83,
              "end": 293
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 72,
            "end": 293
          }
        ],
        "start": 44,
        "end": 295
      },
      "abstract": false,
      "declare": false,
      "start": 16,
      "end": 295
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 295
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
    "value": "Based",
    "start": 6,
    "end": 11,
    "range": [
      6,
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
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 16,
    "end": 21,
    "range": [
      16,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 30,
    "end": 37,
    "range": [
      30,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "Based",
    "start": 38,
    "end": 43,
    "range": [
      38,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 72,
    "end": 83,
    "range": [
      72,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 96,
    "end": 101,
    "range": [
      96,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "innver",
    "start": 102,
    "end": 108,
    "range": [
      102,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 123,
    "end": 129,
    "range": [
      123,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 130,
    "end": 131,
    "range": [
      130,
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
    "type": "Identifier",
    "value": "boolean",
    "start": 133,
    "end": 140,
    "range": [
      133,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 154,
    "end": 165,
    "range": [
      154,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 186,
    "end": 190,
    "range": [
      186,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 195,
    "end": 199,
    "range": [
      195,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 233,
    "end": 238,
    "range": [
      233,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 259,
    "end": 261,
    "range": [
      259,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 271,
    "end": 274,
    "range": [
      271,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "that",
    "start": 275,
    "end": 279,
    "range": [
      275,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 282,
    "end": 286,
    "range": [
      282,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  }
]
```
