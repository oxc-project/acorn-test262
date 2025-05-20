__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 605,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 107,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 107,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 25,
          "decorators": [],
          "name": "UnrollOnHover",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 46,
          "end": 106,
          "checkType": {
            "type": "TSTypeReference",
            "start": 46,
            "end": 47,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSObjectKeyword",
            "start": 56,
            "end": 62
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 101,
            "end": 106
          },
          "trueType": {
            "type": "TSMappedType",
            "start": 69,
            "end": 94,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 77,
              "end": 84,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 84,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": false,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 87,
              "end": 91,
              "indexType": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 90,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 88,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 25,
          "end": 43,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 26,
              "end": 42,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 36,
                "end": 42
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "O",
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
      "start": 110,
      "end": 155,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 117,
        "end": 155,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 122,
          "end": 128,
          "decorators": [],
          "name": "Schema",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 154,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 137,
            "end": 154,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              },
              {
                "type": "TSUnknownKeyword",
                "start": 146,
                "end": 153
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 351,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 187,
        "end": 351,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 193,
            "end": 206,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 201,
              "decorators": [],
              "name": "__schema",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 205,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 258,
            "end": 349,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 265,
              "decorators": [],
              "name": "getRows",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 265,
              "end": 349,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 349,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 331,
                    "end": 343,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 338,
                      "end": 343,
                      "expression": {
                        "type": "Literal",
                        "start": 338,
                        "end": 342,
                        "raw": "null",
                        "value": null
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 286,
                "end": 320,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 288,
                  "end": 320,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 293,
                    "end": 320,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 294,
                        "end": 319,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 307,
                          "end": 319,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 308,
                              "end": 318,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 312,
                                "end": 318,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 313,
                                    "end": 314,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 313,
                                      "end": 314,
                                      "decorators": [],
                                      "name": "S",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 316,
                                    "end": 317,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 316,
                                      "end": 317,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 308,
                                "end": 312,
                                "decorators": [],
                                "name": "Pick",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 307,
                          "decorators": [],
                          "name": "UnrollOnHover",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 293,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 265,
                "end": 284,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 266,
                    "end": 283,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 276,
                      "end": 283,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 282,
                        "end": 283,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 283,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 167,
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 167,
        "end": 185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 184,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 178,
              "end": 184,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 178,
                "end": 184,
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "S",
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
      "start": 353,
      "end": 417,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 414,
        "end": 417,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 378,
        "decorators": [],
        "name": "ColumnSelectViewImp",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 405,
        "end": 410,
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 410,
        "end": 413,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 411,
            "end": 412,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 378,
        "end": 396,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 379,
            "end": 395,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 389,
              "end": 395,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 389,
                "end": 395,
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 518,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 496,
            "decorators": [],
            "name": "ColumnSelectView1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 496,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 445,
                "end": 496,
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 470,
                  "end": 496,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 496,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 478,
                      "end": 496,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 479,
                          "end": 495,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 492,
                            "end": 495,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 493,
                                "end": 494,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 493,
                                  "end": 494,
                                  "decorators": [],
                                  "name": "S",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 492,
                            "decorators": [],
                            "name": "UnrollOnHover",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 478,
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 449,
                  "end": 467,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 450,
                      "end": 466,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 460,
                        "end": 466,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 460,
                          "end": 466,
                          "decorators": [],
                          "name": "Schema",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 451,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 499,
            "end": 518,
            "decorators": [],
            "name": "ColumnSelectViewImp",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 520,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 604,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 596,
            "decorators": [],
            "name": "ColumnSelectView2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 543,
              "end": 596,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 545,
                "end": 596,
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 570,
                  "end": 596,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 573,
                    "end": 596,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 578,
                      "end": 596,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 579,
                          "end": 595,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 592,
                            "end": 595,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 593,
                                "end": 594,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 593,
                                  "end": 594,
                                  "decorators": [],
                                  "name": "S",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 579,
                            "end": 592,
                            "decorators": [],
                            "name": "UnrollOnHover",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 578,
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 549,
                  "end": 567,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 550,
                      "end": 566,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 560,
                        "end": 566,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 560,
                          "end": 566,
                          "decorators": [],
                          "name": "Schema",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 550,
                        "end": 551,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 599,
            "end": 604,
            "decorators": [],
            "name": "Table",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
