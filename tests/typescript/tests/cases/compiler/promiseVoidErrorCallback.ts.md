__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 32
          }
        ],
        "start": 13,
        "end": 34
      },
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 48
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              },
              "start": 59,
              "end": 67
            },
            "accessibility": null,
            "static": false,
            "start": 55,
            "end": 68
          }
        ],
        "start": 49,
        "end": 70
      },
      "declare": false,
      "start": 36,
      "end": 70
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 84
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
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
            "start": 91,
            "end": 104
          }
        ],
        "start": 85,
        "end": 106
      },
      "declare": false,
      "start": 72,
      "end": 106
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 119
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 130
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 133
                },
                "typeArguments": null,
                "start": 131,
                "end": 133
              }
            ],
            "start": 130,
            "end": 134
          },
          "start": 123,
          "end": 134
        },
        "start": 121,
        "end": 134
      },
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
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 155
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 163
                },
                "optional": false,
                "computed": false,
                "start": 148,
                "end": 163
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__t1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 170
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo_t1",
                        "raw": "\"foo_t1\"",
                        "start": 172,
                        "end": 180
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 166,
                      "end": 180
                    }
                  ],
                  "start": 164,
                  "end": 182
                }
              ],
              "optional": false,
              "start": 148,
              "end": 183
            },
            "start": 141,
            "end": 184
          }
        ],
        "start": 135,
        "end": 186
      },
      "expression": false,
      "start": 108,
      "end": 186
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 199
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 203,
                "end": 205
              },
              "typeArguments": null,
              "start": 203,
              "end": 205
            },
            "start": 201,
            "end": 205
          },
          "start": 200,
          "end": 205
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 210
          },
          "typeArguments": null,
          "start": 208,
          "end": 210
        },
        "start": 206,
        "end": 210
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 230
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 232,
                        "end": 233
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__t1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 238
                      },
                      "optional": false,
                      "computed": false,
                      "start": 232,
                      "end": 238
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": ":foo_21",
                      "raw": "\":foo_21\"",
                      "start": 241,
                      "end": 250
                    },
                    "start": 232,
                    "end": 250
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 226,
                  "end": 250
                }
              ],
              "start": 224,
              "end": 252
            },
            "start": 217,
            "end": 253
          }
        ],
        "start": 211,
        "end": 255
      },
      "expression": false,
      "start": 188,
      "end": 255
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 263
          },
          "init": {
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
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 268
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 266,
                    "end": 270
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 280
                  },
                  "optional": false,
                  "computed": false,
                  "start": 266,
                  "end": 280
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 283
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 289,
                              "end": 294
                            },
                            "typeArguments": null,
                            "start": 289,
                            "end": 294
                          },
                          "start": 287,
                          "end": 294
                        },
                        "start": 286,
                        "end": 294
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 312
                          },
                          "start": 305,
                          "end": 313
                        }
                      ],
                      "start": 299,
                      "end": 315
                    },
                    "id": null,
                    "generator": false,
                    "start": 285,
                    "end": 315
                  }
                ],
                "optional": false,
                "start": 266,
                "end": 316
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 326
              },
              "optional": false,
              "computed": false,
              "start": 266,
              "end": 326
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
                    "name": "x",
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
                          "start": 331,
                          "end": 333
                        },
                        "typeArguments": null,
                        "start": 331,
                        "end": 333
                      },
                      "start": 329,
                      "end": 333
                    },
                    "start": 328,
                    "end": 333
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "__t3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 353,
                              "end": 357
                            },
                            "value": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 359,
                                  "end": 360
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "__t2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 361,
                                  "end": 365
                                },
                                "optional": false,
                                "computed": false,
                                "start": 359,
                                "end": 365
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 368,
                                "end": 373
                              },
                              "start": 359,
                              "end": 373
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 353,
                            "end": 373
                          }
                        ],
                        "start": 351,
                        "end": 375
                      },
                      "start": 344,
                      "end": 376
                    }
                  ],
                  "start": 338,
                  "end": 378
                },
                "id": null,
                "generator": false,
                "start": 327,
                "end": 378
              }
            ],
            "optional": false,
            "start": 266,
            "end": 379
          },
          "definite": false,
          "start": 261,
          "end": 379
        }
      ],
      "declare": false,
      "start": 257,
      "end": 380
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 380
}
```
