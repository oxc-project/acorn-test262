mixinIntersectionIsValidbaseType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 725,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 79,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "Constructor",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 53,
          "end": 78,
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "start": 58,
              "end": 72,
              "argument": {
                "type": "Identifier",
                "start": 61,
                "end": 65,
                "decorators": [],
                "name": "args",
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 65,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 67,
                  "end": 72,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 67,
                    "end": 70
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 77,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 50,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 49,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 34,
                "end": 40
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 43,
                "end": 49
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 142,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 88,
        "end": 142,
        "body": {
          "type": "TSInterfaceBody",
          "start": 107,
          "end": 142,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 113,
              "end": 140,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 113,
                "end": 117,
                "decorators": [],
                "name": "init",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 118,
                  "end": 132,
                  "argument": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 125,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 127,
                      "end": 132,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 127,
                        "end": 130
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 133,
                "end": 139,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 135,
                  "end": 139
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
          "start": 98,
          "end": 106,
          "decorators": [],
          "name": "Initable",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 205,
      "end": 507,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 212,
        "end": 507,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 218,
            "end": 506,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 218,
              "end": 230,
              "decorators": [],
              "name": "Serializable",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 233,
              "end": 506,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 302,
                "end": 506,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 308,
                    "end": 434,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 314,
                        "end": 433,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 324,
                          "decorators": [],
                          "name": "LocalMixin",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 327,
                          "end": 433,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 351,
                            "end": 433,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 361,
                                "end": 427,
                                "argument": {
                                  "type": "ClassExpression",
                                  "start": 368,
                                  "end": 427,
                                  "abstract": false,
                                  "body": {
                                    "type": "ClassBody",
                                    "start": 416,
                                    "end": 427,
                                    "body": []
                                  },
                                  "declare": false,
                                  "decorators": [],
                                  "id": {
                                    "type": "Identifier",
                                    "start": 374,
                                    "end": 391,
                                    "decorators": [],
                                    "name": "SerializableLocal",
                                    "optional": false
                                  },
                                  "implements": [],
                                  "superClass": {
                                    "type": "Identifier",
                                    "start": 400,
                                    "end": 415,
                                    "decorators": [],
                                    "name": "InnerSuperClass",
                                    "optional": false
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
                              "start": 328,
                              "end": 346,
                              "decorators": [],
                              "name": "InnerSuperClass",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 343,
                                "end": 346,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 345,
                                  "end": 346,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 345,
                                    "end": 346,
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 439,
                    "end": 480,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 443,
                        "end": 479,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 454,
                          "decorators": [],
                          "name": "ResultClass",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 457,
                          "end": 479,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 468,
                              "end": 478,
                              "decorators": [],
                              "name": "SuperClass",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 467,
                            "decorators": [],
                            "name": "LocalMixin",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 485,
                    "end": 504,
                    "argument": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 503,
                      "decorators": [],
                      "name": "ResultClass",
                      "optional": false
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
                  "start": 283,
                  "end": 296,
                  "decorators": [],
                  "name": "SuperClass",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 296,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 295,
                      "end": 296,
                      "typeName": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 233,
                "end": 277,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 234,
                    "end": 276,
                    "const": false,
                    "constraint": {
                      "type": "TSIntersectionType",
                      "start": 244,
                      "end": 276,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 244,
                          "end": 265,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 255,
                            "end": 265,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 256,
                                "end": 264,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 256,
                                  "end": 264,
                                  "decorators": [],
                                  "name": "Initable",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 255,
                            "decorators": [],
                            "name": "Constructor",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 268,
                          "end": 276,
                          "typeName": {
                            "type": "Identifier",
                            "start": 268,
                            "end": 276,
                            "decorators": [],
                            "name": "Initable",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "K",
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 509,
      "end": 725,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 724,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 521,
            "decorators": [],
            "name": "AMixin",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 524,
            "end": 724,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 587,
              "end": 724,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 593,
                  "end": 646,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 597,
                      "end": 645,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 597,
                        "end": 608,
                        "decorators": [],
                        "name": "SomeHowOkay",
                        "optional": false
                      },
                      "init": {
                        "type": "ClassExpression",
                        "start": 611,
                        "end": 645,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 638,
                          "end": 645,
                          "body": []
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 617,
                          "end": 618,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "implements": [],
                        "superClass": {
                          "type": "Identifier",
                          "start": 627,
                          "end": 637,
                          "decorators": [],
                          "name": "SuperClass",
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
                  "start": 652,
                  "end": 722,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 656,
                      "end": 721,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 670,
                        "decorators": [],
                        "name": "SomeHowNotOkay",
                        "optional": false
                      },
                      "init": {
                        "type": "ClassExpression",
                        "start": 673,
                        "end": 721,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 714,
                          "end": 721,
                          "body": []
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 679,
                          "end": 680,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "implements": [],
                        "superClass": {
                          "type": "CallExpression",
                          "start": 689,
                          "end": 713,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 702,
                              "end": 712,
                              "decorators": [],
                              "name": "SuperClass",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 689,
                            "end": 701,
                            "decorators": [],
                            "name": "Serializable",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 569,
                "end": 582,
                "decorators": [],
                "name": "SuperClass",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 579,
                  "end": 582,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 581,
                    "end": 582,
                    "typeName": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 582,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 524,
              "end": 568,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 525,
                  "end": 567,
                  "const": false,
                  "constraint": {
                    "type": "TSIntersectionType",
                    "start": 535,
                    "end": 567,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 535,
                        "end": 556,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 546,
                          "end": 556,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 547,
                              "end": 555,
                              "typeName": {
                                "type": "Identifier",
                                "start": 547,
                                "end": 555,
                                "decorators": [],
                                "name": "Initable",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 546,
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 559,
                        "end": 567,
                        "typeName": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 567,
                          "decorators": [],
                          "name": "Initable",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
                    "decorators": [],
                    "name": "K",
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
    }
  ],
  "sourceType": "script"
}
```
