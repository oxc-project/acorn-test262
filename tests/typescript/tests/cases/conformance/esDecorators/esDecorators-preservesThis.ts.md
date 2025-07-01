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
        "name": "DecoratorProvider",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 88
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
              "name": "decorate",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 103
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 104,
                      "end": 105
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 104,
                    "end": 105
                  }
                ],
                "start": 103,
                "end": 106
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DecoratorProvider",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 130
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 130
                    },
                    "start": 111,
                    "end": 130
                  },
                  "start": 107,
                  "end": 130
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 136
                    },
                    "start": 133,
                    "end": 136
                  },
                  "start": 132,
                  "end": 136
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DecoratorContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 159
                      },
                      "typeArguments": null,
                      "start": 143,
                      "end": 159
                    },
                    "start": 141,
                    "end": 159
                  },
                  "start": 138,
                  "end": 159
                }
              ],
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
                    "start": 162,
                    "end": 163
                  },
                  "typeArguments": null,
                  "start": 162,
                  "end": 163
                },
                "start": 160,
                "end": 163
              },
              "body": null,
              "expression": false,
              "start": 103,
              "end": 164
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 95,
            "end": 164
          }
        ],
        "start": 89,
        "end": 166
      },
      "abstract": false,
      "declare": true,
      "start": 57,
      "end": 166
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
            "name": "instance",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DecoratorProvider",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 209
                },
                "typeArguments": null,
                "start": 192,
                "end": 209
              },
              "start": 190,
              "end": 209
            },
            "start": 182,
            "end": 209
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 209
        }
      ],
      "declare": true,
      "start": 168,
      "end": 210
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
        "start": 248,
        "end": 249
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 265
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decorate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 274
                  },
                  "optional": false,
                  "computed": false,
                  "start": 257,
                  "end": 274
                },
                "start": 256,
                "end": 274
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 286
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
                "start": 289,
                "end": 292
              },
              "expression": false,
              "start": 286,
              "end": 292
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 292
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 308
                  },
                  "property": {
                    "type": "Literal",
                    "value": "decorate",
                    "raw": "\"decorate\"",
                    "start": 309,
                    "end": 319
                  },
                  "optional": false,
                  "computed": true,
                  "start": 300,
                  "end": 320
                },
                "start": 298,
                "end": 321
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 333
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
                "start": 336,
                "end": 339
              },
              "expression": false,
              "start": 333,
              "end": 339
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 339
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 378
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decorate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 387
                  },
                  "optional": false,
                  "computed": false,
                  "start": 370,
                  "end": 387
                },
                "start": 367,
                "end": 389
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 401
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
                "start": 404,
                "end": 407
              },
              "expression": false,
              "start": 401,
              "end": 407
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 367,
            "end": 407
          }
        ],
        "start": 250,
        "end": 409
      },
      "abstract": false,
      "declare": false,
      "start": 242,
      "end": 409
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
        "start": 455,
        "end": 456
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "DecoratorProvider",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 482
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 509,
                      "end": 510
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
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 527,
                                  "end": 532
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 533,
                                  "end": 541
                                },
                                "optional": false,
                                "computed": false,
                                "start": 527,
                                "end": 541
                              },
                              "start": 525,
                              "end": 542
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 555,
                            "end": 562
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
                              "start": 565,
                              "end": 568
                            },
                            "expression": false,
                            "start": 562,
                            "end": 568
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 525,
                          "end": 568
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 584,
                                  "end": 589
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "decorate",
                                  "raw": "\"decorate\"",
                                  "start": 590,
                                  "end": 600
                                },
                                "optional": false,
                                "computed": true,
                                "start": 584,
                                "end": 601
                              },
                              "start": 582,
                              "end": 602
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 615,
                            "end": 622
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
                              "start": 625,
                              "end": 628
                            },
                            "expression": false,
                            "start": 622,
                            "end": 628
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 582,
                          "end": 628
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 645,
                                  "end": 650
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 651,
                                  "end": 659
                                },
                                "optional": false,
                                "computed": false,
                                "start": 645,
                                "end": 659
                              },
                              "start": 642,
                              "end": 661
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 674,
                            "end": 681
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
                              "start": 684,
                              "end": 687
                            },
                            "expression": false,
                            "start": 681,
                            "end": 687
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 642,
                          "end": 687
                        }
                      ],
                      "start": 511,
                      "end": 697
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 503,
                    "end": 697
                  }
                ],
                "start": 493,
                "end": 703
              },
              "expression": false,
              "start": 490,
              "end": 703
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 489,
            "end": 703
          }
        ],
        "start": 483,
        "end": 705
      },
      "abstract": false,
      "declare": false,
      "start": 449,
      "end": 705
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 705
}
```
