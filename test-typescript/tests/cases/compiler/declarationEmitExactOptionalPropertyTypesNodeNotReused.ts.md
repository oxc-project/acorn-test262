__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 399,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 21,
        "name": "InexactOptionals",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 27,
        "end": 217,
        "types": [
          {
            "type": "TSMappedType",
            "start": 27,
            "end": 147,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 34,
              "end": 46,
              "name": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 39,
                "end": 46,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 45,
                  "end": 46,
                  "typeName": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "name": "A",
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
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 68,
                  "end": 69,
                  "typeName": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 71,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 79,
                "end": 84
              }
            },
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
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 106,
                  "end": 107,
                  "typeName": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 108,
                  "end": 109,
                  "typeName": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 119,
                      "end": 120,
                      "typeName": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 120,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 124,
                    "end": 133
                  }
                ]
              },
              "falseType": {
                "type": "TSIndexedAccessType",
                "start": 140,
                "end": 144,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 142,
                  "end": 143,
                  "typeName": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "optional": true,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 39,
              "end": 46,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 46,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "TSMappedType",
            "start": 150,
            "end": 217,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 157,
              "end": 169,
              "name": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 162,
                "end": 169,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 168,
                  "end": 169,
                  "typeName": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "name": "A",
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
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 191,
                  "end": 192,
                  "typeName": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 193,
                  "end": 194,
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "start": 198,
                "end": 203
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 207,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 210,
              "end": 214,
              "objectType": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 162,
              "end": 169,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 220,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 227,
        "name": "In",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 230,
        "end": 288,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 236,
            "end": 249,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 239,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 254,
            "end": 266,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 265,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 259,
                "end": 265
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 271,
            "end": 286,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 274,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 285,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 276,
                "end": 285
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
      "start": 290,
      "end": 321,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 298,
        "name": "Out",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 301,
        "end": 321,
        "typeName": {
          "type": "Identifier",
          "start": 301,
          "end": 317,
          "name": "InexactOptionals",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 317,
          "end": 321,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 318,
              "end": 320,
              "typeName": {
                "type": "Identifier",
                "start": 318,
                "end": 320,
                "name": "In",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 332,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 335,
            "end": 369,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 349,
              "end": 369,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 350,
                  "end": 360,
                  "name": "x",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 353,
                            "end": 356,
                            "name": "Out",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 359,
                          "end": 360,
                          "typeName": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 360,
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
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Literal",
                "start": 365,
                "end": 369,
                "value": null,
                "raw": "null"
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 335,
              "end": 343,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 336,
                  "end": 342,
                  "name": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "start": 340,
                    "end": 342,
                    "members": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 371,
      "end": 398,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 378,
        "end": 398,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 384,
            "end": 398,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 390,
              "name": "baddts",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 393,
              "end": 398,
              "callee": {
                "type": "Identifier",
                "start": 393,
                "end": 396,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
