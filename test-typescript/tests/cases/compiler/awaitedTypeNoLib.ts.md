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
        "name": "NotPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Thenable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "PromiseLike",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 121,
        "name": "Receiver",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "type": "TSFunctionType",
        "start": 127,
        "end": 157,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 128,
            "end": 148,
            "name": "value",
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
                  "name": "NotPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 174,
        "name": "Thenable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 673,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 205,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 186,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 205,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 187,
                  "end": 201,
                  "name": "a",
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
                        "name": "Receiver",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 203,
                "end": 205,
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
            "start": 209,
            "end": 565,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 230,
              "name": "handleResolve",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 565,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 245,
                  "end": 304,
                  "name": "result",
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
                            "name": "NotPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "TResult",
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
                          "start": 275,
                          "end": 304,
                          "typeName": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 283,
                            "name": "Thenable",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "NotPromise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                        "name": "TResult",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 310,
                  "end": 336,
                  "name": "resolve",
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
                        "name": "Receiver",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TResult",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 378,
                        "name": "Thenable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "name": "resolvePromise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 538,
                                "end": 544,
                                "name": "result",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 546,
                                "end": 553,
                                "name": "resolve",
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
                    "alternate": null
                  }
                ]
              },
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
                      "name": "TResult",
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 569,
            "end": 671,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 577,
              "end": 591,
              "name": "resolvePromise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 591,
              "end": 671,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 606,
                  "end": 631,
                  "name": "result",
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
                        "name": "Thenable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TResult",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 637,
                  "end": 663,
                  "name": "resolve",
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
                        "name": "Receiver",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TResult",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 669,
                "end": 671,
                "body": []
              },
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
                      "name": "TResult",
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
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
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
