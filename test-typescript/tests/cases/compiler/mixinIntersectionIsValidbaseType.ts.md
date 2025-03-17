__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 79,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 53,
          "end": 78,
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 58,
              "end": 72,
              "argument": {
                "type": "Identifier",
                "start": 61,
                "end": 65,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
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
              },
              "value": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 142,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 88,
        "end": 142,
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 106,
          "name": "Initable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 107,
          "end": 142,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 113,
              "end": 140,
              "key": {
                "type": "Identifier",
                "start": 113,
                "end": 117,
                "name": "init",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 118,
                  "end": 132,
                  "argument": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 125,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
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
                  },
                  "value": null
                }
              ],
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
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 205,
      "end": 507,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 212,
        "end": 507,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 218,
            "end": 506,
            "id": {
              "type": "Identifier",
              "start": 218,
              "end": 230,
              "name": "Serializable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 233,
              "end": 506,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 283,
                  "end": 296,
                  "name": "SuperClass",
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
                        "name": "K",
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
                        "id": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 324,
                          "name": "LocalMixin",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 327,
                          "end": 433,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 328,
                              "end": 346,
                              "name": "InnerSuperClass",
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
                                    "name": "K",
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
                                  "id": {
                                    "type": "Identifier",
                                    "start": 374,
                                    "end": 391,
                                    "name": "SerializableLocal",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "superClass": {
                                    "type": "Identifier",
                                    "start": 400,
                                    "end": 415,
                                    "name": "InnerSuperClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "body": {
                                    "type": "ClassBody",
                                    "start": 416,
                                    "end": 427,
                                    "body": []
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
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 454,
                          "name": "ResultClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 457,
                          "end": 479,
                          "callee": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 467,
                            "name": "LocalMixin",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 468,
                              "end": 478,
                              "name": "SuperClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 485,
                    "end": 504,
                    "argument": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 503,
                      "name": "ResultClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 233,
                "end": 277,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 234,
                    "end": 276,
                    "name": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSIntersectionType",
                      "start": 244,
                      "end": 276,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 244,
                          "end": 265,
                          "typeName": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 255,
                            "name": "Constructor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                  "name": "Initable",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
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
                            "name": "Initable",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 521,
            "name": "AMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 524,
            "end": 724,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 569,
                "end": 582,
                "name": "SuperClass",
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
                      "name": "K",
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
                      "id": {
                        "type": "Identifier",
                        "start": 597,
                        "end": 608,
                        "name": "SomeHowOkay",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ClassExpression",
                        "start": 611,
                        "end": 645,
                        "id": {
                          "type": "Identifier",
                          "start": 617,
                          "end": 618,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": {
                          "type": "Identifier",
                          "start": 627,
                          "end": 637,
                          "name": "SuperClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "body": {
                          "type": "ClassBody",
                          "start": 638,
                          "end": 645,
                          "body": []
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 670,
                        "name": "SomeHowNotOkay",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ClassExpression",
                        "start": 673,
                        "end": 721,
                        "id": {
                          "type": "Identifier",
                          "start": 679,
                          "end": 680,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": {
                          "type": "CallExpression",
                          "start": 689,
                          "end": 713,
                          "callee": {
                            "type": "Identifier",
                            "start": 689,
                            "end": 701,
                            "name": "Serializable",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 702,
                              "end": 712,
                              "name": "SuperClass",
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
                          "start": 714,
                          "end": 721,
                          "body": []
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 524,
              "end": 568,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 525,
                  "end": 567,
                  "name": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSIntersectionType",
                    "start": 535,
                    "end": 567,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 535,
                        "end": 556,
                        "typeName": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 546,
                          "name": "Constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "Initable",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
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
                          "name": "Initable",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
