__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 653,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 110,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 16,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 23,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 27,
                "end": 49,
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 27,
                  "end": 31
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 35,
                    "end": 49,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 41,
                        "end": 45,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 41,
                          "end": 42,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 42,
                          "end": 45,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 44,
                            "end": 45,
                            "literal": {
                              "type": "Literal",
                              "start": 44,
                              "end": 45,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 52,
            "end": 71,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 59,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 70,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 63,
                "end": 70
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 74,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 85,
                "end": 107,
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "start": 85,
                  "end": 89
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 93,
                    "end": 107,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 99,
                        "end": 103,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 100,
                          "end": 103,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 102,
                            "end": 103,
                            "literal": {
                              "type": "Literal",
                              "start": 102,
                              "end": 103,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 111,
      "end": 260,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 260,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 143,
              "decorators": [],
              "name": "method1",
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
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 149,
                "body": []
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
            "start": 174,
            "end": 187,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 181,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 187,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 184,
                "end": 187,
                "body": []
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
            "start": 209,
            "end": 258,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 216,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 258,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 219,
                "end": 258,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 243,
                    "end": 254,
                    "argument": {
                      "type": "Literal",
                      "start": 250,
                      "end": 254,
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
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 130,
          "end": 131,
          "expression": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 262,
      "end": 452,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 270,
        "end": 452,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 330,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 281,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 281,
              "end": 330,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 308,
                "end": 330,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 314,
                    "end": 326,
                    "argument": {
                      "type": "Literal",
                      "start": 321,
                      "end": 325,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 283,
                "end": 307,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 285,
                  "end": 307,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 285,
                    "end": 289
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 307,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 293,
                      "end": 307,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 299,
                          "end": 303,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 299,
                            "end": 300,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 300,
                            "end": 303,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 302,
                              "end": 303,
                              "literal": {
                                "type": "Literal",
                                "start": 302,
                                "end": 303,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 334,
            "end": 390,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 334,
              "end": 341,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 341,
              "end": 390,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 368,
                "end": 390,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 374,
                    "end": 386,
                    "argument": {
                      "type": "Literal",
                      "start": 381,
                      "end": 385,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 343,
                "end": 367,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 345,
                  "end": 367,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 345,
                    "end": 349
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 367,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 353,
                      "end": 367,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 359,
                          "end": 363,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 360,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 360,
                            "end": 363,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 362,
                              "end": 363,
                              "literal": {
                                "type": "Literal",
                                "start": 362,
                                "end": 363,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 394,
            "end": 450,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 401,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 401,
              "end": 450,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 428,
                "end": 450,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 434,
                    "end": 446,
                    "argument": {
                      "type": "Literal",
                      "start": 441,
                      "end": 445,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 403,
                "end": 427,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 405,
                  "end": 427,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 405,
                    "end": 409
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 413,
                    "end": 427,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 413,
                      "end": 427,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 419,
                          "end": 423,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 419,
                            "end": 420,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 420,
                            "end": 423,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 422,
                              "end": 423,
                              "literal": {
                                "type": "Literal",
                                "start": 422,
                                "end": 423,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 269,
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
      "start": 454,
      "end": 653,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 472,
        "end": 653,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 476,
            "end": 515,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 476,
              "end": 483,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 483,
              "end": 515,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 492,
                "end": 515,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 485,
                "end": 491,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 487,
                  "end": 491
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 519,
            "end": 589,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 526,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 526,
              "end": 589,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 567,
                "end": 589,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 573,
                    "end": 585,
                    "argument": {
                      "type": "Literal",
                      "start": 580,
                      "end": 584,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 528,
                "end": 566,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 530,
                  "end": 566,
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 530,
                    "end": 534
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 538,
                    "end": 566,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 538,
                      "end": 566,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 558,
                          "end": 562,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 558,
                            "end": 559,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 559,
                            "end": 562,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 561,
                              "end": 562,
                              "literal": {
                                "type": "Literal",
                                "start": 561,
                                "end": 562,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 593,
            "end": 651,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 593,
              "end": 600,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 600,
              "end": 651,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 612,
                "end": 651,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 635,
                    "end": 647,
                    "argument": {
                      "type": "Literal",
                      "start": 642,
                      "end": 646,
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 602,
                "end": 611,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 604,
                  "end": 611
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 461,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 470,
        "end": 471,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
