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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 38,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 44,
        "end": 69,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 49,
            "end": 63,
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 56,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
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
            },
            "value": null
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 90,
            "name": "WithLocation",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 93,
            "end": 274,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 124,
                "end": 131,
                "name": "Base",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ClassExpression",
              "start": 136,
              "end": 274,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 150,
                "end": 154,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 155,
                "end": 274,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 159,
                    "end": 272,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 170,
                      "name": "getLocation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 170,
                      "end": 272,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "id": {
                                  "type": "ArrayPattern",
                                  "start": 203,
                                  "end": 208,
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "start": 204,
                                      "end": 205,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 206,
                                      "end": 207,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "decorators": [],
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 211,
                                  "end": 230,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 211,
                                    "end": 228,
                                    "object": {
                                      "type": "Super",
                                      "start": 211,
                                      "end": 216
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 217,
                                      "end": 228,
                                      "name": "getLocation",
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
                                },
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
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
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 244,
                                    "end": 250,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 244,
                                      "end": 248
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 249,
                                      "end": 250,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "operator": "|",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 253,
                                    "end": 254,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "BinaryExpression",
                                  "start": 256,
                                  "end": 266,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 256,
                                    "end": 262,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 256,
                                      "end": 260
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 261,
                                      "end": 262,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "operator": "|",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 265,
                                    "end": 266,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 93,
              "end": 123,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 94,
                  "end": 122,
                  "name": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 122,
                    "typeName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 115,
                      "name": "Constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 276,
      "end": 403,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 287,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 288,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 292,
            "end": 343,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 303,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 303,
              "end": 343,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 312,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 330,
                      "end": 338,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 332,
                        "end": 338
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 340,
                "end": 343,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 346,
            "end": 401,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 357,
              "name": "getLocation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 357,
              "end": 401,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Literal",
                          "start": 394,
                          "end": 395,
                          "value": 0,
                          "raw": "0"
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "start": 405,
      "end": 597,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 414,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 423,
        "end": 442,
        "callee": {
          "type": "Identifier",
          "start": 423,
          "end": 435,
          "name": "WithLocation",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 436,
            "end": 441,
            "name": "Point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 443,
        "end": 597,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 447,
            "end": 492,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 447,
              "end": 456,
              "name": "calculate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 456,
              "end": 492,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 472,
                        "end": 478,
                        "object": {
                          "type": "ThisExpression",
                          "start": 472,
                          "end": 476
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 478,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 481,
                        "end": 487,
                        "object": {
                          "type": "ThisExpression",
                          "start": 481,
                          "end": 485
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 486,
                          "end": 487,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 495,
            "end": 545,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 506,
              "name": "getLocation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 506,
              "end": 545,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 522,
                        "end": 539,
                        "object": {
                          "type": "Super",
                          "start": 522,
                          "end": 527
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 528,
                          "end": 539,
                          "name": "getLocation",
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 548,
            "end": 595,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 548,
              "end": 556,
              "name": "whereAmI",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 556,
              "end": 595,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 572,
                        "end": 588,
                        "object": {
                          "type": "ThisExpression",
                          "start": 572,
                          "end": 576
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 588,
                          "name": "getLocation",
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
