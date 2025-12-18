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
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "value",
                  "raw": "\"value\"",
                  "start": 21,
                  "end": 28
                },
                "start": 21,
                "end": 28
              },
              "start": 19,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 29
          }
        ],
        "start": 14,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "generator": false,
      "async": true,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 66
                },
                "typeArguments": null,
                "start": 63,
                "end": 66
              }
            ],
            "start": 62,
            "end": 67
          },
          "start": 55,
          "end": 67
        },
        "start": 53,
        "end": 67
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 86
                  },
                  "value": {
                    "type": "Literal",
                    "value": "value",
                    "raw": "\"value\"",
                    "start": 88,
                    "end": 95
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 83,
                  "end": 95
                }
              ],
              "start": 81,
              "end": 97
            },
            "start": 74,
            "end": 98
          }
        ],
        "start": 68,
        "end": 100
      },
      "expression": false,
      "start": 33,
      "end": 100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "generator": false,
      "async": true,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 131
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 135
                },
                "typeArguments": null,
                "start": 132,
                "end": 135
              }
            ],
            "start": 131,
            "end": 136
          },
          "start": 124,
          "end": 136
        },
        "start": 122,
        "end": 136
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 161
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 169
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 190
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
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 193,
                                    "end": 196
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "value",
                                    "raw": "\"value\"",
                                    "start": 198,
                                    "end": 205
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 193,
                                  "end": 205
                                }
                              ],
                              "start": 191,
                              "end": 207
                            }
                          ],
                          "optional": false,
                          "start": 183,
                          "end": 208
                        },
                        "directive": null,
                        "start": 183,
                        "end": 209
                      }
                    ],
                    "start": 173,
                    "end": 215
                  },
                  "id": null,
                  "generator": false,
                  "start": 162,
                  "end": 215
                }
              ],
              "start": 150,
              "end": 216
            },
            "start": 143,
            "end": 217
          }
        ],
        "start": 137,
        "end": 219
      },
      "expression": false,
      "start": 102,
      "end": 219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 239
      },
      "generator": false,
      "async": true,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 250
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 254
                },
                "typeArguments": null,
                "start": 251,
                "end": 254
              }
            ],
            "start": 250,
            "end": 255
          },
          "start": 243,
          "end": 255
        },
        "start": 241,
        "end": 255
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 280
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 282,
                      "end": 289
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 277,
                    "end": 289
                  }
                ],
                "start": 275,
                "end": 291
              },
              "start": 269,
              "end": 291
            },
            "start": 262,
            "end": 292
          }
        ],
        "start": 256,
        "end": 294
      },
      "expression": false,
      "start": 221,
      "end": 294
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 314
      },
      "generator": false,
      "async": true,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 325
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 329
                },
                "typeArguments": null,
                "start": 326,
                "end": 329
              }
            ],
            "start": 325,
            "end": 330
          },
          "start": 318,
          "end": 330
        },
        "start": 316,
        "end": 330
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 361
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 369
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 383,
                              "end": 390
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
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 393,
                                      "end": 396
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "value",
                                      "raw": "\"value\"",
                                      "start": 398,
                                      "end": 405
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 393,
                                    "end": 405
                                  }
                                ],
                                "start": 391,
                                "end": 407
                              }
                            ],
                            "optional": false,
                            "start": 383,
                            "end": 408
                          },
                          "directive": null,
                          "start": 383,
                          "end": 409
                        }
                      ],
                      "start": 373,
                      "end": 415
                    },
                    "id": null,
                    "generator": false,
                    "start": 362,
                    "end": 415
                  }
                ],
                "start": 350,
                "end": 416
              },
              "start": 344,
              "end": 416
            },
            "start": 337,
            "end": 417
          }
        ],
        "start": 331,
        "end": 419
      },
      "expression": false,
      "start": 296,
      "end": 419
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "typeAnnotation": null,
        "start": 435,
        "end": 442
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_runnable",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 464
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 447,
            "end": 465
          }
        ],
        "start": 443,
        "end": 467
      },
      "abstract": false,
      "declare": true,
      "start": 421,
      "end": 467
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Done",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 477
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "err",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 487,
                "end": 490
              },
              "start": 485,
              "end": 490
            },
            "start": 481,
            "end": 490
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 495,
            "end": 499
          },
          "start": 492,
          "end": 499
        },
        "start": 480,
        "end": 499
      },
      "declare": false,
      "start": 468,
      "end": 500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 506,
        "end": 510
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 527
                },
                "typeArguments": null,
                "start": 520,
                "end": 527
              },
              "start": 518,
              "end": 527
            },
            "start": 514,
            "end": 527
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "done",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 539
                },
                "typeArguments": null,
                "start": 535,
                "end": 539
              },
              "start": 533,
              "end": 539
            },
            "start": 529,
            "end": 539
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 544,
            "end": 548
          },
          "start": 541,
          "end": 548
        },
        "start": 513,
        "end": 548
      },
      "declare": false,
      "start": 501,
      "end": 549
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 555,
        "end": 564
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 581
                },
                "typeArguments": null,
                "start": 574,
                "end": 581
              },
              "start": 572,
              "end": 581
            },
            "start": 568,
            "end": 581
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 597
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 598,
                  "end": 601
                }
              ],
              "start": 597,
              "end": 602
            },
            "start": 586,
            "end": 602
          },
          "start": 583,
          "end": 602
        },
        "start": 567,
        "end": 602
      },
      "declare": false,
      "start": 550,
      "end": 603
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 615,
        "end": 627
      },
      "typeParameters": null,
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
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 641
                    },
                    "typeArguments": null,
                    "start": 637,
                    "end": 641
                  },
                  "start": 635,
                  "end": 641
                },
                "start": 633,
                "end": 641
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 644,
                "end": 648
              },
              "start": 642,
              "end": 648
            },
            "start": 632,
            "end": 649
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncFunc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 666
                    },
                    "typeArguments": null,
                    "start": 657,
                    "end": 666
                  },
                  "start": 655,
                  "end": 666
                },
                "start": 653,
                "end": 666
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 669,
                "end": 673
              },
              "start": 667,
              "end": 673
            },
            "start": 652,
            "end": 674
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 685,
                    "end": 691
                  },
                  "start": 683,
                  "end": 691
                },
                "start": 678,
                "end": 691
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 698,
                      "end": 702
                    },
                    "typeArguments": null,
                    "start": 698,
                    "end": 702
                  },
                  "start": 696,
                  "end": 702
                },
                "start": 693,
                "end": 702
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 705,
                "end": 709
              },
              "start": 703,
              "end": 709
            },
            "start": 677,
            "end": 710
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 721,
                    "end": 727
                  },
                  "start": 719,
                  "end": 727
                },
                "start": 714,
                "end": 727
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncFunc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 734,
                      "end": 743
                    },
                    "typeArguments": null,
                    "start": 734,
                    "end": 743
                  },
                  "start": 732,
                  "end": 743
                },
                "start": 729,
                "end": 743
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 746,
                "end": 750
              },
              "start": 744,
              "end": 750
            },
            "start": 713,
            "end": 751
          }
        ],
        "start": 628,
        "end": 753
      },
      "declare": false,
      "start": 605,
      "end": 753
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 787
                },
                "typeArguments": null,
                "start": 775,
                "end": 787
              },
              "start": 773,
              "end": 787
            },
            "start": 769,
            "end": 787
          },
          "init": null,
          "definite": false,
          "start": 769,
          "end": 787
        }
      ],
      "declare": true,
      "start": 755,
      "end": 788
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProcessTreeNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 800,
        "end": 815
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
              "name": "pid",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 823
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 825,
                "end": 831
              },
              "start": 823,
              "end": 831
            },
            "accessibility": null,
            "static": false,
            "start": 820,
            "end": 832
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 839
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
              },
              "start": 839,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 835,
            "end": 848
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memory",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 857
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 860,
                "end": 866
              },
              "start": 858,
              "end": 866
            },
            "accessibility": null,
            "static": false,
            "start": 851,
            "end": 867
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLine",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 881
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 884,
                "end": 890
              },
              "start": 882,
              "end": 890
            },
            "accessibility": null,
            "static": false,
            "start": 870,
            "end": 891
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 902
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProcessTreeNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 904,
                    "end": 919
                  },
                  "typeArguments": null,
                  "start": 904,
                  "end": 919
                },
                "start": 904,
                "end": 921
              },
              "start": 902,
              "end": 921
            },
            "accessibility": null,
            "static": false,
            "start": 894,
            "end": 922
          }
        ],
        "start": 816,
        "end": 924
      },
      "declare": false,
      "start": 790,
      "end": 924
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getProcessTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 950,
          "end": 964
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "rootPid",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 977,
                "end": 983
              },
              "start": 975,
              "end": 983
            },
            "start": 968,
            "end": 983
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
                    "name": "tree",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ProcessTreeNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1004,
                          "end": 1019
                        },
                        "typeArguments": null,
                        "start": 1004,
                        "end": 1019
                      },
                      "start": 1002,
                      "end": 1019
                    },
                    "start": 998,
                    "end": 1019
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1024,
                    "end": 1028
                  },
                  "start": 1021,
                  "end": 1028
                },
                "start": 997,
                "end": 1028
              },
              "start": 995,
              "end": 1028
            },
            "start": 987,
            "end": 1028
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1032,
            "end": 1036
          },
          "start": 1030,
          "end": 1036
        },
        "body": null,
        "expression": false,
        "start": 933,
        "end": 1037
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 926,
      "end": 1037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1039,
          "end": 1043
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "windows-process-tree",
            "raw": "\"windows-process-tree\"",
            "start": 1044,
            "end": 1066
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1095,
                      "end": 1102
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1104,
                            "end": 1111
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reject",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1113,
                            "end": 1119
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getProcessTree",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1130,
                                  "end": 1144
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 123,
                                    "raw": "123",
                                    "start": 1145,
                                    "end": 1148
                                  },
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": false,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tree",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1151,
                                        "end": 1155
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "tree",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1172,
                                            "end": 1176
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "resolve",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1188,
                                                    "end": 1195
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 1188,
                                                  "end": 1197
                                                },
                                                "directive": null,
                                                "start": 1188,
                                                "end": 1198
                                              }
                                            ],
                                            "start": 1178,
                                            "end": 1206
                                          },
                                          "alternate": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "reject",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1222,
                                                    "end": 1228
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "NewExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "Error",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1233,
                                                        "end": 1238
                                                      },
                                                      "typeArguments": null,
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "value": "windows-process-tree",
                                                          "raw": "\"windows-process-tree\"",
                                                          "start": 1239,
                                                          "end": 1261
                                                        }
                                                      ],
                                                      "start": 1229,
                                                      "end": 1262
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 1222,
                                                  "end": 1263
                                                },
                                                "directive": null,
                                                "start": 1222,
                                                "end": 1264
                                              }
                                            ],
                                            "start": 1212,
                                            "end": 1272
                                          },
                                          "start": 1168,
                                          "end": 1272
                                        }
                                      ],
                                      "start": 1160,
                                      "end": 1278
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1150,
                                    "end": 1278
                                  }
                                ],
                                "optional": false,
                                "start": 1130,
                                "end": 1279
                              },
                              "directive": null,
                              "start": 1130,
                              "end": 1280
                            }
                          ],
                          "start": 1124,
                          "end": 1284
                        },
                        "id": null,
                        "generator": false,
                        "start": 1103,
                        "end": 1284
                      }
                    ],
                    "start": 1091,
                    "end": 1285
                  },
                  "start": 1084,
                  "end": 1286
                }
              ],
              "start": 1080,
              "end": 1288
            },
            "id": null,
            "generator": false,
            "start": 1068,
            "end": 1288
          }
        ],
        "optional": false,
        "start": 1039,
        "end": 1289
      },
      "directive": null,
      "start": 1039,
      "end": 1290
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ILocalExtension",
        "optional": false,
        "typeAnnotation": null,
        "start": 1302,
        "end": 1317
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
              "name": "isApplicationScoped",
              "optional": false,
              "typeAnnotation": null,
              "start": 1322,
              "end": 1341
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1343,
                "end": 1350
              },
              "start": 1341,
              "end": 1350
            },
            "accessibility": null,
            "static": false,
            "start": 1322,
            "end": 1351
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publisherId",
              "optional": false,
              "typeAnnotation": null,
              "start": 1354,
              "end": 1365
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1367,
                    "end": 1373
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1376,
                    "end": 1380
                  }
                ],
                "start": 1367,
                "end": 1380
              },
              "start": 1365,
              "end": 1380
            },
            "accessibility": null,
            "static": false,
            "start": 1354,
            "end": 1381
          }
        ],
        "start": 1318,
        "end": 1383
      },
      "declare": false,
      "start": 1292,
      "end": 1383
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Metadata",
        "optional": false,
        "typeAnnotation": null,
        "start": 1389,
        "end": 1397
      },
      "typeParameters": null,
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
              "name": "updated",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1411
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1413,
                "end": 1420
              },
              "start": 1411,
              "end": 1420
            },
            "accessibility": null,
            "static": false,
            "start": 1404,
            "end": 1421
          }
        ],
        "start": 1400,
        "end": 1423
      },
      "declare": false,
      "start": 1384,
      "end": 1424
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "scanMetadata",
        "optional": false,
        "typeAnnotation": null,
        "start": 1442,
        "end": 1454
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "local",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ILocalExtension",
                "optional": false,
                "typeAnnotation": null,
                "start": 1465,
                "end": 1480
              },
              "typeArguments": null,
              "start": 1465,
              "end": 1480
            },
            "start": 1463,
            "end": 1480
          },
          "start": 1458,
          "end": 1480
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
            "start": 1484,
            "end": 1491
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
                      "name": "Metadata",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1492,
                      "end": 1500
                    },
                    "typeArguments": null,
                    "start": 1492,
                    "end": 1500
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1503,
                    "end": 1512
                  }
                ],
                "start": 1492,
                "end": 1512
              }
            ],
            "start": 1491,
            "end": 1513
          },
          "start": 1484,
          "end": 1513
        },
        "start": 1482,
        "end": 1513
      },
      "body": null,
      "expression": false,
      "start": 1425,
      "end": 1514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "copyExtensions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1545
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fromExtensions",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ILocalExtension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1565,
                  "end": 1580
                },
                "typeArguments": null,
                "start": 1565,
                "end": 1580
              },
              "start": 1565,
              "end": 1582
            },
            "start": 1563,
            "end": 1582
          },
          "start": 1549,
          "end": 1582
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
            "start": 1586,
            "end": 1593
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 1594,
                "end": 1598
              }
            ],
            "start": 1593,
            "end": 1599
          },
          "start": 1586,
          "end": 1599
        },
        "start": 1584,
        "end": 1599
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extensions",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ILocalExtension",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1623,
                              "end": 1638
                            },
                            "typeArguments": null,
                            "start": 1623,
                            "end": 1638
                          },
                          {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Metadata",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1640,
                                  "end": 1648
                                },
                                "typeArguments": null,
                                "start": 1640,
                                "end": 1648
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 1651,
                                "end": 1660
                              }
                            ],
                            "start": 1640,
                            "end": 1660
                          }
                        ],
                        "start": 1622,
                        "end": 1661
                      },
                      "start": 1622,
                      "end": 1663
                    },
                    "start": 1620,
                    "end": 1663
                  },
                  "start": 1610,
                  "end": 1663
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1683
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1684,
                        "end": 1687
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1676,
                      "end": 1687
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fromExtensions",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1695,
                                "end": 1709
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "filter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1719,
                                "end": 1725
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1695,
                              "end": 1725
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1727,
                                    "end": 1728
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "e",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1734,
                                      "end": 1735
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isApplicationScoped",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1736,
                                      "end": 1755
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1734,
                                    "end": 1755
                                  },
                                  "prefix": true,
                                  "start": 1733,
                                  "end": 1755
                                },
                                "id": null,
                                "generator": false,
                                "start": 1726,
                                "end": 1755
                              }
                            ],
                            "optional": false,
                            "start": 1695,
                            "end": 1756
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1766,
                            "end": 1769
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1695,
                          "end": 1769
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": true,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1777,
                                "end": 1778
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1784,
                                  "end": 1785
                                },
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scanMetadata",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1793,
                                      "end": 1805
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1806,
                                        "end": 1807
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1793,
                                    "end": 1808
                                  },
                                  "start": 1787,
                                  "end": 1808
                                }
                              ],
                              "start": 1783,
                              "end": 1809
                            },
                            "id": null,
                            "generator": false,
                            "start": 1770,
                            "end": 1809
                          }
                        ],
                        "optional": false,
                        "start": 1695,
                        "end": 1810
                      }
                    ],
                    "optional": false,
                    "start": 1676,
                    "end": 1816
                  },
                  "start": 1670,
                  "end": 1816
                },
                "definite": false,
                "start": 1610,
                "end": 1816
              }
            ],
            "declare": false,
            "start": 1604,
            "end": 1817
          }
        ],
        "start": 1600,
        "end": 1819
      },
      "expression": false,
      "start": 1516,
      "end": 1819
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1819
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
    "value": "Obj",
    "start": 10,
    "end": 13,
    "range": [
      10,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 16,
    "end": 19,
    "range": [
      16,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 21,
    "end": 28,
    "range": [
      21,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 39,
    "end": 47,
    "range": [
      39,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 48,
    "end": 51,
    "range": [
      48,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 55,
    "end": 62,
    "range": [
      55,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 63,
    "end": 66,
    "range": [
      63,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 88,
    "end": 95,
    "range": [
      88,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 102,
    "end": 107,
    "range": [
      102,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116,
    "range": [
      108,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 117,
    "end": 120,
    "range": [
      117,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 124,
    "end": 131,
    "range": [
      124,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 132,
    "end": 135,
    "range": [
      132,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 143,
    "end": 149,
    "range": [
      143,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 150,
    "end": 153,
    "range": [
      150,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 154,
    "end": 161,
    "range": [
      154,
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
    "value": "resolve",
    "start": 162,
    "end": 169,
    "range": [
      162,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 170,
    "end": 172,
    "range": [
      170,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 183,
    "end": 190,
    "range": [
      183,
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
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 198,
    "end": 205,
    "range": [
      198,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 221,
    "end": 226,
    "range": [
      221,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 227,
    "end": 235,
    "range": [
      227,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 236,
    "end": 239,
    "range": [
      236,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 243,
    "end": 250,
    "range": [
      243,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 251,
    "end": 254,
    "range": [
      251,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 262,
    "end": 268,
    "range": [
      262,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 269,
    "end": 274,
    "range": [
      269,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 277,
    "end": 280,
    "range": [
      277,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 282,
    "end": 289,
    "range": [
      282,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 296,
    "end": 301,
    "range": [
      296,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 302,
    "end": 310,
    "range": [
      302,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 318,
    "end": 325,
    "range": [
      318,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 326,
    "end": 329,
    "range": [
      326,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 337,
    "end": 343,
    "range": [
      337,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 344,
    "end": 349,
    "range": [
      344,
      349
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 354,
    "end": 361,
    "range": [
      354,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 362,
    "end": 369,
    "range": [
      362,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 370,
    "end": 372,
    "range": [
      370,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 383,
    "end": 390,
    "range": [
      383,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 393,
    "end": 396,
    "range": [
      393,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 398,
    "end": 405,
    "range": [
      398,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 421,
    "end": 428,
    "range": [
      421,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 429,
    "end": 434,
    "range": [
      429,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 435,
    "end": 442,
    "range": [
      435,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 447,
    "end": 454,
    "range": [
      447,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "_runnable",
    "start": 455,
    "end": 464,
    "range": [
      455,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 468,
    "end": 472,
    "range": [
      468,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "Done",
    "start": 473,
    "end": 477,
    "range": [
      473,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 481,
    "end": 484,
    "range": [
      481,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 487,
    "end": 490,
    "range": [
      487,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 492,
    "end": 494,
    "range": [
      492,
      494
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 495,
    "end": 499,
    "range": [
      495,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 501,
    "end": 505,
    "range": [
      501,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 506,
    "end": 510,
    "range": [
      506,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 514,
    "end": 518,
    "range": [
      514,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 520,
    "end": 527,
    "range": [
      520,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 529,
    "end": 533,
    "range": [
      529,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "Done",
    "start": 535,
    "end": 539,
    "range": [
      535,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 541,
    "end": 543,
    "range": [
      541,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 544,
    "end": 548,
    "range": [
      544,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 550,
    "end": 554,
    "range": [
      550,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncFunc",
    "start": 555,
    "end": 564,
    "range": [
      555,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 568,
    "end": 572,
    "range": [
      568,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 574,
    "end": 581,
    "range": [
      574,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 583,
    "end": 585,
    "range": [
      583,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 586,
    "end": 597,
    "range": [
      586,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 598,
    "end": 601,
    "range": [
      598,
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
    "value": ";",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 605,
    "end": 614,
    "range": [
      605,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "TestFunction",
    "start": 615,
    "end": 627,
    "range": [
      615,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 633,
    "end": 635,
    "range": [
      633,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 637,
    "end": 641,
    "range": [
      637,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642,
    "range": [
      641,
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
    "type": "Keyword",
    "value": "void",
    "start": 644,
    "end": 648,
    "range": [
      644,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncFunc",
    "start": 657,
    "end": 666,
    "range": [
      657,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 669,
    "end": 673,
    "range": [
      669,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
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
    "value": "title",
    "start": 678,
    "end": 683,
    "range": [
      678,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 685,
    "end": 691,
    "range": [
      685,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 693,
    "end": 695,
    "range": [
      693,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 698,
    "end": 702,
    "range": [
      698,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 705,
    "end": 709,
    "range": [
      705,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 714,
    "end": 719,
    "range": [
      714,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 721,
    "end": 727,
    "range": [
      721,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 729,
    "end": 731,
    "range": [
      729,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncFunc",
    "start": 734,
    "end": 743,
    "range": [
      734,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 746,
    "end": 750,
    "range": [
      746,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 755,
    "end": 762,
    "range": [
      755,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 763,
    "end": 768,
    "range": [
      763,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 769,
    "end": 773,
    "range": [
      769,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "TestFunction",
    "start": 775,
    "end": 787,
    "range": [
      775,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 790,
    "end": 799,
    "range": [
      790,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "ProcessTreeNode",
    "start": 800,
    "end": 815,
    "range": [
      800,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "pid",
    "start": 820,
    "end": 823,
    "range": [
      820,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 825,
    "end": 831,
    "range": [
      825,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 835,
    "end": 839,
    "range": [
      835,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 841,
    "end": 847,
    "range": [
      841,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "memory",
    "start": 851,
    "end": 857,
    "range": [
      851,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 860,
    "end": 866,
    "range": [
      860,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "commandLine",
    "start": 870,
    "end": 881,
    "range": [
      870,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 884,
    "end": 890,
    "range": [
      884,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 894,
    "end": 902,
    "range": [
      894,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "ProcessTreeNode",
    "start": 904,
    "end": 919,
    "range": [
      904,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 926,
    "end": 932,
    "range": [
      926,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 933,
    "end": 940,
    "range": [
      933,
      940
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 941,
    "end": 949,
    "range": [
      941,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "getProcessTree",
    "start": 950,
    "end": 964,
    "range": [
      950,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "rootPid",
    "start": 968,
    "end": 975,
    "range": [
      968,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 977,
    "end": 983,
    "range": [
      977,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 987,
    "end": 995,
    "range": [
      987,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 998,
    "end": 1002,
    "range": [
      998,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "ProcessTreeNode",
    "start": 1004,
    "end": 1019,
    "range": [
      1004,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1021,
    "end": 1023,
    "range": [
      1021,
      1023
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1024,
    "end": 1028,
    "range": [
      1024,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1032,
    "end": 1036,
    "range": [
      1032,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1039,
    "end": 1043,
    "range": [
      1039,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "String",
    "value": "\"windows-process-tree\"",
    "start": 1044,
    "end": 1066,
    "range": [
      1044,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1068,
    "end": 1073,
    "range": [
      1068,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1077,
    "end": 1079,
    "range": [
      1077,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1084,
    "end": 1090,
    "range": [
      1084,
      1090
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1091,
    "end": 1094,
    "range": [
      1091,
      1094
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1095,
    "end": 1102,
    "range": [
      1095,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1104,
    "end": 1111,
    "range": [
      1104,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1113,
    "end": 1119,
    "range": [
      1113,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1121,
    "end": 1123,
    "range": [
      1121,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "getProcessTree",
    "start": 1130,
    "end": 1144,
    "range": [
      1130,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1145,
    "end": 1148,
    "range": [
      1145,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 1151,
    "end": 1155,
    "range": [
      1151,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1157,
    "end": 1159,
    "range": [
      1157,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1168,
    "end": 1170,
    "range": [
      1168,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 1172,
    "end": 1176,
    "range": [
      1172,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1188,
    "end": 1195,
    "range": [
      1188,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1207,
    "end": 1211,
    "range": [
      1207,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1222,
    "end": 1228,
    "range": [
      1222,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1229,
    "end": 1232,
    "range": [
      1229,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1233,
    "end": 1238,
    "range": [
      1233,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "String",
    "value": "\"windows-process-tree\"",
    "start": 1239,
    "end": 1261,
    "range": [
      1239,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1292,
    "end": 1301,
    "range": [
      1292,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "ILocalExtension",
    "start": 1302,
    "end": 1317,
    "range": [
      1302,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "isApplicationScoped",
    "start": 1322,
    "end": 1341,
    "range": [
      1322,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1343,
    "end": 1350,
    "range": [
      1343,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Identifier",
    "value": "publisherId",
    "start": 1354,
    "end": 1365,
    "range": [
      1354,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1367,
    "end": 1373,
    "range": [
      1367,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1376,
    "end": 1380,
    "range": [
      1376,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1384,
    "end": 1388,
    "range": [
      1384,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "Metadata",
    "start": 1389,
    "end": 1397,
    "range": [
      1389,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "updated",
    "start": 1404,
    "end": 1411,
    "range": [
      1404,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1413,
    "end": 1420,
    "range": [
      1413,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1425,
    "end": 1432,
    "range": [
      1425,
      1432
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1433,
    "end": 1441,
    "range": [
      1433,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "scanMetadata",
    "start": 1442,
    "end": 1454,
    "range": [
      1442,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "local",
    "start": 1458,
    "end": 1463,
    "range": [
      1458,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "ILocalExtension",
    "start": 1465,
    "end": 1480,
    "range": [
      1465,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1484,
    "end": 1491,
    "range": [
      1484,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "Metadata",
    "start": 1492,
    "end": 1500,
    "range": [
      1492,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1503,
    "end": 1512,
    "range": [
      1503,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1516,
    "end": 1521,
    "range": [
      1516,
      1521
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1522,
    "end": 1530,
    "range": [
      1522,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "copyExtensions",
    "start": 1531,
    "end": 1545,
    "range": [
      1531,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Identifier",
    "value": "fromExtensions",
    "start": 1549,
    "end": 1563,
    "range": [
      1549,
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
    "type": "Identifier",
    "value": "ILocalExtension",
    "start": 1565,
    "end": 1580,
    "range": [
      1565,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1586,
    "end": 1593,
    "range": [
      1586,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1594,
    "end": 1598,
    "range": [
      1594,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1604,
    "end": 1609,
    "range": [
      1604,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "extensions",
    "start": 1610,
    "end": 1620,
    "range": [
      1610,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "ILocalExtension",
    "start": 1623,
    "end": 1638,
    "range": [
      1623,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "Metadata",
    "start": 1640,
    "end": 1648,
    "range": [
      1640,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1651,
    "end": 1660,
    "range": [
      1651,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1670,
    "end": 1675,
    "range": [
      1670,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1676,
    "end": 1683,
    "range": [
      1676,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 1684,
    "end": 1687,
    "range": [
      1684,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "fromExtensions",
    "start": 1695,
    "end": 1709,
    "range": [
      1695,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1719,
    "end": 1725,
    "range": [
      1719,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1730,
    "end": 1732,
    "range": [
      1730,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "isApplicationScoped",
    "start": 1736,
    "end": 1755,
    "range": [
      1736,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1766,
    "end": 1769,
    "range": [
      1766,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1770,
    "end": 1775,
    "range": [
      1770,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1780,
    "end": 1782,
    "range": [
      1780,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1787,
    "end": 1792,
    "range": [
      1787,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "scanMetadata",
    "start": 1793,
    "end": 1805,
    "range": [
      1793,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  }
]
```
