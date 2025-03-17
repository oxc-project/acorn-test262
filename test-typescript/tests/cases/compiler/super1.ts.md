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
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 21,
        "name": "Base1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 71,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 71,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "base",
                      "raw": "\"base\""
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
      "start": 75,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 85,
        "name": "Sub1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 94,
        "end": 99,
        "name": "Base1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 116,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "base",
                      "raw": "\"base\""
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
      "start": 153,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 166,
        "name": "SubSub1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 175,
        "end": 179,
        "name": "Sub1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 196,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 238,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "MemberExpression",
                        "start": 216,
                        "end": 227,
                        "object": {
                          "type": "Super",
                          "start": 216,
                          "end": 221
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 227,
                          "name": "super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 231,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
      "start": 252,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 263,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 264,
        "end": 315,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 313,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 280,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 280,
              "end": 313,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "base",
                      "raw": "\"base\""
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
      "start": 317,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 328,
        "name": "SubE2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 337,
        "end": 342,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 343,
        "end": 414,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 412,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 356,
              "end": 359,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 359,
              "end": 412,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 379,
                          "end": 394,
                          "object": {
                            "type": "Super",
                            "start": 379,
                            "end": 384
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 385,
                            "end": 394,
                            "name": "prototype",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 398,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 401,
                        "end": 405,
                        "value": null,
                        "raw": "null"
                      }
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
      "start": 426,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 437,
        "name": "Base3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 438,
        "end": 489,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 487,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 451,
              "end": 454,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 454,
              "end": 487,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "base",
                      "raw": "\"base\""
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
      "start": 491,
      "end": 573,
      "id": {
        "type": "Identifier",
        "start": 497,
        "end": 502,
        "name": "SubE3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 511,
        "end": 516,
        "name": "Base3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 517,
        "end": 573,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 523,
            "end": 571,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 530,
              "end": 533,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 533,
              "end": 571,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 553,
                        "end": 562,
                        "object": {
                          "type": "Super",
                          "start": 553,
                          "end": 558
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 562,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
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
      "type": "TSModuleDeclaration",
      "start": 585,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 597,
        "name": "Base4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 598,
        "end": 889,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 604,
            "end": 680,
            "id": {
              "type": "Identifier",
              "start": 610,
              "end": 614,
              "name": "Sub4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 615,
              "end": 680,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 625,
                  "end": 674,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 633,
                    "end": 674,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": "hello",
                            "raw": "\"hello\""
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
            "start": 690,
            "end": 790,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 697,
              "end": 790,
              "id": {
                "type": "Identifier",
                "start": 703,
                "end": 710,
                "name": "SubSub4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 719,
                "end": 723,
                "name": "Sub4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 723,
                "end": 790,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 733,
                    "end": 784,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 741,
                      "end": 784,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 764,
                                "end": 771,
                                "object": {
                                  "type": "Super",
                                  "start": 764,
                                  "end": 769
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 770,
                                  "end": 771,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
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
            "type": "ExportNamedDeclaration",
            "start": 800,
            "end": 887,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 807,
              "end": 887,
              "id": {
                "type": "Identifier",
                "start": 813,
                "end": 818,
                "name": "Sub4E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 819,
                "end": 887,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 829,
                    "end": 881,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 836,
                      "end": 837,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 837,
                      "end": 881,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 861,
                                "end": 868,
                                "object": {
                                  "type": "Super",
                                  "start": 861,
                                  "end": 866
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 867,
                                  "end": 868,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
