__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MemberName",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 50
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 52,
                    "end": 53
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 54,
                    "end": 55
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 57
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 51,
                "end": 58
              },
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
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 81
                    },
                    "value": {
                      "type": "FunctionExpression",
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 82,
                              "end": 83
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 82,
                            "end": 83
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 84,
                              "end": 85
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 84,
                            "end": 85
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 86,
                              "end": 87
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 86,
                            "end": 87
                          }
                        ],
                        "start": 81,
                        "end": 88
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 95,
                              "end": 98
                            },
                            "start": 93,
                            "end": 98
                          },
                          "start": 89,
                          "end": 98
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 107,
                              "end": 110
                            },
                            "start": 105,
                            "end": 110
                          },
                          "start": 100,
                          "end": 110
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg3",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 119,
                              "end": 122
                            },
                            "start": 117,
                            "end": 122
                          },
                          "start": 112,
                          "end": 122
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MemberName",
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
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 136,
                        "end": 147
                      },
                      "expression": false,
                      "start": 81,
                      "end": 147
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 68,
                    "end": 147
                  }
                ],
                "start": 58,
                "end": 153
              },
              "abstract": false,
              "declare": false,
              "start": 34,
              "end": 153
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 153
          }
        ],
        "start": 21,
        "end": 155
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 155
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 178
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 208
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 210,
                    "end": 211
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 212,
                    "end": 213
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 215
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 214,
                    "end": 215
                  }
                ],
                "start": 209,
                "end": 216
              },
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 237
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PullTypeSymbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 253
                        },
                        "typeArguments": null,
                        "start": 239,
                        "end": 253
                      },
                      "start": 237,
                      "end": 253
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 256,
                      "end": 260
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 226,
                    "end": 261
                  }
                ],
                "start": 216,
                "end": 267
              },
              "abstract": false,
              "declare": false,
              "start": 192,
              "end": 267
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 185,
            "end": 267
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 299
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 301,
                      "end": 302
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 301,
                    "end": 302
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 304
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 303,
                    "end": 304
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 305,
                    "end": 306
                  }
                ],
                "start": 300,
                "end": 307
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 325
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
                      "name": "_elementType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 344,
                      "end": 356
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PullTypeSymbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 372
                        },
                        "typeArguments": null,
                        "start": 358,
                        "end": 372
                      },
                      "start": 356,
                      "end": 372
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 375,
                      "end": 379
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 336,
                    "end": 380
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 404
                    },
                    "value": {
                      "type": "FunctionExpression",
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 405,
                              "end": 406
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 405,
                            "end": 406
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 407,
                              "end": 408
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 407,
                            "end": 408
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 409,
                              "end": 410
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 409,
                            "end": 410
                          }
                        ],
                        "start": 404,
                        "end": 411
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeSymbol",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PullSymbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 426,
                                "end": 436
                              },
                              "typeArguments": null,
                              "start": 426,
                              "end": 436
                            },
                            "start": 424,
                            "end": 436
                          },
                          "start": 412,
                          "end": 436
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "useConstraintInName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 460,
                              "end": 467
                            },
                            "start": 458,
                            "end": 467
                          },
                          "start": 438,
                          "end": 467
                        }
                      ],
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
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 487,
                                  "end": 488
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
                                          "type": "ThisExpression",
                                          "start": 491,
                                          "end": 495
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "getScopedNameEx",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 496,
                                          "end": 511
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 491,
                                        "end": 511
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "scopeSymbol",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 512,
                                          "end": 523
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "useConstraintInName",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 525,
                                          "end": 544
                                        }
                                      ],
                                      "optional": false,
                                      "start": 491,
                                      "end": 545
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "toString",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 546,
                                      "end": 554
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 491,
                                    "end": 554
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 491,
                                  "end": 556
                                },
                                "definite": false,
                                "start": 487,
                                "end": 556
                              }
                            ],
                            "declare": false,
                            "start": 483,
                            "end": 557
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 577,
                              "end": 578
                            },
                            "start": 570,
                            "end": 579
                          }
                        ],
                        "start": 469,
                        "end": 589
                      },
                      "expression": false,
                      "start": 404,
                      "end": 589
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 389,
                    "end": 589
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getScopedNameEx",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 620
                    },
                    "value": {
                      "type": "FunctionExpression",
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 621,
                              "end": 622
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 621,
                            "end": 622
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 623,
                              "end": 624
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 623,
                            "end": 624
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 625,
                              "end": 626
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 625,
                            "end": 626
                          }
                        ],
                        "start": 620,
                        "end": 627
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scopeSymbol",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PullSymbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 642,
                                "end": 652
                              },
                              "typeArguments": null,
                              "start": 642,
                              "end": 652
                            },
                            "start": 640,
                            "end": 652
                          },
                          "start": 628,
                          "end": 652
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "useConstraintInName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 676,
                              "end": 683
                            },
                            "start": 674,
                            "end": 683
                          },
                          "start": 654,
                          "end": 683
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getPrettyTypeName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 705,
                              "end": 712
                            },
                            "start": 703,
                            "end": 712
                          },
                          "start": 685,
                          "end": 712
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getTypeParamMarkerInfo",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 739,
                              "end": 746
                            },
                            "start": 737,
                            "end": 746
                          },
                          "start": 714,
                          "end": 746
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 766,
                                  "end": 770
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 771,
                                  "end": 778
                                },
                                "optional": false,
                                "computed": false,
                                "start": 766,
                                "end": 778
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 766,
                              "end": 780
                            },
                            "consequent": {
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
                                        "name": "elementMemberName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 804,
                                        "end": 821
                                      },
                                      "init": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 824,
                                            "end": 828
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_elementType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 829,
                                            "end": 841
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 824,
                                          "end": 841
                                        },
                                        "consequent": {
                                          "type": "ConditionalExpression",
                                          "test": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 861,
                                                    "end": 865
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "_elementType",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 866,
                                                    "end": 878
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 861,
                                                  "end": 878
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "isArray",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 879,
                                                  "end": 886
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 861,
                                                "end": 886
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false,
                                              "start": 861,
                                              "end": 888
                                            },
                                            "operator": "||",
                                            "right": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 892,
                                                    "end": 896
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "_elementType",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 897,
                                                    "end": 909
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 892,
                                                  "end": 909
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "isNamedTypeSymbol",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 910,
                                                  "end": 927
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 892,
                                                "end": 927
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false,
                                              "start": 892,
                                              "end": 929
                                            },
                                            "start": 861,
                                            "end": 929
                                          },
                                          "consequent": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 948,
                                                  "end": 952
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "_elementType",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 953,
                                                  "end": 965
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 948,
                                                "end": 965
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getScopedNameEx",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 966,
                                                "end": 981
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 948,
                                              "end": 981
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeSymbol",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 982,
                                                "end": 993
                                              },
                                              {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false",
                                                "start": 995,
                                                "end": 1000
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPrettyTypeName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1002,
                                                "end": 1019
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getTypeParamMarkerInfo",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1021,
                                                "end": 1043
                                              }
                                            ],
                                            "optional": false,
                                            "start": 948,
                                            "end": 1044
                                          },
                                          "alternate": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 1063,
                                                  "end": 1067
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "_elementType",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1068,
                                                  "end": 1080
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1063,
                                                "end": 1080
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getMemberTypeNameEx",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1081,
                                                "end": 1100
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1063,
                                              "end": 1100
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false",
                                                "start": 1101,
                                                "end": 1106
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeSymbol",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1108,
                                                "end": 1119
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPrettyTypeName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1121,
                                                "end": 1138
                                              }
                                            ],
                                            "optional": false,
                                            "start": 1063,
                                            "end": 1139
                                          },
                                          "start": 861,
                                          "end": 1139
                                        },
                                        "alternate": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 1143,
                                          "end": 1144
                                        },
                                        "start": 824,
                                        "end": 1144
                                      },
                                      "definite": false,
                                      "start": 804,
                                      "end": 1144
                                    }
                                  ],
                                  "declare": false,
                                  "start": 800,
                                  "end": 1144
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "MemberName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1168,
                                        "end": 1178
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "create",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1179,
                                        "end": 1185
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1168,
                                      "end": 1185
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "elementMemberName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1186,
                                        "end": 1203
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "\"\"",
                                        "start": 1205,
                                        "end": 1207
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "[]",
                                        "raw": "\"[]\"",
                                        "start": 1209,
                                        "end": 1213
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1168,
                                    "end": 1214
                                  },
                                  "start": 1161,
                                  "end": 1215
                                }
                              ],
                              "start": 782,
                              "end": 1229
                            },
                            "alternate": null,
                            "start": 762,
                            "end": 1229
                          }
                        ],
                        "start": 748,
                        "end": 1239
                      },
                      "expression": false,
                      "start": 620,
                      "end": 1239
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 598,
                    "end": 1239
                  }
                ],
                "start": 326,
                "end": 1245
              },
              "abstract": false,
              "declare": false,
              "start": 279,
              "end": 1245
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 272,
            "end": 1245
          }
        ],
        "start": 179,
        "end": 1247
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 158,
      "end": 1247
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1249
}
```
