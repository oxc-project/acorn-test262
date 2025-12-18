__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "FormikConfig",
    "start": 10,
    "end": 22,
    "range": [
      10,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "initialValues",
    "start": 37,
    "end": 50,
    "range": [
      37,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 64,
    "end": 72,
    "range": [
      64,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 76,
    "end": 81,
    "range": [
      76,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 94,
    "end": 98,
    "range": [
      94,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "validateOnChange",
    "start": 104,
    "end": 120,
    "range": [
      104,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 123,
    "end": 130,
    "range": [
      123,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 135,
    "end": 142,
    "range": [
      135,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 143,
    "end": 151,
    "range": [
      143,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 152,
    "end": 156,
    "range": [
      152,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 157,
    "end": 163,
    "range": [
      157,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 166,
    "end": 172,
    "range": [
      166,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtraProps",
    "start": 174,
    "end": 184,
    "range": [
      174,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 207,
    "end": 214,
    "range": [
      207,
      214
    ]
  },
  {
    "type": "String",
    "value": "\"validate\"",
    "start": 215,
    "end": 225,
    "range": [
      215,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "String",
    "value": "\"initialValues\"",
    "start": 228,
    "end": 243,
    "range": [
      228,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 246,
    "end": 251,
    "range": [
      246,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtraProps",
    "start": 252,
    "end": 262,
    "range": [
      252,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 273,
    "end": 281,
    "range": [
      273,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "FormikConfig",
    "start": 282,
    "end": 294,
    "range": [
      282,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 295,
    "end": 301,
    "range": [
      295,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtraProps",
    "start": 305,
    "end": 315,
    "range": [
      305,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 327,
    "end": 331,
    "range": [
      327,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 332,
    "end": 340,
    "range": [
      332,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "FormikConfig",
    "start": 341,
    "end": 353,
    "range": [
      341,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 354,
    "end": 360,
    "range": [
      354,
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
    "value": "&",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtraProps",
    "start": 364,
    "end": 374,
    "range": [
      364,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "String",
    "value": "\"validate\"",
    "start": 377,
    "end": 387,
    "range": [
      377,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "String",
    "value": "\"initialValues\"",
    "start": 390,
    "end": 405,
    "range": [
      390,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 408,
    "end": 415,
    "range": [
      408,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 416,
    "end": 421,
    "range": [
      416,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtraProps",
    "start": 422,
    "end": 432,
    "range": [
      422,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "String",
    "value": "\"validateOnChange\"",
    "start": 434,
    "end": 452,
    "range": [
      434,
      452
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
    "value": ">",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 465,
    "end": 472,
    "range": [
      465,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 473,
    "end": 477,
    "range": [
      473,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 478,
    "end": 486,
    "range": [
      478,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "FormikConfig",
    "start": 487,
    "end": 499,
    "range": [
      487,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 500,
    "end": 506,
    "range": [
      500,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtraProps",
    "start": 510,
    "end": 520,
    "range": [
      510,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "String",
    "value": "\"validateOnChange\"",
    "start": 523,
    "end": 541,
    "range": [
      523,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 544,
    "end": 551,
    "range": [
      544,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 552,
    "end": 557,
    "range": [
      552,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtraProps",
    "start": 558,
    "end": 568,
    "range": [
      558,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "String",
    "value": "\"validateOnChange\"",
    "start": 570,
    "end": 588,
    "range": [
      570,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 596,
    "end": 600,
    "range": [
      596,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 603,
    "end": 607,
    "range": [
      603,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "initialValues",
    "start": 614,
    "end": 627,
    "range": [
      614,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 639,
    "end": 642,
    "range": [
      639,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 644,
    "end": 646,
    "range": [
      644,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 658,
    "end": 666,
    "range": [
      658,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 668,
    "end": 673,
    "range": [
      668,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 674,
    "end": 676,
    "range": [
      674,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 687,
    "end": 692,
    "range": [
      687,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 693,
    "end": 696,
    "range": [
      693,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  }
]
```
