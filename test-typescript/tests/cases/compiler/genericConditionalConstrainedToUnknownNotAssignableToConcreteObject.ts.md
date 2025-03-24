__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 475,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
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
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 27,
      "end": 68,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 47,
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 58,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 58,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 51,
              "end": 58
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 61,
          "end": 67,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 70,
      "end": 130,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 87,
        "decorators": [],
        "name": "FunctionsObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 93,
        "end": 130,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 105,
          "end": 112,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 111,
            "end": 112,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 115,
          "end": 128,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 128,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 121,
              "end": 128
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 242,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 242,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 240,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 233,
              "end": 239,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 237,
                "end": 239,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 199,
          "end": 219,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 219,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 219,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 213,
                "end": 219,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 214,
                    "end": 218,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 216,
                      "end": 217,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 217,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 214,
                      "end": 215,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 215,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 213,
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 221,
          "end": 225,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 225,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 173,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 173,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 170,
                "end": 173,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 171,
                    "end": 172,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
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
                "start": 158,
                "end": 170,
                "decorators": [],
                "name": "FunctionsObj",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 196,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 189,
              "end": 196,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 196,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 287,
      "end": 475,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 377,
        "end": 475,
        "body": [
          {
            "type": "IfStatement",
            "start": 383,
            "end": 473,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 396,
              "end": 473,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 436,
                  "end": 440,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 436,
                    "end": 440,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 438,
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 440,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 387,
              "end": 394,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 391,
                  "end": 393,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 387,
                "end": 390,
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 298,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 355,
          "end": 375,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 359,
              "end": 375,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 369,
                "end": 375,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 370,
                    "end": 374,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 372,
                      "end": 373,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 373,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 370,
                      "end": 371,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 359,
                "end": 369,
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 298,
        "end": 354,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 304,
            "end": 329,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 314,
              "end": 329,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 326,
                "end": 329,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 327,
                    "end": 328,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 328,
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
                "start": 314,
                "end": 326,
                "decorators": [],
                "name": "FunctionsObj",
                "optional": false,
                "typeAnnotation": null
              }
            },
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
          },
          {
            "type": "TSTypeParameter",
            "start": 335,
            "end": 352,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 345,
              "end": 352,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 351,
                "end": 352,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
