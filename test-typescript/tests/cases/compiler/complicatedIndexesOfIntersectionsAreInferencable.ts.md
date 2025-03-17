__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 707,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "name": "FormikConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 29,
              "name": "Values",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 133,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 59,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 50,
              "name": "initialValues",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 58,
                  "name": "Values",
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
            "start": 64,
            "end": 99,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 72,
              "name": "validate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 98,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 75,
                "end": 98,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 89,
                    "name": "props",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 83,
                        "end": 89,
                        "typeName": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 89,
                          "name": "Values",
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
                  "start": 91,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 94,
                    "end": 98
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 131,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 120,
              "name": "validateOnChange",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 130,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 123,
                "end": 130
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 135,
      "end": 601,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "name": "Func",
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
          "start": 196,
          "end": 592,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 197,
            "end": 592,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 200,
              "end": 591,
              "checkType": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              },
              "extendsType": {
                "type": "TSUnionType",
                "start": 215,
                "end": 262,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 215,
                    "end": 225,
                    "literal": {
                      "type": "Literal",
                      "start": 215,
                      "end": 225,
                      "value": "validate",
                      "raw": "\"validate\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 228,
                    "end": 243,
                    "literal": {
                      "type": "Literal",
                      "start": 228,
                      "end": 243,
                      "value": "initialValues",
                      "raw": "\"initialValues\""
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 246,
                    "end": 262,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 252,
                      "end": 262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 262,
                        "name": "ExtraProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 316,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 281,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 281,
                  "end": 316,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 282,
                      "end": 315,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 282,
                          "end": 302,
                          "typeName": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 294,
                            "name": "FormikConfig",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 294,
                            "end": 302,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 295,
                                "end": 301,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 295,
                                  "end": 301,
                                  "name": "Values",
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
                          "start": 305,
                          "end": 315,
                          "typeName": {
                            "type": "Identifier",
                            "start": 305,
                            "end": 315,
                            "name": "ExtraProps",
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
              "falseType": {
                "type": "TSIntersectionType",
                "start": 327,
                "end": 591,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 327,
                    "end": 454,
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 331,
                      "name": "Pick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 331,
                      "end": 454,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 332,
                          "end": 375,
                          "typeName": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 340,
                            "name": "Readonly",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 340,
                            "end": 375,
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "start": 341,
                                "end": 374,
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 341,
                                    "end": 361,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 341,
                                      "end": 353,
                                      "name": "FormikConfig",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 353,
                                      "end": 361,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 354,
                                          "end": 360,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 354,
                                            "end": 360,
                                            "name": "Values",
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
                                    "start": 364,
                                    "end": 374,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 364,
                                      "end": 374,
                                      "name": "ExtraProps",
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
                        {
                          "type": "TSUnionType",
                          "start": 377,
                          "end": 453,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 377,
                              "end": 387,
                              "literal": {
                                "type": "Literal",
                                "start": 377,
                                "end": 387,
                                "value": "validate",
                                "raw": "\"validate\""
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 390,
                              "end": 405,
                              "literal": {
                                "type": "Literal",
                                "start": 390,
                                "end": 405,
                                "value": "initialValues",
                                "raw": "\"initialValues\""
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 408,
                              "end": 453,
                              "typeName": {
                                "type": "Identifier",
                                "start": 408,
                                "end": 415,
                                "name": "Exclude",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 415,
                                "end": 453,
                                "params": [
                                  {
                                    "type": "TSTypeOperator",
                                    "start": 416,
                                    "end": 432,
                                    "operator": "keyof",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 422,
                                      "end": 432,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 422,
                                        "end": 432,
                                        "name": "ExtraProps",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "start": 434,
                                    "end": 452,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 434,
                                      "end": 452,
                                      "value": "validateOnChange",
                                      "raw": "\"validateOnChange\""
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 465,
                    "end": 591,
                    "typeName": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 472,
                      "name": "Partial",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 472,
                      "end": 591,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 473,
                          "end": 590,
                          "typeName": {
                            "type": "Identifier",
                            "start": 473,
                            "end": 477,
                            "name": "Pick",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 477,
                            "end": 590,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 478,
                                "end": 521,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 478,
                                  "end": 486,
                                  "name": "Readonly",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 486,
                                  "end": 521,
                                  "params": [
                                    {
                                      "type": "TSIntersectionType",
                                      "start": 487,
                                      "end": 520,
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 487,
                                          "end": 507,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 487,
                                            "end": 499,
                                            "name": "FormikConfig",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 499,
                                            "end": 507,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 500,
                                                "end": 506,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 500,
                                                  "end": 506,
                                                  "name": "Values",
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
                                          "start": 510,
                                          "end": 520,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 510,
                                            "end": 520,
                                            "name": "ExtraProps",
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
                              {
                                "type": "TSUnionType",
                                "start": 523,
                                "end": 589,
                                "types": [
                                  {
                                    "type": "TSLiteralType",
                                    "start": 523,
                                    "end": 541,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 523,
                                      "end": 541,
                                      "value": "validateOnChange",
                                      "raw": "\"validateOnChange\""
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 544,
                                    "end": 589,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 544,
                                      "end": 551,
                                      "name": "Extract",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 551,
                                      "end": 589,
                                      "params": [
                                        {
                                          "type": "TSTypeOperator",
                                          "start": 552,
                                          "end": 568,
                                          "operator": "keyof",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 558,
                                            "end": 568,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 558,
                                              "end": 568,
                                              "name": "ExtraProps",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "start": 570,
                                          "end": 588,
                                          "literal": {
                                            "type": "Literal",
                                            "start": 570,
                                            "end": 588,
                                            "value": "validateOnChange",
                                            "raw": "\"validateOnChange\""
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 156,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 157,
            "end": 172,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 163,
              "name": "Values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 166,
              "end": 172
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 184,
              "name": "ExtraProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 187,
              "end": 189,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 594,
        "end": 600,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 596,
          "end": 600
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 603,
      "end": 707,
      "expression": {
        "type": "CallExpression",
        "start": 603,
        "end": 706,
        "callee": {
          "type": "Identifier",
          "start": 603,
          "end": 607,
          "name": "Func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 608,
            "end": 705,
            "properties": [
              {
                "type": "Property",
                "start": 614,
                "end": 652,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 627,
                  "name": "initialValues",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 629,
                  "end": 652,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 639,
                      "end": 646,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 642,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 644,
                        "end": 646,
                        "value": "",
                        "raw": "\"\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 658,
                "end": 703,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 666,
                  "name": "validate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 668,
                  "end": 703,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 668,
                      "end": 673,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 677,
                    "end": 703,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 687,
                        "end": 697,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 687,
                          "end": 696,
                          "object": {
                            "type": "Identifier",
                            "start": 687,
                            "end": 692,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 693,
                            "end": 696,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
