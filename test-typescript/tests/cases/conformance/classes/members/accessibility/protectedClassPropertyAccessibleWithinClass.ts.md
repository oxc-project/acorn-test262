__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 883,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 399,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 399,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 48,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 89,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 89,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 89,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 73,
                    "end": 87,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 80,
                      "end": 86,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 80,
                        "end": 84
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 133,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 133,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 133,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 131,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 115,
                      "end": 130,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 115,
                        "end": 121,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 115,
                          "end": 119
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 121,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 130,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 174,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 151,
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
              "start": 151,
              "end": 174,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 174,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 156,
                    "end": 172,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 163,
                      "end": 171,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 163,
                        "end": 167
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 171,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 180,
            "end": 207,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 212,
            "end": 255,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 234,
              "end": 255,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 237,
                "end": 255,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 239,
                    "end": 253,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 246,
                      "end": 252,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 246,
                        "end": 250
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 252,
                        "decorators": [],
                        "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 260,
            "end": 306,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 306,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 306,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 288,
                    "end": 304,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 288,
                      "end": 303,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 288,
                        "end": 294,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 288,
                          "end": 292
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 293,
                          "end": 294,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 297,
                        "end": 303,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 297,
                          "end": 301
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "start": 283,
                  "end": 284,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 311,
            "end": 354,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 331,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 331,
              "end": 354,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 334,
                "end": 354,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 336,
                    "end": 352,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 343,
                      "end": 351,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 343,
                        "end": 347
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 351,
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
          },
          {
            "type": "MethodDefinition",
            "start": 359,
            "end": 397,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 379,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 379,
              "end": 397,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 382,
                "end": 397,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 384,
                    "end": 395,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 384,
                      "end": 394,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 384,
                        "end": 392,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 384,
                          "end": 388
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 389,
                          "end": 392,
                          "decorators": [],
                          "name": "foo",
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
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "C",
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
      "start": 436,
      "end": 883,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 445,
        "end": 883,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 451,
            "end": 471,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 470,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 476,
            "end": 524,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 491,
              "end": 524,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 494,
                "end": 524,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 496,
                    "end": 509,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 496,
                      "end": 508,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 502,
                        "end": 508,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 502,
                          "end": 506
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 507,
                          "end": 508,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 510,
                    "end": 522,
                    "argument": {
                      "type": "Literal",
                      "start": 517,
                      "end": 521,
                      "raw": "null",
                      "value": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 529,
            "end": 578,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 544,
              "end": 578,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 548,
                "end": 578,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 550,
                    "end": 576,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 550,
                      "end": 576,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 556,
                        "end": 576,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 558,
                            "end": 574,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 558,
                              "end": 573,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 558,
                                "end": 564,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 558,
                                  "end": 562
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 563,
                                  "end": 564,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 567,
                                "end": 573,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 567,
                                  "end": 571
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 572,
                                  "end": 573,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      },
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 545,
                  "end": 546,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 583,
            "end": 618,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 593,
              "end": 596,
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
              "start": 596,
              "end": 618,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 599,
                "end": 618,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 601,
                    "end": 616,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 601,
                      "end": 615,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 607,
                        "end": 615,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 607,
                          "end": 611
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 612,
                          "end": 615,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 624,
            "end": 651,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 642,
              "end": 650,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 644,
                "end": 650
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 656,
            "end": 711,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 677,
              "end": 678,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 678,
              "end": 711,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 681,
                "end": 711,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 683,
                    "end": 696,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 683,
                      "end": 695,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 689,
                        "end": 695,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 689,
                          "end": 693
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 694,
                          "end": 695,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 697,
                    "end": 709,
                    "argument": {
                      "type": "Literal",
                      "start": 704,
                      "end": 708,
                      "raw": "null",
                      "value": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 716,
            "end": 785,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 737,
              "end": 738,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 738,
              "end": 785,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 742,
                "end": 785,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 752,
                    "end": 778,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 752,
                      "end": 778,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 758,
                        "end": 778,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 760,
                            "end": 776,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 760,
                              "end": 775,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 760,
                                "end": 766,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 760,
                                  "end": 764
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 765,
                                  "end": 766,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 769,
                                "end": 775,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 769,
                                  "end": 773
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 774,
                                  "end": 775,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      },
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 790,
            "end": 832,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 807,
              "end": 810,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 810,
              "end": 832,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 813,
                "end": 832,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 815,
                    "end": 830,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 815,
                      "end": 829,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 821,
                        "end": 829,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 821,
                          "end": 825
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 826,
                          "end": 829,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "expression": true,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 837,
            "end": 881,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 854,
              "end": 857,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 857,
              "end": 881,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 860,
                "end": 881,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 862,
                    "end": 879,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 862,
                      "end": 878,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 868,
                        "end": 878,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 868,
                          "end": 876,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 868,
                            "end": 872
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 873,
                            "end": 876,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
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
        "start": 442,
        "end": 444,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
