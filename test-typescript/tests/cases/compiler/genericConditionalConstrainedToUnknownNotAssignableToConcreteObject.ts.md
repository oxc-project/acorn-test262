__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 476,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
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
      "type": "TSDeclareFunction",
      "start": 27,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 47,
        "name": "isA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 58,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 58,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 51,
              "end": 58
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 61,
          "end": 67,
          "parameterName": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 70,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 87,
        "name": "FunctionsObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 93,
        "end": 130,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 100,
          "end": 112,
          "name": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 105,
            "end": 112,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 111,
              "end": 112,
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "T",
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
          "type": "TSFunctionType",
          "start": 115,
          "end": 128,
          "typeParameters": null,
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
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 105,
          "end": 112,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 111,
            "end": 112,
            "typeName": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 199,
          "end": 219,
          "name": "a2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 219,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 219,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 213,
                "name": "ReturnType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 213,
                "end": 219,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 214,
                    "end": 218,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 214,
                      "end": 215,
                      "typeName": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 215,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 216,
                      "end": 217,
                      "typeName": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 217,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
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
          "start": 221,
          "end": 225,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "name": "A",
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
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 242,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 240,
            "expression": {
              "type": "AssignmentExpression",
              "start": 233,
              "end": 239,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 237,
                "end": 239,
                "name": "a2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 173,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 173,
              "typeName": {
                "type": "Identifier",
                "start": 158,
                "end": 170,
                "name": "FunctionsObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 170,
                "end": 173,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 171,
                    "end": 172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 196,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 189,
              "end": 196,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "T",
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 287,
      "end": 475,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 298,
        "name": "g2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 355,
          "end": 375,
          "name": "a2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 359,
              "end": 375,
              "typeName": {
                "type": "Identifier",
                "start": 359,
                "end": 369,
                "name": "ReturnType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 369,
                "end": 375,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 370,
                    "end": 374,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 370,
                      "end": 371,
                      "typeName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 372,
                      "end": 373,
                      "typeName": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 373,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 377,
        "end": 475,
        "body": [
          {
            "type": "IfStatement",
            "start": 383,
            "end": 473,
            "test": {
              "type": "CallExpression",
              "start": 387,
              "end": 394,
              "callee": {
                "type": "Identifier",
                "start": 387,
                "end": 390,
                "name": "isA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 391,
                  "end": 393,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 396,
              "end": 473,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 436,
                  "end": 440,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 436,
                    "end": 440,
                    "object": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 438,
                      "name": "a2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 440,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 298,
        "end": 354,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 304,
            "end": 329,
            "name": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 314,
              "end": 329,
              "typeName": {
                "type": "Identifier",
                "start": 314,
                "end": 326,
                "name": "FunctionsObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 326,
                "end": 329,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 327,
                    "end": 328,
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 328,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 335,
            "end": 352,
            "name": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 345,
              "end": 352,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 351,
                "end": 352,
                "typeName": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
                  "name": "T",
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
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
