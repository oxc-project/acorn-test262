__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 644,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 42,
            "end": 57,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 43,
                "end": 52,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "T",
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
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "T",
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
      "start": 61,
      "end": 134,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 134,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 93,
            "end": 132,
            "params": [
              {
                "type": "Identifier",
                "start": 97,
                "end": 117,
                "decorators": [],
                "name": "arrayLength",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 109,
                  "end": 117,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 111,
                    "end": 117
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 131,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 126,
                  "end": 131,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
                  "decorators": [],
                  "name": "Array1",
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
        "start": 71,
        "end": 88,
        "decorators": [],
        "name": "ArrayConstructor1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 173,
            "decorators": [],
            "name": "Array1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 173,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 173,
                  "decorators": [],
                  "name": "ArrayConstructor1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 193,
      "end": 260,
      "body": {
        "type": "TSInterfaceBody",
        "start": 213,
        "end": 260,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 217,
            "end": 258,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 218,
              "end": 233,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 218,
                "end": 224,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 225,
                "end": 233,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 257,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 254,
                  "end": 257,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 256,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 256,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 254,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 209,
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 209,
        "end": 212,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 210,
            "end": 211,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "T",
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
      "start": 287,
      "end": 643,
      "body": {
        "type": "TSInterfaceBody",
        "start": 307,
        "end": 643,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 448,
            "end": 641,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 449,
              "end": 467,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 449,
                "end": 455,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 456,
                "end": 467,
                "decorators": [],
                "name": "unscopables",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 472,
                "end": 640,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 480,
                    "end": 500,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 490,
                      "decorators": [],
                      "name": "copyWithin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 490,
                      "end": 499,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 492,
                        "end": 499
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 507,
                    "end": 524,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 514,
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 514,
                      "end": 523,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 516,
                        "end": 523
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 531,
                    "end": 545,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 535,
                      "decorators": [],
                      "name": "fill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 535,
                      "end": 544,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 537,
                        "end": 544
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 552,
                    "end": 566,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 556,
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 556,
                      "end": 565,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 558,
                        "end": 565
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 573,
                    "end": 592,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 582,
                      "decorators": [],
                      "name": "findIndex",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 582,
                      "end": 591,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 584,
                        "end": 591
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 599,
                    "end": 613,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 599,
                      "end": 603,
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 603,
                      "end": 612,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 605,
                        "end": 612
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 620,
                    "end": 636,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 626,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 626,
                      "end": 635,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 628,
                        "end": 635
                      }
                    }
                  }
                ]
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 303,
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 303,
        "end": 306,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 304,
            "end": 305,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
  "end": 53,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 53,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 53,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 30,
            "end": 51,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 42,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 36,
                    "end": 42
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
