__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 471,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 59,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 59,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 54,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 41,
                      "end": 54,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 50,
                        "end": 54,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 51,
                            "end": 53,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 51,
                              "end": 53,
                              "decorators": [],
                              "name": "T3",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 50,
                        "decorators": [],
                        "name": "Parameter",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "CBaseBase",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 18,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 18,
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 114,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 74,
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 87,
        "end": 96,
        "decorators": [],
        "name": "CBaseBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 96,
        "end": 109,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 97,
            "end": 108,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 108,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 105,
                  "end": 107,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 107,
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 97,
              "end": 104,
              "decorators": [],
              "name": "Wrapper",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 77,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 77,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 161,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 161,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 159,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 159,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 159,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 154,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 152,
                      "end": 154,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 154,
                        "decorators": [],
                        "name": "T4",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "start": 122,
        "end": 131,
        "decorators": [],
        "name": "Parameter",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 134,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 134,
              "decorators": [],
              "name": "T4",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 202,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 202,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 200,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 195,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 197,
                "end": 199,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 199,
                  "decorators": [],
                  "name": "T5",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 176,
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 176,
        "end": 180,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 179,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 177,
              "end": 179,
              "decorators": [],
              "name": "T5",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 204,
      "end": 470,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 234,
        "end": 470,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 240,
            "end": 304,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 252,
              "decorators": [],
              "name": "works",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 252,
              "end": 304,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 304,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 265,
                    "end": 298,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 265,
                      "end": 297,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 292,
                          "end": 296
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 278,
                        "decorators": [],
                        "name": "CBaseBase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 278,
                        "end": 291,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 279,
                            "end": 290,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 286,
                              "end": 290,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 287,
                                  "end": 289,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 287,
                                    "end": 289,
                                    "decorators": [],
                                    "name": "T1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 279,
                              "end": 286,
                              "decorators": [],
                              "name": "Wrapper",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 309,
            "end": 429,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 325,
              "decorators": [],
              "name": "alsoWorks",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 325,
              "end": 429,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 429,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 338,
                    "end": 358,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 338,
                      "end": 357,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 352,
                          "end": 356
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 347,
                        "decorators": [],
                        "name": "CBase",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 347,
                        "end": 351,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 348,
                            "end": 350,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 348,
                              "end": 350,
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 435,
            "end": 468,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 448,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 448,
              "end": 468,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 465,
                "end": 468,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 449,
                  "end": 463,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 450,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 452,
                      "end": 463,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 459,
                        "end": 463,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 460,
                            "end": 462,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 460,
                              "end": 462,
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 459,
                        "decorators": [],
                        "name": "Wrapper",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "start": 210,
        "end": 211,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 229,
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 229,
        "end": 233,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 230,
            "end": 232,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 230,
              "end": 232,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 211,
        "end": 215,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 212,
            "end": 214,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 214,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
