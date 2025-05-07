__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 616,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 43,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 25,
            "end": 41,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 31,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 29,
                    "end": 31,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 31,
                      "decorators": [],
                      "name": "To",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Pretty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 19,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 19,
              "decorators": [],
              "name": "To",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 99,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 97,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 84,
              "decorators": [],
              "name": "pretty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 96,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 93,
                  "end": 96,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 94,
                      "end": 95,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "decorators": [],
                  "name": "Pretty",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 61,
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 61,
        "end": 64,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 63,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 101,
      "end": 136,
      "body": {
        "type": "TSInterfaceBody",
        "start": 120,
        "end": 136,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 124,
            "end": 134,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 133,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 116,
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 116,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 118,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "A",
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
      "start": 138,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 282,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 282,
            "decorators": [],
            "name": "Class",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 282,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 159,
                "end": 282,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 169,
                    "end": 187,
                    "decorators": [],
                    "name": "identifier",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 179,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 191,
                  "end": 282,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 194,
                    "end": 282,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 206,
                        "end": 220,
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 212,
                          "end": 220,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 214,
                            "end": 220,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 214,
                              "end": 220,
                              "decorators": [],
                              "name": "Fields",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 224,
                        "end": 250,
                        "decorators": [],
                        "name": "annotations",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 236,
                          "end": 250,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 238,
                            "end": 250,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 244,
                              "end": 250,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 245,
                                  "end": 249,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 245,
                                    "end": 249,
                                    "decorators": [],
                                    "name": "Self",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 238,
                              "end": 244,
                              "decorators": [],
                              "name": "Schema",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 254,
                      "end": 282,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 257,
                        "end": 282,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 262,
                          "end": 282,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 263,
                              "end": 281,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 273,
                                "end": 281,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 274,
                                    "end": 280,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 274,
                                      "end": 280,
                                      "decorators": [],
                                      "name": "Fields",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 263,
                                "end": 273,
                                "decorators": [],
                                "name": "OutputFrom",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 262,
                          "decorators": [],
                          "name": "Class",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 194,
                      "end": 202,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 195,
                          "end": 201,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 201,
                            "decorators": [],
                            "name": "Fields",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 159,
                  "end": 165,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 160,
                      "end": 164,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 164,
                        "decorators": [],
                        "name": "Self",
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 285,
      "end": 331,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 294,
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 306,
        "end": 330,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 310,
            "end": 328,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 318,
              "decorators": [],
              "name": "_TOutput",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 320,
                "end": 327,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 327,
                  "decorators": [],
                  "name": "TOutput",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 294,
        "end": 303,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 295,
            "end": 302,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 295,
              "end": 302,
              "decorators": [],
              "name": "TOutput",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 333,
      "end": 466,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 348,
        "decorators": [],
        "name": "OutputFrom",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 360,
        "end": 465,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 370,
          "end": 383,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 376,
            "end": 383,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 376,
              "end": 383,
              "decorators": [],
              "name": "TFields",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 365,
          "end": 366,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 386,
          "end": 462,
          "checkType": {
            "type": "TSLiteralType",
            "start": 386,
            "end": 396,
            "literal": {
              "type": "Literal",
              "start": 386,
              "end": 396,
              "raw": "\"_TOutput\"",
              "value": "_TOutput",
              "regex": null,
              "bigint": null
            }
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 405,
            "end": 421,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 411,
              "end": 421,
              "indexType": {
                "type": "TSTypeReference",
                "start": 419,
                "end": 420,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 411,
                "end": 418,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 418,
                  "decorators": [],
                  "name": "TFields",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 457,
            "end": 462
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 428,
            "end": 450,
            "indexType": {
              "type": "TSLiteralType",
              "start": 439,
              "end": 449,
              "literal": {
                "type": "Literal",
                "start": 439,
                "end": 449,
                "raw": "\"_TOutput\"",
                "value": "_TOutput",
                "regex": null,
                "bigint": null
              }
            },
            "objectType": {
              "type": "TSIndexedAccessType",
              "start": 428,
              "end": 438,
              "indexType": {
                "type": "TSTypeReference",
                "start": 436,
                "end": 437,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 437,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 428,
                "end": 435,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 435,
                  "decorators": [],
                  "name": "TFields",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 348,
        "end": 357,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 349,
            "end": 356,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 349,
              "end": 356,
              "decorators": [],
              "name": "TFields",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 468,
      "end": 508,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 491,
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 493,
        "end": 507,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 495,
          "end": 507,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 499,
            "end": 507,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 500,
                "end": 506
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 495,
            "end": 499,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 510,
      "end": 616,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 517,
        "end": 616,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 614,
          "end": 616,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 523,
          "end": 524,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 533,
          "end": 613,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 550,
              "end": 563,
              "properties": [
                {
                  "type": "Property",
                  "start": 552,
                  "end": 561,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 561,
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            {
              "type": "ObjectExpression",
              "start": 567,
              "end": 610,
              "properties": [
                {
                  "type": "Property",
                  "start": 573,
                  "end": 605,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 579,
                    "decorators": [],
                    "name": "pretty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 581,
                    "end": 605,
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 588,
                      "end": 605,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 603,
                          "end": 604,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 588,
                        "end": 602,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 588,
                          "end": 592,
                          "decorators": [],
                          "name": "JSON",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 602,
                          "decorators": [],
                          "name": "stringify",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "CallExpression",
            "start": 533,
            "end": 546,
            "arguments": [
              {
                "type": "Literal",
                "start": 542,
                "end": 545,
                "raw": "\"A\"",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 533,
              "end": 538,
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 538,
              "end": 541,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 539,
                  "end": 540,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 540,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
