__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4626,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 4625,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 4625,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 68,
            "body": {
              "type": "TSInterfaceBody",
              "start": 33,
              "end": 68,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 43,
                  "end": 62,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 44,
                      "end": 57,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 49,
                        "end": 57,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 51,
                          "end": 57
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 60,
                      "end": 61,
                      "typeName": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 29,
              "decorators": [],
              "name": "Map",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 29,
              "end": 32,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 30,
                  "end": 31,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 74,
            "end": 136,
            "body": {
              "type": "TSInterfaceBody",
              "start": 94,
              "end": 136,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 104,
                  "end": 130,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 110,
                    "decorators": [],
                    "name": "equals",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 111,
                      "end": 119,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 116,
                        "end": 119,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 118,
                          "end": 119,
                          "typeName": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 119,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 122,
                      "end": 129
                    }
                  },
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 90,
              "decorators": [],
              "name": "Equals",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 90,
              "end": 93,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 91,
                  "end": 92,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 142,
            "end": 162,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 155,
              "end": 162,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 154,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 168,
            "end": 1949,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 194,
              "end": 1949,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 204,
                  "end": 1137,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 210,
                    "decorators": [],
                    "name": "equals",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 210,
                    "end": 1137,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 232,
                      "end": 1137,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 246,
                          "end": 277,
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "start": 265,
                            "end": 277,
                            "argument": {
                              "type": "Literal",
                              "start": 272,
                              "end": 276,
                              "raw": "true",
                              "value": true
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 250,
                            "end": 263,
                            "operator": "===",
                            "left": {
                              "type": "ThisExpression",
                              "start": 250,
                              "end": 254
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 259,
                              "end": 263,
                              "decorators": [],
                              "name": "that",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "start": 290,
                          "end": 354,
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "start": 341,
                            "end": 354,
                            "argument": {
                              "type": "Literal",
                              "start": 348,
                              "end": 353,
                              "raw": "false",
                              "value": false
                            }
                          },
                          "test": {
                            "type": "UnaryExpression",
                            "start": 294,
                            "end": 339,
                            "argument": {
                              "type": "LogicalExpression",
                              "start": 296,
                              "end": 338,
                              "operator": "&&",
                              "left": {
                                "type": "CallExpression",
                                "start": 296,
                                "end": 315,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 296,
                                  "end": 313,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 296,
                                    "end": 300
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 301,
                                    "end": 313,
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 319,
                                "end": 338,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 319,
                                  "end": 336,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 319,
                                    "end": 323,
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 324,
                                    "end": 336,
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            },
                            "operator": "!",
                            "prefix": true
                          }
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 367,
                          "end": 407,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 371,
                              "end": 406,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 371,
                                "end": 380,
                                "decorators": [],
                                "name": "propCount",
                                "optional": false
                              },
                              "init": {
                                "type": "CallExpression",
                                "start": 383,
                                "end": 406,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 383,
                                  "end": 404,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 383,
                                    "end": 387,
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 388,
                                    "end": 404,
                                    "decorators": [],
                                    "name": "getPropertyCount",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "IfStatement",
                          "start": 420,
                          "end": 476,
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "start": 463,
                            "end": 476,
                            "argument": {
                              "type": "Literal",
                              "start": 470,
                              "end": 475,
                              "raw": "false",
                              "value": false
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 424,
                            "end": 461,
                            "operator": "!==",
                            "left": {
                              "type": "Identifier",
                              "start": 424,
                              "end": 433,
                              "decorators": [],
                              "name": "propCount",
                              "optional": false
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 438,
                              "end": 461,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 438,
                                "end": 459,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 438,
                                  "end": 442
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 443,
                                  "end": 459,
                                  "decorators": [],
                                  "name": "getPropertyCount",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 489,
                          "end": 529,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 493,
                              "end": 528,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 493,
                                "end": 501,
                                "decorators": [],
                                "name": "sigCount",
                                "optional": false
                              },
                              "init": {
                                "type": "CallExpression",
                                "start": 504,
                                "end": 528,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 504,
                                  "end": 526,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 504,
                                    "end": 508,
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 509,
                                    "end": 526,
                                    "decorators": [],
                                    "name": "getSignatureCount",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "IfStatement",
                          "start": 542,
                          "end": 598,
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "start": 585,
                            "end": 598,
                            "argument": {
                              "type": "Literal",
                              "start": 592,
                              "end": 597,
                              "raw": "false",
                              "value": false
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 546,
                            "end": 583,
                            "operator": "!==",
                            "left": {
                              "type": "Identifier",
                              "start": 546,
                              "end": 554,
                              "decorators": [],
                              "name": "sigCount",
                              "optional": false
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 559,
                              "end": 583,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 559,
                                "end": 581,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 559,
                                  "end": 563
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 564,
                                  "end": 581,
                                  "decorators": [],
                                  "name": "getSignatureCount",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "start": 611,
                          "end": 970,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 626,
                            "end": 970,
                            "body": [
                              {
                                "type": "ForStatement",
                                "start": 644,
                                "end": 956,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 680,
                                  "end": 956,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 702,
                                      "end": 737,
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 706,
                                          "end": 736,
                                          "definite": false,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 706,
                                            "end": 714,
                                            "decorators": [],
                                            "name": "thisProp",
                                            "optional": false
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "start": 717,
                                            "end": 736,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 734,
                                                "end": 735,
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false
                                              }
                                            ],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 717,
                                              "end": 733,
                                              "computed": false,
                                              "object": {
                                                "type": "ThisExpression",
                                                "start": 717,
                                                "end": 721
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "start": 722,
                                                "end": 733,
                                                "decorators": [],
                                                "name": "getProperty",
                                                "optional": false
                                              }
                                            },
                                            "optional": false
                                          }
                                        }
                                      ],
                                      "declare": false,
                                      "kind": "var"
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 758,
                                      "end": 811,
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 762,
                                          "end": 810,
                                          "definite": false,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 762,
                                            "end": 770,
                                            "decorators": [],
                                            "name": "thatProp",
                                            "optional": false
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "start": 773,
                                            "end": 810,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "start": 796,
                                                "end": 809,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 796,
                                                  "end": 804,
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 805,
                                                  "end": 809,
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false
                                                }
                                              }
                                            ],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 773,
                                              "end": 795,
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 773,
                                                "end": 777,
                                                "decorators": [],
                                                "name": "that",
                                                "optional": false
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "start": 778,
                                                "end": 795,
                                                "decorators": [],
                                                "name": "getPropertyByName",
                                                "optional": false
                                              }
                                            },
                                            "optional": false
                                          }
                                        }
                                      ],
                                      "declare": false,
                                      "kind": "var"
                                    },
                                    {
                                      "type": "IfStatement",
                                      "start": 832,
                                      "end": 938,
                                      "alternate": null,
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "start": 925,
                                        "end": 938,
                                        "argument": {
                                          "type": "Literal",
                                          "start": 932,
                                          "end": 937,
                                          "raw": "false",
                                          "value": false
                                        }
                                      },
                                      "test": {
                                        "type": "UnaryExpression",
                                        "start": 836,
                                        "end": 923,
                                        "argument": {
                                          "type": "LogicalExpression",
                                          "start": 838,
                                          "end": 922,
                                          "operator": "&&",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "start": 838,
                                            "end": 883,
                                            "operator": "&&",
                                            "left": {
                                              "type": "Identifier",
                                              "start": 838,
                                              "end": 846,
                                              "decorators": [],
                                              "name": "thatProp",
                                              "optional": false
                                            },
                                            "right": {
                                              "type": "BinaryExpression",
                                              "start": 850,
                                              "end": 883,
                                              "operator": "===",
                                              "left": {
                                                "type": "MemberExpression",
                                                "start": 850,
                                                "end": 864,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 850,
                                                  "end": 858,
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 859,
                                                  "end": 864,
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false
                                                }
                                              },
                                              "right": {
                                                "type": "MemberExpression",
                                                "start": 869,
                                                "end": 883,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 869,
                                                  "end": 877,
                                                  "decorators": [],
                                                  "name": "thatProp",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 878,
                                                  "end": 883,
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false
                                                }
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "start": 887,
                                            "end": 922,
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "start": 908,
                                                "end": 921,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 908,
                                                  "end": 916,
                                                  "decorators": [],
                                                  "name": "thatProp",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 917,
                                                  "end": 921,
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false
                                                }
                                              }
                                            ],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 887,
                                              "end": 907,
                                              "computed": false,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 887,
                                                "end": 900,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 887,
                                                  "end": 895,
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 896,
                                                  "end": 900,
                                                  "decorators": [],
                                                  "name": "type",
                                                  "optional": false
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "start": 901,
                                                "end": 907,
                                                "decorators": [],
                                                "name": "equals",
                                                "optional": false
                                              }
                                            },
                                            "optional": false
                                          }
                                        },
                                        "operator": "!",
                                        "prefix": true
                                      }
                                    }
                                  ]
                                },
                                "init": {
                                  "type": "VariableDeclaration",
                                  "start": 649,
                                  "end": 658,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 653,
                                      "end": 658,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 653,
                                        "end": 654,
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "Literal",
                                        "start": 657,
                                        "end": 658,
                                        "raw": "0",
                                        "value": 0
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 660,
                                  "end": 673,
                                  "operator": "<",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 660,
                                    "end": 661,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 664,
                                    "end": 673,
                                    "decorators": [],
                                    "name": "propCount",
                                    "optional": false
                                  }
                                },
                                "update": {
                                  "type": "UpdateExpression",
                                  "start": 675,
                                  "end": 678,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 675,
                                    "end": 676,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  },
                                  "operator": "++",
                                  "prefix": false
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "Identifier",
                            "start": 615,
                            "end": 624,
                            "decorators": [],
                            "name": "propCount",
                            "optional": false
                          }
                        },
                        {
                          "type": "IfStatement",
                          "start": 983,
                          "end": 1102,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 997,
                            "end": 1102,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 1015,
                                "end": 1088,
                                "alternate": null,
                                "consequent": {
                                  "type": "ReturnStatement",
                                  "start": 1075,
                                  "end": 1088,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1082,
                                    "end": 1087,
                                    "raw": "false",
                                    "value": false
                                  }
                                },
                                "test": {
                                  "type": "UnaryExpression",
                                  "start": 1019,
                                  "end": 1073,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 1020,
                                    "end": 1073,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "start": 1030,
                                        "end": 1050,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1030,
                                          "end": 1048,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1030,
                                            "end": 1034
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1035,
                                            "end": 1048,
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      },
                                      {
                                        "type": "CallExpression",
                                        "start": 1052,
                                        "end": 1072,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1052,
                                          "end": 1070,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1052,
                                            "end": 1056,
                                            "decorators": [],
                                            "name": "that",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1057,
                                            "end": 1070,
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1020,
                                      "end": 1029,
                                      "decorators": [],
                                      "name": "setEquals",
                                      "optional": false
                                    },
                                    "optional": false
                                  },
                                  "operator": "!",
                                  "prefix": true
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "Identifier",
                            "start": 987,
                            "end": 995,
                            "decorators": [],
                            "name": "sigCount",
                            "optional": false
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 1115,
                          "end": 1127,
                          "argument": {
                            "type": "Literal",
                            "start": 1122,
                            "end": 1126,
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 211,
                        "end": 221,
                        "decorators": [],
                        "name": "that",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 215,
                          "end": 221,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 217,
                            "end": 221,
                            "typeName": {
                              "type": "Identifier",
                              "start": 217,
                              "end": 221,
                              "decorators": [],
                              "name": "Type",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 231,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 224,
                        "end": 231
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1146,
                  "end": 1208,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1146,
                    "end": 1159,
                    "decorators": [],
                    "name": "getProperties",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1159,
                    "end": 1208,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1174,
                      "end": 1208,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1188,
                          "end": 1198,
                          "argument": {
                            "type": "ArrayExpression",
                            "start": 1195,
                            "end": 1197,
                            "elements": []
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1161,
                      "end": 1173,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1163,
                        "end": 1173,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1163,
                          "end": 1171,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1163,
                            "end": 1171,
                            "decorators": [],
                            "name": "Property",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1217,
                  "end": 1295,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1217,
                    "end": 1228,
                    "decorators": [],
                    "name": "getProperty",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1228,
                    "end": 1295,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1254,
                      "end": 1295,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1268,
                          "end": 1285,
                          "argument": {
                            "type": "Identifier",
                            "start": 1275,
                            "end": 1284,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1229,
                        "end": 1242,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1234,
                          "end": 1242,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1236,
                            "end": 1242
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1243,
                      "end": 1253,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1245,
                        "end": 1253,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1245,
                          "end": 1253,
                          "decorators": [],
                          "name": "Property",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1304,
                  "end": 1387,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1304,
                    "end": 1321,
                    "decorators": [],
                    "name": "getPropertyByName",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1321,
                    "end": 1387,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1346,
                      "end": 1387,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1360,
                          "end": 1377,
                          "argument": {
                            "type": "Identifier",
                            "start": 1367,
                            "end": 1376,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1322,
                        "end": 1334,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1326,
                          "end": 1334,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1328,
                            "end": 1334
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1335,
                      "end": 1345,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1337,
                        "end": 1345,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1337,
                          "end": 1345,
                          "decorators": [],
                          "name": "Property",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1396,
                  "end": 1456,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1396,
                    "end": 1412,
                    "decorators": [],
                    "name": "getPropertyCount",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1412,
                    "end": 1456,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1423,
                      "end": 1456,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1437,
                          "end": 1446,
                          "argument": {
                            "type": "Literal",
                            "start": 1444,
                            "end": 1445,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1414,
                      "end": 1422,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1416,
                        "end": 1422
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1465,
                  "end": 1545,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1465,
                    "end": 1477,
                    "decorators": [],
                    "name": "getSignature",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1477,
                    "end": 1545,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1504,
                      "end": 1545,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1518,
                          "end": 1535,
                          "argument": {
                            "type": "Identifier",
                            "start": 1525,
                            "end": 1534,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1478,
                        "end": 1491,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1483,
                          "end": 1491,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1485,
                            "end": 1491
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1492,
                      "end": 1503,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1494,
                        "end": 1503,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1494,
                          "end": 1503,
                          "decorators": [],
                          "name": "Signature",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1554,
                  "end": 1615,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1554,
                    "end": 1571,
                    "decorators": [],
                    "name": "getSignatureCount",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1571,
                    "end": 1615,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1582,
                      "end": 1615,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1596,
                          "end": 1605,
                          "argument": {
                            "type": "Literal",
                            "start": 1603,
                            "end": 1604,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1573,
                      "end": 1581,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1575,
                        "end": 1581
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1624,
                  "end": 1687,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1624,
                    "end": 1637,
                    "decorators": [],
                    "name": "getSignatures",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1637,
                    "end": 1687,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1653,
                      "end": 1687,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1667,
                          "end": 1677,
                          "argument": {
                            "type": "ArrayExpression",
                            "start": 1674,
                            "end": 1676,
                            "elements": []
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1639,
                      "end": 1652,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1641,
                        "end": 1652,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1641,
                          "end": 1650,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1641,
                            "end": 1650,
                            "decorators": [],
                            "name": "Signature",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1696,
                  "end": 1756,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1696,
                    "end": 1707,
                    "decorators": [],
                    "name": "isPrimitive",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1707,
                    "end": 1756,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1719,
                      "end": 1756,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1733,
                          "end": 1746,
                          "argument": {
                            "type": "Literal",
                            "start": 1740,
                            "end": 1745,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1709,
                      "end": 1718,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1711,
                        "end": 1718
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1765,
                  "end": 1826,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1765,
                    "end": 1777,
                    "decorators": [],
                    "name": "isObjectType",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1777,
                    "end": 1826,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1789,
                      "end": 1826,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1803,
                          "end": 1816,
                          "argument": {
                            "type": "Literal",
                            "start": 1810,
                            "end": 1815,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1779,
                      "end": 1788,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1781,
                        "end": 1788
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1835,
                  "end": 1899,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1835,
                    "end": 1850,
                    "decorators": [],
                    "name": "isTypeParameter",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1850,
                    "end": 1899,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1862,
                      "end": 1899,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1876,
                          "end": 1889,
                          "argument": {
                            "type": "Literal",
                            "start": 1883,
                            "end": 1888,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1852,
                      "end": 1861,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1854,
                        "end": 1861
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 1908,
                  "end": 1943,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1908,
                    "end": 1919,
                    "decorators": [],
                    "name": "isSubTypeOf",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1919,
                    "end": 1943,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1932,
                      "end": 1943,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1920,
                        "end": 1930,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1924,
                          "end": 1930,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1926,
                            "end": 1930,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1926,
                              "end": 1930,
                              "decorators": [],
                              "name": "Type",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 178,
              "decorators": [],
              "name": "Type",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 187,
              "end": 193,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1955,
            "end": 2306,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1985,
              "end": 2306,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1995,
                  "end": 2108,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1995,
                    "end": 2006,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2006,
                    "end": 2108,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2076,
                      "end": 2108,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2090,
                          "end": 2098,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2090,
                            "end": 2097,
                            "arguments": [],
                            "callee": {
                              "type": "Super",
                              "start": 2090,
                              "end": 2095
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 2007,
                        "end": 2026,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 2014,
                          "end": 2026,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2018,
                            "end": 2026,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2020,
                              "end": 2026
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 2028,
                        "end": 2045,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 2035,
                          "end": 2045,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2039,
                            "end": 2045,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2041,
                              "end": 2045,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2041,
                                "end": 2045,
                                "decorators": [],
                                "name": "Type",
                                "optional": false
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 2047,
                        "end": 2074,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 2054,
                          "end": 2074,
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2059,
                            "end": 2074,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2061,
                              "end": 2074,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2061,
                                "end": 2074,
                                "decorators": [],
                                "name": "PropertyFlags",
                                "optional": false
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2117,
                  "end": 2300,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2117,
                    "end": 2123,
                    "decorators": [],
                    "name": "equals",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2123,
                    "end": 2300,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2150,
                      "end": 2300,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2164,
                          "end": 2290,
                          "argument": {
                            "type": "LogicalExpression",
                            "start": 2171,
                            "end": 2289,
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 2171,
                              "end": 2241,
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 2171,
                                "end": 2195,
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 2171,
                                  "end": 2180,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2171,
                                    "end": 2175
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2176,
                                    "end": 2180,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 2185,
                                  "end": 2195,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 2185,
                                    "end": 2190,
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2191,
                                    "end": 2195,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 2215,
                                "end": 2241,
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 2215,
                                  "end": 2225,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2215,
                                    "end": 2219
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2220,
                                    "end": 2225,
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 2230,
                                  "end": 2241,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 2230,
                                    "end": 2235,
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2236,
                                    "end": 2241,
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 2261,
                              "end": 2289,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2278,
                                  "end": 2288,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 2278,
                                    "end": 2283,
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2284,
                                    "end": 2288,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2261,
                                "end": 2277,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2261,
                                  "end": 2270,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2261,
                                    "end": 2265
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2266,
                                    "end": 2270,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2271,
                                  "end": 2277,
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2124,
                        "end": 2139,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2129,
                          "end": 2139,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2131,
                            "end": 2139,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2131,
                              "end": 2139,
                              "decorators": [],
                              "name": "Property",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2140,
                      "end": 2149,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2142,
                        "end": 2149
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1961,
              "end": 1969,
              "decorators": [],
              "name": "Property",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1978,
              "end": 1984,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 2312,
            "end": 2380,
            "body": {
              "type": "TSEnumBody",
              "start": 2331,
              "end": 2380,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 2341,
                  "end": 2353,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2341,
                    "end": 2349,
                    "decorators": [],
                    "name": "Optional",
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 2352,
                    "end": 2353,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 2363,
                  "end": 2374,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2363,
                    "end": 2370,
                    "decorators": [],
                    "name": "Private",
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 2373,
                    "end": 2374,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 2317,
              "end": 2330,
              "decorators": [],
              "name": "PropertyFlags",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2386,
            "end": 3086,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2417,
              "end": 3086,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 2427,
                  "end": 2568,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2427,
                    "end": 2438,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2438,
                    "end": 2568,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2536,
                      "end": 2568,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2550,
                          "end": 2558,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2550,
                            "end": 2557,
                            "arguments": [],
                            "callee": {
                              "type": "Super",
                              "start": 2550,
                              "end": 2555
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 2439,
                        "end": 2477,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 2446,
                          "end": 2477,
                          "decorators": [],
                          "name": "typeParameters",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2460,
                            "end": 2477,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 2462,
                              "end": 2477,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 2462,
                                "end": 2475,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2462,
                                  "end": 2475,
                                  "decorators": [],
                                  "name": "TypeParameter",
                                  "optional": false
                                }
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 2479,
                        "end": 2509,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 2486,
                          "end": 2509,
                          "decorators": [],
                          "name": "parameters",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2496,
                            "end": 2509,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 2498,
                              "end": 2509,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 2498,
                                "end": 2507,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2498,
                                  "end": 2507,
                                  "decorators": [],
                                  "name": "Parameter",
                                  "optional": false
                                }
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 2511,
                        "end": 2534,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 2518,
                          "end": 2534,
                          "decorators": [],
                          "name": "returnType",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2528,
                            "end": 2534,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2530,
                              "end": 2534,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2530,
                                "end": 2534,
                                "decorators": [],
                                "name": "Type",
                                "optional": false
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2577,
                  "end": 2919,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2577,
                    "end": 2591,
                    "decorators": [],
                    "name": "equalsNoReturn",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2591,
                    "end": 2919,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2619,
                      "end": 2919,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2633,
                          "end": 2909,
                          "argument": {
                            "type": "LogicalExpression",
                            "start": 2640,
                            "end": 2908,
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 2640,
                              "end": 2834,
                              "operator": "&&",
                              "left": {
                                "type": "LogicalExpression",
                                "start": 2640,
                                "end": 2768,
                                "operator": "&&",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 2640,
                                  "end": 2690,
                                  "operator": "===",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 2640,
                                    "end": 2662,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 2640,
                                      "end": 2655,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2640,
                                        "end": 2644
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2645,
                                        "end": 2655,
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2656,
                                      "end": 2662,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 2667,
                                    "end": 2690,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 2667,
                                      "end": 2683,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 2667,
                                        "end": 2672,
                                        "decorators": [],
                                        "name": "other",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2673,
                                        "end": 2683,
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2684,
                                      "end": 2690,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false
                                    }
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 2710,
                                  "end": 2768,
                                  "operator": "===",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 2710,
                                    "end": 2736,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 2710,
                                      "end": 2729,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2710,
                                        "end": 2714
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2715,
                                        "end": 2729,
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2730,
                                      "end": 2736,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 2741,
                                    "end": 2768,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 2741,
                                      "end": 2761,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 2741,
                                        "end": 2746,
                                        "decorators": [],
                                        "name": "other",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2747,
                                        "end": 2761,
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2762,
                                      "end": 2768,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 2788,
                                "end": 2834,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 2800,
                                    "end": 2815,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2800,
                                      "end": 2804
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2805,
                                      "end": 2815,
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "start": 2817,
                                    "end": 2833,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 2817,
                                      "end": 2822,
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2823,
                                      "end": 2833,
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 2788,
                                  "end": 2799,
                                  "decorators": [],
                                  "name": "arrayEquals",
                                  "optional": false
                                },
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 2854,
                              "end": 2908,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 2866,
                                  "end": 2885,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2866,
                                    "end": 2870
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2871,
                                    "end": 2885,
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "MemberExpression",
                                  "start": 2887,
                                  "end": 2907,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 2887,
                                    "end": 2892,
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2893,
                                    "end": 2907,
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 2854,
                                "end": 2865,
                                "decorators": [],
                                "name": "arrayEquals",
                                "optional": false
                              },
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2592,
                        "end": 2608,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2597,
                          "end": 2608,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2599,
                            "end": 2608,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2599,
                              "end": 2608,
                              "decorators": [],
                              "name": "Signature",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2609,
                      "end": 2618,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2611,
                        "end": 2618
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2928,
                  "end": 3080,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2928,
                    "end": 2934,
                    "decorators": [],
                    "name": "equals",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2934,
                    "end": 3080,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2962,
                      "end": 3080,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2976,
                          "end": 3070,
                          "argument": {
                            "type": "LogicalExpression",
                            "start": 2983,
                            "end": 3069,
                            "operator": "&&",
                            "left": {
                              "type": "CallExpression",
                              "start": 2983,
                              "end": 3009,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 3003,
                                  "end": 3008,
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2983,
                                "end": 3002,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2983,
                                  "end": 2987
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2988,
                                  "end": 3002,
                                  "decorators": [],
                                  "name": "equalsNoReturn",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 3029,
                              "end": 3069,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3052,
                                  "end": 3068,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3052,
                                    "end": 3057,
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3058,
                                    "end": 3068,
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3029,
                                "end": 3051,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 3029,
                                  "end": 3044,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3029,
                                    "end": 3033
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3034,
                                    "end": 3044,
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3045,
                                  "end": 3051,
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2935,
                        "end": 2951,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2940,
                          "end": 2951,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2942,
                            "end": 2951,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2942,
                              "end": 2951,
                              "decorators": [],
                              "name": "Signature",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2952,
                      "end": 2961,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2954,
                        "end": 2961
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2392,
              "end": 2401,
              "decorators": [],
              "name": "Signature",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2410,
              "end": 2416,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 3092,
            "end": 3437,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3123,
              "end": 3437,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 3133,
                  "end": 3247,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 3133,
                    "end": 3144,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 3144,
                    "end": 3247,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3215,
                      "end": 3247,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 3229,
                          "end": 3237,
                          "expression": {
                            "type": "CallExpression",
                            "start": 3229,
                            "end": 3236,
                            "arguments": [],
                            "callee": {
                              "type": "Super",
                              "start": 3229,
                              "end": 3234
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 3145,
                        "end": 3164,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 3152,
                          "end": 3164,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3156,
                            "end": 3164,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3158,
                              "end": 3164
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 3166,
                        "end": 3183,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 3173,
                          "end": 3183,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3177,
                            "end": 3183,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3179,
                              "end": 3183,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3179,
                                "end": 3183,
                                "decorators": [],
                                "name": "Type",
                                "optional": false
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 3185,
                        "end": 3213,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 3192,
                          "end": 3213,
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3197,
                            "end": 3213,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3199,
                              "end": 3213,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3199,
                                "end": 3213,
                                "decorators": [],
                                "name": "ParameterFlags",
                                "optional": false
                              }
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 3256,
                  "end": 3431,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 3256,
                    "end": 3262,
                    "decorators": [],
                    "name": "equals",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 3262,
                    "end": 3431,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3281,
                      "end": 3431,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3295,
                          "end": 3421,
                          "argument": {
                            "type": "LogicalExpression",
                            "start": 3302,
                            "end": 3420,
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 3302,
                              "end": 3372,
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 3302,
                                "end": 3326,
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 3302,
                                  "end": 3311,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3302,
                                    "end": 3306
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3307,
                                    "end": 3311,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 3316,
                                  "end": 3326,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3316,
                                    "end": 3321,
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3322,
                                    "end": 3326,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 3346,
                                "end": 3372,
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 3346,
                                  "end": 3356,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3346,
                                    "end": 3350
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3351,
                                    "end": 3356,
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 3361,
                                  "end": 3372,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3361,
                                    "end": 3366,
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3367,
                                    "end": 3372,
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 3392,
                              "end": 3420,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 3409,
                                  "end": 3419,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3409,
                                    "end": 3414,
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3415,
                                    "end": 3419,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3392,
                                "end": 3408,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 3392,
                                  "end": 3401,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 3392,
                                    "end": 3396
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3397,
                                    "end": 3401,
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3402,
                                  "end": 3408,
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3263,
                        "end": 3279,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3268,
                          "end": 3279,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3270,
                            "end": 3279,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3270,
                              "end": 3279,
                              "decorators": [],
                              "name": "Parameter",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 3098,
              "end": 3107,
              "decorators": [],
              "name": "Parameter",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 3116,
              "end": 3122,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 3443,
            "end": 3509,
            "body": {
              "type": "TSEnumBody",
              "start": 3463,
              "end": 3509,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 3473,
                  "end": 3485,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3473,
                    "end": 3481,
                    "decorators": [],
                    "name": "Optional",
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 3484,
                    "end": 3485,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "TSEnumMember",
                  "start": 3495,
                  "end": 3503,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3495,
                    "end": 3499,
                    "decorators": [],
                    "name": "Rest",
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 3502,
                    "end": 3503,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 3448,
              "end": 3462,
              "decorators": [],
              "name": "ParameterFlags",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 3519,
            "end": 3572,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3523,
                "end": 3571,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3523,
                  "end": 3537,
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 3540,
                  "end": 3571,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 3540,
                    "end": 3556,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3540,
                      "end": 3546,
                      "decorators": [],
                      "name": "Object",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3547,
                      "end": 3556,
                      "decorators": [],
                      "name": "prototype",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3557,
                    "end": 3571,
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 3578,
            "end": 3725,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3631,
              "end": 3725,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 3641,
                  "end": 3694,
                  "alternate": null,
                  "consequent": {
                    "type": "ReturnStatement",
                    "start": 3677,
                    "end": 3694,
                    "argument": {
                      "type": "Identifier",
                      "start": 3684,
                      "end": 3693,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 3645,
                    "end": 3675,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3646,
                      "end": 3675,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3666,
                          "end": 3669,
                          "decorators": [],
                          "name": "map",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 3671,
                          "end": 3674,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3646,
                        "end": 3665,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3646,
                          "end": 3660,
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3661,
                          "end": 3665,
                          "decorators": [],
                          "name": "call",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 3703,
                  "end": 3719,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 3710,
                    "end": 3718,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 3710,
                      "end": 3713,
                      "decorators": [],
                      "name": "map",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3714,
                      "end": 3717,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 3587,
              "end": 3598,
              "decorators": [],
              "name": "getProperty",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3602,
                "end": 3613,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3605,
                  "end": 3613,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3607,
                    "end": 3613,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3610,
                      "end": 3613,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3611,
                          "end": 3612,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3611,
                            "end": 3612,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3607,
                      "end": 3610,
                      "decorators": [],
                      "name": "Map",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3615,
                "end": 3626,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3618,
                  "end": 3626,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3620,
                    "end": 3626
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3627,
              "end": 3630,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3629,
                "end": 3630,
                "typeName": {
                  "type": "Identifier",
                  "start": 3629,
                  "end": 3630,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3598,
              "end": 3601,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3599,
                  "end": 3600,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3599,
                    "end": 3600,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 3731,
            "end": 3843,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3790,
              "end": 3843,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 3800,
                  "end": 3837,
                  "argument": {
                    "type": "CallExpression",
                    "start": 3807,
                    "end": 3836,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3827,
                        "end": 3830,
                        "decorators": [],
                        "name": "map",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3832,
                        "end": 3835,
                        "decorators": [],
                        "name": "key",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3807,
                      "end": 3826,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3807,
                        "end": 3821,
                        "decorators": [],
                        "name": "hasOwnProperty",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3822,
                        "end": 3826,
                        "decorators": [],
                        "name": "call",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 3740,
              "end": 3751,
              "decorators": [],
              "name": "hasProperty",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3755,
                "end": 3766,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3758,
                  "end": 3766,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3760,
                    "end": 3766,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3763,
                      "end": 3766,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3764,
                          "end": 3765,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3764,
                            "end": 3765,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3760,
                      "end": 3763,
                      "decorators": [],
                      "name": "Map",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3768,
                "end": 3779,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3771,
                  "end": 3779,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3773,
                    "end": 3779
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3780,
              "end": 3789,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3782,
                "end": 3789
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3751,
              "end": 3754,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3752,
                  "end": 3753,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3752,
                    "end": 3753,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 3849,
            "end": 4074,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3919,
              "end": 4074,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3929,
                  "end": 3948,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3933,
                      "end": 3947,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3933,
                        "end": 3936,
                        "decorators": [],
                        "name": "len",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 3939,
                        "end": 3947,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3939,
                          "end": 3940,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3941,
                          "end": 3947,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ForStatement",
                  "start": 3957,
                  "end": 4046,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3987,
                    "end": 4046,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 4001,
                        "end": 4036,
                        "alternate": null,
                        "consequent": {
                          "type": "ReturnStatement",
                          "start": 4024,
                          "end": 4036,
                          "argument": {
                            "type": "Literal",
                            "start": 4031,
                            "end": 4035,
                            "raw": "true",
                            "value": true
                          }
                        },
                        "test": {
                          "type": "CallExpression",
                          "start": 4005,
                          "end": 4022,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 4017,
                              "end": 4021,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 4017,
                                "end": 4018,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 4019,
                                "end": 4020,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 4005,
                            "end": 4016,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 4005,
                              "end": 4009,
                              "decorators": [],
                              "name": "item",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 4010,
                              "end": 4016,
                              "decorators": [],
                              "name": "equals",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 3962,
                    "end": 3971,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3966,
                        "end": 3971,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3966,
                          "end": 3967,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 3970,
                          "end": 3971,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 3973,
                    "end": 3980,
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "start": 3973,
                      "end": 3974,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3977,
                      "end": 3980,
                      "decorators": [],
                      "name": "len",
                      "optional": false
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 3982,
                    "end": 3985,
                    "argument": {
                      "type": "Identifier",
                      "start": 3982,
                      "end": 3983,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "operator": "++",
                    "prefix": false
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 4055,
                  "end": 4068,
                  "argument": {
                    "type": "Literal",
                    "start": 4062,
                    "end": 4067,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 3858,
              "end": 3871,
              "decorators": [],
              "name": "arrayContains",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3893,
                "end": 3899,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3894,
                  "end": 3899,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3896,
                    "end": 3899,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3896,
                      "end": 3897,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3896,
                        "end": 3897,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3901,
                "end": 3908,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3905,
                  "end": 3908,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3907,
                    "end": 3908,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3907,
                      "end": 3908,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3909,
              "end": 3918,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3911,
                "end": 3918
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3871,
              "end": 3892,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3872,
                  "end": 3891,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3882,
                    "end": 3891,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3888,
                      "end": 3891,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3889,
                          "end": 3890,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3889,
                            "end": 3890,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3882,
                      "end": 3888,
                      "decorators": [],
                      "name": "Equals",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3872,
                    "end": 3873,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 4080,
            "end": 4347,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 4147,
              "end": 4347,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4157,
                  "end": 4176,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4161,
                      "end": 4175,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 4161,
                        "end": 4164,
                        "decorators": [],
                        "name": "len",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 4167,
                        "end": 4175,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4167,
                          "end": 4168,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4169,
                          "end": 4175,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
                  "start": 4185,
                  "end": 4220,
                  "alternate": null,
                  "consequent": {
                    "type": "ReturnStatement",
                    "start": 4207,
                    "end": 4220,
                    "argument": {
                      "type": "Literal",
                      "start": 4214,
                      "end": 4219,
                      "raw": "false",
                      "value": false
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 4189,
                    "end": 4205,
                    "operator": "!==",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4189,
                      "end": 4197,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4189,
                        "end": 4190,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4191,
                        "end": 4197,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4202,
                      "end": 4205,
                      "decorators": [],
                      "name": "len",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "start": 4229,
                  "end": 4320,
                  "body": {
                    "type": "BlockStatement",
                    "start": 4259,
                    "end": 4320,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 4273,
                        "end": 4310,
                        "alternate": null,
                        "consequent": {
                          "type": "ReturnStatement",
                          "start": 4297,
                          "end": 4310,
                          "argument": {
                            "type": "Literal",
                            "start": 4304,
                            "end": 4309,
                            "raw": "false",
                            "value": false
                          }
                        },
                        "test": {
                          "type": "UnaryExpression",
                          "start": 4277,
                          "end": 4295,
                          "argument": {
                            "type": "CallExpression",
                            "start": 4278,
                            "end": 4295,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 4290,
                                "end": 4294,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4290,
                                  "end": 4291,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4292,
                                  "end": 4293,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false
                                }
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 4278,
                              "end": 4289,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 4278,
                                "end": 4282,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4278,
                                  "end": 4279,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4280,
                                  "end": 4281,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 4283,
                                "end": 4289,
                                "decorators": [],
                                "name": "equals",
                                "optional": false
                              }
                            },
                            "optional": false
                          },
                          "operator": "!",
                          "prefix": true
                        }
                      }
                    ]
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 4234,
                    "end": 4243,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4238,
                        "end": 4243,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 4238,
                          "end": 4239,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 4242,
                          "end": 4243,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 4245,
                    "end": 4252,
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "start": 4245,
                      "end": 4246,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4249,
                      "end": 4252,
                      "decorators": [],
                      "name": "len",
                      "optional": false
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 4254,
                    "end": 4257,
                    "argument": {
                      "type": "Identifier",
                      "start": 4254,
                      "end": 4255,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "operator": "++",
                    "prefix": false
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 4329,
                  "end": 4341,
                  "argument": {
                    "type": "Literal",
                    "start": 4336,
                    "end": 4340,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 4089,
              "end": 4100,
              "decorators": [],
              "name": "arrayEquals",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 4122,
                "end": 4128,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4123,
                  "end": 4128,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4125,
                    "end": 4128,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 4125,
                      "end": 4126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4125,
                        "end": 4126,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 4130,
                "end": 4136,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4131,
                  "end": 4136,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4133,
                    "end": 4136,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 4133,
                      "end": 4134,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4133,
                        "end": 4134,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4137,
              "end": 4146,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4139,
                "end": 4146
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4100,
              "end": 4121,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4101,
                  "end": 4120,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4111,
                    "end": 4120,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4117,
                      "end": 4120,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4118,
                          "end": 4119,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4118,
                            "end": 4119,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4111,
                      "end": 4117,
                      "decorators": [],
                      "name": "Equals",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 4101,
                    "end": 4102,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 4353,
            "end": 4623,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 4418,
              "end": 4623,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4428,
                  "end": 4447,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4432,
                      "end": 4446,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 4432,
                        "end": 4435,
                        "decorators": [],
                        "name": "len",
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 4438,
                        "end": 4446,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4438,
                          "end": 4439,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4440,
                          "end": 4446,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "IfStatement",
                  "start": 4456,
                  "end": 4491,
                  "alternate": null,
                  "consequent": {
                    "type": "ReturnStatement",
                    "start": 4478,
                    "end": 4491,
                    "argument": {
                      "type": "Literal",
                      "start": 4485,
                      "end": 4490,
                      "raw": "false",
                      "value": false
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 4460,
                    "end": 4476,
                    "operator": "!==",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4460,
                      "end": 4468,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4460,
                        "end": 4461,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4462,
                        "end": 4468,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4473,
                      "end": 4476,
                      "decorators": [],
                      "name": "len",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "start": 4500,
                  "end": 4596,
                  "body": {
                    "type": "BlockStatement",
                    "start": 4530,
                    "end": 4596,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 4544,
                        "end": 4586,
                        "alternate": null,
                        "consequent": {
                          "type": "ReturnStatement",
                          "start": 4573,
                          "end": 4586,
                          "argument": {
                            "type": "Literal",
                            "start": 4580,
                            "end": 4585,
                            "raw": "false",
                            "value": false
                          }
                        },
                        "test": {
                          "type": "UnaryExpression",
                          "start": 4548,
                          "end": 4571,
                          "argument": {
                            "type": "CallExpression",
                            "start": 4549,
                            "end": 4571,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 4563,
                                "end": 4564,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              },
                              {
                                "type": "MemberExpression",
                                "start": 4566,
                                "end": 4570,
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4566,
                                  "end": 4567,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4568,
                                  "end": 4569,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 4549,
                              "end": 4562,
                              "decorators": [],
                              "name": "arrayContains",
                              "optional": false
                            },
                            "optional": false
                          },
                          "operator": "!",
                          "prefix": true
                        }
                      }
                    ]
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 4505,
                    "end": 4514,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4509,
                        "end": 4514,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 4509,
                          "end": 4510,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 4513,
                          "end": 4514,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 4516,
                    "end": 4523,
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "start": 4516,
                      "end": 4517,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4520,
                      "end": 4523,
                      "decorators": [],
                      "name": "len",
                      "optional": false
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 4525,
                    "end": 4528,
                    "argument": {
                      "type": "Identifier",
                      "start": 4525,
                      "end": 4526,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "operator": "++",
                    "prefix": false
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 4605,
                  "end": 4617,
                  "argument": {
                    "type": "Literal",
                    "start": 4612,
                    "end": 4616,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 4362,
              "end": 4371,
              "decorators": [],
              "name": "setEquals",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 4393,
                "end": 4399,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4394,
                  "end": 4399,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4396,
                    "end": 4399,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 4396,
                      "end": 4397,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4396,
                        "end": 4397,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 4401,
                "end": 4407,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4402,
                  "end": 4407,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 4404,
                    "end": 4407,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 4404,
                      "end": 4405,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4404,
                        "end": 4405,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4408,
              "end": 4417,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4410,
                "end": 4417
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4371,
              "end": 4392,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4372,
                  "end": 4391,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 4382,
                    "end": 4391,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4388,
                      "end": 4391,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4389,
                          "end": 4390,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4389,
                            "end": 4390,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4382,
                      "end": 4388,
                      "decorators": [],
                      "name": "Equals",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 4372,
                    "end": 4373,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "ts",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
