__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 702,
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
          "name": "classExtender",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 41,
            "end": 62,
            "name": "superClass",
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
                  "name": "TFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 64,
            "end": 119,
            "name": "_instanceModifier",
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
                    "name": "instance",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 94,
                        "end": 97
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 99,
                    "end": 110,
                    "name": "args",
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
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                "id": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "name": "decoratorFunc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 183,
                  "name": "superClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 184,
                  "end": 310,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 194,
                      "end": 304,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 205,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "constructor",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 205,
                        "end": 304,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 206,
                            "end": 220,
                            "argument": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 213,
                              "name": "args",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "decorators": [],
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
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 242,
                                    "end": 249,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 245,
                                      "end": 249,
                                      "name": "args",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
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
                                  "name": "_instanceModifier",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                    "name": "args",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
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
            }
          ]
        },
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
                "name": "TFunction",
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
              "name": "TFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 328,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 329,
        "end": 343,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 331,
            "end": 341,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
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
          "name": "classExtender2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 429,
            "end": 450,
            "name": "superClass",
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
                  "name": "TFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 452,
            "end": 507,
            "name": "_instanceModifier",
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
                    "name": "instance",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 480,
                      "end": 485,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 482,
                        "end": 485
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 487,
                    "end": 498,
                    "name": "args",
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
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                "id": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 552,
                  "name": "decoratorFunc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 571,
                  "name": "superClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 572,
                  "end": 698,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 582,
                      "end": 692,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 593,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "constructor",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 593,
                        "end": 692,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 594,
                            "end": 608,
                            "argument": {
                              "type": "Identifier",
                              "start": 597,
                              "end": 601,
                              "name": "args",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "decorators": [],
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
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 630,
                                    "end": 637,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 633,
                                      "end": 637,
                                      "name": "args",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
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
                                  "name": "_instanceModifier",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                    "name": "args",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
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
            }
          ]
        },
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
                "name": "TFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "argument": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 405,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
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
                      "name": "MyClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": "TFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
