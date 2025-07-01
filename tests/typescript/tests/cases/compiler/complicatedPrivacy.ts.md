__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 32
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 63
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 68,
                                "end": 70
                              },
                              "typeArguments": null,
                              "start": 68,
                              "end": 70
                            },
                            "start": 66,
                            "end": 70
                          },
                          "start": 64,
                          "end": 70
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 72,
                        "end": 83
                      },
                      "expression": false,
                      "start": 52,
                      "end": 83
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 45,
                    "end": 83
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 110
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 115,
                                "end": 117
                              },
                              "typeArguments": null,
                              "start": 115,
                              "end": 117
                            },
                            "start": 113,
                            "end": 117
                          },
                          "start": 111,
                          "end": 117
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 119,
                        "end": 130
                      },
                      "expression": false,
                      "start": 99,
                      "end": 130
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 92,
                    "end": 130
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 155
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [
                        {
                          "type": "TSClassImplements",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 167,
                              "end": 169
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 170,
                              "end": 172
                            },
                            "optional": false,
                            "computed": false,
                            "start": 167,
                            "end": 172
                          },
                          "typeArguments": null,
                          "start": 167,
                          "end": 172
                        }
                      ],
                      "body": {
                        "type": "ClassBody",
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 198,
                              "end": 200
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 201,
                                  "end": 204
                                }
                              ],
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
                                        "name": "C1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 235,
                                        "end": 237
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "start": 231,
                                      "end": 239
                                    },
                                    "start": 224,
                                    "end": 240
                                  }
                                ],
                                "start": 206,
                                "end": 254
                              },
                              "expression": false,
                              "start": 200,
                              "end": 254
                            },
                            "kind": "get",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 187,
                            "end": 254
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 279,
                              "end": 281
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 288,
                                        "end": 290
                                      },
                                      "typeArguments": null,
                                      "start": 288,
                                      "end": 290
                                    },
                                    "start": 286,
                                    "end": 290
                                  },
                                  "start": 282,
                                  "end": 290
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 292,
                                "end": 307
                              },
                              "expression": false,
                              "start": 281,
                              "end": 307
                            },
                            "kind": "set",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 268,
                            "end": 307
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f55",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 328,
                              "end": 331
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "value": "Hello world",
                                      "raw": "\"Hello world\"",
                                      "start": 359,
                                      "end": 372
                                    },
                                    "start": 352,
                                    "end": 373
                                  }
                                ],
                                "start": 334,
                                "end": 387
                              },
                              "expression": false,
                              "start": 331,
                              "end": 387
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 321,
                            "end": 387
                          }
                        ],
                        "start": 173,
                        "end": 397
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 147,
                      "end": 397
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 140,
                    "end": 397
                  }
                ],
                "start": 33,
                "end": 403
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 23,
              "end": 403
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 403
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 427
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 440,
                                "end": 442
                              },
                              "typeArguments": null,
                              "start": 440,
                              "end": 442
                            },
                            "start": 438,
                            "end": 442
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 436,
                          "end": 443
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 444,
                            "end": 445
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 447,
                              "end": 453
                            },
                            "start": 445,
                            "end": 453
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 444,
                          "end": 453
                        }
                      ],
                      "start": 434,
                      "end": 455
                    },
                    "start": 432,
                    "end": 455
                  },
                  "start": 428,
                  "end": 455
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 457,
                "end": 464
              },
              "expression": false,
              "start": 416,
              "end": 464
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 409,
            "end": 464
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 488
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 506,
                              "end": 512
                            },
                            "start": 504,
                            "end": 512
                          },
                          "start": 503,
                          "end": 512
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 516,
                            "end": 518
                          },
                          "typeArguments": null,
                          "start": 516,
                          "end": 518
                        },
                        "start": 514,
                        "end": 518
                      },
                      "start": 502,
                      "end": 519
                    }
                  ],
                  "start": 492,
                  "end": 525
                },
                "start": 490,
                "end": 525
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 543,
                      "end": 547
                    },
                    "start": 536,
                    "end": 548
                  }
                ],
                "start": 526,
                "end": 554
              },
              "expression": false,
              "start": 477,
              "end": 554
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 470,
            "end": 554
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f4",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 578
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": true,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "number",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 597,
                            "end": 603
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 606,
                                "end": 608
                              },
                              "typeArguments": null,
                              "start": 606,
                              "end": 608
                            },
                            "start": 604,
                            "end": 608
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 596,
                          "end": 609
                        }
                      ],
                      "start": 590,
                      "end": 668
                    },
                    "start": 583,
                    "end": 668
                  },
                  "start": 579,
                  "end": 668
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 670,
                "end": 677
              },
              "expression": false,
              "start": 567,
              "end": 677
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 560,
            "end": 677
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f5",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 702
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 730,
                                    "end": 732
                                  },
                                  "typeArguments": null,
                                  "start": 730,
                                  "end": 732
                                },
                                "start": 728,
                                "end": 732
                              },
                              "start": 724,
                              "end": 732
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 736,
                                "end": 738
                              },
                              "typeArguments": null,
                              "start": 736,
                              "end": 738
                            },
                            "start": 734,
                            "end": 738
                          },
                          "start": 719,
                          "end": 738
                        }
                      ],
                      "start": 709,
                      "end": 744
                    },
                    "start": 707,
                    "end": 744
                  },
                  "start": 703,
                  "end": 744
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 746,
                "end": 753
              },
              "expression": false,
              "start": 691,
              "end": 753
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 684,
            "end": 753
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 767
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 789
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 794,
                            "end": 796
                          },
                          "typeArguments": null,
                          "start": 794,
                          "end": 796
                        },
                        "start": 792,
                        "end": 796
                      },
                      "start": 790,
                      "end": 796
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 798,
                    "end": 809
                  },
                  "expression": false,
                  "start": 778,
                  "end": 809
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 836,
                      "end": 838
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f55",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 853,
                            "end": 856
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 860,
                              "end": 866
                            },
                            "start": 858,
                            "end": 866
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 853,
                          "end": 867
                        }
                      ],
                      "start": 839,
                      "end": 877
                    },
                    "declare": false,
                    "start": 826,
                    "end": 877
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 819,
                  "end": 877
                }
              ],
              "start": 768,
              "end": 883
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 758,
            "end": 883
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 897
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 898,
              "end": 905
            },
            "abstract": false,
            "declare": false,
            "start": 889,
            "end": 905
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 921,
              "end": 922
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 933,
                    "end": 934
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 936,
                      "end": 942
                    },
                    "start": 934,
                    "end": 942
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 933,
                  "end": 943
                }
              ],
              "start": 923,
              "end": 949
            },
            "declare": false,
            "start": 911,
            "end": 949
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C5",
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 970
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 983
                  },
                  "typeArguments": null,
                  "start": 982,
                  "end": 983
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1001,
                      "end": 1002
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1004,
                        "end": 1010
                      },
                      "start": 1002,
                      "end": 1010
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 994,
                    "end": 1011
                  }
                ],
                "start": 984,
                "end": 1017
              },
              "abstract": false,
              "declare": false,
              "start": 962,
              "end": 1017
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 955,
            "end": 1017
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v2",
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
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1038,
                            "end": 1040
                          },
                          "typeArguments": null,
                          "start": 1038,
                          "end": 1040
                        },
                        "start": 1038,
                        "end": 1042
                      },
                      "start": 1036,
                      "end": 1042
                    },
                    "start": 1034,
                    "end": 1042
                  },
                  "init": null,
                  "definite": false,
                  "start": 1034,
                  "end": 1042
                }
              ],
              "declare": false,
              "start": 1030,
              "end": 1043
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1023,
            "end": 1043
          }
        ],
        "start": 10,
        "end": 1045
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1045
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1055
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1056,
        "end": 1059
      },
      "abstract": false,
      "declare": false,
      "start": 1047,
      "end": 1059
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1068,
        "end": 1070
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1091,
                "end": 1093
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c_pr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1118,
                        "end": 1122
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [
                        {
                          "type": "TSClassImplements",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mglo5",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1135,
                              "end": 1140
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i5",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1141,
                              "end": 1143
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1135,
                            "end": 1143
                          },
                          "typeArguments": null,
                          "start": 1135,
                          "end": 1143
                        },
                        {
                          "type": "TSClassImplements",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mglo5",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1145,
                              "end": 1150
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i6",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1151,
                              "end": 1153
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1145,
                            "end": 1153
                          },
                          "typeArguments": null,
                          "start": 1145,
                          "end": 1153
                        }
                      ],
                      "body": {
                        "type": "ClassBody",
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1168,
                              "end": 1170
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "value": "Hello",
                                      "raw": "\"Hello\"",
                                      "start": 1198,
                                      "end": 1205
                                    },
                                    "start": 1191,
                                    "end": 1206
                                  }
                                ],
                                "start": 1173,
                                "end": 1220
                              },
                              "expression": false,
                              "start": 1170,
                              "end": 1220
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 1168,
                            "end": 1220
                          }
                        ],
                        "start": 1154,
                        "end": 1230
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1112,
                      "end": 1230
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1105,
                    "end": 1230
                  },
                  {
                    "type": "TSModuleDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1255,
                      "end": 1257
                    },
                    "body": {
                      "type": "TSModuleBlock",
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1278,
                            "end": 1279
                          },
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "body": [],
                            "start": 1280,
                            "end": 1295
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 1272,
                          "end": 1295
                        },
                        {
                          "type": "TSModuleDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1315,
                            "end": 1317
                          },
                          "body": {
                            "type": "TSModuleBlock",
                            "body": [
                              {
                                "type": "ExportNamedDeclaration",
                                "declaration": {
                                  "type": "TSModuleDeclaration",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m6",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1367,
                                    "end": 1369
                                  },
                                  "body": {
                                    "type": "TSModuleBlock",
                                    "body": [
                                      {
                                        "type": "FunctionDeclaration",
                                        "id": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "f1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1401,
                                          "end": 1403
                                        },
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
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
                                                  "name": "C",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1443,
                                                  "end": 1444
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 1439,
                                                "end": 1446
                                              },
                                              "start": 1432,
                                              "end": 1447
                                            }
                                          ],
                                          "start": 1406,
                                          "end": 1469
                                        },
                                        "expression": false,
                                        "start": 1392,
                                        "end": 1469
                                      }
                                    ],
                                    "start": 1370,
                                    "end": 1487
                                  },
                                  "kind": "module",
                                  "declare": false,
                                  "global": false,
                                  "start": 1360,
                                  "end": 1487
                                },
                                "specifiers": [],
                                "source": null,
                                "exportKind": "value",
                                "attributes": [],
                                "start": 1353,
                                "end": 1487
                              }
                            ],
                            "start": 1318,
                            "end": 1501
                          },
                          "kind": "module",
                          "declare": false,
                          "global": false,
                          "start": 1308,
                          "end": 1501
                        }
                      ],
                      "start": 1258,
                      "end": 1511
                    },
                    "kind": "module",
                    "declare": false,
                    "global": false,
                    "start": 1248,
                    "end": 1511
                  }
                ],
                "start": 1094,
                "end": 1518
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1084,
              "end": 1518
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1077,
            "end": 1518
          }
        ],
        "start": 1071,
        "end": 1520
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1061,
      "end": 1520
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mglo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1529,
        "end": 1534
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1560
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1571,
                      "end": 1573
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1577,
                        "end": 1583
                      },
                      "start": 1575,
                      "end": 1583
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1571,
                    "end": 1584
                  }
                ],
                "start": 1561,
                "end": 1590
              },
              "declare": false,
              "start": 1548,
              "end": 1590
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1541,
            "end": 1590
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1606,
              "end": 1608
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1619,
                    "end": 1621
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1625,
                      "end": 1631
                    },
                    "start": 1623,
                    "end": 1631
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1619,
                  "end": 1632
                }
              ],
              "start": 1609,
              "end": 1638
            },
            "declare": false,
            "start": 1596,
            "end": 1638
          }
        ],
        "start": 1535,
        "end": 1640
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1522,
      "end": 1640
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1640
}
```
