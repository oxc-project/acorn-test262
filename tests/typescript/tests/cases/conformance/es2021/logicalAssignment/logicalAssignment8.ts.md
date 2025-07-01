__ESTREE_TEST__:PASS:
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 21,
                          "end": 26
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 29,
                              "end": 35
                            },
                            "start": 29,
                            "end": 37
                          },
                          "start": 27,
                          "end": 37
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 21,
                        "end": 37
                      }
                    ],
                    "start": 19,
                    "end": 39
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 42,
                    "end": 51
                  }
                ],
                "start": 19,
                "end": 51
              },
              "start": 17,
              "end": 51
            },
            "start": 14,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 51
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 76,
                    "end": 82
                  },
                  "start": 76,
                  "end": 84
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 87,
                  "end": 96
                }
              ],
              "start": 76,
              "end": 96
            },
            "start": 74,
            "end": 96
          },
          "start": 67,
          "end": 96
        }
      ],
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
                  "type": "AssignmentExpression",
                  "operator": "||=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 112
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 127
                        },
                        "optional": true,
                        "computed": false,
                        "start": 117,
                        "end": 127
                      },
                      "start": 117,
                      "end": 127
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 131,
                      "end": 133
                    },
                    "start": 117,
                    "end": 133
                  },
                  "start": 105,
                  "end": 133
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 139
                },
                "optional": false,
                "computed": false,
                "start": 104,
                "end": 139
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 140,
                  "end": 143
                }
              ],
              "optional": false,
              "start": 104,
              "end": 144
            },
            "directive": null,
            "start": 104,
            "end": 145
          }
        ],
        "start": 98,
        "end": 147
      },
      "expression": false,
      "start": 53,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 172,
                    "end": 178
                  },
                  "start": 172,
                  "end": 180
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 183,
                  "end": 192
                }
              ],
              "start": 172,
              "end": 192
            },
            "start": 170,
            "end": 192
          },
          "start": 163,
          "end": 192
        }
      ],
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
                  "type": "AssignmentExpression",
                  "operator": "??=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 208
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 216
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 218,
                          "end": 223
                        },
                        "optional": true,
                        "computed": false,
                        "start": 213,
                        "end": 223
                      },
                      "start": 213,
                      "end": 223
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 227,
                      "end": 229
                    },
                    "start": 213,
                    "end": 229
                  },
                  "start": 201,
                  "end": 229
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 235
                },
                "optional": false,
                "computed": false,
                "start": 200,
                "end": 235
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 236,
                  "end": 239
                }
              ],
              "optional": false,
              "start": 200,
              "end": 240
            },
            "directive": null,
            "start": 200,
            "end": 241
          }
        ],
        "start": 194,
        "end": 243
      },
      "expression": false,
      "start": 149,
      "end": 243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 258
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 268,
                    "end": 274
                  },
                  "start": 268,
                  "end": 276
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 279,
                  "end": 288
                }
              ],
              "start": 268,
              "end": 288
            },
            "start": 266,
            "end": 288
          },
          "start": 259,
          "end": 288
        }
      ],
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
                  "type": "AssignmentExpression",
                  "operator": "&&=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 304
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 309,
                          "end": 312
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 319
                        },
                        "optional": true,
                        "computed": false,
                        "start": 309,
                        "end": 319
                      },
                      "start": 309,
                      "end": 319
                    },
                    "operator": "??",
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 323,
                      "end": 325
                    },
                    "start": 309,
                    "end": 325
                  },
                  "start": 297,
                  "end": 325
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 331
                },
                "optional": false,
                "computed": false,
                "start": 296,
                "end": 331
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 332,
                  "end": 335
                }
              ],
              "optional": false,
              "start": 296,
              "end": 336
            },
            "directive": null,
            "start": 296,
            "end": 337
          }
        ],
        "start": 290,
        "end": 339
      },
      "expression": false,
      "start": 245,
      "end": 339
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 339
}
```
