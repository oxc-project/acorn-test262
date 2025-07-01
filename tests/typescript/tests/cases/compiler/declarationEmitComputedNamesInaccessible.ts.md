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
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 18
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
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "localClassFieldName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 52
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 55,
                            "end": 59
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 66
                          },
                          "optional": false,
                          "computed": false,
                          "start": 55,
                          "end": 66
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 55,
                        "end": 68
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 71,
                        "end": 74
                      },
                      "start": 55,
                      "end": 74
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "g1",
                      "raw": "\"g1\"",
                      "start": 77,
                      "end": 81
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "g2",
                      "raw": "\"g2\"",
                      "start": 84,
                      "end": 88
                    },
                    "start": 55,
                    "end": 88
                  },
                  "definite": false,
                  "start": 33,
                  "end": 88
                }
              ],
              "declare": false,
              "start": 27,
              "end": 89
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
                    "name": "localOtherField",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 115
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localClassFieldName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 137
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "g1",
                        "raw": "\"g1\"",
                        "start": 142,
                        "end": 146
                      },
                      "start": 118,
                      "end": 146
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "g2",
                      "raw": "\"g2\"",
                      "start": 149,
                      "end": 153
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "g1",
                      "raw": "\"g1\"",
                      "start": 156,
                      "end": 160
                    },
                    "start": 118,
                    "end": 160
                  },
                  "definite": false,
                  "start": 100,
                  "end": 160
                }
              ],
              "declare": false,
              "start": 94,
              "end": 161
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
                    "name": "localStaticField",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 188
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 191,
                            "end": 195
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 196,
                            "end": 202
                          },
                          "optional": false,
                          "computed": false,
                          "start": 191,
                          "end": 202
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 191,
                        "end": 204
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 207,
                        "end": 210
                      },
                      "start": 191,
                      "end": 210
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "s1",
                      "raw": "\"s1\"",
                      "start": 213,
                      "end": 217
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "s2",
                      "raw": "\"s2\"",
                      "start": 220,
                      "end": 224
                    },
                    "start": 191,
                    "end": 224
                  },
                  "definite": false,
                  "start": 172,
                  "end": 224
                }
              ],
              "declare": false,
              "start": 166,
              "end": 225
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParameterizedHolder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 262
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
                        "name": "localClassFieldName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 293
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
                                "value": "value",
                                "raw": "\"value\"",
                                "start": 318,
                                "end": 325
                              },
                              "start": 311,
                              "end": 326
                            }
                          ],
                          "start": 297,
                          "end": 336
                        },
                        "expression": false,
                        "start": 294,
                        "end": 336
                      },
                      "kind": "method",
                      "computed": true,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 273,
                      "end": 336
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localOtherField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 346,
                        "end": 361
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
                                "value": 42,
                                "raw": "42",
                                "start": 386,
                                "end": 388
                              },
                              "start": 379,
                              "end": 389
                            }
                          ],
                          "start": 365,
                          "end": 399
                        },
                        "expression": false,
                        "start": 362,
                        "end": 399
                      },
                      "kind": "method",
                      "computed": true,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 345,
                      "end": 399
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 432
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
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "static",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 459,
                                      "end": 465
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 467,
                                      "end": 471
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 459,
                                    "end": 471
                                  }
                                ],
                                "start": 457,
                                "end": 473
                              },
                              "start": 450,
                              "end": 474
                            }
                          ],
                          "start": 436,
                          "end": 484
                        },
                        "expression": false,
                        "start": 433,
                        "end": 484
                      },
                      "kind": "method",
                      "computed": true,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 408,
                      "end": 484
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 517
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
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "static",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 544,
                                      "end": 550
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "sometimes",
                                      "raw": "\"sometimes\"",
                                      "start": 552,
                                      "end": 563
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 544,
                                    "end": 563
                                  }
                                ],
                                "start": 542,
                                "end": 565
                              },
                              "start": 535,
                              "end": 566
                            }
                          ],
                          "start": 521,
                          "end": 576
                        },
                        "expression": false,
                        "start": 518,
                        "end": 576
                      },
                      "kind": "method",
                      "computed": true,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 493,
                      "end": 576
                    }
                  ],
                  "start": 263,
                  "end": 582
                },
                "abstract": false,
                "declare": false,
                "start": 237,
                "end": 582
              },
              "start": 230,
              "end": 582
            }
          ],
          "start": 21,
          "end": 584
        },
        "expression": false,
        "start": 7,
        "end": 584
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 584
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 584
}
```
