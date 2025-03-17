__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4331,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 3593,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 3593,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 38,
                "name": "C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 79,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 49,
                    "end": 73,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 59,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 59,
                      "end": 73,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 62,
                        "end": 73,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 85,
            "end": 109,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 101,
              "name": "C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 102,
              "end": 109,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 115,
            "end": 1253,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 122,
              "end": 1253,
              "id": {
                "type": "Identifier",
                "start": 128,
                "end": 137,
                "name": "C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 1253,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 148,
                    "end": 182,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 159,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 160,
                      "end": 182,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 161,
                          "end": 180,
                          "name": "m1_c3_c1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 169,
                            "end": 180,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 171,
                              "end": 180,
                              "typeName": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 180,
                                "name": "C1_public",
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
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 191,
                    "end": 226,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 202,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 203,
                      "end": 226,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 204,
                          "end": 224,
                          "name": "m1_c3_c2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 212,
                            "end": 224,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 214,
                              "end": 224,
                              "typeName": {
                                "type": "Identifier",
                                "start": 214,
                                "end": 224,
                                "name": "C2_private",
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
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 243,
                    "end": 284,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 254,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 255,
                      "end": 284,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 256,
                          "end": 271,
                          "name": "m1_c3_c1_2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 266,
                            "end": 271,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 268,
                              "end": 271
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 273,
                        "end": 284,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 294,
                    "end": 349,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 312,
                      "name": "f1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 312,
                      "end": 349,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 313,
                          "end": 336,
                          "name": "m1_c3_f1_arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 325,
                            "end": 336,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 327,
                              "end": 336,
                              "typeName": {
                                "type": "Identifier",
                                "start": 327,
                                "end": 336,
                                "name": "C1_public",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 338,
                        "end": 349,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 359,
                    "end": 412,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 375,
                      "name": "f2_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 375,
                      "end": 412,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 376,
                          "end": 399,
                          "name": "m1_c3_f2_arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 388,
                            "end": 399,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 390,
                              "end": 399,
                              "typeName": {
                                "type": "Identifier",
                                "start": 390,
                                "end": 399,
                                "name": "C1_public",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 401,
                        "end": 412,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 422,
                    "end": 478,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 440,
                      "name": "f3_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 440,
                      "end": 478,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 441,
                          "end": 465,
                          "name": "m1_c3_f3_arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 453,
                            "end": 465,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 455,
                              "end": 465,
                              "typeName": {
                                "type": "Identifier",
                                "start": 455,
                                "end": 465,
                                "name": "C2_private",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 467,
                        "end": 478,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 488,
                    "end": 551,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 495,
                      "end": 504,
                      "name": "f4_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 504,
                      "end": 551,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 505,
                          "end": 529,
                          "name": "m1_c3_f4_arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 517,
                            "end": 529,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 519,
                              "end": 529,
                              "typeName": {
                                "type": "Identifier",
                                "start": 519,
                                "end": 529,
                                "name": "C2_private",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 531,
                        "end": 551,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 561,
                    "end": 629,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 569,
                      "end": 579,
                      "name": "f5_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 579,
                      "end": 629,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 582,
                        "end": 629,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 596,
                            "end": 619,
                            "argument": {
                              "type": "NewExpression",
                              "start": 603,
                              "end": 618,
                              "callee": {
                                "type": "Identifier",
                                "start": 607,
                                "end": 616,
                                "name": "C1_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 639,
                    "end": 705,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 655,
                      "name": "f6_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 655,
                      "end": 705,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 658,
                        "end": 705,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 672,
                            "end": 695,
                            "argument": {
                              "type": "NewExpression",
                              "start": 679,
                              "end": 694,
                              "callee": {
                                "type": "Identifier",
                                "start": 683,
                                "end": 692,
                                "name": "C1_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 715,
                    "end": 784,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 723,
                      "end": 733,
                      "name": "f7_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 733,
                      "end": 784,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 736,
                        "end": 784,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 750,
                            "end": 774,
                            "argument": {
                              "type": "NewExpression",
                              "start": 757,
                              "end": 773,
                              "callee": {
                                "type": "Identifier",
                                "start": 761,
                                "end": 771,
                                "name": "C2_private",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 794,
                    "end": 871,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 810,
                      "name": "f8_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 810,
                      "end": 871,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 813,
                        "end": 871,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 827,
                            "end": 851,
                            "argument": {
                              "type": "NewExpression",
                              "start": 834,
                              "end": 850,
                              "callee": {
                                "type": "Identifier",
                                "start": 838,
                                "end": 848,
                                "name": "C2_private",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 881,
                    "end": 960,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 889,
                      "end": 899,
                      "name": "f9_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 899,
                      "end": 960,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 913,
                        "end": 960,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 927,
                            "end": 950,
                            "argument": {
                              "type": "NewExpression",
                              "start": 934,
                              "end": 949,
                              "callee": {
                                "type": "Identifier",
                                "start": 938,
                                "end": 947,
                                "name": "C1_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 901,
                        "end": 912,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 903,
                          "end": 912,
                          "typeName": {
                            "type": "Identifier",
                            "start": 903,
                            "end": 912,
                            "name": "C1_public",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 970,
                    "end": 1048,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 977,
                      "end": 987,
                      "name": "f10_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 987,
                      "end": 1048,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1001,
                        "end": 1048,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1015,
                            "end": 1038,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1022,
                              "end": 1037,
                              "callee": {
                                "type": "Identifier",
                                "start": 1026,
                                "end": 1035,
                                "name": "C1_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 989,
                        "end": 1000,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 991,
                          "end": 1000,
                          "typeName": {
                            "type": "Identifier",
                            "start": 991,
                            "end": 1000,
                            "name": "C1_public",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1058,
                    "end": 1140,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1066,
                      "end": 1077,
                      "name": "f11_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1077,
                      "end": 1140,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1092,
                        "end": 1140,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1106,
                            "end": 1130,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1113,
                              "end": 1129,
                              "callee": {
                                "type": "Identifier",
                                "start": 1117,
                                "end": 1127,
                                "name": "C2_private",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1079,
                        "end": 1091,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1081,
                          "end": 1091,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1081,
                            "end": 1091,
                            "name": "C2_private",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1150,
                    "end": 1247,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1167,
                      "name": "f12_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1167,
                      "end": 1247,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1182,
                        "end": 1247,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1205,
                            "end": 1229,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1212,
                              "end": 1228,
                              "callee": {
                                "type": "Identifier",
                                "start": 1216,
                                "end": 1226,
                                "name": "C2_private",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1169,
                        "end": 1181,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1171,
                          "end": 1181,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1171,
                            "end": 1181,
                            "name": "C2_private",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 1259,
            "end": 2348,
            "id": {
              "type": "Identifier",
              "start": 1265,
              "end": 1275,
              "name": "C4_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1276,
              "end": 2348,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1286,
                  "end": 1320,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1286,
                    "end": 1297,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1298,
                    "end": 1320,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1299,
                        "end": 1318,
                        "name": "m1_c4_c1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1307,
                          "end": 1318,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1309,
                            "end": 1318,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1309,
                              "end": 1318,
                              "name": "C1_public",
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 1329,
                  "end": 1364,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1329,
                    "end": 1340,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 1341,
                    "end": 1364,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1342,
                        "end": 1362,
                        "name": "m1_c4_c2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1350,
                          "end": 1362,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1352,
                            "end": 1362,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1352,
                              "end": 1362,
                              "name": "C2_private",
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 1373,
                  "end": 1414,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1373,
                    "end": 1384,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1385,
                    "end": 1414,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1386,
                        "end": 1401,
                        "name": "m1_c4_c1_2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1396,
                          "end": 1401,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1398,
                            "end": 1401
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1403,
                      "end": 1414,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 1423,
                  "end": 1478,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1431,
                    "end": 1441,
                    "name": "f1_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1441,
                    "end": 1478,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1442,
                        "end": 1465,
                        "name": "m1_c4_f1_arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1454,
                          "end": 1465,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1456,
                            "end": 1465,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1456,
                              "end": 1465,
                              "name": "C1_public",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 1467,
                      "end": 1478,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1488,
                  "end": 1541,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1495,
                    "end": 1504,
                    "name": "f2_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1504,
                    "end": 1541,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1505,
                        "end": 1528,
                        "name": "m1_c4_f2_arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1517,
                          "end": 1528,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1519,
                            "end": 1528,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1519,
                              "end": 1528,
                              "name": "C1_public",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 1530,
                      "end": 1541,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1551,
                  "end": 1607,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1559,
                    "end": 1569,
                    "name": "f3_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1569,
                    "end": 1607,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1570,
                        "end": 1594,
                        "name": "m1_c4_f3_arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1582,
                          "end": 1594,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1584,
                            "end": 1594,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1584,
                              "end": 1594,
                              "name": "C2_private",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 1596,
                      "end": 1607,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1617,
                  "end": 1671,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1624,
                    "end": 1633,
                    "name": "f4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1633,
                    "end": 1671,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1634,
                        "end": 1658,
                        "name": "m1_c4_f4_arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1646,
                          "end": 1658,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1648,
                            "end": 1658,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1648,
                              "end": 1658,
                              "name": "C2_private",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 1660,
                      "end": 1671,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1682,
                  "end": 1750,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1690,
                    "end": 1700,
                    "name": "f5_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1700,
                    "end": 1750,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1703,
                      "end": 1750,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1717,
                          "end": 1740,
                          "argument": {
                            "type": "NewExpression",
                            "start": 1724,
                            "end": 1739,
                            "callee": {
                              "type": "Identifier",
                              "start": 1728,
                              "end": 1737,
                              "name": "C1_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1760,
                  "end": 1826,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1767,
                    "end": 1776,
                    "name": "f6_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1776,
                    "end": 1826,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1779,
                      "end": 1826,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1793,
                          "end": 1816,
                          "argument": {
                            "type": "NewExpression",
                            "start": 1800,
                            "end": 1815,
                            "callee": {
                              "type": "Identifier",
                              "start": 1804,
                              "end": 1813,
                              "name": "C1_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1836,
                  "end": 1905,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1844,
                    "end": 1854,
                    "name": "f7_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1854,
                    "end": 1905,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1857,
                      "end": 1905,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1871,
                          "end": 1895,
                          "argument": {
                            "type": "NewExpression",
                            "start": 1878,
                            "end": 1894,
                            "callee": {
                              "type": "Identifier",
                              "start": 1882,
                              "end": 1892,
                              "name": "C2_private",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1915,
                  "end": 1982,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1922,
                    "end": 1931,
                    "name": "f8_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1931,
                    "end": 1982,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1934,
                      "end": 1982,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1948,
                          "end": 1972,
                          "argument": {
                            "type": "NewExpression",
                            "start": 1955,
                            "end": 1971,
                            "callee": {
                              "type": "Identifier",
                              "start": 1959,
                              "end": 1969,
                              "name": "C2_private",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1993,
                  "end": 2072,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2001,
                    "end": 2011,
                    "name": "f9_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2011,
                    "end": 2072,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2025,
                      "end": 2072,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2039,
                          "end": 2062,
                          "argument": {
                            "type": "NewExpression",
                            "start": 2046,
                            "end": 2061,
                            "callee": {
                              "type": "Identifier",
                              "start": 2050,
                              "end": 2059,
                              "name": "C1_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2013,
                      "end": 2024,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2015,
                        "end": 2024,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2015,
                          "end": 2024,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2082,
                  "end": 2160,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2089,
                    "end": 2099,
                    "name": "f10_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2099,
                    "end": 2160,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2113,
                      "end": 2160,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2127,
                          "end": 2150,
                          "argument": {
                            "type": "NewExpression",
                            "start": 2134,
                            "end": 2149,
                            "callee": {
                              "type": "Identifier",
                              "start": 2138,
                              "end": 2147,
                              "name": "C1_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2101,
                      "end": 2112,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2103,
                        "end": 2112,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2103,
                          "end": 2112,
                          "name": "C1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2170,
                  "end": 2252,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2178,
                    "end": 2189,
                    "name": "f11_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2189,
                    "end": 2252,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2204,
                      "end": 2252,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2218,
                          "end": 2242,
                          "argument": {
                            "type": "NewExpression",
                            "start": 2225,
                            "end": 2241,
                            "callee": {
                              "type": "Identifier",
                              "start": 2229,
                              "end": 2239,
                              "name": "C2_private",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2191,
                      "end": 2203,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2193,
                        "end": 2203,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2193,
                          "end": 2203,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 2262,
                  "end": 2342,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2269,
                    "end": 2279,
                    "name": "f12_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2279,
                    "end": 2342,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2294,
                      "end": 2342,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2308,
                          "end": 2332,
                          "argument": {
                            "type": "NewExpression",
                            "start": 2315,
                            "end": 2331,
                            "callee": {
                              "type": "Identifier",
                              "start": 2319,
                              "end": 2329,
                              "name": "C2_private",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2281,
                      "end": 2293,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2283,
                        "end": 2293,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2283,
                          "end": 2293,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2354,
            "end": 2437,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2361,
              "end": 2437,
              "id": {
                "type": "Identifier",
                "start": 2367,
                "end": 2376,
                "name": "C5_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 2377,
                "end": 2437,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2387,
                    "end": 2431,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2387,
                      "end": 2398,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2399,
                      "end": 2431,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2400,
                          "end": 2418,
                          "name": "m1_c5_c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2407,
                            "end": 2418,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2409,
                              "end": 2418,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2409,
                                "end": 2418,
                                "name": "C1_public",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 2420,
                        "end": 2431,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 2447,
            "end": 2524,
            "id": {
              "type": "Identifier",
              "start": 2453,
              "end": 2463,
              "name": "C6_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 2464,
              "end": 2524,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 2474,
                  "end": 2518,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2474,
                    "end": 2485,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2486,
                    "end": 2518,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2487,
                        "end": 2505,
                        "name": "m1_c6_c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2494,
                          "end": 2505,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2496,
                            "end": 2505,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2496,
                              "end": 2505,
                              "name": "C1_public",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 2507,
                      "end": 2518,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2529,
            "end": 2622,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2536,
              "end": 2622,
              "id": {
                "type": "Identifier",
                "start": 2542,
                "end": 2551,
                "name": "C7_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 2552,
                "end": 2622,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2562,
                    "end": 2616,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2562,
                      "end": 2573,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2574,
                      "end": 2616,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2575,
                          "end": 2594,
                          "name": "m1_c7_c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2582,
                            "end": 2594,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2584,
                              "end": 2594,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2584,
                                "end": 2594,
                                "name": "C2_private",
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
                      "body": {
                        "type": "BlockStatement",
                        "start": 2596,
                        "end": 2616,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 2632,
            "end": 2710,
            "id": {
              "type": "Identifier",
              "start": 2638,
              "end": 2648,
              "name": "C8_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 2649,
              "end": 2710,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 2659,
                  "end": 2704,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2659,
                    "end": 2670,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2671,
                    "end": 2704,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2672,
                        "end": 2691,
                        "name": "m1_c8_c",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2679,
                          "end": 2691,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2681,
                            "end": 2691,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2681,
                              "end": 2691,
                              "name": "C2_private",
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
                    "body": {
                      "type": "BlockStatement",
                      "start": 2693,
                      "end": 2704,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 2716,
            "end": 2764,
            "id": {
              "type": "Identifier",
              "start": 2725,
              "end": 2734,
              "name": "f1_public",
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
                "start": 2735,
                "end": 2755,
                "name": "m1_f1_arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2744,
                  "end": 2755,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2746,
                    "end": 2755,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2746,
                      "end": 2755,
                      "name": "C1_public",
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
            "body": {
              "type": "BlockStatement",
              "start": 2757,
              "end": 2764,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2770,
            "end": 2825,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 2777,
              "end": 2825,
              "id": {
                "type": "Identifier",
                "start": 2786,
                "end": 2795,
                "name": "f2_public",
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
                  "start": 2796,
                  "end": 2816,
                  "name": "m1_f2_arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2805,
                    "end": 2816,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2807,
                      "end": 2816,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2807,
                        "end": 2816,
                        "name": "C1_public",
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
              "body": {
                "type": "BlockStatement",
                "start": 2818,
                "end": 2825,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 2831,
            "end": 2880,
            "id": {
              "type": "Identifier",
              "start": 2840,
              "end": 2849,
              "name": "f3_public",
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
                "start": 2850,
                "end": 2871,
                "name": "m1_f3_arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2859,
                  "end": 2871,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2861,
                    "end": 2871,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2861,
                      "end": 2871,
                      "name": "C2_private",
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
            "body": {
              "type": "BlockStatement",
              "start": 2873,
              "end": 2880,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2886,
            "end": 2951,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 2893,
              "end": 2951,
              "id": {
                "type": "Identifier",
                "start": 2902,
                "end": 2911,
                "name": "f4_public",
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
                  "start": 2912,
                  "end": 2933,
                  "name": "m1_f4_arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2921,
                    "end": 2933,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2923,
                      "end": 2933,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2923,
                        "end": 2933,
                        "name": "C2_private",
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
              "body": {
                "type": "BlockStatement",
                "start": 2935,
                "end": 2951,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 2958,
            "end": 3018,
            "id": {
              "type": "Identifier",
              "start": 2967,
              "end": 2976,
              "name": "f5_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 2979,
              "end": 3018,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2989,
                  "end": 3012,
                  "argument": {
                    "type": "NewExpression",
                    "start": 2996,
                    "end": 3011,
                    "callee": {
                      "type": "Identifier",
                      "start": 3000,
                      "end": 3009,
                      "name": "C1_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3024,
            "end": 3091,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 3031,
              "end": 3091,
              "id": {
                "type": "Identifier",
                "start": 3040,
                "end": 3049,
                "name": "f6_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3052,
                "end": 3091,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3062,
                    "end": 3085,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3069,
                      "end": 3084,
                      "callee": {
                        "type": "Identifier",
                        "start": 3073,
                        "end": 3082,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 3097,
            "end": 3158,
            "id": {
              "type": "Identifier",
              "start": 3106,
              "end": 3115,
              "name": "f7_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 3118,
              "end": 3158,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3128,
                  "end": 3152,
                  "argument": {
                    "type": "NewExpression",
                    "start": 3135,
                    "end": 3151,
                    "callee": {
                      "type": "Identifier",
                      "start": 3139,
                      "end": 3149,
                      "name": "C2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3164,
            "end": 3242,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 3171,
              "end": 3242,
              "id": {
                "type": "Identifier",
                "start": 3180,
                "end": 3189,
                "name": "f8_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3192,
                "end": 3242,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3202,
                    "end": 3226,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3209,
                      "end": 3225,
                      "callee": {
                        "type": "Identifier",
                        "start": 3213,
                        "end": 3223,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 3249,
            "end": 3321,
            "id": {
              "type": "Identifier",
              "start": 3258,
              "end": 3268,
              "name": "f9_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 3282,
              "end": 3321,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3292,
                  "end": 3315,
                  "argument": {
                    "type": "NewExpression",
                    "start": 3299,
                    "end": 3314,
                    "callee": {
                      "type": "Identifier",
                      "start": 3303,
                      "end": 3312,
                      "name": "C1_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3270,
              "end": 3281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3272,
                "end": 3281,
                "typeName": {
                  "type": "Identifier",
                  "start": 3272,
                  "end": 3281,
                  "name": "C1_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3327,
            "end": 3406,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 3334,
              "end": 3406,
              "id": {
                "type": "Identifier",
                "start": 3343,
                "end": 3353,
                "name": "f10_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3367,
                "end": 3406,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3377,
                    "end": 3400,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3384,
                      "end": 3399,
                      "callee": {
                        "type": "Identifier",
                        "start": 3388,
                        "end": 3397,
                        "name": "C1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3355,
                "end": 3366,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3357,
                  "end": 3366,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3357,
                    "end": 3366,
                    "name": "C1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 3412,
            "end": 3487,
            "id": {
              "type": "Identifier",
              "start": 3421,
              "end": 3432,
              "name": "f11_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 3447,
              "end": 3487,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3457,
                  "end": 3481,
                  "argument": {
                    "type": "NewExpression",
                    "start": 3464,
                    "end": 3480,
                    "callee": {
                      "type": "Identifier",
                      "start": 3468,
                      "end": 3478,
                      "name": "C2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3434,
              "end": 3446,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3436,
                "end": 3446,
                "typeName": {
                  "type": "Identifier",
                  "start": 3436,
                  "end": 3446,
                  "name": "C2_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3493,
            "end": 3591,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 3500,
              "end": 3591,
              "id": {
                "type": "Identifier",
                "start": 3509,
                "end": 3519,
                "name": "f12_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3534,
                "end": 3591,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3553,
                    "end": 3577,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3560,
                      "end": 3576,
                      "callee": {
                        "type": "Identifier",
                        "start": 3564,
                        "end": 3574,
                        "name": "C2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3521,
                "end": 3533,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3523,
                  "end": 3533,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3523,
                    "end": 3533,
                    "name": "C2_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 3595,
      "end": 3614,
      "id": {
        "type": "Identifier",
        "start": 3601,
        "end": 3610,
        "name": "C6_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3611,
        "end": 3614,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 3616,
      "end": 4098,
      "id": {
        "type": "Identifier",
        "start": 3622,
        "end": 3631,
        "name": "C7_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3632,
        "end": 4098,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3638,
            "end": 3669,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3638,
              "end": 3649,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3650,
              "end": 3669,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3651,
                  "end": 3667,
                  "name": "c7_c2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3656,
                    "end": 3667,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3658,
                      "end": 3667,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3658,
                        "end": 3667,
                        "name": "C6_public",
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3674,
            "end": 3708,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3674,
              "end": 3685,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 3686,
              "end": 3708,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3687,
                  "end": 3699,
                  "name": "c7_c1_2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3694,
                    "end": 3699,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3696,
                      "end": 3699
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3701,
                "end": 3708,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3713,
            "end": 3761,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3721,
              "end": 3731,
              "name": "f1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3731,
              "end": 3761,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3732,
                  "end": 3752,
                  "name": "c7_f1_arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3741,
                    "end": 3752,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3743,
                      "end": 3752,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3743,
                        "end": 3752,
                        "name": "C6_public",
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
              "body": {
                "type": "BlockStatement",
                "start": 3754,
                "end": 3761,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3767,
            "end": 3813,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3774,
              "end": 3783,
              "name": "f2_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3783,
              "end": 3813,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3784,
                  "end": 3804,
                  "name": "c7_f2_arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3793,
                    "end": 3804,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3795,
                      "end": 3804,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3795,
                        "end": 3804,
                        "name": "C6_public",
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
              "body": {
                "type": "BlockStatement",
                "start": 3806,
                "end": 3813,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 3819,
            "end": 3879,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3827,
              "end": 3837,
              "name": "f5_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3837,
              "end": 3879,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3840,
                "end": 3879,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3850,
                    "end": 3873,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3857,
                      "end": 3872,
                      "callee": {
                        "type": "Identifier",
                        "start": 3861,
                        "end": 3870,
                        "name": "C6_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3885,
            "end": 3943,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3892,
              "end": 3901,
              "name": "f6_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3901,
              "end": 3943,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3904,
                "end": 3943,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3914,
                    "end": 3937,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3921,
                      "end": 3936,
                      "callee": {
                        "type": "Identifier",
                        "start": 3925,
                        "end": 3934,
                        "name": "C6_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 3949,
            "end": 4020,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3957,
              "end": 3967,
              "name": "f9_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3967,
              "end": 4020,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3981,
                "end": 4020,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3991,
                    "end": 4014,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3998,
                      "end": 4013,
                      "callee": {
                        "type": "Identifier",
                        "start": 4002,
                        "end": 4011,
                        "name": "C6_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3969,
                "end": 3980,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3971,
                  "end": 3980,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3971,
                    "end": 3980,
                    "name": "C6_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 4026,
            "end": 4096,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4033,
              "end": 4043,
              "name": "f10_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4043,
              "end": 4096,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4057,
                "end": 4096,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4067,
                    "end": 4090,
                    "argument": {
                      "type": "NewExpression",
                      "start": 4074,
                      "end": 4089,
                      "callee": {
                        "type": "Identifier",
                        "start": 4078,
                        "end": 4087,
                        "name": "C6_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4045,
                "end": 4056,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4047,
                  "end": 4056,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4047,
                    "end": 4056,
                    "name": "C6_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4100,
      "end": 4161,
      "id": {
        "type": "Identifier",
        "start": 4106,
        "end": 4115,
        "name": "C9_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4116,
        "end": 4161,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4122,
            "end": 4159,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4122,
              "end": 4133,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 4134,
              "end": 4159,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4135,
                  "end": 4150,
                  "name": "c9_c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4139,
                    "end": 4150,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4141,
                      "end": 4150,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4141,
                        "end": 4150,
                        "name": "C6_public",
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
              "body": {
                "type": "BlockStatement",
                "start": 4152,
                "end": 4159,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4166,
      "end": 4207,
      "id": {
        "type": "Identifier",
        "start": 4175,
        "end": 4184,
        "name": "f4_public",
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
          "start": 4185,
          "end": 4202,
          "name": "f4_arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4191,
            "end": 4202,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4193,
              "end": 4202,
              "typeName": {
                "type": "Identifier",
                "start": 4193,
                "end": 4202,
                "name": "C6_public",
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
      "body": {
        "type": "BlockStatement",
        "start": 4204,
        "end": 4207,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4211,
      "end": 4263,
      "id": {
        "type": "Identifier",
        "start": 4220,
        "end": 4229,
        "name": "f6_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 4232,
        "end": 4263,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4238,
            "end": 4261,
            "argument": {
              "type": "NewExpression",
              "start": 4245,
              "end": 4260,
              "callee": {
                "type": "Identifier",
                "start": 4249,
                "end": 4258,
                "name": "C6_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4266,
      "end": 4330,
      "id": {
        "type": "Identifier",
        "start": 4275,
        "end": 4285,
        "name": "f10_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 4299,
        "end": 4330,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4305,
            "end": 4328,
            "argument": {
              "type": "NewExpression",
              "start": 4312,
              "end": 4327,
              "callee": {
                "type": "Identifier",
                "start": 4316,
                "end": 4325,
                "name": "C6_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4287,
        "end": 4298,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4289,
          "end": 4298,
          "typeName": {
            "type": "Identifier",
            "start": 4289,
            "end": 4298,
            "name": "C6_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
