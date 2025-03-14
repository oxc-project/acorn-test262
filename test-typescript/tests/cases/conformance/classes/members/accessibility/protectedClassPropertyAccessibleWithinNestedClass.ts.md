__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 938,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 938,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 938,
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
              "optional": false
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
              "optional": false
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
              "params": []
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
              "optional": false
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
                          "optional": false
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
                          "optional": false
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
                  "optional": false
                }
              ]
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
              "optional": false
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
              "params": []
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
              "optional": false
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
              "optional": false
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
              "params": []
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
              "optional": false
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
                          "optional": false
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
                          "optional": false
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
                  "optional": false
                }
              ]
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
              "optional": false
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
              "params": []
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
              "optional": false
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
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 403,
            "end": 936,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 413,
              "end": 416,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 416,
              "end": 936,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 419,
                "end": 936,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 429,
                    "end": 930,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 438,
                      "end": 930,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 452,
                          "end": 920,
                          "accessibility": "protected",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 462,
                            "end": 465,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 465,
                            "end": 920,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 468,
                              "end": 920,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 486,
                                  "end": 495,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 490,
                                      "end": 494,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 490,
                                        "end": 494,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 491,
                                          "end": 494,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 493,
                                            "end": 494,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 493,
                                              "end": 494,
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false
                                            }
                                          }
                                        }
                                      },
                                      "init": null
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 512,
                                  "end": 527,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 516,
                                      "end": 526,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 516,
                                        "end": 518,
                                        "decorators": [],
                                        "name": "x1",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 521,
                                        "end": 526,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 521,
                                          "end": 522,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 523,
                                          "end": 526,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 544,
                                  "end": 559,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 548,
                                      "end": 558,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 548,
                                        "end": 550,
                                        "decorators": [],
                                        "name": "x2",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 553,
                                        "end": 558,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 553,
                                          "end": 554,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 555,
                                          "end": 558,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 576,
                                  "end": 589,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 580,
                                      "end": 588,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 580,
                                        "end": 582,
                                        "decorators": [],
                                        "name": "x3",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 585,
                                        "end": 588,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 585,
                                          "end": 586,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 587,
                                          "end": 588,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 606,
                                  "end": 619,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 610,
                                      "end": 618,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 610,
                                        "end": 612,
                                        "decorators": [],
                                        "name": "x4",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 615,
                                        "end": 618,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 615,
                                          "end": 616,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 617,
                                          "end": 618,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 637,
                                  "end": 651,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 641,
                                      "end": 650,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 641,
                                        "end": 644,
                                        "decorators": [],
                                        "name": "sx1",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 647,
                                        "end": 650,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 647,
                                          "end": 648,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 649,
                                          "end": 650,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 668,
                                  "end": 682,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 672,
                                      "end": 681,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 672,
                                        "end": 675,
                                        "decorators": [],
                                        "name": "sx2",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 678,
                                        "end": 681,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 678,
                                          "end": 679,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 680,
                                          "end": 681,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 699,
                                  "end": 715,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 703,
                                      "end": 714,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 703,
                                        "end": 706,
                                        "decorators": [],
                                        "name": "sx3",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 709,
                                        "end": 714,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 709,
                                          "end": 710,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 711,
                                          "end": 714,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 732,
                                  "end": 748,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 736,
                                      "end": 747,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 736,
                                        "end": 739,
                                        "decorators": [],
                                        "name": "sx4",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 742,
                                        "end": 747,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 742,
                                          "end": 743,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 744,
                                          "end": 747,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 766,
                                  "end": 782,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 770,
                                      "end": 781,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 770,
                                        "end": 771,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "NewExpression",
                                        "start": 774,
                                        "end": 781,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 778,
                                          "end": 779,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 799,
                                  "end": 814,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 803,
                                      "end": 813,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 803,
                                        "end": 805,
                                        "decorators": [],
                                        "name": "y1",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 808,
                                        "end": 813,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 808,
                                          "end": 809,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 810,
                                          "end": 813,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 831,
                                  "end": 846,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 835,
                                      "end": 845,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 835,
                                        "end": 837,
                                        "decorators": [],
                                        "name": "y2",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 840,
                                        "end": 845,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 840,
                                          "end": 841,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 842,
                                          "end": 845,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 863,
                                  "end": 876,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 867,
                                      "end": 875,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 867,
                                        "end": 869,
                                        "decorators": [],
                                        "name": "y3",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 872,
                                        "end": 875,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 872,
                                          "end": 873,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 874,
                                          "end": 875,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 893,
                                  "end": 906,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 897,
                                      "end": 905,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 897,
                                        "end": 899,
                                        "decorators": [],
                                        "name": "y4",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 902,
                                        "end": 905,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 902,
                                          "end": 903,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 904,
                                          "end": 905,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
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
                      "start": 435,
                      "end": 437,
                      "decorators": [],
                      "name": "C2",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
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
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "C",
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
