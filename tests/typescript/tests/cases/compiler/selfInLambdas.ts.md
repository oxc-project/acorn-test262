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
        "name": "MouseEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 37
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 52
          }
        ],
        "start": 21,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 54
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
            "name": "window",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 82
                },
                "typeArguments": null,
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "start": 68,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 82
        }
      ],
      "declare": true,
      "start": 56,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 100
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
              "name": "onmousemove",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ev",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MouseEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 135
                        },
                        "typeArguments": null,
                        "start": 125,
                        "end": 135
                      },
                      "start": 123,
                      "end": 135
                    },
                    "start": 121,
                    "end": 135
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 140,
                    "end": 143
                  },
                  "start": 137,
                  "end": 143
                },
                "start": 120,
                "end": 143
              },
              "start": 118,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 107,
            "end": 144
          }
        ],
        "start": 101,
        "end": 151
      },
      "declare": false,
      "start": 84,
      "end": 151
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 157
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
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 174
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 176,
                  "end": 177
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 167,
                "end": 177
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 189
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 213,
                              "end": 219
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "onmousemove",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 220,
                              "end": 231
                            },
                            "optional": false,
                            "computed": false,
                            "start": 213,
                            "end": 231
                          },
                          "right": {
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
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 254,
                                        "end": 258
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "counter",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 259,
                                        "end": 266
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 254,
                                      "end": 266
                                    },
                                    "start": 254,
                                    "end": 268
                                  },
                                  "directive": null,
                                  "start": 254,
                                  "end": 268
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
                                        "name": "f",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 285,
                                        "end": 286
                                      },
                                      "init": {
                                        "type": "ArrowFunctionExpression",
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
                                        "body": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 295,
                                            "end": 299
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "counter",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 300,
                                            "end": 307
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 295,
                                          "end": 307
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 289,
                                        "end": 307
                                      },
                                      "definite": false,
                                      "start": 285,
                                      "end": 307
                                    }
                                  ],
                                  "declare": false,
                                  "start": 281,
                                  "end": 308
                                }
                              ],
                              "start": 240,
                              "end": 319
                            },
                            "id": null,
                            "generator": false,
                            "start": 234,
                            "end": 319
                          },
                          "start": 213,
                          "end": 319
                        },
                        "directive": null,
                        "start": 213,
                        "end": 319
                      }
                    ],
                    "start": 202,
                    "end": 326
                  },
                  "expression": false,
                  "start": 191,
                  "end": 326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 184,
                "end": 326
              }
            ],
            "start": 160,
            "end": 329
          },
          "definite": false,
          "start": 156,
          "end": 329
        }
      ],
      "declare": false,
      "start": 152,
      "end": 329
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 340
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 357
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "value",
              "raw": "\"value\"",
              "start": 360,
              "end": 367
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 344,
            "end": 368
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 381
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "outer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 397
                        },
                        "init": {
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
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 423,
                                      "end": 424
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 427,
                                        "end": 431
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 432,
                                        "end": 437
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 427,
                                      "end": 437
                                    },
                                    "definite": false,
                                    "start": 423,
                                    "end": 437
                                  }
                                ],
                                "declare": false,
                                "start": 419,
                                "end": 438
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
                                      "name": "inner",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 455,
                                      "end": 460
                                    },
                                    "init": {
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
                                            "type": "VariableDeclaration",
                                            "kind": "var",
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "y",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 491,
                                                  "end": 492
                                                },
                                                "init": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 495,
                                                    "end": 499
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "value",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 500,
                                                    "end": 505
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 495,
                                                  "end": 505
                                                },
                                                "definite": false,
                                                "start": 491,
                                                "end": 505
                                              }
                                            ],
                                            "declare": false,
                                            "start": 487,
                                            "end": 506
                                          }
                                        ],
                                        "start": 469,
                                        "end": 511
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 463,
                                      "end": 511
                                    },
                                    "definite": false,
                                    "start": 455,
                                    "end": 511
                                  }
                                ],
                                "declare": false,
                                "start": 451,
                                "end": 511
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 516,
                                    "end": 521
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 516,
                                  "end": 523
                                },
                                "directive": null,
                                "start": 516,
                                "end": 524
                              }
                            ],
                            "start": 405,
                            "end": 529
                          },
                          "id": null,
                          "generator": false,
                          "start": 399,
                          "end": 529
                        },
                        "definite": false,
                        "start": 392,
                        "end": 529
                      }
                    ],
                    "declare": false,
                    "start": 388,
                    "end": 530
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 538
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 533,
                      "end": 540
                    },
                    "directive": null,
                    "start": 533,
                    "end": 541
                  }
                ],
                "start": 384,
                "end": 544
              },
              "expression": false,
              "start": 381,
              "end": 544
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 371,
            "end": 544
          }
        ],
        "start": 341,
        "end": 547
      },
      "abstract": false,
      "declare": false,
      "start": 333,
      "end": 547
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 547
}
```
