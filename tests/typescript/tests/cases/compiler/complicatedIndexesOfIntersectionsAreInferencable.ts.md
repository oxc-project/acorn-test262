__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FormikConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 29
          }
        ],
        "start": 22,
        "end": 30
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
              "name": "initialValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 50
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 58
                },
                "typeArguments": null,
                "start": 52,
                "end": 58
              },
              "start": 50,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 59
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validate",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 72
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 89
                        },
                        "typeArguments": null,
                        "start": 83,
                        "end": 89
                      },
                      "start": 81,
                      "end": 89
                    },
                    "start": 76,
                    "end": 89
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 94,
                    "end": 98
                  },
                  "start": 91,
                  "end": 98
                },
                "start": 75,
                "end": 98
              },
              "start": 73,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 99
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validateOnChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 120
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 123,
                "end": 130
              },
              "start": 121,
              "end": 130
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 131
          }
        ],
        "start": 31,
        "end": 133
      },
      "declare": false,
      "start": 0,
      "end": 133
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 156
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 163
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 166,
              "end": 172
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 157,
            "end": 172
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtraProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 184
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 187,
              "end": 189
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 174,
            "end": 189
          }
        ],
        "start": 156,
        "end": 190
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              },
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "validate",
                      "raw": "\"validate\"",
                      "start": 215,
                      "end": 225
                    },
                    "start": 215,
                    "end": 225
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "initialValues",
                      "raw": "\"initialValues\"",
                      "start": 228,
                      "end": 243
                    },
                    "start": 228,
                    "end": 243
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExtraProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 252,
                        "end": 262
                      },
                      "typeArguments": null,
                      "start": 252,
                      "end": 262
                    },
                    "start": 246,
                    "end": 262
                  }
                ],
                "start": 215,
                "end": 262
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 281
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FormikConfig",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 282,
                            "end": 294
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Values",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 295,
                                  "end": 301
                                },
                                "typeArguments": null,
                                "start": 295,
                                "end": 301
                              }
                            ],
                            "start": 294,
                            "end": 302
                          },
                          "start": 282,
                          "end": 302
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExtraProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 305,
                            "end": 315
                          },
                          "typeArguments": null,
                          "start": 305,
                          "end": 315
                        }
                      ],
                      "start": 282,
                      "end": 315
                    }
                  ],
                  "start": 281,
                  "end": 316
                },
                "start": 273,
                "end": 316
              },
              "falseType": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 331
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Readonly",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 332,
                            "end": 340
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSIntersectionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "FormikConfig",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 341,
                                      "end": 353
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Values",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 354,
                                            "end": 360
                                          },
                                          "typeArguments": null,
                                          "start": 354,
                                          "end": 360
                                        }
                                      ],
                                      "start": 353,
                                      "end": 361
                                    },
                                    "start": 341,
                                    "end": 361
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ExtraProps",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 364,
                                      "end": 374
                                    },
                                    "typeArguments": null,
                                    "start": 364,
                                    "end": 374
                                  }
                                ],
                                "start": 341,
                                "end": 374
                              }
                            ],
                            "start": 340,
                            "end": 375
                          },
                          "start": 332,
                          "end": 375
                        },
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "validate",
                                "raw": "\"validate\"",
                                "start": 377,
                                "end": 387
                              },
                              "start": 377,
                              "end": 387
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "initialValues",
                                "raw": "\"initialValues\"",
                                "start": 390,
                                "end": 405
                              },
                              "start": 390,
                              "end": 405
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Exclude",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 408,
                                "end": 415
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
                                        "name": "ExtraProps",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 422,
                                        "end": 432
                                      },
                                      "typeArguments": null,
                                      "start": 422,
                                      "end": 432
                                    },
                                    "start": 416,
                                    "end": 432
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "validateOnChange",
                                      "raw": "\"validateOnChange\"",
                                      "start": 434,
                                      "end": 452
                                    },
                                    "start": 434,
                                    "end": 452
                                  }
                                ],
                                "start": 415,
                                "end": 453
                              },
                              "start": 408,
                              "end": 453
                            }
                          ],
                          "start": 377,
                          "end": 453
                        }
                      ],
                      "start": 331,
                      "end": 454
                    },
                    "start": 327,
                    "end": 454
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 472
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 473,
                            "end": 477
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Readonly",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 478,
                                  "end": 486
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSIntersectionType",
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "FormikConfig",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 487,
                                            "end": 499
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Values",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 500,
                                                  "end": 506
                                                },
                                                "typeArguments": null,
                                                "start": 500,
                                                "end": 506
                                              }
                                            ],
                                            "start": 499,
                                            "end": 507
                                          },
                                          "start": 487,
                                          "end": 507
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ExtraProps",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 510,
                                            "end": 520
                                          },
                                          "typeArguments": null,
                                          "start": 510,
                                          "end": 520
                                        }
                                      ],
                                      "start": 487,
                                      "end": 520
                                    }
                                  ],
                                  "start": 486,
                                  "end": 521
                                },
                                "start": 478,
                                "end": 521
                              },
                              {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "validateOnChange",
                                      "raw": "\"validateOnChange\"",
                                      "start": 523,
                                      "end": 541
                                    },
                                    "start": 523,
                                    "end": 541
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Extract",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 544,
                                      "end": 551
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
                                              "name": "ExtraProps",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 558,
                                              "end": 568
                                            },
                                            "typeArguments": null,
                                            "start": 558,
                                            "end": 568
                                          },
                                          "start": 552,
                                          "end": 568
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "validateOnChange",
                                            "raw": "\"validateOnChange\"",
                                            "start": 570,
                                            "end": 588
                                          },
                                          "start": 570,
                                          "end": 588
                                        }
                                      ],
                                      "start": 551,
                                      "end": 589
                                    },
                                    "start": 544,
                                    "end": 589
                                  }
                                ],
                                "start": 523,
                                "end": 589
                              }
                            ],
                            "start": 477,
                            "end": 590
                          },
                          "start": 473,
                          "end": 590
                        }
                      ],
                      "start": 472,
                      "end": 591
                    },
                    "start": 465,
                    "end": 591
                  }
                ],
                "start": 327,
                "end": 591
              },
              "start": 200,
              "end": 591
            },
            "start": 197,
            "end": 592
          },
          "start": 196,
          "end": 592
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 596,
          "end": 600
        },
        "start": 594,
        "end": 600
      },
      "body": null,
      "expression": false,
      "start": 135,
      "end": 601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Func",
          "optional": false,
          "typeAnnotation": null,
          "start": 603,
          "end": 607
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 627
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 642
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 644,
                        "end": 646
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 639,
                      "end": 646
                    }
                  ],
                  "start": 629,
                  "end": 652
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 614,
                "end": 652
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "validate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 666
                },
                "value": {
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
                      "start": 668,
                      "end": 673
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 687,
                            "end": 692
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 693,
                            "end": 696
                          },
                          "optional": false,
                          "computed": false,
                          "start": 687,
                          "end": 696
                        },
                        "directive": null,
                        "start": 687,
                        "end": 697
                      }
                    ],
                    "start": 677,
                    "end": 703
                  },
                  "id": null,
                  "generator": false,
                  "start": 668,
                  "end": 703
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 658,
                "end": 703
              }
            ],
            "start": 608,
            "end": 705
          }
        ],
        "optional": false,
        "start": 603,
        "end": 706
      },
      "directive": null,
      "start": 603,
      "end": 707
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 707
}
```
