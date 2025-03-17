__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 605,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "name": "IObserver",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 110,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 108,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 35,
              "name": "handleChange",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 35,
              "end": 47,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 36,
                  "end": 37,
                  "name": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 39,
                  "end": 46,
                  "name": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 46,
                    "name": "TChange",
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
                "start": 48,
                "end": 83,
                "name": "observable",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 83,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 83,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 71,
                      "name": "IObservable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 71,
                      "end": 83,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 72,
                          "end": 73,
                          "typeName": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 73,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 75,
                          "end": 82,
                          "typeName": {
                            "type": "Identifier",
                            "start": 75,
                            "end": 82,
                            "name": "TChange",
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
                "start": 85,
                "end": 100,
                "name": "change",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 100,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 93,
                    "end": 100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 100,
                      "name": "TChange",
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
              "start": 101,
              "end": 107,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 103,
                "end": 107
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 133,
        "name": "IObservable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 133,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 135,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 154,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 144,
              "name": "TChange",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 147,
              "end": 154
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 156,
        "end": 198,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 159,
            "end": 168,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 167,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 170,
            "end": 196,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 186,
              "name": "TChange",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 195,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 195,
                  "name": "TChange",
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
      "type": "ExportNamedDeclaration",
      "start": 200,
      "end": 284,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 207,
        "end": 284,
        "id": {
          "type": "Identifier",
          "start": 217,
          "end": 224,
          "name": "IReader",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 225,
          "end": 284,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 228,
              "end": 282,
              "key": {
                "type": "Identifier",
                "start": 228,
                "end": 242,
                "name": "readObservable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 242,
                "end": 245,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 243,
                    "end": 244,
                    "name": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 246,
                  "end": 277,
                  "name": "observable",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 256,
                    "end": 277,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 258,
                      "end": 277,
                      "typeName": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 269,
                        "name": "IObservable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 269,
                        "end": 277,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 270,
                            "end": 271,
                            "typeName": {
                              "type": "Identifier",
                              "start": 270,
                              "end": 271,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 273,
                            "end": 276
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
                "start": 278,
                "end": 281,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 280,
                  "end": 281,
                  "typeName": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 281,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
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
      "start": 286,
      "end": 448,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 293,
        "end": 448,
        "id": {
          "type": "Identifier",
          "start": 308,
          "end": 328,
          "name": "ConvenientObservable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 376,
          "end": 448,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 379,
              "end": 419,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 383,
                "end": 390,
                "name": "TChange",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 390,
                "end": 419,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 402,
                  "end": 419,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 404,
                      "end": 417,
                      "argument": {
                        "type": "TSNonNullExpression",
                        "start": 411,
                        "end": 416,
                        "expression": {
                          "type": "Literal",
                          "start": 411,
                          "end": 415,
                          "value": null,
                          "raw": "null"
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 392,
                  "end": 401,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 394,
                    "end": 401,
                    "typeName": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 401,
                      "name": "TChange",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "TSAbstractMethodDefinition",
              "start": 421,
              "end": 446,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 437,
                "end": 440,
                "name": "get",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 440,
                "end": 446,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 442,
                  "end": 445,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 444,
                    "end": 445,
                    "typeName": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 445,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 328,
          "end": 340,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 329,
              "end": 330,
              "name": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 332,
              "end": 339,
              "name": {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "name": "TChange",
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
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 352,
            "end": 375,
            "expression": {
              "type": "Identifier",
              "start": 352,
              "end": 363,
              "name": "IObservable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 363,
              "end": 375,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 364,
                  "end": 365,
                  "typeName": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 367,
                  "end": 374,
                  "typeName": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 374,
                    "name": "TChange",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "abstract": true,
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
      "start": 450,
      "end": 604,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 457,
        "end": 604,
        "id": {
          "type": "Identifier",
          "start": 472,
          "end": 486,
          "name": "BaseObservable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 514,
          "end": 534,
          "name": "ConvenientObservable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 547,
          "end": 604,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 550,
              "end": 602,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 569,
                "end": 578,
                "name": "observers",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "NewExpression",
                "start": 581,
                "end": 601,
                "callee": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 588,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 588,
                  "end": 599,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 589,
                      "end": 598,
                      "typeName": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 598,
                        "name": "IObserver",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "typeAnnotation": null,
              "accessibility": "protected"
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 486,
          "end": 505,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 487,
              "end": 488,
              "name": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 490,
              "end": 504,
              "name": {
                "type": "Identifier",
                "start": 490,
                "end": 497,
                "name": "TChange",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSVoidKeyword",
                "start": 500,
                "end": 504
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": true,
        "declare": false,
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 534,
          "end": 546,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 535,
              "end": 536,
              "typeName": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 538,
              "end": 545,
              "typeName": {
                "type": "Identifier",
                "start": 538,
                "end": 545,
                "name": "TChange",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
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
