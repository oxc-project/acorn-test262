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
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 33
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 35,
                  "end": 38
                },
                "start": 35,
                "end": 40
              },
              "start": 33,
              "end": 40
            },
            "value": null,
            "start": 26,
            "end": 40
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
        "start": 22,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 59
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 77
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      },
                      "start": 86,
                      "end": 94
                    },
                    "start": 85,
                    "end": 94
                  },
                  "readonly": false,
                  "static": false,
                  "start": 78,
                  "end": 94
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 106,
                        "end": 112
                      },
                      "start": 104,
                      "end": 112
                    },
                    "start": 103,
                    "end": 112
                  },
                  "readonly": false,
                  "static": false,
                  "start": 96,
                  "end": 112
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 114,
                "end": 116
              },
              "expression": false,
              "start": 77,
              "end": 116
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 116
          }
        ],
        "start": 60,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 49,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 133
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 164
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    },
                    "start": 166,
                    "end": 174
                  },
                  "start": 165,
                  "end": 174
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
                    },
                    "start": 177,
                    "end": 185
                  },
                  "start": 176,
                  "end": 185
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 197,
                        "end": 203
                      },
                      "start": 195,
                      "end": 203
                    },
                    "start": 194,
                    "end": 203
                  },
                  "readonly": false,
                  "static": false,
                  "start": 187,
                  "end": 203
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 221,
                          "end": 222
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 224,
                          "end": 225
                        }
                      ],
                      "optional": false,
                      "start": 215,
                      "end": 226
                    },
                    "directive": null,
                    "start": 215,
                    "end": 227
                  }
                ],
                "start": 205,
                "end": 233
              },
              "expression": false,
              "start": 164,
              "end": 233
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 153,
            "end": 233
          }
        ],
        "start": 147,
        "end": 235
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 235
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Printable",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 256
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "print",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 268
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 272,
                "end": 276
              },
              "start": 270,
              "end": 276
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 263,
            "end": 277
          }
        ],
        "start": 257,
        "end": 279
      },
      "declare": false,
      "start": 237,
      "end": 279
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
            "name": "Printable",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 296
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 300,
                    "end": 301
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 321
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 322,
                            "end": 326
                          },
                          "typeArguments": null,
                          "start": 322,
                          "end": 326
                        }
                      ],
                      "start": 321,
                      "end": 327
                    },
                    "start": 310,
                    "end": 327
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 300,
                  "end": 327
                }
              ],
              "start": 299,
              "end": 328
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "superClass",
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
                      "start": 341,
                      "end": 342
                    },
                    "typeArguments": null,
                    "start": 341,
                    "end": 342
                  },
                  "start": 339,
                  "end": 342
                },
                "start": 329,
                "end": 342
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 356
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Printable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 357,
                            "end": 366
                          },
                          "typeArguments": null,
                          "start": 357,
                          "end": 366
                        }
                      ],
                      "start": 356,
                      "end": 367
                    },
                    "start": 345,
                    "end": 367
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
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 379
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 381,
                            "end": 387
                          },
                          "start": 379,
                          "end": 387
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 372,
                        "end": 387
                      }
                    ],
                    "start": 370,
                    "end": 389
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 393
                    },
                    "typeArguments": null,
                    "start": 392,
                    "end": 393
                  }
                ],
                "start": 345,
                "end": 393
              },
              "start": 343,
              "end": 393
            },
            "body": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "superClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 425
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
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 450
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 453,
                      "end": 460
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 436,
                    "end": 461
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "print",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 475
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
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 498,
                                  "end": 504
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 507,
                                        "end": 511
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 512,
                                        "end": 513
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 507,
                                      "end": 513
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\"",
                                      "start": 516,
                                      "end": 519
                                    },
                                    "start": 507,
                                    "end": 519
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 522,
                                      "end": 526
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 527,
                                      "end": 528
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 522,
                                    "end": 528
                                  },
                                  "start": 507,
                                  "end": 528
                                },
                                "definite": false,
                                "start": 498,
                                "end": 528
                              }
                            ],
                            "declare": false,
                            "start": 492,
                            "end": 529
                          }
                        ],
                        "start": 478,
                        "end": 539
                      },
                      "expression": false,
                      "start": 475,
                      "end": 539
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 470,
                    "end": 539
                  }
                ],
                "start": 426,
                "end": 545
              },
              "abstract": false,
              "declare": false,
              "start": 401,
              "end": 545
            },
            "id": null,
            "generator": false,
            "start": 299,
            "end": 545
          },
          "definite": false,
          "start": 287,
          "end": 545
        }
      ],
      "declare": false,
      "start": 281,
      "end": 545
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 563
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
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 574
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 576,
                "end": 582
              },
              "start": 574,
              "end": 582
            },
            "accessibility": null,
            "static": false,
            "start": 570,
            "end": 583
          }
        ],
        "start": 564,
        "end": 585
      },
      "declare": false,
      "start": 547,
      "end": 585
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "typeAnnotation": null,
        "start": 596,
        "end": 602
      },
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
              "start": 603,
              "end": 604
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 624
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 625,
                    "end": 627
                  }
                ],
                "start": 624,
                "end": 628
              },
              "start": 613,
              "end": 628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 603,
            "end": 628
          }
        ],
        "start": 602,
        "end": 629
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "superClass",
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
                "start": 642,
                "end": 643
              },
              "typeArguments": null,
              "start": 642,
              "end": 643
            },
            "start": 640,
            "end": 643
          },
          "start": 630,
          "end": 643
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 657
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tagged",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 658,
                      "end": 664
                    },
                    "typeArguments": null,
                    "start": 658,
                    "end": 664
                  }
                ],
                "start": 657,
                "end": 665
              },
              "start": 646,
              "end": 665
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 669
              },
              "typeArguments": null,
              "start": 668,
              "end": 669
            }
          ],
          "start": 646,
          "end": 669
        },
        "start": 644,
        "end": 669
      },
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
              "start": 682,
              "end": 683
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "superClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 702
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
                    "name": "_tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 717
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 719,
                      "end": 725
                    },
                    "start": 717,
                    "end": 725
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 713,
                  "end": 726
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 735,
                    "end": 746
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 750,
                          "end": 754
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 756,
                              "end": 759
                            },
                            "start": 756,
                            "end": 761
                          },
                          "start": 754,
                          "end": 761
                        },
                        "value": null,
                        "start": 747,
                        "end": 761
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 777,
                              "end": 782
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 786,
                                  "end": 790
                                },
                                "start": 783,
                                "end": 790
                              }
                            ],
                            "optional": false,
                            "start": 777,
                            "end": 791
                          },
                          "directive": null,
                          "start": 777,
                          "end": 792
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 805,
                                "end": 809
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_tag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 810,
                                "end": 814
                              },
                              "optional": false,
                              "computed": false,
                              "start": 805,
                              "end": 814
                            },
                            "right": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "\"hello\"",
                              "start": 817,
                              "end": 824
                            },
                            "start": 805,
                            "end": 824
                          },
                          "directive": null,
                          "start": 805,
                          "end": 825
                        }
                      ],
                      "start": 763,
                      "end": 835
                    },
                    "expression": false,
                    "start": 746,
                    "end": 835
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 735,
                  "end": 835
                }
              ],
              "start": 703,
              "end": 841
            },
            "abstract": false,
            "declare": false,
            "start": 676,
            "end": 841
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 854
            },
            "start": 846,
            "end": 855
          }
        ],
        "start": 670,
        "end": 857
      },
      "expression": false,
      "start": 587,
      "end": 857
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
            "name": "Thing1",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 871
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "typeAnnotation": null,
              "start": 874,
              "end": 880
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null,
                "start": 881,
                "end": 888
              }
            ],
            "optional": false,
            "start": 874,
            "end": 889
          },
          "definite": false,
          "start": 865,
          "end": 889
        }
      ],
      "declare": false,
      "start": 859,
      "end": 890
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
            "name": "Thing2",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 903
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tagged",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 912
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Printable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 913,
                  "end": 922
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 930
                  }
                ],
                "optional": false,
                "start": 913,
                "end": 931
              }
            ],
            "optional": false,
            "start": 906,
            "end": 932
          },
          "definite": false,
          "start": 897,
          "end": 932
        }
      ],
      "declare": false,
      "start": 891,
      "end": 933
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing2",
          "optional": false,
          "typeAnnotation": null,
          "start": 934,
          "end": 940
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": null,
          "start": 941,
          "end": 948
        },
        "optional": false,
        "computed": false,
        "start": 934,
        "end": 948
      },
      "directive": null,
      "start": 934,
      "end": 949
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 962
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 982
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 989,
                    "end": 995
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 996,
                      "end": 997
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 999,
                      "end": 1000
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1002,
                      "end": 1003
                    }
                  ],
                  "start": 985,
                  "end": 1004
                },
                "definite": false,
                "start": 977,
                "end": 1004
              }
            ],
            "declare": false,
            "start": 971,
            "end": 1005
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1010,
                "end": 1015
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1017
              },
              "optional": false,
              "computed": false,
              "start": 1010,
              "end": 1017
            },
            "directive": null,
            "start": 1010,
            "end": 1018
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1028
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1033
              },
              "optional": false,
              "computed": false,
              "start": 1023,
              "end": 1033
            },
            "directive": null,
            "start": 1023,
            "end": 1034
          }
        ],
        "start": 965,
        "end": 1036
      },
      "expression": false,
      "start": 951,
      "end": 1036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1047,
        "end": 1049
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1069
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thing2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1082
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1083,
                      "end": 1084
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1086,
                      "end": 1087
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1089,
                      "end": 1090
                    }
                  ],
                  "start": 1072,
                  "end": 1091
                },
                "definite": false,
                "start": 1064,
                "end": 1091
              }
            ],
            "declare": false,
            "start": 1058,
            "end": 1092
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1097,
                "end": 1102
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1104
              },
              "optional": false,
              "computed": false,
              "start": 1097,
              "end": 1104
            },
            "directive": null,
            "start": 1097,
            "end": 1105
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1120
              },
              "optional": false,
              "computed": false,
              "start": 1110,
              "end": 1120
            },
            "directive": null,
            "start": 1110,
            "end": 1121
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1126,
                  "end": 1131
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "print",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1132,
                  "end": 1137
                },
                "optional": false,
                "computed": false,
                "start": 1126,
                "end": 1137
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1126,
              "end": 1139
            },
            "directive": null,
            "start": 1126,
            "end": 1140
          }
        ],
        "start": 1052,
        "end": 1142
      },
      "expression": false,
      "start": 1038,
      "end": 1142
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1150,
        "end": 1156
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1165,
        "end": 1171
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1189
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1195,
                      "end": 1201
                    },
                    "start": 1193,
                    "end": 1201
                  },
                  "start": 1190,
                  "end": 1201
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1213,
                        "end": 1218
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1219,
                          "end": 1221
                        },
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 1223,
                          "end": 1225
                        },
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 1227,
                          "end": 1229
                        }
                      ],
                      "optional": false,
                      "start": 1213,
                      "end": 1230
                    },
                    "directive": null,
                    "start": 1213,
                    "end": 1231
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1240,
                          "end": 1244
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_tag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1245,
                          "end": 1249
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1240,
                        "end": 1249
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1252,
                        "end": 1255
                      },
                      "start": 1240,
                      "end": 1255
                    },
                    "directive": null,
                    "start": 1240,
                    "end": 1256
                  }
                ],
                "start": 1203,
                "end": 1262
              },
              "expression": false,
              "start": 1189,
              "end": 1262
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1178,
            "end": 1262
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1271
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1284,
                          "end": 1288
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "print",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1289,
                          "end": 1294
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1284,
                        "end": 1294
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1284,
                      "end": 1296
                    },
                    "directive": null,
                    "start": 1284,
                    "end": 1297
                  }
                ],
                "start": 1274,
                "end": 1303
              },
              "expression": false,
              "start": 1271,
              "end": 1303
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1267,
            "end": 1303
          }
        ],
        "start": 1172,
        "end": 1305
      },
      "abstract": false,
      "declare": false,
      "start": 1144,
      "end": 1305
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1305
}
```
