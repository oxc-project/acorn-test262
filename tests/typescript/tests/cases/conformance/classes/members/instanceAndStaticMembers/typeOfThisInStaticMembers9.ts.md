__ESTREE_TEST__:PASS:
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 26
          }
        ],
        "start": 8,
        "end": 28
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 28
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
        "start": 36,
        "end": 37
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
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
              "name": "arrowFunctionBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 82
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 91,
                    "end": 96
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 98
                  },
                  "optional": false,
                  "computed": false,
                  "start": 91,
                  "end": 98
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 101,
                  "end": 102
                },
                "start": 91,
                "end": 102
              },
              "id": null,
              "generator": false,
              "start": 85,
              "end": 102
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 54,
            "end": 103
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "functionExprBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 135
            },
            "typeAnnotation": null,
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 159,
                          "end": 164
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 166
                        },
                        "optional": false,
                        "computed": false,
                        "start": 159,
                        "end": 166
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 169,
                        "end": 170
                      },
                      "start": 159,
                      "end": 170
                    },
                    "start": 152,
                    "end": 170
                  }
                ],
                "start": 150,
                "end": 172
              },
              "expression": false,
              "start": 138,
              "end": 172
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 108,
            "end": 173
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classExprBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 202
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 217,
                          "end": 222
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 223,
                          "end": 224
                        },
                        "optional": false,
                        "computed": false,
                        "start": 217,
                        "end": 224
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 227,
                        "end": 228
                      },
                      "start": 217,
                      "end": 228
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 213,
                    "end": 228
                  }
                ],
                "start": 211,
                "end": 230
              },
              "abstract": false,
              "declare": false,
              "start": 205,
              "end": 230
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 178,
            "end": 231
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "functionAndClassDeclBoundary",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 271
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 303
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
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 328,
                                  "end": 333
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 334,
                                  "end": 335
                                },
                                "optional": false,
                                "computed": false,
                                "start": 328,
                                "end": 335
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 338,
                                "end": 339
                              },
                              "start": 328,
                              "end": 339
                            },
                            "start": 321,
                            "end": 339
                          }
                        ],
                        "start": 307,
                        "end": 349
                      },
                      "expression": false,
                      "start": 291,
                      "end": 349
                    },
                    {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 364,
                        "end": 365
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 380,
                              "end": 381
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 384,
                                  "end": 389
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 390,
                                  "end": 391
                                },
                                "optional": false,
                                "computed": false,
                                "start": 384,
                                "end": 391
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 5,
                                "raw": "5",
                                "start": 394,
                                "end": 395
                              },
                              "start": 384,
                              "end": 395
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 380,
                            "end": 395
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 408,
                              "end": 414
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
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Super",
                                          "start": 443,
                                          "end": 448
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "f",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 449,
                                          "end": 450
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 443,
                                        "end": 450
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "value": 6,
                                        "raw": "6",
                                        "start": 452,
                                        "end": 453
                                      },
                                      "start": 443,
                                      "end": 453
                                    },
                                    "start": 436,
                                    "end": 453
                                  }
                                ],
                                "start": 418,
                                "end": 467
                              },
                              "expression": false,
                              "start": 415,
                              "end": 467
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 408,
                            "end": 467
                          }
                        ],
                        "start": 366,
                        "end": 477
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 358,
                      "end": 477
                    }
                  ],
                  "start": 281,
                  "end": 483
                },
                "id": null,
                "generator": false,
                "start": 275,
                "end": 483
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 274,
              "end": 486
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 236,
            "end": 487
          }
        ],
        "start": 48,
        "end": 489
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 489
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 489
}
```
