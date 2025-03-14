__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 598,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 70,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 38,
        "decorators": [],
        "name": "Constructor",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 44,
        "end": 69,
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "start": 49,
            "end": 63,
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 56,
              "decorators": [],
              "name": "args",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 63,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 58,
                "end": 63,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 58,
                  "end": 61
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 65,
          "end": 69,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 68,
            "end": 69,
            "typeName": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 41,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 40,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
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
      "type": "VariableDeclaration",
      "start": 72,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 90,
            "decorators": [],
            "name": "WithLocation",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 93,
            "end": 274,
            "async": false,
            "body": {
              "type": "ClassExpression",
              "start": 136,
              "end": 274,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 155,
                "end": 274,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 159,
                    "end": 272,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 170,
                      "decorators": [],
                      "name": "getLocation",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 170,
                      "end": 272,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 191,
                        "end": 272,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 197,
                            "end": 231,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 203,
                                "end": 230,
                                "definite": false,
                                "id": {
                                  "type": "ArrayPattern",
                                  "start": 203,
                                  "end": 208,
                                  "decorators": [],
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "start": 204,
                                      "end": 205,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 206,
                                      "end": 207,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false
                                    }
                                  ],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 211,
                                  "end": 230,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 211,
                                    "end": 228,
                                    "computed": false,
                                    "object": {
                                      "type": "Super",
                                      "start": 211,
                                      "end": 216
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 217,
                                      "end": 228,
                                      "decorators": [],
                                      "name": "getLocation",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 236,
                            "end": 268,
                            "argument": {
                              "type": "ArrayExpression",
                              "start": 243,
                              "end": 267,
                              "elements": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 244,
                                  "end": 254,
                                  "operator": "|",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 244,
                                    "end": 250,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 244,
                                      "end": 248
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 249,
                                      "end": 250,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 253,
                                    "end": 254,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "BinaryExpression",
                                  "start": 256,
                                  "end": 266,
                                  "operator": "|",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 256,
                                    "end": 262,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 256,
                                      "end": 260
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 261,
                                      "end": 262,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 265,
                                    "end": 266,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  }
                                }
                              ]
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
                        "start": 172,
                        "end": 190,
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "start": 174,
                          "end": 190,
                          "elementTypes": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 175,
                              "end": 181
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 183,
                              "end": 189
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 150,
                "end": 154,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 124,
                "end": 131,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 128,
                  "end": 131,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 130,
                    "end": 131,
                    "typeName": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 93,
              "end": 123,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 94,
                  "end": 122,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 122,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 115,
                      "end": 122,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 116,
                          "end": 121,
                          "typeName": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 121,
                            "decorators": [],
                            "name": "Point",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 115,
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 276,
      "end": 403,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 288,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 292,
            "end": 343,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 303,
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
              "start": 303,
              "end": 343,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 340,
                "end": 343,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 304,
                  "end": 320,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 320,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 312,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 322,
                  "end": 338,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 338,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 330,
                      "end": 338,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 332,
                        "end": 338
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
            "start": 346,
            "end": 401,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 357,
              "decorators": [],
              "name": "getLocation",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 357,
              "end": 401,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 378,
                "end": 401,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 384,
                    "end": 397,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 391,
                      "end": 396,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 392,
                          "end": 393,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "Literal",
                          "start": 394,
                          "end": 395,
                          "raw": "0",
                          "value": 0
                        }
                      ]
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
                "start": 359,
                "end": 377,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 361,
                  "end": 377,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 362,
                      "end": 368
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 370,
                      "end": 376
                    }
                  ]
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
        "start": 282,
        "end": 287,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 405,
      "end": 597,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 443,
        "end": 597,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 447,
            "end": 492,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 447,
              "end": 456,
              "decorators": [],
              "name": "calculate",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 456,
              "end": 492,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 459,
                "end": 492,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 465,
                    "end": 488,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 472,
                      "end": 487,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 472,
                        "end": 478,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 472,
                          "end": 476
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 478,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 481,
                        "end": 487,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 481,
                          "end": 485
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 486,
                          "end": 487,
                          "decorators": [],
                          "name": "y",
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 495,
            "end": 545,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 506,
              "decorators": [],
              "name": "getLocation",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 506,
              "end": 545,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 509,
                "end": 545,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 515,
                    "end": 541,
                    "argument": {
                      "type": "CallExpression",
                      "start": 522,
                      "end": 541,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 522,
                        "end": 539,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 522,
                          "end": 527
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 528,
                          "end": 539,
                          "decorators": [],
                          "name": "getLocation",
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
            "start": 548,
            "end": 595,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 548,
              "end": 556,
              "decorators": [],
              "name": "whereAmI",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 556,
              "end": 595,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 559,
                "end": 595,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 565,
                    "end": 591,
                    "argument": {
                      "type": "CallExpression",
                      "start": 572,
                      "end": 590,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 572,
                        "end": 588,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 572,
                          "end": 576
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 588,
                          "decorators": [],
                          "name": "getLocation",
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 414,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 423,
        "end": 442,
        "arguments": [
          {
            "type": "Identifier",
            "start": 436,
            "end": 441,
            "decorators": [],
            "name": "Point",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 423,
          "end": 435,
          "decorators": [],
          "name": "WithLocation",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
