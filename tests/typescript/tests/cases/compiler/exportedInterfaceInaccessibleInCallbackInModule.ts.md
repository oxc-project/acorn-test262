__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 426,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 58,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 58,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "decorators": [],
          "name": "ProgressCallback",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 34,
          "end": 58,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 37,
              "end": 56,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 50,
                  "decorators": [],
                  "name": "progress",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 46,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 47,
                      "end": 50
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 52,
                  "end": 55
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 84,
      "end": 426,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 91,
        "end": 426,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 105,
          "end": 113,
          "decorators": [],
          "name": "TPromise",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 113,
          "end": 116,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 114,
              "end": 115,
              "name": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "V",
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
          "start": 117,
          "end": 426,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 122,
              "end": 240,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 122,
                "end": 133,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 133,
                "end": 240,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 134,
                    "end": 222,
                    "decorators": [],
                    "name": "init",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 222,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 139,
                        "end": 222,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 140,
                            "end": 165,
                            "decorators": [],
                            "name": "complete",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 148,
                              "end": 165,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 150,
                                "end": 165,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 151,
                                    "end": 158,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 156,
                                      "end": 158,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 157,
                                        "end": 158,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 157,
                                          "end": 158,
                                          "decorators": [],
                                          "name": "V",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 159,
                                  "end": 165,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 161,
                                    "end": 165
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 167,
                            "end": 188,
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 172,
                              "end": 188,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 173,
                                "end": 188,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 174,
                                    "end": 181,
                                    "decorators": [],
                                    "name": "err",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 177,
                                      "end": 181,
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 178,
                                        "end": 181
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 182,
                                  "end": 188,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 184,
                                    "end": 188
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 190,
                            "end": 215,
                            "decorators": [],
                            "name": "progress",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 198,
                              "end": 215,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 199,
                                "end": 215,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 199,
                                  "end": 215,
                                  "decorators": [],
                                  "name": "ProgressCallback",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 216,
                          "end": 222,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 218,
                            "end": 222
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 224,
                    "end": 238,
                    "decorators": [],
                    "name": "oncancel",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 233,
                      "end": 238,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 235,
                        "end": 238
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 302,
              "end": 424,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 309,
                "end": 313,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 313,
                "end": 424,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 313,
                  "end": 316,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 314,
                      "end": 315,
                      "name": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "decorators": [],
                        "name": "U",
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
                    "start": 317,
                    "end": 349,
                    "decorators": [],
                    "name": "success",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 325,
                      "end": 349,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 327,
                        "end": 349,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 328,
                            "end": 335,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 333,
                              "end": 335,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 334,
                                "end": 335,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 334,
                                  "end": 335,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 336,
                          "end": 349,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 338,
                            "end": 349,
                            "typeName": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 346,
                              "decorators": [],
                              "name": "TPromise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 346,
                              "end": 349,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 347,
                                  "end": 348,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 347,
                                    "end": 348,
                                    "decorators": [],
                                    "name": "U",
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
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 351,
                    "end": 381,
                    "decorators": [],
                    "name": "error",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 357,
                      "end": 381,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 359,
                        "end": 381,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 360,
                            "end": 367,
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 363,
                              "end": 367,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 364,
                                "end": 367
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 368,
                          "end": 381,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 370,
                            "end": 381,
                            "typeName": {
                              "type": "Identifier",
                              "start": 370,
                              "end": 378,
                              "decorators": [],
                              "name": "TPromise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 378,
                              "end": 381,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 379,
                                  "end": 380,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 379,
                                    "end": 380,
                                    "decorators": [],
                                    "name": "U",
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
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 383,
                    "end": 409,
                    "decorators": [],
                    "name": "progress",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 392,
                      "end": 409,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 393,
                        "end": 409,
                        "typeName": {
                          "type": "Identifier",
                          "start": 393,
                          "end": 409,
                          "decorators": [],
                          "name": "ProgressCallback",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 410,
                  "end": 423,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 412,
                    "end": 423,
                    "typeName": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 420,
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 420,
                      "end": 423,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 421,
                          "end": 422,
                          "typeName": {
                            "type": "Identifier",
                            "start": 421,
                            "end": 422,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
