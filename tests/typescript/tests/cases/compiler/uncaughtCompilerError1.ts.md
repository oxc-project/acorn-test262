__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 17
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "lineTokens",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 19,
          "end": 29
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "token",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 36
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tokens",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 44
        }
      ],
      "declare": true,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 57
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
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "lineTokens",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 70,
                            "end": 80
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 86
                          },
                          "optional": false,
                          "computed": true,
                          "start": 70,
                          "end": 87
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "trim",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 92
                        },
                        "optional": false,
                        "computed": false,
                        "start": 70,
                        "end": 92
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 70,
                      "end": 94
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "=",
                      "raw": "'='",
                      "start": 99,
                      "end": 102
                    },
                    "start": 70,
                    "end": 102
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 111
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 114,
                      "end": 115
                    },
                    "start": 106,
                    "end": 115
                  },
                  "start": 70,
                  "end": 115
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "token",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 124
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 129
                    },
                    "optional": false,
                    "computed": false,
                    "start": 119,
                    "end": 129
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 134,
                    "end": 136
                  },
                  "start": 119,
                  "end": 136
                },
                "start": 70,
                "end": 136
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokens",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 146
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 152
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 155,
                        "end": 156
                      },
                      "start": 147,
                      "end": 156
                    },
                    "optional": false,
                    "computed": true,
                    "start": 140,
                    "end": 157
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 162
                  },
                  "optional": false,
                  "computed": false,
                  "start": 140,
                  "end": 162
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "attribute.name.html",
                  "raw": "'attribute.name.html'",
                  "start": 167,
                  "end": 188
                },
                "start": 140,
                "end": 188
              },
              "start": 70,
              "end": 188
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 209
                    },
                    "operator": "===",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tokens",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 221
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 228
                        },
                        "optional": false,
                        "computed": false,
                        "start": 215,
                        "end": 228
                      },
                      "operator": "-",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 231,
                        "end": 232
                      },
                      "start": 215,
                      "end": 232
                    },
                    "start": 204,
                    "end": 233
                  },
                  "consequent": {
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
                                "name": "appendText",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 258,
                                "end": 268
                              },
                              "value": {
                                "type": "Literal",
                                "value": "\"\"",
                                "raw": "'\\\"\\\"'",
                                "start": 270,
                                "end": 276
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 258,
                              "end": 276
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "advanceCount",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 278,
                                "end": 290
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 292,
                                "end": 293
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 278,
                              "end": 293
                            }
                          ],
                          "start": 256,
                          "end": 295
                        },
                        "start": 249,
                        "end": 296
                      }
                    ],
                    "start": 235,
                    "end": 306
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 324,
                              "end": 330
                            },
                            "property": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 331,
                                "end": 336
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 339,
                                "end": 340
                              },
                              "start": 331,
                              "end": 340
                            },
                            "optional": false,
                            "computed": true,
                            "start": 324,
                            "end": 341
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 342,
                            "end": 346
                          },
                          "optional": false,
                          "computed": false,
                          "start": 324,
                          "end": 346
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": "attribute.value.html",
                          "raw": "'attribute.value.html'",
                          "start": 351,
                          "end": 373
                        },
                        "start": 324,
                        "end": 373
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tokens",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 377,
                              "end": 383
                            },
                            "property": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 384,
                                "end": 389
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 392,
                                "end": 393
                              },
                              "start": 384,
                              "end": 393
                            },
                            "optional": false,
                            "computed": true,
                            "start": 377,
                            "end": 394
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 395,
                            "end": 399
                          },
                          "optional": false,
                          "computed": false,
                          "start": 377,
                          "end": 399
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 404,
                          "end": 406
                        },
                        "start": 377,
                        "end": 406
                      },
                      "start": 324,
                      "end": 406
                    },
                    "consequent": {
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
                                  "name": "appendText",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 431,
                                  "end": 441
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "\"\"",
                                  "raw": "'\\\"\\\"'",
                                  "start": 443,
                                  "end": 449
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 431,
                                "end": 449
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "advanceCount",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 451,
                                  "end": 463
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 465,
                                  "end": 466
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 451,
                                "end": 466
                              }
                            ],
                            "start": 429,
                            "end": 468
                          },
                          "start": 422,
                          "end": 469
                        }
                      ],
                      "start": 408,
                      "end": 479
                    },
                    "alternate": null,
                    "start": 320,
                    "end": 479
                  },
                  "start": 200,
                  "end": 479
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 495,
                    "end": 499
                  },
                  "start": 488,
                  "end": 500
                }
              ],
              "start": 190,
              "end": 506
            },
            "alternate": null,
            "start": 66,
            "end": 506
          }
        ],
        "start": 60,
        "end": 508
      },
      "expression": false,
      "start": 47,
      "end": 508
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 508
}
```
