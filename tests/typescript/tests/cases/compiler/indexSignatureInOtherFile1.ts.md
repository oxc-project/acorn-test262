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
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 42,
            "end": 57,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 88,
        "decorators": [],
        "name": "ArrayConstructor1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 134,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 93,
            "end": 132,
            "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
                  "decorators": [],
                  "name": "Array1",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 174,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 173,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 173,
                  "decorators": [],
                  "name": "ArrayConstructor1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 193,
      "end": 260,
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
            "name": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 213,
        "end": 260,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 217,
            "end": 258,
            "key": {
              "type": "MemberExpression",
              "start": 218,
              "end": 233,
              "object": {
                "type": "Identifier",
                "start": 218,
                "end": 224,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 225,
                "end": 233,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 257,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 254,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 254,
                  "end": 257,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 256,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 256,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
      "start": 287,
      "end": 643,
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
            "name": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 307,
        "end": 643,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 448,
            "end": 641,
            "key": {
              "type": "MemberExpression",
              "start": 449,
              "end": 467,
              "object": {
                "type": "Identifier",
                "start": 449,
                "end": 455,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 456,
                "end": 467,
                "decorators": [],
                "name": "unscopables",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 490,
                      "decorators": [],
                      "name": "copyWithin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 490,
                      "end": 499,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 492,
                        "end": 499
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 507,
                    "end": 524,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 514,
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 514,
                      "end": 523,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 516,
                        "end": 523
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 531,
                    "end": 545,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 535,
                      "decorators": [],
                      "name": "fill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 535,
                      "end": 544,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 537,
                        "end": 544
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 552,
                    "end": 566,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 556,
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 556,
                      "end": 565,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 558,
                        "end": 565
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 573,
                    "end": 592,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 582,
                      "decorators": [],
                      "name": "findIndex",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 582,
                      "end": 591,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 584,
                        "end": 591
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 599,
                    "end": 613,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 599,
                      "end": 603,
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 603,
                      "end": 612,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 605,
                        "end": 612
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 620,
                    "end": 636,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 626,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 626,
                      "end": 635,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 628,
                        "end": 635
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 53,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 30,
            "end": 51,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
