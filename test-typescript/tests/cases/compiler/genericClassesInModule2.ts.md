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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 202,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 202,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 24,
              "end": 117,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 35,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 35,
                "end": 117,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "callback",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 52,
                        "end": 75,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 54,
                          "end": 75,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 55,
                              "end": 66,
                              "name": "self",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 59,
                                "end": 66,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 61,
                                  "end": 66,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 61,
                                    "end": 62,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 62,
                                    "end": 66,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 63,
                                        "end": 65,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 63,
                                          "end": 65,
                                          "name": "T1",
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
                            "start": 68,
                            "end": 75,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 71,
                              "end": 75
                            }
                          }
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
                          "id": {
                            "type": "Identifier",
                            "start": 91,
                            "end": 96,
                            "name": "child",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 99,
                            "end": 110,
                            "callee": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 104,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 105,
                                "end": 109
                              }
                            ],
                            "typeArguments": null
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
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
              "start": 122,
              "end": 200,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "name": "AAA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 125,
                "end": 200,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 127,
                    "end": 158,
                    "name": "callback",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 158,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 137,
                        "end": 158,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 138,
                            "end": 149,
                            "name": "self",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 142,
                              "end": 149,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 144,
                                "end": 149,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 144,
                                  "end": 145,
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 145,
                                  "end": 149,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 146,
                                      "end": 148,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 146,
                                        "end": 148,
                                        "name": "T1",
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
                          "start": 151,
                          "end": 158,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 154,
                            "end": 158
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
                          "id": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 179,
                            "name": "child",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 182,
                            "end": 193,
                            "callee": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 187,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 188,
                                "end": 192
                              }
                            ],
                            "typeArguments": null
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 14,
          "end": 18,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 15,
              "end": 17,
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 17,
                "name": "T1",
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 204,
      "end": 313,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 211,
        "end": 313,
        "id": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 222,
          "end": 226,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 223,
              "end": 225,
              "name": {
                "type": "Identifier",
                "start": 223,
                "end": 225,
                "name": "T1",
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 226,
          "end": 313,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 232,
              "end": 245,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 232,
                "end": 237,
                "name": "child",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 237,
                "end": 244,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 239,
                  "end": 244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 240,
                    "end": 244,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 241,
                        "end": 243,
                        "typeName": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 243,
                          "name": "T1",
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
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 250,
              "end": 270,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 251,
                  "end": 262,
                  "name": "self",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 257,
                      "end": 262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 258,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 258,
                        "end": 262,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 259,
                            "end": 261,
                            "typeName": {
                              "type": "Identifier",
                              "start": 259,
                              "end": 261,
                              "name": "T1",
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
                "start": 263,
                "end": 269,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 265,
                  "end": 269
                }
              }
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 275,
              "end": 311,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 279,
                  "end": 310,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 310,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 289,
                      "end": 310,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 290,
                          "end": 301,
                          "name": "self",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 294,
                            "end": 301,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 296,
                              "end": 301,
                              "typeName": {
                                "type": "Identifier",
                                "start": 296,
                                "end": 297,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 297,
                                "end": 301,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 298,
                                    "end": 300,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 298,
                                      "end": 300,
                                      "name": "T1",
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
                        "start": 303,
                        "end": 310,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 306,
                          "end": 310
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": null
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
      "start": 315,
      "end": 376,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 322,
        "end": 376,
        "id": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 334,
          "end": 376,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 340,
              "end": 374,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 340,
                "end": 351,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 351,
                "end": 374,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "parent",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 365,
                        "end": 369,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 367,
                          "end": 369,
                          "typeName": {
                            "type": "Identifier",
                            "start": 367,
                            "end": 369,
                            "name": "T2",
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
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 371,
                  "end": 374,
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
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 329,
          "end": 333,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 330,
              "end": 332,
              "name": {
                "type": "Identifier",
                "start": 330,
                "end": 332,
                "name": "T2",
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
