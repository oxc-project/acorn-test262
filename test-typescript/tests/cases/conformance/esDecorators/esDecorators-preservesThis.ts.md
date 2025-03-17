__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 706,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 164,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 103,
              "decorators": [],
              "name": "decorate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 103,
              "end": 164,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 130,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 113,
                      "end": 130,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 130,
                        "decorators": [],
                        "name": "DecoratorProvider",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 132,
                  "end": 136,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 138,
                  "end": 159,
                  "decorators": [],
                  "name": "ctx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 159,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 143,
                      "end": 159,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 159,
                        "decorators": [],
                        "name": "DecoratorContext",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 160,
                "end": 163,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 162,
                  "end": 163,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 103,
                "end": 106,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 104,
                    "end": 105,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 88,
        "decorators": [],
        "name": "DecoratorProvider",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 209,
            "decorators": [],
            "name": "instance",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 192,
                "end": 209,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 209,
                  "decorators": [],
                  "name": "DecoratorProvider",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 242,
      "end": 409,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 409,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 292,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 256,
                "end": 274,
                "expression": {
                  "type": "MemberExpression",
                  "start": 257,
                  "end": 274,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 265,
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 274,
                    "decorators": [],
                    "name": "decorate",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 286,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 292,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 292,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 339,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 298,
                "end": 321,
                "expression": {
                  "type": "MemberExpression",
                  "start": 300,
                  "end": 320,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 308,
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 309,
                    "end": 319,
                    "raw": "\"decorate\"",
                    "value": "decorate"
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 326,
              "end": 333,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 333,
              "end": 339,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 336,
                "end": 339,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 367,
            "end": 407,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 367,
                "end": 389,
                "expression": {
                  "type": "MemberExpression",
                  "start": 370,
                  "end": 387,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 378,
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 387,
                    "decorators": [],
                    "name": "decorate",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 401,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 401,
              "end": 407,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 404,
                "end": 407,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 449,
      "end": 705,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 483,
        "end": 705,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 489,
            "end": 703,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 490,
              "end": 703,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 493,
                "end": 703,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 503,
                    "end": 697,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 511,
                      "end": 697,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 525,
                          "end": 568,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [
                            {
                              "type": "Decorator",
                              "start": 525,
                              "end": 542,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 527,
                                "end": 541,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 527,
                                  "end": 532
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 533,
                                  "end": 541,
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "start": 555,
                            "end": 562,
                            "decorators": [],
                            "name": "method1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 562,
                            "end": 568,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 565,
                              "end": 568,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 582,
                          "end": 628,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [
                            {
                              "type": "Decorator",
                              "start": 582,
                              "end": 602,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 584,
                                "end": 601,
                                "computed": true,
                                "object": {
                                  "type": "Super",
                                  "start": 584,
                                  "end": 589
                                },
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "start": 590,
                                  "end": 600,
                                  "raw": "\"decorate\"",
                                  "value": "decorate"
                                }
                              }
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "start": 615,
                            "end": 622,
                            "decorators": [],
                            "name": "method2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 622,
                            "end": 628,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 625,
                              "end": 628,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 642,
                          "end": 687,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [
                            {
                              "type": "Decorator",
                              "start": 642,
                              "end": 661,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 645,
                                "end": 659,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 645,
                                  "end": 650
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 651,
                                  "end": 659,
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "start": 674,
                            "end": 681,
                            "decorators": [],
                            "name": "method3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 681,
                            "end": 687,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 684,
                              "end": 687,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 510,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 456,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 465,
        "end": 482,
        "decorators": [],
        "name": "DecoratorProvider",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
