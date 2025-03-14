__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 775,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "numProp",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 75,
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 73,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "decorators": [],
              "name": "strProp",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 111,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 111,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 97,
            "end": 109,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "decorators": [],
                  "name": "Bar",
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
        "start": 87,
        "end": 90,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 113,
      "end": 184,
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 184,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 133,
            "end": 155,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 140,
              "decorators": [],
              "name": "method1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 144,
                  "end": 147,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 146,
                    "end": 147,
                    "typeName": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 154,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 150,
                "end": 154
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 160,
            "end": 182,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 167,
              "decorators": [],
              "name": "method2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 168,
                "end": 174,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 181,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 177,
                "end": 181
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
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 369,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 210,
        "end": 369,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 216,
            "end": 367,
            "argument": {
              "type": "ClassExpression",
              "start": 223,
              "end": 367,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 229,
                "end": 367,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 239,
                    "end": 293,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 246,
                      "decorators": [],
                      "name": "method1",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 246,
                      "end": 293,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 252,
                        "end": 293,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 266,
                            "end": 283,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 266,
                              "end": 282,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 266,
                                "end": 277,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 269,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 270,
                                  "end": 277,
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 280,
                                "end": 282,
                                "raw": "10",
                                "value": 10
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
                          "start": 247,
                          "end": 250,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 302,
                    "end": 361,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 309,
                      "decorators": [],
                      "name": "method2",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 309,
                      "end": 361,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 315,
                        "end": 361,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 329,
                            "end": 351,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 329,
                              "end": 350,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 329,
                                "end": 340,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 329,
                                  "end": 332,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 333,
                                  "end": 340,
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 343,
                                "end": 350,
                                "raw": "\"hello\"",
                                "value": "hello"
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
                          "start": 310,
                          "end": 313,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
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
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 202,
        "decorators": [],
        "name": "getFoo1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 204,
        "end": 209,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 206,
          "end": 209,
          "typeName": {
            "type": "Identifier",
            "start": 206,
            "end": 209,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 371,
      "end": 566,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 395,
        "end": 566,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 401,
            "end": 564,
            "argument": {
              "type": "ClassExpression",
              "start": 408,
              "end": 564,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 414,
                "end": 564,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 424,
                    "end": 484,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 431,
                      "decorators": [],
                      "name": "method1",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 434,
                      "end": 484,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 443,
                        "end": 484,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 457,
                            "end": 474,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 457,
                              "end": 473,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 457,
                                "end": 468,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 457,
                                  "end": 460,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 461,
                                  "end": 468,
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 471,
                                "end": 473,
                                "raw": "10",
                                "value": 10
                              }
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 435,
                          "end": 438,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 493,
                    "end": 558,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 493,
                      "end": 500,
                      "decorators": [],
                      "name": "method2",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 503,
                      "end": 558,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 512,
                        "end": 558,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 526,
                            "end": 548,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 526,
                              "end": 547,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 526,
                                "end": 537,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 526,
                                  "end": 529,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 530,
                                  "end": 537,
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 540,
                                "end": 547,
                                "raw": "\"hello\"",
                                "value": "hello"
                              }
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 504,
                          "end": 507,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
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
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 387,
        "decorators": [],
        "name": "getFoo2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 389,
        "end": 394,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 391,
          "end": 394,
          "typeName": {
            "type": "Identifier",
            "start": 391,
            "end": 394,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 568,
      "end": 775,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 592,
        "end": 775,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 598,
            "end": 773,
            "argument": {
              "type": "ClassExpression",
              "start": 605,
              "end": 773,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 611,
                "end": 773,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 621,
                    "end": 687,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 628,
                      "decorators": [],
                      "name": "method1",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 631,
                      "end": 687,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 646,
                        "end": 687,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 660,
                            "end": 677,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 660,
                              "end": 676,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 660,
                                "end": 671,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 660,
                                  "end": 663,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 664,
                                  "end": 671,
                                  "decorators": [],
                                  "name": "numProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 674,
                                "end": 676,
                                "raw": "10",
                                "value": 10
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
                          "start": 641,
                          "end": 644,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 696,
                    "end": 767,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 696,
                      "end": 703,
                      "decorators": [],
                      "name": "method2",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 706,
                      "end": 767,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 721,
                        "end": 767,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 735,
                            "end": 757,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 735,
                              "end": 756,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 735,
                                "end": 746,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 735,
                                  "end": 738,
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 739,
                                  "end": 746,
                                  "decorators": [],
                                  "name": "strProp",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 749,
                                "end": 756,
                                "raw": "\"hello\"",
                                "value": "hello"
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
                          "start": 716,
                          "end": 719,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      ]
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
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 584,
        "decorators": [],
        "name": "getFoo3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 586,
        "end": 591,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 588,
          "end": 591,
          "typeName": {
            "type": "Identifier",
            "start": 588,
            "end": 591,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
