__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 890,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 10,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 71,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 51,
                    "end": 65,
                    "argument": {
                      "type": "Literal",
                      "start": 58,
                      "end": 64,
                      "raw": "\"base\"",
                      "value": "base"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 21,
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 151,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 149,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 143,
                    "argument": {
                      "type": "Literal",
                      "start": 136,
                      "end": 142,
                      "raw": "\"base\"",
                      "value": "base"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 85,
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 94,
        "end": 99,
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 153,
      "end": 240,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 238,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 196,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 238,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 199,
                "end": 238,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 209,
                    "end": 232,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 216,
                      "end": 231,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 216,
                        "end": 227,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 216,
                          "end": 221
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 227,
                          "decorators": [],
                          "name": "super",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 231,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 166,
        "decorators": [],
        "name": "SubSub1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 175,
        "end": 179,
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 252,
      "end": 315,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 264,
        "end": 315,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 313,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 280,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 280,
              "end": 313,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 283,
                "end": 313,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 293,
                    "end": 307,
                    "argument": {
                      "type": "Literal",
                      "start": 300,
                      "end": 306,
                      "raw": "\"base\"",
                      "value": "base"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 263,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 317,
      "end": 414,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 343,
        "end": 414,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 412,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 356,
              "end": 359,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 359,
              "end": 412,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 362,
                "end": 412,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 372,
                    "end": 406,
                    "argument": {
                      "type": "AssignmentExpression",
                      "start": 379,
                      "end": 405,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 379,
                        "end": 398,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 379,
                          "end": 394,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 379,
                            "end": 384
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 385,
                            "end": 394,
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 398,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 401,
                        "end": 405,
                        "raw": "null",
                        "value": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 328,
        "decorators": [],
        "name": "SubE2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 337,
        "end": 342,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 426,
      "end": 489,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 438,
        "end": 489,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 487,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 451,
              "end": 454,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 454,
              "end": 487,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 457,
                "end": 487,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 467,
                    "end": 481,
                    "argument": {
                      "type": "Literal",
                      "start": 474,
                      "end": 480,
                      "raw": "\"base\"",
                      "value": "base"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 437,
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 491,
      "end": 573,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 517,
        "end": 573,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 523,
            "end": 571,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 530,
              "end": 533,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 533,
              "end": 571,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 536,
                "end": 571,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 546,
                    "end": 565,
                    "argument": {
                      "type": "CallExpression",
                      "start": 553,
                      "end": 564,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 553,
                        "end": 562,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 553,
                          "end": 558
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 562,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 497,
        "end": 502,
        "decorators": [],
        "name": "SubE3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 511,
        "end": 516,
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 585,
      "end": 889,
      "body": {
        "type": "TSModuleBlock",
        "start": 598,
        "end": 889,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 604,
            "end": 680,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 615,
              "end": 680,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 625,
                  "end": 674,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 633,
                    "end": 674,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 635,
                      "end": 674,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 649,
                          "end": 664,
                          "argument": {
                            "type": "Literal",
                            "start": 656,
                            "end": 663,
                            "raw": "\"hello\"",
                            "value": "hello"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 610,
              "end": 614,
              "decorators": [],
              "name": "Sub4",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 690,
            "end": 790,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 697,
              "end": 790,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 723,
                "end": 790,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 733,
                    "end": 784,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 741,
                      "end": 784,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 743,
                        "end": 784,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 757,
                            "end": 774,
                            "argument": {
                              "type": "CallExpression",
                              "start": 764,
                              "end": 773,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 764,
                                "end": 771,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 764,
                                  "end": 769
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 770,
                                  "end": 771,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 703,
                "end": 710,
                "decorators": [],
                "name": "SubSub4",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 719,
                "end": 723,
                "decorators": [],
                "name": "Sub4",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 800,
            "end": 887,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 807,
              "end": 887,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 819,
                "end": 887,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 829,
                    "end": 881,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 836,
                      "end": 837,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 837,
                      "end": 881,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 840,
                        "end": 881,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 854,
                            "end": 871,
                            "argument": {
                              "type": "CallExpression",
                              "start": 861,
                              "end": 870,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 861,
                                "end": 868,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 861,
                                  "end": 866
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 867,
                                  "end": 868,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 813,
                "end": 818,
                "decorators": [],
                "name": "Sub4E",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 597,
        "decorators": [],
        "name": "Base4",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
