__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 848,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 381,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 381,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 46,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 85,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
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
              "start": 64,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 69,
                    "end": 83,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 76,
                      "end": 82,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
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
            "start": 90,
            "end": 127,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
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
              "start": 103,
              "end": 127,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 127,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 125,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 109,
                      "end": 124,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 115,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 109,
                          "end": 113
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 118,
                        "end": 124,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
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
                  "start": 104,
                  "end": 105,
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
            "start": 132,
            "end": 166,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
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
              "start": 143,
              "end": 166,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 148,
                    "end": 164,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 163,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 155,
                        "end": 159
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 163,
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
            "start": 172,
            "end": 197,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
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
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 202,
            "end": 243,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
              "start": 222,
              "end": 243,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 225,
                "end": 243,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 227,
                    "end": 241,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 234,
                      "end": 240,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 234,
                        "end": 238
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
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
            "start": 248,
            "end": 292,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
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
              "start": 268,
              "end": 292,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 292,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 274,
                    "end": 290,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 274,
                      "end": 289,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 280,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 274,
                          "end": 278
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 283,
                        "end": 289,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 289,
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
                  "start": 269,
                  "end": 270,
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
            "start": 297,
            "end": 338,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
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
              "start": 315,
              "end": 338,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 318,
                "end": 338,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 320,
                    "end": 336,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 327,
                      "end": 335,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 327,
                        "end": 331
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 335,
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
            "start": 343,
            "end": 379,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 361,
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
              "start": 361,
              "end": 379,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 379,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 366,
                    "end": 377,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 366,
                      "end": 376,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 366,
                        "end": 374,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 366,
                          "end": 370
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 374,
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
      "start": 418,
      "end": 847,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 427,
        "end": 847,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 433,
            "end": 451,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
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
              "start": 442,
              "end": 450,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 444,
                "end": 450
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 456,
            "end": 502,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
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
              "start": 469,
              "end": 502,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 472,
                "end": 502,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 474,
                    "end": 487,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 474,
                      "end": 486,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 480,
                        "end": 486,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 480,
                          "end": 484
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 485,
                          "end": 486,
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
                    "start": 488,
                    "end": 500,
                    "argument": {
                      "type": "Literal",
                      "start": 495,
                      "end": 499,
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
            "start": 507,
            "end": 554,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
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
              "start": 520,
              "end": 554,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 524,
                "end": 554,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 526,
                    "end": 552,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 526,
                      "end": 552,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 532,
                        "end": 552,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 534,
                            "end": 550,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 534,
                              "end": 549,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 534,
                                "end": 540,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 534,
                                  "end": 538
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 539,
                                  "end": 540,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 543,
                                "end": 549,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 543,
                                  "end": 547
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 548,
                                  "end": 549,
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
                  "start": 521,
                  "end": 522,
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
            "start": 559,
            "end": 592,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 567,
              "end": 570,
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
              "start": 570,
              "end": 592,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 573,
                "end": 592,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 575,
                    "end": 590,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 575,
                      "end": 589,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 581,
                        "end": 589,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 581,
                          "end": 585
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 586,
                          "end": 589,
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
            "start": 598,
            "end": 623,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
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
              "start": 614,
              "end": 622,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 616,
                "end": 622
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 628,
            "end": 681,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
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
              "start": 648,
              "end": 681,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 651,
                "end": 681,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 653,
                    "end": 666,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 653,
                      "end": 665,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 659,
                        "end": 665,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 659,
                          "end": 663
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 665,
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
                    "start": 667,
                    "end": 679,
                    "argument": {
                      "type": "Literal",
                      "start": 674,
                      "end": 678,
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
            "start": 686,
            "end": 753,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
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
              "start": 706,
              "end": 753,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 710,
                "end": 753,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 720,
                    "end": 746,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 720,
                      "end": 746,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 726,
                        "end": 746,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 728,
                            "end": 744,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 728,
                              "end": 743,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 728,
                                "end": 734,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 728,
                                  "end": 732
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 733,
                                  "end": 734,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 737,
                                "end": 743,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 737,
                                  "end": 741
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 742,
                                  "end": 743,
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
                  "start": 707,
                  "end": 708,
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
            "start": 758,
            "end": 798,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 773,
              "end": 776,
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
              "start": 776,
              "end": 798,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 779,
                "end": 798,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 781,
                    "end": 796,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 781,
                      "end": 795,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 787,
                        "end": 795,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 787,
                          "end": 791
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 792,
                          "end": 795,
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
            "start": 803,
            "end": 845,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 818,
              "end": 821,
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
              "start": 821,
              "end": 845,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 824,
                "end": 845,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 826,
                    "end": 843,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 826,
                      "end": 842,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 832,
                        "end": 842,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 832,
                          "end": 840,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 832,
                            "end": 836
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 837,
                            "end": 840,
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
        "start": 424,
        "end": 426,
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
