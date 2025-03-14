__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1186,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 605,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 605,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 37,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 28,
              "end": 33,
              "name": "prop"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 42,
            "end": 82,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 51,
              "decorators": [],
              "name": "dd",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 54,
              "end": 81,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 54,
                "end": 75,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 73,
                  "decorators": [],
                  "name": "TestWithStatics",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 76,
                "end": 81,
                "name": "prop"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 603,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 101,
              "end": 111,
              "raw": "\"X_ z_ zz\"",
              "value": "X_ z_ zz"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "start": 115,
              "end": 603,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 127,
                "end": 603,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 137,
                    "end": 147,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "PrivateIdentifier",
                      "start": 137,
                      "end": 141,
                      "name": "foo"
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "start": 145,
                      "end": 147,
                      "raw": "10",
                      "value": 10
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 156,
                    "end": 217,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 157,
                      "decorators": [],
                      "name": "m",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 157,
                      "end": 217,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 160,
                        "end": 217,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 174,
                            "end": 201,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 174,
                              "end": 201,
                              "computed": false,
                              "object": {
                                "type": "NewExpression",
                                "start": 174,
                                "end": 195,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 193,
                                  "decorators": [],
                                  "name": "TestWithStatics",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 196,
                                "end": 201,
                                "name": "prop"
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 226,
                    "end": 387,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 234,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "ClassExpression",
                      "start": 237,
                      "end": 387,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 254,
                        "end": 387,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 268,
                            "end": 377,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 268,
                              "end": 269,
                              "decorators": [],
                              "name": "m",
                              "optional": false
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 269,
                              "end": 377,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 272,
                                "end": 377,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 290,
                                    "end": 317,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 290,
                                      "end": 317,
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 290,
                                        "end": 311,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 294,
                                          "end": 309,
                                          "decorators": [],
                                          "name": "TestWithStatics",
                                          "optional": false
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 312,
                                        "end": 317,
                                        "name": "prop"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 340,
                                    "end": 357,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 340,
                                      "end": 356,
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 340,
                                        "end": 351,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 344,
                                          "end": 349,
                                          "decorators": [],
                                          "name": "Inner",
                                          "optional": false
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 352,
                                        "end": 356,
                                        "name": "foo"
                                      }
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 243,
                        "end": 253,
                        "decorators": [],
                        "name": "InnerInner",
                        "optional": false
                      },
                      "implements": [],
                      "superClass": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 397,
                    "end": 597,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 405,
                      "end": 597,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 407,
                        "end": 597,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 421,
                            "end": 587,
                            "argument": {
                              "type": "ClassExpression",
                              "start": 428,
                              "end": 587,
                              "abstract": false,
                              "body": {
                                "type": "ClassBody",
                                "start": 434,
                                "end": 587,
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "start": 452,
                                    "end": 573,
                                    "computed": false,
                                    "decorators": [],
                                    "key": {
                                      "type": "Identifier",
                                      "start": 452,
                                      "end": 453,
                                      "decorators": [],
                                      "name": "m",
                                      "optional": false
                                    },
                                    "kind": "method",
                                    "optional": false,
                                    "override": false,
                                    "static": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "start": 453,
                                      "end": 573,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 456,
                                        "end": 573,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 478,
                                            "end": 505,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 478,
                                              "end": 505,
                                              "computed": false,
                                              "object": {
                                                "type": "NewExpression",
                                                "start": 478,
                                                "end": 499,
                                                "arguments": [],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 482,
                                                  "end": 497,
                                                  "decorators": [],
                                                  "name": "TestWithStatics",
                                                  "optional": false
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "start": 500,
                                                "end": 505,
                                                "name": "prop"
                                              }
                                            }
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 532,
                                            "end": 549,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 532,
                                              "end": 548,
                                              "computed": false,
                                              "object": {
                                                "type": "NewExpression",
                                                "start": 532,
                                                "end": 543,
                                                "arguments": [],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 536,
                                                  "end": 541,
                                                  "decorators": [],
                                                  "name": "Inner",
                                                  "optional": false
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "start": 544,
                                                "end": 548,
                                                "name": "foo"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "declare": false,
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": []
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "decorators": [],
                              "id": null,
                              "implements": [],
                              "superClass": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 121,
                "end": 126,
                "decorators": [],
                "name": "Inner",
                "optional": false
              },
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 21,
        "decorators": [],
        "name": "TestWithStatics",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 607,
      "end": 1186,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 628,
        "end": 1186,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 634,
            "end": 643,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 634,
              "end": 639,
              "name": "prop"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 642,
              "end": 643,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 648,
            "end": 680,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 648,
              "end": 650,
              "decorators": [],
              "name": "dd",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 653,
              "end": 679,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 653,
                "end": 673,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 671,
                  "decorators": [],
                  "name": "TestNonStatics",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 674,
                "end": 679,
                "name": "prop"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 691,
            "end": 1184,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 692,
              "end": 702,
              "raw": "\"X_ z_ zz\"",
              "value": "X_ z_ zz"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "start": 706,
              "end": 1184,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 718,
                "end": 1184,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 728,
                    "end": 738,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "PrivateIdentifier",
                      "start": 728,
                      "end": 732,
                      "name": "foo"
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "start": 736,
                      "end": 738,
                      "raw": "10",
                      "value": 10
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 747,
                    "end": 807,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 748,
                      "decorators": [],
                      "name": "m",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 748,
                      "end": 807,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 751,
                        "end": 807,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 765,
                            "end": 791,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 765,
                              "end": 791,
                              "computed": false,
                              "object": {
                                "type": "NewExpression",
                                "start": 765,
                                "end": 785,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 769,
                                  "end": 783,
                                  "decorators": [],
                                  "name": "TestNonStatics",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 786,
                                "end": 791,
                                "name": "prop"
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 816,
                    "end": 969,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 816,
                      "end": 817,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "ClassExpression",
                      "start": 820,
                      "end": 969,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 837,
                        "end": 969,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 851,
                            "end": 959,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 851,
                              "end": 852,
                              "decorators": [],
                              "name": "m",
                              "optional": false
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 852,
                              "end": 959,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 855,
                                "end": 959,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 873,
                                    "end": 899,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 873,
                                      "end": 899,
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 873,
                                        "end": 893,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 877,
                                          "end": 891,
                                          "decorators": [],
                                          "name": "TestNonStatics",
                                          "optional": false
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 894,
                                        "end": 899,
                                        "name": "prop"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 922,
                                    "end": 939,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 922,
                                      "end": 938,
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 922,
                                        "end": 933,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 926,
                                          "end": 931,
                                          "decorators": [],
                                          "name": "Inner",
                                          "optional": false
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 934,
                                        "end": 938,
                                        "name": "foo"
                                      }
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 826,
                        "end": 836,
                        "decorators": [],
                        "name": "InnerInner",
                        "optional": false
                      },
                      "implements": [],
                      "superClass": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 979,
                    "end": 1178,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 986,
                      "end": 987,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 987,
                      "end": 1178,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 989,
                        "end": 1178,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1003,
                            "end": 1168,
                            "argument": {
                              "type": "ClassExpression",
                              "start": 1010,
                              "end": 1168,
                              "abstract": false,
                              "body": {
                                "type": "ClassBody",
                                "start": 1016,
                                "end": 1168,
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "start": 1034,
                                    "end": 1154,
                                    "computed": false,
                                    "decorators": [],
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1034,
                                      "end": 1035,
                                      "decorators": [],
                                      "name": "m",
                                      "optional": false
                                    },
                                    "kind": "method",
                                    "optional": false,
                                    "override": false,
                                    "static": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "start": 1035,
                                      "end": 1154,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 1038,
                                        "end": 1154,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 1060,
                                            "end": 1086,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 1060,
                                              "end": 1086,
                                              "computed": false,
                                              "object": {
                                                "type": "NewExpression",
                                                "start": 1060,
                                                "end": 1080,
                                                "arguments": [],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 1064,
                                                  "end": 1078,
                                                  "decorators": [],
                                                  "name": "TestNonStatics",
                                                  "optional": false
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "start": 1081,
                                                "end": 1086,
                                                "name": "prop"
                                              }
                                            }
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 1113,
                                            "end": 1130,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 1113,
                                              "end": 1129,
                                              "computed": false,
                                              "object": {
                                                "type": "NewExpression",
                                                "start": 1113,
                                                "end": 1124,
                                                "arguments": [],
                                                "callee": {
                                                  "type": "Identifier",
                                                  "start": 1117,
                                                  "end": 1122,
                                                  "decorators": [],
                                                  "name": "Inner",
                                                  "optional": false
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "start": 1125,
                                                "end": 1129,
                                                "name": "foo"
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "declare": false,
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": []
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "decorators": [],
                              "id": null,
                              "implements": [],
                              "superClass": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 712,
                "end": 717,
                "decorators": [],
                "name": "Inner",
                "optional": false
              },
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 627,
        "decorators": [],
        "name": "TestNonStatics",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
