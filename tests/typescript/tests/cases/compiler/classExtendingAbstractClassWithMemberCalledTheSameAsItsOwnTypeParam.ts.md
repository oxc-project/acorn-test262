__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 604,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "IObserver",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "handleChange",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TChange",
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
                "start": 48,
                "end": 83,
                "decorators": [],
                "name": "observable",
                "optional": false,
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
                      "decorators": [],
                      "name": "IObservable",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "TChange",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 85,
                "end": 100,
                "decorators": [],
                "name": "change",
                "optional": false,
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
                      "decorators": [],
                      "name": "TChange",
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
        "decorators": [],
        "name": "IObservable",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "TChange",
              "optional": false,
              "typeAnnotation": null
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
      "extends": [],
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
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "TChange",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TChange",
                  "optional": false,
                  "typeAnnotation": null
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
          "decorators": [],
          "name": "IReader",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "readObservable",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
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
                  "start": 246,
                  "end": 277,
                  "decorators": [],
                  "name": "observable",
                  "optional": false,
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
                        "decorators": [],
                        "name": "IObservable",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
                  }
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 286,
      "end": 448,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 293,
        "end": 448,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 308,
          "end": 328,
          "decorators": [],
          "name": "ConvenientObservable",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TChange",
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
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 352,
            "end": 375,
            "expression": {
              "type": "Identifier",
              "start": 352,
              "end": 363,
              "decorators": [],
              "name": "IObservable",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TChange",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 376,
          "end": 448,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 379,
              "end": 419,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 383,
                "end": 390,
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 390,
                "end": 419,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
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
                      "decorators": [],
                      "name": "TChange",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
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
                "expression": false
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "TSAbstractMethodDefinition",
              "start": 421,
              "end": 446,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 437,
                "end": 440,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 440,
                "end": 446,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
        "abstract": true,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 450,
      "end": 604,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 457,
        "end": 604,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 472,
          "end": 486,
          "decorators": [],
          "name": "BaseObservable",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null
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
        "superClass": {
          "type": "Identifier",
          "start": 514,
          "end": 534,
          "decorators": [],
          "name": "ConvenientObservable",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 547,
          "end": 604,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 550,
              "end": 602,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 569,
                "end": 578,
                "decorators": [],
                "name": "observers",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "start": 581,
                "end": 601,
                "callee": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 588,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "decorators": [],
                        "name": "IObserver",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": []
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "protected"
            }
          ]
        },
        "abstract": true,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
