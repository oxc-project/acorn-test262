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
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 32
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
                    "start": 33,
                    "end": 34
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 33,
                  "end": 34
                }
              ],
              "start": 32,
              "end": 35
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 54,
                          "end": 60
                        },
                        "start": 52,
                        "end": 60
                      },
                      "start": 47,
                      "end": 60
                    }
                  ],
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
                        "start": 63,
                        "end": 64
                      },
                      "typeArguments": null,
                      "start": 63,
                      "end": 64
                    },
                    "start": 61,
                    "end": 64
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 46,
                  "end": 65
                }
              ],
              "start": 36,
              "end": 71
            },
            "declare": false,
            "start": 19,
            "end": 71
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Equals",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 93
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
                    "start": 94,
                    "end": 95
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 94,
                  "end": 95
                }
              ],
              "start": 93,
              "end": 96
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 113
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
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
                            "start": 121,
                            "end": 122
                          },
                          "typeArguments": null,
                          "start": 121,
                          "end": 122
                        },
                        "start": 119,
                        "end": 122
                      },
                      "start": 114,
                      "end": 122
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 125,
                      "end": 132
                    },
                    "start": 123,
                    "end": 132
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 107,
                  "end": 133
                }
              ],
              "start": 97,
              "end": 139
            },
            "declare": false,
            "start": 77,
            "end": 139
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 157
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 158,
              "end": 165
            },
            "abstract": false,
            "declare": false,
            "start": 145,
            "end": 165
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 181
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
            },
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
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 213
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
                        "name": "that",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 220,
                              "end": 224
                            },
                            "typeArguments": null,
                            "start": 220,
                            "end": 224
                          },
                          "start": 218,
                          "end": 224
                        },
                        "start": 214,
                        "end": 224
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 227,
                        "end": 234
                      },
                      "start": 225,
                      "end": 234
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "ThisExpression",
                              "start": 253,
                              "end": 257
                            },
                            "operator": "===",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "that",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 262,
                              "end": 266
                            },
                            "start": 253,
                            "end": 266
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 275,
                              "end": 279
                            },
                            "start": 268,
                            "end": 280
                          },
                          "alternate": null,
                          "start": 249,
                          "end": 280
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 299,
                                    "end": 303
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 304,
                                    "end": 316
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 299,
                                  "end": 316
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 299,
                                "end": 318
                              },
                              "operator": "&&",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 322,
                                    "end": 326
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 327,
                                    "end": 339
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 322,
                                  "end": 339
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 322,
                                "end": 341
                              },
                              "start": 299,
                              "end": 341
                            },
                            "prefix": true,
                            "start": 297,
                            "end": 342
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 351,
                              "end": 356
                            },
                            "start": 344,
                            "end": 357
                          },
                          "alternate": null,
                          "start": 293,
                          "end": 357
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "propCount",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 374,
                                "end": 383
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 386,
                                    "end": 390
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getPropertyCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 391,
                                    "end": 407
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 386,
                                  "end": 407
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 386,
                                "end": 409
                              },
                              "definite": false,
                              "start": 374,
                              "end": 409
                            }
                          ],
                          "declare": false,
                          "start": 370,
                          "end": 410
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "propCount",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 427,
                              "end": 436
                            },
                            "operator": "!==",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 441,
                                  "end": 445
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getPropertyCount",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 446,
                                  "end": 462
                                },
                                "optional": false,
                                "computed": false,
                                "start": 441,
                                "end": 462
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 441,
                              "end": 464
                            },
                            "start": 427,
                            "end": 464
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 473,
                              "end": 478
                            },
                            "start": 466,
                            "end": 479
                          },
                          "alternate": null,
                          "start": 423,
                          "end": 479
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sigCount",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 496,
                                "end": 504
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 507,
                                    "end": 511
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getSignatureCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 512,
                                    "end": 529
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 507,
                                  "end": 529
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 507,
                                "end": 531
                              },
                              "definite": false,
                              "start": 496,
                              "end": 531
                            }
                          ],
                          "declare": false,
                          "start": 492,
                          "end": 532
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sigCount",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 549,
                              "end": 557
                            },
                            "operator": "!==",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 562,
                                  "end": 566
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getSignatureCount",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 567,
                                  "end": 584
                                },
                                "optional": false,
                                "computed": false,
                                "start": 562,
                                "end": 584
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 562,
                              "end": 586
                            },
                            "start": 549,
                            "end": 586
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 595,
                              "end": 600
                            },
                            "start": 588,
                            "end": 601
                          },
                          "alternate": null,
                          "start": 545,
                          "end": 601
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "propCount",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 618,
                            "end": 627
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ForStatement",
                                "init": {
                                  "type": "VariableDeclaration",
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 656,
                                        "end": 657
                                      },
                                      "init": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 660,
                                        "end": 661
                                      },
                                      "definite": false,
                                      "start": 656,
                                      "end": 661
                                    }
                                  ],
                                  "declare": false,
                                  "start": 652,
                                  "end": 661
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 663,
                                    "end": 664
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "propCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 667,
                                    "end": 676
                                  },
                                  "start": 663,
                                  "end": 676
                                },
                                "update": {
                                  "type": "UpdateExpression",
                                  "operator": "++",
                                  "prefix": false,
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 678,
                                    "end": 679
                                  },
                                  "start": 678,
                                  "end": 681
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "thisProp",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 709,
                                            "end": 717
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "ThisExpression",
                                                "start": 720,
                                                "end": 724
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getProperty",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 725,
                                                "end": 736
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 720,
                                              "end": 736
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 737,
                                                "end": 738
                                              }
                                            ],
                                            "optional": false,
                                            "start": 720,
                                            "end": 739
                                          },
                                          "definite": false,
                                          "start": 709,
                                          "end": 739
                                        }
                                      ],
                                      "declare": false,
                                      "start": 705,
                                      "end": 740
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "thatProp",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 765,
                                            "end": 773
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "that",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 776,
                                                "end": 780
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPropertyByName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 781,
                                                "end": 798
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 776,
                                              "end": 798
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 799,
                                                  "end": 807
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 808,
                                                  "end": 812
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 799,
                                                "end": 812
                                              }
                                            ],
                                            "optional": false,
                                            "start": 776,
                                            "end": 813
                                          },
                                          "definite": false,
                                          "start": 765,
                                          "end": 813
                                        }
                                      ],
                                      "declare": false,
                                      "start": 761,
                                      "end": 814
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "thatProp",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 841,
                                              "end": 849
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 853,
                                                  "end": 861
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 862,
                                                  "end": 867
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 853,
                                                "end": 867
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thatProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 872,
                                                  "end": 880
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 881,
                                                  "end": 886
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 872,
                                                "end": 886
                                              },
                                              "start": 853,
                                              "end": 886
                                            },
                                            "start": 841,
                                            "end": 886
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 890,
                                                  "end": 898
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 899,
                                                  "end": 903
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 890,
                                                "end": 903
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "equals",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 904,
                                                "end": 910
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 890,
                                              "end": 910
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thatProp",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 911,
                                                  "end": 919
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 920,
                                                  "end": 924
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 911,
                                                "end": 924
                                              }
                                            ],
                                            "optional": false,
                                            "start": 890,
                                            "end": 925
                                          },
                                          "start": 841,
                                          "end": 925
                                        },
                                        "prefix": true,
                                        "start": 839,
                                        "end": 926
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 935,
                                          "end": 940
                                        },
                                        "start": 928,
                                        "end": 941
                                      },
                                      "alternate": null,
                                      "start": 835,
                                      "end": 941
                                    }
                                  ],
                                  "start": 683,
                                  "end": 959
                                },
                                "start": 647,
                                "end": 959
                              }
                            ],
                            "start": 629,
                            "end": 973
                          },
                          "alternate": null,
                          "start": 614,
                          "end": 973
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sigCount",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 990,
                            "end": 998
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "setEquals",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1023,
                                      "end": 1032
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1033,
                                            "end": 1037
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1038,
                                            "end": 1051
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1033,
                                          "end": 1051
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1033,
                                        "end": 1053
                                      },
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "that",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1055,
                                            "end": 1059
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1060,
                                            "end": 1073
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1055,
                                          "end": 1073
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1055,
                                        "end": 1075
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1023,
                                    "end": 1076
                                  },
                                  "prefix": true,
                                  "start": 1022,
                                  "end": 1076
                                },
                                "consequent": {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 1085,
                                    "end": 1090
                                  },
                                  "start": 1078,
                                  "end": 1091
                                },
                                "alternate": null,
                                "start": 1018,
                                "end": 1091
                              }
                            ],
                            "start": 1000,
                            "end": 1105
                          },
                          "alternate": null,
                          "start": 986,
                          "end": 1105
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1125,
                            "end": 1129
                          },
                          "start": 1118,
                          "end": 1130
                        }
                      ],
                      "start": 235,
                      "end": 1140
                    },
                    "expression": false,
                    "start": 213,
                    "end": 1140
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 207,
                  "end": 1140
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperties",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1149,
                    "end": 1162
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Property",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1166,
                            "end": 1174
                          },
                          "typeArguments": null,
                          "start": 1166,
                          "end": 1174
                        },
                        "start": 1166,
                        "end": 1176
                      },
                      "start": 1164,
                      "end": 1176
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 1198,
                            "end": 1200
                          },
                          "start": 1191,
                          "end": 1201
                        }
                      ],
                      "start": 1177,
                      "end": 1211
                    },
                    "expression": false,
                    "start": 1162,
                    "end": 1211
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1149,
                  "end": 1211
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1231
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1239,
                            "end": 1245
                          },
                          "start": 1237,
                          "end": 1245
                        },
                        "start": 1232,
                        "end": 1245
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Property",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1248,
                          "end": 1256
                        },
                        "typeArguments": null,
                        "start": 1248,
                        "end": 1256
                      },
                      "start": 1246,
                      "end": 1256
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1278,
                            "end": 1287
                          },
                          "start": 1271,
                          "end": 1288
                        }
                      ],
                      "start": 1257,
                      "end": 1298
                    },
                    "expression": false,
                    "start": 1231,
                    "end": 1298
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1220,
                  "end": 1298
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPropertyByName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1307,
                    "end": 1324
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1331,
                            "end": 1337
                          },
                          "start": 1329,
                          "end": 1337
                        },
                        "start": 1325,
                        "end": 1337
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Property",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1340,
                          "end": 1348
                        },
                        "typeArguments": null,
                        "start": 1340,
                        "end": 1348
                      },
                      "start": 1338,
                      "end": 1348
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1370,
                            "end": 1379
                          },
                          "start": 1363,
                          "end": 1380
                        }
                      ],
                      "start": 1349,
                      "end": 1390
                    },
                    "expression": false,
                    "start": 1324,
                    "end": 1390
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1307,
                  "end": 1390
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPropertyCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1399,
                    "end": 1415
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1419,
                        "end": 1425
                      },
                      "start": 1417,
                      "end": 1425
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1447,
                            "end": 1448
                          },
                          "start": 1440,
                          "end": 1449
                        }
                      ],
                      "start": 1426,
                      "end": 1459
                    },
                    "expression": false,
                    "start": 1415,
                    "end": 1459
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1399,
                  "end": 1459
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSignature",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1468,
                    "end": 1480
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
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1488,
                            "end": 1494
                          },
                          "start": 1486,
                          "end": 1494
                        },
                        "start": 1481,
                        "end": 1494
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Signature",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1497,
                          "end": 1506
                        },
                        "typeArguments": null,
                        "start": 1497,
                        "end": 1506
                      },
                      "start": 1495,
                      "end": 1506
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1528,
                            "end": 1537
                          },
                          "start": 1521,
                          "end": 1538
                        }
                      ],
                      "start": 1507,
                      "end": 1548
                    },
                    "expression": false,
                    "start": 1480,
                    "end": 1548
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1468,
                  "end": 1548
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSignatureCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1557,
                    "end": 1574
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1578,
                        "end": 1584
                      },
                      "start": 1576,
                      "end": 1584
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1606,
                            "end": 1607
                          },
                          "start": 1599,
                          "end": 1608
                        }
                      ],
                      "start": 1585,
                      "end": 1618
                    },
                    "expression": false,
                    "start": 1574,
                    "end": 1618
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1557,
                  "end": 1618
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSignatures",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1627,
                    "end": 1640
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Signature",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1644,
                            "end": 1653
                          },
                          "typeArguments": null,
                          "start": 1644,
                          "end": 1653
                        },
                        "start": 1644,
                        "end": 1655
                      },
                      "start": 1642,
                      "end": 1655
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 1677,
                            "end": 1679
                          },
                          "start": 1670,
                          "end": 1680
                        }
                      ],
                      "start": 1656,
                      "end": 1690
                    },
                    "expression": false,
                    "start": 1640,
                    "end": 1690
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1627,
                  "end": 1690
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1699,
                    "end": 1710
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1714,
                        "end": 1721
                      },
                      "start": 1712,
                      "end": 1721
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1743,
                            "end": 1748
                          },
                          "start": 1736,
                          "end": 1749
                        }
                      ],
                      "start": 1722,
                      "end": 1759
                    },
                    "expression": false,
                    "start": 1710,
                    "end": 1759
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1699,
                  "end": 1759
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isObjectType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1768,
                    "end": 1780
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1784,
                        "end": 1791
                      },
                      "start": 1782,
                      "end": 1791
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1813,
                            "end": 1818
                          },
                          "start": 1806,
                          "end": 1819
                        }
                      ],
                      "start": 1792,
                      "end": 1829
                    },
                    "expression": false,
                    "start": 1780,
                    "end": 1829
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1768,
                  "end": 1829
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isTypeParameter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1838,
                    "end": 1853
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1857,
                        "end": 1864
                      },
                      "start": 1855,
                      "end": 1864
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1886,
                            "end": 1891
                          },
                          "start": 1879,
                          "end": 1892
                        }
                      ],
                      "start": 1865,
                      "end": 1902
                    },
                    "expression": false,
                    "start": 1853,
                    "end": 1902
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1838,
                  "end": 1902
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSubTypeOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1911,
                    "end": 1922
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1929,
                              "end": 1933
                            },
                            "typeArguments": null,
                            "start": 1929,
                            "end": 1933
                          },
                          "start": 1927,
                          "end": 1933
                        },
                        "start": 1923,
                        "end": 1933
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1935,
                      "end": 1946
                    },
                    "expression": false,
                    "start": 1922,
                    "end": 1946
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1911,
                  "end": 1946
                }
              ],
              "start": 197,
              "end": 1952
            },
            "abstract": false,
            "declare": false,
            "start": 171,
            "end": 1952
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null,
              "start": 1964,
              "end": 1972
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 1981,
              "end": 1987
            },
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
                    "start": 1998,
                    "end": 2009
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2023,
                              "end": 2029
                            },
                            "start": 2021,
                            "end": 2029
                          },
                          "start": 2017,
                          "end": 2029
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2010,
                        "end": 2029
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2044,
                                "end": 2048
                              },
                              "typeArguments": null,
                              "start": 2044,
                              "end": 2048
                            },
                            "start": 2042,
                            "end": 2048
                          },
                          "start": 2038,
                          "end": 2048
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2031,
                        "end": 2048
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PropertyFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2064,
                                "end": 2077
                              },
                              "typeArguments": null,
                              "start": 2064,
                              "end": 2077
                            },
                            "start": 2062,
                            "end": 2077
                          },
                          "start": 2057,
                          "end": 2077
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2050,
                        "end": 2077
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
                              "type": "Super",
                              "start": 2093,
                              "end": 2098
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2093,
                            "end": 2100
                          },
                          "directive": null,
                          "start": 2093,
                          "end": 2101
                        }
                      ],
                      "start": 2079,
                      "end": 2111
                    },
                    "expression": false,
                    "start": 2009,
                    "end": 2111
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1998,
                  "end": 2111
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2120,
                    "end": 2126
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Property",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2134,
                              "end": 2142
                            },
                            "typeArguments": null,
                            "start": 2134,
                            "end": 2142
                          },
                          "start": 2132,
                          "end": 2142
                        },
                        "start": 2127,
                        "end": 2142
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2145,
                        "end": 2152
                      },
                      "start": 2143,
                      "end": 2152
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2174,
                                    "end": 2178
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2179,
                                    "end": 2183
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2174,
                                  "end": 2183
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2188,
                                    "end": 2193
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2194,
                                    "end": 2198
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2188,
                                  "end": 2198
                                },
                                "start": 2174,
                                "end": 2198
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2218,
                                    "end": 2222
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2223,
                                    "end": 2228
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2218,
                                  "end": 2228
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2233,
                                    "end": 2238
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2239,
                                    "end": 2244
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2233,
                                  "end": 2244
                                },
                                "start": 2218,
                                "end": 2244
                              },
                              "start": 2174,
                              "end": 2244
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2264,
                                    "end": 2268
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2269,
                                    "end": 2273
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2264,
                                  "end": 2273
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2274,
                                  "end": 2280
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2264,
                                "end": 2280
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2281,
                                    "end": 2286
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2287,
                                    "end": 2291
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2281,
                                  "end": 2291
                                }
                              ],
                              "optional": false,
                              "start": 2264,
                              "end": 2292
                            },
                            "start": 2174,
                            "end": 2292
                          },
                          "start": 2167,
                          "end": 2293
                        }
                      ],
                      "start": 2153,
                      "end": 2303
                    },
                    "expression": false,
                    "start": 2126,
                    "end": 2303
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2120,
                  "end": 2303
                }
              ],
              "start": 1988,
              "end": 2309
            },
            "abstract": false,
            "declare": false,
            "start": 1958,
            "end": 2309
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropertyFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 2320,
              "end": 2333
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2344,
                    "end": 2352
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2355,
                    "end": 2356
                  },
                  "computed": false,
                  "start": 2344,
                  "end": 2356
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2366,
                    "end": 2373
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2376,
                    "end": 2377
                  },
                  "computed": false,
                  "start": 2366,
                  "end": 2377
                }
              ],
              "start": 2334,
              "end": 2383
            },
            "const": false,
            "declare": false,
            "start": 2315,
            "end": 2383
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Signature",
              "optional": false,
              "typeAnnotation": null,
              "start": 2395,
              "end": 2404
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 2413,
              "end": 2419
            },
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
                    "start": 2430,
                    "end": 2441
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "typeParameters",
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
                                  "name": "TypeParameter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2465,
                                  "end": 2478
                                },
                                "typeArguments": null,
                                "start": 2465,
                                "end": 2478
                              },
                              "start": 2465,
                              "end": 2480
                            },
                            "start": 2463,
                            "end": 2480
                          },
                          "start": 2449,
                          "end": 2480
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2442,
                        "end": 2480
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parameters",
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
                                  "name": "Parameter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2501,
                                  "end": 2510
                                },
                                "typeArguments": null,
                                "start": 2501,
                                "end": 2510
                              },
                              "start": 2501,
                              "end": 2512
                            },
                            "start": 2499,
                            "end": 2512
                          },
                          "start": 2489,
                          "end": 2512
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2482,
                        "end": 2512
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "returnType",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2533,
                                "end": 2537
                              },
                              "typeArguments": null,
                              "start": 2533,
                              "end": 2537
                            },
                            "start": 2531,
                            "end": 2537
                          },
                          "start": 2521,
                          "end": 2537
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2514,
                        "end": 2537
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
                              "type": "Super",
                              "start": 2553,
                              "end": 2558
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2553,
                            "end": 2560
                          },
                          "directive": null,
                          "start": 2553,
                          "end": 2561
                        }
                      ],
                      "start": 2539,
                      "end": 2571
                    },
                    "expression": false,
                    "start": 2441,
                    "end": 2571
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2430,
                  "end": 2571
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equalsNoReturn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2580,
                    "end": 2594
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Signature",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2602,
                              "end": 2611
                            },
                            "typeArguments": null,
                            "start": 2602,
                            "end": 2611
                          },
                          "start": 2600,
                          "end": 2611
                        },
                        "start": 2595,
                        "end": 2611
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2614,
                        "end": 2621
                      },
                      "start": 2612,
                      "end": 2621
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2643,
                                        "end": 2647
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2648,
                                        "end": 2658
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2643,
                                      "end": 2658
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2659,
                                      "end": 2665
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2643,
                                    "end": 2665
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "other",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2670,
                                        "end": 2675
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2676,
                                        "end": 2686
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2670,
                                      "end": 2686
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2687,
                                      "end": 2693
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2670,
                                    "end": 2693
                                  },
                                  "start": 2643,
                                  "end": 2693
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2713,
                                        "end": 2717
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2718,
                                        "end": 2732
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2713,
                                      "end": 2732
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2733,
                                      "end": 2739
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2713,
                                    "end": 2739
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "other",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2744,
                                        "end": 2749
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2750,
                                        "end": 2764
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2744,
                                      "end": 2764
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2765,
                                      "end": 2771
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2744,
                                    "end": 2771
                                  },
                                  "start": 2713,
                                  "end": 2771
                                },
                                "start": 2643,
                                "end": 2771
                              },
                              "operator": "&&",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arrayEquals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2791,
                                  "end": 2802
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2803,
                                      "end": 2807
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2808,
                                      "end": 2818
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2803,
                                    "end": 2818
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2820,
                                      "end": 2825
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2826,
                                      "end": 2836
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2820,
                                    "end": 2836
                                  }
                                ],
                                "optional": false,
                                "start": 2791,
                                "end": 2837
                              },
                              "start": 2643,
                              "end": 2837
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arrayEquals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2857,
                                "end": 2868
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2869,
                                    "end": 2873
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2874,
                                    "end": 2888
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2869,
                                  "end": 2888
                                },
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2890,
                                    "end": 2895
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2896,
                                    "end": 2910
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2890,
                                  "end": 2910
                                }
                              ],
                              "optional": false,
                              "start": 2857,
                              "end": 2911
                            },
                            "start": 2643,
                            "end": 2911
                          },
                          "start": 2636,
                          "end": 2912
                        }
                      ],
                      "start": 2622,
                      "end": 2922
                    },
                    "expression": false,
                    "start": 2594,
                    "end": 2922
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2580,
                  "end": 2922
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2931,
                    "end": 2937
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Signature",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2945,
                              "end": 2954
                            },
                            "typeArguments": null,
                            "start": 2945,
                            "end": 2954
                          },
                          "start": 2943,
                          "end": 2954
                        },
                        "start": 2938,
                        "end": 2954
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2957,
                        "end": 2964
                      },
                      "start": 2955,
                      "end": 2964
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2986,
                                  "end": 2990
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equalsNoReturn",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2991,
                                  "end": 3005
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2986,
                                "end": 3005
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3006,
                                  "end": 3011
                                }
                              ],
                              "optional": false,
                              "start": 2986,
                              "end": 3012
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3032,
                                    "end": 3036
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3037,
                                    "end": 3047
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3032,
                                  "end": 3047
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3048,
                                  "end": 3054
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3032,
                                "end": 3054
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3055,
                                    "end": 3060
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3061,
                                    "end": 3071
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3055,
                                  "end": 3071
                                }
                              ],
                              "optional": false,
                              "start": 3032,
                              "end": 3072
                            },
                            "start": 2986,
                            "end": 3072
                          },
                          "start": 2979,
                          "end": 3073
                        }
                      ],
                      "start": 2965,
                      "end": 3083
                    },
                    "expression": false,
                    "start": 2937,
                    "end": 3083
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2931,
                  "end": 3083
                }
              ],
              "start": 2420,
              "end": 3089
            },
            "abstract": false,
            "declare": false,
            "start": 2389,
            "end": 3089
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 3101,
              "end": 3110
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 3119,
              "end": 3125
            },
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
                    "start": 3136,
                    "end": 3147
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3161,
                              "end": 3167
                            },
                            "start": 3159,
                            "end": 3167
                          },
                          "start": 3155,
                          "end": 3167
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3148,
                        "end": 3167
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3182,
                                "end": 3186
                              },
                              "typeArguments": null,
                              "start": 3182,
                              "end": 3186
                            },
                            "start": 3180,
                            "end": 3186
                          },
                          "start": 3176,
                          "end": 3186
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3169,
                        "end": 3186
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ParameterFlags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3202,
                                "end": 3216
                              },
                              "typeArguments": null,
                              "start": 3202,
                              "end": 3216
                            },
                            "start": 3200,
                            "end": 3216
                          },
                          "start": 3195,
                          "end": 3216
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3188,
                        "end": 3216
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
                              "type": "Super",
                              "start": 3232,
                              "end": 3237
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 3232,
                            "end": 3239
                          },
                          "directive": null,
                          "start": 3232,
                          "end": 3240
                        }
                      ],
                      "start": 3218,
                      "end": 3250
                    },
                    "expression": false,
                    "start": 3147,
                    "end": 3250
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3136,
                  "end": 3250
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3259,
                    "end": 3265
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Parameter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3273,
                              "end": 3282
                            },
                            "typeArguments": null,
                            "start": 3273,
                            "end": 3282
                          },
                          "start": 3271,
                          "end": 3282
                        },
                        "start": 3266,
                        "end": 3282
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3305,
                                    "end": 3309
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3310,
                                    "end": 3314
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3305,
                                  "end": 3314
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3319,
                                    "end": 3324
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3325,
                                    "end": 3329
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3319,
                                  "end": 3329
                                },
                                "start": 3305,
                                "end": 3329
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3349,
                                    "end": 3353
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3354,
                                    "end": 3359
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3349,
                                  "end": 3359
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3364,
                                    "end": 3369
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3370,
                                    "end": 3375
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3364,
                                  "end": 3375
                                },
                                "start": 3349,
                                "end": 3375
                              },
                              "start": 3305,
                              "end": 3375
                            },
                            "operator": "&&",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3395,
                                    "end": 3399
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3400,
                                    "end": 3404
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3395,
                                  "end": 3404
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3405,
                                  "end": 3411
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3395,
                                "end": 3411
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3412,
                                    "end": 3417
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3418,
                                    "end": 3422
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3412,
                                  "end": 3422
                                }
                              ],
                              "optional": false,
                              "start": 3395,
                              "end": 3423
                            },
                            "start": 3305,
                            "end": 3423
                          },
                          "start": 3298,
                          "end": 3424
                        }
                      ],
                      "start": 3284,
                      "end": 3434
                    },
                    "expression": false,
                    "start": 3265,
                    "end": 3434
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3259,
                  "end": 3434
                }
              ],
              "start": 3126,
              "end": 3440
            },
            "abstract": false,
            "declare": false,
            "start": 3095,
            "end": 3440
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParameterFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 3451,
              "end": 3465
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3476,
                    "end": 3484
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3487,
                    "end": 3488
                  },
                  "computed": false,
                  "start": 3476,
                  "end": 3488
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3498,
                    "end": 3502
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3505,
                    "end": 3506
                  },
                  "computed": false,
                  "start": 3498,
                  "end": 3506
                }
              ],
              "start": 3466,
              "end": 3512
            },
            "const": false,
            "declare": false,
            "start": 3446,
            "end": 3512
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3526,
                  "end": 3540
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3543,
                      "end": 3549
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3550,
                      "end": 3559
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3543,
                    "end": 3559
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3560,
                    "end": 3574
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3543,
                  "end": 3574
                },
                "definite": false,
                "start": 3526,
                "end": 3574
              }
            ],
            "declare": false,
            "start": 3522,
            "end": 3575
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 3590,
              "end": 3601
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 3602,
                    "end": 3603
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3602,
                  "end": 3603
                }
              ],
              "start": 3601,
              "end": 3604
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3610,
                      "end": 3613
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3614,
                            "end": 3615
                          },
                          "typeArguments": null,
                          "start": 3614,
                          "end": 3615
                        }
                      ],
                      "start": 3613,
                      "end": 3616
                    },
                    "start": 3610,
                    "end": 3616
                  },
                  "start": 3608,
                  "end": 3616
                },
                "start": 3605,
                "end": 3616
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3623,
                    "end": 3629
                  },
                  "start": 3621,
                  "end": 3629
                },
                "start": 3618,
                "end": 3629
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3632,
                  "end": 3633
                },
                "typeArguments": null,
                "start": 3632,
                "end": 3633
              },
              "start": 3630,
              "end": 3633
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3649,
                          "end": 3663
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3664,
                          "end": 3668
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3649,
                        "end": 3668
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3669,
                          "end": 3672
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3674,
                          "end": 3677
                        }
                      ],
                      "optional": false,
                      "start": 3649,
                      "end": 3678
                    },
                    "prefix": true,
                    "start": 3648,
                    "end": 3678
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3687,
                      "end": 3696
                    },
                    "start": 3680,
                    "end": 3697
                  },
                  "alternate": null,
                  "start": 3644,
                  "end": 3697
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3713,
                      "end": 3716
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3717,
                      "end": 3720
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3713,
                    "end": 3721
                  },
                  "start": 3706,
                  "end": 3722
                }
              ],
              "start": 3634,
              "end": 3728
            },
            "expression": false,
            "start": 3581,
            "end": 3728
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 3743,
              "end": 3754
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 3755,
                    "end": 3756
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3755,
                  "end": 3756
                }
              ],
              "start": 3754,
              "end": 3757
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3763,
                      "end": 3766
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3767,
                            "end": 3768
                          },
                          "typeArguments": null,
                          "start": 3767,
                          "end": 3768
                        }
                      ],
                      "start": 3766,
                      "end": 3769
                    },
                    "start": 3763,
                    "end": 3769
                  },
                  "start": 3761,
                  "end": 3769
                },
                "start": 3758,
                "end": 3769
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3776,
                    "end": 3782
                  },
                  "start": 3774,
                  "end": 3782
                },
                "start": 3771,
                "end": 3782
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3785,
                "end": 3792
              },
              "start": 3783,
              "end": 3792
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasOwnProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3810,
                        "end": 3824
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "call",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3825,
                        "end": 3829
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3810,
                      "end": 3829
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3830,
                        "end": 3833
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3835,
                        "end": 3838
                      }
                    ],
                    "optional": false,
                    "start": 3810,
                    "end": 3839
                  },
                  "start": 3803,
                  "end": 3840
                }
              ],
              "start": 3793,
              "end": 3846
            },
            "expression": false,
            "start": 3734,
            "end": 3846
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayContains",
              "optional": false,
              "typeAnnotation": null,
              "start": 3861,
              "end": 3874
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 3875,
                    "end": 3876
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3885,
                      "end": 3891
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3892,
                            "end": 3893
                          },
                          "typeArguments": null,
                          "start": 3892,
                          "end": 3893
                        }
                      ],
                      "start": 3891,
                      "end": 3894
                    },
                    "start": 3885,
                    "end": 3894
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3875,
                  "end": 3894
                }
              ],
              "start": 3874,
              "end": 3895
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3899,
                        "end": 3900
                      },
                      "typeArguments": null,
                      "start": 3899,
                      "end": 3900
                    },
                    "start": 3899,
                    "end": 3902
                  },
                  "start": 3897,
                  "end": 3902
                },
                "start": 3896,
                "end": 3902
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
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
                      "start": 3910,
                      "end": 3911
                    },
                    "typeArguments": null,
                    "start": 3910,
                    "end": 3911
                  },
                  "start": 3908,
                  "end": 3911
                },
                "start": 3904,
                "end": 3911
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3914,
                "end": 3921
              },
              "start": 3912,
              "end": 3921
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3936,
                        "end": 3939
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3942,
                          "end": 3943
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3944,
                          "end": 3950
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3942,
                        "end": 3950
                      },
                      "definite": false,
                      "start": 3936,
                      "end": 3950
                    }
                  ],
                  "declare": false,
                  "start": 3932,
                  "end": 3951
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3969,
                          "end": 3970
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 3973,
                          "end": 3974
                        },
                        "definite": false,
                        "start": 3969,
                        "end": 3974
                      }
                    ],
                    "declare": false,
                    "start": 3965,
                    "end": 3974
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3976,
                      "end": 3977
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3980,
                      "end": 3983
                    },
                    "start": 3976,
                    "end": 3983
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3985,
                      "end": 3986
                    },
                    "start": 3985,
                    "end": 3988
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4008,
                              "end": 4012
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "equals",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4013,
                              "end": 4019
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4008,
                            "end": 4019
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4020,
                                "end": 4021
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4022,
                                "end": 4023
                              },
                              "optional": false,
                              "computed": true,
                              "start": 4020,
                              "end": 4024
                            }
                          ],
                          "optional": false,
                          "start": 4008,
                          "end": 4025
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 4034,
                            "end": 4038
                          },
                          "start": 4027,
                          "end": 4039
                        },
                        "alternate": null,
                        "start": 4004,
                        "end": 4039
                      }
                    ],
                    "start": 3990,
                    "end": 4049
                  },
                  "start": 3960,
                  "end": 4049
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 4065,
                    "end": 4070
                  },
                  "start": 4058,
                  "end": 4071
                }
              ],
              "start": 3922,
              "end": 4077
            },
            "expression": false,
            "start": 3852,
            "end": 4077
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayEquals",
              "optional": false,
              "typeAnnotation": null,
              "start": 4092,
              "end": 4103
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 4104,
                    "end": 4105
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4114,
                      "end": 4120
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4121,
                            "end": 4122
                          },
                          "typeArguments": null,
                          "start": 4121,
                          "end": 4122
                        }
                      ],
                      "start": 4120,
                      "end": 4123
                    },
                    "start": 4114,
                    "end": 4123
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4104,
                  "end": 4123
                }
              ],
              "start": 4103,
              "end": 4124
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4128,
                        "end": 4129
                      },
                      "typeArguments": null,
                      "start": 4128,
                      "end": 4129
                    },
                    "start": 4128,
                    "end": 4131
                  },
                  "start": 4126,
                  "end": 4131
                },
                "start": 4125,
                "end": 4131
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4136,
                        "end": 4137
                      },
                      "typeArguments": null,
                      "start": 4136,
                      "end": 4137
                    },
                    "start": 4136,
                    "end": 4139
                  },
                  "start": 4134,
                  "end": 4139
                },
                "start": 4133,
                "end": 4139
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4142,
                "end": 4149
              },
              "start": 4140,
              "end": 4149
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4164,
                        "end": 4167
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4170,
                          "end": 4171
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4172,
                          "end": 4178
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4170,
                        "end": 4178
                      },
                      "definite": false,
                      "start": 4164,
                      "end": 4178
                    }
                  ],
                  "declare": false,
                  "start": 4160,
                  "end": 4179
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4192,
                        "end": 4193
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4194,
                        "end": 4200
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4192,
                      "end": 4200
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4205,
                      "end": 4208
                    },
                    "start": 4192,
                    "end": 4208
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 4217,
                      "end": 4222
                    },
                    "start": 4210,
                    "end": 4223
                  },
                  "alternate": null,
                  "start": 4188,
                  "end": 4223
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4241,
                          "end": 4242
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4245,
                          "end": 4246
                        },
                        "definite": false,
                        "start": 4241,
                        "end": 4246
                      }
                    ],
                    "declare": false,
                    "start": 4237,
                    "end": 4246
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4248,
                      "end": 4249
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4252,
                      "end": 4255
                    },
                    "start": 4248,
                    "end": 4255
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4257,
                      "end": 4258
                    },
                    "start": 4257,
                    "end": 4260
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4281,
                                  "end": 4282
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4283,
                                  "end": 4284
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4281,
                                "end": 4285
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "equals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4286,
                                "end": 4292
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4281,
                              "end": 4292
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4293,
                                  "end": 4294
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4295,
                                  "end": 4296
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4293,
                                "end": 4297
                              }
                            ],
                            "optional": false,
                            "start": 4281,
                            "end": 4298
                          },
                          "prefix": true,
                          "start": 4280,
                          "end": 4298
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 4307,
                            "end": 4312
                          },
                          "start": 4300,
                          "end": 4313
                        },
                        "alternate": null,
                        "start": 4276,
                        "end": 4313
                      }
                    ],
                    "start": 4262,
                    "end": 4323
                  },
                  "start": 4232,
                  "end": 4323
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 4339,
                    "end": 4343
                  },
                  "start": 4332,
                  "end": 4344
                }
              ],
              "start": 4150,
              "end": 4350
            },
            "expression": false,
            "start": 4083,
            "end": 4350
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "setEquals",
              "optional": false,
              "typeAnnotation": null,
              "start": 4365,
              "end": 4374
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 4375,
                    "end": 4376
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4385,
                      "end": 4391
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4392,
                            "end": 4393
                          },
                          "typeArguments": null,
                          "start": 4392,
                          "end": 4393
                        }
                      ],
                      "start": 4391,
                      "end": 4394
                    },
                    "start": 4385,
                    "end": 4394
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4375,
                  "end": 4394
                }
              ],
              "start": 4374,
              "end": 4395
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4399,
                        "end": 4400
                      },
                      "typeArguments": null,
                      "start": 4399,
                      "end": 4400
                    },
                    "start": 4399,
                    "end": 4402
                  },
                  "start": 4397,
                  "end": 4402
                },
                "start": 4396,
                "end": 4402
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4407,
                        "end": 4408
                      },
                      "typeArguments": null,
                      "start": 4407,
                      "end": 4408
                    },
                    "start": 4407,
                    "end": 4410
                  },
                  "start": 4405,
                  "end": 4410
                },
                "start": 4404,
                "end": 4410
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4413,
                "end": 4420
              },
              "start": 4411,
              "end": 4420
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4435,
                        "end": 4438
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4441,
                          "end": 4442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4443,
                          "end": 4449
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4441,
                        "end": 4449
                      },
                      "definite": false,
                      "start": 4435,
                      "end": 4449
                    }
                  ],
                  "declare": false,
                  "start": 4431,
                  "end": 4450
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4463,
                        "end": 4464
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4465,
                        "end": 4471
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4463,
                      "end": 4471
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4476,
                      "end": 4479
                    },
                    "start": 4463,
                    "end": 4479
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 4488,
                      "end": 4493
                    },
                    "start": 4481,
                    "end": 4494
                  },
                  "alternate": null,
                  "start": 4459,
                  "end": 4494
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4512,
                          "end": 4513
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4516,
                          "end": 4517
                        },
                        "definite": false,
                        "start": 4512,
                        "end": 4517
                      }
                    ],
                    "declare": false,
                    "start": 4508,
                    "end": 4517
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4519,
                      "end": 4520
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4523,
                      "end": 4526
                    },
                    "start": 4519,
                    "end": 4526
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4528,
                      "end": 4529
                    },
                    "start": 4528,
                    "end": 4531
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arrayContains",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4552,
                              "end": 4565
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4566,
                                "end": 4567
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4569,
                                  "end": 4570
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4571,
                                  "end": 4572
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4569,
                                "end": 4573
                              }
                            ],
                            "optional": false,
                            "start": 4552,
                            "end": 4574
                          },
                          "prefix": true,
                          "start": 4551,
                          "end": 4574
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 4583,
                            "end": 4588
                          },
                          "start": 4576,
                          "end": 4589
                        },
                        "alternate": null,
                        "start": 4547,
                        "end": 4589
                      }
                    ],
                    "start": 4533,
                    "end": 4599
                  },
                  "start": 4503,
                  "end": 4599
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 4615,
                    "end": 4619
                  },
                  "start": 4608,
                  "end": 4620
                }
              ],
              "start": 4421,
              "end": 4626
            },
            "expression": false,
            "start": 4356,
            "end": 4626
          }
        ],
        "start": 13,
        "end": 4628
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 4628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4628
}
```
