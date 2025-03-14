baseConstraintOfDecorator.ts
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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 313,
        "async": false,
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
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 184,
                  "end": 310,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 194,
                      "end": 304,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 205,
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
                        "start": 205,
                        "end": 304,
                        "async": false,
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
                                      "optional": false
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Super",
                                  "start": 236,
                                  "end": 241
                                },
                                "optional": false
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 264,
                              "end": 294,
                              "expression": {
                                "type": "CallExpression",
                                "start": 264,
                                "end": 293,
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
                                    "optional": false
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 264,
                                  "end": 281,
                                  "decorators": [],
                                  "name": "_instanceModifier",
                                  "optional": false
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
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 206,
                            "end": 220,
                            "argument": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 213,
                              "decorators": [],
                              "name": "args",
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
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "decorators": [],
                  "name": "decoratorFunc",
                  "optional": false
                },
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 183,
                  "decorators": [],
                  "name": "superClass",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 29,
          "decorators": [],
          "name": "classExtender",
          "optional": false
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
                  "optional": false
                }
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
              "optional": false
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 29,
          "end": 40,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 30,
              "end": 39,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 30,
                "end": 39,
                "decorators": [],
                "name": "TFunction",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 343,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 329,
        "end": 343,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 331,
            "end": 341,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 328,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 344,
      "end": 701,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 351,
        "end": 701,
        "async": false,
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
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 572,
                  "end": 698,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 582,
                      "end": 692,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 593,
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
                        "start": 593,
                        "end": 692,
                        "async": false,
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
                                      "optional": false
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Super",
                                  "start": 624,
                                  "end": 629
                                },
                                "optional": false
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 652,
                              "end": 682,
                              "expression": {
                                "type": "CallExpression",
                                "start": 652,
                                "end": 681,
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
                                    "optional": false
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 652,
                                  "end": 669,
                                  "decorators": [],
                                  "name": "_instanceModifier",
                                  "optional": false
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
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 594,
                            "end": 608,
                            "argument": {
                              "type": "Identifier",
                              "start": 597,
                              "end": 601,
                              "decorators": [],
                              "name": "args",
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
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 552,
                  "decorators": [],
                  "name": "decoratorFunc",
                  "optional": false
                },
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 571,
                  "decorators": [],
                  "name": "superClass",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 360,
          "end": 374,
          "decorators": [],
          "name": "classExtender2",
          "optional": false
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
                  "optional": false
                }
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
              "optional": false
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 374,
          "end": 428,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 375,
              "end": 427,
              "const": false,
              "constraint": {
                "type": "TSConstructorType",
                "start": 393,
                "end": 427,
                "abstract": false,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 398,
                    "end": 415,
                    "argument": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 405,
                      "decorators": [],
                      "name": "args",
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
                    }
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
                      "optional": false
                    }
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 375,
                "end": 384,
                "decorators": [],
                "name": "TFunction",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
