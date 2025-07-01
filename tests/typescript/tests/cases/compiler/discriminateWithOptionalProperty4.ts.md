__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 77
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    },
                    "start": 81,
                    "end": 89
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 92,
                    "end": 101
                  }
                ],
                "start": 81,
                "end": 101
              },
              "start": 79,
              "end": 101
            },
            "start": 78,
            "end": 101
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 114
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 118
                    },
                    "consequent": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 123,
                            "end": 124
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 123,
                            "end": 124
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 123,
                          "end": 124
                        }
                      ],
                      "start": 121,
                      "end": 126
                    },
                    "alternate": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 131,
                            "end": 132
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "there",
                                "raw": "\"there\"",
                                "start": 135,
                                "end": 142
                              }
                            ],
                            "start": 134,
                            "end": 143
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 131,
                          "end": 143
                        }
                      ],
                      "start": 129,
                      "end": 145
                    },
                    "start": 117,
                    "end": 145
                  },
                  "definite": false,
                  "start": 113,
                  "end": 145
                }
              ],
              "declare": false,
              "start": 107,
              "end": 146
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 151
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 153
                  },
                  "optional": false,
                  "computed": false,
                  "start": 150,
                  "end": 153
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 166
                      },
                      "optional": false,
                      "computed": false,
                      "start": 163,
                      "end": 166
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 175
                    },
                    "optional": false,
                    "computed": false,
                    "start": 163,
                    "end": 175
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 163,
                  "end": 177
                },
                "alternate": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 185
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 186,
                        "end": 187
                      },
                      "optional": false,
                      "computed": false,
                      "start": 184,
                      "end": 187
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 196
                    },
                    "optional": false,
                    "computed": false,
                    "start": 184,
                    "end": 196
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 184,
                  "end": 198
                },
                "start": 150,
                "end": 198
              },
              "directive": null,
              "start": 150,
              "end": 199
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
                    "name": "zWorkAround",
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
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 230,
                                  "end": 231
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 233,
                                      "end": 239
                                    },
                                    "start": 233,
                                    "end": 241
                                  },
                                  "start": 231,
                                  "end": 241
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 230,
                                "end": 242
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 243,
                                  "end": 244
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUndefinedKeyword",
                                    "start": 247,
                                    "end": 256
                                  },
                                  "start": 245,
                                  "end": 256
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 243,
                                "end": 256
                              }
                            ],
                            "start": 228,
                            "end": 258
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
                                  "start": 267,
                                  "end": 268
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 270,
                                      "end": 276
                                    },
                                    "start": 270,
                                    "end": 278
                                  },
                                  "start": 268,
                                  "end": 278
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 267,
                                "end": 279
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 280,
                                  "end": 281
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUndefinedKeyword",
                                    "start": 284,
                                    "end": 293
                                  },
                                  "start": 282,
                                  "end": 293
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 280,
                                "end": 293
                              }
                            ],
                            "start": 265,
                            "end": 295
                          }
                        ],
                        "start": 226,
                        "end": 295
                      },
                      "start": 220,
                      "end": 295
                    },
                    "start": 209,
                    "end": 295
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 299
                  },
                  "definite": false,
                  "start": 209,
                  "end": 299
                }
              ],
              "declare": false,
              "start": 203,
              "end": 300
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zWorkAround",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 315
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 317
                  },
                  "optional": false,
                  "computed": false,
                  "start": 304,
                  "end": 317
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zWorkAround",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 320,
                        "end": 331
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 333
                      },
                      "optional": false,
                      "computed": false,
                      "start": 320,
                      "end": 333
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 342
                    },
                    "optional": false,
                    "computed": false,
                    "start": 320,
                    "end": 342
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 320,
                  "end": 344
                },
                "alternate": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zWorkAround",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 358
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 359,
                        "end": 360
                      },
                      "optional": false,
                      "computed": false,
                      "start": 347,
                      "end": 360
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 369
                    },
                    "optional": false,
                    "computed": false,
                    "start": 347,
                    "end": 369
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 347,
                  "end": 371
                },
                "start": 304,
                "end": 371
              },
              "directive": null,
              "start": 304,
              "end": 372
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 376,
                    "end": 379
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 384
                  },
                  "start": 376,
                  "end": 384
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 388
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 390
                      },
                      "optional": false,
                      "computed": false,
                      "start": 387,
                      "end": 390
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 399
                    },
                    "optional": false,
                    "computed": false,
                    "start": 387,
                    "end": 399
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 387,
                  "end": 401
                },
                "alternate": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 404,
                        "end": 405
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 407
                      },
                      "optional": false,
                      "computed": false,
                      "start": 404,
                      "end": 407
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 416
                    },
                    "optional": false,
                    "computed": false,
                    "start": 404,
                    "end": 416
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 404,
                  "end": 418
                },
                "start": 376,
                "end": 418
              },
              "directive": null,
              "start": 376,
              "end": 419
            }
          ],
          "start": 103,
          "end": 421
        },
        "expression": false,
        "start": 64,
        "end": 421
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 421
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 421
}
```
