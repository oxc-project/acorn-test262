__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1820,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 21,
                "end": 28,
                "literal": {
                  "type": "Literal",
                  "start": 21,
                  "end": 28,
                  "value": "value",
                  "raw": "\"value\""
                }
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
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 100,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 74,
            "end": 98,
            "argument": {
              "type": "ObjectExpression",
              "start": 81,
              "end": 97,
              "properties": [
                {
                  "type": "Property",
                  "start": 83,
                  "end": 95,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 88,
                    "end": 95,
                    "value": "value",
                    "raw": "\"value\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 53,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 55,
          "end": 67,
          "typeName": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 67,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "name": "Obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "name": "fn2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 219,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 143,
            "end": 217,
            "argument": {
              "type": "NewExpression",
              "start": 150,
              "end": 216,
              "callee": {
                "type": "Identifier",
                "start": 154,
                "end": 161,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 162,
                  "end": 215,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 162,
                      "end": 169,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 173,
                    "end": 215,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 183,
                        "end": 209,
                        "expression": {
                          "type": "CallExpression",
                          "start": 183,
                          "end": 208,
                          "callee": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 190,
                            "name": "resolve",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 191,
                              "end": 207,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 193,
                                  "end": 205,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 193,
                                    "end": 196,
                                    "name": "key",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 198,
                                    "end": 205,
                                    "value": "value",
                                    "raw": "\"value\""
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
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 122,
        "end": 136,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 124,
          "end": 136,
          "typeName": {
            "type": "Identifier",
            "start": 124,
            "end": 131,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 131,
            "end": 136,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 132,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 135,
                  "name": "Obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 221,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 239,
        "name": "fn3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 294,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 262,
            "end": 292,
            "argument": {
              "type": "AwaitExpression",
              "start": 269,
              "end": 291,
              "argument": {
                "type": "ObjectExpression",
                "start": 275,
                "end": 291,
                "properties": [
                  {
                    "type": "Property",
                    "start": 277,
                    "end": 289,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 280,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 282,
                      "end": 289,
                      "value": "value",
                      "raw": "\"value\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 241,
        "end": 255,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 243,
          "end": 255,
          "typeName": {
            "type": "Identifier",
            "start": 243,
            "end": 250,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 250,
            "end": 255,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 251,
                "end": 254,
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 254,
                  "name": "Obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 296,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 314,
        "name": "fn4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 331,
        "end": 419,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 337,
            "end": 417,
            "argument": {
              "type": "AwaitExpression",
              "start": 344,
              "end": 416,
              "argument": {
                "type": "NewExpression",
                "start": 350,
                "end": 416,
                "callee": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 361,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 362,
                    "end": 415,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 362,
                        "end": 369,
                        "name": "resolve",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 373,
                      "end": 415,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 383,
                          "end": 409,
                          "expression": {
                            "type": "CallExpression",
                            "start": 383,
                            "end": 408,
                            "callee": {
                              "type": "Identifier",
                              "start": 383,
                              "end": 390,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "ObjectExpression",
                                "start": 391,
                                "end": 407,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 393,
                                    "end": 405,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 393,
                                      "end": 396,
                                      "name": "key",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 398,
                                      "end": 405,
                                      "value": "value",
                                      "raw": "\"value\""
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
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 316,
        "end": 330,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 318,
          "end": 330,
          "typeName": {
            "type": "Identifier",
            "start": 318,
            "end": 325,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 325,
            "end": 330,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 326,
                "end": 329,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 329,
                  "name": "Obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 421,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 435,
        "end": 442,
        "name": "Context",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 443,
        "end": 467,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 447,
            "end": 465,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 455,
              "end": 464,
              "name": "_runnable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 468,
      "end": 500,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 477,
        "name": "Done",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 480,
        "end": 499,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 481,
            "end": 490,
            "name": "err",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 490,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 487,
                "end": 490
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 492,
          "end": 499,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 495,
            "end": 499
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 501,
      "end": 549,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 510,
        "name": "Func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 513,
        "end": 548,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 514,
            "end": 527,
            "name": "this",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 518,
              "end": 527,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 520,
                "end": 527,
                "typeName": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 527,
                  "name": "Context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 529,
            "end": 539,
            "name": "done",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 533,
              "end": 539,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 535,
                "end": 539,
                "typeName": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 539,
                  "name": "Done",
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
          "start": 541,
          "end": 548,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 544,
            "end": 548
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 550,
      "end": 603,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 564,
        "name": "AsyncFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 567,
        "end": 602,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 568,
            "end": 581,
            "name": "this",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 572,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 574,
                "end": 581,
                "typeName": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 581,
                  "name": "Context",
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
          "start": 583,
          "end": 602,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 586,
            "end": 602,
            "typeName": {
              "type": "Identifier",
              "start": 586,
              "end": 597,
              "name": "PromiseLike",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 597,
              "end": 602,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 598,
                  "end": 601
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 605,
      "end": 753,
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 627,
        "name": "TestFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 628,
        "end": 753,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 632,
            "end": 649,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 633,
                "end": 641,
                "name": "fn",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 635,
                  "end": 641,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 637,
                    "end": 641,
                    "typeName": {
                      "type": "Identifier",
                      "start": 637,
                      "end": 641,
                      "name": "Func",
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
              "start": 642,
              "end": 648,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 644,
                "end": 648
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 652,
            "end": 674,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 653,
                "end": 666,
                "name": "fn",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 655,
                  "end": 666,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 657,
                    "end": 666,
                    "typeName": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 666,
                      "name": "AsyncFunc",
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
              "start": 667,
              "end": 673,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 669,
                "end": 673
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 677,
            "end": 710,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 678,
                "end": 691,
                "name": "title",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 683,
                  "end": 691,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 685,
                    "end": 691
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 693,
                "end": 702,
                "name": "fn",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 696,
                  "end": 702,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 698,
                    "end": 702,
                    "typeName": {
                      "type": "Identifier",
                      "start": 698,
                      "end": 702,
                      "name": "Func",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 703,
              "end": 709,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 705,
                "end": 709
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 713,
            "end": 751,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 714,
                "end": 727,
                "name": "title",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 719,
                  "end": 727,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 721,
                    "end": 727
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 729,
                "end": 743,
                "name": "fn",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 732,
                  "end": 743,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 734,
                    "end": 743,
                    "typeName": {
                      "type": "Identifier",
                      "start": 734,
                      "end": 743,
                      "name": "AsyncFunc",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 744,
              "end": 750,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 746,
                "end": 750
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 755,
      "end": 788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 769,
          "end": 787,
          "id": {
            "type": "Identifier",
            "start": 769,
            "end": 787,
            "name": "test",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 773,
              "end": 787,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 775,
                "end": 787,
                "typeName": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 787,
                  "name": "TestFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 790,
      "end": 924,
      "id": {
        "type": "Identifier",
        "start": 800,
        "end": 815,
        "name": "ProcessTreeNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 816,
        "end": 924,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 820,
            "end": 832,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 820,
              "end": 823,
              "name": "pid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 823,
              "end": 831,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 825,
                "end": 831
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 835,
            "end": 848,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 835,
              "end": 839,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 839,
              "end": 847,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 851,
            "end": 867,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 857,
              "name": "memory",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 858,
              "end": 866,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 860,
                "end": 866
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 870,
            "end": 891,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 870,
              "end": 881,
              "name": "commandLine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 882,
              "end": 890,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 884,
                "end": 890
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 894,
            "end": 922,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 894,
              "end": 902,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 902,
              "end": 921,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 904,
                "end": 921,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 904,
                  "end": 919,
                  "typeName": {
                    "type": "Identifier",
                    "start": 904,
                    "end": 919,
                    "name": "ProcessTreeNode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
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
      "type": "ExportNamedDeclaration",
      "start": 926,
      "end": 1037,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 933,
        "end": 1037,
        "id": {
          "type": "Identifier",
          "start": 950,
          "end": 964,
          "name": "getProcessTree",
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
            "start": 968,
            "end": 983,
            "name": "rootPid",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 975,
              "end": 983,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 977,
                "end": 983
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 987,
            "end": 1028,
            "name": "callback",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 995,
              "end": 1028,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 997,
                "end": 1028,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 998,
                    "end": 1019,
                    "name": "tree",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1002,
                      "end": 1019,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1004,
                        "end": 1019,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1004,
                          "end": 1019,
                          "name": "ProcessTreeNode",
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
                  "start": 1021,
                  "end": 1028,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1024,
                    "end": 1028
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1030,
          "end": 1036,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1032,
            "end": 1036
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExpressionStatement",
      "start": 1039,
      "end": 1290,
      "expression": {
        "type": "CallExpression",
        "start": 1039,
        "end": 1289,
        "callee": {
          "type": "Identifier",
          "start": 1039,
          "end": 1043,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1044,
            "end": 1066,
            "value": "windows-process-tree",
            "raw": "\"windows-process-tree\""
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1068,
            "end": 1288,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1080,
              "end": 1288,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1084,
                  "end": 1286,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1091,
                    "end": 1285,
                    "callee": {
                      "type": "Identifier",
                      "start": 1095,
                      "end": 1102,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1103,
                        "end": 1284,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1104,
                            "end": 1111,
                            "name": "resolve",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1113,
                            "end": 1119,
                            "name": "reject",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 1124,
                          "end": 1284,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1130,
                              "end": 1280,
                              "expression": {
                                "type": "CallExpression",
                                "start": 1130,
                                "end": 1279,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1130,
                                  "end": 1144,
                                  "name": "getProcessTree",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 1145,
                                    "end": 1148,
                                    "value": 123,
                                    "raw": "123"
                                  },
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1150,
                                    "end": 1278,
                                    "id": null,
                                    "expression": false,
                                    "generator": false,
                                    "async": false,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1151,
                                        "end": 1155,
                                        "name": "tree",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 1160,
                                      "end": 1278,
                                      "body": [
                                        {
                                          "type": "IfStatement",
                                          "start": 1168,
                                          "end": 1272,
                                          "test": {
                                            "type": "Identifier",
                                            "start": 1172,
                                            "end": 1176,
                                            "name": "tree",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "start": 1178,
                                            "end": 1206,
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "start": 1188,
                                                "end": 1198,
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "start": 1188,
                                                  "end": 1197,
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 1188,
                                                    "end": 1195,
                                                    "name": "resolve",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "arguments": [],
                                                  "optional": false,
                                                  "typeArguments": null
                                                },
                                                "directive": null
                                              }
                                            ]
                                          },
                                          "alternate": {
                                            "type": "BlockStatement",
                                            "start": 1212,
                                            "end": 1272,
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "start": 1222,
                                                "end": 1264,
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "start": 1222,
                                                  "end": 1263,
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 1222,
                                                    "end": 1228,
                                                    "name": "reject",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "NewExpression",
                                                      "start": 1229,
                                                      "end": 1262,
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "start": 1233,
                                                        "end": 1238,
                                                        "name": "Error",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "start": 1239,
                                                          "end": 1261,
                                                          "value": "windows-process-tree",
                                                          "raw": "\"windows-process-tree\""
                                                        }
                                                      ],
                                                      "typeArguments": null
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "typeArguments": null
                                                },
                                                "directive": null
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    },
                                    "typeParameters": null,
                                    "returnType": null
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1292,
      "end": 1383,
      "id": {
        "type": "Identifier",
        "start": 1302,
        "end": 1317,
        "name": "ILocalExtension",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1318,
        "end": 1383,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1322,
            "end": 1351,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1341,
              "name": "isApplicationScoped",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1341,
              "end": 1350,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1343,
                "end": 1350
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1354,
            "end": 1381,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1354,
              "end": 1365,
              "name": "publisherId",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1365,
              "end": 1380,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1367,
                "end": 1380,
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
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 1384,
      "end": 1424,
      "id": {
        "type": "Identifier",
        "start": 1389,
        "end": 1397,
        "name": "Metadata",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1400,
        "end": 1423,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1404,
            "end": 1421,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1404,
              "end": 1411,
              "name": "updated",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1411,
              "end": 1420,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1413,
                "end": 1420
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
      "start": 1425,
      "end": 1514,
      "id": {
        "type": "Identifier",
        "start": 1442,
        "end": 1454,
        "name": "scanMetadata",
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
          "start": 1458,
          "end": 1480,
          "name": "local",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1463,
            "end": 1480,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1465,
              "end": 1480,
              "typeName": {
                "type": "Identifier",
                "start": 1465,
                "end": 1480,
                "name": "ILocalExtension",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1482,
        "end": 1513,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1484,
          "end": 1513,
          "typeName": {
            "type": "Identifier",
            "start": 1484,
            "end": 1491,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1491,
            "end": 1513,
            "params": [
              {
                "type": "TSUnionType",
                "start": 1492,
                "end": 1512,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1492,
                    "end": 1500,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1492,
                      "end": 1500,
                      "name": "Metadata",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1503,
                    "end": 1512
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1516,
      "end": 1819,
      "id": {
        "type": "Identifier",
        "start": 1531,
        "end": 1545,
        "name": "copyExtensions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1549,
          "end": 1582,
          "name": "fromExtensions",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1563,
            "end": 1582,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1565,
              "end": 1582,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1565,
                "end": 1580,
                "typeName": {
                  "type": "Identifier",
                  "start": 1565,
                  "end": 1580,
                  "name": "ILocalExtension",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1600,
        "end": 1819,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1604,
            "end": 1817,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1610,
                "end": 1816,
                "id": {
                  "type": "Identifier",
                  "start": 1610,
                  "end": 1663,
                  "name": "extensions",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1620,
                    "end": 1663,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1622,
                      "end": 1663,
                      "elementType": {
                        "type": "TSTupleType",
                        "start": 1622,
                        "end": 1661,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 1623,
                            "end": 1638,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1623,
                              "end": 1638,
                              "name": "ILocalExtension",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSUnionType",
                            "start": 1640,
                            "end": 1660,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 1640,
                                "end": 1648,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1640,
                                  "end": 1648,
                                  "name": "Metadata",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 1651,
                                "end": 1660
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 1670,
                  "end": 1816,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1676,
                    "end": 1816,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1676,
                      "end": 1687,
                      "object": {
                        "type": "Identifier",
                        "start": 1676,
                        "end": 1683,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1684,
                        "end": 1687,
                        "name": "all",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 1695,
                        "end": 1810,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1695,
                          "end": 1769,
                          "object": {
                            "type": "CallExpression",
                            "start": 1695,
                            "end": 1756,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1695,
                              "end": 1725,
                              "object": {
                                "type": "Identifier",
                                "start": 1695,
                                "end": 1709,
                                "name": "fromExtensions",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1719,
                                "end": 1725,
                                "name": "filter",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1726,
                                "end": 1755,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1727,
                                    "end": 1728,
                                    "name": "e",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "UnaryExpression",
                                  "start": 1733,
                                  "end": 1755,
                                  "operator": "!",
                                  "prefix": true,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 1734,
                                    "end": 1755,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1734,
                                      "end": 1735,
                                      "name": "e",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1736,
                                      "end": 1755,
                                      "name": "isApplicationScoped",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                },
                                "typeParameters": null,
                                "returnType": null
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1766,
                            "end": 1769,
                            "name": "map",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1770,
                            "end": 1809,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": true,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1777,
                                "end": 1778,
                                "name": "e",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "ArrayExpression",
                              "start": 1783,
                              "end": 1809,
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 1784,
                                  "end": 1785,
                                  "name": "e",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "AwaitExpression",
                                  "start": 1787,
                                  "end": 1808,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 1793,
                                    "end": 1808,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1793,
                                      "end": 1805,
                                      "name": "scanMetadata",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1806,
                                        "end": 1807,
                                        "name": "e",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ]
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1584,
        "end": 1599,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1586,
          "end": 1599,
          "typeName": {
            "type": "Identifier",
            "start": 1586,
            "end": 1593,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1593,
            "end": 1599,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 1594,
                "end": 1598
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
