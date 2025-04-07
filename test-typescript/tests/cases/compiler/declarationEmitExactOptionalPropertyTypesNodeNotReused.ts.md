__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 398,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 218,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 21,
        "decorators": [],
        "name": "InexactOptionals",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 27,
        "end": 217,
        "types": [
          {
            "type": "TSMappedType",
            "start": 27,
            "end": 147,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 39,
              "end": 46,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 46,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": {
              "type": "TSConditionalType",
              "start": 50,
              "end": 84,
              "checkType": {
                "type": "TSUndefinedKeyword",
                "start": 50,
                "end": 59
              },
              "extendsType": {
                "type": "TSIndexedAccessType",
                "start": 68,
                "end": 72,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 71,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 68,
                  "end": 69,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 79,
                "end": 84
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "optional": true,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 88,
              "end": 144,
              "checkType": {
                "type": "TSUndefinedKeyword",
                "start": 88,
                "end": 97
              },
              "extendsType": {
                "type": "TSIndexedAccessType",
                "start": 106,
                "end": 110,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 108,
                  "end": 109,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 106,
                  "end": 107,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "falseType": {
                "type": "TSIndexedAccessType",
                "start": 140,
                "end": 144,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 142,
                  "end": 143,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "trueType": {
                "type": "TSUnionType",
                "start": 117,
                "end": 133,
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 117,
                    "end": 121,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 119,
                      "end": 120,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 120,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 124,
                    "end": 133
                  }
                ]
              }
            }
          },
          {
            "type": "TSMappedType",
            "start": 150,
            "end": 217,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 162,
              "end": 169,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": {
              "type": "TSConditionalType",
              "start": 173,
              "end": 207,
              "checkType": {
                "type": "TSUndefinedKeyword",
                "start": 173,
                "end": 182
              },
              "extendsType": {
                "type": "TSIndexedAccessType",
                "start": 191,
                "end": 195,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 193,
                  "end": 194,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 191,
                  "end": 192,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 207,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "start": 198,
                "end": 203
              }
            },
            "optional": null,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 210,
              "end": 214,
              "indexType": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 213,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 211,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "A",
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
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
      "type": "TSTypeAliasDeclaration",
      "start": 220,
      "end": 288,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 227,
        "decorators": [],
        "name": "In",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 230,
        "end": 288,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 236,
            "end": 249,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 239,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 254,
            "end": 266,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 265,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 259,
                "end": 265
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 271,
            "end": 286,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 274,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 285,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 276,
                "end": 285
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 290,
      "end": 321,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 298,
        "decorators": [],
        "name": "Out",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 301,
        "end": 321,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 317,
          "end": 321,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 318,
              "end": 320,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 318,
                "end": 320,
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 301,
          "end": 317,
          "decorators": [],
          "name": "InexactOptionals",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 369,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 369,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 332,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 335,
            "end": 369,
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 349,
              "end": 369,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 365,
                "end": 369,
                "raw": "null",
                "value": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 350,
                  "end": 360,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 360,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 353,
                      "end": 360,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 353,
                          "end": 356,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 353,
                            "end": 356,
                            "decorators": [],
                            "name": "Out",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 359,
                          "end": 360,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 360,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 335,
              "end": 343,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 336,
                  "end": 342,
                  "const": false,
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "start": 340,
                    "end": 342,
                    "members": []
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 371,
      "end": 398,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 378,
        "end": 398,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 384,
            "end": 398,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 390,
              "decorators": [],
              "name": "baddts",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 393,
              "end": 398,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 393,
                "end": 396,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
