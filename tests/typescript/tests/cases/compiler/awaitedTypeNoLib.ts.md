__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 673,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "NotPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 21,
        "end": 105,
        "checkType": {
          "type": "TSTypeReference",
          "start": 21,
          "end": 22,
          "typeName": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 31,
          "end": 48,
          "typeName": {
            "type": "Identifier",
            "start": 31,
            "end": 39,
            "decorators": [],
            "name": "Thenable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 39,
            "end": 48,
            "params": [
              {
                "type": "TSUnknownKeyword",
                "start": 40,
                "end": 47
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 53,
          "end": 54,
          "typeName": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 59,
          "end": 105,
          "checkType": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 69,
            "end": 89,
            "typeName": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 80,
              "end": 89,
              "params": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 81,
                  "end": 88
                }
              ]
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 94,
            "end": 99
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 104,
            "end": 105,
            "typeName": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "decorators": [],
        "name": "Receiver",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 127,
        "end": 157,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 128,
            "end": 148,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 135,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 145,
                  "decorators": [],
                  "name": "NotPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 145,
                  "end": 148,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 146,
                      "end": 147,
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 150,
          "end": 157,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 153,
            "end": 157
          }
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 160,
      "end": 673,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 174,
        "decorators": [],
        "name": "Thenable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 176,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "T",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 673,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 205,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 186,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 205,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 187,
                  "end": 201,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 188,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 190,
                      "end": 201,
                      "typeName": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 198,
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 198,
                        "end": 201,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 199,
                            "end": 200,
                            "typeName": {
                              "type": "Identifier",
                              "start": 199,
                              "end": 200,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 203,
                "end": 205,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 565,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 230,
              "decorators": [],
              "name": "handleResolve",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 565,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 230,
                "end": 239,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 231,
                    "end": 238,
                    "name": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 238,
                      "decorators": [],
                      "name": "TResult",
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
                  "start": 245,
                  "end": 304,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 251,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 253,
                      "end": 304,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 253,
                          "end": 272,
                          "typeName": {
                            "type": "Identifier",
                            "start": 253,
                            "end": 263,
                            "decorators": [],
                            "name": "NotPromise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 263,
                            "end": 272,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 264,
                                "end": 271,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 264,
                                  "end": 271,
                                  "decorators": [],
                                  "name": "TResult",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 275,
                          "end": 304,
                          "typeName": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 283,
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 283,
                            "end": 304,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 284,
                                "end": 303,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 284,
                                  "end": 294,
                                  "decorators": [],
                                  "name": "NotPromise",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 294,
                                  "end": 303,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 295,
                                      "end": 302,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 295,
                                        "end": 302,
                                        "decorators": [],
                                        "name": "TResult",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 310,
                  "end": 336,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 336,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 319,
                      "end": 336,
                      "typeName": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 327,
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 327,
                        "end": 336,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 328,
                            "end": 335,
                            "typeName": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 335,
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 342,
                "end": 565,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 348,
                    "end": 561,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 352,
                      "end": 378,
                      "left": {
                        "type": "Identifier",
                        "start": 352,
                        "end": 358,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 378,
                        "decorators": [],
                        "name": "Thenable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 380,
                      "end": 561,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 518,
                          "end": 555,
                          "expression": {
                            "type": "CallExpression",
                            "start": 518,
                            "end": 554,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 518,
                              "end": 537,
                              "object": {
                                "type": "ThisExpression",
                                "start": 518,
                                "end": 522
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 523,
                                "end": 537,
                                "decorators": [],
                                "name": "resolvePromise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 538,
                                "end": 544,
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 546,
                                "end": 553,
                                "decorators": [],
                                "name": "resolve",
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
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 569,
            "end": 671,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 577,
              "end": 591,
              "decorators": [],
              "name": "resolvePromise",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 591,
              "end": 671,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 591,
                "end": 600,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 592,
                    "end": 599,
                    "name": {
                      "type": "Identifier",
                      "start": 592,
                      "end": 599,
                      "decorators": [],
                      "name": "TResult",
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
                  "start": 606,
                  "end": 631,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 612,
                    "end": 631,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 614,
                      "end": 631,
                      "typeName": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 622,
                        "decorators": [],
                        "name": "Thenable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 622,
                        "end": 631,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 623,
                            "end": 630,
                            "typeName": {
                              "type": "Identifier",
                              "start": 623,
                              "end": 630,
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 637,
                  "end": 663,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 644,
                    "end": 663,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 646,
                      "end": 663,
                      "typeName": {
                        "type": "Identifier",
                        "start": 646,
                        "end": 654,
                        "decorators": [],
                        "name": "Receiver",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 654,
                        "end": 663,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 655,
                            "end": 662,
                            "typeName": {
                              "type": "Identifier",
                              "start": 655,
                              "end": 662,
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 669,
                "end": 671,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
