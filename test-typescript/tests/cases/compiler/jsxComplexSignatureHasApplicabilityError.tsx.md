__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 18590,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 79,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 94,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 94,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 95,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 117,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 117,
                "name": "OptionValues",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 200,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 147,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 130,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 146,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 133,
                "end": 146,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 133,
                    "end": 142,
                    "typeName": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 139,
                      "name": "Option",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 139,
                      "end": 142,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 140,
                          "end": 141,
                          "typeName": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 141,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 145,
                    "end": 146,
                    "typeName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 152,
            "end": 198,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 160,
              "name": "onChange",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 162,
                "end": 190,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 169,
                    "end": 190,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 169,
                        "end": 178,
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "name": "Option",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 175,
                          "end": 178,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 176,
                              "end": 177,
                              "typeName": {
                                "type": "Identifier",
                                "start": 176,
                                "end": 177,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 181,
                        "end": 190
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 197,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 193,
                "end": 197
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 202,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 223,
        "name": "ExtractValueType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 223,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 224,
            "end": 225,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 229,
        "end": 276,
        "checkType": {
          "type": "TSTypeReference",
          "start": 229,
          "end": 230,
          "typeName": {
            "type": "Identifier",
            "start": 229,
            "end": 230,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 239,
          "end": 264,
          "typeName": {
            "type": "Identifier",
            "start": 239,
            "end": 255,
            "name": "ReactSelectProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 255,
            "end": 264,
            "params": [
              {
                "type": "TSInferType",
                "start": 256,
                "end": 263,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 262,
                  "end": 263,
                  "name": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 267,
          "end": 268,
          "typeName": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 271,
          "end": 276
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 454,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 286,
        "end": 454,
        "id": {
          "type": "Identifier",
          "start": 291,
          "end": 313,
          "name": "ReactSingleSelectProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 313,
          "end": 363,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 319,
              "end": 361,
              "name": {
                "type": "Identifier",
                "start": 319,
                "end": 331,
                "name": "WrappedProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 361,
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 356,
                  "name": "ReactSelectProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 356,
                  "end": 361,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 357,
                      "end": 360
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 366,
          "end": 453,
          "typeName": {
            "type": "Identifier",
            "start": 366,
            "end": 375,
            "name": "Overwrite",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 375,
            "end": 453,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 381,
                "end": 408,
                "typeName": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 385,
                  "name": "Omit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 385,
                  "end": 408,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 386,
                      "end": 398,
                      "typeName": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 398,
                        "name": "WrappedProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 400,
                      "end": 407,
                      "literal": {
                        "type": "Literal",
                        "start": 400,
                        "end": 407,
                        "value": "multi",
                        "raw": "\"multi\""
                      }
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 414,
                "end": 451,
                "typeName": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 419,
                  "name": "Props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 419,
                  "end": 451,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 420,
                      "end": 450,
                      "typeName": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 436,
                        "name": "ExtractValueType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 436,
                        "end": 450,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 437,
                            "end": 449,
                            "typeName": {
                              "type": "Identifier",
                              "start": 437,
                              "end": 449,
                              "name": "WrappedProps",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 456,
      "end": 1127,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 463,
        "end": 1127,
        "id": {
          "type": "Identifier",
          "start": 472,
          "end": 495,
          "name": "createReactSingleSelect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 551,
            "end": 602,
            "name": "WrappedComponent",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 602,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 569,
                "end": 602,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 569,
                  "end": 588,
                  "left": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 574,
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 588,
                    "name": "ComponentType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 588,
                  "end": 602,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 589,
                      "end": 601,
                      "typeName": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 601,
                        "name": "WrappedProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 664,
          "end": 1127,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 670,
              "end": 1125,
              "argument": {
                "type": "ArrowFunctionExpression",
                "start": 677,
                "end": 1124,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 678,
                    "end": 683,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 688,
                  "end": 1124,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 698,
                      "end": 1118,
                      "argument": {
                        "type": "JSXElement",
                        "start": 719,
                        "end": 1107,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 719,
                          "end": 1107,
                          "attributes": [
                            {
                              "type": "JSXSpreadAttribute",
                              "start": 785,
                              "end": 795,
                              "argument": {
                                "type": "Identifier",
                                "start": 789,
                                "end": 794,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "JSXAttribute",
                              "start": 812,
                              "end": 825,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 812,
                                "end": 817,
                                "name": "multi"
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "start": 818,
                                "end": 825,
                                "expression": {
                                  "type": "Literal",
                                  "start": 819,
                                  "end": 824,
                                  "value": false,
                                  "raw": "false"
                                }
                              }
                            },
                            {
                              "type": "JSXAttribute",
                              "start": 842,
                              "end": 858,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 842,
                                "end": 850,
                                "name": "autosize"
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "start": 851,
                                "end": 858,
                                "expression": {
                                  "type": "Literal",
                                  "start": 852,
                                  "end": 857,
                                  "value": false,
                                  "raw": "false"
                                }
                              }
                            },
                            {
                              "type": "JSXAttribute",
                              "start": 875,
                              "end": 894,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 875,
                                "end": 880,
                                "name": "value"
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "start": 881,
                                "end": 894,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 882,
                                  "end": 893,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 882,
                                    "end": 887,
                                    "name": "props",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 888,
                                    "end": 893,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              }
                            },
                            {
                              "type": "JSXAttribute",
                              "start": 911,
                              "end": 1092,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 911,
                                "end": 919,
                                "name": "onChange"
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "start": 920,
                                "end": 1092,
                                "expression": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 921,
                                  "end": 1091,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 922,
                                      "end": 927,
                                      "name": "value",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 932,
                                    "end": 1091,
                                    "body": [
                                      {
                                        "type": "IfStatement",
                                        "start": 954,
                                        "end": 1073,
                                        "test": {
                                          "type": "MemberExpression",
                                          "start": 958,
                                          "end": 972,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 958,
                                            "end": 963,
                                            "name": "props",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 964,
                                            "end": 972,
                                            "name": "onChange",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "start": 974,
                                          "end": 1073,
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "start": 1000,
                                              "end": 1051,
                                              "expression": {
                                                "type": "CallExpression",
                                                "start": 1000,
                                                "end": 1050,
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "start": 1000,
                                                  "end": 1014,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 1000,
                                                    "end": 1005,
                                                    "name": "props",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 1006,
                                                    "end": 1014,
                                                    "name": "onChange",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "computed": false,
                                                  "optional": false
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "ConditionalExpression",
                                                    "start": 1015,
                                                    "end": 1049,
                                                    "test": {
                                                      "type": "BinaryExpression",
                                                      "start": 1015,
                                                      "end": 1029,
                                                      "left": {
                                                        "type": "Identifier",
                                                        "start": 1015,
                                                        "end": 1020,
                                                        "name": "value",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "operator": "===",
                                                      "right": {
                                                        "type": "Literal",
                                                        "start": 1025,
                                                        "end": 1029,
                                                        "value": null,
                                                        "raw": "null"
                                                      }
                                                    },
                                                    "consequent": {
                                                      "type": "Identifier",
                                                      "start": 1032,
                                                      "end": 1041,
                                                      "name": "undefined",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "alternate": {
                                                      "type": "Identifier",
                                                      "start": 1044,
                                                      "end": 1049,
                                                      "name": "value",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    }
                                                  }
                                                ],
                                                "optional": false,
                                                "typeArguments": null
                                              },
                                              "directive": null
                                            }
                                          ]
                                        },
                                        "alternate": null
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              }
                            }
                          ],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 720,
                            "end": 736,
                            "name": "ReactSelectClass"
                          },
                          "selfClosing": true,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 736,
                            "end": 768,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 737,
                                "end": 767,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 737,
                                  "end": 753,
                                  "name": "ExtractValueType",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 753,
                                  "end": 767,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 754,
                                      "end": 766,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 754,
                                        "end": 766,
                                        "name": "WrappedProps",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        "closingElement": null,
                        "children": []
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 495,
          "end": 545,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 501,
              "end": 543,
              "name": {
                "type": "Identifier",
                "start": 501,
                "end": 513,
                "name": "WrappedProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 522,
                "end": 543,
                "typeName": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 538,
                  "name": "ReactSelectProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 538,
                  "end": 543,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 539,
                      "end": 542
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 604,
          "end": 663,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 606,
            "end": 663,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 606,
              "end": 625,
              "left": {
                "type": "Identifier",
                "start": 606,
                "end": 611,
                "name": "React",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 612,
                "end": 625,
                "name": "ComponentType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 625,
              "end": 663,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 626,
                  "end": 662,
                  "typeName": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 648,
                    "name": "ReactSingleSelectProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 648,
                    "end": 662,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 649,
                        "end": 661,
                        "typeName": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 661,
                          "name": "WrappedProps",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1170,
      "end": 1266,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1177,
        "end": 1266,
        "id": {
          "type": "Identifier",
          "start": 1182,
          "end": 1186,
          "name": "Omit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1186,
          "end": 1210,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1187,
              "end": 1188,
              "name": {
                "type": "Identifier",
                "start": 1187,
                "end": 1188,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1190,
              "end": 1209,
              "name": {
                "type": "Identifier",
                "start": 1190,
                "end": 1191,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1200,
                "end": 1209,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1206,
                  "end": 1209
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1213,
          "end": 1265,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1213,
            "end": 1214,
            "typeName": {
              "type": "Identifier",
              "start": 1213,
              "end": 1214,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 1223,
            "end": 1226
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1229,
            "end": 1257,
            "typeName": {
              "type": "Identifier",
              "start": 1229,
              "end": 1233,
              "name": "Pick",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1233,
              "end": 1257,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1234,
                  "end": 1235,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1234,
                    "end": 1235,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1237,
                  "end": 1256,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1244,
                    "name": "Exclude",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1244,
                    "end": 1256,
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "start": 1245,
                        "end": 1252,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1251,
                          "end": 1252,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1251,
                            "end": 1252,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1254,
                        "end": 1255,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1254,
                          "end": 1255,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1260,
            "end": 1265
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1267,
      "end": 1328,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1274,
        "end": 1328,
        "id": {
          "type": "Identifier",
          "start": 1279,
          "end": 1288,
          "name": "Overwrite",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1288,
          "end": 1294,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1289,
              "end": 1290,
              "name": {
                "type": "Identifier",
                "start": 1289,
                "end": 1290,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1292,
              "end": 1293,
              "name": {
                "type": "Identifier",
                "start": 1292,
                "end": 1293,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 1297,
          "end": 1327,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1297,
              "end": 1323,
              "typeName": {
                "type": "Identifier",
                "start": 1297,
                "end": 1301,
                "name": "Omit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1301,
                "end": 1323,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1302,
                    "end": 1303,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1302,
                      "end": 1303,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 1305,
                    "end": 1322,
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "start": 1305,
                        "end": 1312,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1311,
                          "end": 1312,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1311,
                            "end": 1312,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "start": 1315,
                        "end": 1322,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1321,
                          "end": 1322,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1321,
                            "end": 1322,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1326,
              "end": 1327,
              "typeName": {
                "type": "Identifier",
                "start": 1326,
                "end": 1327,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 1403,
      "end": 1572,
      "id": {
        "type": "Identifier",
        "start": 1417,
        "end": 1433,
        "name": "ReactSelectClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 1465,
        "end": 1480,
        "object": {
          "type": "Identifier",
          "start": 1465,
          "end": 1470,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1471,
          "end": 1480,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1507,
        "end": 1572,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1513,
            "end": 1527,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1513,
              "end": 1518,
              "name": "focus",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1518,
              "end": 1527,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1520,
                "end": 1526,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1522,
                  "end": 1526
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1532,
            "end": 1570,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1532,
              "end": 1540,
              "name": "setValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1540,
              "end": 1570,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1541,
                  "end": 1562,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1546,
                    "end": 1562,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1548,
                      "end": 1562,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1548,
                        "end": 1554,
                        "name": "Option",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1554,
                        "end": 1562,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1555,
                            "end": 1561,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1555,
                              "end": 1561,
                              "name": "TValue",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1563,
                "end": 1569,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1565,
                  "end": 1569
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1433,
        "end": 1456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1434,
            "end": 1455,
            "name": {
              "type": "Identifier",
              "start": 1434,
              "end": 1440,
              "name": "TValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1443,
              "end": 1455,
              "typeName": {
                "type": "Identifier",
                "start": 1443,
                "end": 1455,
                "name": "OptionValues",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1480,
        "end": 1506,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1481,
            "end": 1505,
            "typeName": {
              "type": "Identifier",
              "start": 1481,
              "end": 1497,
              "name": "ReactSelectProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1497,
              "end": 1505,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1498,
                  "end": 1504,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1498,
                    "end": 1504,
                    "name": "TValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1574,
      "end": 1681,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1581,
        "end": 1681,
        "id": {
          "type": "Identifier",
          "start": 1586,
          "end": 1605,
          "name": "OptionComponentType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1605,
          "end": 1628,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1606,
              "end": 1627,
              "name": {
                "type": "Identifier",
                "start": 1606,
                "end": 1612,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 1615,
                "end": 1627,
                "typeName": {
                  "type": "Identifier",
                  "start": 1615,
                  "end": 1627,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1631,
          "end": 1680,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1631,
            "end": 1650,
            "left": {
              "type": "Identifier",
              "start": 1631,
              "end": 1636,
              "name": "React",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1637,
              "end": 1650,
              "name": "ComponentType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1650,
            "end": 1680,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1651,
                "end": 1679,
                "typeName": {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1671,
                  "name": "OptionComponentProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1671,
                  "end": 1679,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1672,
                      "end": 1678,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1672,
                        "end": 1678,
                        "name": "TValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1682,
      "end": 1788,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1689,
        "end": 1788,
        "id": {
          "type": "Identifier",
          "start": 1694,
          "end": 1712,
          "name": "ValueComponentType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1712,
          "end": 1735,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1713,
              "end": 1734,
              "name": {
                "type": "Identifier",
                "start": 1713,
                "end": 1719,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 1722,
                "end": 1734,
                "typeName": {
                  "type": "Identifier",
                  "start": 1722,
                  "end": 1734,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1739,
          "end": 1787,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1739,
            "end": 1758,
            "left": {
              "type": "Identifier",
              "start": 1739,
              "end": 1744,
              "name": "React",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 1745,
              "end": 1758,
              "name": "ComponentType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1758,
            "end": 1787,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1759,
                "end": 1786,
                "typeName": {
                  "type": "Identifier",
                  "start": 1759,
                  "end": 1778,
                  "name": "ValueComponentProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1778,
                  "end": 1786,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1779,
                      "end": 1785,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1779,
                        "end": 1785,
                        "name": "TValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1790,
      "end": 1853,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1797,
        "end": 1853,
        "id": {
          "type": "Identifier",
          "start": 1802,
          "end": 1823,
          "name": "HandlerRendererResult",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1826,
          "end": 1852,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1826,
              "end": 1837,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1826,
                "end": 1837,
                "left": {
                  "type": "Identifier",
                  "start": 1826,
                  "end": 1829,
                  "name": "JSX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1830,
                  "end": 1837,
                  "name": "Element",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            },
            {
              "type": "TSNullKeyword",
              "start": 1840,
              "end": 1844
            },
            {
              "type": "TSLiteralType",
              "start": 1847,
              "end": 1852,
              "literal": {
                "type": "Literal",
                "start": 1847,
                "end": 1852,
                "value": false,
                "raw": "false"
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1867,
      "end": 1956,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1874,
        "end": 1956,
        "id": {
          "type": "Identifier",
          "start": 1879,
          "end": 1897,
          "name": "FocusOptionHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1897,
          "end": 1920,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1898,
              "end": 1919,
              "name": {
                "type": "Identifier",
                "start": 1898,
                "end": 1904,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 1907,
                "end": 1919,
                "typeName": {
                  "type": "Identifier",
                  "start": 1907,
                  "end": 1919,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1923,
          "end": 1955,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1924,
              "end": 1946,
              "name": "option",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1930,
                "end": 1946,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1932,
                  "end": 1946,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1932,
                    "end": 1938,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1938,
                    "end": 1946,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1939,
                        "end": 1945,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1939,
                          "end": 1945,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1948,
            "end": 1955,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1951,
              "end": 1955
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1957,
      "end": 2046,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1964,
        "end": 2046,
        "id": {
          "type": "Identifier",
          "start": 1969,
          "end": 1987,
          "name": "SelectValueHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1987,
          "end": 2010,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1988,
              "end": 2009,
              "name": {
                "type": "Identifier",
                "start": 1988,
                "end": 1994,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 1997,
                "end": 2009,
                "typeName": {
                  "type": "Identifier",
                  "start": 1997,
                  "end": 2009,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2013,
          "end": 2045,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2014,
              "end": 2036,
              "name": "option",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2020,
                "end": 2036,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2022,
                  "end": 2036,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2022,
                    "end": 2028,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2028,
                    "end": 2036,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2029,
                        "end": 2035,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2029,
                          "end": 2035,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2038,
            "end": 2045,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2041,
              "end": 2045
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2047,
      "end": 2135,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2054,
        "end": 2135,
        "id": {
          "type": "Identifier",
          "start": 2059,
          "end": 2079,
          "name": "ArrowRendererHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2082,
          "end": 2134,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2083,
              "end": 2108,
              "name": "props",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2088,
                "end": 2108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2090,
                  "end": 2108,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2090,
                    "end": 2108,
                    "name": "ArrowRendererProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2110,
            "end": 2134,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2113,
              "end": 2134,
              "typeName": {
                "type": "Identifier",
                "start": 2113,
                "end": 2134,
                "name": "HandlerRendererResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2136,
      "end": 2199,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2143,
        "end": 2199,
        "id": {
          "type": "Identifier",
          "start": 2148,
          "end": 2168,
          "name": "ClearRendererHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2171,
          "end": 2198,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2174,
            "end": 2198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2177,
              "end": 2198,
              "typeName": {
                "type": "Identifier",
                "start": 2177,
                "end": 2198,
                "name": "HandlerRendererResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2200,
      "end": 2309,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2207,
        "end": 2309,
        "id": {
          "type": "Identifier",
          "start": 2212,
          "end": 2231,
          "name": "FilterOptionHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2231,
          "end": 2254,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2232,
              "end": 2253,
              "name": {
                "type": "Identifier",
                "start": 2232,
                "end": 2238,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 2241,
                "end": 2253,
                "typeName": {
                  "type": "Identifier",
                  "start": 2241,
                  "end": 2253,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2257,
          "end": 2308,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2258,
              "end": 2280,
              "name": "option",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2264,
                "end": 2280,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2266,
                  "end": 2280,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2266,
                    "end": 2272,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2272,
                    "end": 2280,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2273,
                        "end": 2279,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2273,
                          "end": 2279,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 2282,
              "end": 2296,
              "name": "filter",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2288,
                "end": 2296,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2290,
                  "end": 2296
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2298,
            "end": 2308,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2301,
              "end": 2308
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2310,
      "end": 2462,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2317,
        "end": 2462,
        "id": {
          "type": "Identifier",
          "start": 2322,
          "end": 2342,
          "name": "FilterOptionsHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2342,
          "end": 2365,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2343,
              "end": 2364,
              "name": {
                "type": "Identifier",
                "start": 2343,
                "end": 2349,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 2352,
                "end": 2364,
                "typeName": {
                  "type": "Identifier",
                  "start": 2352,
                  "end": 2364,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2368,
          "end": 2461,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2369,
              "end": 2393,
              "name": "options",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2376,
                "end": 2393,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2378,
                  "end": 2393,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2378,
                    "end": 2385,
                    "name": "Options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2385,
                    "end": 2393,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2386,
                        "end": 2392,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2386,
                          "end": 2392,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 2395,
              "end": 2409,
              "name": "filter",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2401,
                "end": 2409,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2403,
                  "end": 2409
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 2411,
              "end": 2441,
              "name": "currentValues",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2424,
                "end": 2441,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2426,
                  "end": 2441,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2426,
                    "end": 2433,
                    "name": "Options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2433,
                    "end": 2441,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2434,
                        "end": 2440,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2434,
                          "end": 2440,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2443,
            "end": 2461,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2446,
              "end": 2461,
              "typeName": {
                "type": "Identifier",
                "start": 2446,
                "end": 2453,
                "name": "Options",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2453,
                "end": 2461,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2454,
                    "end": 2460,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2454,
                      "end": 2460,
                      "name": "TValue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2463,
      "end": 2555,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2470,
        "end": 2555,
        "id": {
          "type": "Identifier",
          "start": 2475,
          "end": 2495,
          "name": "InputRendererHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2498,
          "end": 2554,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2499,
              "end": 2528,
              "name": "props",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2504,
                "end": 2528,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 2506,
                  "end": 2528,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 2508,
                      "end": 2526,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 2509,
                          "end": 2520,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2512,
                            "end": 2520,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2514,
                              "end": 2520
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2521,
                        "end": 2526,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2523,
                          "end": 2526
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2530,
            "end": 2554,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2533,
              "end": 2554,
              "typeName": {
                "type": "Identifier",
                "start": 2533,
                "end": 2554,
                "name": "HandlerRendererResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2556,
      "end": 2673,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2563,
        "end": 2673,
        "id": {
          "type": "Identifier",
          "start": 2568,
          "end": 2587,
          "name": "MenuRendererHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2587,
          "end": 2610,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2588,
              "end": 2609,
              "name": {
                "type": "Identifier",
                "start": 2588,
                "end": 2594,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 2597,
                "end": 2609,
                "typeName": {
                  "type": "Identifier",
                  "start": 2597,
                  "end": 2609,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2613,
          "end": 2672,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2614,
              "end": 2646,
              "name": "props",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2619,
                "end": 2646,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2621,
                  "end": 2646,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2621,
                    "end": 2638,
                    "name": "MenuRendererProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2638,
                    "end": 2646,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2639,
                        "end": 2645,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2639,
                          "end": 2645,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2648,
            "end": 2672,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2651,
              "end": 2672,
              "typeName": {
                "type": "Identifier",
                "start": 2651,
                "end": 2672,
                "name": "HandlerRendererResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2674,
      "end": 2714,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2681,
        "end": 2714,
        "id": {
          "type": "Identifier",
          "start": 2686,
          "end": 2700,
          "name": "OnCloseHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2703,
          "end": 2713,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2706,
            "end": 2713,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2709,
              "end": 2713
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2715,
      "end": 2781,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2722,
        "end": 2781,
        "id": {
          "type": "Identifier",
          "start": 2727,
          "end": 2747,
          "name": "OnInputChangeHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2750,
          "end": 2780,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2751,
              "end": 2769,
              "name": "inputValue",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2761,
                "end": 2769,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2763,
                  "end": 2769
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2771,
            "end": 2780,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2774,
              "end": 2780
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2782,
      "end": 2880,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2789,
        "end": 2880,
        "id": {
          "type": "Identifier",
          "start": 2794,
          "end": 2815,
          "name": "OnInputKeyDownHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2818,
          "end": 2879,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 2818,
            "end": 2844,
            "left": {
              "type": "Identifier",
              "start": 2818,
              "end": 2823,
              "name": "React",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 2824,
              "end": 2844,
              "name": "KeyboardEventHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2844,
            "end": 2879,
            "params": [
              {
                "type": "TSUnionType",
                "start": 2845,
                "end": 2878,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2845,
                    "end": 2859,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2845,
                      "end": 2859,
                      "name": "HTMLDivElement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2862,
                    "end": 2878,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2862,
                      "end": 2878,
                      "name": "HTMLInputElement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2881,
      "end": 2934,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2888,
        "end": 2934,
        "id": {
          "type": "Identifier",
          "start": 2893,
          "end": 2920,
          "name": "OnMenuScrollToBottomHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2923,
          "end": 2933,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2926,
            "end": 2933,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2929,
              "end": 2933
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2935,
      "end": 2974,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2942,
        "end": 2974,
        "id": {
          "type": "Identifier",
          "start": 2947,
          "end": 2960,
          "name": "OnOpenHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2963,
          "end": 2973,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2966,
            "end": 2973,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2969,
              "end": 2973
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2975,
      "end": 3063,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2982,
        "end": 3063,
        "id": {
          "type": "Identifier",
          "start": 2987,
          "end": 3001,
          "name": "OnFocusHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3004,
          "end": 3062,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 3004,
            "end": 3027,
            "left": {
              "type": "Identifier",
              "start": 3004,
              "end": 3009,
              "name": "React",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 3010,
              "end": 3027,
              "name": "FocusEventHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3027,
            "end": 3062,
            "params": [
              {
                "type": "TSUnionType",
                "start": 3028,
                "end": 3061,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 3028,
                    "end": 3042,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3028,
                      "end": 3042,
                      "name": "HTMLDivElement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3045,
                    "end": 3061,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3045,
                      "end": 3061,
                      "name": "HTMLInputElement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3064,
      "end": 3151,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3071,
        "end": 3151,
        "id": {
          "type": "Identifier",
          "start": 3076,
          "end": 3089,
          "name": "OnBlurHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3092,
          "end": 3150,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 3092,
            "end": 3115,
            "left": {
              "type": "Identifier",
              "start": 3092,
              "end": 3097,
              "name": "React",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 3098,
              "end": 3115,
              "name": "FocusEventHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3115,
            "end": 3150,
            "params": [
              {
                "type": "TSUnionType",
                "start": 3116,
                "end": 3149,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 3116,
                    "end": 3130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3116,
                      "end": 3130,
                      "name": "HTMLDivElement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3133,
                    "end": 3149,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3133,
                      "end": 3149,
                      "name": "HTMLInputElement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3152,
      "end": 3261,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3159,
        "end": 3261,
        "id": {
          "type": "Identifier",
          "start": 3164,
          "end": 3185,
          "name": "OptionRendererHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3185,
          "end": 3208,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3186,
              "end": 3207,
              "name": {
                "type": "Identifier",
                "start": 3186,
                "end": 3192,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3195,
                "end": 3207,
                "typeName": {
                  "type": "Identifier",
                  "start": 3195,
                  "end": 3207,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3211,
          "end": 3260,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3212,
              "end": 3234,
              "name": "option",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3218,
                "end": 3234,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3220,
                  "end": 3234,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3220,
                    "end": 3226,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3226,
                    "end": 3234,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3227,
                        "end": 3233,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3227,
                          "end": 3233,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 3236,
            "end": 3260,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3239,
              "end": 3260,
              "typeName": {
                "type": "Identifier",
                "start": 3239,
                "end": 3260,
                "name": "HandlerRendererResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3262,
      "end": 3386,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3269,
        "end": 3386,
        "id": {
          "type": "Identifier",
          "start": 3274,
          "end": 3294,
          "name": "ValueRendererHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3294,
          "end": 3317,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3295,
              "end": 3316,
              "name": {
                "type": "Identifier",
                "start": 3295,
                "end": 3301,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3304,
                "end": 3316,
                "typeName": {
                  "type": "Identifier",
                  "start": 3304,
                  "end": 3316,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3320,
          "end": 3385,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3321,
              "end": 3343,
              "name": "option",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3327,
                "end": 3343,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3329,
                  "end": 3343,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3329,
                    "end": 3335,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3335,
                    "end": 3343,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3336,
                        "end": 3342,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3336,
                          "end": 3342,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 3345,
              "end": 3359,
              "name": "index",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3351,
                "end": 3359,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3353,
                  "end": 3359
                }
              },
              "decorators": [],
              "optional": true
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 3361,
            "end": 3385,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3364,
              "end": 3385,
              "typeName": {
                "type": "Identifier",
                "start": 3364,
                "end": 3385,
                "name": "HandlerRendererResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3387,
      "end": 3521,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3394,
        "end": 3521,
        "id": {
          "type": "Identifier",
          "start": 3399,
          "end": 3418,
          "name": "OnValueClickHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3418,
          "end": 3441,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3419,
              "end": 3440,
              "name": {
                "type": "Identifier",
                "start": 3419,
                "end": 3425,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3428,
                "end": 3440,
                "typeName": {
                  "type": "Identifier",
                  "start": 3428,
                  "end": 3440,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3444,
          "end": 3520,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3445,
              "end": 3467,
              "name": "option",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3451,
                "end": 3467,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3453,
                  "end": 3467,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3453,
                    "end": 3459,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3459,
                    "end": 3467,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3460,
                        "end": 3466,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3460,
                          "end": 3466,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 3469,
              "end": 3511,
              "name": "event",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3474,
                "end": 3511,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3476,
                  "end": 3511,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 3476,
                    "end": 3492,
                    "left": {
                      "type": "Identifier",
                      "start": 3476,
                      "end": 3481,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3482,
                      "end": 3492,
                      "name": "MouseEvent",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3492,
                    "end": 3511,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3493,
                        "end": 3510,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3493,
                          "end": 3510,
                          "name": "HTMLAnchorElement",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 3513,
            "end": 3520,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 3516,
              "end": 3520
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3522,
      "end": 3688,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3529,
        "end": 3688,
        "id": {
          "type": "Identifier",
          "start": 3534,
          "end": 3555,
          "name": "IsOptionUniqueHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3555,
          "end": 3578,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3556,
              "end": 3577,
              "name": {
                "type": "Identifier",
                "start": 3556,
                "end": 3562,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3565,
                "end": 3577,
                "typeName": {
                  "type": "Identifier",
                  "start": 3565,
                  "end": 3577,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3581,
          "end": 3687,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3582,
              "end": 3675,
              "name": "arg",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3585,
                "end": 3675,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 3587,
                  "end": 3675,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3589,
                      "end": 3612,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3589,
                        "end": 3595,
                        "name": "option",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3595,
                        "end": 3611,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3597,
                          "end": 3611,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3597,
                            "end": 3603,
                            "name": "Option",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3603,
                            "end": 3611,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3604,
                                "end": 3610,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3604,
                                  "end": 3610,
                                  "name": "TValue",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3613,
                      "end": 3638,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3613,
                        "end": 3620,
                        "name": "options",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3620,
                        "end": 3637,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3622,
                          "end": 3637,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3622,
                            "end": 3629,
                            "name": "Options",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3629,
                            "end": 3637,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3630,
                                "end": 3636,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3630,
                                  "end": 3636,
                                  "name": "TValue",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3639,
                      "end": 3656,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3639,
                        "end": 3647,
                        "name": "labelKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3647,
                        "end": 3655,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3649,
                          "end": 3655
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3657,
                      "end": 3673,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3657,
                        "end": 3665,
                        "name": "valueKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3665,
                        "end": 3673,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3667,
                          "end": 3673
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 3677,
            "end": 3687,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 3680,
              "end": 3687
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3689,
      "end": 3763,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3696,
        "end": 3763,
        "id": {
          "type": "Identifier",
          "start": 3701,
          "end": 3724,
          "name": "IsValidNewOptionHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3727,
          "end": 3762,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3728,
              "end": 3750,
              "name": "arg",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3731,
                "end": 3750,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 3733,
                  "end": 3750,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3735,
                      "end": 3748,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3735,
                        "end": 3740,
                        "name": "label",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3740,
                        "end": 3748,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3742,
                          "end": 3748
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 3752,
            "end": 3762,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 3755,
              "end": 3762
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3764,
      "end": 3904,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3771,
        "end": 3904,
        "id": {
          "type": "Identifier",
          "start": 3776,
          "end": 3799,
          "name": "NewOptionCreatorHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3799,
          "end": 3822,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3800,
              "end": 3821,
              "name": {
                "type": "Identifier",
                "start": 3800,
                "end": 3806,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3809,
                "end": 3821,
                "typeName": {
                  "type": "Identifier",
                  "start": 3809,
                  "end": 3821,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3825,
          "end": 3903,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3826,
              "end": 3884,
              "name": "arg",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3829,
                "end": 3884,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 3831,
                  "end": 3884,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3833,
                      "end": 3847,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3833,
                        "end": 3838,
                        "name": "label",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3838,
                        "end": 3846,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3840,
                          "end": 3846
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3848,
                      "end": 3865,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3848,
                        "end": 3856,
                        "name": "labelKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3856,
                        "end": 3864,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3858,
                          "end": 3864
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3866,
                      "end": 3882,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3866,
                        "end": 3874,
                        "name": "valueKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3874,
                        "end": 3882,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3876,
                          "end": 3882
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 3886,
            "end": 3903,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3889,
              "end": 3903,
              "typeName": {
                "type": "Identifier",
                "start": 3889,
                "end": 3895,
                "name": "Option",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3895,
                "end": 3903,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3896,
                    "end": 3902,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3896,
                      "end": 3902,
                      "name": "TValue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3905,
      "end": 3975,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3912,
        "end": 3975,
        "id": {
          "type": "Identifier",
          "start": 3917,
          "end": 3941,
          "name": "PromptTextCreatorHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3944,
          "end": 3974,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3945,
              "end": 3963,
              "name": "filterText",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3955,
                "end": 3963,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3957,
                  "end": 3963
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 3965,
            "end": 3974,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 3968,
              "end": 3974
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3976,
      "end": 4069,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3983,
        "end": 4069,
        "id": {
          "type": "Identifier",
          "start": 3988,
          "end": 4028,
          "name": "ShouldKeyDownEventCreateNewOptionHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4031,
          "end": 4068,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 4032,
              "end": 4056,
              "name": "arg",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4035,
                "end": 4056,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 4037,
                  "end": 4056,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4039,
                      "end": 4054,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4039,
                        "end": 4046,
                        "name": "keyCode",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4046,
                        "end": 4054,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4048,
                          "end": 4054
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 4058,
            "end": 4068,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 4061,
              "end": 4068
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4071,
      "end": 4170,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4078,
        "end": 4170,
        "id": {
          "type": "Identifier",
          "start": 4083,
          "end": 4104,
          "name": "OnChangeSingleHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4104,
          "end": 4127,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4105,
              "end": 4126,
              "name": {
                "type": "Identifier",
                "start": 4105,
                "end": 4111,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4114,
                "end": 4126,
                "typeName": {
                  "type": "Identifier",
                  "start": 4114,
                  "end": 4126,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4130,
          "end": 4169,
          "typeName": {
            "type": "Identifier",
            "start": 4130,
            "end": 4145,
            "name": "OnChangeHandler",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4145,
            "end": 4169,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4146,
                "end": 4152,
                "typeName": {
                  "type": "Identifier",
                  "start": 4146,
                  "end": 4152,
                  "name": "TValue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 4154,
                "end": 4168,
                "typeName": {
                  "type": "Identifier",
                  "start": 4154,
                  "end": 4160,
                  "name": "Option",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4160,
                  "end": 4168,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4161,
                      "end": 4167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4161,
                        "end": 4167,
                        "name": "TValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4171,
      "end": 4273,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4178,
        "end": 4273,
        "id": {
          "type": "Identifier",
          "start": 4183,
          "end": 4206,
          "name": "OnChangeMultipleHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4206,
          "end": 4229,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4207,
              "end": 4228,
              "name": {
                "type": "Identifier",
                "start": 4207,
                "end": 4213,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4216,
                "end": 4228,
                "typeName": {
                  "type": "Identifier",
                  "start": 4216,
                  "end": 4228,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4232,
          "end": 4272,
          "typeName": {
            "type": "Identifier",
            "start": 4232,
            "end": 4247,
            "name": "OnChangeHandler",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4247,
            "end": 4272,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4248,
                "end": 4254,
                "typeName": {
                  "type": "Identifier",
                  "start": 4248,
                  "end": 4254,
                  "name": "TValue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 4256,
                "end": 4271,
                "typeName": {
                  "type": "Identifier",
                  "start": 4256,
                  "end": 4263,
                  "name": "Options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4263,
                  "end": 4271,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4264,
                      "end": 4270,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4264,
                        "end": 4270,
                        "name": "TValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4274,
      "end": 4406,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4281,
        "end": 4406,
        "id": {
          "type": "Identifier",
          "start": 4286,
          "end": 4301,
          "name": "OnChangeHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4301,
          "end": 4368,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4302,
              "end": 4323,
              "name": {
                "type": "Identifier",
                "start": 4302,
                "end": 4308,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4311,
                "end": 4323,
                "typeName": {
                  "type": "Identifier",
                  "start": 4311,
                  "end": 4323,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 4325,
              "end": 4367,
              "name": {
                "type": "Identifier",
                "start": 4325,
                "end": 4332,
                "name": "TOption",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSUnionType",
                "start": 4335,
                "end": 4367,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 4335,
                    "end": 4349,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4335,
                      "end": 4341,
                      "name": "Option",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4341,
                      "end": 4349,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4342,
                          "end": 4348,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4342,
                            "end": 4348,
                            "name": "TValue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 4352,
                    "end": 4367,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4352,
                      "end": 4359,
                      "name": "Options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4359,
                      "end": 4367,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4360,
                          "end": 4366,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4360,
                            "end": 4366,
                            "name": "TValue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4371,
          "end": 4405,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 4372,
              "end": 4396,
              "name": "newValue",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4380,
                "end": 4396,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 4382,
                  "end": 4396,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 4382,
                      "end": 4389,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4382,
                        "end": 4389,
                        "name": "TOption",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 4392,
                      "end": 4396
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 4398,
            "end": 4405,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 4401,
              "end": 4405
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4407,
      "end": 4501,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4414,
        "end": 4501,
        "id": {
          "type": "Identifier",
          "start": 4419,
          "end": 4442,
          "name": "OnNewOptionClickHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4442,
          "end": 4465,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4443,
              "end": 4464,
              "name": {
                "type": "Identifier",
                "start": 4443,
                "end": 4449,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4452,
                "end": 4464,
                "typeName": {
                  "type": "Identifier",
                  "start": 4452,
                  "end": 4464,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4468,
          "end": 4500,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 4469,
              "end": 4491,
              "name": "option",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4475,
                "end": 4491,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4477,
                  "end": 4491,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4477,
                    "end": 4483,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4483,
                    "end": 4491,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 4484,
                        "end": 4490,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4484,
                          "end": 4490,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 4493,
            "end": 4500,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 4496,
              "end": 4500
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4503,
      "end": 4626,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4510,
        "end": 4626,
        "id": {
          "type": "Identifier",
          "start": 4515,
          "end": 4533,
          "name": "LoadOptionsHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4533,
          "end": 4556,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4534,
              "end": 4555,
              "name": {
                "type": "Identifier",
                "start": 4534,
                "end": 4540,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4543,
                "end": 4555,
                "typeName": {
                  "type": "Identifier",
                  "start": 4543,
                  "end": 4555,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 4559,
          "end": 4625,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 4559,
              "end": 4590,
              "typeName": {
                "type": "Identifier",
                "start": 4559,
                "end": 4582,
                "name": "LoadOptionsAsyncHandler",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4582,
                "end": 4590,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4583,
                    "end": 4589,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4583,
                      "end": 4589,
                      "name": "TValue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4593,
              "end": 4625,
              "typeName": {
                "type": "Identifier",
                "start": 4593,
                "end": 4617,
                "name": "LoadOptionsLegacyHandler",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4617,
                "end": 4625,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4618,
                    "end": 4624,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4618,
                      "end": 4624,
                      "name": "TValue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4627,
      "end": 4743,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4634,
        "end": 4743,
        "id": {
          "type": "Identifier",
          "start": 4639,
          "end": 4662,
          "name": "LoadOptionsAsyncHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4662,
          "end": 4685,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4663,
              "end": 4684,
              "name": {
                "type": "Identifier",
                "start": 4663,
                "end": 4669,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4672,
                "end": 4684,
                "typeName": {
                  "type": "Identifier",
                  "start": 4672,
                  "end": 4684,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4688,
          "end": 4742,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 4689,
              "end": 4702,
              "name": "input",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4694,
                "end": 4702,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4696,
                  "end": 4702
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 4704,
            "end": 4742,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4707,
              "end": 4742,
              "typeName": {
                "type": "Identifier",
                "start": 4707,
                "end": 4714,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4714,
                "end": 4742,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4715,
                    "end": 4741,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4715,
                      "end": 4733,
                      "name": "AutocompleteResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4733,
                      "end": 4741,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4734,
                          "end": 4740,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4734,
                            "end": 4740,
                            "name": "TValue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4744,
      "end": 4896,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4751,
        "end": 4896,
        "id": {
          "type": "Identifier",
          "start": 4756,
          "end": 4780,
          "name": "LoadOptionsLegacyHandler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4780,
          "end": 4803,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4781,
              "end": 4802,
              "name": {
                "type": "Identifier",
                "start": 4781,
                "end": 4787,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4790,
                "end": 4802,
                "typeName": {
                  "type": "Identifier",
                  "start": 4790,
                  "end": 4802,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4806,
          "end": 4895,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 4807,
              "end": 4820,
              "name": "input",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4812,
                "end": 4820,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4814,
                  "end": 4820
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 4822,
              "end": 4886,
              "name": "callback",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4830,
                "end": 4886,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 4832,
                  "end": 4886,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4833,
                      "end": 4841,
                      "name": "err",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4836,
                        "end": 4841,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 4838,
                          "end": 4841
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 4843,
                      "end": 4877,
                      "name": "result",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4849,
                        "end": 4877,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4851,
                          "end": 4877,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4851,
                            "end": 4869,
                            "name": "AutocompleteResult",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4869,
                            "end": 4877,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4870,
                                "end": 4876,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4870,
                                  "end": 4876,
                                  "name": "TValue",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4879,
                    "end": 4886,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 4882,
                      "end": 4886
                    }
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 4888,
            "end": 4895,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 4891,
              "end": 4895
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4898,
      "end": 5278,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 4905,
        "end": 5278,
        "id": {
          "type": "Identifier",
          "start": 4915,
          "end": 4933,
          "name": "AutocompleteResult",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4933,
          "end": 4956,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4934,
              "end": 4955,
              "name": {
                "type": "Identifier",
                "start": 4934,
                "end": 4940,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4943,
                "end": 4955,
                "typeName": {
                  "type": "Identifier",
                  "start": 4943,
                  "end": 4955,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 4957,
          "end": 5278,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 5010,
              "end": 5035,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5010,
                "end": 5017,
                "name": "options",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5017,
                "end": 5034,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5019,
                  "end": 5034,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5019,
                    "end": 5026,
                    "name": "Options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 5026,
                    "end": 5034,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 5027,
                        "end": 5033,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5027,
                          "end": 5033,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 5258,
              "end": 5276,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5258,
                "end": 5266,
                "name": "complete",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5266,
                "end": 5275,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5268,
                  "end": 5275
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5280,
      "end": 5347,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 5287,
        "end": 5347,
        "id": {
          "type": "Identifier",
          "start": 5292,
          "end": 5299,
          "name": "Options",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 5299,
          "end": 5322,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 5300,
              "end": 5321,
              "name": {
                "type": "Identifier",
                "start": 5300,
                "end": 5306,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 5309,
                "end": 5321,
                "typeName": {
                  "type": "Identifier",
                  "start": 5309,
                  "end": 5321,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 5325,
          "end": 5346,
          "typeName": {
            "type": "Identifier",
            "start": 5325,
            "end": 5330,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5330,
            "end": 5346,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 5331,
                "end": 5345,
                "typeName": {
                  "type": "Identifier",
                  "start": 5331,
                  "end": 5337,
                  "name": "Option",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5337,
                  "end": 5345,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 5338,
                      "end": 5344,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5338,
                        "end": 5344,
                        "name": "TValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5349,
      "end": 5916,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 5356,
        "end": 5916,
        "id": {
          "type": "Identifier",
          "start": 5366,
          "end": 5372,
          "name": "Option",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 5372,
          "end": 5395,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 5373,
              "end": 5394,
              "name": {
                "type": "Identifier",
                "start": 5373,
                "end": 5379,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 5382,
                "end": 5394,
                "typeName": {
                  "type": "Identifier",
                  "start": 5382,
                  "end": 5394,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 5396,
          "end": 5916,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 5432,
              "end": 5447,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5432,
                "end": 5437,
                "name": "label",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5438,
                "end": 5446,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5440,
                  "end": 5446
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 5483,
              "end": 5498,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5483,
                "end": 5488,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5489,
                "end": 5497,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5491,
                  "end": 5497,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5491,
                    "end": 5497,
                    "name": "TValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 5579,
              "end": 5604,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5579,
                "end": 5593,
                "name": "clearableValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5594,
                "end": 5603,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5596,
                  "end": 5603
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 5694,
              "end": 5713,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5694,
                "end": 5702,
                "name": "disabled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5703,
                "end": 5712,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5705,
                  "end": 5712
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSIndexSignature",
              "start": 5890,
              "end": 5914,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 5891,
                  "end": 5907,
                  "name": "property",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5899,
                    "end": 5907,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5901,
                      "end": 5907
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5908,
                "end": 5913,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 5910,
                  "end": 5913
                }
              },
              "readonly": false,
              "static": false,
              "accessibility": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5918,
      "end": 5971,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 5925,
        "end": 5971,
        "id": {
          "type": "Identifier",
          "start": 5930,
          "end": 5942,
          "name": "OptionValues",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 5945,
          "end": 5970,
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
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5973,
      "end": 7030,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 5980,
        "end": 7030,
        "id": {
          "type": "Identifier",
          "start": 5990,
          "end": 6007,
          "name": "MenuRendererProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 6007,
          "end": 6030,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 6008,
              "end": 6029,
              "name": {
                "type": "Identifier",
                "start": 6008,
                "end": 6014,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 6017,
                "end": 6029,
                "typeName": {
                  "type": "Identifier",
                  "start": 6017,
                  "end": 6029,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 6031,
          "end": 7030,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 6150,
              "end": 6180,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6150,
                "end": 6163,
                "name": "focusedOption",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6163,
                "end": 6179,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6165,
                  "end": 6179,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6165,
                    "end": 6171,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6171,
                    "end": 6179,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6172,
                        "end": 6178,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6172,
                          "end": 6178,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 6277,
              "end": 6317,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6277,
                "end": 6288,
                "name": "focusOption",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6288,
                "end": 6316,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6290,
                  "end": 6316,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6290,
                    "end": 6308,
                    "name": "FocusOptionHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6308,
                    "end": 6316,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6309,
                        "end": 6315,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6309,
                          "end": 6315,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 6397,
              "end": 6414,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6397,
                "end": 6405,
                "name": "labelKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6405,
                "end": 6413,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 6407,
                  "end": 6413
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 6479,
              "end": 6504,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6479,
                "end": 6486,
                "name": "options",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6486,
                "end": 6503,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6488,
                  "end": 6503,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6488,
                    "end": 6495,
                    "name": "Options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6495,
                    "end": 6503,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6496,
                        "end": 6502,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6496,
                          "end": 6502,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 6602,
              "end": 6642,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6602,
                "end": 6613,
                "name": "selectValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6613,
                "end": 6641,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6615,
                  "end": 6641,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6615,
                    "end": 6633,
                    "name": "SelectValueHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6633,
                    "end": 6641,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6634,
                        "end": 6640,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6634,
                          "end": 6640,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 6708,
              "end": 6736,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6708,
                "end": 6718,
                "name": "valueArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6718,
                "end": 6735,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6720,
                  "end": 6735,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6720,
                    "end": 6727,
                    "name": "Options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6727,
                    "end": 6735,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6728,
                        "end": 6734,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6728,
                          "end": 6734,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 6843,
              "end": 6883,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6843,
                "end": 6854,
                "name": "removeValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6854,
                "end": 6882,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6856,
                  "end": 6882,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6856,
                    "end": 6874,
                    "name": "SelectValueHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6874,
                    "end": 6882,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6875,
                        "end": 6881,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6875,
                          "end": 6881,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 6982,
              "end": 7028,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 6982,
                "end": 6996,
                "name": "optionRenderer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6996,
                "end": 7027,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6998,
                  "end": 7027,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6998,
                    "end": 7019,
                    "name": "OptionRendererHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 7019,
                    "end": 7027,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 7020,
                        "end": 7026,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7020,
                          "end": 7026,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7032,
      "end": 8392,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7039,
        "end": 8392,
        "id": {
          "type": "Identifier",
          "start": 7049,
          "end": 7069,
          "name": "OptionComponentProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 7069,
          "end": 7092,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 7070,
              "end": 7091,
              "name": {
                "type": "Identifier",
                "start": 7070,
                "end": 7076,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 7079,
                "end": 7091,
                "typeName": {
                  "type": "Identifier",
                  "start": 7079,
                  "end": 7091,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 7093,
          "end": 8392,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 7169,
              "end": 7188,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7169,
                "end": 7178,
                "name": "className",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7179,
                "end": 7187,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7181,
                  "end": 7187
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7243,
              "end": 7272,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7243,
                "end": 7254,
                "name": "focusOption",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7255,
                "end": 7271,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 7257,
                  "end": 7271,
                  "typeName": {
                    "type": "Identifier",
                    "start": 7257,
                    "end": 7263,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 7263,
                    "end": 7271,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 7264,
                        "end": 7270,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7264,
                          "end": 7270,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7278,
              "end": 7298,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7278,
                "end": 7288,
                "name": "inputValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7289,
                "end": 7297,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7291,
                  "end": 7297
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7303,
              "end": 7327,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7303,
                "end": 7317,
                "name": "instancePrefix",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7318,
                "end": 7326,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7320,
                  "end": 7326
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7389,
              "end": 7410,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7389,
                "end": 7399,
                "name": "isDisabled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7400,
                "end": 7409,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7402,
                  "end": 7409
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7471,
              "end": 7491,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7471,
                "end": 7480,
                "name": "isFocused",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7481,
                "end": 7490,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7483,
                  "end": 7490
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7553,
              "end": 7574,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7553,
                "end": 7563,
                "name": "isSelected",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7564,
                "end": 7573,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7566,
                  "end": 7573
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7655,
              "end": 7710,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7655,
                "end": 7662,
                "name": "onFocus",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7663,
                "end": 7709,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 7665,
                  "end": 7709,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7666,
                      "end": 7688,
                      "name": "option",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7672,
                        "end": 7688,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7674,
                          "end": 7688,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7674,
                            "end": 7680,
                            "name": "Option",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 7680,
                            "end": 7688,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 7681,
                                "end": 7687,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7681,
                                  "end": 7687,
                                  "name": "TValue",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 7690,
                      "end": 7700,
                      "name": "event",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7695,
                        "end": 7700,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 7697,
                          "end": 7700
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 7702,
                    "end": 7709,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7705,
                      "end": 7709
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7792,
              "end": 7848,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7792,
                "end": 7800,
                "name": "onSelect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7801,
                "end": 7847,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 7803,
                  "end": 7847,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7804,
                      "end": 7826,
                      "name": "option",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7810,
                        "end": 7826,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7812,
                          "end": 7826,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7812,
                            "end": 7818,
                            "name": "Option",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 7818,
                            "end": 7826,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 7819,
                                "end": 7825,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7819,
                                  "end": 7825,
                                  "name": "TValue",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 7828,
                      "end": 7838,
                      "name": "event",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7833,
                        "end": 7838,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 7835,
                          "end": 7838
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 7840,
                    "end": 7847,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7843,
                      "end": 7847
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 7918,
              "end": 7941,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 7918,
                "end": 7924,
                "name": "option",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7924,
                "end": 7940,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 7926,
                  "end": 7940,
                  "typeName": {
                    "type": "Identifier",
                    "start": 7926,
                    "end": 7932,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 7932,
                    "end": 7940,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 7933,
                        "end": 7939,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7933,
                          "end": 7939,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8017,
              "end": 8038,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8017,
                "end": 8028,
                "name": "optionIndex",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8029,
                "end": 8037,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 8031,
                  "end": 8037
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8182,
              "end": 8231,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8182,
                "end": 8193,
                "name": "removeValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8194,
                "end": 8230,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 8196,
                  "end": 8230,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 8197,
                      "end": 8221,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 8202,
                        "end": 8221,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 8204,
                          "end": 8221,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 8204,
                              "end": 8210,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8204,
                                "end": 8210,
                                "name": "TValue",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSArrayType",
                              "start": 8213,
                              "end": 8221,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 8213,
                                "end": 8219,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8213,
                                  "end": 8219,
                                  "name": "TValue",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 8223,
                    "end": 8230,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 8226,
                      "end": 8230
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8341,
              "end": 8390,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8341,
                "end": 8352,
                "name": "selectValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8353,
                "end": 8389,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 8355,
                  "end": 8389,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 8356,
                      "end": 8380,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 8361,
                        "end": 8380,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 8363,
                          "end": 8380,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 8363,
                              "end": 8369,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8363,
                                "end": 8369,
                                "name": "TValue",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSArrayType",
                              "start": 8372,
                              "end": 8380,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 8372,
                                "end": 8378,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8372,
                                  "end": 8378,
                                  "name": "TValue",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 8382,
                    "end": 8389,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 8385,
                      "end": 8389
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8394,
      "end": 8615,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 8401,
        "end": 8615,
        "id": {
          "type": "Identifier",
          "start": 8411,
          "end": 8429,
          "name": "ArrowRendererProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 8430,
          "end": 8615,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 8491,
              "end": 8533,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8491,
                "end": 8502,
                "name": "onMouseDown",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8502,
                "end": 8532,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8504,
                  "end": 8532,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 8504,
                    "end": 8527,
                    "left": {
                      "type": "Identifier",
                      "start": 8504,
                      "end": 8509,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 8510,
                      "end": 8527,
                      "name": "MouseEventHandler",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8527,
                    "end": 8532,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 8528,
                        "end": 8531
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8597,
              "end": 8613,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8597,
                "end": 8603,
                "name": "isOpen",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8603,
                "end": 8612,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 8605,
                  "end": 8612
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8617,
      "end": 8989,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 8624,
        "end": 8989,
        "id": {
          "type": "Identifier",
          "start": 8634,
          "end": 8653,
          "name": "ValueComponentProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 8653,
          "end": 8676,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 8654,
              "end": 8675,
              "name": {
                "type": "Identifier",
                "start": 8654,
                "end": 8660,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 8663,
                "end": 8675,
                "typeName": {
                  "type": "Identifier",
                  "start": 8663,
                  "end": 8675,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 8677,
          "end": 8989,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 8683,
              "end": 8730,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8683,
                "end": 8691,
                "name": "disabled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8691,
                "end": 8729,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 8693,
                  "end": 8729,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 8693,
                    "end": 8717,
                    "typeName": {
                      "type": "Identifier",
                      "start": 8693,
                      "end": 8709,
                      "name": "ReactSelectProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 8709,
                      "end": 8717,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 8710,
                          "end": 8716,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8710,
                            "end": 8716,
                            "name": "TValue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 8718,
                    "end": 8728,
                    "literal": {
                      "type": "Literal",
                      "start": 8718,
                      "end": 8728,
                      "value": "disabled",
                      "raw": "'disabled'"
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8735,
              "end": 8746,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8735,
                "end": 8737,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8737,
                "end": 8745,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8739,
                  "end": 8745
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8751,
              "end": 8774,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8751,
                "end": 8765,
                "name": "instancePrefix",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8765,
                "end": 8773,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8767,
                  "end": 8773
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8779,
              "end": 8823,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8779,
                "end": 8786,
                "name": "onClick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8786,
                "end": 8822,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 8788,
                  "end": 8822,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 8788,
                      "end": 8815,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8788,
                        "end": 8807,
                        "name": "OnValueClickHandler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 8807,
                        "end": 8815,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 8808,
                            "end": 8814,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8808,
                              "end": 8814,
                              "name": "TValue",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 8818,
                      "end": 8822
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8828,
              "end": 8866,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8828,
                "end": 8836,
                "name": "onRemove",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8837,
                "end": 8865,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8839,
                  "end": 8865,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8839,
                    "end": 8857,
                    "name": "SelectValueHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8857,
                    "end": 8865,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 8858,
                        "end": 8864,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8858,
                          "end": 8864,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8871,
              "end": 8924,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8871,
                "end": 8882,
                "name": "placeholder",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8882,
                "end": 8923,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 8884,
                  "end": 8923,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 8884,
                    "end": 8908,
                    "typeName": {
                      "type": "Identifier",
                      "start": 8884,
                      "end": 8900,
                      "name": "ReactSelectProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 8900,
                      "end": 8908,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 8901,
                          "end": 8907,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8901,
                            "end": 8907,
                            "name": "TValue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 8909,
                    "end": 8922,
                    "literal": {
                      "type": "Literal",
                      "start": 8909,
                      "end": 8922,
                      "value": "placeholder",
                      "raw": "'placeholder'"
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8929,
              "end": 8951,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8929,
                "end": 8934,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8934,
                "end": 8950,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8936,
                  "end": 8950,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8936,
                    "end": 8942,
                    "name": "Option",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8942,
                    "end": 8950,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 8943,
                        "end": 8949,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8943,
                          "end": 8949,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 8956,
              "end": 8987,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 8956,
                "end": 8962,
                "name": "values",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8963,
                "end": 8986,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8965,
                  "end": 8986,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8965,
                    "end": 8970,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8970,
                    "end": 8986,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 8971,
                        "end": 8985,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8971,
                          "end": 8977,
                          "name": "Option",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 8977,
                          "end": 8985,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 8978,
                              "end": 8984,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8978,
                                "end": 8984,
                                "name": "TValue",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8991,
      "end": 18589,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 8998,
        "end": 18589,
        "id": {
          "type": "Identifier",
          "start": 9008,
          "end": 9024,
          "name": "ReactSelectProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 9056,
            "end": 9093,
            "expression": {
              "type": "MemberExpression",
              "start": 9056,
              "end": 9067,
              "object": {
                "type": "Identifier",
                "start": 9056,
                "end": 9061,
                "name": "React",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9062,
                "end": 9067,
                "name": "Props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 9067,
              "end": 9093,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 9068,
                  "end": 9092,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9068,
                    "end": 9084,
                    "name": "ReactSelectClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 9084,
                    "end": 9092,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 9085,
                        "end": 9091,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9085,
                          "end": 9091,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 9024,
          "end": 9047,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 9025,
              "end": 9046,
              "name": {
                "type": "Identifier",
                "start": 9025,
                "end": 9031,
                "name": "TValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 9034,
                "end": 9046,
                "typeName": {
                  "type": "Identifier",
                  "start": 9034,
                  "end": 9046,
                  "name": "OptionValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 9094,
          "end": 18589,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 9200,
              "end": 9222,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 9200,
                "end": 9212,
                "name": "addLabelText",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9213,
                "end": 9221,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 9215,
                  "end": 9221
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 9359,
              "end": 9403,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 9359,
                "end": 9372,
                "name": "arrowRenderer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9373,
                "end": 9402,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 9375,
                  "end": 9402,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 9375,
                      "end": 9395,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9375,
                        "end": 9395,
                        "name": "ArrowRendererHandler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 9398,
                      "end": 9402
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 9561,
              "end": 9580,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 9561,
                "end": 9569,
                "name": "autoBlur",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9570,
                "end": 9579,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9572,
                  "end": 9579
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 9705,
              "end": 9725,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 9705,
                "end": 9714,
                "name": "autofocus",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9715,
                "end": 9724,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9717,
                  "end": 9724
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 9808,
              "end": 9828,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 9808,
                "end": 9817,
                "name": "autoFocus",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9818,
                "end": 9827,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9820,
                  "end": 9827
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 9928,
              "end": 9947,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 9928,
                "end": 9936,
                "name": "autosize",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9937,
                "end": 9946,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9939,
                  "end": 9946
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 10074,
              "end": 10101,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 10074,
                "end": 10090,
                "name": "backspaceRemoves",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10091,
                "end": 10100,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 10093,
                  "end": 10100
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 10302,
              "end": 10336,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 10302,
                "end": 10326,
                "name": "backspaceToRemoveMessage",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10327,
                "end": 10335,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10329,
                  "end": 10335
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 10400,
              "end": 10419,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 10400,
                "end": 10409,
                "name": "className",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10410,
                "end": 10418,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10412,
                  "end": 10418
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 10520,
              "end": 10545,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 10520,
                "end": 10535,
                "name": "classNamePrefix",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10536,
                "end": 10544,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10538,
                  "end": 10544
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 10652,
              "end": 10674,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 10652,
                "end": 10664,
                "name": "clearAllText",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10665,
                "end": 10673,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10667,
                  "end": 10673
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 10820,
              "end": 10857,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 10820,
                "end": 10833,
                "name": "clearRenderer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10834,
                "end": 10856,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 10836,
                  "end": 10856,
                  "typeName": {
                    "type": "Identifier",
                    "start": 10836,
                    "end": 10856,
                    "name": "ClearRendererHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 10945,
              "end": 10969,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 10945,
                "end": 10959,
                "name": "clearValueText",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10960,
                "end": 10968,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10962,
                  "end": 10968
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 11069,
              "end": 11093,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 11069,
                "end": 11082,
                "name": "closeOnSelect",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11083,
                "end": 11092,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11085,
                  "end": 11092
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 11236,
              "end": 11256,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 11236,
                "end": 11245,
                "name": "clearable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11246,
                "end": 11255,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11248,
                  "end": 11255
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 11365,
              "end": 11389,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 11365,
                "end": 11378,
                "name": "deleteRemoves",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11379,
                "end": 11388,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11381,
                  "end": 11388
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 11478,
              "end": 11497,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 11478,
                "end": 11487,
                "name": "delimiter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11488,
                "end": 11496,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 11490,
                  "end": 11496
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 11585,
              "end": 11604,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 11585,
                "end": 11593,
                "name": "disabled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11594,
                "end": 11603,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11596,
                  "end": 11603
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 11709,
              "end": 11737,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 11709,
                "end": 11726,
                "name": "escapeClearsValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11727,
                "end": 11736,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11729,
                  "end": 11736
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 11798,
              "end": 11841,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 11798,
                "end": 11810,
                "name": "filterOption",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11811,
                "end": 11840,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 11813,
                  "end": 11840,
                  "typeName": {
                    "type": "Identifier",
                    "start": 11813,
                    "end": 11832,
                    "name": "FilterOptionHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 11832,
                    "end": 11840,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 11833,
                        "end": 11839,
                        "typeName": {
                          "type": "Identifier",
                          "start": 11833,
                          "end": 11839,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 11904,
              "end": 11949,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 11904,
                "end": 11917,
                "name": "filterOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11918,
                "end": 11948,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 11920,
                  "end": 11948,
                  "typeName": {
                    "type": "Identifier",
                    "start": 11920,
                    "end": 11940,
                    "name": "FilterOptionsHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 11940,
                    "end": 11948,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 11941,
                        "end": 11947,
                        "typeName": {
                          "type": "Identifier",
                          "start": 11941,
                          "end": 11947,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 12044,
              "end": 12056,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 12044,
                "end": 12046,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12047,
                "end": 12055,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 12049,
                  "end": 12055
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 12148,
              "end": 12172,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 12148,
                "end": 12161,
                "name": "ignoreAccents",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12162,
                "end": 12171,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12164,
                  "end": 12171
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 12267,
              "end": 12288,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 12267,
                "end": 12277,
                "name": "ignoreCase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12278,
                "end": 12287,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12280,
                  "end": 12287
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 12416,
              "end": 12452,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 12416,
                "end": 12426,
                "name": "inputProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12427,
                "end": 12451,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 12429,
                  "end": 12451,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 12431,
                      "end": 12449,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 12432,
                          "end": 12443,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 12435,
                            "end": 12443,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 12437,
                              "end": 12443
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 12444,
                        "end": 12449,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 12446,
                          "end": 12449
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 12503,
              "end": 12540,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 12503,
                "end": 12516,
                "name": "inputRenderer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12517,
                "end": 12539,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 12519,
                  "end": 12539,
                  "typeName": {
                    "type": "Identifier",
                    "start": 12519,
                    "end": 12539,
                    "name": "InputRendererHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 12699,
              "end": 12719,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 12699,
                "end": 12709,
                "name": "instanceId",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12710,
                "end": 12718,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 12712,
                  "end": 12718
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 12916,
              "end": 12936,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 12916,
                "end": 12925,
                "name": "isLoading",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12926,
                "end": 12935,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12928,
                  "end": 12935
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 13066,
              "end": 13087,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 13066,
                "end": 13076,
                "name": "joinValues",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13077,
                "end": 13086,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 13079,
                  "end": 13086
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 13180,
              "end": 13198,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 13180,
                "end": 13188,
                "name": "labelKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13189,
                "end": 13197,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13191,
                  "end": 13197
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 13309,
              "end": 13327,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 13309,
                "end": 13317,
                "name": "matchPos",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13318,
                "end": 13326,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13320,
                  "end": 13326
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 13432,
              "end": 13451,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 13432,
                "end": 13441,
                "name": "matchProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13442,
                "end": 13450,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13444,
                  "end": 13450
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 13600,
              "end": 13620,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 13600,
                "end": 13610,
                "name": "menuBuffer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13611,
                "end": 13619,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 13613,
                  "end": 13619
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 13694,
              "end": 13735,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 13694,
                "end": 13712,
                "name": "menuContainerStyle",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13713,
                "end": 13734,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 13715,
                  "end": 13734,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 13715,
                    "end": 13734,
                    "left": {
                      "type": "Identifier",
                      "start": 13715,
                      "end": 13720,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 13721,
                      "end": 13734,
                      "name": "CSSProperties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 13798,
              "end": 13841,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 13798,
                "end": 13810,
                "name": "menuRenderer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13811,
                "end": 13840,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 13813,
                  "end": 13840,
                  "typeName": {
                    "type": "Identifier",
                    "start": 13813,
                    "end": 13832,
                    "name": "MenuRendererHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 13832,
                    "end": 13840,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 13833,
                        "end": 13839,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13833,
                          "end": 13839,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 13905,
              "end": 13937,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 13905,
                "end": 13914,
                "name": "menuStyle",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13915,
                "end": 13936,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 13917,
                  "end": 13936,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 13917,
                    "end": 13936,
                    "left": {
                      "type": "Identifier",
                      "start": 13917,
                      "end": 13922,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 13923,
                      "end": 13936,
                      "name": "CSSProperties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 14005,
              "end": 14021,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14005,
                "end": 14010,
                "name": "multi",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14011,
                "end": 14020,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14013,
                  "end": 14020
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 14086,
              "end": 14100,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14086,
                "end": 14090,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14091,
                "end": 14099,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 14093,
                  "end": 14099
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 14255,
              "end": 14292,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14255,
                "end": 14268,
                "name": "noResultsText",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14269,
                "end": 14291,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 14271,
                  "end": 14291,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 14271,
                      "end": 14277
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 14280,
                      "end": 14291,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 14280,
                        "end": 14291,
                        "left": {
                          "type": "Identifier",
                          "start": 14280,
                          "end": 14283,
                          "name": "JSX",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 14284,
                          "end": 14291,
                          "name": "Element",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 14356,
              "end": 14379,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14356,
                "end": 14362,
                "name": "onBlur",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14363,
                "end": 14378,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 14365,
                  "end": 14378,
                  "typeName": {
                    "type": "Identifier",
                    "start": 14365,
                    "end": 14378,
                    "name": "OnBlurHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 14466,
              "end": 14494,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14466,
                "end": 14483,
                "name": "onBlurResetsInput",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14484,
                "end": 14493,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14486,
                  "end": 14493
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 14753,
              "end": 14783,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14753,
                "end": 14772,
                "name": "onSelectResetsInput",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14773,
                "end": 14782,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14775,
                  "end": 14782
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 14895,
              "end": 14924,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14895,
                "end": 14913,
                "name": "onCloseResetsInput",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14914,
                "end": 14923,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14916,
                  "end": 14923
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 14993,
              "end": 15028,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 14993,
                "end": 15001,
                "name": "onChange",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15002,
                "end": 15027,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15004,
                  "end": 15027,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15004,
                    "end": 15019,
                    "name": "OnChangeHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 15019,
                    "end": 15027,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 15020,
                        "end": 15026,
                        "typeName": {
                          "type": "Identifier",
                          "start": 15020,
                          "end": 15026,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 15086,
              "end": 15111,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15086,
                "end": 15093,
                "name": "onClose",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15094,
                "end": 15110,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15096,
                  "end": 15110,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15096,
                    "end": 15110,
                    "name": "OnCloseHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 15176,
              "end": 15201,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15176,
                "end": 15183,
                "name": "onFocus",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15184,
                "end": 15200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15186,
                  "end": 15200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15186,
                    "end": 15200,
                    "name": "OnFocusHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 15277,
              "end": 15314,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15277,
                "end": 15290,
                "name": "onInputChange",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15291,
                "end": 15313,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15293,
                  "end": 15313,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15293,
                    "end": 15313,
                    "name": "OnInputChangeHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 15394,
              "end": 15433,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15394,
                "end": 15408,
                "name": "onInputKeyDown",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15409,
                "end": 15432,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15411,
                  "end": 15432,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15411,
                    "end": 15432,
                    "name": "OnInputKeyDownHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 15540,
              "end": 15591,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15540,
                "end": 15560,
                "name": "onMenuScrollToBottom",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15561,
                "end": 15590,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15563,
                  "end": 15590,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15563,
                    "end": 15590,
                    "name": "OnMenuScrollToBottomHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 15649,
              "end": 15672,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15649,
                "end": 15655,
                "name": "onOpen",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15656,
                "end": 15671,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15658,
                  "end": 15671,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15658,
                    "end": 15671,
                    "name": "OnOpenHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 15770,
              "end": 15792,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15770,
                "end": 15781,
                "name": "openOnClick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15782,
                "end": 15791,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 15784,
                  "end": 15791
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 15918,
              "end": 15940,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 15918,
                "end": 15929,
                "name": "openOnFocus",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15930,
                "end": 15939,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 15932,
                  "end": 15939
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16010,
              "end": 16035,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16010,
                "end": 16025,
                "name": "optionClassName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16026,
                "end": 16034,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 16028,
                  "end": 16034
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16102,
              "end": 16148,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16102,
                "end": 16117,
                "name": "optionComponent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16118,
                "end": 16147,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 16120,
                  "end": 16147,
                  "typeName": {
                    "type": "Identifier",
                    "start": 16120,
                    "end": 16139,
                    "name": "OptionComponentType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 16139,
                    "end": 16147,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 16140,
                        "end": 16146,
                        "typeName": {
                          "type": "Identifier",
                          "start": 16140,
                          "end": 16146,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16246,
              "end": 16293,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16246,
                "end": 16260,
                "name": "optionRenderer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16261,
                "end": 16292,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 16263,
                  "end": 16292,
                  "typeName": {
                    "type": "Identifier",
                    "start": 16263,
                    "end": 16284,
                    "name": "OptionRendererHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 16284,
                    "end": 16292,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 16285,
                        "end": 16291,
                        "typeName": {
                          "type": "Identifier",
                          "start": 16285,
                          "end": 16291,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16367,
              "end": 16393,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16367,
                "end": 16374,
                "name": "options",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16375,
                "end": 16392,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 16377,
                  "end": 16392,
                  "typeName": {
                    "type": "Identifier",
                    "start": 16377,
                    "end": 16384,
                    "name": "Options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 16384,
                    "end": 16392,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 16385,
                        "end": 16391,
                        "typeName": {
                          "type": "Identifier",
                          "start": 16385,
                          "end": 16391,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16494,
              "end": 16512,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16494,
                "end": 16502,
                "name": "pageSize",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16503,
                "end": 16511,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16505,
                  "end": 16511
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16619,
              "end": 16654,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16619,
                "end": 16630,
                "name": "placeholder",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16631,
                "end": 16653,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 16633,
                  "end": 16653,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 16633,
                      "end": 16639
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 16642,
                      "end": 16653,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 16642,
                        "end": 16653,
                        "left": {
                          "type": "Identifier",
                          "start": 16642,
                          "end": 16645,
                          "name": "JSX",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 16646,
                          "end": 16653,
                          "name": "Element",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16777,
              "end": 16802,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16777,
                "end": 16791,
                "name": "removeSelected",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16792,
                "end": 16801,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 16794,
                  "end": 16801
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16897,
              "end": 16916,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16897,
                "end": 16905,
                "name": "required",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16906,
                "end": 16915,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 16908,
                  "end": 16915
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 16984,
              "end": 17001,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16984,
                "end": 16994,
                "name": "resetValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16995,
                "end": 17000,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 16997,
                  "end": 17000
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 17095,
              "end": 17109,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 17095,
                "end": 17098,
                "name": "rtl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17099,
                "end": 17108,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17101,
                  "end": 17108
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 17230,
              "end": 17259,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 17230,
                "end": 17248,
                "name": "scrollMenuIntoView",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17249,
                "end": 17258,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17251,
                  "end": 17258
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 17352,
              "end": 17373,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 17352,
                "end": 17362,
                "name": "searchable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17363,
                "end": 17372,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17365,
                  "end": 17372
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 17479,
              "end": 17505,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 17479,
                "end": 17494,
                "name": "tabSelectsValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17495,
                "end": 17504,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17497,
                  "end": 17504
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 17553,
              "end": 17644,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 17553,
                "end": 17558,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17559,
                "end": 17643,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 17561,
                  "end": 17643,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 17561,
                      "end": 17575,
                      "typeName": {
                        "type": "Identifier",
                        "start": 17561,
                        "end": 17567,
                        "name": "Option",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 17567,
                        "end": 17575,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 17568,
                            "end": 17574,
                            "typeName": {
                              "type": "Identifier",
                              "start": 17568,
                              "end": 17574,
                              "name": "TValue",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 17578,
                      "end": 17593,
                      "typeName": {
                        "type": "Identifier",
                        "start": 17578,
                        "end": 17585,
                        "name": "Options",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 17585,
                        "end": 17593,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 17586,
                            "end": 17592,
                            "typeName": {
                              "type": "Identifier",
                              "start": 17586,
                              "end": 17592,
                              "name": "TValue",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 17596,
                      "end": 17602
                    },
                    {
                      "type": "TSArrayType",
                      "start": 17605,
                      "end": 17613,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 17605,
                        "end": 17611
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 17616,
                      "end": 17622
                    },
                    {
                      "type": "TSArrayType",
                      "start": 17625,
                      "end": 17633,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 17625,
                        "end": 17631
                      }
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 17636,
                      "end": 17643
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 17737,
              "end": 17755,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 17737,
                "end": 17745,
                "name": "valueKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17746,
                "end": 17754,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 17748,
                  "end": 17754
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 17870,
              "end": 17915,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 17870,
                "end": 17883,
                "name": "valueRenderer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17884,
                "end": 17914,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 17886,
                  "end": 17914,
                  "typeName": {
                    "type": "Identifier",
                    "start": 17886,
                    "end": 17906,
                    "name": "ValueRendererHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 17906,
                    "end": 17914,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 17907,
                        "end": 17913,
                        "typeName": {
                          "type": "Identifier",
                          "start": 17907,
                          "end": 17913,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 17983,
              "end": 18011,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 17983,
                "end": 17988,
                "name": "style",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17989,
                "end": 18010,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 17991,
                  "end": 18010,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 17991,
                    "end": 18010,
                    "left": {
                      "type": "Identifier",
                      "start": 17991,
                      "end": 17996,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 17997,
                      "end": 18010,
                      "name": "CSSProperties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 18075,
              "end": 18102,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 18075,
                "end": 18083,
                "name": "tabIndex",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18084,
                "end": 18101,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 18086,
                  "end": 18101,
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
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 18158,
              "end": 18202,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 18158,
                "end": 18172,
                "name": "valueComponent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18173,
                "end": 18201,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 18175,
                  "end": 18201,
                  "typeName": {
                    "type": "Identifier",
                    "start": 18175,
                    "end": 18193,
                    "name": "ValueComponentType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 18193,
                    "end": 18201,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 18194,
                        "end": 18200,
                        "typeName": {
                          "type": "Identifier",
                          "start": 18194,
                          "end": 18200,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 18281,
              "end": 18316,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 18281,
                "end": 18293,
                "name": "wrapperStyle",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18294,
                "end": 18315,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 18296,
                  "end": 18315,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 18296,
                    "end": 18315,
                    "left": {
                      "type": "Identifier",
                      "start": 18296,
                      "end": 18301,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 18302,
                      "end": 18315,
                      "name": "CSSProperties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 18406,
              "end": 18449,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 18406,
                "end": 18418,
                "name": "onValueClick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18419,
                "end": 18448,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 18421,
                  "end": 18448,
                  "typeName": {
                    "type": "Identifier",
                    "start": 18421,
                    "end": 18440,
                    "name": "OnValueClickHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 18440,
                    "end": 18448,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 18441,
                        "end": 18447,
                        "typeName": {
                          "type": "Identifier",
                          "start": 18441,
                          "end": 18447,
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 18565,
              "end": 18587,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 18565,
                "end": 18576,
                "name": "simpleValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18577,
                "end": 18586,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 18579,
                  "end": 18586
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
