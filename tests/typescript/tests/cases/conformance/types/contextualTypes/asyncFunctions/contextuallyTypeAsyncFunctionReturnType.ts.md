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
