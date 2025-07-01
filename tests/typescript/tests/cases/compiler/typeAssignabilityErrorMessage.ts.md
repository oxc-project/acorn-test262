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
        "name": "ThroughStream",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 68
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 85
          }
        ],
        "start": 69,
        "end": 87
      },
      "declare": false,
      "start": 45,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadStream",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 108
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
              },
              "start": 116,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 115,
            "end": 125
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 140
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 148,
                "end": 155
              },
              "start": 146,
              "end": 155
            },
            "accessibility": null,
            "static": false,
            "start": 145,
            "end": 156
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 170
                },
                "typeArguments": null,
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 161,
            "end": 171
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 186
          }
        ],
        "start": 109,
        "end": 188
      },
      "declare": false,
      "start": 88,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 201
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
            "name": "ReadStream",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 215
          },
          "typeArguments": null,
          "start": 205,
          "end": 215
        },
        "start": 203,
        "end": 215
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 238
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 242,
                  "end": 245
                },
                "start": 229,
                "end": 245
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThroughStream",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 262
                },
                "typeArguments": null,
                "start": 249,
                "end": 262
              },
              "start": 229,
              "end": 262
            },
            "start": 222,
            "end": 263
          }
        ],
        "start": 216,
        "end": 265
      },
      "expression": false,
      "start": 189,
      "end": 265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 278
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
            "name": "ReadStream",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 292
          },
          "typeArguments": null,
          "start": 282,
          "end": 292
        },
        "start": 280,
        "end": 292
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 315
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 319,
                  "end": 322
                },
                "start": 306,
                "end": 322
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThroughStream",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 339
                },
                "typeArguments": null,
                "start": 326,
                "end": 339
              },
              "start": 306,
              "end": 339
            },
            "start": 299,
            "end": 340
          }
        ],
        "start": 293,
        "end": 342
      },
      "expression": false,
      "start": 266,
      "end": 342
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 388
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
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 405
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 410
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 411,
                      "end": 417
                    }
                  ],
                  "start": 410,
                  "end": 418
                },
                "start": 407,
                "end": 418
              },
              "start": 405,
              "end": 418
            },
            "accessibility": null,
            "static": false,
            "start": 397,
            "end": 419
          }
        ],
        "start": 391,
        "end": 421
      },
      "declare": false,
      "start": 379,
      "end": 421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OtherWrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 436
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
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 453
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 455,
                  "end": 458
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    }
                  ],
                  "start": 458,
                  "end": 466
                },
                "start": 455,
                "end": 466
              },
              "start": 453,
              "end": 466
            },
            "accessibility": null,
            "static": false,
            "start": 445,
            "end": 467
          }
        ],
        "start": 439,
        "end": 469
      },
      "declare": false,
      "start": 422,
      "end": 469
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 475,
        "end": 478
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
              "start": 479,
              "end": 480
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 479,
            "end": 480
          }
        ],
        "start": 478,
        "end": 481
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 493
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
                      "name": "what",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 497,
                      "end": 501
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
                          "start": 503,
                          "end": 504
                        },
                        "typeArguments": null,
                        "start": 503,
                        "end": 504
                      },
                      "start": 501,
                      "end": 504
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 497,
                    "end": 504
                  }
                ],
                "start": 495,
                "end": 506
              },
              "start": 493,
              "end": 506
            },
            "accessibility": null,
            "static": false,
            "start": 490,
            "end": 507
          }
        ],
        "start": 484,
        "end": 509
      },
      "declare": false,
      "start": 470,
      "end": 509
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 518
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
              "start": 519,
              "end": 520
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 520
          }
        ],
        "start": 518,
        "end": 521
      },
      "typeAnnotation": {
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 533
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
                          "name": "what",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 541
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
                              "start": 543,
                              "end": 544
                            },
                            "typeArguments": null,
                            "start": 543,
                            "end": 544
                          },
                          "start": 541,
                          "end": 544
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 537,
                        "end": 544
                      }
                    ],
                    "start": 535,
                    "end": 546
                  },
                  "start": 533,
                  "end": 546
                },
                "accessibility": null,
                "static": false,
                "start": 530,
                "end": 547
              }
            ],
            "start": 524,
            "end": 549
          },
          {
            "type": "TSBooleanKeyword",
            "start": 552,
            "end": 559
          }
        ],
        "start": 524,
        "end": 559
      },
      "declare": false,
      "start": 510,
      "end": 560
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 571,
        "end": 574
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 586
              },
              "typeArguments": null,
              "start": 582,
              "end": 586
            },
            "start": 580,
            "end": 586
          },
          "start": 575,
          "end": 586
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 589,
          "end": 593
        },
        "start": 587,
        "end": 593
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 594,
        "end": 596
      },
      "expression": false,
      "start": 562,
      "end": 596
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 621
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 622,
                      "end": 628
                    }
                  ],
                  "start": 621,
                  "end": 629
                },
                "start": 618,
                "end": 629
              },
              "start": 616,
              "end": 629
            },
            "start": 610,
            "end": 629
          },
          "init": null,
          "definite": false,
          "start": 610,
          "end": 629
        }
      ],
      "declare": true,
      "start": 598,
      "end": 630
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "otherWrap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OtherWrap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 663
                },
                "typeArguments": null,
                "start": 654,
                "end": 663
              },
              "start": 652,
              "end": 663
            },
            "start": 643,
            "end": 663
          },
          "init": null,
          "definite": false,
          "start": 643,
          "end": 663
        }
      ],
      "declare": true,
      "start": 631,
      "end": 664
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 676
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 677,
                      "end": 683
                    }
                  ],
                  "start": 676,
                  "end": 684
                },
                "start": 673,
                "end": 684
              },
              "start": 671,
              "end": 684
            },
            "start": 670,
            "end": 684
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 693
          },
          "definite": false,
          "start": 670,
          "end": 693
        }
      ],
      "declare": false,
      "start": 666,
      "end": 694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": null,
          "start": 696,
          "end": 699
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "otherWrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 700,
            "end": 709
          }
        ],
        "optional": false,
        "start": 696,
        "end": 710
      },
      "directive": null,
      "start": 696,
      "end": 711
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 711
}
```
