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
        "start": 7,
        "end": 17
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
                "start": 37,
                "end": 47
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
                      "start": 49,
                      "end": 50
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 49,
                    "end": 50
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 52
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 51,
                    "end": 52
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 54
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 53,
                    "end": 54
                  }
                ],
                "start": 48,
                "end": 55
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
                      "start": 72,
                      "end": 78
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
                              "start": 79,
                              "end": 80
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 79,
                            "end": 80
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 81,
                              "end": 82
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 81,
                            "end": 82
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 83,
                              "end": 84
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 83,
                            "end": 84
                          }
                        ],
                        "start": 78,
                        "end": 85
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
                              "start": 92,
                              "end": 95
                            },
                            "start": 90,
                            "end": 95
                          },
                          "start": 86,
                          "end": 95
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
                              "start": 104,
                              "end": 107
                            },
                            "start": 102,
                            "end": 107
                          },
                          "start": 97,
                          "end": 107
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
                              "start": 116,
                              "end": 119
                            },
                            "start": 114,
                            "end": 119
                          },
                          "start": 109,
                          "end": 119
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
                            "start": 122,
                            "end": 132
                          },
                          "typeArguments": null,
                          "start": 122,
                          "end": 132
                        },
                        "start": 120,
                        "end": 132
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 133,
                        "end": 144
                      },
                      "expression": false,
                      "start": 78,
                      "end": 144
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 65,
                    "end": 144
                  }
                ],
                "start": 55,
                "end": 150
              },
              "abstract": false,
              "declare": false,
              "start": 31,
              "end": 150
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 150
          }
        ],
        "start": 18,
        "end": 152
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 152
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 172
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
                "start": 192,
                "end": 202
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
                      "start": 204,
                      "end": 205
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 204,
                    "end": 205
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 207
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 206,
                    "end": 207
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 209
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 208,
                    "end": 209
                  }
                ],
                "start": 203,
                "end": 210
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
                      "start": 227,
                      "end": 231
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
                          "start": 233,
                          "end": 247
                        },
                        "typeArguments": null,
                        "start": 233,
                        "end": 247
                      },
                      "start": 231,
                      "end": 247
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 250,
                      "end": 254
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 220,
                    "end": 255
                  }
                ],
                "start": 210,
                "end": 261
              },
              "abstract": false,
              "declare": false,
              "start": 186,
              "end": 261
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 179,
            "end": 261
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
                "start": 279,
                "end": 293
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
                      "start": 295,
                      "end": 296
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 295,
                    "end": 296
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 298
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 297,
                    "end": 298
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 299,
                    "end": 300
                  }
                ],
                "start": 294,
                "end": 301
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 319
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
                      "start": 338,
                      "end": 350
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
                          "start": 352,
                          "end": 366
                        },
                        "typeArguments": null,
                        "start": 352,
                        "end": 366
                      },
                      "start": 350,
                      "end": 366
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 369,
                      "end": 373
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 330,
                    "end": 374
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
                      "start": 390,
                      "end": 398
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
                              "start": 399,
                              "end": 400
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 399,
                            "end": 400
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 402
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 401,
                            "end": 402
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 403,
                              "end": 404
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 403,
                            "end": 404
                          }
                        ],
                        "start": 398,
                        "end": 405
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
                                "start": 420,
                                "end": 430
                              },
                              "typeArguments": null,
                              "start": 420,
                              "end": 430
                            },
                            "start": 418,
                            "end": 430
                          },
                          "start": 406,
                          "end": 430
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
                              "start": 454,
                              "end": 461
                            },
                            "start": 452,
                            "end": 461
                          },
                          "start": 432,
                          "end": 461
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
                                  "start": 481,
                                  "end": 482
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
                                          "start": 485,
                                          "end": 489
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "getScopedNameEx",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 490,
                                          "end": 505
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 485,
                                        "end": 505
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "scopeSymbol",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 506,
                                          "end": 517
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "useConstraintInName",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 519,
                                          "end": 538
                                        }
                                      ],
                                      "optional": false,
                                      "start": 485,
                                      "end": 539
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "toString",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 540,
                                      "end": 548
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 485,
                                    "end": 548
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 485,
                                  "end": 550
                                },
                                "definite": false,
                                "start": 481,
                                "end": 550
                              }
                            ],
                            "declare": false,
                            "start": 477,
                            "end": 551
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 571,
                              "end": 572
                            },
                            "start": 564,
                            "end": 573
                          }
                        ],
                        "start": 463,
                        "end": 583
                      },
                      "expression": false,
                      "start": 398,
                      "end": 583
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 383,
                    "end": 583
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
                      "start": 599,
                      "end": 614
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
                              "start": 615,
                              "end": 616
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 615,
                            "end": 616
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 617,
                              "end": 618
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 617,
                            "end": 618
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 619,
                              "end": 620
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 619,
                            "end": 620
                          }
                        ],
                        "start": 614,
                        "end": 621
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
                                "start": 636,
                                "end": 646
                              },
                              "typeArguments": null,
                              "start": 636,
                              "end": 646
                            },
                            "start": 634,
                            "end": 646
                          },
                          "start": 622,
                          "end": 646
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
                              "start": 670,
                              "end": 677
                            },
                            "start": 668,
                            "end": 677
                          },
                          "start": 648,
                          "end": 677
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
                              "start": 699,
                              "end": 706
                            },
                            "start": 697,
                            "end": 706
                          },
                          "start": 679,
                          "end": 706
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
                              "start": 733,
                              "end": 740
                            },
                            "start": 731,
                            "end": 740
                          },
                          "start": 708,
                          "end": 740
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
                                  "start": 760,
                                  "end": 764
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 765,
                                  "end": 772
                                },
                                "optional": false,
                                "computed": false,
                                "start": 760,
                                "end": 772
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 760,
                              "end": 774
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
                                        "start": 798,
                                        "end": 815
                                      },
                                      "init": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 818,
                                            "end": 822
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_elementType",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 823,
                                            "end": 835
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 818,
                                          "end": 835
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
                                                    "start": 855,
                                                    "end": 859
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "_elementType",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 860,
                                                    "end": 872
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 855,
                                                  "end": 872
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "isArray",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 873,
                                                  "end": 880
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 855,
                                                "end": 880
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false,
                                              "start": 855,
                                              "end": 882
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
                                                    "start": 886,
                                                    "end": 890
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "_elementType",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 891,
                                                    "end": 903
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 886,
                                                  "end": 903
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "isNamedTypeSymbol",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 904,
                                                  "end": 921
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 886,
                                                "end": 921
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false,
                                              "start": 886,
                                              "end": 923
                                            },
                                            "start": 855,
                                            "end": 923
                                          },
                                          "consequent": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 942,
                                                  "end": 946
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "_elementType",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 947,
                                                  "end": 959
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 942,
                                                "end": 959
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getScopedNameEx",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 960,
                                                "end": 975
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 942,
                                              "end": 975
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeSymbol",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 976,
                                                "end": 987
                                              },
                                              {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false",
                                                "start": 989,
                                                "end": 994
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPrettyTypeName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 996,
                                                "end": 1013
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getTypeParamMarkerInfo",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1015,
                                                "end": 1037
                                              }
                                            ],
                                            "optional": false,
                                            "start": 942,
                                            "end": 1038
                                          },
                                          "alternate": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 1057,
                                                  "end": 1061
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "_elementType",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1062,
                                                  "end": 1074
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1057,
                                                "end": 1074
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getMemberTypeNameEx",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1075,
                                                "end": 1094
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1057,
                                              "end": 1094
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false",
                                                "start": 1095,
                                                "end": 1100
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "scopeSymbol",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1102,
                                                "end": 1113
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPrettyTypeName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1115,
                                                "end": 1132
                                              }
                                            ],
                                            "optional": false,
                                            "start": 1057,
                                            "end": 1133
                                          },
                                          "start": 855,
                                          "end": 1133
                                        },
                                        "alternate": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 1137,
                                          "end": 1138
                                        },
                                        "start": 818,
                                        "end": 1138
                                      },
                                      "definite": false,
                                      "start": 798,
                                      "end": 1138
                                    }
                                  ],
                                  "declare": false,
                                  "start": 794,
                                  "end": 1138
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
                                        "start": 1162,
                                        "end": 1172
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "create",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1173,
                                        "end": 1179
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1162,
                                      "end": 1179
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "elementMemberName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1180,
                                        "end": 1197
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "\"\"",
                                        "start": 1199,
                                        "end": 1201
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "[]",
                                        "raw": "\"[]\"",
                                        "start": 1203,
                                        "end": 1207
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1162,
                                    "end": 1208
                                  },
                                  "start": 1155,
                                  "end": 1209
                                }
                              ],
                              "start": 776,
                              "end": 1223
                            },
                            "alternate": null,
                            "start": 756,
                            "end": 1223
                          }
                        ],
                        "start": 742,
                        "end": 1233
                      },
                      "expression": false,
                      "start": 614,
                      "end": 1233
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 592,
                    "end": 1233
                  }
                ],
                "start": 320,
                "end": 1239
              },
              "abstract": false,
              "declare": false,
              "start": 273,
              "end": 1239
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 266,
            "end": 1239
          }
        ],
        "start": 173,
        "end": 1241
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 155,
      "end": 1241
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1243
}
```
