__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnvFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 33
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 37,
              "end": 38
            }
          ],
          "start": 36,
          "end": 39
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "typeArguments": null,
            "start": 45,
            "end": 46
          },
          "start": 42,
          "end": 46
        },
        "start": 36,
        "end": 46
      },
      "declare": false,
      "start": 17,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SimpleType",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 64
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 67,
            "end": 73
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 83
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SimpleType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 94
                  },
                  "typeArguments": null,
                  "start": 84,
                  "end": 94
                }
              ],
              "start": 83,
              "end": 95
            },
            "start": 76,
            "end": 95
          }
        ],
        "start": 67,
        "end": 95
      },
      "declare": false,
      "start": 49,
      "end": 96
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
            "name": "simple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SimpleType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 130
                },
                "typeArguments": null,
                "start": 120,
                "end": 130
              },
              "start": 118,
              "end": 130
            },
            "start": 112,
            "end": 130
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 130
        }
      ],
      "declare": true,
      "start": 98,
      "end": 131
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
            "name": "env",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EnvFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 155
                },
                "typeArguments": null,
                "start": 144,
                "end": 155
              },
              "start": 142,
              "end": 155
            },
            "start": 139,
            "end": 155
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "simple",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 170
            },
            "id": null,
            "generator": false,
            "start": 158,
            "end": 170
          },
          "definite": false,
          "start": 139,
          "end": 170
        }
      ],
      "declare": false,
      "start": 133,
      "end": 171
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 197
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 200,
              "end": 201
            },
            "start": 200,
            "end": 201
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 211
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
                    "start": 212,
                    "end": 214
                  },
                  "typeArguments": null,
                  "start": 212,
                  "end": 214
                }
              ],
              "start": 211,
              "end": 215
            },
            "start": 204,
            "end": 215
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 220
              },
              "typeArguments": null,
              "start": 218,
              "end": 220
            },
            "start": 218,
            "end": 222
          }
        ],
        "start": 200,
        "end": 222
      },
      "declare": false,
      "start": 190,
      "end": 223
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 257
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
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
                  "start": 265,
                  "end": 267
                },
                "typeArguments": null,
                "start": 265,
                "end": 267
              },
              "start": 263,
              "end": 267
            },
            "start": 258,
            "end": 267
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
                    "name": "awaited",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 286
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 300
                    },
                    "start": 289,
                    "end": 300
                  },
                  "definite": false,
                  "start": 279,
                  "end": 300
                }
              ],
              "declare": false,
              "start": 273,
              "end": 300
            }
          ],
          "start": 269,
          "end": 302
        },
        "expression": false,
        "start": 232,
        "end": 302
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 225,
      "end": 302
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EffectResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 338
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EffectResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 364
                },
                "typeArguments": null,
                "start": 352,
                "end": 364
              },
              "start": 349,
              "end": 364
            },
            "start": 346,
            "end": 364
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 377
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EffectResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 390
                  },
                  "typeArguments": null,
                  "start": 378,
                  "end": 390
                }
              ],
              "start": 377,
              "end": 391
            },
            "start": 370,
            "end": 391
          }
        ],
        "start": 343,
        "end": 391
      },
      "declare": false,
      "start": 321,
      "end": 392
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "handleEffectResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 416,
          "end": 434
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EffectResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 455
                },
                "typeArguments": null,
                "start": 443,
                "end": 455
              },
              "start": 441,
              "end": 455
            },
            "start": 435,
            "end": 455
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 471
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 491
                },
                "start": 465,
                "end": 491
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "handleEffectResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 505,
                          "end": 523
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 524,
                              "end": 530
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 524,
                            "end": 532
                          }
                        ],
                        "optional": false,
                        "start": 505,
                        "end": 533
                      },
                      "start": 499,
                      "end": 533
                    },
                    "directive": null,
                    "start": 499,
                    "end": 534
                  }
                ],
                "start": 493,
                "end": 538
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 554
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 573
                  },
                  "start": 548,
                  "end": 573
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "handleEffectResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 587,
                            "end": 605
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 612,
                                "end": 618
                              },
                              "start": 606,
                              "end": 618
                            }
                          ],
                          "optional": false,
                          "start": 587,
                          "end": 619
                        },
                        "start": 581,
                        "end": 619
                      },
                      "directive": null,
                      "start": 581,
                      "end": 620
                    }
                  ],
                  "start": 575,
                  "end": 624
                },
                "alternate": null,
                "start": 544,
                "end": 624
              },
              "start": 461,
              "end": 624
            }
          ],
          "start": 457,
          "end": 626
        },
        "expression": false,
        "start": 401,
        "end": 626
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 394,
      "end": 626
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 17,
  "end": 626
}
```
