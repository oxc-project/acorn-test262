__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 121,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 121,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "SelectorMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 84,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 83,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 40,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 40,
                  "end": 83,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    },
                    {
                      "type": "TSFunctionType",
                      "start": 49,
                      "end": 82,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 50,
                          "end": 70,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 53,
                            "end": 59,
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 59,
                            "end": 70,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 61,
                              "end": 70,
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 61,
                                "end": 68
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 72,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 75,
                          "end": 82
                        }
                      }
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 87,
          "end": 120,
          "key": {
            "type": "Identifier",
            "start": 94,
            "end": 97,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 101,
            "end": 108,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 111,
            "end": 117,
            "objectType": {
              "type": "TSTypeReference",
              "start": 111,
              "end": 112,
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "optional": false,
          "readonly": null
        },
        "declare": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 488,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 121,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 121,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "SelectorMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 23,
          "end": 84,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 24,
              "end": 83,
              "name": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 40,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 40,
                  "end": 83,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    },
                    {
                      "type": "TSFunctionType",
                      "start": 49,
                      "end": 82,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 50,
                          "end": 70,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 53,
                            "end": 59,
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 59,
                            "end": 70,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 61,
                              "end": 70,
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 61,
                                "end": 68
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 72,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 75,
                          "end": 82
                        }
                      }
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 87,
          "end": 120,
          "key": {
            "type": "Identifier",
            "start": 94,
            "end": 97,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 101,
            "end": 108,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 111,
            "end": 117,
            "objectType": {
              "type": "TSTypeReference",
              "start": 111,
              "end": 112,
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "optional": false,
          "readonly": null
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
      "start": 123,
      "end": 313,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 130,
        "end": 313,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 144,
            "end": 312,
            "id": {
              "type": "Identifier",
              "start": 144,
              "end": 312,
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 150,
                "end": 312,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 152,
                  "end": 312,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 158,
                      "end": 310,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 172,
                        "decorators": [],
                        "name": "sliceSelectors",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 172,
                        "end": 309,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 174,
                          "end": 309,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 174,
                            "end": 230,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 175,
                                "end": 229,
                                "name": {
                                  "type": "Identifier",
                                  "start": 175,
                                  "end": 182,
                                  "decorators": [],
                                  "name": "FuncMap",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": {
                                  "type": "TSImportType",
                                  "start": 191,
                                  "end": 229,
                                  "argument": {
                                    "type": "TSLiteralType",
                                    "start": 198,
                                    "end": 207,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 198,
                                      "end": 207,
                                      "value": "./types",
                                      "raw": "'./types'"
                                    }
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "start": 209,
                                    "end": 220,
                                    "decorators": [],
                                    "name": "SelectorMap",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 220,
                                    "end": 229,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 221,
                                        "end": 228,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 221,
                                          "end": 228,
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                },
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
                              "start": 231,
                              "end": 256,
                              "decorators": [],
                              "name": "selectorsBySlice",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 247,
                                "end": 256,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 249,
                                  "end": 256,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 249,
                                    "end": 256,
                                    "decorators": [],
                                    "name": "FuncMap",
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
                            "start": 258,
                            "end": 309,
                            "typeAnnotation": {
                              "type": "TSMappedType",
                              "start": 261,
                              "end": 309,
                              "key": {
                                "type": "Identifier",
                                "start": 264,
                                "end": 265,
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeOperator",
                                "start": 269,
                                "end": 282,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 275,
                                  "end": 282,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 275,
                                    "end": 282,
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "nameType": null,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 285,
                                "end": 307,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 285,
                                  "end": 295,
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 295,
                                  "end": 307,
                                  "params": [
                                    {
                                      "type": "TSIndexedAccessType",
                                      "start": 296,
                                      "end": 306,
                                      "objectType": {
                                        "type": "TSTypeReference",
                                        "start": 296,
                                        "end": 303,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 296,
                                          "end": 303,
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "start": 304,
                                        "end": 305,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 304,
                                          "end": 305,
                                          "decorators": [],
                                          "name": "P",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  ]
                                }
                              },
                              "optional": false,
                              "readonly": null
                            }
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 315,
      "end": 487,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 322,
        "end": 487,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 336,
            "end": 486,
            "id": {
              "type": "Identifier",
              "start": 336,
              "end": 486,
              "decorators": [],
              "name": "value3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 342,
                "end": 486,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 344,
                  "end": 486,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 350,
                      "end": 484,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 350,
                        "end": 364,
                        "decorators": [],
                        "name": "sliceSelectors",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 364,
                        "end": 483,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 366,
                          "end": 483,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 366,
                            "end": 404,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 367,
                                "end": 403,
                                "name": {
                                  "type": "Identifier",
                                  "start": 367,
                                  "end": 374,
                                  "decorators": [],
                                  "name": "FuncMap",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 383,
                                  "end": 403,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 383,
                                    "end": 394,
                                    "decorators": [],
                                    "name": "SelectorMap",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 394,
                                    "end": 403,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 395,
                                        "end": 402,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 395,
                                          "end": 402,
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                },
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
                              "start": 405,
                              "end": 430,
                              "decorators": [],
                              "name": "selectorsBySlice",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 421,
                                "end": 430,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 423,
                                  "end": 430,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 423,
                                    "end": 430,
                                    "decorators": [],
                                    "name": "FuncMap",
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
                            "start": 432,
                            "end": 483,
                            "typeAnnotation": {
                              "type": "TSMappedType",
                              "start": 435,
                              "end": 483,
                              "key": {
                                "type": "Identifier",
                                "start": 438,
                                "end": 439,
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": {
                                "type": "TSTypeOperator",
                                "start": 443,
                                "end": 456,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 449,
                                  "end": 456,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 449,
                                    "end": 456,
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "nameType": null,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 459,
                                "end": 481,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 459,
                                  "end": 469,
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 469,
                                  "end": 481,
                                  "params": [
                                    {
                                      "type": "TSIndexedAccessType",
                                      "start": 470,
                                      "end": 480,
                                      "objectType": {
                                        "type": "TSTypeReference",
                                        "start": 470,
                                        "end": 477,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 470,
                                          "end": 477,
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "start": 478,
                                        "end": 479,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 478,
                                          "end": 479,
                                          "decorators": [],
                                          "name": "P",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  ]
                                }
                              },
                              "optional": false,
                              "readonly": null
                            }
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
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
