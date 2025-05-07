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
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 133,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 50,
              "decorators": [],
              "name": "initialValues",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 58,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 58,
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 99,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 72,
              "decorators": [],
              "name": "validate",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 98,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 75,
                "end": 98,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 89,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 89,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 83,
                        "end": 89,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 89,
                          "decorators": [],
                          "name": "Values",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 131,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 120,
              "decorators": [],
              "name": "validateOnChange",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 130,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 123,
                "end": 130
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "FormikConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 29,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 29,
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 135,
      "end": 601,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 196,
          "end": 592,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                      "raw": "\"validate\"",
                      "value": "validate",
                      "regex": null,
                      "bigint": null
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
                      "raw": "\"initialValues\"",
                      "value": "initialValues",
                      "regex": null,
                      "bigint": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 262,
                        "decorators": [],
                        "name": "ExtraProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 331,
                      "end": 454,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 332,
                          "end": 375,
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
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 353,
                                      "end": 361,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 354,
                                          "end": 360,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 354,
                                            "end": 360,
                                            "decorators": [],
                                            "name": "Values",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 341,
                                      "end": 353,
                                      "decorators": [],
                                      "name": "FormikConfig",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 364,
                                    "end": 374,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 364,
                                      "end": 374,
                                      "decorators": [],
                                      "name": "ExtraProps",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 340,
                            "decorators": [],
                            "name": "Readonly",
                            "optional": false,
                            "typeAnnotation": null
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
                                "raw": "\"validate\"",
                                "value": "validate",
                                "regex": null,
                                "bigint": null
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
                                "raw": "\"initialValues\"",
                                "value": "initialValues",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 408,
                              "end": 453,
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
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 422,
                                        "end": 432,
                                        "decorators": [],
                                        "name": "ExtraProps",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
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
                                      "raw": "\"validateOnChange\"",
                                      "value": "validateOnChange",
                                      "regex": null,
                                      "bigint": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 408,
                                "end": 415,
                                "decorators": [],
                                "name": "Exclude",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 331,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 465,
                    "end": 591,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 472,
                      "end": 591,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 473,
                          "end": 590,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 477,
                            "end": 590,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 478,
                                "end": 521,
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
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 499,
                                            "end": 507,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 500,
                                                "end": 506,
                                                "typeArguments": null,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 500,
                                                  "end": 506,
                                                  "decorators": [],
                                                  "name": "Values",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            ]
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 487,
                                            "end": 499,
                                            "decorators": [],
                                            "name": "FormikConfig",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "start": 510,
                                          "end": 520,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 510,
                                            "end": 520,
                                            "decorators": [],
                                            "name": "ExtraProps",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 478,
                                  "end": 486,
                                  "decorators": [],
                                  "name": "Readonly",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                      "raw": "\"validateOnChange\"",
                                      "value": "validateOnChange",
                                      "regex": null,
                                      "bigint": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 544,
                                    "end": 589,
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
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 558,
                                              "end": 568,
                                              "decorators": [],
                                              "name": "ExtraProps",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
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
                                            "raw": "\"validateOnChange\"",
                                            "value": "validateOnChange",
                                            "regex": null,
                                            "bigint": null
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 544,
                                      "end": 551,
                                      "decorators": [],
                                      "name": "Extract",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 473,
                            "end": 477,
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 472,
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 316,
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
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 294,
                            "end": 302,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 295,
                                "end": 301,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 295,
                                  "end": 301,
                                  "decorators": [],
                                  "name": "Values",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 294,
                            "decorators": [],
                            "name": "FormikConfig",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 305,
                          "end": 315,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 305,
                            "end": 315,
                            "decorators": [],
                            "name": "ExtraProps",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 281,
                  "decorators": [],
                  "name": "Readonly",
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
        "start": 594,
        "end": 600,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 596,
          "end": 600
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 156,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 157,
            "end": 172,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 166,
              "end": 172
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 163,
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 189,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 187,
              "end": 189,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 184,
              "decorators": [],
              "name": "ExtraProps",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 603,
      "end": 707,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 603,
        "end": 706,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 627,
                  "decorators": [],
                  "name": "initialValues",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 629,
                  "end": 652,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 639,
                      "end": 646,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 642,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 644,
                        "end": 646,
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 658,
                "end": 703,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 666,
                  "decorators": [],
                  "name": "validate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 668,
                  "end": 703,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 677,
                    "end": 703,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 687,
                        "end": 697,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 687,
                          "end": 696,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 687,
                            "end": 692,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 693,
                            "end": 696,
                            "decorators": [],
                            "name": "foo",
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
                      "start": 668,
                      "end": 673,
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 603,
          "end": 607,
          "decorators": [],
          "name": "Func",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
