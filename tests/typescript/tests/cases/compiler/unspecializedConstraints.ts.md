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
        "start": 7,
        "end": 9
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
              "start": 26,
              "end": 29
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
                    "start": 30,
                    "end": 31
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 30,
                  "end": 31
                }
              ],
              "start": 29,
              "end": 32
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
                          "start": 51,
                          "end": 57
                        },
                        "start": 49,
                        "end": 57
                      },
                      "start": 44,
                      "end": 57
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
                        "start": 60,
                        "end": 61
                      },
                      "typeArguments": null,
                      "start": 60,
                      "end": 61
                    },
                    "start": 58,
                    "end": 61
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 43,
                  "end": 62
                }
              ],
              "start": 33,
              "end": 68
            },
            "declare": false,
            "start": 16,
            "end": 68
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Equals",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 90
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
                    "start": 91,
                    "end": 92
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 91,
                  "end": 92
                }
              ],
              "start": 90,
              "end": 93
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
                    "start": 104,
                    "end": 110
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
                            "start": 118,
                            "end": 119
                          },
                          "typeArguments": null,
                          "start": 118,
                          "end": 119
                        },
                        "start": 116,
                        "end": 119
                      },
                      "start": 111,
                      "end": 119
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 122,
                      "end": 129
                    },
                    "start": 120,
                    "end": 129
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 104,
                  "end": 130
                }
              ],
              "start": 94,
              "end": 136
            },
            "declare": false,
            "start": 74,
            "end": 136
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
              "start": 148,
              "end": 154
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 155,
              "end": 162
            },
            "abstract": false,
            "declare": false,
            "start": 142,
            "end": 162
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
              "start": 174,
              "end": 178
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 193
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
                    "start": 204,
                    "end": 210
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
                              "start": 217,
                              "end": 221
                            },
                            "typeArguments": null,
                            "start": 217,
                            "end": 221
                          },
                          "start": 215,
                          "end": 221
                        },
                        "start": 211,
                        "end": 221
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 224,
                        "end": 231
                      },
                      "start": 222,
                      "end": 231
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
                              "start": 250,
                              "end": 254
                            },
                            "operator": "===",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "that",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 259,
                              "end": 263
                            },
                            "start": 250,
                            "end": 263
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 272,
                              "end": 276
                            },
                            "start": 265,
                            "end": 277
                          },
                          "alternate": null,
                          "start": 246,
                          "end": 277
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
                                    "start": 296,
                                    "end": 300
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 301,
                                    "end": 313
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 296,
                                  "end": 313
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 296,
                                "end": 315
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
                                    "start": 319,
                                    "end": 323
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 324,
                                    "end": 336
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 319,
                                  "end": 336
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 319,
                                "end": 338
                              },
                              "start": 296,
                              "end": 338
                            },
                            "prefix": true,
                            "start": 294,
                            "end": 339
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 348,
                              "end": 353
                            },
                            "start": 341,
                            "end": 354
                          },
                          "alternate": null,
                          "start": 290,
                          "end": 354
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
                                "start": 371,
                                "end": 380
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
                                    "start": 383,
                                    "end": 387
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getPropertyCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 388,
                                    "end": 404
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 383,
                                  "end": 404
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 383,
                                "end": 406
                              },
                              "definite": false,
                              "start": 371,
                              "end": 406
                            }
                          ],
                          "declare": false,
                          "start": 367,
                          "end": 407
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
                              "start": 424,
                              "end": 433
                            },
                            "operator": "!==",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 438,
                                  "end": 442
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getPropertyCount",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 443,
                                  "end": 459
                                },
                                "optional": false,
                                "computed": false,
                                "start": 438,
                                "end": 459
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 438,
                              "end": 461
                            },
                            "start": 424,
                            "end": 461
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 470,
                              "end": 475
                            },
                            "start": 463,
                            "end": 476
                          },
                          "alternate": null,
                          "start": 420,
                          "end": 476
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
                                "start": 493,
                                "end": 501
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
                                    "start": 504,
                                    "end": 508
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getSignatureCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 509,
                                    "end": 526
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 504,
                                  "end": 526
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 504,
                                "end": 528
                              },
                              "definite": false,
                              "start": 493,
                              "end": 528
                            }
                          ],
                          "declare": false,
                          "start": 489,
                          "end": 529
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
                              "start": 546,
                              "end": 554
                            },
                            "operator": "!==",
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 559,
                                  "end": 563
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getSignatureCount",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 564,
                                  "end": 581
                                },
                                "optional": false,
                                "computed": false,
                                "start": 559,
                                "end": 581
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 559,
                              "end": 583
                            },
                            "start": 546,
                            "end": 583
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 592,
                              "end": 597
                            },
                            "start": 585,
                            "end": 598
                          },
                          "alternate": null,
                          "start": 542,
                          "end": 598
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "propCount",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 615,
                            "end": 624
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
                                        "start": 653,
                                        "end": 654
                                      },
                                      "init": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 657,
                                        "end": 658
                                      },
                                      "definite": false,
                                      "start": 653,
                                      "end": 658
                                    }
                                  ],
                                  "declare": false,
                                  "start": 649,
                                  "end": 658
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 660,
                                    "end": 661
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "propCount",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 664,
                                    "end": 673
                                  },
                                  "start": 660,
                                  "end": 673
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
                                    "start": 675,
                                    "end": 676
                                  },
                                  "start": 675,
                                  "end": 678
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
                                            "start": 706,
                                            "end": 714
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "ThisExpression",
                                                "start": 717,
                                                "end": 721
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getProperty",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 722,
                                                "end": 733
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 717,
                                              "end": 733
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 734,
                                                "end": 735
                                              }
                                            ],
                                            "optional": false,
                                            "start": 717,
                                            "end": 736
                                          },
                                          "definite": false,
                                          "start": 706,
                                          "end": 736
                                        }
                                      ],
                                      "declare": false,
                                      "start": 702,
                                      "end": 737
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
                                            "start": 762,
                                            "end": 770
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
                                                "start": 773,
                                                "end": 777
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPropertyByName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 778,
                                                "end": 795
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 773,
                                              "end": 795
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
                                                  "start": 796,
                                                  "end": 804
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 805,
                                                  "end": 809
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 796,
                                                "end": 809
                                              }
                                            ],
                                            "optional": false,
                                            "start": 773,
                                            "end": 810
                                          },
                                          "definite": false,
                                          "start": 762,
                                          "end": 810
                                        }
                                      ],
                                      "declare": false,
                                      "start": 758,
                                      "end": 811
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
                                              "start": 838,
                                              "end": 846
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
                                                  "start": 850,
                                                  "end": 858
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 859,
                                                  "end": 864
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 850,
                                                "end": 864
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
                                                  "start": 869,
                                                  "end": 877
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 878,
                                                  "end": 883
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 869,
                                                "end": 883
                                              },
                                              "start": 850,
                                              "end": 883
                                            },
                                            "start": 838,
                                            "end": 883
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
                                                  "start": 887,
                                                  "end": 895
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 896,
                                                  "end": 900
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 887,
                                                "end": 900
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "equals",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 901,
                                                "end": 907
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 887,
                                              "end": 907
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
                                                  "start": 908,
                                                  "end": 916
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 917,
                                                  "end": 921
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 908,
                                                "end": 921
                                              }
                                            ],
                                            "optional": false,
                                            "start": 887,
                                            "end": 922
                                          },
                                          "start": 838,
                                          "end": 922
                                        },
                                        "prefix": true,
                                        "start": 836,
                                        "end": 923
                                      },
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "value": false,
                                          "raw": "false",
                                          "start": 932,
                                          "end": 937
                                        },
                                        "start": 925,
                                        "end": 938
                                      },
                                      "alternate": null,
                                      "start": 832,
                                      "end": 938
                                    }
                                  ],
                                  "start": 680,
                                  "end": 956
                                },
                                "start": 644,
                                "end": 956
                              }
                            ],
                            "start": 626,
                            "end": 970
                          },
                          "alternate": null,
                          "start": 611,
                          "end": 970
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sigCount",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 987,
                            "end": 995
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
                                      "start": 1020,
                                      "end": 1029
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1030,
                                            "end": 1034
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1035,
                                            "end": 1048
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1030,
                                          "end": 1048
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1030,
                                        "end": 1050
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
                                            "start": 1052,
                                            "end": 1056
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1057,
                                            "end": 1070
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1052,
                                          "end": 1070
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1052,
                                        "end": 1072
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1020,
                                    "end": 1073
                                  },
                                  "prefix": true,
                                  "start": 1019,
                                  "end": 1073
                                },
                                "consequent": {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 1082,
                                    "end": 1087
                                  },
                                  "start": 1075,
                                  "end": 1088
                                },
                                "alternate": null,
                                "start": 1015,
                                "end": 1088
                              }
                            ],
                            "start": 997,
                            "end": 1102
                          },
                          "alternate": null,
                          "start": 983,
                          "end": 1102
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1122,
                            "end": 1126
                          },
                          "start": 1115,
                          "end": 1127
                        }
                      ],
                      "start": 232,
                      "end": 1137
                    },
                    "expression": false,
                    "start": 210,
                    "end": 1137
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 204,
                  "end": 1137
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
                    "start": 1146,
                    "end": 1159
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
                            "start": 1163,
                            "end": 1171
                          },
                          "typeArguments": null,
                          "start": 1163,
                          "end": 1171
                        },
                        "start": 1163,
                        "end": 1173
                      },
                      "start": 1161,
                      "end": 1173
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 1195,
                            "end": 1197
                          },
                          "start": 1188,
                          "end": 1198
                        }
                      ],
                      "start": 1174,
                      "end": 1208
                    },
                    "expression": false,
                    "start": 1159,
                    "end": 1208
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1146,
                  "end": 1208
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
                    "start": 1217,
                    "end": 1228
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
                            "start": 1236,
                            "end": 1242
                          },
                          "start": 1234,
                          "end": 1242
                        },
                        "start": 1229,
                        "end": 1242
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
                          "start": 1245,
                          "end": 1253
                        },
                        "typeArguments": null,
                        "start": 1245,
                        "end": 1253
                      },
                      "start": 1243,
                      "end": 1253
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
                            "start": 1275,
                            "end": 1284
                          },
                          "start": 1268,
                          "end": 1285
                        }
                      ],
                      "start": 1254,
                      "end": 1295
                    },
                    "expression": false,
                    "start": 1228,
                    "end": 1295
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1217,
                  "end": 1295
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
                    "start": 1304,
                    "end": 1321
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
                            "start": 1328,
                            "end": 1334
                          },
                          "start": 1326,
                          "end": 1334
                        },
                        "start": 1322,
                        "end": 1334
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
                          "start": 1337,
                          "end": 1345
                        },
                        "typeArguments": null,
                        "start": 1337,
                        "end": 1345
                      },
                      "start": 1335,
                      "end": 1345
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
                            "start": 1367,
                            "end": 1376
                          },
                          "start": 1360,
                          "end": 1377
                        }
                      ],
                      "start": 1346,
                      "end": 1387
                    },
                    "expression": false,
                    "start": 1321,
                    "end": 1387
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1304,
                  "end": 1387
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
                    "start": 1396,
                    "end": 1412
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
                        "start": 1416,
                        "end": 1422
                      },
                      "start": 1414,
                      "end": 1422
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
                            "start": 1444,
                            "end": 1445
                          },
                          "start": 1437,
                          "end": 1446
                        }
                      ],
                      "start": 1423,
                      "end": 1456
                    },
                    "expression": false,
                    "start": 1412,
                    "end": 1456
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1396,
                  "end": 1456
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
                    "start": 1465,
                    "end": 1477
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
                            "start": 1485,
                            "end": 1491
                          },
                          "start": 1483,
                          "end": 1491
                        },
                        "start": 1478,
                        "end": 1491
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
                          "start": 1494,
                          "end": 1503
                        },
                        "typeArguments": null,
                        "start": 1494,
                        "end": 1503
                      },
                      "start": 1492,
                      "end": 1503
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
                            "start": 1525,
                            "end": 1534
                          },
                          "start": 1518,
                          "end": 1535
                        }
                      ],
                      "start": 1504,
                      "end": 1545
                    },
                    "expression": false,
                    "start": 1477,
                    "end": 1545
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1465,
                  "end": 1545
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
                    "start": 1554,
                    "end": 1571
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
                        "start": 1575,
                        "end": 1581
                      },
                      "start": 1573,
                      "end": 1581
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
                            "start": 1603,
                            "end": 1604
                          },
                          "start": 1596,
                          "end": 1605
                        }
                      ],
                      "start": 1582,
                      "end": 1615
                    },
                    "expression": false,
                    "start": 1571,
                    "end": 1615
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1554,
                  "end": 1615
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
                    "start": 1624,
                    "end": 1637
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
                            "start": 1641,
                            "end": 1650
                          },
                          "typeArguments": null,
                          "start": 1641,
                          "end": 1650
                        },
                        "start": 1641,
                        "end": 1652
                      },
                      "start": 1639,
                      "end": 1652
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 1674,
                            "end": 1676
                          },
                          "start": 1667,
                          "end": 1677
                        }
                      ],
                      "start": 1653,
                      "end": 1687
                    },
                    "expression": false,
                    "start": 1637,
                    "end": 1687
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1624,
                  "end": 1687
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
                    "start": 1696,
                    "end": 1707
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
                        "start": 1711,
                        "end": 1718
                      },
                      "start": 1709,
                      "end": 1718
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
                            "start": 1740,
                            "end": 1745
                          },
                          "start": 1733,
                          "end": 1746
                        }
                      ],
                      "start": 1719,
                      "end": 1756
                    },
                    "expression": false,
                    "start": 1707,
                    "end": 1756
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1696,
                  "end": 1756
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
                    "start": 1765,
                    "end": 1777
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
                        "start": 1781,
                        "end": 1788
                      },
                      "start": 1779,
                      "end": 1788
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
                            "start": 1810,
                            "end": 1815
                          },
                          "start": 1803,
                          "end": 1816
                        }
                      ],
                      "start": 1789,
                      "end": 1826
                    },
                    "expression": false,
                    "start": 1777,
                    "end": 1826
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1765,
                  "end": 1826
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
                    "start": 1835,
                    "end": 1850
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
                        "start": 1854,
                        "end": 1861
                      },
                      "start": 1852,
                      "end": 1861
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
                            "start": 1883,
                            "end": 1888
                          },
                          "start": 1876,
                          "end": 1889
                        }
                      ],
                      "start": 1862,
                      "end": 1899
                    },
                    "expression": false,
                    "start": 1850,
                    "end": 1899
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1835,
                  "end": 1899
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
                    "start": 1908,
                    "end": 1919
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
                              "start": 1926,
                              "end": 1930
                            },
                            "typeArguments": null,
                            "start": 1926,
                            "end": 1930
                          },
                          "start": 1924,
                          "end": 1930
                        },
                        "start": 1920,
                        "end": 1930
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1932,
                      "end": 1943
                    },
                    "expression": false,
                    "start": 1919,
                    "end": 1943
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1908,
                  "end": 1943
                }
              ],
              "start": 194,
              "end": 1949
            },
            "abstract": false,
            "declare": false,
            "start": 168,
            "end": 1949
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
              "start": 1961,
              "end": 1969
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 1978,
              "end": 1984
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
                    "start": 1995,
                    "end": 2006
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
                              "start": 2020,
                              "end": 2026
                            },
                            "start": 2018,
                            "end": 2026
                          },
                          "start": 2014,
                          "end": 2026
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2007,
                        "end": 2026
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
                                "start": 2041,
                                "end": 2045
                              },
                              "typeArguments": null,
                              "start": 2041,
                              "end": 2045
                            },
                            "start": 2039,
                            "end": 2045
                          },
                          "start": 2035,
                          "end": 2045
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2028,
                        "end": 2045
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
                                "start": 2061,
                                "end": 2074
                              },
                              "typeArguments": null,
                              "start": 2061,
                              "end": 2074
                            },
                            "start": 2059,
                            "end": 2074
                          },
                          "start": 2054,
                          "end": 2074
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2047,
                        "end": 2074
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
                              "start": 2090,
                              "end": 2095
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2090,
                            "end": 2097
                          },
                          "directive": null,
                          "start": 2090,
                          "end": 2098
                        }
                      ],
                      "start": 2076,
                      "end": 2108
                    },
                    "expression": false,
                    "start": 2006,
                    "end": 2108
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1995,
                  "end": 2108
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
                    "start": 2117,
                    "end": 2123
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
                              "start": 2131,
                              "end": 2139
                            },
                            "typeArguments": null,
                            "start": 2131,
                            "end": 2139
                          },
                          "start": 2129,
                          "end": 2139
                        },
                        "start": 2124,
                        "end": 2139
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2142,
                        "end": 2149
                      },
                      "start": 2140,
                      "end": 2149
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
                                    "start": 2171,
                                    "end": 2175
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2176,
                                    "end": 2180
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2171,
                                  "end": 2180
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
                                    "start": 2185,
                                    "end": 2190
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2191,
                                    "end": 2195
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2185,
                                  "end": 2195
                                },
                                "start": 2171,
                                "end": 2195
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2215,
                                    "end": 2219
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2220,
                                    "end": 2225
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2215,
                                  "end": 2225
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
                                    "start": 2230,
                                    "end": 2235
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2236,
                                    "end": 2241
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2230,
                                  "end": 2241
                                },
                                "start": 2215,
                                "end": 2241
                              },
                              "start": 2171,
                              "end": 2241
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
                                    "start": 2261,
                                    "end": 2265
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2266,
                                    "end": 2270
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2261,
                                  "end": 2270
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2271,
                                  "end": 2277
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2261,
                                "end": 2277
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
                                    "start": 2278,
                                    "end": 2283
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2284,
                                    "end": 2288
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2278,
                                  "end": 2288
                                }
                              ],
                              "optional": false,
                              "start": 2261,
                              "end": 2289
                            },
                            "start": 2171,
                            "end": 2289
                          },
                          "start": 2164,
                          "end": 2290
                        }
                      ],
                      "start": 2150,
                      "end": 2300
                    },
                    "expression": false,
                    "start": 2123,
                    "end": 2300
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2117,
                  "end": 2300
                }
              ],
              "start": 1985,
              "end": 2306
            },
            "abstract": false,
            "declare": false,
            "start": 1955,
            "end": 2306
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropertyFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 2317,
              "end": 2330
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
                    "start": 2341,
                    "end": 2349
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2352,
                    "end": 2353
                  },
                  "computed": false,
                  "start": 2341,
                  "end": 2353
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2363,
                    "end": 2370
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2373,
                    "end": 2374
                  },
                  "computed": false,
                  "start": 2363,
                  "end": 2374
                }
              ],
              "start": 2331,
              "end": 2380
            },
            "const": false,
            "declare": false,
            "start": 2312,
            "end": 2380
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
              "start": 2392,
              "end": 2401
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 2410,
              "end": 2416
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
                    "start": 2427,
                    "end": 2438
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
                                  "start": 2462,
                                  "end": 2475
                                },
                                "typeArguments": null,
                                "start": 2462,
                                "end": 2475
                              },
                              "start": 2462,
                              "end": 2477
                            },
                            "start": 2460,
                            "end": 2477
                          },
                          "start": 2446,
                          "end": 2477
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2439,
                        "end": 2477
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
                                  "start": 2498,
                                  "end": 2507
                                },
                                "typeArguments": null,
                                "start": 2498,
                                "end": 2507
                              },
                              "start": 2498,
                              "end": 2509
                            },
                            "start": 2496,
                            "end": 2509
                          },
                          "start": 2486,
                          "end": 2509
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2479,
                        "end": 2509
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
                                "start": 2530,
                                "end": 2534
                              },
                              "typeArguments": null,
                              "start": 2530,
                              "end": 2534
                            },
                            "start": 2528,
                            "end": 2534
                          },
                          "start": 2518,
                          "end": 2534
                        },
                        "readonly": false,
                        "static": false,
                        "start": 2511,
                        "end": 2534
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
                              "start": 2550,
                              "end": 2555
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2550,
                            "end": 2557
                          },
                          "directive": null,
                          "start": 2550,
                          "end": 2558
                        }
                      ],
                      "start": 2536,
                      "end": 2568
                    },
                    "expression": false,
                    "start": 2438,
                    "end": 2568
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2427,
                  "end": 2568
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
                    "start": 2577,
                    "end": 2591
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
                              "start": 2599,
                              "end": 2608
                            },
                            "typeArguments": null,
                            "start": 2599,
                            "end": 2608
                          },
                          "start": 2597,
                          "end": 2608
                        },
                        "start": 2592,
                        "end": 2608
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2611,
                        "end": 2618
                      },
                      "start": 2609,
                      "end": 2618
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
                                        "start": 2640,
                                        "end": 2644
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2645,
                                        "end": 2655
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2640,
                                      "end": 2655
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2656,
                                      "end": 2662
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2640,
                                    "end": 2662
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
                                        "start": 2667,
                                        "end": 2672
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2673,
                                        "end": 2683
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2667,
                                      "end": 2683
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2684,
                                      "end": 2690
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2667,
                                    "end": 2690
                                  },
                                  "start": 2640,
                                  "end": 2690
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
                                        "start": 2710,
                                        "end": 2714
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2715,
                                        "end": 2729
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2710,
                                      "end": 2729
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2730,
                                      "end": 2736
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2710,
                                    "end": 2736
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
                                        "start": 2741,
                                        "end": 2746
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2747,
                                        "end": 2761
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2741,
                                      "end": 2761
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2762,
                                      "end": 2768
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2741,
                                    "end": 2768
                                  },
                                  "start": 2710,
                                  "end": 2768
                                },
                                "start": 2640,
                                "end": 2768
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
                                  "start": 2788,
                                  "end": 2799
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2800,
                                      "end": 2804
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2805,
                                      "end": 2815
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2800,
                                    "end": 2815
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2817,
                                      "end": 2822
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2823,
                                      "end": 2833
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2817,
                                    "end": 2833
                                  }
                                ],
                                "optional": false,
                                "start": 2788,
                                "end": 2834
                              },
                              "start": 2640,
                              "end": 2834
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
                                "start": 2854,
                                "end": 2865
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2866,
                                    "end": 2870
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2871,
                                    "end": 2885
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2866,
                                  "end": 2885
                                },
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2887,
                                    "end": 2892
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2893,
                                    "end": 2907
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2887,
                                  "end": 2907
                                }
                              ],
                              "optional": false,
                              "start": 2854,
                              "end": 2908
                            },
                            "start": 2640,
                            "end": 2908
                          },
                          "start": 2633,
                          "end": 2909
                        }
                      ],
                      "start": 2619,
                      "end": 2919
                    },
                    "expression": false,
                    "start": 2591,
                    "end": 2919
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2577,
                  "end": 2919
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
                    "start": 2928,
                    "end": 2934
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
                              "start": 2942,
                              "end": 2951
                            },
                            "typeArguments": null,
                            "start": 2942,
                            "end": 2951
                          },
                          "start": 2940,
                          "end": 2951
                        },
                        "start": 2935,
                        "end": 2951
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2954,
                        "end": 2961
                      },
                      "start": 2952,
                      "end": 2961
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
                                  "start": 2983,
                                  "end": 2987
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equalsNoReturn",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2988,
                                  "end": 3002
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2983,
                                "end": 3002
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3003,
                                  "end": 3008
                                }
                              ],
                              "optional": false,
                              "start": 2983,
                              "end": 3009
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
                                    "start": 3029,
                                    "end": 3033
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3034,
                                    "end": 3044
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3029,
                                  "end": 3044
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3045,
                                  "end": 3051
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3029,
                                "end": 3051
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
                                    "start": 3052,
                                    "end": 3057
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3058,
                                    "end": 3068
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3052,
                                  "end": 3068
                                }
                              ],
                              "optional": false,
                              "start": 3029,
                              "end": 3069
                            },
                            "start": 2983,
                            "end": 3069
                          },
                          "start": 2976,
                          "end": 3070
                        }
                      ],
                      "start": 2962,
                      "end": 3080
                    },
                    "expression": false,
                    "start": 2934,
                    "end": 3080
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2928,
                  "end": 3080
                }
              ],
              "start": 2417,
              "end": 3086
            },
            "abstract": false,
            "declare": false,
            "start": 2386,
            "end": 3086
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
              "start": 3098,
              "end": 3107
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 3116,
              "end": 3122
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
                    "start": 3133,
                    "end": 3144
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
                              "start": 3158,
                              "end": 3164
                            },
                            "start": 3156,
                            "end": 3164
                          },
                          "start": 3152,
                          "end": 3164
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3145,
                        "end": 3164
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
                                "start": 3179,
                                "end": 3183
                              },
                              "typeArguments": null,
                              "start": 3179,
                              "end": 3183
                            },
                            "start": 3177,
                            "end": 3183
                          },
                          "start": 3173,
                          "end": 3183
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3166,
                        "end": 3183
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
                                "start": 3199,
                                "end": 3213
                              },
                              "typeArguments": null,
                              "start": 3199,
                              "end": 3213
                            },
                            "start": 3197,
                            "end": 3213
                          },
                          "start": 3192,
                          "end": 3213
                        },
                        "readonly": false,
                        "static": false,
                        "start": 3185,
                        "end": 3213
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
                              "start": 3229,
                              "end": 3234
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 3229,
                            "end": 3236
                          },
                          "directive": null,
                          "start": 3229,
                          "end": 3237
                        }
                      ],
                      "start": 3215,
                      "end": 3247
                    },
                    "expression": false,
                    "start": 3144,
                    "end": 3247
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3133,
                  "end": 3247
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
                    "start": 3256,
                    "end": 3262
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
                              "start": 3270,
                              "end": 3279
                            },
                            "typeArguments": null,
                            "start": 3270,
                            "end": 3279
                          },
                          "start": 3268,
                          "end": 3279
                        },
                        "start": 3263,
                        "end": 3279
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
                                    "start": 3302,
                                    "end": 3306
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3307,
                                    "end": 3311
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3302,
                                  "end": 3311
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
                                    "start": 3316,
                                    "end": 3321
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3322,
                                    "end": 3326
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3316,
                                  "end": 3326
                                },
                                "start": 3302,
                                "end": 3326
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3346,
                                    "end": 3350
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3351,
                                    "end": 3356
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3346,
                                  "end": 3356
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
                                    "start": 3361,
                                    "end": 3366
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3367,
                                    "end": 3372
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3361,
                                  "end": 3372
                                },
                                "start": 3346,
                                "end": 3372
                              },
                              "start": 3302,
                              "end": 3372
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
                                    "start": 3392,
                                    "end": 3396
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3397,
                                    "end": 3401
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3392,
                                  "end": 3401
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3402,
                                  "end": 3408
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3392,
                                "end": 3408
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
                                    "start": 3409,
                                    "end": 3414
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3415,
                                    "end": 3419
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3409,
                                  "end": 3419
                                }
                              ],
                              "optional": false,
                              "start": 3392,
                              "end": 3420
                            },
                            "start": 3302,
                            "end": 3420
                          },
                          "start": 3295,
                          "end": 3421
                        }
                      ],
                      "start": 3281,
                      "end": 3431
                    },
                    "expression": false,
                    "start": 3262,
                    "end": 3431
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3256,
                  "end": 3431
                }
              ],
              "start": 3123,
              "end": 3437
            },
            "abstract": false,
            "declare": false,
            "start": 3092,
            "end": 3437
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParameterFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 3448,
              "end": 3462
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
                    "start": 3473,
                    "end": 3481
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3484,
                    "end": 3485
                  },
                  "computed": false,
                  "start": 3473,
                  "end": 3485
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3495,
                    "end": 3499
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3502,
                    "end": 3503
                  },
                  "computed": false,
                  "start": 3495,
                  "end": 3503
                }
              ],
              "start": 3463,
              "end": 3509
            },
            "const": false,
            "declare": false,
            "start": 3443,
            "end": 3509
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
                  "start": 3523,
                  "end": 3537
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
                      "start": 3540,
                      "end": 3546
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3547,
                      "end": 3556
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3540,
                    "end": 3556
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3557,
                    "end": 3571
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3540,
                  "end": 3571
                },
                "definite": false,
                "start": 3523,
                "end": 3571
              }
            ],
            "declare": false,
            "start": 3519,
            "end": 3572
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 3587,
              "end": 3598
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
                    "start": 3599,
                    "end": 3600
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3599,
                  "end": 3600
                }
              ],
              "start": 3598,
              "end": 3601
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
                      "start": 3607,
                      "end": 3610
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
                            "start": 3611,
                            "end": 3612
                          },
                          "typeArguments": null,
                          "start": 3611,
                          "end": 3612
                        }
                      ],
                      "start": 3610,
                      "end": 3613
                    },
                    "start": 3607,
                    "end": 3613
                  },
                  "start": 3605,
                  "end": 3613
                },
                "start": 3602,
                "end": 3613
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
                    "start": 3620,
                    "end": 3626
                  },
                  "start": 3618,
                  "end": 3626
                },
                "start": 3615,
                "end": 3626
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
                  "start": 3629,
                  "end": 3630
                },
                "typeArguments": null,
                "start": 3629,
                "end": 3630
              },
              "start": 3627,
              "end": 3630
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
                          "start": 3646,
                          "end": 3660
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3661,
                          "end": 3665
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3646,
                        "end": 3665
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3666,
                          "end": 3669
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3671,
                          "end": 3674
                        }
                      ],
                      "optional": false,
                      "start": 3646,
                      "end": 3675
                    },
                    "prefix": true,
                    "start": 3645,
                    "end": 3675
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3684,
                      "end": 3693
                    },
                    "start": 3677,
                    "end": 3694
                  },
                  "alternate": null,
                  "start": 3641,
                  "end": 3694
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
                      "start": 3710,
                      "end": 3713
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3714,
                      "end": 3717
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3710,
                    "end": 3718
                  },
                  "start": 3703,
                  "end": 3719
                }
              ],
              "start": 3631,
              "end": 3725
            },
            "expression": false,
            "start": 3578,
            "end": 3725
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 3740,
              "end": 3751
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
                    "start": 3752,
                    "end": 3753
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3752,
                  "end": 3753
                }
              ],
              "start": 3751,
              "end": 3754
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
                      "start": 3760,
                      "end": 3763
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
                            "start": 3764,
                            "end": 3765
                          },
                          "typeArguments": null,
                          "start": 3764,
                          "end": 3765
                        }
                      ],
                      "start": 3763,
                      "end": 3766
                    },
                    "start": 3760,
                    "end": 3766
                  },
                  "start": 3758,
                  "end": 3766
                },
                "start": 3755,
                "end": 3766
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
                    "start": 3773,
                    "end": 3779
                  },
                  "start": 3771,
                  "end": 3779
                },
                "start": 3768,
                "end": 3779
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3782,
                "end": 3789
              },
              "start": 3780,
              "end": 3789
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
                        "start": 3807,
                        "end": 3821
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "call",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3822,
                        "end": 3826
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3807,
                      "end": 3826
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3827,
                        "end": 3830
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3832,
                        "end": 3835
                      }
                    ],
                    "optional": false,
                    "start": 3807,
                    "end": 3836
                  },
                  "start": 3800,
                  "end": 3837
                }
              ],
              "start": 3790,
              "end": 3843
            },
            "expression": false,
            "start": 3731,
            "end": 3843
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayContains",
              "optional": false,
              "typeAnnotation": null,
              "start": 3858,
              "end": 3871
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
                    "start": 3872,
                    "end": 3873
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3882,
                      "end": 3888
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
                            "start": 3889,
                            "end": 3890
                          },
                          "typeArguments": null,
                          "start": 3889,
                          "end": 3890
                        }
                      ],
                      "start": 3888,
                      "end": 3891
                    },
                    "start": 3882,
                    "end": 3891
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3872,
                  "end": 3891
                }
              ],
              "start": 3871,
              "end": 3892
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
                        "start": 3896,
                        "end": 3897
                      },
                      "typeArguments": null,
                      "start": 3896,
                      "end": 3897
                    },
                    "start": 3896,
                    "end": 3899
                  },
                  "start": 3894,
                  "end": 3899
                },
                "start": 3893,
                "end": 3899
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
                      "start": 3907,
                      "end": 3908
                    },
                    "typeArguments": null,
                    "start": 3907,
                    "end": 3908
                  },
                  "start": 3905,
                  "end": 3908
                },
                "start": 3901,
                "end": 3908
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3911,
                "end": 3918
              },
              "start": 3909,
              "end": 3918
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
                        "start": 3933,
                        "end": 3936
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3939,
                          "end": 3940
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3941,
                          "end": 3947
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3939,
                        "end": 3947
                      },
                      "definite": false,
                      "start": 3933,
                      "end": 3947
                    }
                  ],
                  "declare": false,
                  "start": 3929,
                  "end": 3948
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
                          "start": 3966,
                          "end": 3967
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 3970,
                          "end": 3971
                        },
                        "definite": false,
                        "start": 3966,
                        "end": 3971
                      }
                    ],
                    "declare": false,
                    "start": 3962,
                    "end": 3971
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3973,
                      "end": 3974
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3977,
                      "end": 3980
                    },
                    "start": 3973,
                    "end": 3980
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
                      "start": 3982,
                      "end": 3983
                    },
                    "start": 3982,
                    "end": 3985
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
                              "start": 4005,
                              "end": 4009
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "equals",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4010,
                              "end": 4016
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4005,
                            "end": 4016
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
                                "start": 4017,
                                "end": 4018
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4019,
                                "end": 4020
                              },
                              "optional": false,
                              "computed": true,
                              "start": 4017,
                              "end": 4021
                            }
                          ],
                          "optional": false,
                          "start": 4005,
                          "end": 4022
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 4031,
                            "end": 4035
                          },
                          "start": 4024,
                          "end": 4036
                        },
                        "alternate": null,
                        "start": 4001,
                        "end": 4036
                      }
                    ],
                    "start": 3987,
                    "end": 4046
                  },
                  "start": 3957,
                  "end": 4046
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 4062,
                    "end": 4067
                  },
                  "start": 4055,
                  "end": 4068
                }
              ],
              "start": 3919,
              "end": 4074
            },
            "expression": false,
            "start": 3849,
            "end": 4074
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayEquals",
              "optional": false,
              "typeAnnotation": null,
              "start": 4089,
              "end": 4100
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
                    "start": 4101,
                    "end": 4102
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4111,
                      "end": 4117
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
                            "start": 4118,
                            "end": 4119
                          },
                          "typeArguments": null,
                          "start": 4118,
                          "end": 4119
                        }
                      ],
                      "start": 4117,
                      "end": 4120
                    },
                    "start": 4111,
                    "end": 4120
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4101,
                  "end": 4120
                }
              ],
              "start": 4100,
              "end": 4121
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
                        "start": 4125,
                        "end": 4126
                      },
                      "typeArguments": null,
                      "start": 4125,
                      "end": 4126
                    },
                    "start": 4125,
                    "end": 4128
                  },
                  "start": 4123,
                  "end": 4128
                },
                "start": 4122,
                "end": 4128
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
                        "start": 4133,
                        "end": 4134
                      },
                      "typeArguments": null,
                      "start": 4133,
                      "end": 4134
                    },
                    "start": 4133,
                    "end": 4136
                  },
                  "start": 4131,
                  "end": 4136
                },
                "start": 4130,
                "end": 4136
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4139,
                "end": 4146
              },
              "start": 4137,
              "end": 4146
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
                        "start": 4161,
                        "end": 4164
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4167,
                          "end": 4168
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4169,
                          "end": 4175
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4167,
                        "end": 4175
                      },
                      "definite": false,
                      "start": 4161,
                      "end": 4175
                    }
                  ],
                  "declare": false,
                  "start": 4157,
                  "end": 4176
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
                        "start": 4189,
                        "end": 4190
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4191,
                        "end": 4197
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4189,
                      "end": 4197
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4202,
                      "end": 4205
                    },
                    "start": 4189,
                    "end": 4205
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 4214,
                      "end": 4219
                    },
                    "start": 4207,
                    "end": 4220
                  },
                  "alternate": null,
                  "start": 4185,
                  "end": 4220
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
                          "start": 4238,
                          "end": 4239
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4242,
                          "end": 4243
                        },
                        "definite": false,
                        "start": 4238,
                        "end": 4243
                      }
                    ],
                    "declare": false,
                    "start": 4234,
                    "end": 4243
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4245,
                      "end": 4246
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4249,
                      "end": 4252
                    },
                    "start": 4245,
                    "end": 4252
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
                      "start": 4254,
                      "end": 4255
                    },
                    "start": 4254,
                    "end": 4257
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
                                  "start": 4278,
                                  "end": 4279
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4280,
                                  "end": 4281
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4278,
                                "end": 4282
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "equals",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4283,
                                "end": 4289
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4278,
                              "end": 4289
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
                                  "start": 4290,
                                  "end": 4291
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4292,
                                  "end": 4293
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4290,
                                "end": 4294
                              }
                            ],
                            "optional": false,
                            "start": 4278,
                            "end": 4295
                          },
                          "prefix": true,
                          "start": 4277,
                          "end": 4295
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 4304,
                            "end": 4309
                          },
                          "start": 4297,
                          "end": 4310
                        },
                        "alternate": null,
                        "start": 4273,
                        "end": 4310
                      }
                    ],
                    "start": 4259,
                    "end": 4320
                  },
                  "start": 4229,
                  "end": 4320
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 4336,
                    "end": 4340
                  },
                  "start": 4329,
                  "end": 4341
                }
              ],
              "start": 4147,
              "end": 4347
            },
            "expression": false,
            "start": 4080,
            "end": 4347
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "setEquals",
              "optional": false,
              "typeAnnotation": null,
              "start": 4362,
              "end": 4371
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
                    "start": 4372,
                    "end": 4373
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4382,
                      "end": 4388
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
                            "start": 4389,
                            "end": 4390
                          },
                          "typeArguments": null,
                          "start": 4389,
                          "end": 4390
                        }
                      ],
                      "start": 4388,
                      "end": 4391
                    },
                    "start": 4382,
                    "end": 4391
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4372,
                  "end": 4391
                }
              ],
              "start": 4371,
              "end": 4392
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
                        "start": 4396,
                        "end": 4397
                      },
                      "typeArguments": null,
                      "start": 4396,
                      "end": 4397
                    },
                    "start": 4396,
                    "end": 4399
                  },
                  "start": 4394,
                  "end": 4399
                },
                "start": 4393,
                "end": 4399
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
                        "start": 4404,
                        "end": 4405
                      },
                      "typeArguments": null,
                      "start": 4404,
                      "end": 4405
                    },
                    "start": 4404,
                    "end": 4407
                  },
                  "start": 4402,
                  "end": 4407
                },
                "start": 4401,
                "end": 4407
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4410,
                "end": 4417
              },
              "start": 4408,
              "end": 4417
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
                        "start": 4432,
                        "end": 4435
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4438,
                          "end": 4439
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4440,
                          "end": 4446
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4438,
                        "end": 4446
                      },
                      "definite": false,
                      "start": 4432,
                      "end": 4446
                    }
                  ],
                  "declare": false,
                  "start": 4428,
                  "end": 4447
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
                        "start": 4460,
                        "end": 4461
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4462,
                        "end": 4468
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4460,
                      "end": 4468
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4473,
                      "end": 4476
                    },
                    "start": 4460,
                    "end": 4476
                  },
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 4485,
                      "end": 4490
                    },
                    "start": 4478,
                    "end": 4491
                  },
                  "alternate": null,
                  "start": 4456,
                  "end": 4491
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
                          "start": 4509,
                          "end": 4510
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4513,
                          "end": 4514
                        },
                        "definite": false,
                        "start": 4509,
                        "end": 4514
                      }
                    ],
                    "declare": false,
                    "start": 4505,
                    "end": 4514
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4516,
                      "end": 4517
                    },
                    "operator": "<",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4520,
                      "end": 4523
                    },
                    "start": 4516,
                    "end": 4523
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
                      "start": 4525,
                      "end": 4526
                    },
                    "start": 4525,
                    "end": 4528
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
                              "start": 4549,
                              "end": 4562
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4563,
                                "end": 4564
                              },
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4566,
                                  "end": 4567
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4568,
                                  "end": 4569
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4566,
                                "end": 4570
                              }
                            ],
                            "optional": false,
                            "start": 4549,
                            "end": 4571
                          },
                          "prefix": true,
                          "start": 4548,
                          "end": 4571
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 4580,
                            "end": 4585
                          },
                          "start": 4573,
                          "end": 4586
                        },
                        "alternate": null,
                        "start": 4544,
                        "end": 4586
                      }
                    ],
                    "start": 4530,
                    "end": 4596
                  },
                  "start": 4500,
                  "end": 4596
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 4612,
                    "end": 4616
                  },
                  "start": 4605,
                  "end": 4617
                }
              ],
              "start": 4418,
              "end": 4623
            },
            "expression": false,
            "start": 4353,
            "end": 4623
          }
        ],
        "start": 10,
        "end": 4625
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 4625
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4625
}
```
