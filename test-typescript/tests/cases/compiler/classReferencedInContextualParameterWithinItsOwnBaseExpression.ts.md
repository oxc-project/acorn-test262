__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 617,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "Pretty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 19,
              "name": "To",
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
        "start": 21,
        "end": 43,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 25,
            "end": 41,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 31,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 29,
                    "end": 31,
                    "typeName": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 31,
                      "name": "To",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 61,
        "name": "Schema",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 61,
        "end": 64,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 63,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "A",
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
        "start": 65,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 97,
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 84,
              "name": "pretty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "name": "Pretty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 93,
                  "end": 96,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 94,
                      "end": 95,
                      "typeName": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "name": "A",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 101,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 116,
        "name": "Class",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 116,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 118,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "A",
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
        "start": 120,
        "end": 136,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 124,
            "end": 134,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 282,
            "name": "Class",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 282,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 159,
                "end": 282,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 159,
                  "end": 165,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 160,
                      "end": 164,
                      "name": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 164,
                        "name": "Self",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 169,
                    "end": 187,
                    "name": "identifier",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 179,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 194,
                      "end": 202,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 195,
                          "end": 201,
                          "name": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 201,
                            "name": "Fields",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 206,
                        "end": 220,
                        "name": "fields",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 212,
                          "end": 220,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 214,
                            "end": 220,
                            "typeName": {
                              "type": "Identifier",
                              "start": 214,
                              "end": 220,
                              "name": "Fields",
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
                      {
                        "type": "Identifier",
                        "start": 224,
                        "end": 250,
                        "name": "annotations",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 236,
                          "end": 250,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 238,
                            "end": 250,
                            "typeName": {
                              "type": "Identifier",
                              "start": 238,
                              "end": 244,
                              "name": "Schema",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 244,
                              "end": 250,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 245,
                                  "end": 249,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 245,
                                    "end": 249,
                                    "name": "Self",
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
                        "optional": true
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 262,
                          "name": "Class",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 262,
                          "end": 282,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 263,
                              "end": 281,
                              "typeName": {
                                "type": "Identifier",
                                "start": 263,
                                "end": 273,
                                "name": "OutputFrom",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 273,
                                "end": 281,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 274,
                                    "end": 280,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 274,
                                      "end": 280,
                                      "name": "Fields",
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
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 285,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 294,
        "name": "Type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 295,
              "end": 302,
              "name": "TOutput",
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
        "type": "TSTypeLiteral",
        "start": 306,
        "end": 330,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 310,
            "end": 328,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 318,
              "name": "_TOutput",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 320,
                "end": 327,
                "typeName": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 327,
                  "name": "TOutput",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 333,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 348,
        "name": "OutputFrom",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 349,
              "end": 356,
              "name": "TFields",
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
        "type": "TSMappedType",
        "start": 360,
        "end": 465,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 365,
          "end": 383,
          "name": {
            "type": "Identifier",
            "start": 365,
            "end": 366,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 370,
            "end": 383,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 376,
              "end": 383,
              "typeName": {
                "type": "Identifier",
                "start": 376,
                "end": 383,
                "name": "TFields",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
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
              "value": "_TOutput",
              "raw": "\"_TOutput\""
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
              "objectType": {
                "type": "TSTypeReference",
                "start": 411,
                "end": 418,
                "typeName": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 418,
                  "name": "TFields",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 419,
                "end": 420,
                "typeName": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 428,
            "end": 450,
            "objectType": {
              "type": "TSIndexedAccessType",
              "start": 428,
              "end": 438,
              "objectType": {
                "type": "TSTypeReference",
                "start": 428,
                "end": 435,
                "typeName": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 435,
                  "name": "TFields",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 436,
                "end": 437,
                "typeName": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 437,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 439,
              "end": 449,
              "literal": {
                "type": "Literal",
                "start": 439,
                "end": 449,
                "value": "_TOutput",
                "raw": "\"_TOutput\""
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 457,
            "end": 462
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 370,
          "end": 383,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 376,
            "end": 383,
            "typeName": {
              "type": "Identifier",
              "start": 376,
              "end": 383,
              "name": "TFields",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 365,
          "end": 366,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 468,
      "end": 508,
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 491,
        "name": "string",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 493,
        "end": 507,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 495,
          "end": 507,
          "typeName": {
            "type": "Identifier",
            "start": 495,
            "end": 499,
            "name": "Type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 510,
      "end": 616,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 517,
        "end": 616,
        "id": {
          "type": "Identifier",
          "start": 523,
          "end": 524,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 533,
          "end": 613,
          "callee": {
            "type": "CallExpression",
            "start": 533,
            "end": 546,
            "callee": {
              "type": "Identifier",
              "start": 533,
              "end": 538,
              "name": "Class",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 542,
                "end": 545,
                "value": "A",
                "raw": "\"A\""
              }
            ],
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 540,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 561,
                    "name": "string",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 579,
                    "name": "pretty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 581,
                    "end": 605,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 588,
                      "end": 605,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 588,
                        "end": 602,
                        "object": {
                          "type": "Identifier",
                          "start": 588,
                          "end": 592,
                          "name": "JSON",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 602,
                          "name": "stringify",
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
                          "start": 603,
                          "end": 604,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 614,
          "end": 616,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
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
