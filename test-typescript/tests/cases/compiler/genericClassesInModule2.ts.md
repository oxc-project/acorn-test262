__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 378,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 202,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 202,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 202,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 24,
              "end": 117,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 35,
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
                "start": 35,
                "end": 117,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 77,
                  "end": 117,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 87,
                      "end": 111,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 91,
                          "end": 110,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 91,
                            "end": 96,
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 99,
                            "end": 110,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 105,
                                "end": 109
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 104,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 37,
                    "end": 75,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 75,
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 52,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 54,
                          "end": 75,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 55,
                              "end": 66,
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 59,
                                "end": 66,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 61,
                                  "end": 66,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 62,
                                    "end": 66,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 63,
                                        "end": 65,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 63,
                                          "end": 65,
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
                                    "start": 61,
                                    "end": 62,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 68,
                            "end": 75,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 71,
                              "end": 75
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 122,
              "end": 200,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "AAA",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 125,
                "end": 200,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 160,
                  "end": 200,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 170,
                      "end": 194,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 174,
                          "end": 193,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 179,
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 182,
                            "end": 193,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 188,
                                "end": 192
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 187,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 127,
                    "end": 158,
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 158,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 137,
                        "end": 158,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 138,
                            "end": 149,
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 142,
                              "end": 149,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 144,
                                "end": 149,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 145,
                                  "end": 149,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 146,
                                      "end": 148,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 146,
                                        "end": 148,
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
                                  "start": 144,
                                  "end": 145,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 151,
                          "end": 158,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 154,
                            "end": 158
                          }
                        },
                        "typeParameters": null
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 14,
          "end": 18,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 15,
              "end": 17,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 17,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
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
      "type": "ExportNamedDeclaration",
      "start": 204,
      "end": 313,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 211,
        "end": 313,
        "body": {
          "type": "TSInterfaceBody",
          "start": 226,
          "end": 313,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 232,
              "end": 245,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 232,
                "end": 237,
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 237,
                "end": 244,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 239,
                  "end": 244,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 240,
                    "end": 244,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 241,
                        "end": 243,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 243,
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
                    "start": 239,
                    "end": 240,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 250,
              "end": 270,
              "params": [
                {
                  "type": "Identifier",
                  "start": 251,
                  "end": 262,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 257,
                      "end": 262,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 258,
                        "end": 262,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 259,
                            "end": 261,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 259,
                              "end": 261,
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
                        "start": 257,
                        "end": 258,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 263,
                "end": 269,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 265,
                  "end": 269
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 275,
              "end": 311,
              "params": [
                {
                  "type": "Identifier",
                  "start": 279,
                  "end": 310,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 310,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 289,
                      "end": 310,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 290,
                          "end": 301,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 294,
                            "end": 301,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 296,
                              "end": 301,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 297,
                                "end": 301,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 298,
                                    "end": 300,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 298,
                                      "end": 300,
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
                                "start": 296,
                                "end": 297,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 303,
                        "end": 310,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 306,
                          "end": 310
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 222,
          "end": 226,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 223,
              "end": 225,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 223,
                "end": 225,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
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
      "start": 315,
      "end": 376,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 322,
        "end": 376,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 334,
          "end": 376,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 340,
              "end": 374,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 340,
                "end": 351,
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
                "start": 351,
                "end": 374,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 371,
                  "end": 374,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 352,
                    "end": 369,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 369,
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 365,
                        "end": 369,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 367,
                          "end": 369,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 367,
                            "end": 369,
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
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
          "start": 328,
          "end": 329,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 329,
          "end": 333,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 330,
              "end": 332,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 330,
                "end": 332,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
