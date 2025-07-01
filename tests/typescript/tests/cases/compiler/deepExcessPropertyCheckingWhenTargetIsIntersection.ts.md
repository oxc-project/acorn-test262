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
        "name": "StatelessComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 33,
              "end": 35
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 35
          }
        ],
        "start": 28,
        "end": 36
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 49,
                          "end": 50
                        },
                        "typeArguments": null,
                        "start": 49,
                        "end": 50
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 55,
                              "end": 63
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              },
                              "start": 64,
                              "end": 72
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 55,
                            "end": 72
                          }
                        ],
                        "start": 53,
                        "end": 74
                      }
                    ],
                    "start": 49,
                    "end": 74
                  },
                  "start": 47,
                  "end": 74
                },
                "start": 42,
                "end": 74
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 86,
                    "end": 89
                  },
                  "start": 84,
                  "end": 89
                },
                "start": 76,
                "end": 89
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 92,
                "end": 96
              },
              "start": 90,
              "end": 96
            },
            "start": 41,
            "end": 97
          }
        ],
        "start": 37,
        "end": 99
      },
      "declare": false,
      "start": 0,
      "end": 99
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
            "name": "TestComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StatelessComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 141
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TestProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 151
                      },
                      "typeArguments": null,
                      "start": 142,
                      "end": 151
                    }
                  ],
                  "start": 141,
                  "end": 152
                },
                "start": 123,
                "end": 152
              },
              "start": 121,
              "end": 152
            },
            "start": 108,
            "end": 152
          },
          "init": {
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
                "start": 156,
                "end": 161
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 177,
                    "end": 181
                  },
                  "start": 170,
                  "end": 182
                }
              ],
              "start": 166,
              "end": 184
            },
            "id": null,
            "generator": false,
            "start": 155,
            "end": 184
          },
          "definite": false,
          "start": 108,
          "end": 184
        }
      ],
      "declare": false,
      "start": 102,
      "end": 184
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITestProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 207
      },
      "typeParameters": null,
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
              "name": "ariaLabel",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 221
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              },
              "start": 222,
              "end": 230
            },
            "accessibility": null,
            "static": false,
            "start": 212,
            "end": 231
          }
        ],
        "start": 208,
        "end": 233
      },
      "declare": false,
      "start": 187,
      "end": 233
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 256
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 263
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 257,
            "end": 263
          }
        ],
        "start": 256,
        "end": 264
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
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 274
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 282
                },
                "typeArguments": null,
                "start": 276,
                "end": 282
              },
              "start": 274,
              "end": 282
            },
            "accessibility": null,
            "static": false,
            "start": 269,
            "end": 283
          }
        ],
        "start": 265,
        "end": 285
      },
      "declare": false,
      "start": 236,
      "end": 285
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 307
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
              "name": "icon",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 316
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NestedProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 328
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ITestProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 339
                      },
                      "typeArguments": null,
                      "start": 329,
                      "end": 339
                    }
                  ],
                  "start": 328,
                  "end": 340
                },
                "start": 318,
                "end": 340
              },
              "start": 316,
              "end": 340
            },
            "accessibility": null,
            "static": false,
            "start": 312,
            "end": 341
          }
        ],
        "start": 308,
        "end": 343
      },
      "declare": false,
      "start": 288,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 359
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
                  "name": "icon",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 365
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
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 369,
                        "end": 374
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
                              "name": "INVALID_PROP_NAME",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 378,
                              "end": 395
                            },
                            "value": {
                              "type": "Literal",
                              "value": "share",
                              "raw": "'share'",
                              "start": 397,
                              "end": 404
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 378,
                            "end": 404
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ariaLabel",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 406,
                              "end": 415
                            },
                            "value": {
                              "type": "Literal",
                              "value": "test label",
                              "raw": "'test label'",
                              "start": 417,
                              "end": 429
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 406,
                            "end": 429
                          }
                        ],
                        "start": 376,
                        "end": 431
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 369,
                      "end": 431
                    }
                  ],
                  "start": 367,
                  "end": 433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 361,
                "end": 433
              }
            ],
            "start": 360,
            "end": 434
          }
        ],
        "optional": false,
        "start": 346,
        "end": 435
      },
      "directive": null,
      "start": 346,
      "end": 436
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
            "name": "TestComponent2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StatelessComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 478
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
                            "name": "TestProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 479,
                            "end": 488
                          },
                          "typeArguments": null,
                          "start": 479,
                          "end": 488
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
                                "name": "props2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 492,
                                "end": 498
                              },
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
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 501,
                                        "end": 502
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 504,
                                          "end": 510
                                        },
                                        "start": 502,
                                        "end": 510
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 501,
                                      "end": 510
                                    }
                                  ],
                                  "start": 500,
                                  "end": 511
                                },
                                "start": 498,
                                "end": 511
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 492,
                              "end": 511
                            }
                          ],
                          "start": 491,
                          "end": 512
                        }
                      ],
                      "start": 479,
                      "end": 512
                    }
                  ],
                  "start": 478,
                  "end": 513
                },
                "start": 460,
                "end": 513
              },
              "start": 458,
              "end": 513
            },
            "start": 444,
            "end": 513
          },
          "init": {
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
                "start": 517,
                "end": 522
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 538,
                    "end": 542
                  },
                  "start": 531,
                  "end": 543
                }
              ],
              "start": 527,
              "end": 545
            },
            "id": null,
            "generator": false,
            "start": 516,
            "end": 545
          },
          "definite": false,
          "start": 444,
          "end": 545
        }
      ],
      "declare": false,
      "start": 438,
      "end": 545
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestComponent2",
          "optional": false,
          "typeAnnotation": null,
          "start": 547,
          "end": 561
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
                  "name": "icon",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 567
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
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 571,
                        "end": 576
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
                              "name": "INVALID_PROP_NAME",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 580,
                              "end": 597
                            },
                            "value": {
                              "type": "Literal",
                              "value": "share",
                              "raw": "'share'",
                              "start": 599,
                              "end": 606
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 580,
                            "end": 606
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ariaLabel",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 608,
                              "end": 617
                            },
                            "value": {
                              "type": "Literal",
                              "value": "test label",
                              "raw": "'test label'",
                              "start": 619,
                              "end": 631
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 608,
                            "end": 631
                          }
                        ],
                        "start": 578,
                        "end": 633
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 571,
                      "end": 633
                    }
                  ],
                  "start": 569,
                  "end": 635
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 563,
                "end": 635
              }
            ],
            "start": 562,
            "end": 636
          }
        ],
        "optional": false,
        "start": 547,
        "end": 637
      },
      "directive": null,
      "start": 547,
      "end": 638
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 638
}
```
