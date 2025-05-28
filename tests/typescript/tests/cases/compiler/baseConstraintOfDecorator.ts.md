__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 701,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 313,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 313,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "decorators": [],
          "name": "classExtender",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 29,
          "end": 40,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 30,
              "end": 39,
              "name": {
                "type": "Identifier",
                "start": 30,
                "end": 39,
                "decorators": [],
                "name": "TFunction",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 41,
            "end": 62,
            "decorators": [],
            "name": "superClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 62,
                  "decorators": [],
                  "name": "TFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 64,
            "end": 119,
            "decorators": [],
            "name": "_instanceModifier",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 119,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 83,
                "end": 119,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 84,
                    "end": 97,
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 94,
                        "end": 97
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 99,
                    "end": 110,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 105,
                        "end": 110,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 105,
                          "end": 108
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 115,
                    "end": 119
                  }
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 120,
          "end": 131,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 122,
            "end": 131,
            "typeName": {
              "type": "Identifier",
              "start": 122,
              "end": 131,
              "decorators": [],
              "name": "TFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 132,
          "end": 313,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 138,
              "end": 311,
              "argument": {
                "type": "ClassExpression",
                "start": 145,
                "end": 310,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "decorators": [],
                  "name": "decoratorFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 183,
                  "decorators": [],
                  "name": "superClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 184,
                  "end": 310,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 194,
                      "end": 304,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 205,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 205,
                        "end": 304,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 206,
                            "end": 220,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 213,
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 213,
                              "end": 220,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 215,
                                "end": 220,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 215,
                                  "end": 218
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 222,
                          "end": 304,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 236,
                              "end": 251,
                              "expression": {
                                "type": "CallExpression",
                                "start": 236,
                                "end": 250,
                                "callee": {
                                  "type": "Super",
                                  "start": 236,
                                  "end": 241
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 242,
                                    "end": 249,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 245,
                                      "end": 249,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 264,
                              "end": 294,
                              "expression": {
                                "type": "CallExpression",
                                "start": 264,
                                "end": 293,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 264,
                                  "end": 281,
                                  "decorators": [],
                                  "name": "_instanceModifier",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 282,
                                    "end": 286
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 288,
                                    "end": 292,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 343,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 328,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 329,
        "end": 343,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 331,
            "end": 341,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 344,
      "end": 701,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 351,
        "end": 701,
        "id": {
          "type": "Identifier",
          "start": 360,
          "end": 374,
          "decorators": [],
          "name": "classExtender2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 374,
          "end": 428,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 375,
              "end": 427,
              "name": {
                "type": "Identifier",
                "start": 375,
                "end": 384,
                "decorators": [],
                "name": "TFunction",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSConstructorType",
                "start": 393,
                "end": 427,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 398,
                    "end": 415,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 405,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 407,
                        "end": 415,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 407,
                          "end": 413
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 417,
                  "end": 427,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 420,
                    "end": 427,
                    "typeName": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 427,
                      "decorators": [],
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 429,
            "end": 450,
            "decorators": [],
            "name": "superClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 439,
              "end": 450,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 450,
                "typeName": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 450,
                  "decorators": [],
                  "name": "TFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 452,
            "end": 507,
            "decorators": [],
            "name": "_instanceModifier",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 507,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 471,
                "end": 507,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 472,
                    "end": 485,
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 480,
                      "end": 485,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 482,
                        "end": 485
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 487,
                    "end": 498,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 491,
                      "end": 498,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 493,
                        "end": 498,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 493,
                          "end": 496
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 500,
                  "end": 507,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 503,
                    "end": 507
                  }
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 508,
          "end": 519,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 510,
            "end": 519,
            "typeName": {
              "type": "Identifier",
              "start": 510,
              "end": 519,
              "decorators": [],
              "name": "TFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 520,
          "end": 701,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 526,
              "end": 699,
              "argument": {
                "type": "ClassExpression",
                "start": 533,
                "end": 698,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 552,
                  "decorators": [],
                  "name": "decoratorFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 571,
                  "decorators": [],
                  "name": "superClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 572,
                  "end": 698,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 582,
                      "end": 692,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 593,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 593,
                        "end": 692,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 594,
                            "end": 608,
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 597,
                              "end": 601,
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 601,
                              "end": 608,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 603,
                                "end": 608,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 603,
                                  "end": 606
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 610,
                          "end": 692,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 624,
                              "end": 639,
                              "expression": {
                                "type": "CallExpression",
                                "start": 624,
                                "end": 638,
                                "callee": {
                                  "type": "Super",
                                  "start": 624,
                                  "end": 629
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 630,
                                    "end": 637,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 633,
                                      "end": 637,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 652,
                              "end": 682,
                              "expression": {
                                "type": "CallExpression",
                                "start": 652,
                                "end": 681,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 652,
                                  "end": 669,
                                  "decorators": [],
                                  "name": "_instanceModifier",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 670,
                                    "end": 674
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 676,
                                    "end": 680,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
