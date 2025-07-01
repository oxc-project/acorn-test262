__ESTREE_TEST__:PASS:
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
