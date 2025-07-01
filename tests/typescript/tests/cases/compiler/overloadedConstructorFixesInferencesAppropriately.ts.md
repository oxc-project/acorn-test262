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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
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
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
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
                  "start": 26,
                  "end": 27
                },
                "typeArguments": null,
                "start": 26,
                "end": 27
              },
              "start": 24,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 28
          }
        ],
        "start": 17,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrorResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 53
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 76,
                  "end": 80
                },
                "start": 76,
                "end": 80
              },
              "start": 74,
              "end": 80
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 80
          }
        ],
        "start": 54,
        "end": 82
      },
      "declare": false,
      "start": 32,
      "end": 82
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncLoaderProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 110
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 118
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 127,
              "end": 129
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 129
          }
        ],
        "start": 110,
        "end": 130
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncLoad",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 166
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 167,
                            "end": 174
                          },
                          "typeArguments": null,
                          "start": 167,
                          "end": 174
                        }
                      ],
                      "start": 166,
                      "end": 175
                    },
                    "start": 163,
                    "end": 175
                  },
                  "start": 160,
                  "end": 175
                },
                "start": 157,
                "end": 175
              },
              "start": 155,
              "end": 175
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 176
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 198
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
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 209,
                          "end": 216
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 217,
                                "end": 224
                              },
                              "typeArguments": null,
                              "start": 217,
                              "end": 224
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ErrorResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 226,
                                "end": 237
                              },
                              "typeArguments": null,
                              "start": 226,
                              "end": 237
                            }
                          ],
                          "start": 216,
                          "end": 238
                        },
                        "start": 209,
                        "end": 238
                      },
                      "start": 207,
                      "end": 238
                    },
                    "start": 201,
                    "end": 238
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  },
                  "start": 240,
                  "end": 249
                },
                "start": 200,
                "end": 249
              },
              "start": 198,
              "end": 249
            },
            "accessibility": null,
            "static": false,
            "start": 181,
            "end": 250
          }
        ],
        "start": 131,
        "end": 252
      },
      "declare": false,
      "start": 84,
      "end": 252
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncLoader",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 271
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 279
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 288,
              "end": 290
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 272,
            "end": 290
          }
        ],
        "start": 271,
        "end": 291
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 309
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
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    },
                    "start": 315,
                    "end": 323
                  },
                  "start": 310,
                  "end": 323
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 334,
                      "end": 337
                    },
                    "start": 332,
                    "end": 337
                  },
                  "start": 325,
                  "end": 337
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 309,
              "end": 339
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 298,
            "end": 339
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
              "start": 344,
              "end": 355
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
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AsyncLoaderProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 379
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 380,
                              "end": 387
                            },
                            "typeArguments": null,
                            "start": 380,
                            "end": 387
                          }
                        ],
                        "start": 379,
                        "end": 388
                      },
                      "start": 363,
                      "end": 388
                    },
                    "start": 361,
                    "end": 388
                  },
                  "start": 356,
                  "end": 388
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 355,
              "end": 390
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 344,
            "end": 390
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
              "start": 395,
              "end": 406
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
                    "start": 410,
                    "end": 414
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 416,
                        "end": 419
                      },
                      "start": 416,
                      "end": 421
                    },
                    "start": 414,
                    "end": 421
                  },
                  "value": null,
                  "start": 407,
                  "end": 421
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 423,
                "end": 425
              },
              "expression": false,
              "start": 406,
              "end": 425
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 395,
            "end": 425
          }
        ],
        "start": 292,
        "end": 427
      },
      "abstract": false,
      "declare": false,
      "start": 254,
      "end": 427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null,
        "start": 438,
        "end": 442
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 449
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
                "types": [
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
                          "name": "success",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 459
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 461,
                              "end": 465
                            },
                            "start": 461,
                            "end": 465
                          },
                          "start": 459,
                          "end": 465
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 452,
                        "end": 465
                      }
                    ],
                    "start": 450,
                    "end": 467
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ErrorResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 481
                    },
                    "typeArguments": null,
                    "start": 470,
                    "end": 481
                  }
                ],
                "start": 450,
                "end": 481
              }
            ],
            "start": 449,
            "end": 482
          },
          "start": 446,
          "end": 482
        },
        "start": 444,
        "end": 482
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 496,
                "end": 500
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 504,
                "end": 507
              },
              "start": 496,
              "end": 507
            },
            "start": 489,
            "end": 508
          }
        ],
        "start": 483,
        "end": 510
      },
      "expression": false,
      "start": 429,
      "end": 510
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "AsyncLoader",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 527
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
                  "name": "asyncLoad",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 543
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "load",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 545,
                  "end": 549
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 534,
                "end": 549
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 563
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 571
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 581
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "success",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 589
                      },
                      "optional": false,
                      "computed": false,
                      "start": 575,
                      "end": 589
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 593,
                      "end": 596
                    },
                    "start": 575,
                    "end": 596
                  },
                  "id": null,
                  "generator": false,
                  "start": 565,
                  "end": 596
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 555,
                "end": 596
              }
            ],
            "start": 528,
            "end": 599
          }
        ],
        "start": 512,
        "end": 600
      },
      "directive": null,
      "start": 512,
      "end": 601
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 621
}
```
