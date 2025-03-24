__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 18589,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 79,
      "end": 200,
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 200,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 125,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 130,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 139,
                      "end": 142,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 140,
                          "end": 141,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 141,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 139,
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 145,
                    "end": 146,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 152,
            "end": 198,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 160,
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 162,
                "end": 190,
                "decorators": [],
                "name": "value",
                "optional": false,
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
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 175,
                          "end": 178,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 176,
                              "end": 177,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 176,
                                "end": 177,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "decorators": [],
                          "name": "Option",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 181,
                        "end": 190
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 94,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 94,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 95,
            "end": 117,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 117,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 117,
                "decorators": [],
                "name": "OptionValues",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 202,
      "end": 277,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 223,
        "decorators": [],
        "name": "ExtractValueType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 229,
        "end": 276,
        "checkType": {
          "type": "TSTypeReference",
          "start": 229,
          "end": 230,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 229,
            "end": 230,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 239,
          "end": 264,
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
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 239,
            "end": 255,
            "decorators": [],
            "name": "ReactSelectProps",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 271,
          "end": 276
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 267,
          "end": 268,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 454,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 286,
        "end": 454,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 291,
          "end": 313,
          "decorators": [],
          "name": "ReactSingleSelectProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 366,
          "end": 453,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 375,
            "end": 453,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 381,
                "end": 408,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 385,
                  "end": 408,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 386,
                      "end": 398,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 398,
                        "decorators": [],
                        "name": "WrappedProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 400,
                      "end": 407,
                      "literal": {
                        "type": "Literal",
                        "start": 400,
                        "end": 407,
                        "raw": "\"multi\"",
                        "value": "multi"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 385,
                  "decorators": [],
                  "name": "Omit",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 414,
                "end": 451,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 419,
                  "end": 451,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 420,
                      "end": 450,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 436,
                        "end": 450,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 437,
                            "end": 449,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 437,
                              "end": 449,
                              "decorators": [],
                              "name": "WrappedProps",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 436,
                        "decorators": [],
                        "name": "ExtractValueType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 419,
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 366,
            "end": 375,
            "decorators": [],
            "name": "Overwrite",
            "optional": false,
            "typeAnnotation": null
          }
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
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 361,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 356,
                  "decorators": [],
                  "name": "ReactSelectProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 319,
                "end": 331,
                "decorators": [],
                "name": "WrappedProps",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 456,
      "end": 1127,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 463,
        "end": 1127,
        "async": false,
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
                "async": false,
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
                        "children": [],
                        "closingElement": null,
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
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null
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
                                  "raw": "false",
                                  "value": false
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
                                  "raw": "false",
                                  "value": false
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
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 882,
                                    "end": 887,
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 888,
                                    "end": 893,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
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
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 932,
                                    "end": 1091,
                                    "body": [
                                      {
                                        "type": "IfStatement",
                                        "start": 954,
                                        "end": 1073,
                                        "alternate": null,
                                        "consequent": {
                                          "type": "BlockStatement",
                                          "start": 974,
                                          "end": 1073,
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "start": 1000,
                                              "end": 1051,
                                              "directive": null,
                                              "expression": {
                                                "type": "CallExpression",
                                                "start": 1000,
                                                "end": 1050,
                                                "arguments": [
                                                  {
                                                    "type": "ConditionalExpression",
                                                    "start": 1015,
                                                    "end": 1049,
                                                    "alternate": {
                                                      "type": "Identifier",
                                                      "start": 1044,
                                                      "end": 1049,
                                                      "decorators": [],
                                                      "name": "value",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "consequent": {
                                                      "type": "Identifier",
                                                      "start": 1032,
                                                      "end": 1041,
                                                      "decorators": [],
                                                      "name": "undefined",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "test": {
                                                      "type": "BinaryExpression",
                                                      "start": 1015,
                                                      "end": 1029,
                                                      "operator": "===",
                                                      "left": {
                                                        "type": "Identifier",
                                                        "start": 1015,
                                                        "end": 1020,
                                                        "decorators": [],
                                                        "name": "value",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "right": {
                                                        "type": "Literal",
                                                        "start": 1025,
                                                        "end": 1029,
                                                        "raw": "null",
                                                        "value": null
                                                      }
                                                    }
                                                  }
                                                ],
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "start": 1000,
                                                  "end": 1014,
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 1000,
                                                    "end": 1005,
                                                    "decorators": [],
                                                    "name": "props",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 1006,
                                                    "end": 1014,
                                                    "decorators": [],
                                                    "name": "onChange",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                },
                                                "optional": false,
                                                "typeArguments": null
                                              }
                                            }
                                          ]
                                        },
                                        "test": {
                                          "type": "MemberExpression",
                                          "start": 958,
                                          "end": 972,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 958,
                                            "end": 963,
                                            "decorators": [],
                                            "name": "props",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 964,
                                            "end": 972,
                                            "decorators": [],
                                            "name": "onChange",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 922,
                                      "end": 927,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "typeParameters": null
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
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 753,
                                  "end": 767,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 754,
                                      "end": 766,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 754,
                                        "end": 766,
                                        "decorators": [],
                                        "name": "WrappedProps",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 737,
                                  "end": 753,
                                  "decorators": [],
                                  "name": "ExtractValueType",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 678,
                    "end": 683,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 472,
          "end": 495,
          "decorators": [],
          "name": "createReactSingleSelect",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 551,
            "end": 602,
            "decorators": [],
            "name": "WrappedComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 602,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 569,
                "end": 602,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 588,
                  "end": 602,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 589,
                      "end": 601,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 601,
                        "decorators": [],
                        "name": "WrappedProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 569,
                  "end": 588,
                  "left": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 574,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 588,
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 604,
          "end": 663,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 606,
            "end": 663,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 625,
              "end": 663,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 626,
                  "end": 662,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 648,
                    "end": 662,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 649,
                        "end": 661,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 661,
                          "decorators": [],
                          "name": "WrappedProps",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 648,
                    "decorators": [],
                    "name": "ReactSingleSelectProps",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "TSQualifiedName",
              "start": 606,
              "end": 625,
              "left": {
                "type": "Identifier",
                "start": 606,
                "end": 611,
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 612,
                "end": 625,
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 495,
          "end": 545,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 501,
              "end": 543,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 522,
                "end": 543,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 538,
                  "decorators": [],
                  "name": "ReactSelectProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 501,
                "end": 513,
                "decorators": [],
                "name": "WrappedProps",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1170,
      "end": 1266,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1177,
        "end": 1266,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1182,
          "end": 1186,
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1213,
          "end": 1265,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1213,
            "end": 1214,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1213,
              "end": 1214,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 1223,
            "end": 1226
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1260,
            "end": 1265
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1229,
            "end": 1257,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1233,
              "end": 1257,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1234,
                  "end": 1235,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1234,
                    "end": 1235,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1237,
                  "end": 1256,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1251,
                            "end": 1252,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1254,
                        "end": 1255,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1254,
                          "end": 1255,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1244,
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1229,
              "end": 1233,
              "decorators": [],
              "name": "Pick",
              "optional": false,
              "typeAnnotation": null
            }
          }
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1187,
                "end": 1188,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1190,
              "end": 1209,
              "const": false,
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
              "name": {
                "type": "Identifier",
                "start": 1190,
                "end": 1191,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1267,
      "end": 1328,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1274,
        "end": 1328,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1279,
          "end": 1288,
          "decorators": [],
          "name": "Overwrite",
          "optional": false,
          "typeAnnotation": null
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1301,
                "end": 1323,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1302,
                    "end": 1303,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1302,
                      "end": 1303,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1311,
                            "end": 1312,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1321,
                            "end": 1322,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1297,
                "end": 1301,
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1326,
              "end": 1327,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1326,
                "end": 1327,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1289,
                "end": 1290,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1292,
              "end": 1293,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1292,
                "end": 1293,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 1403,
      "end": 1572,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1507,
        "end": 1572,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1513,
            "end": 1527,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1513,
              "end": 1518,
              "decorators": [],
              "name": "focus",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1518,
              "end": 1527,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1520,
                "end": 1526,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1522,
                  "end": 1526
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1532,
            "end": 1570,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1532,
              "end": 1540,
              "decorators": [],
              "name": "setValue",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1540,
              "end": 1570,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1541,
                  "end": 1562,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1546,
                    "end": 1562,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1548,
                      "end": 1562,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1554,
                        "end": 1562,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1555,
                            "end": 1561,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1555,
                              "end": 1561,
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1548,
                        "end": 1554,
                        "decorators": [],
                        "name": "Option",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1563,
                "end": 1569,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1565,
                  "end": 1569
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1417,
        "end": 1433,
        "decorators": [],
        "name": "ReactSelectClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 1465,
        "end": 1480,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1465,
          "end": 1470,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1471,
          "end": 1480,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1480,
        "end": 1506,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1481,
            "end": 1505,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1497,
              "end": 1505,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1498,
                  "end": 1504,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1498,
                    "end": 1504,
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1481,
              "end": 1497,
              "decorators": [],
              "name": "ReactSelectProps",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1433,
        "end": 1456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1434,
            "end": 1455,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1443,
              "end": 1455,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1443,
                "end": 1455,
                "decorators": [],
                "name": "OptionValues",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1434,
              "end": 1440,
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1574,
      "end": 1681,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1581,
        "end": 1681,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1586,
          "end": 1605,
          "decorators": [],
          "name": "OptionComponentType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1631,
          "end": 1680,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1650,
            "end": 1680,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1651,
                "end": 1679,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1671,
                  "end": 1679,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1672,
                      "end": 1678,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1672,
                        "end": 1678,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1671,
                  "decorators": [],
                  "name": "OptionComponentProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1631,
            "end": 1650,
            "left": {
              "type": "Identifier",
              "start": 1631,
              "end": 1636,
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1637,
              "end": 1650,
              "decorators": [],
              "name": "ComponentType",
              "optional": false,
              "typeAnnotation": null
            }
          }
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 1615,
                "end": 1627,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1615,
                  "end": 1627,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1606,
                "end": 1612,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1682,
      "end": 1788,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1689,
        "end": 1788,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1694,
          "end": 1712,
          "decorators": [],
          "name": "ValueComponentType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1739,
          "end": 1787,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1758,
            "end": 1787,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1759,
                "end": 1786,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1778,
                  "end": 1786,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1779,
                      "end": 1785,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1779,
                        "end": 1785,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1759,
                  "end": 1778,
                  "decorators": [],
                  "name": "ValueComponentProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 1739,
            "end": 1758,
            "left": {
              "type": "Identifier",
              "start": 1739,
              "end": 1744,
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1745,
              "end": 1758,
              "decorators": [],
              "name": "ComponentType",
              "optional": false,
              "typeAnnotation": null
            }
          }
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 1722,
                "end": 1734,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1722,
                  "end": 1734,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1713,
                "end": 1719,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1790,
      "end": 1853,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1797,
        "end": 1853,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1802,
          "end": 1823,
          "decorators": [],
          "name": "HandlerRendererResult",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1826,
          "end": 1852,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1826,
              "end": 1837,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1826,
                "end": 1837,
                "left": {
                  "type": "Identifier",
                  "start": 1826,
                  "end": 1829,
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1830,
                  "end": 1837,
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
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
                "raw": "false",
                "value": false
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1867,
      "end": 1956,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1874,
        "end": 1956,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1879,
          "end": 1897,
          "decorators": [],
          "name": "FocusOptionHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1923,
          "end": 1955,
          "params": [
            {
              "type": "Identifier",
              "start": 1924,
              "end": 1946,
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1930,
                "end": 1946,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1932,
                  "end": 1946,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1938,
                    "end": 1946,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1939,
                        "end": 1945,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1939,
                          "end": 1945,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1932,
                    "end": 1938,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 1907,
                "end": 1919,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1907,
                  "end": 1919,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1898,
                "end": 1904,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1957,
      "end": 2046,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1964,
        "end": 2046,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1969,
          "end": 1987,
          "decorators": [],
          "name": "SelectValueHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2013,
          "end": 2045,
          "params": [
            {
              "type": "Identifier",
              "start": 2014,
              "end": 2036,
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2020,
                "end": 2036,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2022,
                  "end": 2036,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2028,
                    "end": 2036,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2029,
                        "end": 2035,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2029,
                          "end": 2035,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2022,
                    "end": 2028,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 1997,
                "end": 2009,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1997,
                  "end": 2009,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1988,
                "end": 1994,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2047,
      "end": 2135,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2054,
        "end": 2135,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2059,
          "end": 2079,
          "decorators": [],
          "name": "ArrowRendererHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2082,
          "end": 2134,
          "params": [
            {
              "type": "Identifier",
              "start": 2083,
              "end": 2108,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2088,
                "end": 2108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2090,
                  "end": 2108,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2090,
                    "end": 2108,
                    "decorators": [],
                    "name": "ArrowRendererProps",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2113,
                "end": 2134,
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2136,
      "end": 2199,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2143,
        "end": 2199,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2148,
          "end": 2168,
          "decorators": [],
          "name": "ClearRendererHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2171,
          "end": 2198,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2174,
            "end": 2198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2177,
              "end": 2198,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2177,
                "end": 2198,
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2200,
      "end": 2309,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2207,
        "end": 2309,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2212,
          "end": 2231,
          "decorators": [],
          "name": "FilterOptionHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2257,
          "end": 2308,
          "params": [
            {
              "type": "Identifier",
              "start": 2258,
              "end": 2280,
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2264,
                "end": 2280,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2266,
                  "end": 2280,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2272,
                    "end": 2280,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2273,
                        "end": 2279,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2273,
                          "end": 2279,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2266,
                    "end": 2272,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 2282,
              "end": 2296,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2288,
                "end": 2296,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2290,
                  "end": 2296
                }
              }
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
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 2241,
                "end": 2253,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2241,
                  "end": 2253,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 2232,
                "end": 2238,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2310,
      "end": 2462,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2317,
        "end": 2462,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2322,
          "end": 2342,
          "decorators": [],
          "name": "FilterOptionsHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2368,
          "end": 2461,
          "params": [
            {
              "type": "Identifier",
              "start": 2369,
              "end": 2393,
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2376,
                "end": 2393,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2378,
                  "end": 2393,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2385,
                    "end": 2393,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2386,
                        "end": 2392,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2386,
                          "end": 2392,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2378,
                    "end": 2385,
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 2395,
              "end": 2409,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2401,
                "end": 2409,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2403,
                  "end": 2409
                }
              }
            },
            {
              "type": "Identifier",
              "start": 2411,
              "end": 2441,
              "decorators": [],
              "name": "currentValues",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2424,
                "end": 2441,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2426,
                  "end": 2441,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2433,
                    "end": 2441,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2434,
                        "end": 2440,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2434,
                          "end": 2440,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2426,
                    "end": 2433,
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2453,
                "end": 2461,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2454,
                    "end": 2460,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2454,
                      "end": 2460,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2446,
                "end": 2453,
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 2352,
                "end": 2364,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2352,
                  "end": 2364,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 2343,
                "end": 2349,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2463,
      "end": 2555,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2470,
        "end": 2555,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2475,
          "end": 2495,
          "decorators": [],
          "name": "InputRendererHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2498,
          "end": 2554,
          "params": [
            {
              "type": "Identifier",
              "start": 2499,
              "end": 2528,
              "decorators": [],
              "name": "props",
              "optional": false,
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
                      "accessibility": null,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 2509,
                          "end": 2520,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2512,
                            "end": 2520,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2514,
                              "end": 2520
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2521,
                        "end": 2526,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2523,
                          "end": 2526
                        }
                      }
                    }
                  ]
                }
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2533,
                "end": 2554,
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2556,
      "end": 2673,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2563,
        "end": 2673,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2568,
          "end": 2587,
          "decorators": [],
          "name": "MenuRendererHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2613,
          "end": 2672,
          "params": [
            {
              "type": "Identifier",
              "start": 2614,
              "end": 2646,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2619,
                "end": 2646,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2621,
                  "end": 2646,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2638,
                    "end": 2646,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2639,
                        "end": 2645,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2639,
                          "end": 2645,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2621,
                    "end": 2638,
                    "decorators": [],
                    "name": "MenuRendererProps",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2651,
                "end": 2672,
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 2597,
                "end": 2609,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2597,
                  "end": 2609,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 2588,
                "end": 2594,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2674,
      "end": 2714,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2681,
        "end": 2714,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2686,
          "end": 2700,
          "decorators": [],
          "name": "OnCloseHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2703,
          "end": 2713,
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
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2715,
      "end": 2781,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2722,
        "end": 2781,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2727,
          "end": 2747,
          "decorators": [],
          "name": "OnInputChangeHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2750,
          "end": 2780,
          "params": [
            {
              "type": "Identifier",
              "start": 2751,
              "end": 2769,
              "decorators": [],
              "name": "inputValue",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2761,
                "end": 2769,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 2763,
                  "end": 2769
                }
              }
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
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2782,
      "end": 2880,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2789,
        "end": 2880,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2794,
          "end": 2815,
          "decorators": [],
          "name": "OnInputKeyDownHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2818,
          "end": 2879,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2845,
                      "end": 2859,
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2862,
                    "end": 2878,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2862,
                      "end": 2878,
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 2818,
            "end": 2844,
            "left": {
              "type": "Identifier",
              "start": 2818,
              "end": 2823,
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 2824,
              "end": 2844,
              "decorators": [],
              "name": "KeyboardEventHandler",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2881,
      "end": 2934,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2888,
        "end": 2934,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2893,
          "end": 2920,
          "decorators": [],
          "name": "OnMenuScrollToBottomHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2923,
          "end": 2933,
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
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2935,
      "end": 2974,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2942,
        "end": 2974,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2947,
          "end": 2960,
          "decorators": [],
          "name": "OnOpenHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2963,
          "end": 2973,
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
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2975,
      "end": 3063,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2982,
        "end": 3063,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2987,
          "end": 3001,
          "decorators": [],
          "name": "OnFocusHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3004,
          "end": 3062,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3028,
                      "end": 3042,
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3045,
                    "end": 3061,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3045,
                      "end": 3061,
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 3004,
            "end": 3027,
            "left": {
              "type": "Identifier",
              "start": 3004,
              "end": 3009,
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 3010,
              "end": 3027,
              "decorators": [],
              "name": "FocusEventHandler",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3064,
      "end": 3151,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3071,
        "end": 3151,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3076,
          "end": 3089,
          "decorators": [],
          "name": "OnBlurHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3092,
          "end": 3150,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3116,
                      "end": 3130,
                      "decorators": [],
                      "name": "HTMLDivElement",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3133,
                    "end": 3149,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3133,
                      "end": 3149,
                      "decorators": [],
                      "name": "HTMLInputElement",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 3092,
            "end": 3115,
            "left": {
              "type": "Identifier",
              "start": 3092,
              "end": 3097,
              "decorators": [],
              "name": "React",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 3098,
              "end": 3115,
              "decorators": [],
              "name": "FocusEventHandler",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3152,
      "end": 3261,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3159,
        "end": 3261,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3164,
          "end": 3185,
          "decorators": [],
          "name": "OptionRendererHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3211,
          "end": 3260,
          "params": [
            {
              "type": "Identifier",
              "start": 3212,
              "end": 3234,
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3218,
                "end": 3234,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3220,
                  "end": 3234,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3226,
                    "end": 3234,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3227,
                        "end": 3233,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3227,
                          "end": 3233,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3220,
                    "end": 3226,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3239,
                "end": 3260,
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3195,
                "end": 3207,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3195,
                  "end": 3207,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3186,
                "end": 3192,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3262,
      "end": 3386,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3269,
        "end": 3386,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3274,
          "end": 3294,
          "decorators": [],
          "name": "ValueRendererHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3320,
          "end": 3385,
          "params": [
            {
              "type": "Identifier",
              "start": 3321,
              "end": 3343,
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3327,
                "end": 3343,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3329,
                  "end": 3343,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3335,
                    "end": 3343,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3336,
                        "end": 3342,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3336,
                          "end": 3342,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3329,
                    "end": 3335,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 3345,
              "end": 3359,
              "decorators": [],
              "name": "index",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3351,
                "end": 3359,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3353,
                  "end": 3359
                }
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3364,
                "end": 3385,
                "decorators": [],
                "name": "HandlerRendererResult",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3304,
                "end": 3316,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3304,
                  "end": 3316,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3295,
                "end": 3301,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3387,
      "end": 3521,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3394,
        "end": 3521,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3399,
          "end": 3418,
          "decorators": [],
          "name": "OnValueClickHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3444,
          "end": 3520,
          "params": [
            {
              "type": "Identifier",
              "start": 3445,
              "end": 3467,
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3451,
                "end": 3467,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3453,
                  "end": 3467,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3459,
                    "end": 3467,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3460,
                        "end": 3466,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3460,
                          "end": 3466,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3453,
                    "end": 3459,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "Identifier",
              "start": 3469,
              "end": 3511,
              "decorators": [],
              "name": "event",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3474,
                "end": 3511,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3476,
                  "end": 3511,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3492,
                    "end": 3511,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3493,
                        "end": 3510,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3493,
                          "end": 3510,
                          "decorators": [],
                          "name": "HTMLAnchorElement",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 3476,
                    "end": 3492,
                    "left": {
                      "type": "Identifier",
                      "start": 3476,
                      "end": 3481,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3482,
                      "end": 3492,
                      "decorators": [],
                      "name": "MouseEvent",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
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
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3428,
                "end": 3440,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3428,
                  "end": 3440,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3419,
                "end": 3425,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3522,
      "end": 3688,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3529,
        "end": 3688,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3534,
          "end": 3555,
          "decorators": [],
          "name": "IsOptionUniqueHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3581,
          "end": 3687,
          "params": [
            {
              "type": "Identifier",
              "start": 3582,
              "end": 3675,
              "decorators": [],
              "name": "arg",
              "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3589,
                        "end": 3595,
                        "decorators": [],
                        "name": "option",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3595,
                        "end": 3611,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3597,
                          "end": 3611,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3603,
                            "end": 3611,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3604,
                                "end": 3610,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3604,
                                  "end": 3610,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 3597,
                            "end": 3603,
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3613,
                      "end": 3638,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3613,
                        "end": 3620,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3620,
                        "end": 3637,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3622,
                          "end": 3637,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3629,
                            "end": 3637,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3630,
                                "end": 3636,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3630,
                                  "end": 3636,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 3622,
                            "end": 3629,
                            "decorators": [],
                            "name": "Options",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3639,
                      "end": 3656,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3639,
                        "end": 3647,
                        "decorators": [],
                        "name": "labelKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3647,
                        "end": 3655,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3649,
                          "end": 3655
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3657,
                      "end": 3673,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3657,
                        "end": 3665,
                        "decorators": [],
                        "name": "valueKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3665,
                        "end": 3673,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3667,
                          "end": 3673
                        }
                      }
                    }
                  ]
                }
              }
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
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3565,
                "end": 3577,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3565,
                  "end": 3577,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3556,
                "end": 3562,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3689,
      "end": 3763,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3696,
        "end": 3763,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3701,
          "end": 3724,
          "decorators": [],
          "name": "IsValidNewOptionHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3727,
          "end": 3762,
          "params": [
            {
              "type": "Identifier",
              "start": 3728,
              "end": 3750,
              "decorators": [],
              "name": "arg",
              "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3735,
                        "end": 3740,
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3740,
                        "end": 3748,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3742,
                          "end": 3748
                        }
                      }
                    }
                  ]
                }
              }
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
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3764,
      "end": 3904,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3771,
        "end": 3904,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3776,
          "end": 3799,
          "decorators": [],
          "name": "NewOptionCreatorHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3825,
          "end": 3903,
          "params": [
            {
              "type": "Identifier",
              "start": 3826,
              "end": 3884,
              "decorators": [],
              "name": "arg",
              "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3833,
                        "end": 3838,
                        "decorators": [],
                        "name": "label",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3838,
                        "end": 3846,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3840,
                          "end": 3846
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3848,
                      "end": 3865,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3848,
                        "end": 3856,
                        "decorators": [],
                        "name": "labelKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3856,
                        "end": 3864,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3858,
                          "end": 3864
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3866,
                      "end": 3882,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3866,
                        "end": 3874,
                        "decorators": [],
                        "name": "valueKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3874,
                        "end": 3882,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3876,
                          "end": 3882
                        }
                      }
                    }
                  ]
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3895,
                "end": 3903,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3896,
                    "end": 3902,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3896,
                      "end": 3902,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3889,
                "end": 3895,
                "decorators": [],
                "name": "Option",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 3809,
                "end": 3821,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3809,
                  "end": 3821,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3800,
                "end": 3806,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3905,
      "end": 3975,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3912,
        "end": 3975,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3917,
          "end": 3941,
          "decorators": [],
          "name": "PromptTextCreatorHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 3944,
          "end": 3974,
          "params": [
            {
              "type": "Identifier",
              "start": 3945,
              "end": 3963,
              "decorators": [],
              "name": "filterText",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3955,
                "end": 3963,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3957,
                  "end": 3963
                }
              }
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
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3976,
      "end": 4069,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3983,
        "end": 4069,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3988,
          "end": 4028,
          "decorators": [],
          "name": "ShouldKeyDownEventCreateNewOptionHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4031,
          "end": 4068,
          "params": [
            {
              "type": "Identifier",
              "start": 4032,
              "end": 4056,
              "decorators": [],
              "name": "arg",
              "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4039,
                        "end": 4046,
                        "decorators": [],
                        "name": "keyCode",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4046,
                        "end": 4054,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4048,
                          "end": 4054
                        }
                      }
                    }
                  ]
                }
              }
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
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4071,
      "end": 4170,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4078,
        "end": 4170,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 4083,
          "end": 4104,
          "decorators": [],
          "name": "OnChangeSingleHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4130,
          "end": 4169,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4145,
            "end": 4169,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4146,
                "end": 4152,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4146,
                  "end": 4152,
                  "decorators": [],
                  "name": "TValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 4154,
                "end": 4168,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4160,
                  "end": 4168,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4161,
                      "end": 4167,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4161,
                        "end": 4167,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4154,
                  "end": 4160,
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 4130,
            "end": 4145,
            "decorators": [],
            "name": "OnChangeHandler",
            "optional": false,
            "typeAnnotation": null
          }
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4114,
                "end": 4126,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4114,
                  "end": 4126,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4105,
                "end": 4111,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4171,
      "end": 4273,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4178,
        "end": 4273,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 4183,
          "end": 4206,
          "decorators": [],
          "name": "OnChangeMultipleHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4232,
          "end": 4272,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4247,
            "end": 4272,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4248,
                "end": 4254,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4248,
                  "end": 4254,
                  "decorators": [],
                  "name": "TValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 4256,
                "end": 4271,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4263,
                  "end": 4271,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4264,
                      "end": 4270,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4264,
                        "end": 4270,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4256,
                  "end": 4263,
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 4232,
            "end": 4247,
            "decorators": [],
            "name": "OnChangeHandler",
            "optional": false,
            "typeAnnotation": null
          }
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4216,
                "end": 4228,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4216,
                  "end": 4228,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4207,
                "end": 4213,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4274,
      "end": 4406,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4281,
        "end": 4406,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 4286,
          "end": 4301,
          "decorators": [],
          "name": "OnChangeHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4371,
          "end": 4405,
          "params": [
            {
              "type": "Identifier",
              "start": 4372,
              "end": 4396,
              "decorators": [],
              "name": "newValue",
              "optional": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4382,
                        "end": 4389,
                        "decorators": [],
                        "name": "TOption",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 4392,
                      "end": 4396
                    }
                  ]
                }
              }
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
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4311,
                "end": 4323,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4311,
                  "end": 4323,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4302,
                "end": 4308,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 4325,
              "end": 4367,
              "const": false,
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4341,
                      "end": 4349,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4342,
                          "end": 4348,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4342,
                            "end": 4348,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4335,
                      "end": 4341,
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 4352,
                    "end": 4367,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4359,
                      "end": 4367,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4360,
                          "end": 4366,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4360,
                            "end": 4366,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4352,
                      "end": 4359,
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4325,
                "end": 4332,
                "decorators": [],
                "name": "TOption",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4407,
      "end": 4501,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4414,
        "end": 4501,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 4419,
          "end": 4442,
          "decorators": [],
          "name": "OnNewOptionClickHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4468,
          "end": 4500,
          "params": [
            {
              "type": "Identifier",
              "start": 4469,
              "end": 4491,
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4475,
                "end": 4491,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4477,
                  "end": 4491,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4483,
                    "end": 4491,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 4484,
                        "end": 4490,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4484,
                          "end": 4490,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 4477,
                    "end": 4483,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
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
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4452,
                "end": 4464,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4452,
                  "end": 4464,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4443,
                "end": 4449,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4503,
      "end": 4626,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4510,
        "end": 4626,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 4515,
          "end": 4533,
          "decorators": [],
          "name": "LoadOptionsHandler",
          "optional": false,
          "typeAnnotation": null
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4582,
                "end": 4590,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4583,
                    "end": 4589,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4583,
                      "end": 4589,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4559,
                "end": 4582,
                "decorators": [],
                "name": "LoadOptionsAsyncHandler",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4593,
              "end": 4625,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4617,
                "end": 4625,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4618,
                    "end": 4624,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4618,
                      "end": 4624,
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4593,
                "end": 4617,
                "decorators": [],
                "name": "LoadOptionsLegacyHandler",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4543,
                "end": 4555,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4543,
                  "end": 4555,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4534,
                "end": 4540,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4627,
      "end": 4743,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4634,
        "end": 4743,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 4639,
          "end": 4662,
          "decorators": [],
          "name": "LoadOptionsAsyncHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4688,
          "end": 4742,
          "params": [
            {
              "type": "Identifier",
              "start": 4689,
              "end": 4702,
              "decorators": [],
              "name": "input",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4694,
                "end": 4702,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4696,
                  "end": 4702
                }
              }
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4714,
                "end": 4742,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4715,
                    "end": 4741,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4733,
                      "end": 4741,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4734,
                          "end": 4740,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4734,
                            "end": 4740,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4715,
                      "end": 4733,
                      "decorators": [],
                      "name": "AutocompleteResult",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4707,
                "end": 4714,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4672,
                "end": 4684,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4672,
                  "end": 4684,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4663,
                "end": 4669,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4744,
      "end": 4896,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4751,
        "end": 4896,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 4756,
          "end": 4780,
          "decorators": [],
          "name": "LoadOptionsLegacyHandler",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 4806,
          "end": 4895,
          "params": [
            {
              "type": "Identifier",
              "start": 4807,
              "end": 4820,
              "decorators": [],
              "name": "input",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4812,
                "end": 4820,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4814,
                  "end": 4820
                }
              }
            },
            {
              "type": "Identifier",
              "start": 4822,
              "end": 4886,
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4830,
                "end": 4886,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 4832,
                  "end": 4886,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4833,
                      "end": 4841,
                      "decorators": [],
                      "name": "err",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4836,
                        "end": 4841,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 4838,
                          "end": 4841
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 4843,
                      "end": 4877,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4849,
                        "end": 4877,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4851,
                          "end": 4877,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4869,
                            "end": 4877,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4870,
                                "end": 4876,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4870,
                                  "end": 4876,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 4851,
                            "end": 4869,
                            "decorators": [],
                            "name": "AutocompleteResult",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
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
                  },
                  "typeParameters": null
                }
              }
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
          },
          "typeParameters": null
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4790,
                "end": 4802,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4790,
                  "end": 4802,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4781,
                "end": 4787,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4898,
      "end": 5278,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 4905,
        "end": 5278,
        "body": {
          "type": "TSInterfaceBody",
          "start": 4957,
          "end": 5278,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 5010,
              "end": 5035,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5010,
                "end": 5017,
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5017,
                "end": 5034,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5019,
                  "end": 5034,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 5026,
                    "end": 5034,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 5027,
                        "end": 5033,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5027,
                          "end": 5033,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 5019,
                    "end": 5026,
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 5258,
              "end": 5276,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5258,
                "end": 5266,
                "decorators": [],
                "name": "complete",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5266,
                "end": 5275,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5268,
                  "end": 5275
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 4915,
          "end": 4933,
          "decorators": [],
          "name": "AutocompleteResult",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4933,
          "end": 4956,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4934,
              "end": 4955,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 4943,
                "end": 4955,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4943,
                  "end": 4955,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4934,
                "end": 4940,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5280,
      "end": 5347,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 5287,
        "end": 5347,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 5292,
          "end": 5299,
          "decorators": [],
          "name": "Options",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 5325,
          "end": 5346,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5330,
            "end": 5346,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 5331,
                "end": 5345,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5337,
                  "end": 5345,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 5338,
                      "end": 5344,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5338,
                        "end": 5344,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 5331,
                  "end": 5337,
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 5325,
            "end": 5330,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          }
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
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 5309,
                "end": 5321,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5309,
                  "end": 5321,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 5300,
                "end": 5306,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5349,
      "end": 5916,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 5356,
        "end": 5916,
        "body": {
          "type": "TSInterfaceBody",
          "start": 5396,
          "end": 5916,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 5432,
              "end": 5447,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5432,
                "end": 5437,
                "decorators": [],
                "name": "label",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5438,
                "end": 5446,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 5440,
                  "end": 5446
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 5483,
              "end": 5498,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5483,
                "end": 5488,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5489,
                "end": 5497,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 5491,
                  "end": 5497,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5491,
                    "end": 5497,
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 5579,
              "end": 5604,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5579,
                "end": 5593,
                "decorators": [],
                "name": "clearableValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5594,
                "end": 5603,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5596,
                  "end": 5603
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 5694,
              "end": 5713,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 5694,
                "end": 5702,
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5703,
                "end": 5712,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 5705,
                  "end": 5712
                }
              }
            },
            {
              "type": "TSIndexSignature",
              "start": 5890,
              "end": 5914,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 5891,
                  "end": 5907,
                  "decorators": [],
                  "name": "property",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5899,
                    "end": 5907,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5901,
                      "end": 5907
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5908,
                "end": 5913,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 5910,
                  "end": 5913
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 5366,
          "end": 5372,
          "decorators": [],
          "name": "Option",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 5372,
          "end": 5395,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 5373,
              "end": 5394,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 5382,
                "end": 5394,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5382,
                  "end": 5394,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 5373,
                "end": 5379,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5918,
      "end": 5971,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 5925,
        "end": 5971,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 5930,
          "end": 5942,
          "decorators": [],
          "name": "OptionValues",
          "optional": false,
          "typeAnnotation": null
        },
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
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5973,
      "end": 7030,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 5980,
        "end": 7030,
        "body": {
          "type": "TSInterfaceBody",
          "start": 6031,
          "end": 7030,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 6150,
              "end": 6180,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6150,
                "end": 6163,
                "decorators": [],
                "name": "focusedOption",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6163,
                "end": 6179,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6165,
                  "end": 6179,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6171,
                    "end": 6179,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6172,
                        "end": 6178,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6172,
                          "end": 6178,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6165,
                    "end": 6171,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 6277,
              "end": 6317,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6277,
                "end": 6288,
                "decorators": [],
                "name": "focusOption",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6288,
                "end": 6316,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6290,
                  "end": 6316,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6308,
                    "end": 6316,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6309,
                        "end": 6315,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6309,
                          "end": 6315,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6290,
                    "end": 6308,
                    "decorators": [],
                    "name": "FocusOptionHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 6397,
              "end": 6414,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6397,
                "end": 6405,
                "decorators": [],
                "name": "labelKey",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6405,
                "end": 6413,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 6407,
                  "end": 6413
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 6479,
              "end": 6504,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6479,
                "end": 6486,
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6486,
                "end": 6503,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6488,
                  "end": 6503,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6495,
                    "end": 6503,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6496,
                        "end": 6502,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6496,
                          "end": 6502,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6488,
                    "end": 6495,
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 6602,
              "end": 6642,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6602,
                "end": 6613,
                "decorators": [],
                "name": "selectValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6613,
                "end": 6641,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6615,
                  "end": 6641,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6633,
                    "end": 6641,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6634,
                        "end": 6640,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6634,
                          "end": 6640,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6615,
                    "end": 6633,
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 6708,
              "end": 6736,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6708,
                "end": 6718,
                "decorators": [],
                "name": "valueArray",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6718,
                "end": 6735,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6720,
                  "end": 6735,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6727,
                    "end": 6735,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6728,
                        "end": 6734,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6728,
                          "end": 6734,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6720,
                    "end": 6727,
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 6843,
              "end": 6883,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6843,
                "end": 6854,
                "decorators": [],
                "name": "removeValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6854,
                "end": 6882,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6856,
                  "end": 6882,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6874,
                    "end": 6882,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 6875,
                        "end": 6881,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 6875,
                          "end": 6881,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6856,
                    "end": 6874,
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 6982,
              "end": 7028,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6982,
                "end": 6996,
                "decorators": [],
                "name": "optionRenderer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 6996,
                "end": 7027,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6998,
                  "end": 7027,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 7019,
                    "end": 7027,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 7020,
                        "end": 7026,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7020,
                          "end": 7026,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6998,
                    "end": 7019,
                    "decorators": [],
                    "name": "OptionRendererHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 5990,
          "end": 6007,
          "decorators": [],
          "name": "MenuRendererProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 6007,
          "end": 6030,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 6008,
              "end": 6029,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 6017,
                "end": 6029,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 6017,
                  "end": 6029,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 6008,
                "end": 6014,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7032,
      "end": 8392,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7039,
        "end": 8392,
        "body": {
          "type": "TSInterfaceBody",
          "start": 7093,
          "end": 8392,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 7169,
              "end": 7188,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7169,
                "end": 7178,
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7179,
                "end": 7187,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7181,
                  "end": 7187
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7243,
              "end": 7272,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7243,
                "end": 7254,
                "decorators": [],
                "name": "focusOption",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7255,
                "end": 7271,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 7257,
                  "end": 7271,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 7263,
                    "end": 7271,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 7264,
                        "end": 7270,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7264,
                          "end": 7270,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 7257,
                    "end": 7263,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7278,
              "end": 7298,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7278,
                "end": 7288,
                "decorators": [],
                "name": "inputValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7289,
                "end": 7297,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7291,
                  "end": 7297
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7303,
              "end": 7327,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7303,
                "end": 7317,
                "decorators": [],
                "name": "instancePrefix",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7318,
                "end": 7326,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7320,
                  "end": 7326
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7389,
              "end": 7410,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7389,
                "end": 7399,
                "decorators": [],
                "name": "isDisabled",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7400,
                "end": 7409,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7402,
                  "end": 7409
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7471,
              "end": 7491,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7471,
                "end": 7480,
                "decorators": [],
                "name": "isFocused",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7481,
                "end": 7490,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7483,
                  "end": 7490
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7553,
              "end": 7574,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7553,
                "end": 7563,
                "decorators": [],
                "name": "isSelected",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7564,
                "end": 7573,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 7566,
                  "end": 7573
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7655,
              "end": 7710,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7655,
                "end": 7662,
                "decorators": [],
                "name": "onFocus",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7663,
                "end": 7709,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 7665,
                  "end": 7709,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7666,
                      "end": 7688,
                      "decorators": [],
                      "name": "option",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7672,
                        "end": 7688,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7674,
                          "end": 7688,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 7680,
                            "end": 7688,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 7681,
                                "end": 7687,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7681,
                                  "end": 7687,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 7674,
                            "end": 7680,
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 7690,
                      "end": 7700,
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7695,
                        "end": 7700,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 7697,
                          "end": 7700
                        }
                      }
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
                  },
                  "typeParameters": null
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7792,
              "end": 7848,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7792,
                "end": 7800,
                "decorators": [],
                "name": "onSelect",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7801,
                "end": 7847,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 7803,
                  "end": 7847,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7804,
                      "end": 7826,
                      "decorators": [],
                      "name": "option",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7810,
                        "end": 7826,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7812,
                          "end": 7826,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 7818,
                            "end": 7826,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 7819,
                                "end": 7825,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7819,
                                  "end": 7825,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 7812,
                            "end": 7818,
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 7828,
                      "end": 7838,
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7833,
                        "end": 7838,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 7835,
                          "end": 7838
                        }
                      }
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
                  },
                  "typeParameters": null
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 7918,
              "end": 7941,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 7918,
                "end": 7924,
                "decorators": [],
                "name": "option",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 7924,
                "end": 7940,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 7926,
                  "end": 7940,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 7932,
                    "end": 7940,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 7933,
                        "end": 7939,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7933,
                          "end": 7939,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 7926,
                    "end": 7932,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8017,
              "end": 8038,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8017,
                "end": 8028,
                "decorators": [],
                "name": "optionIndex",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8029,
                "end": 8037,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 8031,
                  "end": 8037
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8182,
              "end": 8231,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8182,
                "end": 8193,
                "decorators": [],
                "name": "removeValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8194,
                "end": 8230,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 8196,
                  "end": 8230,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 8197,
                      "end": 8221,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8204,
                                "end": 8210,
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSArrayType",
                              "start": 8213,
                              "end": 8221,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 8213,
                                "end": 8219,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8213,
                                  "end": 8219,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        }
                      }
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
                  },
                  "typeParameters": null
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8341,
              "end": 8390,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8341,
                "end": 8352,
                "decorators": [],
                "name": "selectValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8353,
                "end": 8389,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 8355,
                  "end": 8389,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 8356,
                      "end": 8380,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8363,
                                "end": 8369,
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSArrayType",
                              "start": 8372,
                              "end": 8380,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 8372,
                                "end": 8378,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8372,
                                  "end": 8378,
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        }
                      }
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
                  },
                  "typeParameters": null
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 7049,
          "end": 7069,
          "decorators": [],
          "name": "OptionComponentProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 7069,
          "end": 7092,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 7070,
              "end": 7091,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 7079,
                "end": 7091,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 7079,
                  "end": 7091,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 7070,
                "end": 7076,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8394,
      "end": 8615,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 8401,
        "end": 8615,
        "body": {
          "type": "TSInterfaceBody",
          "start": 8430,
          "end": 8615,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 8491,
              "end": 8533,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8491,
                "end": 8502,
                "decorators": [],
                "name": "onMouseDown",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8502,
                "end": 8532,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8504,
                  "end": 8532,
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
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 8504,
                    "end": 8527,
                    "left": {
                      "type": "Identifier",
                      "start": 8504,
                      "end": 8509,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 8510,
                      "end": 8527,
                      "decorators": [],
                      "name": "MouseEventHandler",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8597,
              "end": 8613,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8597,
                "end": 8603,
                "decorators": [],
                "name": "isOpen",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8603,
                "end": 8612,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 8605,
                  "end": 8612
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 8411,
          "end": 8429,
          "decorators": [],
          "name": "ArrowRendererProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8617,
      "end": 8989,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 8624,
        "end": 8989,
        "body": {
          "type": "TSInterfaceBody",
          "start": 8677,
          "end": 8989,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 8683,
              "end": 8730,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8683,
                "end": 8691,
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8691,
                "end": 8729,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 8693,
                  "end": 8729,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 8718,
                    "end": 8728,
                    "literal": {
                      "type": "Literal",
                      "start": 8718,
                      "end": 8728,
                      "raw": "'disabled'",
                      "value": "disabled"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 8693,
                    "end": 8717,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 8709,
                      "end": 8717,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 8710,
                          "end": 8716,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8710,
                            "end": 8716,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 8693,
                      "end": 8709,
                      "decorators": [],
                      "name": "ReactSelectProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8735,
              "end": 8746,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8735,
                "end": 8737,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8737,
                "end": 8745,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8739,
                  "end": 8745
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8751,
              "end": 8774,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8751,
                "end": 8765,
                "decorators": [],
                "name": "instancePrefix",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8765,
                "end": 8773,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8767,
                  "end": 8773
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8779,
              "end": 8823,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8779,
                "end": 8786,
                "decorators": [],
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 8807,
                        "end": 8815,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 8808,
                            "end": 8814,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 8808,
                              "end": 8814,
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 8788,
                        "end": 8807,
                        "decorators": [],
                        "name": "OnValueClickHandler",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 8818,
                      "end": 8822
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8828,
              "end": 8866,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8828,
                "end": 8836,
                "decorators": [],
                "name": "onRemove",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8837,
                "end": 8865,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8839,
                  "end": 8865,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8857,
                    "end": 8865,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 8858,
                        "end": 8864,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8858,
                          "end": 8864,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 8839,
                    "end": 8857,
                    "decorators": [],
                    "name": "SelectValueHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8871,
              "end": 8924,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8871,
                "end": 8882,
                "decorators": [],
                "name": "placeholder",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8882,
                "end": 8923,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 8884,
                  "end": 8923,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 8909,
                    "end": 8922,
                    "literal": {
                      "type": "Literal",
                      "start": 8909,
                      "end": 8922,
                      "raw": "'placeholder'",
                      "value": "placeholder"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 8884,
                    "end": 8908,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 8900,
                      "end": 8908,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 8901,
                          "end": 8907,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8901,
                            "end": 8907,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 8884,
                      "end": 8900,
                      "decorators": [],
                      "name": "ReactSelectProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8929,
              "end": 8951,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8929,
                "end": 8934,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8934,
                "end": 8950,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8936,
                  "end": 8950,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8942,
                    "end": 8950,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 8943,
                        "end": 8949,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8943,
                          "end": 8949,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 8936,
                    "end": 8942,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 8956,
              "end": 8987,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 8956,
                "end": 8962,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8963,
                "end": 8986,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8965,
                  "end": 8986,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 8970,
                    "end": 8986,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 8971,
                        "end": 8985,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 8977,
                          "end": 8985,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 8978,
                              "end": 8984,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 8978,
                                "end": 8984,
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 8971,
                          "end": 8977,
                          "decorators": [],
                          "name": "Option",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 8965,
                    "end": 8970,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 8634,
          "end": 8653,
          "decorators": [],
          "name": "ValueComponentProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 8653,
          "end": 8676,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 8654,
              "end": 8675,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 8663,
                "end": 8675,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 8663,
                  "end": 8675,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 8654,
                "end": 8660,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8991,
      "end": 18589,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 8998,
        "end": 18589,
        "body": {
          "type": "TSInterfaceBody",
          "start": 9094,
          "end": 18589,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 9200,
              "end": 9222,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 9200,
                "end": 9212,
                "decorators": [],
                "name": "addLabelText",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9213,
                "end": 9221,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 9215,
                  "end": 9221
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 9359,
              "end": 9403,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 9359,
                "end": 9372,
                "decorators": [],
                "name": "arrowRenderer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9375,
                        "end": 9395,
                        "decorators": [],
                        "name": "ArrowRendererHandler",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 9398,
                      "end": 9402
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 9561,
              "end": 9580,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 9561,
                "end": 9569,
                "decorators": [],
                "name": "autoBlur",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9570,
                "end": 9579,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9572,
                  "end": 9579
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 9705,
              "end": 9725,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 9705,
                "end": 9714,
                "decorators": [],
                "name": "autofocus",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9715,
                "end": 9724,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9717,
                  "end": 9724
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 9808,
              "end": 9828,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 9808,
                "end": 9817,
                "decorators": [],
                "name": "autoFocus",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9818,
                "end": 9827,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9820,
                  "end": 9827
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 9928,
              "end": 9947,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 9928,
                "end": 9936,
                "decorators": [],
                "name": "autosize",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 9937,
                "end": 9946,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 9939,
                  "end": 9946
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 10074,
              "end": 10101,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 10074,
                "end": 10090,
                "decorators": [],
                "name": "backspaceRemoves",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10091,
                "end": 10100,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 10093,
                  "end": 10100
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 10302,
              "end": 10336,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 10302,
                "end": 10326,
                "decorators": [],
                "name": "backspaceToRemoveMessage",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10327,
                "end": 10335,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10329,
                  "end": 10335
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 10400,
              "end": 10419,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 10400,
                "end": 10409,
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10410,
                "end": 10418,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10412,
                  "end": 10418
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 10520,
              "end": 10545,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 10520,
                "end": 10535,
                "decorators": [],
                "name": "classNamePrefix",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10536,
                "end": 10544,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10538,
                  "end": 10544
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 10652,
              "end": 10674,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 10652,
                "end": 10664,
                "decorators": [],
                "name": "clearAllText",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10665,
                "end": 10673,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10667,
                  "end": 10673
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 10820,
              "end": 10857,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 10820,
                "end": 10833,
                "decorators": [],
                "name": "clearRenderer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10834,
                "end": 10856,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 10836,
                  "end": 10856,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 10836,
                    "end": 10856,
                    "decorators": [],
                    "name": "ClearRendererHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 10945,
              "end": 10969,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 10945,
                "end": 10959,
                "decorators": [],
                "name": "clearValueText",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 10960,
                "end": 10968,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 10962,
                  "end": 10968
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 11069,
              "end": 11093,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 11069,
                "end": 11082,
                "decorators": [],
                "name": "closeOnSelect",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11083,
                "end": 11092,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11085,
                  "end": 11092
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 11236,
              "end": 11256,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 11236,
                "end": 11245,
                "decorators": [],
                "name": "clearable",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11246,
                "end": 11255,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11248,
                  "end": 11255
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 11365,
              "end": 11389,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 11365,
                "end": 11378,
                "decorators": [],
                "name": "deleteRemoves",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11379,
                "end": 11388,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11381,
                  "end": 11388
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 11478,
              "end": 11497,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 11478,
                "end": 11487,
                "decorators": [],
                "name": "delimiter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11488,
                "end": 11496,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 11490,
                  "end": 11496
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 11585,
              "end": 11604,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 11585,
                "end": 11593,
                "decorators": [],
                "name": "disabled",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11594,
                "end": 11603,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11596,
                  "end": 11603
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 11709,
              "end": 11737,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 11709,
                "end": 11726,
                "decorators": [],
                "name": "escapeClearsValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11727,
                "end": 11736,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 11729,
                  "end": 11736
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 11798,
              "end": 11841,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 11798,
                "end": 11810,
                "decorators": [],
                "name": "filterOption",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11811,
                "end": 11840,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 11813,
                  "end": 11840,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 11832,
                    "end": 11840,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 11833,
                        "end": 11839,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 11833,
                          "end": 11839,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 11813,
                    "end": 11832,
                    "decorators": [],
                    "name": "FilterOptionHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 11904,
              "end": 11949,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 11904,
                "end": 11917,
                "decorators": [],
                "name": "filterOptions",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 11918,
                "end": 11948,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 11920,
                  "end": 11948,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 11940,
                    "end": 11948,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 11941,
                        "end": 11947,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 11941,
                          "end": 11947,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 11920,
                    "end": 11940,
                    "decorators": [],
                    "name": "FilterOptionsHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 12044,
              "end": 12056,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 12044,
                "end": 12046,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12047,
                "end": 12055,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 12049,
                  "end": 12055
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 12148,
              "end": 12172,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 12148,
                "end": 12161,
                "decorators": [],
                "name": "ignoreAccents",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12162,
                "end": 12171,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12164,
                  "end": 12171
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 12267,
              "end": 12288,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 12267,
                "end": 12277,
                "decorators": [],
                "name": "ignoreCase",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12278,
                "end": 12287,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12280,
                  "end": 12287
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 12416,
              "end": 12452,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 12416,
                "end": 12426,
                "decorators": [],
                "name": "inputProps",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
                      "accessibility": null,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 12432,
                          "end": 12443,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 12435,
                            "end": 12443,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 12437,
                              "end": 12443
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 12444,
                        "end": 12449,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 12446,
                          "end": 12449
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 12503,
              "end": 12540,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 12503,
                "end": 12516,
                "decorators": [],
                "name": "inputRenderer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12517,
                "end": 12539,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 12519,
                  "end": 12539,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 12519,
                    "end": 12539,
                    "decorators": [],
                    "name": "InputRendererHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 12699,
              "end": 12719,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 12699,
                "end": 12709,
                "decorators": [],
                "name": "instanceId",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12710,
                "end": 12718,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 12712,
                  "end": 12718
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 12916,
              "end": 12936,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 12916,
                "end": 12925,
                "decorators": [],
                "name": "isLoading",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12926,
                "end": 12935,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 12928,
                  "end": 12935
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 13066,
              "end": 13087,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 13066,
                "end": 13076,
                "decorators": [],
                "name": "joinValues",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13077,
                "end": 13086,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 13079,
                  "end": 13086
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 13180,
              "end": 13198,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 13180,
                "end": 13188,
                "decorators": [],
                "name": "labelKey",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13189,
                "end": 13197,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13191,
                  "end": 13197
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 13309,
              "end": 13327,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 13309,
                "end": 13317,
                "decorators": [],
                "name": "matchPos",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13318,
                "end": 13326,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13320,
                  "end": 13326
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 13432,
              "end": 13451,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 13432,
                "end": 13441,
                "decorators": [],
                "name": "matchProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13442,
                "end": 13450,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 13444,
                  "end": 13450
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 13600,
              "end": 13620,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 13600,
                "end": 13610,
                "decorators": [],
                "name": "menuBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13611,
                "end": 13619,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 13613,
                  "end": 13619
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 13694,
              "end": 13735,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 13694,
                "end": 13712,
                "decorators": [],
                "name": "menuContainerStyle",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13713,
                "end": 13734,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 13715,
                  "end": 13734,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 13715,
                    "end": 13734,
                    "left": {
                      "type": "Identifier",
                      "start": 13715,
                      "end": 13720,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 13721,
                      "end": 13734,
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 13798,
              "end": 13841,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 13798,
                "end": 13810,
                "decorators": [],
                "name": "menuRenderer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13811,
                "end": 13840,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 13813,
                  "end": 13840,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 13832,
                    "end": 13840,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 13833,
                        "end": 13839,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13833,
                          "end": 13839,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 13813,
                    "end": 13832,
                    "decorators": [],
                    "name": "MenuRendererHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 13905,
              "end": 13937,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 13905,
                "end": 13914,
                "decorators": [],
                "name": "menuStyle",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 13915,
                "end": 13936,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 13917,
                  "end": 13936,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 13917,
                    "end": 13936,
                    "left": {
                      "type": "Identifier",
                      "start": 13917,
                      "end": 13922,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 13923,
                      "end": 13936,
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 14005,
              "end": 14021,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14005,
                "end": 14010,
                "decorators": [],
                "name": "multi",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14011,
                "end": 14020,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14013,
                  "end": 14020
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 14086,
              "end": 14100,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14086,
                "end": 14090,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14091,
                "end": 14099,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 14093,
                  "end": 14099
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 14255,
              "end": 14292,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14255,
                "end": 14268,
                "decorators": [],
                "name": "noResultsText",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 14280,
                        "end": 14291,
                        "left": {
                          "type": "Identifier",
                          "start": 14280,
                          "end": 14283,
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 14284,
                          "end": 14291,
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 14356,
              "end": 14379,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14356,
                "end": 14362,
                "decorators": [],
                "name": "onBlur",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14363,
                "end": 14378,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 14365,
                  "end": 14378,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 14365,
                    "end": 14378,
                    "decorators": [],
                    "name": "OnBlurHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 14466,
              "end": 14494,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14466,
                "end": 14483,
                "decorators": [],
                "name": "onBlurResetsInput",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14484,
                "end": 14493,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14486,
                  "end": 14493
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 14753,
              "end": 14783,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14753,
                "end": 14772,
                "decorators": [],
                "name": "onSelectResetsInput",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14773,
                "end": 14782,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14775,
                  "end": 14782
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 14895,
              "end": 14924,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14895,
                "end": 14913,
                "decorators": [],
                "name": "onCloseResetsInput",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14914,
                "end": 14923,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 14916,
                  "end": 14923
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 14993,
              "end": 15028,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14993,
                "end": 15001,
                "decorators": [],
                "name": "onChange",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15002,
                "end": 15027,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15004,
                  "end": 15027,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 15019,
                    "end": 15027,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 15020,
                        "end": 15026,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 15020,
                          "end": 15026,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 15004,
                    "end": 15019,
                    "decorators": [],
                    "name": "OnChangeHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 15086,
              "end": 15111,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15086,
                "end": 15093,
                "decorators": [],
                "name": "onClose",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15094,
                "end": 15110,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15096,
                  "end": 15110,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15096,
                    "end": 15110,
                    "decorators": [],
                    "name": "OnCloseHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 15176,
              "end": 15201,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15176,
                "end": 15183,
                "decorators": [],
                "name": "onFocus",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15184,
                "end": 15200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15186,
                  "end": 15200,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15186,
                    "end": 15200,
                    "decorators": [],
                    "name": "OnFocusHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 15277,
              "end": 15314,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15277,
                "end": 15290,
                "decorators": [],
                "name": "onInputChange",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15291,
                "end": 15313,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15293,
                  "end": 15313,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15293,
                    "end": 15313,
                    "decorators": [],
                    "name": "OnInputChangeHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 15394,
              "end": 15433,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15394,
                "end": 15408,
                "decorators": [],
                "name": "onInputKeyDown",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15409,
                "end": 15432,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15411,
                  "end": 15432,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15411,
                    "end": 15432,
                    "decorators": [],
                    "name": "OnInputKeyDownHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 15540,
              "end": 15591,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15540,
                "end": 15560,
                "decorators": [],
                "name": "onMenuScrollToBottom",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15561,
                "end": 15590,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15563,
                  "end": 15590,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15563,
                    "end": 15590,
                    "decorators": [],
                    "name": "OnMenuScrollToBottomHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 15649,
              "end": 15672,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15649,
                "end": 15655,
                "decorators": [],
                "name": "onOpen",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15656,
                "end": 15671,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 15658,
                  "end": 15671,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15658,
                    "end": 15671,
                    "decorators": [],
                    "name": "OnOpenHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 15770,
              "end": 15792,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15770,
                "end": 15781,
                "decorators": [],
                "name": "openOnClick",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15782,
                "end": 15791,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 15784,
                  "end": 15791
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 15918,
              "end": 15940,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15918,
                "end": 15929,
                "decorators": [],
                "name": "openOnFocus",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 15930,
                "end": 15939,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 15932,
                  "end": 15939
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16010,
              "end": 16035,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16010,
                "end": 16025,
                "decorators": [],
                "name": "optionClassName",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16026,
                "end": 16034,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 16028,
                  "end": 16034
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16102,
              "end": 16148,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16102,
                "end": 16117,
                "decorators": [],
                "name": "optionComponent",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16118,
                "end": 16147,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 16120,
                  "end": 16147,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 16139,
                    "end": 16147,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 16140,
                        "end": 16146,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 16140,
                          "end": 16146,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 16120,
                    "end": 16139,
                    "decorators": [],
                    "name": "OptionComponentType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16246,
              "end": 16293,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16246,
                "end": 16260,
                "decorators": [],
                "name": "optionRenderer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16261,
                "end": 16292,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 16263,
                  "end": 16292,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 16284,
                    "end": 16292,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 16285,
                        "end": 16291,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 16285,
                          "end": 16291,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 16263,
                    "end": 16284,
                    "decorators": [],
                    "name": "OptionRendererHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16367,
              "end": 16393,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16367,
                "end": 16374,
                "decorators": [],
                "name": "options",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16375,
                "end": 16392,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 16377,
                  "end": 16392,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 16384,
                    "end": 16392,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 16385,
                        "end": 16391,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 16385,
                          "end": 16391,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 16377,
                    "end": 16384,
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16494,
              "end": 16512,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16494,
                "end": 16502,
                "decorators": [],
                "name": "pageSize",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16503,
                "end": 16511,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16505,
                  "end": 16511
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16619,
              "end": 16654,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16619,
                "end": 16630,
                "decorators": [],
                "name": "placeholder",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 16642,
                        "end": 16653,
                        "left": {
                          "type": "Identifier",
                          "start": 16642,
                          "end": 16645,
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 16646,
                          "end": 16653,
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16777,
              "end": 16802,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16777,
                "end": 16791,
                "decorators": [],
                "name": "removeSelected",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16792,
                "end": 16801,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 16794,
                  "end": 16801
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16897,
              "end": 16916,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16897,
                "end": 16905,
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16906,
                "end": 16915,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 16908,
                  "end": 16915
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 16984,
              "end": 17001,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16984,
                "end": 16994,
                "decorators": [],
                "name": "resetValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16995,
                "end": 17000,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 16997,
                  "end": 17000
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 17095,
              "end": 17109,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17095,
                "end": 17098,
                "decorators": [],
                "name": "rtl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17099,
                "end": 17108,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17101,
                  "end": 17108
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 17230,
              "end": 17259,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17230,
                "end": 17248,
                "decorators": [],
                "name": "scrollMenuIntoView",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17249,
                "end": 17258,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17251,
                  "end": 17258
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 17352,
              "end": 17373,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17352,
                "end": 17362,
                "decorators": [],
                "name": "searchable",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17363,
                "end": 17372,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17365,
                  "end": 17372
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 17479,
              "end": 17505,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17479,
                "end": 17494,
                "decorators": [],
                "name": "tabSelectsValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17495,
                "end": 17504,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 17497,
                  "end": 17504
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 17553,
              "end": 17644,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17553,
                "end": 17558,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 17567,
                        "end": 17575,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 17568,
                            "end": 17574,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 17568,
                              "end": 17574,
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 17561,
                        "end": 17567,
                        "decorators": [],
                        "name": "Option",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 17578,
                      "end": 17593,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 17585,
                        "end": 17593,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 17586,
                            "end": 17592,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 17586,
                              "end": 17592,
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 17578,
                        "end": 17585,
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null
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
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 17737,
              "end": 17755,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17737,
                "end": 17745,
                "decorators": [],
                "name": "valueKey",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17746,
                "end": 17754,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 17748,
                  "end": 17754
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 17870,
              "end": 17915,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17870,
                "end": 17883,
                "decorators": [],
                "name": "valueRenderer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17884,
                "end": 17914,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 17886,
                  "end": 17914,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 17906,
                    "end": 17914,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 17907,
                        "end": 17913,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 17907,
                          "end": 17913,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 17886,
                    "end": 17906,
                    "decorators": [],
                    "name": "ValueRendererHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 17983,
              "end": 18011,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17983,
                "end": 17988,
                "decorators": [],
                "name": "style",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17989,
                "end": 18010,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 17991,
                  "end": 18010,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 17991,
                    "end": 18010,
                    "left": {
                      "type": "Identifier",
                      "start": 17991,
                      "end": 17996,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 17997,
                      "end": 18010,
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 18075,
              "end": 18102,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 18075,
                "end": 18083,
                "decorators": [],
                "name": "tabIndex",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 18158,
              "end": 18202,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 18158,
                "end": 18172,
                "decorators": [],
                "name": "valueComponent",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18173,
                "end": 18201,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 18175,
                  "end": 18201,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 18193,
                    "end": 18201,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 18194,
                        "end": 18200,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 18194,
                          "end": 18200,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 18175,
                    "end": 18193,
                    "decorators": [],
                    "name": "ValueComponentType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 18281,
              "end": 18316,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 18281,
                "end": 18293,
                "decorators": [],
                "name": "wrapperStyle",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18294,
                "end": 18315,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 18296,
                  "end": 18315,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 18296,
                    "end": 18315,
                    "left": {
                      "type": "Identifier",
                      "start": 18296,
                      "end": 18301,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 18302,
                      "end": 18315,
                      "decorators": [],
                      "name": "CSSProperties",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 18406,
              "end": 18449,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 18406,
                "end": 18418,
                "decorators": [],
                "name": "onValueClick",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18419,
                "end": 18448,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 18421,
                  "end": 18448,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 18440,
                    "end": 18448,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 18441,
                        "end": 18447,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 18441,
                          "end": 18447,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 18421,
                    "end": 18440,
                    "decorators": [],
                    "name": "OnValueClickHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 18565,
              "end": 18587,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 18565,
                "end": 18576,
                "decorators": [],
                "name": "simpleValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 18577,
                "end": 18586,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 18579,
                  "end": 18586
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 9056,
            "end": 9093,
            "expression": {
              "type": "MemberExpression",
              "start": 9056,
              "end": 9067,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9056,
                "end": 9061,
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9062,
                "end": 9067,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 9084,
                    "end": 9092,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 9085,
                        "end": 9091,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9085,
                          "end": 9091,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 9068,
                    "end": 9084,
                    "decorators": [],
                    "name": "ReactSelectClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 9008,
          "end": 9024,
          "decorators": [],
          "name": "ReactSelectProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 9024,
          "end": 9047,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 9025,
              "end": 9046,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 9034,
                "end": 9046,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 9034,
                  "end": 9046,
                  "decorators": [],
                  "name": "OptionValues",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 9025,
                "end": 9031,
                "decorators": [],
                "name": "TValue",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
