__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 94
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
              "start": 95,
              "end": 96
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OptionValues",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 117
              },
              "typeArguments": null,
              "start": 105,
              "end": 117
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 95,
            "end": 117
          }
        ],
        "start": 94,
        "end": 118
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 139
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 140,
                            "end": 141
                          },
                          "typeArguments": null,
                          "start": 140,
                          "end": 141
                        }
                      ],
                      "start": 139,
                      "end": 142
                    },
                    "start": 133,
                    "end": 142
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "typeArguments": null,
                    "start": 145,
                    "end": 146
                  }
                ],
                "start": 133,
                "end": 146
              },
              "start": 131,
              "end": 146
            },
            "accessibility": null,
            "static": false,
            "start": 125,
            "end": 147
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 160
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Option",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 175
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 176,
                                "end": 177
                              },
                              "typeArguments": null,
                              "start": 176,
                              "end": 177
                            }
                          ],
                          "start": 175,
                          "end": 178
                        },
                        "start": 169,
                        "end": 178
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 181,
                        "end": 190
                      }
                    ],
                    "start": 169,
                    "end": 190
                  },
                  "start": 167,
                  "end": 190
                },
                "start": 162,
                "end": 190
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 193,
                "end": 197
              },
              "start": 191,
              "end": 197
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 152,
            "end": 198
          }
        ],
        "start": 119,
        "end": 200
      },
      "declare": false,
      "start": 79,
      "end": 200
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractValueType",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 223
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
              "start": 224,
              "end": 225
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 225
          }
        ],
        "start": 223,
        "end": 226
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "typeArguments": null,
          "start": 229,
          "end": 230
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactSelectProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 255
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 263
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 262,
                  "end": 263
                },
                "start": 256,
                "end": 263
              }
            ],
            "start": 255,
            "end": 264
          },
          "start": 239,
          "end": 264
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 268
          },
          "typeArguments": null,
          "start": 267,
          "end": 268
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 271,
          "end": 276
        },
        "start": 229,
        "end": 276
      },
      "declare": false,
      "start": 202,
      "end": 277
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReactSingleSelectProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 313
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 331
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReactSelectProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 356
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 357,
                      "end": 360
                    }
                  ],
                  "start": 356,
                  "end": 361
                },
                "start": 340,
                "end": 361
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 319,
              "end": 361
            }
          ],
          "start": 313,
          "end": 363
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Overwrite",
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 375
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Omit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 385
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WrappedProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 398
                      },
                      "typeArguments": null,
                      "start": 386,
                      "end": 398
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "multi",
                        "raw": "\"multi\"",
                        "start": 400,
                        "end": 407
                      },
                      "start": 400,
                      "end": 407
                    }
                  ],
                  "start": 385,
                  "end": 408
                },
                "start": 381,
                "end": 408
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 419
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExtractValueType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 436
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "WrappedProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 437,
                              "end": 449
                            },
                            "typeArguments": null,
                            "start": 437,
                            "end": 449
                          }
                        ],
                        "start": 436,
                        "end": 450
                      },
                      "start": 420,
                      "end": 450
                    }
                  ],
                  "start": 419,
                  "end": 451
                },
                "start": 414,
                "end": 451
              }
            ],
            "start": 375,
            "end": 453
          },
          "start": 366,
          "end": 453
        },
        "declare": false,
        "start": 286,
        "end": 454
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 279,
      "end": 454
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createReactSingleSelect",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 495
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
                "name": "WrappedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 513
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReactSelectProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 538
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 539,
                      "end": 542
                    }
                  ],
                  "start": 538,
                  "end": 543
                },
                "start": 522,
                "end": 543
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 501,
              "end": 543
            }
          ],
          "start": 495,
          "end": 545
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "WrappedComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 574
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 588
                  },
                  "start": 569,
                  "end": 588
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WrappedProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 601
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 601
                    }
                  ],
                  "start": 588,
                  "end": 602
                },
                "start": 569,
                "end": 602
              },
              "start": 567,
              "end": 602
            },
            "start": 551,
            "end": 602
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 611
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 625
              },
              "start": 606,
              "end": 625
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactSingleSelectProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 648
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WrappedProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 661
                        },
                        "typeArguments": null,
                        "start": 649,
                        "end": 661
                      }
                    ],
                    "start": 648,
                    "end": 662
                  },
                  "start": 626,
                  "end": 662
                }
              ],
              "start": 625,
              "end": 663
            },
            "start": 606,
            "end": 663
          },
          "start": 604,
          "end": 663
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 683
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "ReactSelectClass",
                            "start": 720,
                            "end": 736
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ExtractValueType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 737,
                                  "end": 753
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "WrappedProps",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 754,
                                        "end": 766
                                      },
                                      "typeArguments": null,
                                      "start": 754,
                                      "end": 766
                                    }
                                  ],
                                  "start": 753,
                                  "end": 767
                                },
                                "start": 737,
                                "end": 767
                              }
                            ],
                            "start": 736,
                            "end": 768
                          },
                          "attributes": [
                            {
                              "type": "JSXSpreadAttribute",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 789,
                                "end": 794
                              },
                              "start": 785,
                              "end": 795
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "multi",
                                "start": 812,
                                "end": 817
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 819,
                                  "end": 824
                                },
                                "start": 818,
                                "end": 825
                              },
                              "start": 812,
                              "end": 825
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "autosize",
                                "start": 842,
                                "end": 850
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 852,
                                  "end": 857
                                },
                                "start": 851,
                                "end": 858
                              },
                              "start": 842,
                              "end": 858
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "value",
                                "start": 875,
                                "end": 880
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 882,
                                    "end": 887
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 888,
                                    "end": 893
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 882,
                                  "end": 893
                                },
                                "start": 881,
                                "end": 894
                              },
                              "start": 875,
                              "end": 894
                            },
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "onChange",
                                "start": 911,
                                "end": 919
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 922,
                                      "end": 927
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "IfStatement",
                                        "test": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "props",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 958,
                                            "end": 963
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "onChange",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 964,
                                            "end": 972
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 958,
                                          "end": 972
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "props",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1000,
                                                    "end": 1005
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "onChange",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1006,
                                                    "end": 1014
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 1000,
                                                  "end": 1014
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "ConditionalExpression",
                                                    "test": {
                                                      "type": "BinaryExpression",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "value",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1015,
                                                        "end": 1020
                                                      },
                                                      "operator": "===",
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": null,
                                                        "raw": "null",
                                                        "start": 1025,
                                                        "end": 1029
                                                      },
                                                      "start": 1015,
                                                      "end": 1029
                                                    },
                                                    "consequent": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "undefined",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1032,
                                                      "end": 1041
                                                    },
                                                    "alternate": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "value",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1044,
                                                      "end": 1049
                                                    },
                                                    "start": 1015,
                                                    "end": 1049
                                                  }
                                                ],
                                                "optional": false,
                                                "start": 1000,
                                                "end": 1050
                                              },
                                              "directive": null,
                                              "start": 1000,
                                              "end": 1051
                                            }
                                          ],
                                          "start": 974,
                                          "end": 1073
                                        },
                                        "alternate": null,
                                        "start": 954,
                                        "end": 1073
                                      }
                                    ],
                                    "start": 932,
                                    "end": 1091
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 921,
                                  "end": 1091
                                },
                                "start": 920,
                                "end": 1092
                              },
                              "start": 911,
                              "end": 1092
                            }
                          ],
                          "selfClosing": true,
                          "start": 719,
                          "end": 1107
                        },
                        "children": [],
                        "closingElement": null,
                        "start": 719,
                        "end": 1107
                      },
                      "start": 698,
                      "end": 1118
                    }
                  ],
                  "start": 688,
                  "end": 1124
                },
                "id": null,
                "generator": false,
                "start": 677,
                "end": 1124
              },
              "start": 670,
              "end": 1125
            }
          ],
          "start": 664,
          "end": 1127
        },
        "expression": false,
        "start": 463,
        "end": 1127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 456,
      "end": 1127
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null,
          "start": 1182,
          "end": 1186
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
                "start": 1187,
                "end": 1188
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1187,
              "end": 1188
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1190,
                "end": 1191
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1206,
                  "end": 1209
                },
                "start": 1200,
                "end": 1209
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1190,
              "end": 1209
            }
          ],
          "start": 1186,
          "end": 1210
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1213,
              "end": 1214
            },
            "typeArguments": null,
            "start": 1213,
            "end": 1214
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 1223,
            "end": 1226
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pick",
              "optional": false,
              "typeAnnotation": null,
              "start": 1229,
              "end": 1233
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1234,
                    "end": 1235
                  },
                  "typeArguments": null,
                  "start": 1234,
                  "end": 1235
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1244
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1251,
                            "end": 1252
                          },
                          "typeArguments": null,
                          "start": 1251,
                          "end": 1252
                        },
                        "start": 1245,
                        "end": 1252
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1254,
                          "end": 1255
                        },
                        "typeArguments": null,
                        "start": 1254,
                        "end": 1255
                      }
                    ],
                    "start": 1244,
                    "end": 1256
                  },
                  "start": 1237,
                  "end": 1256
                }
              ],
              "start": 1233,
              "end": 1257
            },
            "start": 1229,
            "end": 1257
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1260,
            "end": 1265
          },
          "start": 1213,
          "end": 1265
        },
        "declare": false,
        "start": 1177,
        "end": 1266
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1170,
      "end": 1266
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Overwrite",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1288
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
                "start": 1289,
                "end": 1290
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1289,
              "end": 1290
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1292,
                "end": 1293
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1292,
              "end": 1293
            }
          ],
          "start": 1288,
          "end": 1294
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1301
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1302,
                      "end": 1303
                    },
                    "typeArguments": null,
                    "start": 1302,
                    "end": 1303
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1311,
                            "end": 1312
                          },
                          "typeArguments": null,
                          "start": 1311,
                          "end": 1312
                        },
                        "start": 1305,
                        "end": 1312
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1321,
                            "end": 1322
                          },
                          "typeArguments": null,
                          "start": 1321,
                          "end": 1322
                        },
                        "start": 1315,
                        "end": 1322
                      }
                    ],
                    "start": 1305,
                    "end": 1322
                  }
                ],
                "start": 1301,
                "end": 1323
              },
              "start": 1297,
              "end": 1323
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1326,
                "end": 1327
              },
              "typeArguments": null,
              "start": 1326,
              "end": 1327
            }
          ],
          "start": 1297,
          "end": 1327
        },
        "declare": false,
        "start": 1274,
        "end": 1328
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1267,
      "end": 1328
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactSelectClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1417,
        "end": 1433
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1434,
              "end": 1440
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OptionValues",
                "optional": false,
                "typeAnnotation": null,
                "start": 1443,
                "end": 1455
              },
              "typeArguments": null,
              "start": 1443,
              "end": 1455
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1434,
            "end": 1455
          }
        ],
        "start": 1433,
        "end": 1456
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 1465,
          "end": 1470
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1471,
          "end": 1480
        },
        "optional": false,
        "computed": false,
        "start": 1465,
        "end": 1480
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactSelectProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1481,
              "end": 1497
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1498,
                    "end": 1504
                  },
                  "typeArguments": null,
                  "start": 1498,
                  "end": 1504
                }
              ],
              "start": 1497,
              "end": 1505
            },
            "start": 1481,
            "end": 1505
          }
        ],
        "start": 1480,
        "end": 1506
      },
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
              "name": "focus",
              "optional": false,
              "typeAnnotation": null,
              "start": 1513,
              "end": 1518
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1522,
                  "end": 1526
                },
                "start": 1520,
                "end": 1526
              },
              "body": null,
              "expression": false,
              "start": 1518,
              "end": 1527
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1513,
            "end": 1527
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1532,
              "end": 1540
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Option",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1548,
                        "end": 1554
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1555,
                              "end": 1561
                            },
                            "typeArguments": null,
                            "start": 1555,
                            "end": 1561
                          }
                        ],
                        "start": 1554,
                        "end": 1562
                      },
                      "start": 1548,
                      "end": 1562
                    },
                    "start": 1546,
                    "end": 1562
                  },
                  "start": 1541,
                  "end": 1562
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1565,
                  "end": 1569
                },
                "start": 1563,
                "end": 1569
              },
              "body": null,
              "expression": false,
              "start": 1540,
              "end": 1570
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1532,
            "end": 1570
          }
        ],
        "start": 1507,
        "end": 1572
      },
      "abstract": false,
      "declare": true,
      "start": 1403,
      "end": 1572
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionComponentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1586,
          "end": 1605
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 1606,
                "end": 1612
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1615,
                  "end": 1627
                },
                "typeArguments": null,
                "start": 1615,
                "end": 1627
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1606,
              "end": 1627
            }
          ],
          "start": 1605,
          "end": 1628
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null,
              "start": 1631,
              "end": 1636
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1637,
              "end": 1650
            },
            "start": 1631,
            "end": 1650
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionComponentProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1651,
                  "end": 1671
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1672,
                        "end": 1678
                      },
                      "typeArguments": null,
                      "start": 1672,
                      "end": 1678
                    }
                  ],
                  "start": 1671,
                  "end": 1679
                },
                "start": 1651,
                "end": 1679
              }
            ],
            "start": 1650,
            "end": 1680
          },
          "start": 1631,
          "end": 1680
        },
        "declare": false,
        "start": 1581,
        "end": 1681
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1574,
      "end": 1681
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueComponentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1694,
          "end": 1712
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 1713,
                "end": 1719
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1722,
                  "end": 1734
                },
                "typeArguments": null,
                "start": 1722,
                "end": 1734
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1713,
              "end": 1734
            }
          ],
          "start": 1712,
          "end": 1735
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null,
              "start": 1739,
              "end": 1744
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1758
            },
            "start": 1739,
            "end": 1758
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValueComponentProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1759,
                  "end": 1778
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1779,
                        "end": 1785
                      },
                      "typeArguments": null,
                      "start": 1779,
                      "end": 1785
                    }
                  ],
                  "start": 1778,
                  "end": 1786
                },
                "start": 1759,
                "end": 1786
              }
            ],
            "start": 1758,
            "end": 1787
          },
          "start": 1739,
          "end": 1787
        },
        "declare": false,
        "start": 1689,
        "end": 1788
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1682,
      "end": 1788
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HandlerRendererResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 1802,
          "end": 1823
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1826,
                  "end": 1829
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1830,
                  "end": 1837
                },
                "start": 1826,
                "end": 1837
              },
              "typeArguments": null,
              "start": 1826,
              "end": 1837
            },
            {
              "type": "TSNullKeyword",
              "start": 1840,
              "end": 1844
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1847,
                "end": 1852
              },
              "start": 1847,
              "end": 1852
            }
          ],
          "start": 1826,
          "end": 1852
        },
        "declare": false,
        "start": 1797,
        "end": 1853
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1790,
      "end": 1853
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FocusOptionHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 1879,
          "end": 1897
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 1898,
                "end": 1904
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1907,
                  "end": 1919
                },
                "typeArguments": null,
                "start": 1907,
                "end": 1919
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1898,
              "end": 1919
            }
          ],
          "start": 1897,
          "end": 1920
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1932,
                    "end": 1938
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1939,
                          "end": 1945
                        },
                        "typeArguments": null,
                        "start": 1939,
                        "end": 1945
                      }
                    ],
                    "start": 1938,
                    "end": 1946
                  },
                  "start": 1932,
                  "end": 1946
                },
                "start": 1930,
                "end": 1946
              },
              "start": 1924,
              "end": 1946
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1951,
              "end": 1955
            },
            "start": 1948,
            "end": 1955
          },
          "start": 1923,
          "end": 1955
        },
        "declare": false,
        "start": 1874,
        "end": 1956
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1867,
      "end": 1956
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SelectValueHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 1969,
          "end": 1987
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 1988,
                "end": 1994
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1997,
                  "end": 2009
                },
                "typeArguments": null,
                "start": 1997,
                "end": 2009
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1988,
              "end": 2009
            }
          ],
          "start": 1987,
          "end": 2010
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2022,
                    "end": 2028
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2029,
                          "end": 2035
                        },
                        "typeArguments": null,
                        "start": 2029,
                        "end": 2035
                      }
                    ],
                    "start": 2028,
                    "end": 2036
                  },
                  "start": 2022,
                  "end": 2036
                },
                "start": 2020,
                "end": 2036
              },
              "start": 2014,
              "end": 2036
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2041,
              "end": 2045
            },
            "start": 2038,
            "end": 2045
          },
          "start": 2013,
          "end": 2045
        },
        "declare": false,
        "start": 1964,
        "end": 2046
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1957,
      "end": 2046
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArrowRendererHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2059,
          "end": 2079
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArrowRendererProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2090,
                    "end": 2108
                  },
                  "typeArguments": null,
                  "start": 2090,
                  "end": 2108
                },
                "start": 2088,
                "end": 2108
              },
              "start": 2083,
              "end": 2108
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 2113,
                "end": 2134
              },
              "typeArguments": null,
              "start": 2113,
              "end": 2134
            },
            "start": 2110,
            "end": 2134
          },
          "start": 2082,
          "end": 2134
        },
        "declare": false,
        "start": 2054,
        "end": 2135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2047,
      "end": 2135
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClearRendererHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2148,
          "end": 2168
        },
        "typeParameters": null,
        "typeAnnotation": {
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
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 2177,
                "end": 2198
              },
              "typeArguments": null,
              "start": 2177,
              "end": 2198
            },
            "start": 2174,
            "end": 2198
          },
          "start": 2171,
          "end": 2198
        },
        "declare": false,
        "start": 2143,
        "end": 2199
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2136,
      "end": 2199
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterOptionHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2212,
          "end": 2231
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 2232,
                "end": 2238
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2241,
                  "end": 2253
                },
                "typeArguments": null,
                "start": 2241,
                "end": 2253
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 2232,
              "end": 2253
            }
          ],
          "start": 2231,
          "end": 2254
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2266,
                    "end": 2272
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2273,
                          "end": 2279
                        },
                        "typeArguments": null,
                        "start": 2273,
                        "end": 2279
                      }
                    ],
                    "start": 2272,
                    "end": 2280
                  },
                  "start": 2266,
                  "end": 2280
                },
                "start": 2264,
                "end": 2280
              },
              "start": 2258,
              "end": 2280
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2290,
                  "end": 2296
                },
                "start": 2288,
                "end": 2296
              },
              "start": 2282,
              "end": 2296
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2301,
              "end": 2308
            },
            "start": 2298,
            "end": 2308
          },
          "start": 2257,
          "end": 2308
        },
        "declare": false,
        "start": 2207,
        "end": 2309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2200,
      "end": 2309
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterOptionsHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2322,
          "end": 2342
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 2343,
                "end": 2349
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2352,
                  "end": 2364
                },
                "typeArguments": null,
                "start": 2352,
                "end": 2364
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 2343,
              "end": 2364
            }
          ],
          "start": 2342,
          "end": 2365
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2378,
                    "end": 2385
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2386,
                          "end": 2392
                        },
                        "typeArguments": null,
                        "start": 2386,
                        "end": 2392
                      }
                    ],
                    "start": 2385,
                    "end": 2393
                  },
                  "start": 2378,
                  "end": 2393
                },
                "start": 2376,
                "end": 2393
              },
              "start": 2369,
              "end": 2393
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2403,
                  "end": 2409
                },
                "start": 2401,
                "end": 2409
              },
              "start": 2395,
              "end": 2409
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "currentValues",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2426,
                    "end": 2433
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2434,
                          "end": 2440
                        },
                        "typeArguments": null,
                        "start": 2434,
                        "end": 2440
                      }
                    ],
                    "start": 2433,
                    "end": 2441
                  },
                  "start": 2426,
                  "end": 2441
                },
                "start": 2424,
                "end": 2441
              },
              "start": 2411,
              "end": 2441
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null,
                "start": 2446,
                "end": 2453
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2454,
                      "end": 2460
                    },
                    "typeArguments": null,
                    "start": 2454,
                    "end": 2460
                  }
                ],
                "start": 2453,
                "end": 2461
              },
              "start": 2446,
              "end": 2461
            },
            "start": 2443,
            "end": 2461
          },
          "start": 2368,
          "end": 2461
        },
        "declare": false,
        "start": 2317,
        "end": 2462
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2310,
      "end": 2462
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InputRendererHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2475,
          "end": 2495
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2514,
                              "end": 2520
                            },
                            "start": 2512,
                            "end": 2520
                          },
                          "start": 2509,
                          "end": 2520
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2523,
                          "end": 2526
                        },
                        "start": 2521,
                        "end": 2526
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 2508,
                      "end": 2526
                    }
                  ],
                  "start": 2506,
                  "end": 2528
                },
                "start": 2504,
                "end": 2528
              },
              "start": 2499,
              "end": 2528
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 2533,
                "end": 2554
              },
              "typeArguments": null,
              "start": 2533,
              "end": 2554
            },
            "start": 2530,
            "end": 2554
          },
          "start": 2498,
          "end": 2554
        },
        "declare": false,
        "start": 2470,
        "end": 2555
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2463,
      "end": 2555
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MenuRendererHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2568,
          "end": 2587
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 2588,
                "end": 2594
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2597,
                  "end": 2609
                },
                "typeArguments": null,
                "start": 2597,
                "end": 2609
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 2588,
              "end": 2609
            }
          ],
          "start": 2587,
          "end": 2610
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MenuRendererProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2621,
                    "end": 2638
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2639,
                          "end": 2645
                        },
                        "typeArguments": null,
                        "start": 2639,
                        "end": 2645
                      }
                    ],
                    "start": 2638,
                    "end": 2646
                  },
                  "start": 2621,
                  "end": 2646
                },
                "start": 2619,
                "end": 2646
              },
              "start": 2614,
              "end": 2646
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 2651,
                "end": 2672
              },
              "typeArguments": null,
              "start": 2651,
              "end": 2672
            },
            "start": 2648,
            "end": 2672
          },
          "start": 2613,
          "end": 2672
        },
        "declare": false,
        "start": 2563,
        "end": 2673
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2556,
      "end": 2673
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnCloseHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2686,
          "end": 2700
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2709,
              "end": 2713
            },
            "start": 2706,
            "end": 2713
          },
          "start": 2703,
          "end": 2713
        },
        "declare": false,
        "start": 2681,
        "end": 2714
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2674,
      "end": 2714
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnInputChangeHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2727,
          "end": 2747
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "inputValue",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2763,
                  "end": 2769
                },
                "start": 2761,
                "end": 2769
              },
              "start": 2751,
              "end": 2769
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2774,
              "end": 2780
            },
            "start": 2771,
            "end": 2780
          },
          "start": 2750,
          "end": 2780
        },
        "declare": false,
        "start": 2722,
        "end": 2781
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2715,
      "end": 2781
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnInputKeyDownHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2794,
          "end": 2815
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null,
              "start": 2818,
              "end": 2823
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyboardEventHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 2824,
              "end": 2844
            },
            "start": 2818,
            "end": 2844
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2845,
                      "end": 2859
                    },
                    "typeArguments": null,
                    "start": 2845,
                    "end": 2859
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2862,
                      "end": 2878
                    },
                    "typeArguments": null,
                    "start": 2862,
                    "end": 2878
                  }
                ],
                "start": 2845,
                "end": 2878
              }
            ],
            "start": 2844,
            "end": 2879
          },
          "start": 2818,
          "end": 2879
        },
        "declare": false,
        "start": 2789,
        "end": 2880
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2782,
      "end": 2880
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnMenuScrollToBottomHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2893,
          "end": 2920
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2929,
              "end": 2933
            },
            "start": 2926,
            "end": 2933
          },
          "start": 2923,
          "end": 2933
        },
        "declare": false,
        "start": 2888,
        "end": 2934
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2881,
      "end": 2934
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnOpenHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2947,
          "end": 2960
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2969,
              "end": 2973
            },
            "start": 2966,
            "end": 2973
          },
          "start": 2963,
          "end": 2973
        },
        "declare": false,
        "start": 2942,
        "end": 2974
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2935,
      "end": 2974
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnFocusHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 2987,
          "end": 3001
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null,
              "start": 3004,
              "end": 3009
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "FocusEventHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 3010,
              "end": 3027
            },
            "start": 3004,
            "end": 3027
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3028,
                      "end": 3042
                    },
                    "typeArguments": null,
                    "start": 3028,
                    "end": 3042
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3045,
                      "end": 3061
                    },
                    "typeArguments": null,
                    "start": 3045,
                    "end": 3061
                  }
                ],
                "start": 3028,
                "end": 3061
              }
            ],
            "start": 3027,
            "end": 3062
          },
          "start": 3004,
          "end": 3062
        },
        "declare": false,
        "start": 2982,
        "end": 3063
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2975,
      "end": 3063
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnBlurHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3076,
          "end": 3089
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null,
              "start": 3092,
              "end": 3097
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "FocusEventHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 3098,
              "end": 3115
            },
            "start": 3092,
            "end": 3115
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3116,
                      "end": 3130
                    },
                    "typeArguments": null,
                    "start": 3116,
                    "end": 3130
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3133,
                      "end": 3149
                    },
                    "typeArguments": null,
                    "start": 3133,
                    "end": 3149
                  }
                ],
                "start": 3116,
                "end": 3149
              }
            ],
            "start": 3115,
            "end": 3150
          },
          "start": 3092,
          "end": 3150
        },
        "declare": false,
        "start": 3071,
        "end": 3151
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3064,
      "end": 3151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionRendererHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3164,
          "end": 3185
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 3186,
                "end": 3192
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3195,
                  "end": 3207
                },
                "typeArguments": null,
                "start": 3195,
                "end": 3207
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3186,
              "end": 3207
            }
          ],
          "start": 3185,
          "end": 3208
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3220,
                    "end": 3226
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3227,
                          "end": 3233
                        },
                        "typeArguments": null,
                        "start": 3227,
                        "end": 3233
                      }
                    ],
                    "start": 3226,
                    "end": 3234
                  },
                  "start": 3220,
                  "end": 3234
                },
                "start": 3218,
                "end": 3234
              },
              "start": 3212,
              "end": 3234
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 3239,
                "end": 3260
              },
              "typeArguments": null,
              "start": 3239,
              "end": 3260
            },
            "start": 3236,
            "end": 3260
          },
          "start": 3211,
          "end": 3260
        },
        "declare": false,
        "start": 3159,
        "end": 3261
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3152,
      "end": 3261
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueRendererHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3274,
          "end": 3294
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 3295,
                "end": 3301
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3304,
                  "end": 3316
                },
                "typeArguments": null,
                "start": 3304,
                "end": 3316
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3295,
              "end": 3316
            }
          ],
          "start": 3294,
          "end": 3317
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3329,
                    "end": 3335
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3336,
                          "end": 3342
                        },
                        "typeArguments": null,
                        "start": 3336,
                        "end": 3342
                      }
                    ],
                    "start": 3335,
                    "end": 3343
                  },
                  "start": 3329,
                  "end": 3343
                },
                "start": 3327,
                "end": 3343
              },
              "start": 3321,
              "end": 3343
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3353,
                  "end": 3359
                },
                "start": 3351,
                "end": 3359
              },
              "start": 3345,
              "end": 3359
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 3364,
                "end": 3385
              },
              "typeArguments": null,
              "start": 3364,
              "end": 3385
            },
            "start": 3361,
            "end": 3385
          },
          "start": 3320,
          "end": 3385
        },
        "declare": false,
        "start": 3269,
        "end": 3386
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3262,
      "end": 3386
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnValueClickHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3399,
          "end": 3418
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 3419,
                "end": 3425
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3428,
                  "end": 3440
                },
                "typeArguments": null,
                "start": 3428,
                "end": 3440
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3419,
              "end": 3440
            }
          ],
          "start": 3418,
          "end": 3441
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3453,
                    "end": 3459
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3460,
                          "end": 3466
                        },
                        "typeArguments": null,
                        "start": 3460,
                        "end": 3466
                      }
                    ],
                    "start": 3459,
                    "end": 3467
                  },
                  "start": 3453,
                  "end": 3467
                },
                "start": 3451,
                "end": 3467
              },
              "start": 3445,
              "end": 3467
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "event",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3476,
                      "end": 3481
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseEvent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3482,
                      "end": 3492
                    },
                    "start": 3476,
                    "end": 3492
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLAnchorElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3493,
                          "end": 3510
                        },
                        "typeArguments": null,
                        "start": 3493,
                        "end": 3510
                      }
                    ],
                    "start": 3492,
                    "end": 3511
                  },
                  "start": 3476,
                  "end": 3511
                },
                "start": 3474,
                "end": 3511
              },
              "start": 3469,
              "end": 3511
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 3516,
              "end": 3520
            },
            "start": 3513,
            "end": 3520
          },
          "start": 3444,
          "end": 3520
        },
        "declare": false,
        "start": 3394,
        "end": 3521
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3387,
      "end": 3521
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsOptionUniqueHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3534,
          "end": 3555
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 3556,
                "end": 3562
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3565,
                  "end": 3577
                },
                "typeArguments": null,
                "start": 3565,
                "end": 3577
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3556,
              "end": 3577
            }
          ],
          "start": 3555,
          "end": 3578
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "name": "option",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3589,
                        "end": 3595
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3597,
                            "end": 3603
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3604,
                                  "end": 3610
                                },
                                "typeArguments": null,
                                "start": 3604,
                                "end": 3610
                              }
                            ],
                            "start": 3603,
                            "end": 3611
                          },
                          "start": 3597,
                          "end": 3611
                        },
                        "start": 3595,
                        "end": 3611
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3589,
                      "end": 3612
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3613,
                        "end": 3620
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3622,
                            "end": 3629
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3630,
                                  "end": 3636
                                },
                                "typeArguments": null,
                                "start": 3630,
                                "end": 3636
                              }
                            ],
                            "start": 3629,
                            "end": 3637
                          },
                          "start": 3622,
                          "end": 3637
                        },
                        "start": 3620,
                        "end": 3637
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3613,
                      "end": 3638
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3639,
                        "end": 3647
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3649,
                          "end": 3655
                        },
                        "start": 3647,
                        "end": 3655
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3639,
                      "end": 3656
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "valueKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3657,
                        "end": 3665
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3667,
                          "end": 3673
                        },
                        "start": 3665,
                        "end": 3673
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3657,
                      "end": 3673
                    }
                  ],
                  "start": 3587,
                  "end": 3675
                },
                "start": 3585,
                "end": 3675
              },
              "start": 3582,
              "end": 3675
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 3680,
              "end": 3687
            },
            "start": 3677,
            "end": 3687
          },
          "start": 3581,
          "end": 3687
        },
        "declare": false,
        "start": 3529,
        "end": 3688
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3522,
      "end": 3688
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsValidNewOptionHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3701,
          "end": 3724
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3735,
                        "end": 3740
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3742,
                          "end": 3748
                        },
                        "start": 3740,
                        "end": 3748
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3735,
                      "end": 3748
                    }
                  ],
                  "start": 3733,
                  "end": 3750
                },
                "start": 3731,
                "end": 3750
              },
              "start": 3728,
              "end": 3750
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 3755,
              "end": 3762
            },
            "start": 3752,
            "end": 3762
          },
          "start": 3727,
          "end": 3762
        },
        "declare": false,
        "start": 3696,
        "end": 3763
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3689,
      "end": 3763
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewOptionCreatorHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3776,
          "end": 3799
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 3800,
                "end": 3806
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3809,
                  "end": 3821
                },
                "typeArguments": null,
                "start": 3809,
                "end": 3821
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3800,
              "end": 3821
            }
          ],
          "start": 3799,
          "end": 3822
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3833,
                        "end": 3838
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3840,
                          "end": 3846
                        },
                        "start": 3838,
                        "end": 3846
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3833,
                      "end": 3847
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3848,
                        "end": 3856
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3858,
                          "end": 3864
                        },
                        "start": 3856,
                        "end": 3864
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3848,
                      "end": 3865
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "valueKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3866,
                        "end": 3874
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3876,
                          "end": 3882
                        },
                        "start": 3874,
                        "end": 3882
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3866,
                      "end": 3882
                    }
                  ],
                  "start": 3831,
                  "end": 3884
                },
                "start": 3829,
                "end": 3884
              },
              "start": 3826,
              "end": 3884
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Option",
                "optional": false,
                "typeAnnotation": null,
                "start": 3889,
                "end": 3895
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3896,
                      "end": 3902
                    },
                    "typeArguments": null,
                    "start": 3896,
                    "end": 3902
                  }
                ],
                "start": 3895,
                "end": 3903
              },
              "start": 3889,
              "end": 3903
            },
            "start": 3886,
            "end": 3903
          },
          "start": 3825,
          "end": 3903
        },
        "declare": false,
        "start": 3771,
        "end": 3904
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3764,
      "end": 3904
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PromptTextCreatorHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3917,
          "end": 3941
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "filterText",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3957,
                  "end": 3963
                },
                "start": 3955,
                "end": 3963
              },
              "start": 3945,
              "end": 3963
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 3968,
              "end": 3974
            },
            "start": 3965,
            "end": 3974
          },
          "start": 3944,
          "end": 3974
        },
        "declare": false,
        "start": 3912,
        "end": 3975
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3905,
      "end": 3975
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ShouldKeyDownEventCreateNewOptionHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 3988,
          "end": 4028
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "name": "keyCode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4039,
                        "end": 4046
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4048,
                          "end": 4054
                        },
                        "start": 4046,
                        "end": 4054
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4039,
                      "end": 4054
                    }
                  ],
                  "start": 4037,
                  "end": 4056
                },
                "start": 4035,
                "end": 4056
              },
              "start": 4032,
              "end": 4056
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 4061,
              "end": 4068
            },
            "start": 4058,
            "end": 4068
          },
          "start": 4031,
          "end": 4068
        },
        "declare": false,
        "start": 3983,
        "end": 4069
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3976,
      "end": 4069
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnChangeSingleHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 4083,
          "end": 4104
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4105,
                "end": 4111
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4114,
                  "end": 4126
                },
                "typeArguments": null,
                "start": 4114,
                "end": 4126
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4105,
              "end": 4126
            }
          ],
          "start": 4104,
          "end": 4127
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OnChangeHandler",
            "optional": false,
            "typeAnnotation": null,
            "start": 4130,
            "end": 4145
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4146,
                  "end": 4152
                },
                "typeArguments": null,
                "start": 4146,
                "end": 4152
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4154,
                  "end": 4160
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4161,
                        "end": 4167
                      },
                      "typeArguments": null,
                      "start": 4161,
                      "end": 4167
                    }
                  ],
                  "start": 4160,
                  "end": 4168
                },
                "start": 4154,
                "end": 4168
              }
            ],
            "start": 4145,
            "end": 4169
          },
          "start": 4130,
          "end": 4169
        },
        "declare": false,
        "start": 4078,
        "end": 4170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4071,
      "end": 4170
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnChangeMultipleHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 4183,
          "end": 4206
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4207,
                "end": 4213
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4216,
                  "end": 4228
                },
                "typeArguments": null,
                "start": 4216,
                "end": 4228
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4207,
              "end": 4228
            }
          ],
          "start": 4206,
          "end": 4229
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OnChangeHandler",
            "optional": false,
            "typeAnnotation": null,
            "start": 4232,
            "end": 4247
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4248,
                  "end": 4254
                },
                "typeArguments": null,
                "start": 4248,
                "end": 4254
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4256,
                  "end": 4263
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4264,
                        "end": 4270
                      },
                      "typeArguments": null,
                      "start": 4264,
                      "end": 4270
                    }
                  ],
                  "start": 4263,
                  "end": 4271
                },
                "start": 4256,
                "end": 4271
              }
            ],
            "start": 4247,
            "end": 4272
          },
          "start": 4232,
          "end": 4272
        },
        "declare": false,
        "start": 4178,
        "end": 4273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4171,
      "end": 4273
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnChangeHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 4286,
          "end": 4301
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4302,
                "end": 4308
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4311,
                  "end": 4323
                },
                "typeArguments": null,
                "start": 4311,
                "end": 4323
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4302,
              "end": 4323
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TOption",
                "optional": false,
                "typeAnnotation": null,
                "start": 4325,
                "end": 4332
              },
              "constraint": null,
              "default": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4335,
                      "end": 4341
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4342,
                            "end": 4348
                          },
                          "typeArguments": null,
                          "start": 4342,
                          "end": 4348
                        }
                      ],
                      "start": 4341,
                      "end": 4349
                    },
                    "start": 4335,
                    "end": 4349
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4352,
                      "end": 4359
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4360,
                            "end": 4366
                          },
                          "typeArguments": null,
                          "start": 4360,
                          "end": 4366
                        }
                      ],
                      "start": 4359,
                      "end": 4367
                    },
                    "start": 4352,
                    "end": 4367
                  }
                ],
                "start": 4335,
                "end": 4367
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4325,
              "end": 4367
            }
          ],
          "start": 4301,
          "end": 4368
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "newValue",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOption",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4382,
                        "end": 4389
                      },
                      "typeArguments": null,
                      "start": 4382,
                      "end": 4389
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 4392,
                      "end": 4396
                    }
                  ],
                  "start": 4382,
                  "end": 4396
                },
                "start": 4380,
                "end": 4396
              },
              "start": 4372,
              "end": 4396
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 4401,
              "end": 4405
            },
            "start": 4398,
            "end": 4405
          },
          "start": 4371,
          "end": 4405
        },
        "declare": false,
        "start": 4281,
        "end": 4406
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4274,
      "end": 4406
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnNewOptionClickHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 4419,
          "end": 4442
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4443,
                "end": 4449
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4452,
                  "end": 4464
                },
                "typeArguments": null,
                "start": 4452,
                "end": 4464
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4443,
              "end": 4464
            }
          ],
          "start": 4442,
          "end": 4465
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4477,
                    "end": 4483
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4484,
                          "end": 4490
                        },
                        "typeArguments": null,
                        "start": 4484,
                        "end": 4490
                      }
                    ],
                    "start": 4483,
                    "end": 4491
                  },
                  "start": 4477,
                  "end": 4491
                },
                "start": 4475,
                "end": 4491
              },
              "start": 4469,
              "end": 4491
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 4496,
              "end": 4500
            },
            "start": 4493,
            "end": 4500
          },
          "start": 4468,
          "end": 4500
        },
        "declare": false,
        "start": 4414,
        "end": 4501
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4407,
      "end": 4501
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LoadOptionsHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 4515,
          "end": 4533
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4534,
                "end": 4540
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4543,
                  "end": 4555
                },
                "typeArguments": null,
                "start": 4543,
                "end": 4555
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4534,
              "end": 4555
            }
          ],
          "start": 4533,
          "end": 4556
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LoadOptionsAsyncHandler",
                "optional": false,
                "typeAnnotation": null,
                "start": 4559,
                "end": 4582
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4583,
                      "end": 4589
                    },
                    "typeArguments": null,
                    "start": 4583,
                    "end": 4589
                  }
                ],
                "start": 4582,
                "end": 4590
              },
              "start": 4559,
              "end": 4590
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LoadOptionsLegacyHandler",
                "optional": false,
                "typeAnnotation": null,
                "start": 4593,
                "end": 4617
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4618,
                      "end": 4624
                    },
                    "typeArguments": null,
                    "start": 4618,
                    "end": 4624
                  }
                ],
                "start": 4617,
                "end": 4625
              },
              "start": 4593,
              "end": 4625
            }
          ],
          "start": 4559,
          "end": 4625
        },
        "declare": false,
        "start": 4510,
        "end": 4626
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4503,
      "end": 4626
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LoadOptionsAsyncHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 4639,
          "end": 4662
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4663,
                "end": 4669
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4672,
                  "end": 4684
                },
                "typeArguments": null,
                "start": 4672,
                "end": 4684
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4663,
              "end": 4684
            }
          ],
          "start": 4662,
          "end": 4685
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "input",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4696,
                  "end": 4702
                },
                "start": 4694,
                "end": 4702
              },
              "start": 4689,
              "end": 4702
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 4707,
                "end": 4714
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AutocompleteResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4715,
                      "end": 4733
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4734,
                            "end": 4740
                          },
                          "typeArguments": null,
                          "start": 4734,
                          "end": 4740
                        }
                      ],
                      "start": 4733,
                      "end": 4741
                    },
                    "start": 4715,
                    "end": 4741
                  }
                ],
                "start": 4714,
                "end": 4742
              },
              "start": 4707,
              "end": 4742
            },
            "start": 4704,
            "end": 4742
          },
          "start": 4688,
          "end": 4742
        },
        "declare": false,
        "start": 4634,
        "end": 4743
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4627,
      "end": 4743
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LoadOptionsLegacyHandler",
          "optional": false,
          "typeAnnotation": null,
          "start": 4756,
          "end": 4780
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4781,
                "end": 4787
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4790,
                  "end": 4802
                },
                "typeArguments": null,
                "start": 4790,
                "end": 4802
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4781,
              "end": 4802
            }
          ],
          "start": 4780,
          "end": 4803
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "input",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4814,
                  "end": 4820
                },
                "start": 4812,
                "end": 4820
              },
              "start": 4807,
              "end": 4820
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "err",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 4838,
                          "end": 4841
                        },
                        "start": 4836,
                        "end": 4841
                      },
                      "start": 4833,
                      "end": 4841
                    },
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
                            "name": "AutocompleteResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4851,
                            "end": 4869
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4870,
                                  "end": 4876
                                },
                                "typeArguments": null,
                                "start": 4870,
                                "end": 4876
                              }
                            ],
                            "start": 4869,
                            "end": 4877
                          },
                          "start": 4851,
                          "end": 4877
                        },
                        "start": 4849,
                        "end": 4877
                      },
                      "start": 4843,
                      "end": 4877
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 4882,
                      "end": 4886
                    },
                    "start": 4879,
                    "end": 4886
                  },
                  "start": 4832,
                  "end": 4886
                },
                "start": 4830,
                "end": 4886
              },
              "start": 4822,
              "end": 4886
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 4891,
              "end": 4895
            },
            "start": 4888,
            "end": 4895
          },
          "start": 4806,
          "end": 4895
        },
        "declare": false,
        "start": 4751,
        "end": 4896
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4744,
      "end": 4896
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AutocompleteResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 4915,
          "end": 4933
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4934,
                "end": 4940
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4943,
                  "end": 4955
                },
                "typeArguments": null,
                "start": 4943,
                "end": 4955
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4934,
              "end": 4955
            }
          ],
          "start": 4933,
          "end": 4956
        },
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
                "name": "options",
                "optional": false,
                "typeAnnotation": null,
                "start": 5010,
                "end": 5017
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5019,
                    "end": 5026
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5027,
                          "end": 5033
                        },
                        "typeArguments": null,
                        "start": 5027,
                        "end": 5033
                      }
                    ],
                    "start": 5026,
                    "end": 5034
                  },
                  "start": 5019,
                  "end": 5034
                },
                "start": 5017,
                "end": 5034
              },
              "accessibility": null,
              "static": false,
              "start": 5010,
              "end": 5035
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "complete",
                "optional": false,
                "typeAnnotation": null,
                "start": 5258,
                "end": 5266
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5268,
                  "end": 5275
                },
                "start": 5266,
                "end": 5275
              },
              "accessibility": null,
              "static": false,
              "start": 5258,
              "end": 5276
            }
          ],
          "start": 4957,
          "end": 5278
        },
        "declare": false,
        "start": 4905,
        "end": 5278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4898,
      "end": 5278
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Options",
          "optional": false,
          "typeAnnotation": null,
          "start": 5292,
          "end": 5299
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 5300,
                "end": 5306
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5309,
                  "end": 5321
                },
                "typeArguments": null,
                "start": 5309,
                "end": 5321
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5300,
              "end": 5321
            }
          ],
          "start": 5299,
          "end": 5322
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 5325,
            "end": 5330
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5331,
                  "end": 5337
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5338,
                        "end": 5344
                      },
                      "typeArguments": null,
                      "start": 5338,
                      "end": 5344
                    }
                  ],
                  "start": 5337,
                  "end": 5345
                },
                "start": 5331,
                "end": 5345
              }
            ],
            "start": 5330,
            "end": 5346
          },
          "start": 5325,
          "end": 5346
        },
        "declare": false,
        "start": 5287,
        "end": 5347
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5280,
      "end": 5347
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Option",
          "optional": false,
          "typeAnnotation": null,
          "start": 5366,
          "end": 5372
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 5373,
                "end": 5379
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5382,
                  "end": 5394
                },
                "typeArguments": null,
                "start": 5382,
                "end": 5394
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5373,
              "end": 5394
            }
          ],
          "start": 5372,
          "end": 5395
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "label",
                "optional": false,
                "typeAnnotation": null,
                "start": 5432,
                "end": 5437
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5440,
                  "end": 5446
                },
                "start": 5438,
                "end": 5446
              },
              "accessibility": null,
              "static": false,
              "start": 5432,
              "end": 5447
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 5483,
                "end": 5488
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5491,
                    "end": 5497
                  },
                  "typeArguments": null,
                  "start": 5491,
                  "end": 5497
                },
                "start": 5489,
                "end": 5497
              },
              "accessibility": null,
              "static": false,
              "start": 5483,
              "end": 5498
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearableValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 5579,
                "end": 5593
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5596,
                  "end": 5603
                },
                "start": 5594,
                "end": 5603
              },
              "accessibility": null,
              "static": false,
              "start": 5579,
              "end": 5604
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null,
                "start": 5694,
                "end": 5702
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5705,
                  "end": 5712
                },
                "start": 5703,
                "end": 5712
              },
              "accessibility": null,
              "static": false,
              "start": 5694,
              "end": 5713
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "property",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5901,
                      "end": 5907
                    },
                    "start": 5899,
                    "end": 5907
                  },
                  "start": 5891,
                  "end": 5907
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 5910,
                  "end": 5913
                },
                "start": 5908,
                "end": 5913
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 5890,
              "end": 5914
            }
          ],
          "start": 5396,
          "end": 5916
        },
        "declare": false,
        "start": 5356,
        "end": 5916
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5349,
      "end": 5916
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionValues",
          "optional": false,
          "typeAnnotation": null,
          "start": 5930,
          "end": 5942
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 5945,
              "end": 5951
            },
            {
              "type": "TSNumberKeyword",
              "start": 5954,
              "end": 5960
            },
            {
              "type": "TSBooleanKeyword",
              "start": 5963,
              "end": 5970
            }
          ],
          "start": 5945,
          "end": 5970
        },
        "declare": false,
        "start": 5925,
        "end": 5971
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5918,
      "end": 5971
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MenuRendererProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 5990,
          "end": 6007
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 6008,
                "end": 6014
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6017,
                  "end": 6029
                },
                "typeArguments": null,
                "start": 6017,
                "end": 6029
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 6008,
              "end": 6029
            }
          ],
          "start": 6007,
          "end": 6030
        },
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
                "name": "focusedOption",
                "optional": false,
                "typeAnnotation": null,
                "start": 6150,
                "end": 6163
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6165,
                    "end": 6171
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6172,
                          "end": 6178
                        },
                        "typeArguments": null,
                        "start": 6172,
                        "end": 6178
                      }
                    ],
                    "start": 6171,
                    "end": 6179
                  },
                  "start": 6165,
                  "end": 6179
                },
                "start": 6163,
                "end": 6179
              },
              "accessibility": null,
              "static": false,
              "start": 6150,
              "end": 6180
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "focusOption",
                "optional": false,
                "typeAnnotation": null,
                "start": 6277,
                "end": 6288
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FocusOptionHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6290,
                    "end": 6308
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6309,
                          "end": 6315
                        },
                        "typeArguments": null,
                        "start": 6309,
                        "end": 6315
                      }
                    ],
                    "start": 6308,
                    "end": 6316
                  },
                  "start": 6290,
                  "end": 6316
                },
                "start": 6288,
                "end": 6316
              },
              "accessibility": null,
              "static": false,
              "start": 6277,
              "end": 6317
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "labelKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 6397,
                "end": 6405
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 6407,
                  "end": 6413
                },
                "start": 6405,
                "end": 6413
              },
              "accessibility": null,
              "static": false,
              "start": 6397,
              "end": 6414
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null,
                "start": 6479,
                "end": 6486
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6488,
                    "end": 6495
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6496,
                          "end": 6502
                        },
                        "typeArguments": null,
                        "start": 6496,
                        "end": 6502
                      }
                    ],
                    "start": 6495,
                    "end": 6503
                  },
                  "start": 6488,
                  "end": 6503
                },
                "start": 6486,
                "end": 6503
              },
              "accessibility": null,
              "static": false,
              "start": 6479,
              "end": 6504
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "selectValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 6602,
                "end": 6613
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6615,
                    "end": 6633
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6634,
                          "end": 6640
                        },
                        "typeArguments": null,
                        "start": 6634,
                        "end": 6640
                      }
                    ],
                    "start": 6633,
                    "end": 6641
                  },
                  "start": 6615,
                  "end": 6641
                },
                "start": 6613,
                "end": 6641
              },
              "accessibility": null,
              "static": false,
              "start": 6602,
              "end": 6642
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 6708,
                "end": 6718
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6720,
                    "end": 6727
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6728,
                          "end": 6734
                        },
                        "typeArguments": null,
                        "start": 6728,
                        "end": 6734
                      }
                    ],
                    "start": 6727,
                    "end": 6735
                  },
                  "start": 6720,
                  "end": 6735
                },
                "start": 6718,
                "end": 6735
              },
              "accessibility": null,
              "static": false,
              "start": 6708,
              "end": 6736
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "removeValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 6843,
                "end": 6854
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6856,
                    "end": 6874
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6875,
                          "end": 6881
                        },
                        "typeArguments": null,
                        "start": 6875,
                        "end": 6881
                      }
                    ],
                    "start": 6874,
                    "end": 6882
                  },
                  "start": 6856,
                  "end": 6882
                },
                "start": 6854,
                "end": 6882
              },
              "accessibility": null,
              "static": false,
              "start": 6843,
              "end": 6883
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionRenderer",
                "optional": false,
                "typeAnnotation": null,
                "start": 6982,
                "end": 6996
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OptionRendererHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6998,
                    "end": 7019
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7020,
                          "end": 7026
                        },
                        "typeArguments": null,
                        "start": 7020,
                        "end": 7026
                      }
                    ],
                    "start": 7019,
                    "end": 7027
                  },
                  "start": 6998,
                  "end": 7027
                },
                "start": 6996,
                "end": 7027
              },
              "accessibility": null,
              "static": false,
              "start": 6982,
              "end": 7028
            }
          ],
          "start": 6031,
          "end": 7030
        },
        "declare": false,
        "start": 5980,
        "end": 7030
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5973,
      "end": 7030
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptionComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 7049,
          "end": 7069
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 7070,
                "end": 7076
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7079,
                  "end": 7091
                },
                "typeArguments": null,
                "start": 7079,
                "end": 7091
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7070,
              "end": 7091
            }
          ],
          "start": 7069,
          "end": 7092
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null,
                "start": 7169,
                "end": 7178
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7181,
                  "end": 7187
                },
                "start": 7179,
                "end": 7187
              },
              "accessibility": null,
              "static": false,
              "start": 7169,
              "end": 7188
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "focusOption",
                "optional": false,
                "typeAnnotation": null,
                "start": 7243,
                "end": 7254
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7257,
                    "end": 7263
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7264,
                          "end": 7270
                        },
                        "typeArguments": null,
                        "start": 7264,
                        "end": 7270
                      }
                    ],
                    "start": 7263,
                    "end": 7271
                  },
                  "start": 7257,
                  "end": 7271
                },
                "start": 7255,
                "end": 7271
              },
              "accessibility": null,
              "static": false,
              "start": 7243,
              "end": 7272
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inputValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 7278,
                "end": 7288
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7291,
                  "end": 7297
                },
                "start": 7289,
                "end": 7297
              },
              "accessibility": null,
              "static": false,
              "start": 7278,
              "end": 7298
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "instancePrefix",
                "optional": false,
                "typeAnnotation": null,
                "start": 7303,
                "end": 7317
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7320,
                  "end": 7326
                },
                "start": 7318,
                "end": 7326
              },
              "accessibility": null,
              "static": false,
              "start": 7303,
              "end": 7327
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isDisabled",
                "optional": false,
                "typeAnnotation": null,
                "start": 7389,
                "end": 7399
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7402,
                  "end": 7409
                },
                "start": 7400,
                "end": 7409
              },
              "accessibility": null,
              "static": false,
              "start": 7389,
              "end": 7410
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFocused",
                "optional": false,
                "typeAnnotation": null,
                "start": 7471,
                "end": 7480
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7483,
                  "end": 7490
                },
                "start": 7481,
                "end": 7490
              },
              "accessibility": null,
              "static": false,
              "start": 7471,
              "end": 7491
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSelected",
                "optional": false,
                "typeAnnotation": null,
                "start": 7553,
                "end": 7563
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7566,
                  "end": 7573
                },
                "start": 7564,
                "end": 7573
              },
              "accessibility": null,
              "static": false,
              "start": 7553,
              "end": 7574
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onFocus",
                "optional": false,
                "typeAnnotation": null,
                "start": 7655,
                "end": 7662
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
                      "name": "option",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7674,
                            "end": 7680
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7681,
                                  "end": 7687
                                },
                                "typeArguments": null,
                                "start": 7681,
                                "end": 7687
                              }
                            ],
                            "start": 7680,
                            "end": 7688
                          },
                          "start": 7674,
                          "end": 7688
                        },
                        "start": 7672,
                        "end": 7688
                      },
                      "start": 7666,
                      "end": 7688
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 7697,
                          "end": 7700
                        },
                        "start": 7695,
                        "end": 7700
                      },
                      "start": 7690,
                      "end": 7700
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7705,
                      "end": 7709
                    },
                    "start": 7702,
                    "end": 7709
                  },
                  "start": 7665,
                  "end": 7709
                },
                "start": 7663,
                "end": 7709
              },
              "accessibility": null,
              "static": false,
              "start": 7655,
              "end": 7710
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onSelect",
                "optional": false,
                "typeAnnotation": null,
                "start": 7792,
                "end": 7800
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
                      "name": "option",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7812,
                            "end": 7818
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7819,
                                  "end": 7825
                                },
                                "typeArguments": null,
                                "start": 7819,
                                "end": 7825
                              }
                            ],
                            "start": 7818,
                            "end": 7826
                          },
                          "start": 7812,
                          "end": 7826
                        },
                        "start": 7810,
                        "end": 7826
                      },
                      "start": 7804,
                      "end": 7826
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 7835,
                          "end": 7838
                        },
                        "start": 7833,
                        "end": 7838
                      },
                      "start": 7828,
                      "end": 7838
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7843,
                      "end": 7847
                    },
                    "start": 7840,
                    "end": 7847
                  },
                  "start": 7803,
                  "end": 7847
                },
                "start": 7801,
                "end": 7847
              },
              "accessibility": null,
              "static": false,
              "start": 7792,
              "end": 7848
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "option",
                "optional": false,
                "typeAnnotation": null,
                "start": 7918,
                "end": 7924
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7926,
                    "end": 7932
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7933,
                          "end": 7939
                        },
                        "typeArguments": null,
                        "start": 7933,
                        "end": 7939
                      }
                    ],
                    "start": 7932,
                    "end": 7940
                  },
                  "start": 7926,
                  "end": 7940
                },
                "start": 7924,
                "end": 7940
              },
              "accessibility": null,
              "static": false,
              "start": 7918,
              "end": 7941
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 8017,
                "end": 8028
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 8031,
                  "end": 8037
                },
                "start": 8029,
                "end": 8037
              },
              "accessibility": null,
              "static": false,
              "start": 8017,
              "end": 8038
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "removeValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 8182,
                "end": 8193
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8204,
                                "end": 8210
                              },
                              "typeArguments": null,
                              "start": 8204,
                              "end": 8210
                            },
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8213,
                                  "end": 8219
                                },
                                "typeArguments": null,
                                "start": 8213,
                                "end": 8219
                              },
                              "start": 8213,
                              "end": 8221
                            }
                          ],
                          "start": 8204,
                          "end": 8221
                        },
                        "start": 8202,
                        "end": 8221
                      },
                      "start": 8197,
                      "end": 8221
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 8226,
                      "end": 8230
                    },
                    "start": 8223,
                    "end": 8230
                  },
                  "start": 8196,
                  "end": 8230
                },
                "start": 8194,
                "end": 8230
              },
              "accessibility": null,
              "static": false,
              "start": 8182,
              "end": 8231
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "selectValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 8341,
                "end": 8352
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8363,
                                "end": 8369
                              },
                              "typeArguments": null,
                              "start": 8363,
                              "end": 8369
                            },
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8372,
                                  "end": 8378
                                },
                                "typeArguments": null,
                                "start": 8372,
                                "end": 8378
                              },
                              "start": 8372,
                              "end": 8380
                            }
                          ],
                          "start": 8363,
                          "end": 8380
                        },
                        "start": 8361,
                        "end": 8380
                      },
                      "start": 8356,
                      "end": 8380
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 8385,
                      "end": 8389
                    },
                    "start": 8382,
                    "end": 8389
                  },
                  "start": 8355,
                  "end": 8389
                },
                "start": 8353,
                "end": 8389
              },
              "accessibility": null,
              "static": false,
              "start": 8341,
              "end": 8390
            }
          ],
          "start": 7093,
          "end": 8392
        },
        "declare": false,
        "start": 7039,
        "end": 8392
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 7032,
      "end": 8392
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArrowRendererProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 8411,
          "end": 8429
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
                "name": "onMouseDown",
                "optional": false,
                "typeAnnotation": null,
                "start": 8491,
                "end": 8502
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8504,
                      "end": 8509
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8510,
                      "end": 8527
                    },
                    "start": 8504,
                    "end": 8527
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 8528,
                        "end": 8531
                      }
                    ],
                    "start": 8527,
                    "end": 8532
                  },
                  "start": 8504,
                  "end": 8532
                },
                "start": 8502,
                "end": 8532
              },
              "accessibility": null,
              "static": false,
              "start": 8491,
              "end": 8533
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isOpen",
                "optional": false,
                "typeAnnotation": null,
                "start": 8597,
                "end": 8603
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 8605,
                  "end": 8612
                },
                "start": 8603,
                "end": 8612
              },
              "accessibility": null,
              "static": false,
              "start": 8597,
              "end": 8613
            }
          ],
          "start": 8430,
          "end": 8615
        },
        "declare": false,
        "start": 8401,
        "end": 8615
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8394,
      "end": 8615
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 8634,
          "end": 8653
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 8654,
                "end": 8660
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8663,
                  "end": 8675
                },
                "typeArguments": null,
                "start": 8663,
                "end": 8675
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 8654,
              "end": 8675
            }
          ],
          "start": 8653,
          "end": 8676
        },
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
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null,
                "start": 8683,
                "end": 8691
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactSelectProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8693,
                      "end": 8709
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8710,
                            "end": 8716
                          },
                          "typeArguments": null,
                          "start": 8710,
                          "end": 8716
                        }
                      ],
                      "start": 8709,
                      "end": 8717
                    },
                    "start": 8693,
                    "end": 8717
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "disabled",
                      "raw": "'disabled'",
                      "start": 8718,
                      "end": 8728
                    },
                    "start": 8718,
                    "end": 8728
                  },
                  "start": 8693,
                  "end": 8729
                },
                "start": 8691,
                "end": 8729
              },
              "accessibility": null,
              "static": false,
              "start": 8683,
              "end": 8730
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 8735,
                "end": 8737
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8739,
                  "end": 8745
                },
                "start": 8737,
                "end": 8745
              },
              "accessibility": null,
              "static": false,
              "start": 8735,
              "end": 8746
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "instancePrefix",
                "optional": false,
                "typeAnnotation": null,
                "start": 8751,
                "end": 8765
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8767,
                  "end": 8773
                },
                "start": 8765,
                "end": 8773
              },
              "accessibility": null,
              "static": false,
              "start": 8751,
              "end": 8774
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null,
                "start": 8779,
                "end": 8786
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OnValueClickHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8788,
                        "end": 8807
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8808,
                              "end": 8814
                            },
                            "typeArguments": null,
                            "start": 8808,
                            "end": 8814
                          }
                        ],
                        "start": 8807,
                        "end": 8815
                      },
                      "start": 8788,
                      "end": 8815
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 8818,
                      "end": 8822
                    }
                  ],
                  "start": 8788,
                  "end": 8822
                },
                "start": 8786,
                "end": 8822
              },
              "accessibility": null,
              "static": false,
              "start": 8779,
              "end": 8823
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onRemove",
                "optional": false,
                "typeAnnotation": null,
                "start": 8828,
                "end": 8836
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8839,
                    "end": 8857
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8858,
                          "end": 8864
                        },
                        "typeArguments": null,
                        "start": 8858,
                        "end": 8864
                      }
                    ],
                    "start": 8857,
                    "end": 8865
                  },
                  "start": 8839,
                  "end": 8865
                },
                "start": 8837,
                "end": 8865
              },
              "accessibility": null,
              "static": false,
              "start": 8828,
              "end": 8866
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "placeholder",
                "optional": false,
                "typeAnnotation": null,
                "start": 8871,
                "end": 8882
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactSelectProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8884,
                      "end": 8900
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8901,
                            "end": 8907
                          },
                          "typeArguments": null,
                          "start": 8901,
                          "end": 8907
                        }
                      ],
                      "start": 8900,
                      "end": 8908
                    },
                    "start": 8884,
                    "end": 8908
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "placeholder",
                      "raw": "'placeholder'",
                      "start": 8909,
                      "end": 8922
                    },
                    "start": 8909,
                    "end": 8922
                  },
                  "start": 8884,
                  "end": 8923
                },
                "start": 8882,
                "end": 8923
              },
              "accessibility": null,
              "static": false,
              "start": 8871,
              "end": 8924
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 8929,
                "end": 8934
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8936,
                    "end": 8942
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8943,
                          "end": 8949
                        },
                        "typeArguments": null,
                        "start": 8943,
                        "end": 8949
                      }
                    ],
                    "start": 8942,
                    "end": 8950
                  },
                  "start": 8936,
                  "end": 8950
                },
                "start": 8934,
                "end": 8950
              },
              "accessibility": null,
              "static": false,
              "start": 8929,
              "end": 8951
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null,
                "start": 8956,
                "end": 8962
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8965,
                    "end": 8970
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Option",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8971,
                          "end": 8977
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8978,
                                "end": 8984
                              },
                              "typeArguments": null,
                              "start": 8978,
                              "end": 8984
                            }
                          ],
                          "start": 8977,
                          "end": 8985
                        },
                        "start": 8971,
                        "end": 8985
                      }
                    ],
                    "start": 8970,
                    "end": 8986
                  },
                  "start": 8965,
                  "end": 8986
                },
                "start": 8963,
                "end": 8986
              },
              "accessibility": null,
              "static": false,
              "start": 8956,
              "end": 8987
            }
          ],
          "start": 8677,
          "end": 8989
        },
        "declare": false,
        "start": 8624,
        "end": 8989
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8617,
      "end": 8989
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReactSelectProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 9008,
          "end": 9024
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 9025,
                "end": 9031
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9034,
                  "end": 9046
                },
                "typeArguments": null,
                "start": 9034,
                "end": 9046
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 9025,
              "end": 9046
            }
          ],
          "start": 9024,
          "end": 9047
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 9056,
                "end": 9061
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 9062,
                "end": 9067
              },
              "optional": false,
              "computed": false,
              "start": 9056,
              "end": 9067
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactSelectClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9068,
                    "end": 9084
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9085,
                          "end": 9091
                        },
                        "typeArguments": null,
                        "start": 9085,
                        "end": 9091
                      }
                    ],
                    "start": 9084,
                    "end": 9092
                  },
                  "start": 9068,
                  "end": 9092
                }
              ],
              "start": 9067,
              "end": 9093
            },
            "start": 9056,
            "end": 9093
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "addLabelText",
                "optional": false,
                "typeAnnotation": null,
                "start": 9200,
                "end": 9212
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 9215,
                  "end": 9221
                },
                "start": 9213,
                "end": 9221
              },
              "accessibility": null,
              "static": false,
              "start": 9200,
              "end": 9222
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrowRenderer",
                "optional": false,
                "typeAnnotation": null,
                "start": 9359,
                "end": 9372
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowRendererHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9375,
                        "end": 9395
                      },
                      "typeArguments": null,
                      "start": 9375,
                      "end": 9395
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 9398,
                      "end": 9402
                    }
                  ],
                  "start": 9375,
                  "end": 9402
                },
                "start": 9373,
                "end": 9402
              },
              "accessibility": null,
              "static": false,
              "start": 9359,
              "end": 9403
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "autoBlur",
                "optional": false,
                "typeAnnotation": null,
                "start": 9561,
                "end": 9569
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9572,
                  "end": 9579
                },
                "start": 9570,
                "end": 9579
              },
              "accessibility": null,
              "static": false,
              "start": 9561,
              "end": 9580
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "autofocus",
                "optional": false,
                "typeAnnotation": null,
                "start": 9705,
                "end": 9714
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9717,
                  "end": 9724
                },
                "start": 9715,
                "end": 9724
              },
              "accessibility": null,
              "static": false,
              "start": 9705,
              "end": 9725
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "autoFocus",
                "optional": false,
                "typeAnnotation": null,
                "start": 9808,
                "end": 9817
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9820,
                  "end": 9827
                },
                "start": 9818,
                "end": 9827
              },
              "accessibility": null,
              "static": false,
              "start": 9808,
              "end": 9828
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "autosize",
                "optional": false,
                "typeAnnotation": null,
                "start": 9928,
                "end": 9936
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9939,
                  "end": 9946
                },
                "start": 9937,
                "end": 9946
              },
              "accessibility": null,
              "static": false,
              "start": 9928,
              "end": 9947
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "backspaceRemoves",
                "optional": false,
                "typeAnnotation": null,
                "start": 10074,
                "end": 10090
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 10093,
                  "end": 10100
                },
                "start": 10091,
                "end": 10100
              },
              "accessibility": null,
              "static": false,
              "start": 10074,
              "end": 10101
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "backspaceToRemoveMessage",
                "optional": false,
                "typeAnnotation": null,
                "start": 10302,
                "end": 10326
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10329,
                  "end": 10335
                },
                "start": 10327,
                "end": 10335
              },
              "accessibility": null,
              "static": false,
              "start": 10302,
              "end": 10336
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null,
                "start": 10400,
                "end": 10409
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10412,
                  "end": 10418
                },
                "start": 10410,
                "end": 10418
              },
              "accessibility": null,
              "static": false,
              "start": 10400,
              "end": 10419
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classNamePrefix",
                "optional": false,
                "typeAnnotation": null,
                "start": 10520,
                "end": 10535
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10538,
                  "end": 10544
                },
                "start": 10536,
                "end": 10544
              },
              "accessibility": null,
              "static": false,
              "start": 10520,
              "end": 10545
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearAllText",
                "optional": false,
                "typeAnnotation": null,
                "start": 10652,
                "end": 10664
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10667,
                  "end": 10673
                },
                "start": 10665,
                "end": 10673
              },
              "accessibility": null,
              "static": false,
              "start": 10652,
              "end": 10674
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearRenderer",
                "optional": false,
                "typeAnnotation": null,
                "start": 10820,
                "end": 10833
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClearRendererHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10836,
                    "end": 10856
                  },
                  "typeArguments": null,
                  "start": 10836,
                  "end": 10856
                },
                "start": 10834,
                "end": 10856
              },
              "accessibility": null,
              "static": false,
              "start": 10820,
              "end": 10857
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearValueText",
                "optional": false,
                "typeAnnotation": null,
                "start": 10945,
                "end": 10959
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10962,
                  "end": 10968
                },
                "start": 10960,
                "end": 10968
              },
              "accessibility": null,
              "static": false,
              "start": 10945,
              "end": 10969
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "closeOnSelect",
                "optional": false,
                "typeAnnotation": null,
                "start": 11069,
                "end": 11082
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11085,
                  "end": 11092
                },
                "start": 11083,
                "end": 11092
              },
              "accessibility": null,
              "static": false,
              "start": 11069,
              "end": 11093
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearable",
                "optional": false,
                "typeAnnotation": null,
                "start": 11236,
                "end": 11245
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11248,
                  "end": 11255
                },
                "start": 11246,
                "end": 11255
              },
              "accessibility": null,
              "static": false,
              "start": 11236,
              "end": 11256
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "deleteRemoves",
                "optional": false,
                "typeAnnotation": null,
                "start": 11365,
                "end": 11378
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11381,
                  "end": 11388
                },
                "start": 11379,
                "end": 11388
              },
              "accessibility": null,
              "static": false,
              "start": 11365,
              "end": 11389
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delimiter",
                "optional": false,
                "typeAnnotation": null,
                "start": 11478,
                "end": 11487
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 11490,
                  "end": 11496
                },
                "start": 11488,
                "end": 11496
              },
              "accessibility": null,
              "static": false,
              "start": 11478,
              "end": 11497
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null,
                "start": 11585,
                "end": 11593
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11596,
                  "end": 11603
                },
                "start": 11594,
                "end": 11603
              },
              "accessibility": null,
              "static": false,
              "start": 11585,
              "end": 11604
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "escapeClearsValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 11709,
                "end": 11726
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11729,
                  "end": 11736
                },
                "start": 11727,
                "end": 11736
              },
              "accessibility": null,
              "static": false,
              "start": 11709,
              "end": 11737
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filterOption",
                "optional": false,
                "typeAnnotation": null,
                "start": 11798,
                "end": 11810
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FilterOptionHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11813,
                    "end": 11832
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11833,
                          "end": 11839
                        },
                        "typeArguments": null,
                        "start": 11833,
                        "end": 11839
                      }
                    ],
                    "start": 11832,
                    "end": 11840
                  },
                  "start": 11813,
                  "end": 11840
                },
                "start": 11811,
                "end": 11840
              },
              "accessibility": null,
              "static": false,
              "start": 11798,
              "end": 11841
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filterOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 11904,
                "end": 11917
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FilterOptionsHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11920,
                    "end": 11940
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11941,
                          "end": 11947
                        },
                        "typeArguments": null,
                        "start": 11941,
                        "end": 11947
                      }
                    ],
                    "start": 11940,
                    "end": 11948
                  },
                  "start": 11920,
                  "end": 11948
                },
                "start": 11918,
                "end": 11948
              },
              "accessibility": null,
              "static": false,
              "start": 11904,
              "end": 11949
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 12044,
                "end": 12046
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 12049,
                  "end": 12055
                },
                "start": 12047,
                "end": 12055
              },
              "accessibility": null,
              "static": false,
              "start": 12044,
              "end": 12056
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ignoreAccents",
                "optional": false,
                "typeAnnotation": null,
                "start": 12148,
                "end": 12161
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12164,
                  "end": 12171
                },
                "start": 12162,
                "end": 12171
              },
              "accessibility": null,
              "static": false,
              "start": 12148,
              "end": 12172
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ignoreCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 12267,
                "end": 12277
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12280,
                  "end": 12287
                },
                "start": 12278,
                "end": 12287
              },
              "accessibility": null,
              "static": false,
              "start": 12267,
              "end": 12288
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inputProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 12416,
                "end": 12426
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 12437,
                              "end": 12443
                            },
                            "start": 12435,
                            "end": 12443
                          },
                          "start": 12432,
                          "end": 12443
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 12446,
                          "end": 12449
                        },
                        "start": 12444,
                        "end": 12449
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 12431,
                      "end": 12449
                    }
                  ],
                  "start": 12429,
                  "end": 12451
                },
                "start": 12427,
                "end": 12451
              },
              "accessibility": null,
              "static": false,
              "start": 12416,
              "end": 12452
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inputRenderer",
                "optional": false,
                "typeAnnotation": null,
                "start": 12503,
                "end": 12516
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InputRendererHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12519,
                    "end": 12539
                  },
                  "typeArguments": null,
                  "start": 12519,
                  "end": 12539
                },
                "start": 12517,
                "end": 12539
              },
              "accessibility": null,
              "static": false,
              "start": 12503,
              "end": 12540
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "instanceId",
                "optional": false,
                "typeAnnotation": null,
                "start": 12699,
                "end": 12709
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 12712,
                  "end": 12718
                },
                "start": 12710,
                "end": 12718
              },
              "accessibility": null,
              "static": false,
              "start": 12699,
              "end": 12719
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isLoading",
                "optional": false,
                "typeAnnotation": null,
                "start": 12916,
                "end": 12925
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12928,
                  "end": 12935
                },
                "start": 12926,
                "end": 12935
              },
              "accessibility": null,
              "static": false,
              "start": 12916,
              "end": 12936
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "joinValues",
                "optional": false,
                "typeAnnotation": null,
                "start": 13066,
                "end": 13076
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 13079,
                  "end": 13086
                },
                "start": 13077,
                "end": 13086
              },
              "accessibility": null,
              "static": false,
              "start": 13066,
              "end": 13087
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "labelKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 13180,
                "end": 13188
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13191,
                  "end": 13197
                },
                "start": 13189,
                "end": 13197
              },
              "accessibility": null,
              "static": false,
              "start": 13180,
              "end": 13198
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "matchPos",
                "optional": false,
                "typeAnnotation": null,
                "start": 13309,
                "end": 13317
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13320,
                  "end": 13326
                },
                "start": 13318,
                "end": 13326
              },
              "accessibility": null,
              "static": false,
              "start": 13309,
              "end": 13327
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "matchProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 13432,
                "end": 13441
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13444,
                  "end": 13450
                },
                "start": 13442,
                "end": 13450
              },
              "accessibility": null,
              "static": false,
              "start": 13432,
              "end": 13451
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "menuBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 13600,
                "end": 13610
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 13613,
                  "end": 13619
                },
                "start": 13611,
                "end": 13619
              },
              "accessibility": null,
              "static": false,
              "start": 13600,
              "end": 13620
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "menuContainerStyle",
                "optional": false,
                "typeAnnotation": null,
                "start": 13694,
                "end": 13712
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13715,
                      "end": 13720
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13721,
                      "end": 13734
                    },
                    "start": 13715,
                    "end": 13734
                  },
                  "typeArguments": null,
                  "start": 13715,
                  "end": 13734
                },
                "start": 13713,
                "end": 13734
              },
              "accessibility": null,
              "static": false,
              "start": 13694,
              "end": 13735
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "menuRenderer",
                "optional": false,
                "typeAnnotation": null,
                "start": 13798,
                "end": 13810
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MenuRendererHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13813,
                    "end": 13832
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13833,
                          "end": 13839
                        },
                        "typeArguments": null,
                        "start": 13833,
                        "end": 13839
                      }
                    ],
                    "start": 13832,
                    "end": 13840
                  },
                  "start": 13813,
                  "end": 13840
                },
                "start": 13811,
                "end": 13840
              },
              "accessibility": null,
              "static": false,
              "start": 13798,
              "end": 13841
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "menuStyle",
                "optional": false,
                "typeAnnotation": null,
                "start": 13905,
                "end": 13914
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13917,
                      "end": 13922
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13923,
                      "end": 13936
                    },
                    "start": 13917,
                    "end": 13936
                  },
                  "typeArguments": null,
                  "start": 13917,
                  "end": 13936
                },
                "start": 13915,
                "end": 13936
              },
              "accessibility": null,
              "static": false,
              "start": 13905,
              "end": 13937
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "multi",
                "optional": false,
                "typeAnnotation": null,
                "start": 14005,
                "end": 14010
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14013,
                  "end": 14020
                },
                "start": 14011,
                "end": 14020
              },
              "accessibility": null,
              "static": false,
              "start": 14005,
              "end": 14021
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 14086,
                "end": 14090
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 14093,
                  "end": 14099
                },
                "start": 14091,
                "end": 14099
              },
              "accessibility": null,
              "static": false,
              "start": 14086,
              "end": 14100
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noResultsText",
                "optional": false,
                "typeAnnotation": null,
                "start": 14255,
                "end": 14268
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 14271,
                      "end": 14277
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14280,
                          "end": 14283
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14284,
                          "end": 14291
                        },
                        "start": 14280,
                        "end": 14291
                      },
                      "typeArguments": null,
                      "start": 14280,
                      "end": 14291
                    }
                  ],
                  "start": 14271,
                  "end": 14291
                },
                "start": 14269,
                "end": 14291
              },
              "accessibility": null,
              "static": false,
              "start": 14255,
              "end": 14292
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onBlur",
                "optional": false,
                "typeAnnotation": null,
                "start": 14356,
                "end": 14362
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnBlurHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14365,
                    "end": 14378
                  },
                  "typeArguments": null,
                  "start": 14365,
                  "end": 14378
                },
                "start": 14363,
                "end": 14378
              },
              "accessibility": null,
              "static": false,
              "start": 14356,
              "end": 14379
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onBlurResetsInput",
                "optional": false,
                "typeAnnotation": null,
                "start": 14466,
                "end": 14483
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14486,
                  "end": 14493
                },
                "start": 14484,
                "end": 14493
              },
              "accessibility": null,
              "static": false,
              "start": 14466,
              "end": 14494
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onSelectResetsInput",
                "optional": false,
                "typeAnnotation": null,
                "start": 14753,
                "end": 14772
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14775,
                  "end": 14782
                },
                "start": 14773,
                "end": 14782
              },
              "accessibility": null,
              "static": false,
              "start": 14753,
              "end": 14783
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onCloseResetsInput",
                "optional": false,
                "typeAnnotation": null,
                "start": 14895,
                "end": 14913
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14916,
                  "end": 14923
                },
                "start": 14914,
                "end": 14923
              },
              "accessibility": null,
              "static": false,
              "start": 14895,
              "end": 14924
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 14993,
                "end": 15001
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnChangeHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15004,
                    "end": 15019
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 15020,
                          "end": 15026
                        },
                        "typeArguments": null,
                        "start": 15020,
                        "end": 15026
                      }
                    ],
                    "start": 15019,
                    "end": 15027
                  },
                  "start": 15004,
                  "end": 15027
                },
                "start": 15002,
                "end": 15027
              },
              "accessibility": null,
              "static": false,
              "start": 14993,
              "end": 15028
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onClose",
                "optional": false,
                "typeAnnotation": null,
                "start": 15086,
                "end": 15093
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnCloseHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15096,
                    "end": 15110
                  },
                  "typeArguments": null,
                  "start": 15096,
                  "end": 15110
                },
                "start": 15094,
                "end": 15110
              },
              "accessibility": null,
              "static": false,
              "start": 15086,
              "end": 15111
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onFocus",
                "optional": false,
                "typeAnnotation": null,
                "start": 15176,
                "end": 15183
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnFocusHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15186,
                    "end": 15200
                  },
                  "typeArguments": null,
                  "start": 15186,
                  "end": 15200
                },
                "start": 15184,
                "end": 15200
              },
              "accessibility": null,
              "static": false,
              "start": 15176,
              "end": 15201
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onInputChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 15277,
                "end": 15290
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnInputChangeHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15293,
                    "end": 15313
                  },
                  "typeArguments": null,
                  "start": 15293,
                  "end": 15313
                },
                "start": 15291,
                "end": 15313
              },
              "accessibility": null,
              "static": false,
              "start": 15277,
              "end": 15314
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onInputKeyDown",
                "optional": false,
                "typeAnnotation": null,
                "start": 15394,
                "end": 15408
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnInputKeyDownHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15411,
                    "end": 15432
                  },
                  "typeArguments": null,
                  "start": 15411,
                  "end": 15432
                },
                "start": 15409,
                "end": 15432
              },
              "accessibility": null,
              "static": false,
              "start": 15394,
              "end": 15433
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onMenuScrollToBottom",
                "optional": false,
                "typeAnnotation": null,
                "start": 15540,
                "end": 15560
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnMenuScrollToBottomHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15563,
                    "end": 15590
                  },
                  "typeArguments": null,
                  "start": 15563,
                  "end": 15590
                },
                "start": 15561,
                "end": 15590
              },
              "accessibility": null,
              "static": false,
              "start": 15540,
              "end": 15591
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onOpen",
                "optional": false,
                "typeAnnotation": null,
                "start": 15649,
                "end": 15655
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnOpenHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15658,
                    "end": 15671
                  },
                  "typeArguments": null,
                  "start": 15658,
                  "end": 15671
                },
                "start": 15656,
                "end": 15671
              },
              "accessibility": null,
              "static": false,
              "start": 15649,
              "end": 15672
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "openOnClick",
                "optional": false,
                "typeAnnotation": null,
                "start": 15770,
                "end": 15781
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 15784,
                  "end": 15791
                },
                "start": 15782,
                "end": 15791
              },
              "accessibility": null,
              "static": false,
              "start": 15770,
              "end": 15792
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "openOnFocus",
                "optional": false,
                "typeAnnotation": null,
                "start": 15918,
                "end": 15929
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 15932,
                  "end": 15939
                },
                "start": 15930,
                "end": 15939
              },
              "accessibility": null,
              "static": false,
              "start": 15918,
              "end": 15940
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionClassName",
                "optional": false,
                "typeAnnotation": null,
                "start": 16010,
                "end": 16025
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 16028,
                  "end": 16034
                },
                "start": 16026,
                "end": 16034
              },
              "accessibility": null,
              "static": false,
              "start": 16010,
              "end": 16035
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 16102,
                "end": 16117
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OptionComponentType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16120,
                    "end": 16139
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 16140,
                          "end": 16146
                        },
                        "typeArguments": null,
                        "start": 16140,
                        "end": 16146
                      }
                    ],
                    "start": 16139,
                    "end": 16147
                  },
                  "start": 16120,
                  "end": 16147
                },
                "start": 16118,
                "end": 16147
              },
              "accessibility": null,
              "static": false,
              "start": 16102,
              "end": 16148
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionRenderer",
                "optional": false,
                "typeAnnotation": null,
                "start": 16246,
                "end": 16260
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OptionRendererHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16263,
                    "end": 16284
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 16285,
                          "end": 16291
                        },
                        "typeArguments": null,
                        "start": 16285,
                        "end": 16291
                      }
                    ],
                    "start": 16284,
                    "end": 16292
                  },
                  "start": 16263,
                  "end": 16292
                },
                "start": 16261,
                "end": 16292
              },
              "accessibility": null,
              "static": false,
              "start": 16246,
              "end": 16293
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null,
                "start": 16367,
                "end": 16374
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16377,
                    "end": 16384
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 16385,
                          "end": 16391
                        },
                        "typeArguments": null,
                        "start": 16385,
                        "end": 16391
                      }
                    ],
                    "start": 16384,
                    "end": 16392
                  },
                  "start": 16377,
                  "end": 16392
                },
                "start": 16375,
                "end": 16392
              },
              "accessibility": null,
              "static": false,
              "start": 16367,
              "end": 16393
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pageSize",
                "optional": false,
                "typeAnnotation": null,
                "start": 16494,
                "end": 16502
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16505,
                  "end": 16511
                },
                "start": 16503,
                "end": 16511
              },
              "accessibility": null,
              "static": false,
              "start": 16494,
              "end": 16512
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "placeholder",
                "optional": false,
                "typeAnnotation": null,
                "start": 16619,
                "end": 16630
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 16633,
                      "end": 16639
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 16642,
                          "end": 16645
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 16646,
                          "end": 16653
                        },
                        "start": 16642,
                        "end": 16653
                      },
                      "typeArguments": null,
                      "start": 16642,
                      "end": 16653
                    }
                  ],
                  "start": 16633,
                  "end": 16653
                },
                "start": 16631,
                "end": 16653
              },
              "accessibility": null,
              "static": false,
              "start": 16619,
              "end": 16654
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "removeSelected",
                "optional": false,
                "typeAnnotation": null,
                "start": 16777,
                "end": 16791
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 16794,
                  "end": 16801
                },
                "start": 16792,
                "end": 16801
              },
              "accessibility": null,
              "static": false,
              "start": 16777,
              "end": 16802
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null,
                "start": 16897,
                "end": 16905
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 16908,
                  "end": 16915
                },
                "start": 16906,
                "end": 16915
              },
              "accessibility": null,
              "static": false,
              "start": 16897,
              "end": 16916
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "resetValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 16984,
                "end": 16994
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 16997,
                  "end": 17000
                },
                "start": 16995,
                "end": 17000
              },
              "accessibility": null,
              "static": false,
              "start": 16984,
              "end": 17001
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "rtl",
                "optional": false,
                "typeAnnotation": null,
                "start": 17095,
                "end": 17098
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17101,
                  "end": 17108
                },
                "start": 17099,
                "end": 17108
              },
              "accessibility": null,
              "static": false,
              "start": 17095,
              "end": 17109
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "scrollMenuIntoView",
                "optional": false,
                "typeAnnotation": null,
                "start": 17230,
                "end": 17248
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17251,
                  "end": 17258
                },
                "start": 17249,
                "end": 17258
              },
              "accessibility": null,
              "static": false,
              "start": 17230,
              "end": 17259
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "searchable",
                "optional": false,
                "typeAnnotation": null,
                "start": 17352,
                "end": 17362
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17365,
                  "end": 17372
                },
                "start": 17363,
                "end": 17372
              },
              "accessibility": null,
              "static": false,
              "start": 17352,
              "end": 17373
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tabSelectsValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 17479,
                "end": 17494
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17497,
                  "end": 17504
                },
                "start": 17495,
                "end": 17504
              },
              "accessibility": null,
              "static": false,
              "start": 17479,
              "end": 17505
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 17553,
                "end": 17558
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Option",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 17561,
                        "end": 17567
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 17568,
                              "end": 17574
                            },
                            "typeArguments": null,
                            "start": 17568,
                            "end": 17574
                          }
                        ],
                        "start": 17567,
                        "end": 17575
                      },
                      "start": 17561,
                      "end": 17575
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 17578,
                        "end": 17585
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 17586,
                              "end": 17592
                            },
                            "typeArguments": null,
                            "start": 17586,
                            "end": 17592
                          }
                        ],
                        "start": 17585,
                        "end": 17593
                      },
                      "start": 17578,
                      "end": 17593
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 17596,
                      "end": 17602
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 17605,
                        "end": 17611
                      },
                      "start": 17605,
                      "end": 17613
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 17616,
                      "end": 17622
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 17625,
                        "end": 17631
                      },
                      "start": 17625,
                      "end": 17633
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 17636,
                      "end": 17643
                    }
                  ],
                  "start": 17561,
                  "end": 17643
                },
                "start": 17559,
                "end": 17643
              },
              "accessibility": null,
              "static": false,
              "start": 17553,
              "end": 17644
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 17737,
                "end": 17745
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 17748,
                  "end": 17754
                },
                "start": 17746,
                "end": 17754
              },
              "accessibility": null,
              "static": false,
              "start": 17737,
              "end": 17755
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueRenderer",
                "optional": false,
                "typeAnnotation": null,
                "start": 17870,
                "end": 17883
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ValueRendererHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17886,
                    "end": 17906
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 17907,
                          "end": 17913
                        },
                        "typeArguments": null,
                        "start": 17907,
                        "end": 17913
                      }
                    ],
                    "start": 17906,
                    "end": 17914
                  },
                  "start": 17886,
                  "end": 17914
                },
                "start": 17884,
                "end": 17914
              },
              "accessibility": null,
              "static": false,
              "start": 17870,
              "end": 17915
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "style",
                "optional": false,
                "typeAnnotation": null,
                "start": 17983,
                "end": 17988
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17991,
                      "end": 17996
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17997,
                      "end": 18010
                    },
                    "start": 17991,
                    "end": 18010
                  },
                  "typeArguments": null,
                  "start": 17991,
                  "end": 18010
                },
                "start": 17989,
                "end": 18010
              },
              "accessibility": null,
              "static": false,
              "start": 17983,
              "end": 18011
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tabIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 18075,
                "end": 18083
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 18086,
                      "end": 18092
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 18095,
                      "end": 18101
                    }
                  ],
                  "start": 18086,
                  "end": 18101
                },
                "start": 18084,
                "end": 18101
              },
              "accessibility": null,
              "static": false,
              "start": 18075,
              "end": 18102
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 18158,
                "end": 18172
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ValueComponentType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 18175,
                    "end": 18193
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 18194,
                          "end": 18200
                        },
                        "typeArguments": null,
                        "start": 18194,
                        "end": 18200
                      }
                    ],
                    "start": 18193,
                    "end": 18201
                  },
                  "start": 18175,
                  "end": 18201
                },
                "start": 18173,
                "end": 18201
              },
              "accessibility": null,
              "static": false,
              "start": 18158,
              "end": 18202
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapperStyle",
                "optional": false,
                "typeAnnotation": null,
                "start": 18281,
                "end": 18293
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 18296,
                      "end": 18301
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 18302,
                      "end": 18315
                    },
                    "start": 18296,
                    "end": 18315
                  },
                  "typeArguments": null,
                  "start": 18296,
                  "end": 18315
                },
                "start": 18294,
                "end": 18315
              },
              "accessibility": null,
              "static": false,
              "start": 18281,
              "end": 18316
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onValueClick",
                "optional": false,
                "typeAnnotation": null,
                "start": 18406,
                "end": 18418
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnValueClickHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 18421,
                    "end": 18440
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 18441,
                          "end": 18447
                        },
                        "typeArguments": null,
                        "start": 18441,
                        "end": 18447
                      }
                    ],
                    "start": 18440,
                    "end": 18448
                  },
                  "start": 18421,
                  "end": 18448
                },
                "start": 18419,
                "end": 18448
              },
              "accessibility": null,
              "static": false,
              "start": 18406,
              "end": 18449
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "simpleValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 18565,
                "end": 18576
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 18579,
                  "end": 18586
                },
                "start": 18577,
                "end": 18586
              },
              "accessibility": null,
              "static": false,
              "start": 18565,
              "end": 18587
            }
          ],
          "start": 9094,
          "end": 18589
        },
        "declare": false,
        "start": 8998,
        "end": 18589
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8991,
      "end": 18589
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 18589
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 54,
    "end": 56,
    "range": [
      54,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67,
    "range": [
      63,
      67
    ]
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 68,
    "end": 75,
    "range": [
      68,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 79,
    "end": 88,
    "range": [
      79,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 89,
    "end": 94,
    "range": [
      89,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 97,
    "end": 104,
    "range": [
      97,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 105,
    "end": 117,
    "range": [
      105,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 125,
    "end": 130,
    "range": [
      125,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 133,
    "end": 139,
    "range": [
      133,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 152,
    "end": 160,
    "range": [
      152,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 162,
    "end": 167,
    "range": [
      162,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 181,
    "end": 190,
    "range": [
      181,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 193,
    "end": 197,
    "range": [
      193,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 202,
    "end": 206,
    "range": [
      202,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractValueType",
    "start": 207,
    "end": 223,
    "range": [
      207,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238,
    "range": [
      231,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectProps",
    "start": 239,
    "end": 255,
    "range": [
      239,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 256,
    "end": 261,
    "range": [
      256,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 271,
    "end": 276,
    "range": [
      271,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 279,
    "end": 285,
    "range": [
      279,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 286,
    "end": 290,
    "range": [
      286,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSingleSelectProps",
    "start": 291,
    "end": 313,
    "range": [
      291,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedProps",
    "start": 319,
    "end": 331,
    "range": [
      319,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 332,
    "end": 339,
    "range": [
      332,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectProps",
    "start": 340,
    "end": 356,
    "range": [
      340,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 357,
    "end": 360,
    "range": [
      357,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "Overwrite",
    "start": 366,
    "end": 375,
    "range": [
      366,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 381,
    "end": 385,
    "range": [
      381,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedProps",
    "start": 386,
    "end": 398,
    "range": [
      386,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "String",
    "value": "\"multi\"",
    "start": 400,
    "end": 407,
    "range": [
      400,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 414,
    "end": 419,
    "range": [
      414,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractValueType",
    "start": 420,
    "end": 436,
    "range": [
      420,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedProps",
    "start": 437,
    "end": 449,
    "range": [
      437,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 456,
    "end": 462,
    "range": [
      456,
      462
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 463,
    "end": 471,
    "range": [
      463,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "createReactSingleSelect",
    "start": 472,
    "end": 495,
    "range": [
      472,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedProps",
    "start": 501,
    "end": 513,
    "range": [
      501,
      513
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 514,
    "end": 521,
    "range": [
      514,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectProps",
    "start": 522,
    "end": 538,
    "range": [
      522,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 539,
    "end": 542,
    "range": [
      539,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedComponent",
    "start": 551,
    "end": 567,
    "range": [
      551,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 569,
    "end": 574,
    "range": [
      569,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 575,
    "end": 588,
    "range": [
      575,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedProps",
    "start": 589,
    "end": 601,
    "range": [
      589,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 606,
    "end": 611,
    "range": [
      606,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 612,
    "end": 625,
    "range": [
      612,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSingleSelectProps",
    "start": 626,
    "end": 648,
    "range": [
      626,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedProps",
    "start": 649,
    "end": 661,
    "range": [
      649,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 670,
    "end": 676,
    "range": [
      670,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 678,
    "end": 683,
    "range": [
      678,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 685,
    "end": 687,
    "range": [
      685,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 698,
    "end": 704,
    "range": [
      698,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ReactSelectClass",
    "start": 720,
    "end": 736,
    "range": [
      720,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtractValueType",
    "start": 737,
    "end": 753,
    "range": [
      737,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedProps",
    "start": 754,
    "end": 766,
    "range": [
      754,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 786,
    "end": 789,
    "range": [
      786,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 789,
    "end": 794,
    "range": [
      789,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "multi",
    "start": 812,
    "end": 817,
    "range": [
      812,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 819,
    "end": 824,
    "range": [
      819,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "autosize",
    "start": 842,
    "end": 850,
    "range": [
      842,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 852,
    "end": 857,
    "range": [
      852,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 875,
    "end": 880,
    "range": [
      875,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 882,
    "end": 887,
    "range": [
      882,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 888,
    "end": 893,
    "range": [
      888,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "onChange",
    "start": 911,
    "end": 919,
    "range": [
      911,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 922,
    "end": 927,
    "range": [
      922,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 929,
    "end": 931,
    "range": [
      929,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 954,
    "end": 956,
    "range": [
      954,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 958,
    "end": 963,
    "range": [
      958,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "onChange",
    "start": 964,
    "end": 972,
    "range": [
      964,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 1000,
    "end": 1005,
    "range": [
      1000,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "onChange",
    "start": 1006,
    "end": 1014,
    "range": [
      1006,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1015,
    "end": 1020,
    "range": [
      1015,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1021,
    "end": 1024,
    "range": [
      1021,
      1024
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1025,
    "end": 1029,
    "range": [
      1025,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1032,
    "end": 1041,
    "range": [
      1032,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1044,
    "end": 1049,
    "range": [
      1044,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1170,
    "end": 1176,
    "range": [
      1170,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1177,
    "end": 1181,
    "range": [
      1177,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1182,
    "end": 1186,
    "range": [
      1182,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1192,
    "end": 1199,
    "range": [
      1192,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1200,
    "end": 1205,
    "range": [
      1200,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1206,
    "end": 1209,
    "range": [
      1206,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1215,
    "end": 1222,
    "range": [
      1215,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1223,
    "end": 1226,
    "range": [
      1223,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 1229,
    "end": 1233,
    "range": [
      1229,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 1237,
    "end": 1244,
    "range": [
      1237,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1245,
    "end": 1250,
    "range": [
      1245,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1260,
    "end": 1265,
    "range": [
      1260,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1267,
    "end": 1273,
    "range": [
      1267,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1274,
    "end": 1278,
    "range": [
      1274,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "Overwrite",
    "start": 1279,
    "end": 1288,
    "range": [
      1279,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 1297,
    "end": 1301,
    "range": [
      1297,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1305,
    "end": 1310,
    "range": [
      1305,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1315,
    "end": 1320,
    "range": [
      1315,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1403,
    "end": 1410,
    "range": [
      1403,
      1410
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1411,
    "end": 1416,
    "range": [
      1411,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectClass",
    "start": 1417,
    "end": 1433,
    "range": [
      1417,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1434,
    "end": 1440,
    "range": [
      1434,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 1443,
    "end": 1455,
    "range": [
      1443,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1457,
    "end": 1464,
    "range": [
      1457,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 1465,
    "end": 1470,
    "range": [
      1465,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1471,
    "end": 1480,
    "range": [
      1471,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectProps",
    "start": 1481,
    "end": 1497,
    "range": [
      1481,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1498,
    "end": 1504,
    "range": [
      1498,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "focus",
    "start": 1513,
    "end": 1518,
    "range": [
      1513,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1522,
    "end": 1526,
    "range": [
      1522,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "setValue",
    "start": 1532,
    "end": 1540,
    "range": [
      1532,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1541,
    "end": 1546,
    "range": [
      1541,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 1548,
    "end": 1554,
    "range": [
      1548,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1555,
    "end": 1561,
    "range": [
      1555,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1565,
    "end": 1569,
    "range": [
      1565,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1574,
    "end": 1580,
    "range": [
      1574,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1581,
    "end": 1585,
    "range": [
      1581,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionComponentType",
    "start": 1586,
    "end": 1605,
    "range": [
      1586,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1606,
    "end": 1612,
    "range": [
      1606,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 1615,
    "end": 1627,
    "range": [
      1615,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 1631,
    "end": 1636,
    "range": [
      1631,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1637,
    "end": 1650,
    "range": [
      1637,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionComponentProps",
    "start": 1651,
    "end": 1671,
    "range": [
      1651,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1672,
    "end": 1678,
    "range": [
      1672,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1682,
    "end": 1688,
    "range": [
      1682,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1689,
    "end": 1693,
    "range": [
      1689,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueComponentType",
    "start": 1694,
    "end": 1712,
    "range": [
      1694,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1713,
    "end": 1719,
    "range": [
      1713,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 1722,
    "end": 1734,
    "range": [
      1722,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 1739,
    "end": 1744,
    "range": [
      1739,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 1745,
    "end": 1758,
    "range": [
      1745,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueComponentProps",
    "start": 1759,
    "end": 1778,
    "range": [
      1759,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1779,
    "end": 1785,
    "range": [
      1779,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1790,
    "end": 1796,
    "range": [
      1790,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1797,
    "end": 1801,
    "range": [
      1797,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlerRendererResult",
    "start": 1802,
    "end": 1823,
    "range": [
      1802,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1826,
    "end": 1829,
    "range": [
      1826,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1830,
    "end": 1837,
    "range": [
      1830,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1840,
    "end": 1844,
    "range": [
      1840,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1847,
    "end": 1852,
    "range": [
      1847,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1867,
    "end": 1873,
    "range": [
      1867,
      1873
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1874,
    "end": 1878,
    "range": [
      1874,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "FocusOptionHandler",
    "start": 1879,
    "end": 1897,
    "range": [
      1879,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1898,
    "end": 1904,
    "range": [
      1898,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 1907,
    "end": 1919,
    "range": [
      1907,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 1924,
    "end": 1930,
    "range": [
      1924,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 1932,
    "end": 1938,
    "range": [
      1932,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1939,
    "end": 1945,
    "range": [
      1939,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1948,
    "end": 1950,
    "range": [
      1948,
      1950
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1951,
    "end": 1955,
    "range": [
      1951,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1957,
    "end": 1963,
    "range": [
      1957,
      1963
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1964,
    "end": 1968,
    "range": [
      1964,
      1968
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectValueHandler",
    "start": 1969,
    "end": 1987,
    "range": [
      1969,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1988,
    "end": 1994,
    "range": [
      1988,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 1997,
    "end": 2009,
    "range": [
      1997,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 2014,
    "end": 2020,
    "range": [
      2014,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 2022,
    "end": 2028,
    "range": [
      2022,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2029,
    "end": 2035,
    "range": [
      2029,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2038,
    "end": 2040,
    "range": [
      2038,
      2040
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2041,
    "end": 2045,
    "range": [
      2041,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2047,
    "end": 2053,
    "range": [
      2047,
      2053
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2054,
    "end": 2058,
    "range": [
      2054,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "ArrowRendererHandler",
    "start": 2059,
    "end": 2079,
    "range": [
      2059,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2083,
    "end": 2088,
    "range": [
      2083,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Identifier",
    "value": "ArrowRendererProps",
    "start": 2090,
    "end": 2108,
    "range": [
      2090,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2110,
    "end": 2112,
    "range": [
      2110,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlerRendererResult",
    "start": 2113,
    "end": 2134,
    "range": [
      2113,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2136,
    "end": 2142,
    "range": [
      2136,
      2142
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2143,
    "end": 2147,
    "range": [
      2143,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "ClearRendererHandler",
    "start": 2148,
    "end": 2168,
    "range": [
      2148,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2174,
    "end": 2176,
    "range": [
      2174,
      2176
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlerRendererResult",
    "start": 2177,
    "end": 2198,
    "range": [
      2177,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2200,
    "end": 2206,
    "range": [
      2200,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2207,
    "end": 2211,
    "range": [
      2207,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterOptionHandler",
    "start": 2212,
    "end": 2231,
    "range": [
      2212,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2232,
    "end": 2238,
    "range": [
      2232,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 2241,
    "end": 2253,
    "range": [
      2241,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 2258,
    "end": 2264,
    "range": [
      2258,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 2266,
    "end": 2272,
    "range": [
      2266,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2273,
    "end": 2279,
    "range": [
      2273,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 2282,
    "end": 2288,
    "range": [
      2282,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2290,
    "end": 2296,
    "range": [
      2290,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2298,
    "end": 2300,
    "range": [
      2298,
      2300
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2301,
    "end": 2308,
    "range": [
      2301,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2310,
    "end": 2316,
    "range": [
      2310,
      2316
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2317,
    "end": 2321,
    "range": [
      2317,
      2321
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterOptionsHandler",
    "start": 2322,
    "end": 2342,
    "range": [
      2322,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2343,
    "end": 2349,
    "range": [
      2343,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 2352,
    "end": 2364,
    "range": [
      2352,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 2369,
    "end": 2376,
    "range": [
      2369,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 2378,
    "end": 2385,
    "range": [
      2378,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2386,
    "end": 2392,
    "range": [
      2386,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 2395,
    "end": 2401,
    "range": [
      2395,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2403,
    "end": 2409,
    "range": [
      2403,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "currentValues",
    "start": 2411,
    "end": 2424,
    "range": [
      2411,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 2426,
    "end": 2433,
    "range": [
      2426,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2434,
    "end": 2440,
    "range": [
      2434,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2443,
    "end": 2445,
    "range": [
      2443,
      2445
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 2446,
    "end": 2453,
    "range": [
      2446,
      2453
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2454,
    "end": 2460,
    "range": [
      2454,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2460,
    "end": 2461,
    "range": [
      2460,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2463,
    "end": 2469,
    "range": [
      2463,
      2469
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2470,
    "end": 2474,
    "range": [
      2470,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "InputRendererHandler",
    "start": 2475,
    "end": 2495,
    "range": [
      2475,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2499,
    "end": 2504,
    "range": [
      2499,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2509,
    "end": 2512,
    "range": [
      2509,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2514,
    "end": 2520,
    "range": [
      2514,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2523,
    "end": 2526,
    "range": [
      2523,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2530,
    "end": 2532,
    "range": [
      2530,
      2532
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlerRendererResult",
    "start": 2533,
    "end": 2554,
    "range": [
      2533,
      2554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2554,
    "end": 2555,
    "range": [
      2554,
      2555
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2556,
    "end": 2562,
    "range": [
      2556,
      2562
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2563,
    "end": 2567,
    "range": [
      2563,
      2567
    ]
  },
  {
    "type": "Identifier",
    "value": "MenuRendererHandler",
    "start": 2568,
    "end": 2587,
    "range": [
      2568,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2588,
    "end": 2594,
    "range": [
      2588,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 2597,
    "end": 2609,
    "range": [
      2597,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2614,
    "end": 2619,
    "range": [
      2614,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Identifier",
    "value": "MenuRendererProps",
    "start": 2621,
    "end": 2638,
    "range": [
      2621,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 2639,
    "end": 2645,
    "range": [
      2639,
      2645
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2648,
    "end": 2650,
    "range": [
      2648,
      2650
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlerRendererResult",
    "start": 2651,
    "end": 2672,
    "range": [
      2651,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2674,
    "end": 2680,
    "range": [
      2674,
      2680
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2681,
    "end": 2685,
    "range": [
      2681,
      2685
    ]
  },
  {
    "type": "Identifier",
    "value": "OnCloseHandler",
    "start": 2686,
    "end": 2700,
    "range": [
      2686,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2706,
    "end": 2708,
    "range": [
      2706,
      2708
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2709,
    "end": 2713,
    "range": [
      2709,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2715,
    "end": 2721,
    "range": [
      2715,
      2721
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2722,
    "end": 2726,
    "range": [
      2722,
      2726
    ]
  },
  {
    "type": "Identifier",
    "value": "OnInputChangeHandler",
    "start": 2727,
    "end": 2747,
    "range": [
      2727,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "inputValue",
    "start": 2751,
    "end": 2761,
    "range": [
      2751,
      2761
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2761,
    "end": 2762,
    "range": [
      2761,
      2762
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2763,
    "end": 2769,
    "range": [
      2763,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2771,
    "end": 2773,
    "range": [
      2771,
      2773
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2774,
    "end": 2780,
    "range": [
      2774,
      2780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2782,
    "end": 2788,
    "range": [
      2782,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2789,
    "end": 2793,
    "range": [
      2789,
      2793
    ]
  },
  {
    "type": "Identifier",
    "value": "OnInputKeyDownHandler",
    "start": 2794,
    "end": 2815,
    "range": [
      2794,
      2815
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 2818,
    "end": 2823,
    "range": [
      2818,
      2823
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Identifier",
    "value": "KeyboardEventHandler",
    "start": 2824,
    "end": 2844,
    "range": [
      2824,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDivElement",
    "start": 2845,
    "end": 2859,
    "range": [
      2845,
      2859
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLInputElement",
    "start": 2862,
    "end": 2878,
    "range": [
      2862,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2881,
    "end": 2887,
    "range": [
      2881,
      2887
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2888,
    "end": 2892,
    "range": [
      2888,
      2892
    ]
  },
  {
    "type": "Identifier",
    "value": "OnMenuScrollToBottomHandler",
    "start": 2893,
    "end": 2920,
    "range": [
      2893,
      2920
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2924,
    "end": 2925,
    "range": [
      2924,
      2925
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2926,
    "end": 2928,
    "range": [
      2926,
      2928
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2929,
    "end": 2933,
    "range": [
      2929,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2935,
    "end": 2941,
    "range": [
      2935,
      2941
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2942,
    "end": 2946,
    "range": [
      2942,
      2946
    ]
  },
  {
    "type": "Identifier",
    "value": "OnOpenHandler",
    "start": 2947,
    "end": 2960,
    "range": [
      2947,
      2960
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2966,
    "end": 2968,
    "range": [
      2966,
      2968
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2969,
    "end": 2973,
    "range": [
      2969,
      2973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2975,
    "end": 2981,
    "range": [
      2975,
      2981
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2982,
    "end": 2986,
    "range": [
      2982,
      2986
    ]
  },
  {
    "type": "Identifier",
    "value": "OnFocusHandler",
    "start": 2987,
    "end": 3001,
    "range": [
      2987,
      3001
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 3004,
    "end": 3009,
    "range": [
      3004,
      3009
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3009,
    "end": 3010,
    "range": [
      3009,
      3010
    ]
  },
  {
    "type": "Identifier",
    "value": "FocusEventHandler",
    "start": 3010,
    "end": 3027,
    "range": [
      3010,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDivElement",
    "start": 3028,
    "end": 3042,
    "range": [
      3028,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLInputElement",
    "start": 3045,
    "end": 3061,
    "range": [
      3045,
      3061
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3061,
    "end": 3062,
    "range": [
      3061,
      3062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3064,
    "end": 3070,
    "range": [
      3064,
      3070
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3071,
    "end": 3075,
    "range": [
      3071,
      3075
    ]
  },
  {
    "type": "Identifier",
    "value": "OnBlurHandler",
    "start": 3076,
    "end": 3089,
    "range": [
      3076,
      3089
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 3092,
    "end": 3097,
    "range": [
      3092,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Identifier",
    "value": "FocusEventHandler",
    "start": 3098,
    "end": 3115,
    "range": [
      3098,
      3115
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3115,
    "end": 3116,
    "range": [
      3115,
      3116
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDivElement",
    "start": 3116,
    "end": 3130,
    "range": [
      3116,
      3130
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3131,
    "end": 3132,
    "range": [
      3131,
      3132
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLInputElement",
    "start": 3133,
    "end": 3149,
    "range": [
      3133,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3152,
    "end": 3158,
    "range": [
      3152,
      3158
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3159,
    "end": 3163,
    "range": [
      3159,
      3163
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionRendererHandler",
    "start": 3164,
    "end": 3185,
    "range": [
      3164,
      3185
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3185,
    "end": 3186,
    "range": [
      3185,
      3186
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3186,
    "end": 3192,
    "range": [
      3186,
      3192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3193,
    "end": 3194,
    "range": [
      3193,
      3194
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 3195,
    "end": 3207,
    "range": [
      3195,
      3207
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3207,
    "end": 3208,
    "range": [
      3207,
      3208
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3209,
    "end": 3210,
    "range": [
      3209,
      3210
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 3212,
    "end": 3218,
    "range": [
      3212,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 3220,
    "end": 3226,
    "range": [
      3220,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3227,
    "end": 3233,
    "range": [
      3227,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3236,
    "end": 3238,
    "range": [
      3236,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlerRendererResult",
    "start": 3239,
    "end": 3260,
    "range": [
      3239,
      3260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3262,
    "end": 3268,
    "range": [
      3262,
      3268
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3269,
    "end": 3273,
    "range": [
      3269,
      3273
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueRendererHandler",
    "start": 3274,
    "end": 3294,
    "range": [
      3274,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3295,
    "end": 3301,
    "range": [
      3295,
      3301
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 3304,
    "end": 3316,
    "range": [
      3304,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3316,
    "end": 3317,
    "range": [
      3316,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3320,
    "end": 3321,
    "range": [
      3320,
      3321
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 3321,
    "end": 3327,
    "range": [
      3321,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 3329,
    "end": 3335,
    "range": [
      3329,
      3335
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3335,
    "end": 3336,
    "range": [
      3335,
      3336
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3336,
    "end": 3342,
    "range": [
      3336,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3342,
    "end": 3343,
    "range": [
      3342,
      3343
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3345,
    "end": 3350,
    "range": [
      3345,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3350,
    "end": 3351,
    "range": [
      3350,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3353,
    "end": 3359,
    "range": [
      3353,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3359,
    "end": 3360,
    "range": [
      3359,
      3360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3361,
    "end": 3363,
    "range": [
      3361,
      3363
    ]
  },
  {
    "type": "Identifier",
    "value": "HandlerRendererResult",
    "start": 3364,
    "end": 3385,
    "range": [
      3364,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3387,
    "end": 3393,
    "range": [
      3387,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3394,
    "end": 3398,
    "range": [
      3394,
      3398
    ]
  },
  {
    "type": "Identifier",
    "value": "OnValueClickHandler",
    "start": 3399,
    "end": 3418,
    "range": [
      3399,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3419,
    "end": 3425,
    "range": [
      3419,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 3428,
    "end": 3440,
    "range": [
      3428,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 3445,
    "end": 3451,
    "range": [
      3445,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 3453,
    "end": 3459,
    "range": [
      3453,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3460,
    "end": 3466,
    "range": [
      3460,
      3466
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3466,
    "end": 3467,
    "range": [
      3466,
      3467
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3467,
    "end": 3468,
    "range": [
      3467,
      3468
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 3469,
    "end": 3474,
    "range": [
      3469,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3474,
    "end": 3475,
    "range": [
      3474,
      3475
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 3476,
    "end": 3481,
    "range": [
      3476,
      3481
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3481,
    "end": 3482,
    "range": [
      3481,
      3482
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseEvent",
    "start": 3482,
    "end": 3492,
    "range": [
      3482,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAnchorElement",
    "start": 3493,
    "end": 3510,
    "range": [
      3493,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3510,
    "end": 3511,
    "range": [
      3510,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3513,
    "end": 3515,
    "range": [
      3513,
      3515
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3516,
    "end": 3520,
    "range": [
      3516,
      3520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3520,
    "end": 3521,
    "range": [
      3520,
      3521
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3522,
    "end": 3528,
    "range": [
      3522,
      3528
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3529,
    "end": 3533,
    "range": [
      3529,
      3533
    ]
  },
  {
    "type": "Identifier",
    "value": "IsOptionUniqueHandler",
    "start": 3534,
    "end": 3555,
    "range": [
      3534,
      3555
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3555,
    "end": 3556,
    "range": [
      3555,
      3556
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3556,
    "end": 3562,
    "range": [
      3556,
      3562
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3563,
    "end": 3564,
    "range": [
      3563,
      3564
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 3565,
    "end": 3577,
    "range": [
      3565,
      3577
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3577,
    "end": 3578,
    "range": [
      3577,
      3578
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3579,
    "end": 3580,
    "range": [
      3579,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3581,
    "end": 3582,
    "range": [
      3581,
      3582
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3582,
    "end": 3585,
    "range": [
      3582,
      3585
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3585,
    "end": 3586,
    "range": [
      3585,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3587,
    "end": 3588,
    "range": [
      3587,
      3588
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 3589,
    "end": 3595,
    "range": [
      3589,
      3595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 3597,
    "end": 3603,
    "range": [
      3597,
      3603
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3604,
    "end": 3610,
    "range": [
      3604,
      3610
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3610,
    "end": 3611,
    "range": [
      3610,
      3611
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3611,
    "end": 3612,
    "range": [
      3611,
      3612
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 3613,
    "end": 3620,
    "range": [
      3613,
      3620
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3620,
    "end": 3621,
    "range": [
      3620,
      3621
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 3622,
    "end": 3629,
    "range": [
      3622,
      3629
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3629,
    "end": 3630,
    "range": [
      3629,
      3630
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3630,
    "end": 3636,
    "range": [
      3630,
      3636
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3636,
    "end": 3637,
    "range": [
      3636,
      3637
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3637,
    "end": 3638,
    "range": [
      3637,
      3638
    ]
  },
  {
    "type": "Identifier",
    "value": "labelKey",
    "start": 3639,
    "end": 3647,
    "range": [
      3639,
      3647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3649,
    "end": 3655,
    "range": [
      3649,
      3655
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Identifier",
    "value": "valueKey",
    "start": 3657,
    "end": 3665,
    "range": [
      3657,
      3665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3665,
    "end": 3666,
    "range": [
      3665,
      3666
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3667,
    "end": 3673,
    "range": [
      3667,
      3673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3674,
    "end": 3675,
    "range": [
      3674,
      3675
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3677,
    "end": 3679,
    "range": [
      3677,
      3679
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3680,
    "end": 3687,
    "range": [
      3680,
      3687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3687,
    "end": 3688,
    "range": [
      3687,
      3688
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3689,
    "end": 3695,
    "range": [
      3689,
      3695
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3696,
    "end": 3700,
    "range": [
      3696,
      3700
    ]
  },
  {
    "type": "Identifier",
    "value": "IsValidNewOptionHandler",
    "start": 3701,
    "end": 3724,
    "range": [
      3701,
      3724
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3725,
    "end": 3726,
    "range": [
      3725,
      3726
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3728,
    "end": 3731,
    "range": [
      3728,
      3731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 3735,
    "end": 3740,
    "range": [
      3735,
      3740
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3740,
    "end": 3741,
    "range": [
      3740,
      3741
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3742,
    "end": 3748,
    "range": [
      3742,
      3748
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3750,
    "end": 3751,
    "range": [
      3750,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3752,
    "end": 3754,
    "range": [
      3752,
      3754
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3755,
    "end": 3762,
    "range": [
      3755,
      3762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3762,
    "end": 3763,
    "range": [
      3762,
      3763
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3764,
    "end": 3770,
    "range": [
      3764,
      3770
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3771,
    "end": 3775,
    "range": [
      3771,
      3775
    ]
  },
  {
    "type": "Identifier",
    "value": "NewOptionCreatorHandler",
    "start": 3776,
    "end": 3799,
    "range": [
      3776,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3799,
    "end": 3800,
    "range": [
      3799,
      3800
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3800,
    "end": 3806,
    "range": [
      3800,
      3806
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 3809,
    "end": 3821,
    "range": [
      3809,
      3821
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3821,
    "end": 3822,
    "range": [
      3821,
      3822
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3823,
    "end": 3824,
    "range": [
      3823,
      3824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3825,
    "end": 3826,
    "range": [
      3825,
      3826
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3826,
    "end": 3829,
    "range": [
      3826,
      3829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3829,
    "end": 3830,
    "range": [
      3829,
      3830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 3833,
    "end": 3838,
    "range": [
      3833,
      3838
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3838,
    "end": 3839,
    "range": [
      3838,
      3839
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3840,
    "end": 3846,
    "range": [
      3840,
      3846
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3846,
    "end": 3847,
    "range": [
      3846,
      3847
    ]
  },
  {
    "type": "Identifier",
    "value": "labelKey",
    "start": 3848,
    "end": 3856,
    "range": [
      3848,
      3856
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3856,
    "end": 3857,
    "range": [
      3856,
      3857
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3858,
    "end": 3864,
    "range": [
      3858,
      3864
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3864,
    "end": 3865,
    "range": [
      3864,
      3865
    ]
  },
  {
    "type": "Identifier",
    "value": "valueKey",
    "start": 3866,
    "end": 3874,
    "range": [
      3866,
      3874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3874,
    "end": 3875,
    "range": [
      3874,
      3875
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3876,
    "end": 3882,
    "range": [
      3876,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3883,
    "end": 3884,
    "range": [
      3883,
      3884
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3884,
    "end": 3885,
    "range": [
      3884,
      3885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3886,
    "end": 3888,
    "range": [
      3886,
      3888
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 3889,
    "end": 3895,
    "range": [
      3889,
      3895
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3895,
    "end": 3896,
    "range": [
      3895,
      3896
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 3896,
    "end": 3902,
    "range": [
      3896,
      3902
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3902,
    "end": 3903,
    "range": [
      3902,
      3903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3903,
    "end": 3904,
    "range": [
      3903,
      3904
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3905,
    "end": 3911,
    "range": [
      3905,
      3911
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3912,
    "end": 3916,
    "range": [
      3912,
      3916
    ]
  },
  {
    "type": "Identifier",
    "value": "PromptTextCreatorHandler",
    "start": 3917,
    "end": 3941,
    "range": [
      3917,
      3941
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3942,
    "end": 3943,
    "range": [
      3942,
      3943
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3944,
    "end": 3945,
    "range": [
      3944,
      3945
    ]
  },
  {
    "type": "Identifier",
    "value": "filterText",
    "start": 3945,
    "end": 3955,
    "range": [
      3945,
      3955
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3957,
    "end": 3963,
    "range": [
      3957,
      3963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3963,
    "end": 3964,
    "range": [
      3963,
      3964
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3965,
    "end": 3967,
    "range": [
      3965,
      3967
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3968,
    "end": 3974,
    "range": [
      3968,
      3974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3974,
    "end": 3975,
    "range": [
      3974,
      3975
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3976,
    "end": 3982,
    "range": [
      3976,
      3982
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3983,
    "end": 3987,
    "range": [
      3983,
      3987
    ]
  },
  {
    "type": "Identifier",
    "value": "ShouldKeyDownEventCreateNewOptionHandler",
    "start": 3988,
    "end": 4028,
    "range": [
      3988,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4029,
    "end": 4030,
    "range": [
      4029,
      4030
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4031,
    "end": 4032,
    "range": [
      4031,
      4032
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4032,
    "end": 4035,
    "range": [
      4032,
      4035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4035,
    "end": 4036,
    "range": [
      4035,
      4036
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4037,
    "end": 4038,
    "range": [
      4037,
      4038
    ]
  },
  {
    "type": "Identifier",
    "value": "keyCode",
    "start": 4039,
    "end": 4046,
    "range": [
      4039,
      4046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4046,
    "end": 4047,
    "range": [
      4046,
      4047
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4048,
    "end": 4054,
    "range": [
      4048,
      4054
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4055,
    "end": 4056,
    "range": [
      4055,
      4056
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4056,
    "end": 4057,
    "range": [
      4056,
      4057
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4058,
    "end": 4060,
    "range": [
      4058,
      4060
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4061,
    "end": 4068,
    "range": [
      4061,
      4068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4068,
    "end": 4069,
    "range": [
      4068,
      4069
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4071,
    "end": 4077,
    "range": [
      4071,
      4077
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4078,
    "end": 4082,
    "range": [
      4078,
      4082
    ]
  },
  {
    "type": "Identifier",
    "value": "OnChangeSingleHandler",
    "start": 4083,
    "end": 4104,
    "range": [
      4083,
      4104
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4104,
    "end": 4105,
    "range": [
      4104,
      4105
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4105,
    "end": 4111,
    "range": [
      4105,
      4111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4112,
    "end": 4113,
    "range": [
      4112,
      4113
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 4114,
    "end": 4126,
    "range": [
      4114,
      4126
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4126,
    "end": 4127,
    "range": [
      4126,
      4127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4128,
    "end": 4129,
    "range": [
      4128,
      4129
    ]
  },
  {
    "type": "Identifier",
    "value": "OnChangeHandler",
    "start": 4130,
    "end": 4145,
    "range": [
      4130,
      4145
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4145,
    "end": 4146,
    "range": [
      4145,
      4146
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4146,
    "end": 4152,
    "range": [
      4146,
      4152
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4152,
    "end": 4153,
    "range": [
      4152,
      4153
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 4154,
    "end": 4160,
    "range": [
      4154,
      4160
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4160,
    "end": 4161,
    "range": [
      4160,
      4161
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4161,
    "end": 4167,
    "range": [
      4161,
      4167
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4167,
    "end": 4168,
    "range": [
      4167,
      4168
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4168,
    "end": 4169,
    "range": [
      4168,
      4169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4169,
    "end": 4170,
    "range": [
      4169,
      4170
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4171,
    "end": 4177,
    "range": [
      4171,
      4177
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4178,
    "end": 4182,
    "range": [
      4178,
      4182
    ]
  },
  {
    "type": "Identifier",
    "value": "OnChangeMultipleHandler",
    "start": 4183,
    "end": 4206,
    "range": [
      4183,
      4206
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4206,
    "end": 4207,
    "range": [
      4206,
      4207
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4207,
    "end": 4213,
    "range": [
      4207,
      4213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4214,
    "end": 4215,
    "range": [
      4214,
      4215
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 4216,
    "end": 4228,
    "range": [
      4216,
      4228
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4228,
    "end": 4229,
    "range": [
      4228,
      4229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4230,
    "end": 4231,
    "range": [
      4230,
      4231
    ]
  },
  {
    "type": "Identifier",
    "value": "OnChangeHandler",
    "start": 4232,
    "end": 4247,
    "range": [
      4232,
      4247
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4247,
    "end": 4248,
    "range": [
      4247,
      4248
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4248,
    "end": 4254,
    "range": [
      4248,
      4254
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4254,
    "end": 4255,
    "range": [
      4254,
      4255
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 4256,
    "end": 4263,
    "range": [
      4256,
      4263
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4263,
    "end": 4264,
    "range": [
      4263,
      4264
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4264,
    "end": 4270,
    "range": [
      4264,
      4270
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4270,
    "end": 4271,
    "range": [
      4270,
      4271
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4271,
    "end": 4272,
    "range": [
      4271,
      4272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4272,
    "end": 4273,
    "range": [
      4272,
      4273
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4274,
    "end": 4280,
    "range": [
      4274,
      4280
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4281,
    "end": 4285,
    "range": [
      4281,
      4285
    ]
  },
  {
    "type": "Identifier",
    "value": "OnChangeHandler",
    "start": 4286,
    "end": 4301,
    "range": [
      4286,
      4301
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4301,
    "end": 4302,
    "range": [
      4301,
      4302
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4302,
    "end": 4308,
    "range": [
      4302,
      4308
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4309,
    "end": 4310,
    "range": [
      4309,
      4310
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 4311,
    "end": 4323,
    "range": [
      4311,
      4323
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4323,
    "end": 4324,
    "range": [
      4323,
      4324
    ]
  },
  {
    "type": "Identifier",
    "value": "TOption",
    "start": 4325,
    "end": 4332,
    "range": [
      4325,
      4332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4333,
    "end": 4334,
    "range": [
      4333,
      4334
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 4335,
    "end": 4341,
    "range": [
      4335,
      4341
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4342,
    "end": 4348,
    "range": [
      4342,
      4348
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4348,
    "end": 4349,
    "range": [
      4348,
      4349
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4350,
    "end": 4351,
    "range": [
      4350,
      4351
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 4352,
    "end": 4359,
    "range": [
      4352,
      4359
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4359,
    "end": 4360,
    "range": [
      4359,
      4360
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4360,
    "end": 4366,
    "range": [
      4360,
      4366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4366,
    "end": 4367,
    "range": [
      4366,
      4367
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4369,
    "end": 4370,
    "range": [
      4369,
      4370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4371,
    "end": 4372,
    "range": [
      4371,
      4372
    ]
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 4372,
    "end": 4380,
    "range": [
      4372,
      4380
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4380,
    "end": 4381,
    "range": [
      4380,
      4381
    ]
  },
  {
    "type": "Identifier",
    "value": "TOption",
    "start": 4382,
    "end": 4389,
    "range": [
      4382,
      4389
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4390,
    "end": 4391,
    "range": [
      4390,
      4391
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4392,
    "end": 4396,
    "range": [
      4392,
      4396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4396,
    "end": 4397,
    "range": [
      4396,
      4397
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4398,
    "end": 4400,
    "range": [
      4398,
      4400
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4401,
    "end": 4405,
    "range": [
      4401,
      4405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4405,
    "end": 4406,
    "range": [
      4405,
      4406
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4407,
    "end": 4413,
    "range": [
      4407,
      4413
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4414,
    "end": 4418,
    "range": [
      4414,
      4418
    ]
  },
  {
    "type": "Identifier",
    "value": "OnNewOptionClickHandler",
    "start": 4419,
    "end": 4442,
    "range": [
      4419,
      4442
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4442,
    "end": 4443,
    "range": [
      4442,
      4443
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4443,
    "end": 4449,
    "range": [
      4443,
      4449
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4450,
    "end": 4451,
    "range": [
      4450,
      4451
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 4452,
    "end": 4464,
    "range": [
      4452,
      4464
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4464,
    "end": 4465,
    "range": [
      4464,
      4465
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4466,
    "end": 4467,
    "range": [
      4466,
      4467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4468,
    "end": 4469,
    "range": [
      4468,
      4469
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 4469,
    "end": 4475,
    "range": [
      4469,
      4475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4475,
    "end": 4476,
    "range": [
      4475,
      4476
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 4477,
    "end": 4483,
    "range": [
      4477,
      4483
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4483,
    "end": 4484,
    "range": [
      4483,
      4484
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4484,
    "end": 4490,
    "range": [
      4484,
      4490
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4490,
    "end": 4491,
    "range": [
      4490,
      4491
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4491,
    "end": 4492,
    "range": [
      4491,
      4492
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4493,
    "end": 4495,
    "range": [
      4493,
      4495
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4496,
    "end": 4500,
    "range": [
      4496,
      4500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4500,
    "end": 4501,
    "range": [
      4500,
      4501
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4503,
    "end": 4509,
    "range": [
      4503,
      4509
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4510,
    "end": 4514,
    "range": [
      4510,
      4514
    ]
  },
  {
    "type": "Identifier",
    "value": "LoadOptionsHandler",
    "start": 4515,
    "end": 4533,
    "range": [
      4515,
      4533
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4533,
    "end": 4534,
    "range": [
      4533,
      4534
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4534,
    "end": 4540,
    "range": [
      4534,
      4540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 4543,
    "end": 4555,
    "range": [
      4543,
      4555
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4555,
    "end": 4556,
    "range": [
      4555,
      4556
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4557,
    "end": 4558,
    "range": [
      4557,
      4558
    ]
  },
  {
    "type": "Identifier",
    "value": "LoadOptionsAsyncHandler",
    "start": 4559,
    "end": 4582,
    "range": [
      4559,
      4582
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4582,
    "end": 4583,
    "range": [
      4582,
      4583
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4583,
    "end": 4589,
    "range": [
      4583,
      4589
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4589,
    "end": 4590,
    "range": [
      4589,
      4590
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4591,
    "end": 4592,
    "range": [
      4591,
      4592
    ]
  },
  {
    "type": "Identifier",
    "value": "LoadOptionsLegacyHandler",
    "start": 4593,
    "end": 4617,
    "range": [
      4593,
      4617
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4617,
    "end": 4618,
    "range": [
      4617,
      4618
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4618,
    "end": 4624,
    "range": [
      4618,
      4624
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4624,
    "end": 4625,
    "range": [
      4624,
      4625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4625,
    "end": 4626,
    "range": [
      4625,
      4626
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4627,
    "end": 4633,
    "range": [
      4627,
      4633
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4634,
    "end": 4638,
    "range": [
      4634,
      4638
    ]
  },
  {
    "type": "Identifier",
    "value": "LoadOptionsAsyncHandler",
    "start": 4639,
    "end": 4662,
    "range": [
      4639,
      4662
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4662,
    "end": 4663,
    "range": [
      4662,
      4663
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4663,
    "end": 4669,
    "range": [
      4663,
      4669
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4670,
    "end": 4671,
    "range": [
      4670,
      4671
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 4672,
    "end": 4684,
    "range": [
      4672,
      4684
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4684,
    "end": 4685,
    "range": [
      4684,
      4685
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4686,
    "end": 4687,
    "range": [
      4686,
      4687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4688,
    "end": 4689,
    "range": [
      4688,
      4689
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 4689,
    "end": 4694,
    "range": [
      4689,
      4694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4694,
    "end": 4695,
    "range": [
      4694,
      4695
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4696,
    "end": 4702,
    "range": [
      4696,
      4702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4702,
    "end": 4703,
    "range": [
      4702,
      4703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4704,
    "end": 4706,
    "range": [
      4704,
      4706
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4707,
    "end": 4714,
    "range": [
      4707,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4714,
    "end": 4715,
    "range": [
      4714,
      4715
    ]
  },
  {
    "type": "Identifier",
    "value": "AutocompleteResult",
    "start": 4715,
    "end": 4733,
    "range": [
      4715,
      4733
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4733,
    "end": 4734,
    "range": [
      4733,
      4734
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4734,
    "end": 4740,
    "range": [
      4734,
      4740
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4740,
    "end": 4741,
    "range": [
      4740,
      4741
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4741,
    "end": 4742,
    "range": [
      4741,
      4742
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4742,
    "end": 4743,
    "range": [
      4742,
      4743
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4744,
    "end": 4750,
    "range": [
      4744,
      4750
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4751,
    "end": 4755,
    "range": [
      4751,
      4755
    ]
  },
  {
    "type": "Identifier",
    "value": "LoadOptionsLegacyHandler",
    "start": 4756,
    "end": 4780,
    "range": [
      4756,
      4780
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4780,
    "end": 4781,
    "range": [
      4780,
      4781
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4781,
    "end": 4787,
    "range": [
      4781,
      4787
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4788,
    "end": 4789,
    "range": [
      4788,
      4789
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 4790,
    "end": 4802,
    "range": [
      4790,
      4802
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4802,
    "end": 4803,
    "range": [
      4802,
      4803
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4804,
    "end": 4805,
    "range": [
      4804,
      4805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4806,
    "end": 4807,
    "range": [
      4806,
      4807
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 4807,
    "end": 4812,
    "range": [
      4807,
      4812
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4812,
    "end": 4813,
    "range": [
      4812,
      4813
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4814,
    "end": 4820,
    "range": [
      4814,
      4820
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4820,
    "end": 4821,
    "range": [
      4820,
      4821
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 4822,
    "end": 4830,
    "range": [
      4822,
      4830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4830,
    "end": 4831,
    "range": [
      4830,
      4831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4832,
    "end": 4833,
    "range": [
      4832,
      4833
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 4833,
    "end": 4836,
    "range": [
      4833,
      4836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4836,
    "end": 4837,
    "range": [
      4836,
      4837
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4838,
    "end": 4841,
    "range": [
      4838,
      4841
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4841,
    "end": 4842,
    "range": [
      4841,
      4842
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 4843,
    "end": 4849,
    "range": [
      4843,
      4849
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4849,
    "end": 4850,
    "range": [
      4849,
      4850
    ]
  },
  {
    "type": "Identifier",
    "value": "AutocompleteResult",
    "start": 4851,
    "end": 4869,
    "range": [
      4851,
      4869
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4869,
    "end": 4870,
    "range": [
      4869,
      4870
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4870,
    "end": 4876,
    "range": [
      4870,
      4876
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4876,
    "end": 4877,
    "range": [
      4876,
      4877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4877,
    "end": 4878,
    "range": [
      4877,
      4878
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4879,
    "end": 4881,
    "range": [
      4879,
      4881
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4882,
    "end": 4886,
    "range": [
      4882,
      4886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4886,
    "end": 4887,
    "range": [
      4886,
      4887
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4888,
    "end": 4890,
    "range": [
      4888,
      4890
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4891,
    "end": 4895,
    "range": [
      4891,
      4895
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4895,
    "end": 4896,
    "range": [
      4895,
      4896
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4898,
    "end": 4904,
    "range": [
      4898,
      4904
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4905,
    "end": 4914,
    "range": [
      4905,
      4914
    ]
  },
  {
    "type": "Identifier",
    "value": "AutocompleteResult",
    "start": 4915,
    "end": 4933,
    "range": [
      4915,
      4933
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4933,
    "end": 4934,
    "range": [
      4933,
      4934
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 4934,
    "end": 4940,
    "range": [
      4934,
      4940
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4941,
    "end": 4942,
    "range": [
      4941,
      4942
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 4943,
    "end": 4955,
    "range": [
      4943,
      4955
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4955,
    "end": 4956,
    "range": [
      4955,
      4956
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4957,
    "end": 4958,
    "range": [
      4957,
      4958
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 5010,
    "end": 5017,
    "range": [
      5010,
      5017
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5017,
    "end": 5018,
    "range": [
      5017,
      5018
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 5019,
    "end": 5026,
    "range": [
      5019,
      5026
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5026,
    "end": 5027,
    "range": [
      5026,
      5027
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 5027,
    "end": 5033,
    "range": [
      5027,
      5033
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5033,
    "end": 5034,
    "range": [
      5033,
      5034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5034,
    "end": 5035,
    "range": [
      5034,
      5035
    ]
  },
  {
    "type": "Identifier",
    "value": "complete",
    "start": 5258,
    "end": 5266,
    "range": [
      5258,
      5266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5266,
    "end": 5267,
    "range": [
      5266,
      5267
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5268,
    "end": 5275,
    "range": [
      5268,
      5275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5275,
    "end": 5276,
    "range": [
      5275,
      5276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5277,
    "end": 5278,
    "range": [
      5277,
      5278
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5280,
    "end": 5286,
    "range": [
      5280,
      5286
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5287,
    "end": 5291,
    "range": [
      5287,
      5291
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 5292,
    "end": 5299,
    "range": [
      5292,
      5299
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5299,
    "end": 5300,
    "range": [
      5299,
      5300
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 5300,
    "end": 5306,
    "range": [
      5300,
      5306
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5307,
    "end": 5308,
    "range": [
      5307,
      5308
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 5309,
    "end": 5321,
    "range": [
      5309,
      5321
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5321,
    "end": 5322,
    "range": [
      5321,
      5322
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5323,
    "end": 5324,
    "range": [
      5323,
      5324
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5325,
    "end": 5330,
    "range": [
      5325,
      5330
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5330,
    "end": 5331,
    "range": [
      5330,
      5331
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 5331,
    "end": 5337,
    "range": [
      5331,
      5337
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5337,
    "end": 5338,
    "range": [
      5337,
      5338
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 5338,
    "end": 5344,
    "range": [
      5338,
      5344
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5344,
    "end": 5345,
    "range": [
      5344,
      5345
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5345,
    "end": 5346,
    "range": [
      5345,
      5346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5346,
    "end": 5347,
    "range": [
      5346,
      5347
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5349,
    "end": 5355,
    "range": [
      5349,
      5355
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5356,
    "end": 5365,
    "range": [
      5356,
      5365
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 5366,
    "end": 5372,
    "range": [
      5366,
      5372
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5372,
    "end": 5373,
    "range": [
      5372,
      5373
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 5373,
    "end": 5379,
    "range": [
      5373,
      5379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5380,
    "end": 5381,
    "range": [
      5380,
      5381
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 5382,
    "end": 5394,
    "range": [
      5382,
      5394
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5394,
    "end": 5395,
    "range": [
      5394,
      5395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5396,
    "end": 5397,
    "range": [
      5396,
      5397
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 5432,
    "end": 5437,
    "range": [
      5432,
      5437
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5437,
    "end": 5438,
    "range": [
      5437,
      5438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5438,
    "end": 5439,
    "range": [
      5438,
      5439
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5440,
    "end": 5446,
    "range": [
      5440,
      5446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5446,
    "end": 5447,
    "range": [
      5446,
      5447
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5483,
    "end": 5488,
    "range": [
      5483,
      5488
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5488,
    "end": 5489,
    "range": [
      5488,
      5489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5489,
    "end": 5490,
    "range": [
      5489,
      5490
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 5491,
    "end": 5497,
    "range": [
      5491,
      5497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5497,
    "end": 5498,
    "range": [
      5497,
      5498
    ]
  },
  {
    "type": "Identifier",
    "value": "clearableValue",
    "start": 5579,
    "end": 5593,
    "range": [
      5579,
      5593
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5593,
    "end": 5594,
    "range": [
      5593,
      5594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5594,
    "end": 5595,
    "range": [
      5594,
      5595
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5596,
    "end": 5603,
    "range": [
      5596,
      5603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5603,
    "end": 5604,
    "range": [
      5603,
      5604
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 5694,
    "end": 5702,
    "range": [
      5694,
      5702
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5702,
    "end": 5703,
    "range": [
      5702,
      5703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5703,
    "end": 5704,
    "range": [
      5703,
      5704
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5705,
    "end": 5712,
    "range": [
      5705,
      5712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5712,
    "end": 5713,
    "range": [
      5712,
      5713
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5890,
    "end": 5891,
    "range": [
      5890,
      5891
    ]
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 5891,
    "end": 5899,
    "range": [
      5891,
      5899
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5899,
    "end": 5900,
    "range": [
      5899,
      5900
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5901,
    "end": 5907,
    "range": [
      5901,
      5907
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5907,
    "end": 5908,
    "range": [
      5907,
      5908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5908,
    "end": 5909,
    "range": [
      5908,
      5909
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5910,
    "end": 5913,
    "range": [
      5910,
      5913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5913,
    "end": 5914,
    "range": [
      5913,
      5914
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5915,
    "end": 5916,
    "range": [
      5915,
      5916
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5918,
    "end": 5924,
    "range": [
      5918,
      5924
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5925,
    "end": 5929,
    "range": [
      5925,
      5929
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 5930,
    "end": 5942,
    "range": [
      5930,
      5942
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5943,
    "end": 5944,
    "range": [
      5943,
      5944
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5945,
    "end": 5951,
    "range": [
      5945,
      5951
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5952,
    "end": 5953,
    "range": [
      5952,
      5953
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5954,
    "end": 5960,
    "range": [
      5954,
      5960
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5961,
    "end": 5962,
    "range": [
      5961,
      5962
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5963,
    "end": 5970,
    "range": [
      5963,
      5970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5970,
    "end": 5971,
    "range": [
      5970,
      5971
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5973,
    "end": 5979,
    "range": [
      5973,
      5979
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5980,
    "end": 5989,
    "range": [
      5980,
      5989
    ]
  },
  {
    "type": "Identifier",
    "value": "MenuRendererProps",
    "start": 5990,
    "end": 6007,
    "range": [
      5990,
      6007
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6007,
    "end": 6008,
    "range": [
      6007,
      6008
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 6008,
    "end": 6014,
    "range": [
      6008,
      6014
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6015,
    "end": 6016,
    "range": [
      6015,
      6016
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 6017,
    "end": 6029,
    "range": [
      6017,
      6029
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6029,
    "end": 6030,
    "range": [
      6029,
      6030
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6031,
    "end": 6032,
    "range": [
      6031,
      6032
    ]
  },
  {
    "type": "Identifier",
    "value": "focusedOption",
    "start": 6150,
    "end": 6163,
    "range": [
      6150,
      6163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6163,
    "end": 6164,
    "range": [
      6163,
      6164
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 6165,
    "end": 6171,
    "range": [
      6165,
      6171
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6171,
    "end": 6172,
    "range": [
      6171,
      6172
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 6172,
    "end": 6178,
    "range": [
      6172,
      6178
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6178,
    "end": 6179,
    "range": [
      6178,
      6179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6179,
    "end": 6180,
    "range": [
      6179,
      6180
    ]
  },
  {
    "type": "Identifier",
    "value": "focusOption",
    "start": 6277,
    "end": 6288,
    "range": [
      6277,
      6288
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6288,
    "end": 6289,
    "range": [
      6288,
      6289
    ]
  },
  {
    "type": "Identifier",
    "value": "FocusOptionHandler",
    "start": 6290,
    "end": 6308,
    "range": [
      6290,
      6308
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6308,
    "end": 6309,
    "range": [
      6308,
      6309
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 6309,
    "end": 6315,
    "range": [
      6309,
      6315
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6315,
    "end": 6316,
    "range": [
      6315,
      6316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6316,
    "end": 6317,
    "range": [
      6316,
      6317
    ]
  },
  {
    "type": "Identifier",
    "value": "labelKey",
    "start": 6397,
    "end": 6405,
    "range": [
      6397,
      6405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6405,
    "end": 6406,
    "range": [
      6405,
      6406
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6407,
    "end": 6413,
    "range": [
      6407,
      6413
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6413,
    "end": 6414,
    "range": [
      6413,
      6414
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 6479,
    "end": 6486,
    "range": [
      6479,
      6486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6486,
    "end": 6487,
    "range": [
      6486,
      6487
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 6488,
    "end": 6495,
    "range": [
      6488,
      6495
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6495,
    "end": 6496,
    "range": [
      6495,
      6496
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 6496,
    "end": 6502,
    "range": [
      6496,
      6502
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6502,
    "end": 6503,
    "range": [
      6502,
      6503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6503,
    "end": 6504,
    "range": [
      6503,
      6504
    ]
  },
  {
    "type": "Identifier",
    "value": "selectValue",
    "start": 6602,
    "end": 6613,
    "range": [
      6602,
      6613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6613,
    "end": 6614,
    "range": [
      6613,
      6614
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectValueHandler",
    "start": 6615,
    "end": 6633,
    "range": [
      6615,
      6633
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6633,
    "end": 6634,
    "range": [
      6633,
      6634
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 6634,
    "end": 6640,
    "range": [
      6634,
      6640
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6640,
    "end": 6641,
    "range": [
      6640,
      6641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6641,
    "end": 6642,
    "range": [
      6641,
      6642
    ]
  },
  {
    "type": "Identifier",
    "value": "valueArray",
    "start": 6708,
    "end": 6718,
    "range": [
      6708,
      6718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6718,
    "end": 6719,
    "range": [
      6718,
      6719
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 6720,
    "end": 6727,
    "range": [
      6720,
      6727
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6727,
    "end": 6728,
    "range": [
      6727,
      6728
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 6728,
    "end": 6734,
    "range": [
      6728,
      6734
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6734,
    "end": 6735,
    "range": [
      6734,
      6735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6735,
    "end": 6736,
    "range": [
      6735,
      6736
    ]
  },
  {
    "type": "Identifier",
    "value": "removeValue",
    "start": 6843,
    "end": 6854,
    "range": [
      6843,
      6854
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6854,
    "end": 6855,
    "range": [
      6854,
      6855
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectValueHandler",
    "start": 6856,
    "end": 6874,
    "range": [
      6856,
      6874
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6874,
    "end": 6875,
    "range": [
      6874,
      6875
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 6875,
    "end": 6881,
    "range": [
      6875,
      6881
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6881,
    "end": 6882,
    "range": [
      6881,
      6882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6882,
    "end": 6883,
    "range": [
      6882,
      6883
    ]
  },
  {
    "type": "Identifier",
    "value": "optionRenderer",
    "start": 6982,
    "end": 6996,
    "range": [
      6982,
      6996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6996,
    "end": 6997,
    "range": [
      6996,
      6997
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionRendererHandler",
    "start": 6998,
    "end": 7019,
    "range": [
      6998,
      7019
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7019,
    "end": 7020,
    "range": [
      7019,
      7020
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 7020,
    "end": 7026,
    "range": [
      7020,
      7026
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7026,
    "end": 7027,
    "range": [
      7026,
      7027
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7027,
    "end": 7028,
    "range": [
      7027,
      7028
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7029,
    "end": 7030,
    "range": [
      7029,
      7030
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7032,
    "end": 7038,
    "range": [
      7032,
      7038
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7039,
    "end": 7048,
    "range": [
      7039,
      7048
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionComponentProps",
    "start": 7049,
    "end": 7069,
    "range": [
      7049,
      7069
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7069,
    "end": 7070,
    "range": [
      7069,
      7070
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 7070,
    "end": 7076,
    "range": [
      7070,
      7076
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7077,
    "end": 7078,
    "range": [
      7077,
      7078
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 7079,
    "end": 7091,
    "range": [
      7079,
      7091
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7091,
    "end": 7092,
    "range": [
      7091,
      7092
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7093,
    "end": 7094,
    "range": [
      7093,
      7094
    ]
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 7169,
    "end": 7178,
    "range": [
      7169,
      7178
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7178,
    "end": 7179,
    "range": [
      7178,
      7179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7179,
    "end": 7180,
    "range": [
      7179,
      7180
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7181,
    "end": 7187,
    "range": [
      7181,
      7187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7187,
    "end": 7188,
    "range": [
      7187,
      7188
    ]
  },
  {
    "type": "Identifier",
    "value": "focusOption",
    "start": 7243,
    "end": 7254,
    "range": [
      7243,
      7254
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7254,
    "end": 7255,
    "range": [
      7254,
      7255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7255,
    "end": 7256,
    "range": [
      7255,
      7256
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 7257,
    "end": 7263,
    "range": [
      7257,
      7263
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7263,
    "end": 7264,
    "range": [
      7263,
      7264
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 7264,
    "end": 7270,
    "range": [
      7264,
      7270
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7270,
    "end": 7271,
    "range": [
      7270,
      7271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7271,
    "end": 7272,
    "range": [
      7271,
      7272
    ]
  },
  {
    "type": "Identifier",
    "value": "inputValue",
    "start": 7278,
    "end": 7288,
    "range": [
      7278,
      7288
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7288,
    "end": 7289,
    "range": [
      7288,
      7289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7289,
    "end": 7290,
    "range": [
      7289,
      7290
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7291,
    "end": 7297,
    "range": [
      7291,
      7297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7297,
    "end": 7298,
    "range": [
      7297,
      7298
    ]
  },
  {
    "type": "Identifier",
    "value": "instancePrefix",
    "start": 7303,
    "end": 7317,
    "range": [
      7303,
      7317
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7317,
    "end": 7318,
    "range": [
      7317,
      7318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7318,
    "end": 7319,
    "range": [
      7318,
      7319
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7320,
    "end": 7326,
    "range": [
      7320,
      7326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7326,
    "end": 7327,
    "range": [
      7326,
      7327
    ]
  },
  {
    "type": "Identifier",
    "value": "isDisabled",
    "start": 7389,
    "end": 7399,
    "range": [
      7389,
      7399
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7399,
    "end": 7400,
    "range": [
      7399,
      7400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7400,
    "end": 7401,
    "range": [
      7400,
      7401
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7402,
    "end": 7409,
    "range": [
      7402,
      7409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7409,
    "end": 7410,
    "range": [
      7409,
      7410
    ]
  },
  {
    "type": "Identifier",
    "value": "isFocused",
    "start": 7471,
    "end": 7480,
    "range": [
      7471,
      7480
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7480,
    "end": 7481,
    "range": [
      7480,
      7481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7481,
    "end": 7482,
    "range": [
      7481,
      7482
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7483,
    "end": 7490,
    "range": [
      7483,
      7490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7490,
    "end": 7491,
    "range": [
      7490,
      7491
    ]
  },
  {
    "type": "Identifier",
    "value": "isSelected",
    "start": 7553,
    "end": 7563,
    "range": [
      7553,
      7563
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7563,
    "end": 7564,
    "range": [
      7563,
      7564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7564,
    "end": 7565,
    "range": [
      7564,
      7565
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7566,
    "end": 7573,
    "range": [
      7566,
      7573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7573,
    "end": 7574,
    "range": [
      7573,
      7574
    ]
  },
  {
    "type": "Identifier",
    "value": "onFocus",
    "start": 7655,
    "end": 7662,
    "range": [
      7655,
      7662
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7662,
    "end": 7663,
    "range": [
      7662,
      7663
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7663,
    "end": 7664,
    "range": [
      7663,
      7664
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7665,
    "end": 7666,
    "range": [
      7665,
      7666
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 7666,
    "end": 7672,
    "range": [
      7666,
      7672
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7672,
    "end": 7673,
    "range": [
      7672,
      7673
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 7674,
    "end": 7680,
    "range": [
      7674,
      7680
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7680,
    "end": 7681,
    "range": [
      7680,
      7681
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 7681,
    "end": 7687,
    "range": [
      7681,
      7687
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7687,
    "end": 7688,
    "range": [
      7687,
      7688
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7688,
    "end": 7689,
    "range": [
      7688,
      7689
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 7690,
    "end": 7695,
    "range": [
      7690,
      7695
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7695,
    "end": 7696,
    "range": [
      7695,
      7696
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7697,
    "end": 7700,
    "range": [
      7697,
      7700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7700,
    "end": 7701,
    "range": [
      7700,
      7701
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7702,
    "end": 7704,
    "range": [
      7702,
      7704
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 7705,
    "end": 7709,
    "range": [
      7705,
      7709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7709,
    "end": 7710,
    "range": [
      7709,
      7710
    ]
  },
  {
    "type": "Identifier",
    "value": "onSelect",
    "start": 7792,
    "end": 7800,
    "range": [
      7792,
      7800
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7800,
    "end": 7801,
    "range": [
      7800,
      7801
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7801,
    "end": 7802,
    "range": [
      7801,
      7802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7803,
    "end": 7804,
    "range": [
      7803,
      7804
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 7804,
    "end": 7810,
    "range": [
      7804,
      7810
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7810,
    "end": 7811,
    "range": [
      7810,
      7811
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 7812,
    "end": 7818,
    "range": [
      7812,
      7818
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7818,
    "end": 7819,
    "range": [
      7818,
      7819
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 7819,
    "end": 7825,
    "range": [
      7819,
      7825
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7825,
    "end": 7826,
    "range": [
      7825,
      7826
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7826,
    "end": 7827,
    "range": [
      7826,
      7827
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 7828,
    "end": 7833,
    "range": [
      7828,
      7833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7833,
    "end": 7834,
    "range": [
      7833,
      7834
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7835,
    "end": 7838,
    "range": [
      7835,
      7838
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7838,
    "end": 7839,
    "range": [
      7838,
      7839
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7840,
    "end": 7842,
    "range": [
      7840,
      7842
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 7843,
    "end": 7847,
    "range": [
      7843,
      7847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7847,
    "end": 7848,
    "range": [
      7847,
      7848
    ]
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 7918,
    "end": 7924,
    "range": [
      7918,
      7924
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7924,
    "end": 7925,
    "range": [
      7924,
      7925
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 7926,
    "end": 7932,
    "range": [
      7926,
      7932
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7932,
    "end": 7933,
    "range": [
      7932,
      7933
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 7933,
    "end": 7939,
    "range": [
      7933,
      7939
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7939,
    "end": 7940,
    "range": [
      7939,
      7940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7940,
    "end": 7941,
    "range": [
      7940,
      7941
    ]
  },
  {
    "type": "Identifier",
    "value": "optionIndex",
    "start": 8017,
    "end": 8028,
    "range": [
      8017,
      8028
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8028,
    "end": 8029,
    "range": [
      8028,
      8029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8029,
    "end": 8030,
    "range": [
      8029,
      8030
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8031,
    "end": 8037,
    "range": [
      8031,
      8037
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8037,
    "end": 8038,
    "range": [
      8037,
      8038
    ]
  },
  {
    "type": "Identifier",
    "value": "removeValue",
    "start": 8182,
    "end": 8193,
    "range": [
      8182,
      8193
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8193,
    "end": 8194,
    "range": [
      8193,
      8194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8194,
    "end": 8195,
    "range": [
      8194,
      8195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8196,
    "end": 8197,
    "range": [
      8196,
      8197
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 8197,
    "end": 8202,
    "range": [
      8197,
      8202
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8202,
    "end": 8203,
    "range": [
      8202,
      8203
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8204,
    "end": 8210,
    "range": [
      8204,
      8210
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8211,
    "end": 8212,
    "range": [
      8211,
      8212
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8213,
    "end": 8219,
    "range": [
      8213,
      8219
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8219,
    "end": 8220,
    "range": [
      8219,
      8220
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8220,
    "end": 8221,
    "range": [
      8220,
      8221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8221,
    "end": 8222,
    "range": [
      8221,
      8222
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8223,
    "end": 8225,
    "range": [
      8223,
      8225
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8226,
    "end": 8230,
    "range": [
      8226,
      8230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8230,
    "end": 8231,
    "range": [
      8230,
      8231
    ]
  },
  {
    "type": "Identifier",
    "value": "selectValue",
    "start": 8341,
    "end": 8352,
    "range": [
      8341,
      8352
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8352,
    "end": 8353,
    "range": [
      8352,
      8353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8353,
    "end": 8354,
    "range": [
      8353,
      8354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8355,
    "end": 8356,
    "range": [
      8355,
      8356
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 8356,
    "end": 8361,
    "range": [
      8356,
      8361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8361,
    "end": 8362,
    "range": [
      8361,
      8362
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8363,
    "end": 8369,
    "range": [
      8363,
      8369
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8370,
    "end": 8371,
    "range": [
      8370,
      8371
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8372,
    "end": 8378,
    "range": [
      8372,
      8378
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8378,
    "end": 8379,
    "range": [
      8378,
      8379
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8379,
    "end": 8380,
    "range": [
      8379,
      8380
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8380,
    "end": 8381,
    "range": [
      8380,
      8381
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8382,
    "end": 8384,
    "range": [
      8382,
      8384
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8385,
    "end": 8389,
    "range": [
      8385,
      8389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8389,
    "end": 8390,
    "range": [
      8389,
      8390
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8391,
    "end": 8392,
    "range": [
      8391,
      8392
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8394,
    "end": 8400,
    "range": [
      8394,
      8400
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8401,
    "end": 8410,
    "range": [
      8401,
      8410
    ]
  },
  {
    "type": "Identifier",
    "value": "ArrowRendererProps",
    "start": 8411,
    "end": 8429,
    "range": [
      8411,
      8429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8430,
    "end": 8431,
    "range": [
      8430,
      8431
    ]
  },
  {
    "type": "Identifier",
    "value": "onMouseDown",
    "start": 8491,
    "end": 8502,
    "range": [
      8491,
      8502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8502,
    "end": 8503,
    "range": [
      8502,
      8503
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 8504,
    "end": 8509,
    "range": [
      8504,
      8509
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8509,
    "end": 8510,
    "range": [
      8509,
      8510
    ]
  },
  {
    "type": "Identifier",
    "value": "MouseEventHandler",
    "start": 8510,
    "end": 8527,
    "range": [
      8510,
      8527
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8527,
    "end": 8528,
    "range": [
      8527,
      8528
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8528,
    "end": 8531,
    "range": [
      8528,
      8531
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8531,
    "end": 8532,
    "range": [
      8531,
      8532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8532,
    "end": 8533,
    "range": [
      8532,
      8533
    ]
  },
  {
    "type": "Identifier",
    "value": "isOpen",
    "start": 8597,
    "end": 8603,
    "range": [
      8597,
      8603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8603,
    "end": 8604,
    "range": [
      8603,
      8604
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8605,
    "end": 8612,
    "range": [
      8605,
      8612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8612,
    "end": 8613,
    "range": [
      8612,
      8613
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8614,
    "end": 8615,
    "range": [
      8614,
      8615
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8617,
    "end": 8623,
    "range": [
      8617,
      8623
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8624,
    "end": 8633,
    "range": [
      8624,
      8633
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueComponentProps",
    "start": 8634,
    "end": 8653,
    "range": [
      8634,
      8653
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8653,
    "end": 8654,
    "range": [
      8653,
      8654
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8654,
    "end": 8660,
    "range": [
      8654,
      8660
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8661,
    "end": 8662,
    "range": [
      8661,
      8662
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 8663,
    "end": 8675,
    "range": [
      8663,
      8675
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8675,
    "end": 8676,
    "range": [
      8675,
      8676
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8677,
    "end": 8678,
    "range": [
      8677,
      8678
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 8683,
    "end": 8691,
    "range": [
      8683,
      8691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8691,
    "end": 8692,
    "range": [
      8691,
      8692
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectProps",
    "start": 8693,
    "end": 8709,
    "range": [
      8693,
      8709
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8709,
    "end": 8710,
    "range": [
      8709,
      8710
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8710,
    "end": 8716,
    "range": [
      8710,
      8716
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8716,
    "end": 8717,
    "range": [
      8716,
      8717
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8717,
    "end": 8718,
    "range": [
      8717,
      8718
    ]
  },
  {
    "type": "String",
    "value": "'disabled'",
    "start": 8718,
    "end": 8728,
    "range": [
      8718,
      8728
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8728,
    "end": 8729,
    "range": [
      8728,
      8729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8729,
    "end": 8730,
    "range": [
      8729,
      8730
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 8735,
    "end": 8737,
    "range": [
      8735,
      8737
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8737,
    "end": 8738,
    "range": [
      8737,
      8738
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8739,
    "end": 8745,
    "range": [
      8739,
      8745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8745,
    "end": 8746,
    "range": [
      8745,
      8746
    ]
  },
  {
    "type": "Identifier",
    "value": "instancePrefix",
    "start": 8751,
    "end": 8765,
    "range": [
      8751,
      8765
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8765,
    "end": 8766,
    "range": [
      8765,
      8766
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8767,
    "end": 8773,
    "range": [
      8767,
      8773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8773,
    "end": 8774,
    "range": [
      8773,
      8774
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 8779,
    "end": 8786,
    "range": [
      8779,
      8786
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8786,
    "end": 8787,
    "range": [
      8786,
      8787
    ]
  },
  {
    "type": "Identifier",
    "value": "OnValueClickHandler",
    "start": 8788,
    "end": 8807,
    "range": [
      8788,
      8807
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8807,
    "end": 8808,
    "range": [
      8807,
      8808
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8808,
    "end": 8814,
    "range": [
      8808,
      8814
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8814,
    "end": 8815,
    "range": [
      8814,
      8815
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8816,
    "end": 8817,
    "range": [
      8816,
      8817
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 8818,
    "end": 8822,
    "range": [
      8818,
      8822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8822,
    "end": 8823,
    "range": [
      8822,
      8823
    ]
  },
  {
    "type": "Identifier",
    "value": "onRemove",
    "start": 8828,
    "end": 8836,
    "range": [
      8828,
      8836
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8836,
    "end": 8837,
    "range": [
      8836,
      8837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8837,
    "end": 8838,
    "range": [
      8837,
      8838
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectValueHandler",
    "start": 8839,
    "end": 8857,
    "range": [
      8839,
      8857
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8857,
    "end": 8858,
    "range": [
      8857,
      8858
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8858,
    "end": 8864,
    "range": [
      8858,
      8864
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8864,
    "end": 8865,
    "range": [
      8864,
      8865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8865,
    "end": 8866,
    "range": [
      8865,
      8866
    ]
  },
  {
    "type": "Identifier",
    "value": "placeholder",
    "start": 8871,
    "end": 8882,
    "range": [
      8871,
      8882
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8882,
    "end": 8883,
    "range": [
      8882,
      8883
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectProps",
    "start": 8884,
    "end": 8900,
    "range": [
      8884,
      8900
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8900,
    "end": 8901,
    "range": [
      8900,
      8901
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8901,
    "end": 8907,
    "range": [
      8901,
      8907
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8907,
    "end": 8908,
    "range": [
      8907,
      8908
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8908,
    "end": 8909,
    "range": [
      8908,
      8909
    ]
  },
  {
    "type": "String",
    "value": "'placeholder'",
    "start": 8909,
    "end": 8922,
    "range": [
      8909,
      8922
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8922,
    "end": 8923,
    "range": [
      8922,
      8923
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8923,
    "end": 8924,
    "range": [
      8923,
      8924
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 8929,
    "end": 8934,
    "range": [
      8929,
      8934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8934,
    "end": 8935,
    "range": [
      8934,
      8935
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 8936,
    "end": 8942,
    "range": [
      8936,
      8942
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8942,
    "end": 8943,
    "range": [
      8942,
      8943
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8943,
    "end": 8949,
    "range": [
      8943,
      8949
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8949,
    "end": 8950,
    "range": [
      8949,
      8950
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8950,
    "end": 8951,
    "range": [
      8950,
      8951
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 8956,
    "end": 8962,
    "range": [
      8956,
      8962
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8962,
    "end": 8963,
    "range": [
      8962,
      8963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8963,
    "end": 8964,
    "range": [
      8963,
      8964
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 8965,
    "end": 8970,
    "range": [
      8965,
      8970
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8970,
    "end": 8971,
    "range": [
      8970,
      8971
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 8971,
    "end": 8977,
    "range": [
      8971,
      8977
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8977,
    "end": 8978,
    "range": [
      8977,
      8978
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 8978,
    "end": 8984,
    "range": [
      8978,
      8984
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8984,
    "end": 8985,
    "range": [
      8984,
      8985
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8985,
    "end": 8986,
    "range": [
      8985,
      8986
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8986,
    "end": 8987,
    "range": [
      8986,
      8987
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8988,
    "end": 8989,
    "range": [
      8988,
      8989
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8991,
    "end": 8997,
    "range": [
      8991,
      8997
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8998,
    "end": 9007,
    "range": [
      8998,
      9007
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectProps",
    "start": 9008,
    "end": 9024,
    "range": [
      9008,
      9024
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9024,
    "end": 9025,
    "range": [
      9024,
      9025
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 9025,
    "end": 9031,
    "range": [
      9025,
      9031
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9032,
    "end": 9033,
    "range": [
      9032,
      9033
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionValues",
    "start": 9034,
    "end": 9046,
    "range": [
      9034,
      9046
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9046,
    "end": 9047,
    "range": [
      9046,
      9047
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9048,
    "end": 9055,
    "range": [
      9048,
      9055
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 9056,
    "end": 9061,
    "range": [
      9056,
      9061
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9061,
    "end": 9062,
    "range": [
      9061,
      9062
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 9062,
    "end": 9067,
    "range": [
      9062,
      9067
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9067,
    "end": 9068,
    "range": [
      9067,
      9068
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactSelectClass",
    "start": 9068,
    "end": 9084,
    "range": [
      9068,
      9084
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9084,
    "end": 9085,
    "range": [
      9084,
      9085
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 9085,
    "end": 9091,
    "range": [
      9085,
      9091
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9091,
    "end": 9092,
    "range": [
      9091,
      9092
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9092,
    "end": 9093,
    "range": [
      9092,
      9093
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9094,
    "end": 9095,
    "range": [
      9094,
      9095
    ]
  },
  {
    "type": "Identifier",
    "value": "addLabelText",
    "start": 9200,
    "end": 9212,
    "range": [
      9200,
      9212
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9212,
    "end": 9213,
    "range": [
      9212,
      9213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9213,
    "end": 9214,
    "range": [
      9213,
      9214
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9215,
    "end": 9221,
    "range": [
      9215,
      9221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9221,
    "end": 9222,
    "range": [
      9221,
      9222
    ]
  },
  {
    "type": "Identifier",
    "value": "arrowRenderer",
    "start": 9359,
    "end": 9372,
    "range": [
      9359,
      9372
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9372,
    "end": 9373,
    "range": [
      9372,
      9373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9373,
    "end": 9374,
    "range": [
      9373,
      9374
    ]
  },
  {
    "type": "Identifier",
    "value": "ArrowRendererHandler",
    "start": 9375,
    "end": 9395,
    "range": [
      9375,
      9395
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9396,
    "end": 9397,
    "range": [
      9396,
      9397
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 9398,
    "end": 9402,
    "range": [
      9398,
      9402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9402,
    "end": 9403,
    "range": [
      9402,
      9403
    ]
  },
  {
    "type": "Identifier",
    "value": "autoBlur",
    "start": 9561,
    "end": 9569,
    "range": [
      9561,
      9569
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9569,
    "end": 9570,
    "range": [
      9569,
      9570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9570,
    "end": 9571,
    "range": [
      9570,
      9571
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 9572,
    "end": 9579,
    "range": [
      9572,
      9579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9579,
    "end": 9580,
    "range": [
      9579,
      9580
    ]
  },
  {
    "type": "Identifier",
    "value": "autofocus",
    "start": 9705,
    "end": 9714,
    "range": [
      9705,
      9714
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9714,
    "end": 9715,
    "range": [
      9714,
      9715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9715,
    "end": 9716,
    "range": [
      9715,
      9716
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 9717,
    "end": 9724,
    "range": [
      9717,
      9724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9724,
    "end": 9725,
    "range": [
      9724,
      9725
    ]
  },
  {
    "type": "Identifier",
    "value": "autoFocus",
    "start": 9808,
    "end": 9817,
    "range": [
      9808,
      9817
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9817,
    "end": 9818,
    "range": [
      9817,
      9818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9818,
    "end": 9819,
    "range": [
      9818,
      9819
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 9820,
    "end": 9827,
    "range": [
      9820,
      9827
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9827,
    "end": 9828,
    "range": [
      9827,
      9828
    ]
  },
  {
    "type": "Identifier",
    "value": "autosize",
    "start": 9928,
    "end": 9936,
    "range": [
      9928,
      9936
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9936,
    "end": 9937,
    "range": [
      9936,
      9937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9937,
    "end": 9938,
    "range": [
      9937,
      9938
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 9939,
    "end": 9946,
    "range": [
      9939,
      9946
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9946,
    "end": 9947,
    "range": [
      9946,
      9947
    ]
  },
  {
    "type": "Identifier",
    "value": "backspaceRemoves",
    "start": 10074,
    "end": 10090,
    "range": [
      10074,
      10090
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10090,
    "end": 10091,
    "range": [
      10090,
      10091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10091,
    "end": 10092,
    "range": [
      10091,
      10092
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 10093,
    "end": 10100,
    "range": [
      10093,
      10100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10100,
    "end": 10101,
    "range": [
      10100,
      10101
    ]
  },
  {
    "type": "Identifier",
    "value": "backspaceToRemoveMessage",
    "start": 10302,
    "end": 10326,
    "range": [
      10302,
      10326
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10326,
    "end": 10327,
    "range": [
      10326,
      10327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10327,
    "end": 10328,
    "range": [
      10327,
      10328
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10329,
    "end": 10335,
    "range": [
      10329,
      10335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10335,
    "end": 10336,
    "range": [
      10335,
      10336
    ]
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 10400,
    "end": 10409,
    "range": [
      10400,
      10409
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10409,
    "end": 10410,
    "range": [
      10409,
      10410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10410,
    "end": 10411,
    "range": [
      10410,
      10411
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10412,
    "end": 10418,
    "range": [
      10412,
      10418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10418,
    "end": 10419,
    "range": [
      10418,
      10419
    ]
  },
  {
    "type": "Identifier",
    "value": "classNamePrefix",
    "start": 10520,
    "end": 10535,
    "range": [
      10520,
      10535
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10535,
    "end": 10536,
    "range": [
      10535,
      10536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10536,
    "end": 10537,
    "range": [
      10536,
      10537
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10538,
    "end": 10544,
    "range": [
      10538,
      10544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10544,
    "end": 10545,
    "range": [
      10544,
      10545
    ]
  },
  {
    "type": "Identifier",
    "value": "clearAllText",
    "start": 10652,
    "end": 10664,
    "range": [
      10652,
      10664
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10664,
    "end": 10665,
    "range": [
      10664,
      10665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10665,
    "end": 10666,
    "range": [
      10665,
      10666
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10667,
    "end": 10673,
    "range": [
      10667,
      10673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10673,
    "end": 10674,
    "range": [
      10673,
      10674
    ]
  },
  {
    "type": "Identifier",
    "value": "clearRenderer",
    "start": 10820,
    "end": 10833,
    "range": [
      10820,
      10833
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10833,
    "end": 10834,
    "range": [
      10833,
      10834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10834,
    "end": 10835,
    "range": [
      10834,
      10835
    ]
  },
  {
    "type": "Identifier",
    "value": "ClearRendererHandler",
    "start": 10836,
    "end": 10856,
    "range": [
      10836,
      10856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10856,
    "end": 10857,
    "range": [
      10856,
      10857
    ]
  },
  {
    "type": "Identifier",
    "value": "clearValueText",
    "start": 10945,
    "end": 10959,
    "range": [
      10945,
      10959
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10959,
    "end": 10960,
    "range": [
      10959,
      10960
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10960,
    "end": 10961,
    "range": [
      10960,
      10961
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10962,
    "end": 10968,
    "range": [
      10962,
      10968
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10968,
    "end": 10969,
    "range": [
      10968,
      10969
    ]
  },
  {
    "type": "Identifier",
    "value": "closeOnSelect",
    "start": 11069,
    "end": 11082,
    "range": [
      11069,
      11082
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11082,
    "end": 11083,
    "range": [
      11082,
      11083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11083,
    "end": 11084,
    "range": [
      11083,
      11084
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 11085,
    "end": 11092,
    "range": [
      11085,
      11092
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11092,
    "end": 11093,
    "range": [
      11092,
      11093
    ]
  },
  {
    "type": "Identifier",
    "value": "clearable",
    "start": 11236,
    "end": 11245,
    "range": [
      11236,
      11245
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11245,
    "end": 11246,
    "range": [
      11245,
      11246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11246,
    "end": 11247,
    "range": [
      11246,
      11247
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 11248,
    "end": 11255,
    "range": [
      11248,
      11255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11255,
    "end": 11256,
    "range": [
      11255,
      11256
    ]
  },
  {
    "type": "Identifier",
    "value": "deleteRemoves",
    "start": 11365,
    "end": 11378,
    "range": [
      11365,
      11378
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11378,
    "end": 11379,
    "range": [
      11378,
      11379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11379,
    "end": 11380,
    "range": [
      11379,
      11380
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 11381,
    "end": 11388,
    "range": [
      11381,
      11388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11388,
    "end": 11389,
    "range": [
      11388,
      11389
    ]
  },
  {
    "type": "Identifier",
    "value": "delimiter",
    "start": 11478,
    "end": 11487,
    "range": [
      11478,
      11487
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11487,
    "end": 11488,
    "range": [
      11487,
      11488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11488,
    "end": 11489,
    "range": [
      11488,
      11489
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11490,
    "end": 11496,
    "range": [
      11490,
      11496
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11496,
    "end": 11497,
    "range": [
      11496,
      11497
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 11585,
    "end": 11593,
    "range": [
      11585,
      11593
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11593,
    "end": 11594,
    "range": [
      11593,
      11594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11594,
    "end": 11595,
    "range": [
      11594,
      11595
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 11596,
    "end": 11603,
    "range": [
      11596,
      11603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11603,
    "end": 11604,
    "range": [
      11603,
      11604
    ]
  },
  {
    "type": "Identifier",
    "value": "escapeClearsValue",
    "start": 11709,
    "end": 11726,
    "range": [
      11709,
      11726
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11726,
    "end": 11727,
    "range": [
      11726,
      11727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11727,
    "end": 11728,
    "range": [
      11727,
      11728
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 11729,
    "end": 11736,
    "range": [
      11729,
      11736
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11736,
    "end": 11737,
    "range": [
      11736,
      11737
    ]
  },
  {
    "type": "Identifier",
    "value": "filterOption",
    "start": 11798,
    "end": 11810,
    "range": [
      11798,
      11810
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11810,
    "end": 11811,
    "range": [
      11810,
      11811
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11811,
    "end": 11812,
    "range": [
      11811,
      11812
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterOptionHandler",
    "start": 11813,
    "end": 11832,
    "range": [
      11813,
      11832
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11832,
    "end": 11833,
    "range": [
      11832,
      11833
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 11833,
    "end": 11839,
    "range": [
      11833,
      11839
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11839,
    "end": 11840,
    "range": [
      11839,
      11840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11840,
    "end": 11841,
    "range": [
      11840,
      11841
    ]
  },
  {
    "type": "Identifier",
    "value": "filterOptions",
    "start": 11904,
    "end": 11917,
    "range": [
      11904,
      11917
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 11917,
    "end": 11918,
    "range": [
      11917,
      11918
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11918,
    "end": 11919,
    "range": [
      11918,
      11919
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterOptionsHandler",
    "start": 11920,
    "end": 11940,
    "range": [
      11920,
      11940
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11940,
    "end": 11941,
    "range": [
      11940,
      11941
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 11941,
    "end": 11947,
    "range": [
      11941,
      11947
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11947,
    "end": 11948,
    "range": [
      11947,
      11948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11948,
    "end": 11949,
    "range": [
      11948,
      11949
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 12044,
    "end": 12046,
    "range": [
      12044,
      12046
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12046,
    "end": 12047,
    "range": [
      12046,
      12047
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12047,
    "end": 12048,
    "range": [
      12047,
      12048
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12049,
    "end": 12055,
    "range": [
      12049,
      12055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12055,
    "end": 12056,
    "range": [
      12055,
      12056
    ]
  },
  {
    "type": "Identifier",
    "value": "ignoreAccents",
    "start": 12148,
    "end": 12161,
    "range": [
      12148,
      12161
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12161,
    "end": 12162,
    "range": [
      12161,
      12162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12162,
    "end": 12163,
    "range": [
      12162,
      12163
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 12164,
    "end": 12171,
    "range": [
      12164,
      12171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12171,
    "end": 12172,
    "range": [
      12171,
      12172
    ]
  },
  {
    "type": "Identifier",
    "value": "ignoreCase",
    "start": 12267,
    "end": 12277,
    "range": [
      12267,
      12277
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12277,
    "end": 12278,
    "range": [
      12277,
      12278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12278,
    "end": 12279,
    "range": [
      12278,
      12279
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 12280,
    "end": 12287,
    "range": [
      12280,
      12287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12287,
    "end": 12288,
    "range": [
      12287,
      12288
    ]
  },
  {
    "type": "Identifier",
    "value": "inputProps",
    "start": 12416,
    "end": 12426,
    "range": [
      12416,
      12426
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12426,
    "end": 12427,
    "range": [
      12426,
      12427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12427,
    "end": 12428,
    "range": [
      12427,
      12428
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12429,
    "end": 12430,
    "range": [
      12429,
      12430
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 12431,
    "end": 12432,
    "range": [
      12431,
      12432
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 12432,
    "end": 12435,
    "range": [
      12432,
      12435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12435,
    "end": 12436,
    "range": [
      12435,
      12436
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12437,
    "end": 12443,
    "range": [
      12437,
      12443
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 12443,
    "end": 12444,
    "range": [
      12443,
      12444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12444,
    "end": 12445,
    "range": [
      12444,
      12445
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 12446,
    "end": 12449,
    "range": [
      12446,
      12449
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12450,
    "end": 12451,
    "range": [
      12450,
      12451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12451,
    "end": 12452,
    "range": [
      12451,
      12452
    ]
  },
  {
    "type": "Identifier",
    "value": "inputRenderer",
    "start": 12503,
    "end": 12516,
    "range": [
      12503,
      12516
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12516,
    "end": 12517,
    "range": [
      12516,
      12517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12517,
    "end": 12518,
    "range": [
      12517,
      12518
    ]
  },
  {
    "type": "Identifier",
    "value": "InputRendererHandler",
    "start": 12519,
    "end": 12539,
    "range": [
      12519,
      12539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12539,
    "end": 12540,
    "range": [
      12539,
      12540
    ]
  },
  {
    "type": "Identifier",
    "value": "instanceId",
    "start": 12699,
    "end": 12709,
    "range": [
      12699,
      12709
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12709,
    "end": 12710,
    "range": [
      12709,
      12710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12710,
    "end": 12711,
    "range": [
      12710,
      12711
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12712,
    "end": 12718,
    "range": [
      12712,
      12718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12718,
    "end": 12719,
    "range": [
      12718,
      12719
    ]
  },
  {
    "type": "Identifier",
    "value": "isLoading",
    "start": 12916,
    "end": 12925,
    "range": [
      12916,
      12925
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 12925,
    "end": 12926,
    "range": [
      12925,
      12926
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12926,
    "end": 12927,
    "range": [
      12926,
      12927
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 12928,
    "end": 12935,
    "range": [
      12928,
      12935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12935,
    "end": 12936,
    "range": [
      12935,
      12936
    ]
  },
  {
    "type": "Identifier",
    "value": "joinValues",
    "start": 13066,
    "end": 13076,
    "range": [
      13066,
      13076
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13076,
    "end": 13077,
    "range": [
      13076,
      13077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13077,
    "end": 13078,
    "range": [
      13077,
      13078
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 13079,
    "end": 13086,
    "range": [
      13079,
      13086
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13086,
    "end": 13087,
    "range": [
      13086,
      13087
    ]
  },
  {
    "type": "Identifier",
    "value": "labelKey",
    "start": 13180,
    "end": 13188,
    "range": [
      13180,
      13188
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13188,
    "end": 13189,
    "range": [
      13188,
      13189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13189,
    "end": 13190,
    "range": [
      13189,
      13190
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 13191,
    "end": 13197,
    "range": [
      13191,
      13197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13197,
    "end": 13198,
    "range": [
      13197,
      13198
    ]
  },
  {
    "type": "Identifier",
    "value": "matchPos",
    "start": 13309,
    "end": 13317,
    "range": [
      13309,
      13317
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13317,
    "end": 13318,
    "range": [
      13317,
      13318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13318,
    "end": 13319,
    "range": [
      13318,
      13319
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 13320,
    "end": 13326,
    "range": [
      13320,
      13326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13326,
    "end": 13327,
    "range": [
      13326,
      13327
    ]
  },
  {
    "type": "Identifier",
    "value": "matchProp",
    "start": 13432,
    "end": 13441,
    "range": [
      13432,
      13441
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13441,
    "end": 13442,
    "range": [
      13441,
      13442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13442,
    "end": 13443,
    "range": [
      13442,
      13443
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 13444,
    "end": 13450,
    "range": [
      13444,
      13450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13450,
    "end": 13451,
    "range": [
      13450,
      13451
    ]
  },
  {
    "type": "Identifier",
    "value": "menuBuffer",
    "start": 13600,
    "end": 13610,
    "range": [
      13600,
      13610
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13610,
    "end": 13611,
    "range": [
      13610,
      13611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13611,
    "end": 13612,
    "range": [
      13611,
      13612
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13613,
    "end": 13619,
    "range": [
      13613,
      13619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13619,
    "end": 13620,
    "range": [
      13619,
      13620
    ]
  },
  {
    "type": "Identifier",
    "value": "menuContainerStyle",
    "start": 13694,
    "end": 13712,
    "range": [
      13694,
      13712
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13712,
    "end": 13713,
    "range": [
      13712,
      13713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13713,
    "end": 13714,
    "range": [
      13713,
      13714
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 13715,
    "end": 13720,
    "range": [
      13715,
      13720
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13720,
    "end": 13721,
    "range": [
      13720,
      13721
    ]
  },
  {
    "type": "Identifier",
    "value": "CSSProperties",
    "start": 13721,
    "end": 13734,
    "range": [
      13721,
      13734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13734,
    "end": 13735,
    "range": [
      13734,
      13735
    ]
  },
  {
    "type": "Identifier",
    "value": "menuRenderer",
    "start": 13798,
    "end": 13810,
    "range": [
      13798,
      13810
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13810,
    "end": 13811,
    "range": [
      13810,
      13811
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13811,
    "end": 13812,
    "range": [
      13811,
      13812
    ]
  },
  {
    "type": "Identifier",
    "value": "MenuRendererHandler",
    "start": 13813,
    "end": 13832,
    "range": [
      13813,
      13832
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13832,
    "end": 13833,
    "range": [
      13832,
      13833
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 13833,
    "end": 13839,
    "range": [
      13833,
      13839
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13839,
    "end": 13840,
    "range": [
      13839,
      13840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13840,
    "end": 13841,
    "range": [
      13840,
      13841
    ]
  },
  {
    "type": "Identifier",
    "value": "menuStyle",
    "start": 13905,
    "end": 13914,
    "range": [
      13905,
      13914
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13914,
    "end": 13915,
    "range": [
      13914,
      13915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13915,
    "end": 13916,
    "range": [
      13915,
      13916
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 13917,
    "end": 13922,
    "range": [
      13917,
      13922
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13922,
    "end": 13923,
    "range": [
      13922,
      13923
    ]
  },
  {
    "type": "Identifier",
    "value": "CSSProperties",
    "start": 13923,
    "end": 13936,
    "range": [
      13923,
      13936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13936,
    "end": 13937,
    "range": [
      13936,
      13937
    ]
  },
  {
    "type": "Identifier",
    "value": "multi",
    "start": 14005,
    "end": 14010,
    "range": [
      14005,
      14010
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 14010,
    "end": 14011,
    "range": [
      14010,
      14011
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14011,
    "end": 14012,
    "range": [
      14011,
      14012
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 14013,
    "end": 14020,
    "range": [
      14013,
      14020
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14020,
    "end": 14021,
    "range": [
      14020,
      14021
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 14086,
    "end": 14090,
    "range": [
      14086,
      14090
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 14090,
    "end": 14091,
    "range": [
      14090,
      14091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14091,
    "end": 14092,
    "range": [
      14091,
      14092
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 14093,
    "end": 14099,
    "range": [
      14093,
      14099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14099,
    "end": 14100,
    "range": [
      14099,
      14100
    ]
  },
  {
    "type": "Identifier",
    "value": "noResultsText",
    "start": 14255,
    "end": 14268,
    "range": [
      14255,
      14268
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 14268,
    "end": 14269,
    "range": [
      14268,
      14269
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14269,
    "end": 14270,
    "range": [
      14269,
      14270
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 14271,
    "end": 14277,
    "range": [
      14271,
      14277
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 14278,
    "end": 14279,
    "range": [
      14278,
      14279
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 14280,
    "end": 14283,
    "range": [
      14280,
      14283
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14283,
    "end": 14284,
    "range": [
      14283,
      14284
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 14284,
    "end": 14291,
    "range": [
      14284,
      14291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14291,
    "end": 14292,
    "range": [
      14291,
      14292
    ]
  },
  {
    "type": "Identifier",
    "value": "onBlur",
    "start": 14356,
    "end": 14362,
    "range": [
      14356,
      14362
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 14362,
    "end": 14363,
    "range": [
      14362,
      14363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14363,
    "end": 14364,
    "range": [
      14363,
      14364
    ]
  },
  {
    "type": "Identifier",
    "value": "OnBlurHandler",
    "start": 14365,
    "end": 14378,
    "range": [
      14365,
      14378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14378,
    "end": 14379,
    "range": [
      14378,
      14379
    ]
  },
  {
    "type": "Identifier",
    "value": "onBlurResetsInput",
    "start": 14466,
    "end": 14483,
    "range": [
      14466,
      14483
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 14483,
    "end": 14484,
    "range": [
      14483,
      14484
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14484,
    "end": 14485,
    "range": [
      14484,
      14485
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 14486,
    "end": 14493,
    "range": [
      14486,
      14493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14493,
    "end": 14494,
    "range": [
      14493,
      14494
    ]
  },
  {
    "type": "Identifier",
    "value": "onSelectResetsInput",
    "start": 14753,
    "end": 14772,
    "range": [
      14753,
      14772
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 14772,
    "end": 14773,
    "range": [
      14772,
      14773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14773,
    "end": 14774,
    "range": [
      14773,
      14774
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 14775,
    "end": 14782,
    "range": [
      14775,
      14782
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14782,
    "end": 14783,
    "range": [
      14782,
      14783
    ]
  },
  {
    "type": "Identifier",
    "value": "onCloseResetsInput",
    "start": 14895,
    "end": 14913,
    "range": [
      14895,
      14913
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 14913,
    "end": 14914,
    "range": [
      14913,
      14914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14914,
    "end": 14915,
    "range": [
      14914,
      14915
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 14916,
    "end": 14923,
    "range": [
      14916,
      14923
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14923,
    "end": 14924,
    "range": [
      14923,
      14924
    ]
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 14993,
    "end": 15001,
    "range": [
      14993,
      15001
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15001,
    "end": 15002,
    "range": [
      15001,
      15002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15002,
    "end": 15003,
    "range": [
      15002,
      15003
    ]
  },
  {
    "type": "Identifier",
    "value": "OnChangeHandler",
    "start": 15004,
    "end": 15019,
    "range": [
      15004,
      15019
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15019,
    "end": 15020,
    "range": [
      15019,
      15020
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 15020,
    "end": 15026,
    "range": [
      15020,
      15026
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15026,
    "end": 15027,
    "range": [
      15026,
      15027
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15027,
    "end": 15028,
    "range": [
      15027,
      15028
    ]
  },
  {
    "type": "Identifier",
    "value": "onClose",
    "start": 15086,
    "end": 15093,
    "range": [
      15086,
      15093
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15093,
    "end": 15094,
    "range": [
      15093,
      15094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15094,
    "end": 15095,
    "range": [
      15094,
      15095
    ]
  },
  {
    "type": "Identifier",
    "value": "OnCloseHandler",
    "start": 15096,
    "end": 15110,
    "range": [
      15096,
      15110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15110,
    "end": 15111,
    "range": [
      15110,
      15111
    ]
  },
  {
    "type": "Identifier",
    "value": "onFocus",
    "start": 15176,
    "end": 15183,
    "range": [
      15176,
      15183
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15183,
    "end": 15184,
    "range": [
      15183,
      15184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15184,
    "end": 15185,
    "range": [
      15184,
      15185
    ]
  },
  {
    "type": "Identifier",
    "value": "OnFocusHandler",
    "start": 15186,
    "end": 15200,
    "range": [
      15186,
      15200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15200,
    "end": 15201,
    "range": [
      15200,
      15201
    ]
  },
  {
    "type": "Identifier",
    "value": "onInputChange",
    "start": 15277,
    "end": 15290,
    "range": [
      15277,
      15290
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15290,
    "end": 15291,
    "range": [
      15290,
      15291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15291,
    "end": 15292,
    "range": [
      15291,
      15292
    ]
  },
  {
    "type": "Identifier",
    "value": "OnInputChangeHandler",
    "start": 15293,
    "end": 15313,
    "range": [
      15293,
      15313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15313,
    "end": 15314,
    "range": [
      15313,
      15314
    ]
  },
  {
    "type": "Identifier",
    "value": "onInputKeyDown",
    "start": 15394,
    "end": 15408,
    "range": [
      15394,
      15408
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15408,
    "end": 15409,
    "range": [
      15408,
      15409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15409,
    "end": 15410,
    "range": [
      15409,
      15410
    ]
  },
  {
    "type": "Identifier",
    "value": "OnInputKeyDownHandler",
    "start": 15411,
    "end": 15432,
    "range": [
      15411,
      15432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15432,
    "end": 15433,
    "range": [
      15432,
      15433
    ]
  },
  {
    "type": "Identifier",
    "value": "onMenuScrollToBottom",
    "start": 15540,
    "end": 15560,
    "range": [
      15540,
      15560
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15560,
    "end": 15561,
    "range": [
      15560,
      15561
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15561,
    "end": 15562,
    "range": [
      15561,
      15562
    ]
  },
  {
    "type": "Identifier",
    "value": "OnMenuScrollToBottomHandler",
    "start": 15563,
    "end": 15590,
    "range": [
      15563,
      15590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15590,
    "end": 15591,
    "range": [
      15590,
      15591
    ]
  },
  {
    "type": "Identifier",
    "value": "onOpen",
    "start": 15649,
    "end": 15655,
    "range": [
      15649,
      15655
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15655,
    "end": 15656,
    "range": [
      15655,
      15656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15656,
    "end": 15657,
    "range": [
      15656,
      15657
    ]
  },
  {
    "type": "Identifier",
    "value": "OnOpenHandler",
    "start": 15658,
    "end": 15671,
    "range": [
      15658,
      15671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15671,
    "end": 15672,
    "range": [
      15671,
      15672
    ]
  },
  {
    "type": "Identifier",
    "value": "openOnClick",
    "start": 15770,
    "end": 15781,
    "range": [
      15770,
      15781
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15781,
    "end": 15782,
    "range": [
      15781,
      15782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15782,
    "end": 15783,
    "range": [
      15782,
      15783
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 15784,
    "end": 15791,
    "range": [
      15784,
      15791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15791,
    "end": 15792,
    "range": [
      15791,
      15792
    ]
  },
  {
    "type": "Identifier",
    "value": "openOnFocus",
    "start": 15918,
    "end": 15929,
    "range": [
      15918,
      15929
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 15929,
    "end": 15930,
    "range": [
      15929,
      15930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15930,
    "end": 15931,
    "range": [
      15930,
      15931
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 15932,
    "end": 15939,
    "range": [
      15932,
      15939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15939,
    "end": 15940,
    "range": [
      15939,
      15940
    ]
  },
  {
    "type": "Identifier",
    "value": "optionClassName",
    "start": 16010,
    "end": 16025,
    "range": [
      16010,
      16025
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16025,
    "end": 16026,
    "range": [
      16025,
      16026
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16026,
    "end": 16027,
    "range": [
      16026,
      16027
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 16028,
    "end": 16034,
    "range": [
      16028,
      16034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16034,
    "end": 16035,
    "range": [
      16034,
      16035
    ]
  },
  {
    "type": "Identifier",
    "value": "optionComponent",
    "start": 16102,
    "end": 16117,
    "range": [
      16102,
      16117
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16117,
    "end": 16118,
    "range": [
      16117,
      16118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16118,
    "end": 16119,
    "range": [
      16118,
      16119
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionComponentType",
    "start": 16120,
    "end": 16139,
    "range": [
      16120,
      16139
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16139,
    "end": 16140,
    "range": [
      16139,
      16140
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 16140,
    "end": 16146,
    "range": [
      16140,
      16146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16146,
    "end": 16147,
    "range": [
      16146,
      16147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16147,
    "end": 16148,
    "range": [
      16147,
      16148
    ]
  },
  {
    "type": "Identifier",
    "value": "optionRenderer",
    "start": 16246,
    "end": 16260,
    "range": [
      16246,
      16260
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16260,
    "end": 16261,
    "range": [
      16260,
      16261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16261,
    "end": 16262,
    "range": [
      16261,
      16262
    ]
  },
  {
    "type": "Identifier",
    "value": "OptionRendererHandler",
    "start": 16263,
    "end": 16284,
    "range": [
      16263,
      16284
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16284,
    "end": 16285,
    "range": [
      16284,
      16285
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 16285,
    "end": 16291,
    "range": [
      16285,
      16291
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16291,
    "end": 16292,
    "range": [
      16291,
      16292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16292,
    "end": 16293,
    "range": [
      16292,
      16293
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 16367,
    "end": 16374,
    "range": [
      16367,
      16374
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16374,
    "end": 16375,
    "range": [
      16374,
      16375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16375,
    "end": 16376,
    "range": [
      16375,
      16376
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 16377,
    "end": 16384,
    "range": [
      16377,
      16384
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16384,
    "end": 16385,
    "range": [
      16384,
      16385
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 16385,
    "end": 16391,
    "range": [
      16385,
      16391
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16391,
    "end": 16392,
    "range": [
      16391,
      16392
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16392,
    "end": 16393,
    "range": [
      16392,
      16393
    ]
  },
  {
    "type": "Identifier",
    "value": "pageSize",
    "start": 16494,
    "end": 16502,
    "range": [
      16494,
      16502
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16502,
    "end": 16503,
    "range": [
      16502,
      16503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16503,
    "end": 16504,
    "range": [
      16503,
      16504
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 16505,
    "end": 16511,
    "range": [
      16505,
      16511
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16511,
    "end": 16512,
    "range": [
      16511,
      16512
    ]
  },
  {
    "type": "Identifier",
    "value": "placeholder",
    "start": 16619,
    "end": 16630,
    "range": [
      16619,
      16630
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16630,
    "end": 16631,
    "range": [
      16630,
      16631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16631,
    "end": 16632,
    "range": [
      16631,
      16632
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 16633,
    "end": 16639,
    "range": [
      16633,
      16639
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 16640,
    "end": 16641,
    "range": [
      16640,
      16641
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 16642,
    "end": 16645,
    "range": [
      16642,
      16645
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16645,
    "end": 16646,
    "range": [
      16645,
      16646
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 16646,
    "end": 16653,
    "range": [
      16646,
      16653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16653,
    "end": 16654,
    "range": [
      16653,
      16654
    ]
  },
  {
    "type": "Identifier",
    "value": "removeSelected",
    "start": 16777,
    "end": 16791,
    "range": [
      16777,
      16791
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16791,
    "end": 16792,
    "range": [
      16791,
      16792
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16792,
    "end": 16793,
    "range": [
      16792,
      16793
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 16794,
    "end": 16801,
    "range": [
      16794,
      16801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16801,
    "end": 16802,
    "range": [
      16801,
      16802
    ]
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 16897,
    "end": 16905,
    "range": [
      16897,
      16905
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16905,
    "end": 16906,
    "range": [
      16905,
      16906
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16906,
    "end": 16907,
    "range": [
      16906,
      16907
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 16908,
    "end": 16915,
    "range": [
      16908,
      16915
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16915,
    "end": 16916,
    "range": [
      16915,
      16916
    ]
  },
  {
    "type": "Identifier",
    "value": "resetValue",
    "start": 16984,
    "end": 16994,
    "range": [
      16984,
      16994
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 16994,
    "end": 16995,
    "range": [
      16994,
      16995
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16995,
    "end": 16996,
    "range": [
      16995,
      16996
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 16997,
    "end": 17000,
    "range": [
      16997,
      17000
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17000,
    "end": 17001,
    "range": [
      17000,
      17001
    ]
  },
  {
    "type": "Identifier",
    "value": "rtl",
    "start": 17095,
    "end": 17098,
    "range": [
      17095,
      17098
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 17098,
    "end": 17099,
    "range": [
      17098,
      17099
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17099,
    "end": 17100,
    "range": [
      17099,
      17100
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 17101,
    "end": 17108,
    "range": [
      17101,
      17108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17108,
    "end": 17109,
    "range": [
      17108,
      17109
    ]
  },
  {
    "type": "Identifier",
    "value": "scrollMenuIntoView",
    "start": 17230,
    "end": 17248,
    "range": [
      17230,
      17248
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 17248,
    "end": 17249,
    "range": [
      17248,
      17249
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17249,
    "end": 17250,
    "range": [
      17249,
      17250
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 17251,
    "end": 17258,
    "range": [
      17251,
      17258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17258,
    "end": 17259,
    "range": [
      17258,
      17259
    ]
  },
  {
    "type": "Identifier",
    "value": "searchable",
    "start": 17352,
    "end": 17362,
    "range": [
      17352,
      17362
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 17362,
    "end": 17363,
    "range": [
      17362,
      17363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17363,
    "end": 17364,
    "range": [
      17363,
      17364
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 17365,
    "end": 17372,
    "range": [
      17365,
      17372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17372,
    "end": 17373,
    "range": [
      17372,
      17373
    ]
  },
  {
    "type": "Identifier",
    "value": "tabSelectsValue",
    "start": 17479,
    "end": 17494,
    "range": [
      17479,
      17494
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 17494,
    "end": 17495,
    "range": [
      17494,
      17495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17495,
    "end": 17496,
    "range": [
      17495,
      17496
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 17497,
    "end": 17504,
    "range": [
      17497,
      17504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17504,
    "end": 17505,
    "range": [
      17504,
      17505
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 17553,
    "end": 17558,
    "range": [
      17553,
      17558
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 17558,
    "end": 17559,
    "range": [
      17558,
      17559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17559,
    "end": 17560,
    "range": [
      17559,
      17560
    ]
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 17561,
    "end": 17567,
    "range": [
      17561,
      17567
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17567,
    "end": 17568,
    "range": [
      17567,
      17568
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 17568,
    "end": 17574,
    "range": [
      17568,
      17574
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17574,
    "end": 17575,
    "range": [
      17574,
      17575
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17576,
    "end": 17577,
    "range": [
      17576,
      17577
    ]
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 17578,
    "end": 17585,
    "range": [
      17578,
      17585
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17585,
    "end": 17586,
    "range": [
      17585,
      17586
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 17586,
    "end": 17592,
    "range": [
      17586,
      17592
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17592,
    "end": 17593,
    "range": [
      17592,
      17593
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17594,
    "end": 17595,
    "range": [
      17594,
      17595
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17596,
    "end": 17602,
    "range": [
      17596,
      17602
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17603,
    "end": 17604,
    "range": [
      17603,
      17604
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17605,
    "end": 17611,
    "range": [
      17605,
      17611
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17611,
    "end": 17612,
    "range": [
      17611,
      17612
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 17612,
    "end": 17613,
    "range": [
      17612,
      17613
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17614,
    "end": 17615,
    "range": [
      17614,
      17615
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 17616,
    "end": 17622,
    "range": [
      17616,
      17622
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17623,
    "end": 17624,
    "range": [
      17623,
      17624
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 17625,
    "end": 17631,
    "range": [
      17625,
      17631
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17631,
    "end": 17632,
    "range": [
      17631,
      17632
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 17632,
    "end": 17633,
    "range": [
      17632,
      17633
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17634,
    "end": 17635,
    "range": [
      17634,
      17635
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 17636,
    "end": 17643,
    "range": [
      17636,
      17643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17643,
    "end": 17644,
    "range": [
      17643,
      17644
    ]
  },
  {
    "type": "Identifier",
    "value": "valueKey",
    "start": 17737,
    "end": 17745,
    "range": [
      17737,
      17745
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 17745,
    "end": 17746,
    "range": [
      17745,
      17746
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17746,
    "end": 17747,
    "range": [
      17746,
      17747
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17748,
    "end": 17754,
    "range": [
      17748,
      17754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17754,
    "end": 17755,
    "range": [
      17754,
      17755
    ]
  },
  {
    "type": "Identifier",
    "value": "valueRenderer",
    "start": 17870,
    "end": 17883,
    "range": [
      17870,
      17883
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 17883,
    "end": 17884,
    "range": [
      17883,
      17884
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17884,
    "end": 17885,
    "range": [
      17884,
      17885
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueRendererHandler",
    "start": 17886,
    "end": 17906,
    "range": [
      17886,
      17906
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17906,
    "end": 17907,
    "range": [
      17906,
      17907
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 17907,
    "end": 17913,
    "range": [
      17907,
      17913
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17913,
    "end": 17914,
    "range": [
      17913,
      17914
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17914,
    "end": 17915,
    "range": [
      17914,
      17915
    ]
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 17983,
    "end": 17988,
    "range": [
      17983,
      17988
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 17988,
    "end": 17989,
    "range": [
      17988,
      17989
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17989,
    "end": 17990,
    "range": [
      17989,
      17990
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 17991,
    "end": 17996,
    "range": [
      17991,
      17996
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 17996,
    "end": 17997,
    "range": [
      17996,
      17997
    ]
  },
  {
    "type": "Identifier",
    "value": "CSSProperties",
    "start": 17997,
    "end": 18010,
    "range": [
      17997,
      18010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18010,
    "end": 18011,
    "range": [
      18010,
      18011
    ]
  },
  {
    "type": "Identifier",
    "value": "tabIndex",
    "start": 18075,
    "end": 18083,
    "range": [
      18075,
      18083
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 18083,
    "end": 18084,
    "range": [
      18083,
      18084
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18084,
    "end": 18085,
    "range": [
      18084,
      18085
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18086,
    "end": 18092,
    "range": [
      18086,
      18092
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 18093,
    "end": 18094,
    "range": [
      18093,
      18094
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18095,
    "end": 18101,
    "range": [
      18095,
      18101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18101,
    "end": 18102,
    "range": [
      18101,
      18102
    ]
  },
  {
    "type": "Identifier",
    "value": "valueComponent",
    "start": 18158,
    "end": 18172,
    "range": [
      18158,
      18172
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 18172,
    "end": 18173,
    "range": [
      18172,
      18173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18173,
    "end": 18174,
    "range": [
      18173,
      18174
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueComponentType",
    "start": 18175,
    "end": 18193,
    "range": [
      18175,
      18193
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18193,
    "end": 18194,
    "range": [
      18193,
      18194
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 18194,
    "end": 18200,
    "range": [
      18194,
      18200
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18200,
    "end": 18201,
    "range": [
      18200,
      18201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18201,
    "end": 18202,
    "range": [
      18201,
      18202
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapperStyle",
    "start": 18281,
    "end": 18293,
    "range": [
      18281,
      18293
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 18293,
    "end": 18294,
    "range": [
      18293,
      18294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18294,
    "end": 18295,
    "range": [
      18294,
      18295
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 18296,
    "end": 18301,
    "range": [
      18296,
      18301
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 18301,
    "end": 18302,
    "range": [
      18301,
      18302
    ]
  },
  {
    "type": "Identifier",
    "value": "CSSProperties",
    "start": 18302,
    "end": 18315,
    "range": [
      18302,
      18315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18315,
    "end": 18316,
    "range": [
      18315,
      18316
    ]
  },
  {
    "type": "Identifier",
    "value": "onValueClick",
    "start": 18406,
    "end": 18418,
    "range": [
      18406,
      18418
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 18418,
    "end": 18419,
    "range": [
      18418,
      18419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18419,
    "end": 18420,
    "range": [
      18419,
      18420
    ]
  },
  {
    "type": "Identifier",
    "value": "OnValueClickHandler",
    "start": 18421,
    "end": 18440,
    "range": [
      18421,
      18440
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18440,
    "end": 18441,
    "range": [
      18440,
      18441
    ]
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 18441,
    "end": 18447,
    "range": [
      18441,
      18447
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18447,
    "end": 18448,
    "range": [
      18447,
      18448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18448,
    "end": 18449,
    "range": [
      18448,
      18449
    ]
  },
  {
    "type": "Identifier",
    "value": "simpleValue",
    "start": 18565,
    "end": 18576,
    "range": [
      18565,
      18576
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 18576,
    "end": 18577,
    "range": [
      18576,
      18577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18577,
    "end": 18578,
    "range": [
      18577,
      18578
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 18579,
    "end": 18586,
    "range": [
      18579,
      18586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18586,
    "end": 18587,
    "range": [
      18586,
      18587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18588,
    "end": 18589,
    "range": [
      18588,
      18589
    ]
  }
]
```
